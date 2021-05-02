<template>
  <div>
    <h1 class="text-6xl">Races</h1>
    <div
      class="grid md:grid-cols-2 xl:grid-cols-3 gap-10 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto py-10"
    >
      <RaceCard v-for="race in races" :key="race.slug" :race="race" />
    </div>
  </div>
</template>

<script>
import RaceCard from '@/components/RaceCard.vue'
import RaceService from '@/services/RaceService.js'

export default {
  components: {
    RaceCard,
  },
  data() {
    return {
      races: {},
    }
  },
  created() {
    RaceService.getRaces()
      .then((response) => {
        this.races = response.data
      })
      .catch((error) => {
        console.log('There was an error:', error.response)
      })
  },
}
</script>
