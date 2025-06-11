<template>
  <div
    class="blog-cart"
    :style="backgroundStyle"
    @click="goToPost"
  >
    <div class="blog-content">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <span class="read-more">Read more →</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'description', 'slug', 'image'],
  methods: {
    goToPost() {
      this.$router.push(`/portfolio/blog/${this.slug}`);
    }
  },
  computed: {
    backgroundStyle() {
      if (this.image) {
        // Dynamically import local image
        try {
          const imageUrl = new URL(`../assets/blogs/${this.image}`, import.meta.url).href;
          return {
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          };
        } catch (err) {
          console.warn('Image not found:', this.image);
        }
      }
      // Fallback to slanted pattern
      return {
        background: `repeating-linear-gradient(
          45deg,
          #f3f3f3,
          #f3f3f3 10px,
          #e0e0e0 10px,
          #e0e0e0 20px
        )`
      };
    }
  }
};
</script>

<style scoped>

.blog-cart {
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.05);
  cursor: pointer;
  min-height: 180px;
  display: flex;
  align-items: flex-end;
  transition: transform 0.2s ease;
  color: #000;
}
.blog-cart:hover {
  transform: translateY(-4px);
}
.blog-content {
  background-color: rgba(255, 255, 255, 0.85);
  padding: 0.5rem;
  border-radius: 8px;
  width: 100%;
}
.read-more {
  display: inline-block;
  margin-top: 0.5rem;
  color: #fff;
  background-color: #007acc;
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  font-size: 0.85rem;
}
.read-more:hover {
  background-color: #005fa3;
}

</style>
