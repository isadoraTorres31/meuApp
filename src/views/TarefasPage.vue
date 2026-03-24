<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Lista de Tarefas</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-item>
        <ion-input
          v-model="novaTarefa"
          placeholder="Digite uma tarefa"
        />
        <ion-button @click="adicionarTarefa">Adicionar</ion-button>
      </ion-item>

      <ion-item>
        <ion-input
          v-model="busca"
          placeholder="Buscar tarefa"
        />
      </ion-item>

      <ion-item>
        <ion-select v-model="filtro" placeholder="Filtrar">
          <ion-select-option value="todas">Todas</ion-select-option>
          <ion-select-option value="pendentes">Pendentes</ion-select-option>
          <ion-select-option value="concluidas">Concluídas</ion-select-option>
        </ion-select>
      </ion-item>

      <p>Total de pendentes: {{ pendentes }}</p>

      <CardTarefa
        v-for="tarefa in filtradas"
        :key="tarefa.id"
        :tarefa="tarefa"
        @remover="remover"
        @concluir="concluir"
      />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CardTarefa from '../components/cardTarefa.vue'
import { useTarefas } from '../composables/useTarefas'

const novaTarefa = ref('')

const {
  busca,
  filtro,
  pendentes,
  filtradas,
  adicionar,
  remover,
  concluir
} = useTarefas()

function adicionarTarefa() {
  adicionar(novaTarefa.value)
  novaTarefa.value = ''
}
</script>