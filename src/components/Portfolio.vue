<template>
  <section class="hero">
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
</template>

<script>
export default {
  name: "Portfolio",
  data() {
    return {
      name: "Thirumurugan",
      title: "Browser Developer | C++ | Python | Java",
      image: "profile.jpg"
    };
  }
};
</script>

<style scoped>
.hero {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 4rem 6rem;
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

.image-wrapper {
	margin-top: 100px;
}

</style>
