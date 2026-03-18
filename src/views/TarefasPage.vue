<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>

        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>

        <ion-title>Tarefas</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <!-- Input -->
      <ion-item>
        <ion-input
          v-model="novaTarefa"
          label="Nova tarefa"
          label-placement="floating"
          placeholder="Digite sua tarefa">
        </ion-input>
      </ion-item>

      <!-- Botão adicionar -->
      <ion-button expand="block" class="ion-margin-top" @click="adicionarTarefa">
        <ion-icon slot="start" :icon="addOutline"></ion-icon>
        Adicionar
      </ion-button>

      <!-- Mensagem vazio -->
      <p v-if="tarefas.length === 0" class="ion-text-center">
        Nenhuma tarefa cadastrada.
      </p>

      <!-- Lista -->
      <ion-list>
        <ion-item v-for="(tarefa, index) in tarefas" :key="index">

          <ion-label>
            {{ tarefa }}
          </ion-label>

          <ion-button
            slot="end"
            fill="clear"
            color="danger"
            @click="removerTarefa(index)">

            <ion-icon :icon="trashOutline"></ion-icon>

          </ion-button>

        </ion-item>
      </ion-list>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonButtons,
  IonBackButton
} from '@ionic/vue'

import { addOutline, trashOutline } from 'ionicons/icons'

// estados
const tarefas = ref<string[]>([])
const novaTarefa = ref('')

// funções
function adicionarTarefa() {
  if (novaTarefa.value.trim() === '') return

  tarefas.value.push(novaTarefa.value)
  novaTarefa.value = ''
}

function removerTarefa(index: number) {
  tarefas.value.splice(index, 1)
}
</script>