<template>
  <button
    :type="type"
    :disabled="disabled"
    @click="$emit('click')"
    class="button"
  >
    <slot name="icon"/>
    <slot name="text" />
  </button>
</template>

<script>
export default {
  name: 'ButtonPrimary',
  props: {
    disabled: Boolean,
    type: {
      type: String,
      default: 'button'
    }
  },
}
</script>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: var(--button-text-color);
  cursor: pointer;
  border: none;
  border-radius: 32px;
  padding: 20px;
  font-size: 20px;
  line-height: 32px;
  background-color: var(--button-background-color);
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  font-family: inherit;
}

.button:hover {
  background-color: var(--button-hover-color);
}

.button:active {
  background-color: var(--button-active-color);
}

.button:disabled {
  background-color: var(--button-disabled-color);
}
</style>