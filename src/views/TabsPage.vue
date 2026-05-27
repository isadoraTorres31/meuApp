<template>

  <IonPage>
    <IonTabs>
      <IonRouterOutlet />

      <IonTabBar slot="bottom">
        <IonTabButton tab="tarefas" href="/tabs/tarefas">
          <IonIcon :icon="checkboxOutline" />
          <IonLabel>Tarefas</IonLabel>
        </IonTabButton>
    
        <IonTabButton tab="perfil" href="/tabs/perfil">
          <IonIcon :icon="personOutline" />
          <IonLabel>Perfil</IonLabel>
        </IonTabButton>
        
      </IonTabBar>
    </IonTabs>
  </IonPage>

</template>
