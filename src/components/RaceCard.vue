<template>
  <div>
    <div
      class="p-6 mx-auto max-w-xs sm:max-w-sm lg:max-w-md rounded-3xl border-t-2 border-l-2 border-b-8 border-r-4 border-gray-600 bg-[#FFFEF7] text-left relative"
    >
      <h2>
        <router-link
          :to="{ name: 'raceShow', params: { slug: race.slug } }"
          class="text-4xl font-serif tracking-wide hover:text-[#6e53be]"
          >{{ race.name }}</router-link
        >
      </h2>
      <p class="mt-5 pr-5 text-lg font-semibold">PHB</p>

      <!--begin Bookmark-->
      <div
        class="absolute top-6 right-5 -mt-8 ml-auto transition-transform duration-200 transform hover:translate-y-4 hover:scale-y-125 cursor-pointer"
      >
        <div class="w-22 h-10 rounded-t-md bg-[#6e53be]"></div>
        <div class="w-5 overflow-hidden inline-block">
          <div
            class="h-16 bg-[#6e53be] rotate-45 transform origin-top-right"
          ></div>
        </div>
        <div class="w-5 overflow-hidden inline-block">
          <div
            class="h-16 bg-[#6e53be] -rotate-45 transform origin-top-left"
          ></div>
        </div>
      </div>
      <!--end Bookmark-->

      <p
        class="absolute bottom-4 right-6 text-right text-4xl font-serif text-gray-400"
      >
        5e
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    race: Object,
  },
}
</script>
