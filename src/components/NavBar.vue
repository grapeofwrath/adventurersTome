<template>
  <div
    class="sticky z-10 top-0 px-8 py-5 text-1xl font-bold uppercase flex align-middle place-content-between items-center bg-[#FFFEF7]"
  >
    <router-link
      to="/"
      class="text-3xl capitalize font-serif font-normal tracking-wide hover:text-[#6e53be]"
    >
      Adventurer's Tome</router-link
    >
    <nav>
      <router-link :to="{ name: 'raceList' }" class="hover:text-[#6e53be]"
        >List</router-link
      >
      |
      <router-link :to="{ name: 'raceCreate' }" class="hover:text-[#6e53be]"
        >Create Race</router-link
      >
    </nav>
  </div>
</template>

<script>
export default {}
</script>
