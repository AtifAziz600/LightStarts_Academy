<template>
  <section class="py-16 px-4 bg-green-50 text-green-800 border border-green-100">
    <div class="max-w-2xl mx-auto text-center text-white">
      <div class="text-lg font-medium mb-2 text-blue-400">Stay inspired!</div>
      <h2 class="text-3xl md:text-5xl font-bold mb-4 text-black">Join the LightStars Newsletter.</h2>
      <p class="text-base md:text-lg text-black mb-8">
        Get the latest course updates, wellness insights, and educational tips delivered straight to your inbox.
      </p>

      <form class="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
        <input
          type="email"
          required
          placeholder="Enter your email address"
          aria-label="Email for newsletter"
          class="flex-1 px-6 py-3 rounded-xl border-2 border-neutral-200 text-black text-base focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200 transition-all duration-200"
        />
        <button
          type="submit"
          class="btn btn-primary bg-gradient-to-br from-blue-400 to-blue-500 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
        >
          Subscribe <span class="ml-2">✨</span>
        </button>
      </form>
    </div>
  </section>
</template>
