<template>
  <div class="portfolio-wrapper">
    <div class="portfolio">
      <!-- Navigation Links -->
      <nav class="top-links">
        <div class="logo">{{ name }}</div>
        <div class="links">
          <a :href="github" target="_blank">GitHub</a>
          <a :href="linkedin" target="_blank">LinkedIn</a>
          <a :href="blog" target="_blank">Blog</a>
          <a :href="`mailto:${gmail}`">Gmail</a>
        </div>
      </nav>

      <!-- Hero Section -->
      <section class="hero">
        <!-- <div class="hero-text">
          <h1>Hi, I'm {{ name }}</h1>
          <h2>{{ title }}</h2>
          <p>
            I'm an IT professional passionate about solving problems through code. I specialize in:
          </p>
          <ul>
            <li>💻 C++ – Systems & performance-critical development</li>
            <li>🐍 Python – Scripting, automation, backend APIs</li>
            <li>☕ Java – Enterprise applications & Android</li>
          </ul>
        </div> -->
		<section class="hero-text">
		  <h1>Hi, I'm {{ name }}</h1>
          <h2>{{ title }}</h2>
          <p>
            Chromium and Brave contributor with expertise in C++, Python, Java, and Rust integration. Passionate FOSS advocate and Linux user.
          </p>
          <ul>
            <li>🧠 Chromium developer with deep systems-level experience</li>
            <li>🦁 Brave Software contributor for privacy-first web tech</li>
            <li>🔧 Rust integration & logging in cross-language systems</li>
            <li>🐍 Contributions to CPython and image-png module</li>
            <li>🐧 Dedicated Linux user and open-source contributor</li>
          </ul>
		</section>
		<div class="image-wrapper">
	        <img :src="image" alt="My Photo" class="hero-image" />
		</div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      name: "Thirumurugan",
      title: "Browser Developer | C++ | Python | Java",
      github: "https://github.com/thirumurugan-git",
      linkedin: "https://www.linkedin.com/in/thirumurugan-kumar-8620b8189/",
      blog: "https://thirumurugan-git.github.io/portfolio",
      gmail: "thiruak1024@gmail.com",
      image: "profile.jpg" // place image in `public/` or use full URL
    };
  }
};
</script>

<style scoped>
:global(html, body) {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  background: #0f172a;
  color: #f1f5f9;
}

:global(#app) {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: stretch;
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

.hero {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 4rem 6rem;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  gap: 2rem;
  height: 100%;
  box-sizing: border-box;
}

.hero-text {
  flex: 1;
  min-width: 300px;
}

.hero-text h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: #38bdf8;
}

.hero-text h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #f1f5f9;
}

.hero-text p {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #cbd5e1;
}

.hero-text ul {
  list-style: none;
  padding: 0;
  color: #cbd5e1;
}

.hero-text li {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.hero-image {
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #38bdf8;
  align-items: center;
}

:global(#app) {
	max-width: unset;
	padding: unset;
}

.image-wrapper {
	margin-top: 100px;
}

</style>
