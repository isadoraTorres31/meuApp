<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Tarefas</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">

      <div id="container">
        <ion-text color="primary">
          <h1>New Task</h1>
        </ion-text>
      </div>

      <!-- Campo para digitar tarefa -->
      <ion-input
        v-model="novaTarefa"
        placeholder="Enter task name">
      </ion-input>

      <!-- Botão adicionar -->
      <ion-button expand="block" class="ion-margin-top" @click="adicionarTarefa">
        Add Task
      </ion-button>

      <!-- Mensagem se não houver tarefas -->
      <p v-if="tarefas.length === 0" class="ion-text-center">
        Nenhuma tarefa cadastrada.
      </p>

      <!-- Lista de tarefas -->
      <ion-list>
        <ion-item v-for="(tarefa, index) in tarefas" :key="index">
          <ion-label>{{ tarefa }}</ion-label>

          <ion-button
            color="danger"
            size="small"
            @click="removerTarefa(index)">
            Remover
          </ion-button>

        </ion-item>
      </ion-list>

      <!-- Botão voltar -->
      <ion-button expand="block" class="ion-margin-top" @click="$router.push('/')">
        Go Back
      </ion-button>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  IonList,
  IonItem,
  IonLabel,
  IonText
} from '@ionic/vue'

const tarefas = ref<string[]>([])
const novaTarefa = ref('')

function adicionarTarefa() {

  if (novaTarefa.value.trim() === '') {
    return
  }

  tarefas.value.push(novaTarefa.value)

  novaTarefa.value = ''
}

function removerTarefa(index: number) {
  tarefas.value.splice(index, 1)
}
</script>

<style scoped>
#container {
  text-align: center;
  margin-top: 20px;
}
</style>