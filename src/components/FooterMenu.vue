<template>
  <div
    class="sticky sm:hidden z-10 bottom-0 mt-10 px-8 py-5 text-1xl font-bold uppercase align-middle place-content-between items-center bg-[#FFFEF7]"
  >
    <nav>
      <router-link :to="{ name: 'raceList' }" class="hover:text-[#460CF2]"
        >List</router-link
      >
      |
      <router-link :to="{ name: 'raceCreate' }" class="hover:text-[#460CF2]"
        >Create Race</router-link
      >
    </nav>
  </div>
</template>

<script>
export default {}
</script>
