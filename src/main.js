import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { Icon } from "@iconify/vue";
import 'aos/dist/aos.css'; // AOS CSS
import AOS from 'aos';

createApp(App).component('Icon',Icon).mount('#app')

// Initialize AOS
app.AOS = new AOS.init({
  duration: 1000,
  easing: 'ease-out',
  once: true, 
});
