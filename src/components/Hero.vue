<template>
  <section class="relative h-screen w-full overflow-hidden">
    <!-- Background Image -->
    <img
      class="absolute inset-0 w-full h-full object-cover z-0"
      src="../assets/8.png"
      alt="Background"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-[radial-gradient(circle,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.5)_100%)] z-10">

    <!-- Content -->
    <div class="relative z-20 flex flex-col items-center justify-center text-center text-white px-4 h-full max-w-4xl mx-auto
">
      <h1   class="font-bold leading-tight text-center font-serif"
  style="font-size: clamp(2.5rem, 4vw, 4rem); letter-spacing: -0.02em;">
        Lighting the Path to Student Wellness and Success.
      </h1>
      <p class="text-lg md:text-xl text-white mb-10 leading-relaxed drop-shadow-md" style="    font-size: 1.25rem;">
        Transform your educational journey with personalized online courses, certified teachers, and comprehensive wellness support that empowers every learner to thrive.
      </p>
      <div class="flex flex-wrap justify-center gap-4">
        <a
          href="#features"
          class="px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-500 text-white rounded-lg shadow-md hover:shadow-xl transition font-bold
"
        >
          Explore Courses →
        </a>
        <a
          href="#"
          class="px-6 py-3 border border-blue-300 bg-white text-blue-500 hover:bg-primary-100 rounded-lg transition font-bold"
        >
          Join as an Instructor
        </a>
      </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
bg-primary{
    --gradient-primary: linear-gradient(135deg, var(--primary-500) 0%, var(--primary-600) 100%);

}
</style>
