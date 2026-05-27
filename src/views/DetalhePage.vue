<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Detalhe</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div v-if="tarefa">
        <h2>{{ tarefa.texto }}</h2>
        <p>Status: {{ tarefa.feita ? 'Concluída' : 'Pendente' }}</p>
        <ion-button @click="concluir(tarefa.id, !tarefa.feita)">{
          { tarefa.feita ? 'Marcar pendente' : 'Concluir' }
        }</ion-button>
      </div>
      <ion-button @click="voltar">Voltar</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useIonRouter, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from "@ionic/vue";
import { useTarefas, Tarefa } from "../composables/useTarefas";

const route = useRoute();
const ionRouter = useIonRouter();
const { tarefas, concluir } = useTarefas();
const id = computed(() => Number(route.params.id));
const tarefa = computed(() => tarefas.value.find((t: Tarefa) => t.id === id.value));

function voltar() {
  if (ionRouter.canGoBack()) ionRouter.back();
  else ionRouter.replace("/tabs/tarefas");
}
</script>
