<script setup>
import { onMounted } from 'vue';
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Feature from './components/Feature.vue';
import Section from './components/Section.vue';
import NewsPaper from './components/NewsPaper.vue';
import Article from './components/Article.vue';
import Footer from './components/Footer.vue';
import Testimonial from './components/Testimonial.vue';
onMounted(() => {

})
</script>

<template>
  <div>
    <Navbar/>
     <Hero/>
    <Feature/>
    <Section/>
    <Testimonial/>
    <NewsPaper/>
    <Article/>
    <Footer/> 
  </div>
</template>

<style scoped>
</style>
