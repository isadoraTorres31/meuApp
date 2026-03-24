<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>
        {{ tarefa.texto }}
      </ion-card-title>
    </ion-card-header>

    <ion-card-content>
      <p>Status: {{ tarefa.feita ? 'Concluída' : 'Pendente' }}</p>

      <ion-button @click="toggleFeita">
        {{ tarefa.feita ? 'Marcar como pendente' : 'Concluir' }}
      </ion-button>

      <ion-button color="danger" @click="removerTarefa">
        Remover
      </ion-button>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
interface Tarefa {
  id: number
  texto: string
  feita: boolean
}

const props = defineProps<{
  tarefa: Tarefa
}>()

const emit = defineEmits<{
  remover: [id: number]
  concluir: [id: number, feita: boolean]
}>()

function removerTarefa() {
  emit('remover', props.tarefa.id)
}

function toggleFeita() {
  emit('concluir', props.tarefa.id, !props.tarefa.feita)
}
</script>