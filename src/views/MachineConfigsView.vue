<script>
import MachineConfig from '@/components/MachineConfig.vue';
import { getConfigs, patchConfig } from '@/api'

export default {
  name: 'MachineConfigsView',
  components: {
    MachineConfig
  },
  async beforeMount() {
    await this.retrieveData();
  },
  data() {
    return {
      configs: new Map(),
      showErrorMessage: false,
    }
  },
  methods: {
    async retrieveData() {
      try {
        const { data } = await getConfigs();
        this.mapConfig(data);
      } catch (error) {
       this.showErrorMessage = true; 
      }
    },
    mapConfig(array) {
      this.configs = Map.groupBy(array, ({machine_size}) => machine_size);
    },
    sizeLabel(label) {
      return `Размер: ${label}`;
    },
    async updateAmount({id, amount}) {
      try {
        await patchConfig(id, amount);
        await this.retrieveData();
      } catch (error) {
        this.showErrorMessage = true; 
      }
    }
  }
}
</script>

<template>
  <div>
    <h2 v-if="showErrorMessage" class="error">Ошибка! Перезагрузите страницу</h2>
    <h2 v-if="!configs.size">Нет сохранённых конфигураций</h2>
    <div v-for="[machine_size, machines] in configs" :key="machine_size" class="machine-configs">
      <h2>{{ sizeLabel(machine_size) }}</h2>

      <MachineConfig v-for="machine in machines"
        :key="machine.id"
        :id="machine.id"
        :drink_capacity="machine.drink_capacity"
        :amount="machine.amount"
        @updateAmount="updateAmount"
      />
    </div>
  </div>
</template>

<style scoped>
.machine-configs {
  padding: 1rem;
  border-radius: 2rem;
  border: 2px solid black;
  margin-bottom: 1rem;
}

.error {
  color: var(--error-text-color);
}
</style>

