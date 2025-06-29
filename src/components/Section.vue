<template>
    <section class="py-20">
        <div class="max-w-7xl mx-auto px-4">
              <!-- Section Header -->
      <div class="text-center mb-16">
        <p class="text-blue-400 font-semibold mb-2 text-lg ">Simple Process</p>
        <h2 class="text-4xl md:text-5xl font-bold mb-4 font-serif">Getting Started is Easy</h2>
        <p class="text-gray-600 max-w-2xl mx-auto font-medium">
         Begin your educational journey with our streamlined enrollment process designed for maximum convenience and support.
        </p>
      </div>
<!-- Features Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="bg-white p-10 rounded-2xl border border-blue-200 hover:border-blue-300 text-center hover:shadow-xl group"
        >
          <div
            class="w-16 h-16 rounded-xl flex items-center justify-center text-white text-2xl mb-6 mx-auto border border-neutral-200 shadow-sm hover:shadow-lg hover:border-primary-300 transition-all transform hover:-translate-y-2"
            :class="feature.bg"
          >
            <Icon :icon="feature.icon" class="h-10 w-10"/>
          </div>
          <h3 class="text-2xl font-bold font-serif mb-2">{{ feature.title }}</h3>
          <p class="text-xl text-neutral-600 leading-relaxed font-serif">{{ feature.description }}</p>
        </div>
      </div>
        </div>
    </section>
</template>
<script setup>
import { Icon } from '@iconify/vue'
const features = [
  {
    icon: 'mdi:account-plus',
    title: 'Sign Up',
    description: 'Set up your secure student or family account in just a few minutes with our simple registration process.',
    bg: 'bg-gradient-to-br from-cyan-400 to-cyan-500'
  },
  {
    icon: 'mdi:book-open-page-variant',
    title: 'Choose Your Courses',
    description: 'Browse our comprehensive catalog and enroll in the subjects that match your learning goals and schedule.',
    bg: 'bg-gradient-to-br from-cyan-400 to-cyan-500'
  },
  {
    icon: 'mdi:laptop',
    title: 'Learn Anytime',
    description: 'Access high-quality materials and interactive lessons anytime, anywhere, at your own pace.',
    bg: 'bg-gradient-to-br from-cyan-400 to-cyan-500'
  },
    {
    icon: 'mdi:handshake',
    title: 'Grow with Support',
    description: 'Connect with certified teachers and wellness coaches who are committed to your success every step of the way.',
    bg: 'bg-gradient-to-br from-cyan-400 to-cyan-500'
  }
]
</script>