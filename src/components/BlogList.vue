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
        },
        {
          title: "Largest Divisible Subset — Graph + DFS Approach",
          description: "Build a graph where each number points to divisible numbers. Use DFS to find the longest divisible chain.",
          slug: "dfs-largest-divisable-subset",
          image: "dfs-largest-divisable-subset.png"
        },
        {
          title: "Scramble String Problem",
          description: "The Scramble String problem checks if one string can be transformed into another by recursively swapping non-empty substrings.",
          slug: "dp-scramble-string",
          image: "dp-scramble-string.png"
        },
        {
          title: "Stone Game V Solution",
          description: "The Stone Game V problem involves finding the maximum score Alice can achieve by optimally splitting the array of stones based on prefix sums and recursively choosing the smaller partition.",
          slug: "dp-stone-game-v",
          image: "dp-stone-game-v.png"
        },
        {
          title: "Stone Game Solution",
          description: "The Stone Game problem determines if the first player (Alice) can always win by playing optimally in a game where players pick stones from either end of a row.",
          slug: "dp-stone-game",
          image: "dp-stone-game.png"
        },
        {
          title: "Visit Array Positions to Maximize Score",
          description: "The Visit Array Positions to Maximize Score problem requires tracking the maximum score while jumping through the array based on parity, using dynamic programming with separate states for even and odd numbers.",
          slug: "dp-visit-array-positions-to-maximize-score",
          image: "dp-visit-array-positions-to-maximize-score.png"
        },
        {
          title: "Minimizing the Sum by Forming Two Numbers from Digits",
          description: "The Minimizing the Sum by Forming Two Numbers from Digits problem involves rearranging digits to form two numbers whose sum is minimized, often solved using a greedy approach.",
          slug: "greedy-minimum-sum",
          image: "greedy-minimum-sum.png"
        },
        {
          title: "Catch the Thieves (Greedy Algorithm)",
          description: "The Stone Game problem determines if the first player (Alice) can always win by playing optimally in a game where players pick stones from either end of a row.",
          slug: "greedy-police-and-thieves",
          image: "greedy-police-and-thieves.png"
        },
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
