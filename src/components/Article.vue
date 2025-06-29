<template>
    <section class="bg-gray-50 border-gray-300 py-20">
        <div class="max-w-9xl mx-auto px-4">
            <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-5xl font-bold text-gray-800 font-serif py-12">Articles You Might Like</h2>
      </div>
      
       <!-- Articles Grid -->
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
             <div
          v-for="(article, index) in articles"
          :key="index"
          class="bg-white rounded-lg shadow-sm p-6 hover:-translate-y-1 hover:shadow-md transition-transform duration-300"
        >
          <h3 class="text-2xl font-semibold text-gray-800 mb-3 font-serif">{{ article.title }}</h3>
          <p class="text-gray-600 mb-4 text-xl font-serif
          ">{{ article.excerpt }}</p>
          <a href="#" class="text-blue-400 hover:text-blue-400">Read More</a>
        </div>
        </div>
        </div>
    </section>
</template>
<script setup>
const articles = [
  {
    title: 'Article Title 1',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Article Title 2',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Article Title 3',
    excerpt:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];
</script>
