<template>
  <div class="blog-post">
    <!-- Custom Title Block -->
    <div class="blog-title-banner">
      <h3 class="blog-title-text">{{ title }}</h3>
    </div>

    <!-- Render Markdown Content -->
    <div class="blog-content" v-html="content" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { marked } from 'marked';

export default defineComponent({
  name: 'BlogPost',
  props: {
    slug: String
  },
  data() {
    return {
      title: '',
      content: ''
    };
  },
  async created() {
    if (!this.slug) return;

    const titleMap : { [key: string]: string } = {
      "deploying-to-gh-pages" : "Deploying Vue App to GitHub Pages"
    };

    if (titleMap.hasOwnProperty(this.slug)) {
      this.title = titleMap[this.slug];
    } else {
      this.title = this.slug
        .replace(/-/g, ' ')
        .replace(/\b\w/g, l => l.toUpperCase()); // Capitalize
    }

    try {
      const mdUrl = new URL(`../assets/blogs/${this.slug}.md`, import.meta.url);
      const response = await fetch(mdUrl);
      const raw = await response.text();
      this.content = await marked.parse(raw);
    } catch (err) {
      this.content = `<p><em>Blog post not found or failed to load.</em></p>`;
    }
  }
});
</script>

<style>
.blog-post {
  padding: 2rem;
  max-width: 800px;
  margin: 0px auto;
}

.blog-title-banner {
  background: #eef6ff;
  padding: 1rem 1.75rem;
  text-align: center;
  border-bottom: 2px solid #d0e7ff;
  margin-bottom: 2rem;
  border-radius: 1rem;
}

.blog-title-text {
  margin: 0;
  font-size: 1.75rem;
  font-weight: bold;
  color: #003366;
}

.blog-post {
  font-family: system-ui, sans-serif;
  line-height: 1.7;
}

.blog-content h1,
.blog-content h2,
.blog-content h3 {
  color: #1e3a8a;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.blog-content p {
  margin: 1rem 0;
}

.blog-content pre {
  background-color: #1e1e1e;
  color: #f8f8f2;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  font-family: 'Fira Code', monospace;
  margin-bottom: 1.5rem;
}

.blog-content code {
  background-color: #2d2d2d;
  color: #ff7f50;
  padding: 0.2em 0.4em;
  border-radius: 4px;
  font-family: 'Fira Code', monospace;
}

.blog-content blockquote {
  border-left: 4px solid #ccc;
  padding-left: 1rem;
  color: #555;
  font-style: italic;
  margin: 1.5rem 0;
  background: #f9f9f9;
}

</style>
