<script>
export default {
  name: 'RadioButton',
  props: {
    option: {
      required: true,
      type: [String, Number]
    },
    value: {
      required: true,
      type: [String, Number],
    },
    name: {
      required: true,
      type: String,
    }
  },
  computed: {
    isChecked() {
      return this.option === this.value;
    }
  }
}
</script>

<template>
  <label :for="option" class="wrapper flex items-center">
    <input
      type="radio"
      @change.stop="$emit('change', option)"
      :checked="isChecked"
      :id="option"
      name
      class="checkbox"
    />
    {{ option }}
    <span class="checkmark"></span>
  </label>
</template>

<style scoped>
.wrapper {
  display: block;
  position: relative;
  padding-left: 2rem;
  margin-bottom: 6px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 16px;
}

.wrapper .checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #eee;
  border: 1px solid #ccc;
}

.wrapper:hover .checkbox ~ .checkmark {
  background-color: #ccc;
}

.wrapper .checkbox:checked ~ .checkmark {
  background-color: #2b2b2b;
}
/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}
/* Show the indicator (dot/circle) when checked */
.wrapper .checkbox:checked ~ .checkmark:after {
  display: block;
}
/* Style the indicator (dot/circle) */
.wrapper .checkmark:after {
  top: 5px;
  left: 5px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #eee;
}
</style>
