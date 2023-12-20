<script>
import RadioButton from './RadioButton.vue'

export default {
  name: 'RadioButtonGroup',
  components: {
    RadioButton
  },
  props: {
    options: {
      required: true,
      type: Array
    },
    value: {
      required: true,
      type: [String, Number]
    },
    name: {
      required: true,
      type: String
    },
    vertical: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<template>
  <div :class="['radio-buttons', { vertical }]">
    <RadioButton
      v-for="option in options"
      @change="$emit('change', option)"
      :value="value"
      :option="option"
      :key="option"
      name
    />
  </div>
</template>

<style scoped>
.radio-buttons {
  display: flex;
  gap: 2rem;
}

.vertical {
  flex-direction: column;
  gap: 1rem;
}
</style>
