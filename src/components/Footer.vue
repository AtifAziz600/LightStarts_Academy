<template>
    <footer class="bg-gray-900 text-white py-20">
        <div class="max-w-7xl mx-auto px-4">
            <!-- Footer Grid -->
             <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
                <!-- Column 1: Logo & Description -->
                 <div>
                    <img src="../assets/LOGO-04.png" alt="LightStars Academy Logo" class="max-w-[250px] mb-4">
                    <p class="text-gray-400 text-md leading-relaxed font-serif">
                        Empowering learners for a brighter future through innovative education and comprehensive wellness support.
                    </p>
                 </div>
                 <!-- Column 2: Quick Links -->
                 <div>
                    <h4 class="text-lg font-bold mb-4 font-serif">Quick Links</h4>
                    <ul class="space-y-2 text-gray-400">
            <li><a href="#hero" class="hover:text-blue-400 font-serif">Home</a></li>
            <li><a href="#" class="hover:text-blue-400 font-serif">Contact</a></li>
            <li><a href="#" class="hover:text-blue-400 font-serif">FAQs</a></li>
            <li><a href="#" class="hover:text-blue-400 font-serif">Privacy</a></li>
          </ul>
                 </div>
                 
                  <div>
                     <!-- Column 3: Social Icons -->
          <h4 class="text-xl font-bold mb-4">Connect With Us</h4>
          <div class="flex gap-4 text-2xl">
            <a href="#" aria-label="Bluesky" class="hover:bg-blue-400 rounded-full hover:-translate-y-1 bg-gray-700  w-8 h-8 flex justify-center items-center transition-transform duration-300">
              <Icon class="size-4 text-gray-500 hover:text-gray-300" icon="simple-icons:bluesky" />
            </a>
            <a href="#" aria-label="Facebook" class="hover:bg-blue-400 rounded-full hover:-translate-y-1 bg-gray-700 w-8 h-8 flex justify-center items-center transition-transform duration-300">
              <Icon class="size-4 text-gray-500 hover:text-gray-300" icon="fa-brands:facebook-f" />
            </a>
            <a href="#" aria-label="Tumblr" class="hover:bg-blue-400 rounded-full hover:-translate-y-1 bg-gray-700 w-8 h-8 flex justify-center items-center transition-transform duration-300">
              <Icon class="size-4 text-gray-500 hover:text-gray-300" icon="fa-brands:tumblr" />
            </a>
            <a href="#" aria-label="TikTok" class="hover:bg-blue-400 rounded-full hover:-translate-y-1 bg-gray-700 w-8 h-8 flex justify-center items-center transition-transform duration-300">
              <Icon class="size-4 text-gray-500 hover:text-gray-300" icon="fa-brands:tiktok" />
            </a>
          </div>
        </div>
             </div>
             <div class="border-t-1 text-gray-600">
              <p class="flex text-center justify-center items-center p-2 text-lg font-serif">
                © 2025 LightStars Academy. All rights reserved. | We are the Starseeds!
              </p>
             </div>
        </div>
    </footer>
</template>
<script setup>
import { Icon } from '@iconify/vue'

</script>
