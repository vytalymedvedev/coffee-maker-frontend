<script>
import RadioButtonGroup from './RadioButtonGroup.vue'

const MACHINE_SIZES = ['стандарт', 'большая']

export default {
  name: 'CoffeeMachineSettings',
  components: {
    RadioButtonGroup
  },
  data() {
    return {
      sizes: MACHINE_SIZES,
      selectedSize: MACHINE_SIZES[0],
      selectedDrinksAmount: 6,
      drinks: [6, 8, 10]
    }
  },
  computed: {
    title() {
      return `Кофемашина ${this.selectedSize} на ${this.selectedDrinksAmount} напитков`
    },
    imgSrc() {
      return this.selectedSize === MACHINE_SIZES[0]
        ? 'coffee_machine_default.jpg'
        : 'coffee_machine_big.jpeg'
    }
  },
  methods: {
    setSize(option) {
      this.selectedSize = option
    },
    setDrinksAmount(option) {
      this.selectedDrinksAmount = option
    }
  }
}
</script>

<template>
  <h1>{{ title }}</h1>
  <div class="machine-settings">
    <div>
      <img :src="imgSrc" alt="coffe machine" class="machine-img" />
    </div>

    <form>
      <div>
        <h2>Выберите размер кофемашины</h2>
        <RadioButtonGroup @change="setSize" :options="sizes" :value="selectedSize" name="sizes" />
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
  flex-direction: column;
}

@media screen and (min-width: 768px) {
  .machine-settings {
    flex-direction: row;
  }
}
</style>
