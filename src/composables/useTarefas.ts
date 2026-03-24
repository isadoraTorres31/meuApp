import { ref, computed, watch } from 'vue'

export interface Tarefa {
  id: number
  texto: string
  feita: boolean
}

export function useTarefas() {
  const tarefas = ref<Tarefa[]>([
    { id: 1, texto: 'Estudar Vue', feita: false },
    { id: 2, texto: 'Fazer atividade', feita: false },
    { id: 3, texto: 'Revisar composição API', feita: true }
  ])

  const busca = ref('')
  const filtro = ref<'todas' | 'pendentes' | 'concluidas'>('todas')

  const pendentes = computed(() => {
    return tarefas.value.filter(t => !t.feita).length
  })

  const filtradas = computed(() => {
    let lista = tarefas.value

    if (filtro.value === 'pendentes') {
      lista = lista.filter(t => !t.feita)
    } else if (filtro.value === 'concluidas') {
      lista = lista.filter(t => t.feita)
    }

    return lista.filter(t =>
      t.texto.toLowerCase().includes(busca.value.toLowerCase())
    )
  })

  function adicionar(texto: string) {
    if (!texto.trim()) return

    tarefas.value.push({
      id: Date.now(),
      texto,
      feita: false
    })
  }

  function remover(id: number) {
    tarefas.value = tarefas.value.filter(t => t.id !== id)
  }

  function concluir(id: number, feita: boolean) {
    const tarefa = tarefas.value.find(t => t.id === id)
    if (tarefa) {
      tarefa.feita = feita
    }
  }

  watch(tarefas, (novoValor) => {
    localStorage.setItem('tarefas', JSON.stringify(novoValor))
  }, { deep: true })

  watch(pendentes, (novoValor) => {
    if (novoValor === 0 && tarefas.value.length > 0) {
      alert('Parabéns! Você concluiu todas as tarefas!')
    }
  })

  return {
    tarefas,
    busca,
    filtro,
    pendentes,
    filtradas,
    adicionar,
    remover,
    concluir
  }
}