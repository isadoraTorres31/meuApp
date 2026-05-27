<script setup lang="ts">
import { ref } from "vue";
import CardTarefa from "../components/cardTarefa.vue";
import { useTarefas } from "../composables/useTarefas";

import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";

import { alertController } from "@ionic/vue";
async function confirmarExclusao(id: number) {
  const alert = await alertController.create({
    header: "Excluir tarefa?",
    message: "Esta ação não pode ser desfeita.",
    buttons: [
      { text: "Cancelar", role: "cancel" },
      {
        text: "Excluir",
        role: "destructive",
        handler: () => {
          remover(id);
        },
      },
    ],
  });
  await alert.present();
}

const inputTarefa = ref("");

const { busca, filtro, pendentes, filtradas, adicionar, remover, concluir } =
  useTarefas();

const adicionarTarefa = () => {
  adicionar(inputTarefa.value);
  inputTarefa.value = "";
};
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Lista de Tarefas</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-input
        v-model="inputTarefa"
        placeholder="Digite uma tarefa"
      ></ion-input>
      <ion-button @click="adicionarTarefa">Adicionar</ion-button>
      <ion-item> </ion-item>

      <ion-item>
        <ion-input
          :value="busca"
          @ionInput="busca = String($event.detail.value || '')"
          placeholder="Buscar tarefa"
        ></ion-input>
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
        @remover="confirmarExclusao"
        @concluir="concluir"
      />
    </ion-content>
  </ion-page>
</template>
