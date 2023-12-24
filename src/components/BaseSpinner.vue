<script>
export default {
  name: 'BaseSpinner'
}
</script>
<template>
  <div class="base-spinner"></div>
</template>
<style scoped>
.base-spinner {
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 3px solid var(--spinner-segment-color);
  border-radius: 50%;
  border-top-color: var(--spinner-track-color);
  border-right-color: var(--spinner-track-color);
  animation: spin 0.8s infinite linear;
  -webkit-animation: spin 0.8s infinite linear;
}

@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
</style>