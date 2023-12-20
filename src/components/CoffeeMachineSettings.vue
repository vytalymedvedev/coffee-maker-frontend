<script>
import RadioButtonGroup from './RadioButtonGroup.vue'

export default {
  name: 'CoffeeMachineSettings',
  components: {
    RadioButtonGroup
},
  data() {
    return {
      selectedSize: 'стандарт',
      sizes: ['стандарт', 'большая'],
      selectedDrinksAmount: 6,
      drinks: [6, 8, 10]
    }
  },
  methods: {
    setSize(option) {
      this.selectedSize = option
    },
    setDrinksAmount(option) {
      this.selectedDrinksAmount = option;
    }
  }
}
</script>

<template>
  <div class="machine-settings">
    <div>
      <img src="/coffee_machine_default.jpg" alt="coffe machine" class="machine-img" />
    </div>

    <form>
      <div>
        <h2>Выберите размер кофемашины</h2>
        <RadioButtonGroup
          @change="setSize"
          :options="sizes"
          :value="selectedSize"
          name="sizes"
        />
      </div>
      
      <div>
        <h2>Выберите количество напитков</h2>
        <RadioButtonGroup
          @change="setDrinksAmount"
          :options="drinks"
          :value="selectedDrinksAmount"
          name="drinks"
          vertical
        />
      </div>
    </form>
  </div>
</template>

<style scoped>
.machine-img {
  max-width: 400px;
}

.machine-settings {
  display: flex;
}
</style>
