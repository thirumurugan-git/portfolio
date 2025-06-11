<template>
  <div id="app">
    <div class="portfolio-wrapper">
      <div class="portfolio">
        <!-- Navigation Links -->
        <nav class="top-links">
          <div class="logo">{{ name }}</div>
          <div class="links">
            <a :href="github" target="_blank">GitHub</a>
            <a :href="linkedin" target="_blank">LinkedIn</a>
            <a @click="$router.push('/portfolio/blog')">Blog</a>
            <a :href="`mailto:${gmail}`">Gmail</a>
          </div>
        </nav>

        <!-- Rendering component -->
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  data() {
    return {
      name: "Thirumurugan",
      github: "https://github.com/thirumurugan-git",
      linkedin: "https://www.linkedin.com/in/thirumurugan-kumar-8620b8189/",
      blog: "https://thirumurugan-git.github.io/portfolio",
      gmail: "thiruak1024@gmail.com",
      image: "profile.jpg"
    }
  }
});
</script>

<style scoped>
:global(html, body) {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100%;
  font-family: 'Segoe UI', sans-serif;
  background: #0f172a;
  color: #f1f5f9;
}

:global(#app) {
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: stretch;
  max-width: unset;
  padding: unset;
}

.portfolio-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.portfolio {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  height: 100%;
  box-sizing: border-box;
  background: linear-gradient(135deg, #0f172a, #1e293b);
}

.top-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1e293b;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #38bdf8;
}

.links a {
  margin-left: 1.5rem;
  text-decoration: none;
  color: #f1f5f9;
  font-weight: 500;
  transition: color 0.3s;
}

.links a:hover {
  color: #38bdf8;
}
</style>
