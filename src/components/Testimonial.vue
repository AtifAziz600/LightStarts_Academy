<template>
  <section class="py-20">
    <div class="max-w-5xl mx-auto px-4">
      <div
        class="relative flex items-center justify-center gap-4 overflow-hidden"
        data-aos="fade-up"  data-aos-duration="1000"
      >
        <button
          @click="prevSlide"
          class="border border-gray-300 text-blue-500 w-11 h-11 rounded-full flex items-center justify-center hover:bg-blue-100 hover:scale-110 transition"
          aria-label="Previous testimonial"
        >
          <Icon icon="mdi:chevron-left" class="text-xl" />
        </button>

        <div class="flex-grow text-center relative" style="min-height: 250px;">
          <Transition name="slide-fade" mode="out-in">
            <blockquote
              :key="activeIndex"
              class="text-gray-700 italic text-lg md:text-xl mb-8 leading-relaxed absolute inset-x-0 top-0 transition-opacity duration-500"
            >
              {{ testimonials[activeIndex].quote }}
            </blockquote>
          </Transition>

          <div class="flex items-center justify-center gap-4 absolute bottom-0 inset-x-0">
            <Transition name="slide-fade-info" mode="out-in">
              <img
                :key="activeIndex"
                :src="testimonials[activeIndex].avatar"
                :alt="testimonials[activeIndex].name"
                class="w-16 h-16 rounded-full object-cover shadow-md"
              />
            </Transition>
            <Transition name="slide-fade-info" mode="out-in">
              <div :key="activeIndex" class="text-left">
                <div class="font-semibold text-gray-900">{{ testimonials[activeIndex].name }}</div>
                <div class="text-sm text-gray-500">{{ testimonials[activeIndex].role }}</div>
              </div>
            </Transition>
          </div>
        </div>

        <button
          @click="nextSlide"
          class="border border-gray-300 text-blue-500 w-11 h-11 rounded-full flex items-center justify-center hover:bg-blue-100 hover:scale-110 transition"
          aria-label="Next testimonial"
        >
          <Icon icon="mdi:chevron-right" class="text-xl" />
        </button>
      </div>
    </div>

    <div class="flex justify-center items-center gap-3 mt-12">
      <a
        href="https://www.youtube.com/@LightStarNews"
        class="flex items-center gap-2 text-gray-700"
      >
        <p class="text-base m-0 font-serif">Check out our YouTube Channel: <b>LightStar News</b></p>
        <img src="../assets/Youtube_logo.png" alt="YouTube Logo" width="30" />
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const activeIndex = ref(0);

const testimonials = [
  {
    quote: " I love how engaging the courses are! The digital art and game design classes helped me discover a new passion, and now I’m considering a career in tech.",
    avatar: 'https://i.pravatar.cc/120?img=12',
    name: "Noah T.",
    role: "Student at LightStar University"
  },
  {
    quote: " LightStars Academy helped my daughter catch up in algebra without the stress of a packed classroom. The instructor was certified and experienced—it felt like one-on-one tutoring at a fraction of the cost.",
    avatar: 'https://i.pravatar.cc/120?img=45',
    name: 'Miranda B',
    role: 'Parent'
  },
  {
    quote: "The flexibility is unmatched. I can finally balance my competitive sports schedule with my academics without falling behind. Thank you, LightStars!",
    avatar: 'https://i.pravatar.cc/120?img=52',
    name: 'Mike R.',
    role: '11th Grade'
  }
];

const prevSlide = () => {
  activeIndex.value =
    activeIndex.value === 0 ? testimonials.length - 1 : activeIndex.value - 1;
};

const nextSlide = () => {
  activeIndex.value =
    activeIndex.value === testimonials.length - 1 ? 0 : activeIndex.value + 1;
};
</script>

<style scoped>

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease-in-out;
  position: absolute; 
  width: 100%;
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(20px); 
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-20px); 
}


.slide-fade-info-enter-active,
.slide-fade-info-leave-active {
  transition: all 0.5s ease-in-out;

}

.slide-fade-info-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.slide-fade-info-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>