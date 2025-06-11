import { createRouter, createWebHistory } from 'vue-router';
import Portfolio from '../components/Portfolio.vue';
import BlogList from '../components/BlogList.vue';
import BlogPost from '../components/BlogPost.vue';

const routes = [
  { path: '/portfolio/', component: Portfolio },
  { path: '/portfolio/blog', component: BlogList },
  { path: '/portfolio/blog/:slug', component: BlogPost, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
