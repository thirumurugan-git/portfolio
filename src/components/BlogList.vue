<template>
  <section class="blog-list">
    <!-- Notification block -->
    <div class="blog-notification">
      📢 Some existing blogs: 
      <a href="https://medium.com/@thiruak1024" target="_blank">Medium</a> |
      <a href="https://thiruak1024.wordpress.com/" target="_blank">Wordpress</a>
    </div>

    <div class="blog-cart-section">
      <BlogCart
        v-for="(post, index) in blogPosts"
        :key="index"
        :title="post.title"
        :description="post.description"
        :slug="post.slug"
        :image="post.image"
      />
    </div>
  </section>
</template>

<script>
import BlogCart from './BlogCart.vue';

export default {
  components: { BlogCart },
  data() {
    return {
      blogPosts: [
        {
          title: "Deploying Vue App to GitHub Pages",
          description: "A quick guide to deploying your Vue.js application to GitHub Pages using automated and manual methods.",
          slug: "deploying-to-gh-pages",
          image: "deploying-to-gh-pages.png"
        }
      ]
    };
  }
};
</script>

<style scoped>

.blog-cart-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

.blog-notification {
  background-color: #fff4cc;
  border: 1px solid #f2c94c;
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 2rem;
  font-size: 0.95rem;
  color: #665200;
}

.blog-notification a {
  font-weight: bold;
  color: #007acc;
  text-decoration: none;
}

.blog-notification a:hover {
  text-decoration: underline;
}

</style>
