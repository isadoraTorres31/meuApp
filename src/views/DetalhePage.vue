<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useIonRouter } from "@ionic/vue";
import { storeToRefs } from "pinia";
import { useTarefasStore } from "../stores/tarefas";
const route = useRoute();
const ionRouter = useIonRouter();
const store = useTarefasStore();
const { tarefas } = storeToRefs(store);
const { concluir } = store;
const id = computed(() => Number(route.params.id));
const tarefa = computed(() => tarefas.value.find((t) => t.id === id.value));
function voltar() {
  if (ionRouter.canGoBack()) ionRouter.back();
  else ionRouter.replace("/tabs/tarefas");
}
</script>
