<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Perfil</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-item>
        <ion-label position="stacked">Nome</ion-label>
        <ion-input v-model="nome" placeholder="Seu nome"></ion-input>
      </ion-item>

      <ion-button expand="block" @click="salvar">Salvar</ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue'



const nome = ref('')
const router = useRouter()

function salvar() {
  if (!nome.value.trim()) return
  localStorage.setItem('nome', nome.value.trim())
  router.push('/tabs/tarefas')
}
</script>
