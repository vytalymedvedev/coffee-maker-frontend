<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  components: {
    RouterLink,
    RouterView
  }
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="nav">
        <RouterLink to="/" class="router-link">Настройка кофемашины</RouterLink>
        <RouterLink to="/configs" class="router-link">Конфигурации</RouterLink>
      </nav>
    </div>
  </header>

  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped>
.wrapper {
  padding: 2rem;
}

.nav {
  display: flex;
  gap: 1rem;
  font-size: 1rem;
}

.main {
  padding: 2rem;
  margin: 0 auto;
}

.router-link {
  text-decoration: none;
}
</style>
