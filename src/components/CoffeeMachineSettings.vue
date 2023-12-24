<script>
import RadioButtonGroup from './RadioButtonGroup.vue'
import BaseButton from './BaseButton.vue'
import BaseSpinner from './BaseSpinner.vue'
import { postConfig } from '../api'

const MACHINE_SIZES = ['стандарт', 'большая']

export default {
  name: 'CoffeeMachineSettings',
  components: {
    RadioButtonGroup,
    BaseButton,
    BaseSpinner
},
  data() {
    return {
      sizes: MACHINE_SIZES,
      selectedSize: MACHINE_SIZES[0],
      selectedDrinksAmount: 6,
      drinks: [6, 8, 10],
      showSaveButton: true,
      showSuccessMessage: false,
      showErrorMessage: false,
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
    },
    onClickRepeat() {
      this.showSaveButton = true;
      this.showSuccessMessage = false;
      this.showErrorMessage = false;
    },
    async submitConfig() {
      this.showSaveButton = false;

      try {
        await postConfig(this.selectedSize, this.selectedDrinksAmount );
        this.showSuccessMessage = true;
      } catch (error) {
        this.showErrorMessage = true;
      }
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

    <form @submit.prevent="submitConfig">
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
        <BaseButton v-if="showSaveButton" type="submit" class="form-button">
          <template #text>
            <span>Сохранить</span>
          </template>
        </BaseButton>

        <div v-else class="message">
          <span v-if="showSuccessMessage">Успешно сохранено!</span>
          <span v-else-if="showErrorMessage" class="error">Ошибка!</span>
          <div v-else class="message">
            <BaseSpinner />
            <span>Сохранение...</span>
          </div>

          <BaseButton v-if="showSuccessMessage || showErrorMessage" @click="onClickRepeat">
            <template v-slot:text>
              <span>Попробовать ещё</span>
            </template>
          </BaseButton>
        </div>
        
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
  gap: 2rem;
}

@media screen and (min-width: 768px) {
  .machine-settings {
    flex-direction: row;
  }
}

.form-button, .message {
  margin-top: 2rem;
}

.message {
  display: flex;
  align-items: center;
  gap: 2rem;
  font-size: 20px;
}

.error {
  color: 	var(--error-text-color);
}
</style>
