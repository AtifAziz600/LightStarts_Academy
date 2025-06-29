<template>
  <header :class="[
  'fixed top-0 w-full z-[1000] py-4 transition-all duration-300 backdrop-blur-md',
  isScrolled ? 'bg-white/95 shadow-md' : 'bg-transparent'
]"
>
    <div class="mx-auto flex justify-between items-center px-4">
      
      <!-- Logo -->
      <img class="w-60 md:w-60" src="../assets/LOGO-01.png" alt="Logo" />

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-15 justify-between">
        <a
          v-for="(link, index) in navLinks"
          :key="index"
          :href="link.href"
          :class="[
            'font-medium text-md transition-all duration-300 hover:text-blue-600',
            isScrolled ? 'text-gray-800' : 'text-white'
          ]"
        >
          {{ link.label }}
        </a>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-3">
        <!-- Login Button -->
        <button
          class="hidden md:block bg-transparent text-neutral-100 border-2 border-neutral-300 font-bold px-7 py-2 rounded-2xl transition-all duration-300 hover:text-blue-400 hover:bg-neutral-100 hover:border-neutral-300 hover:-translate-y-0.5"
          :class="isScrolled ? 'text-neutral-700' : 'text-neutral-50'"

        >
          Login
        </button>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileNav"
          aria-label="Toggle Menu"
          :aria-expanded="isMenuOpen.toString()"
          aria-controls="mobile-menu"
          class="md:hidden"
        >
          <Icon :icon="isMenuOpen ? 'mdi:close' : 'mdi:menu'" class="w-8 h-8" :class="isScrolled ? 'text-black' : 'text-white'"/>
        </button>
      </div>
    </div>

    <!-- Mobile Nav -->
   <Transition name="slide-down">
     <aside
      v-if="isMenuOpen"
      id="mobile-menu"
      class="md:hidden shadow-lg py-4 px-3 absolute top-full left-0 right-0 z-[800]"
      style="background: rgba(0, 0, 0, 0.7)"
      aria-label="Mobile menu"
    >
      <ul class="flex flex-col items-center justify-center gap-6 py-12 text-center text-white text-2xl font-semibold">
  <li v-for="(link, index) in navLinks" :key="index">
    <a
      :href="link.href"
      @click="toggleMobileNav"
      class="block hover:text-blue-500 transition-all duration-300"
    >
      {{ link.label }}
    </a>
  </li>
  <button
          class="bg-transparent text-neutral-100 border-2 border-neutral-300 font-bold px-20 py-2 rounded-2xl transition-all duration-300 hover:text-blue-400 hover:bg-neutral-100 hover:border-neutral-300 hover:-translate-y-0.5"
          :class="isScrolled ? 'text-neutral-700' : 'text-neutral-50'"

        >
          Login
        </button>
</ul>

    </aside>
   </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isScrolled = ref(false)

const navLinks = ref(
    [
  { label: 'Home', href: '#' },
  { label: 'Course', href: '#' },
  { label: 'Policies', href: '#' },
  { label: 'Students & Families', href: '#' }
]
);
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
});
const handleScroll = () => {
  isScrolled.value = window.scrollY > 100
};
const isMenuOpen = ref(false)
const toggleMobileNav = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
}

.slide-down-enter-to,
.slide-down-leave-from {
  transform: translateY(0);
}
</style>