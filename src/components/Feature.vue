<template>
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-4">
      
      <!-- Section Header -->
      <div class="text-center mb-16">
        <p class="text-blue-400 font-semibold mb-2 text-lg ">Why Choose LightStars</p>
        <h2 class="text-4xl md:text-5xl font-bold mb-4 font-serif">Excellence in Every Aspect</h2>
        <p class="text-gray-600 max-w-2xl mx-auto font-medium">
          We're committed to providing world-class education that goes beyond traditional learning, focusing on the complete development of every student.
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="bg-white p-10 rounded-2xl border border-gray-200 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
        >
          <div
            class="w-16 h-20 rounded-xl flex items-center justify-center text-white text-2xl mb-6 mx-auto transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            :class="feature.bg"
          >
            <Icon :icon="feature.icon" class="h-10 w-10"/>
          </div>
          <h3 class="text-2xl font-bold font-serif mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from '@iconify/vue'
const features = [
  {
    icon: 'mdi:school',
    title: 'Certified Teachers',
    description: 'Masters-level instructors, Colorado standards.',
    bg: 'bg-gradient-to-br from-cyan-400 to-cyan-500'
  },
  {
    icon: 'mdi:leaf',
    title: 'Wellness Focused',
    description: 'Support for mental health, growth, and resilience.',
    bg: 'bg-gradient-to-br from-cyan-400 to-cyan-500'
  },
  {
    icon: 'mdi:lightbulb-on-outline',
    title: 'Flexible + Affordable',
    description: 'Reasonable pricing, school partnerships available.',
    bg: 'bg-gradient-to-br from-cyan-400 to-cyan-500'
  }
]
</script>
