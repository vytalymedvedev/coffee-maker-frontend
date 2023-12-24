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
  <div class="page-layout">
    <header>
      <div class="wrapper">
        <nav class="nav">
          <RouterLink to="/" class="router-link">Настройка кофемашины</RouterLink>
          <RouterLink to="/configs" class="router-link">Конфигурации</RouterLink>
        </nav>
      </div>
    </header>

    <main>
      <div class="main-content">
        <RouterView />
      </div>
    </main>
  </div>
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

.main-content {
  padding: 2rem;
  padding-bottom: 0;
}

.router-link {
  padding: 1rem;
  border-radius: 2rem;
  border: 2px solid black;
  color: black;
  text-decoration: none;
}

.router-link:visited {
  color: black;
}

.page-layout {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
