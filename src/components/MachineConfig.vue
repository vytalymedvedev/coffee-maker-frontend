<script>
import BaseButton from '@/components/BaseButton.vue'

export default {
  name: 'MachineConfig',
  components: {
    BaseButton
  },
  props: {
    id: {
      type: Number
    },
    drink_capacity: {
      type: Number
    },
    amount: {
      type: Number
    }
  },
  data() {
    return {
      currentValue: this.amount,
    }
  },
  computed: {
    capacityLabel() {
      return `Количество напитков: ${this.drink_capacity}`;
    },
    disableSaveButton() {
      return this.currentValue === this.amount;
    }
  },
}
</script>

<template>
  <div class="config">
    <div class="config__column">
      {{ this.capacityLabel }}
    </div>
    <div class="config__toggle">
      <div class="config__column config__label">Количество машин:</div>
      
      <BaseButton @click="currentValue--" class="config__button">
        <template v-slot:icon>
          <img src="/minus.svg" alt="plus icon" class="config__icon-button">
        </template>
      </BaseButton>
      
      <div class="config__column config__amount">{{ currentValue }}</div>

      <BaseButton @click.stop="currentValue++" class="config__button">
        <template v-slot:icon>
          <img src="/plus.svg" alt="plus icon" class="config__icon-button">
        </template>
      </BaseButton>
    </div>

    <div>
      <BaseButton @click="$emit('updateAmount', {id, amount: currentValue})" :disabled="disableSaveButton" class="config__button">
        <template v-slot:text>
          Сохранить
        </template>
      </BaseButton>
    </div>
  </div>
</template>

<style scoped>
.config {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1rem;
  font-size: 20px;
  gap: 1rem;

  text-align: center;
}

.config__column {
  display: flex;
  align-items: center;
}

.config__toggle {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.config__icon-button {
  width: 32px;
}

.config__button {
  padding: 12px;
}

.config__amount, .config__label {
  padding: 0 0.5rem;
}

.config__amount {
  justify-content: center;
}
</style>

