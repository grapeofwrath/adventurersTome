<template>
  <div>
    <div
      v-for="race in race"
      :key="race.slug"
      class="max-w-xs sm:max-w-lg md:max-w-[46rem] lg:max-w-5xl xl:max-w-6xl mx-auto sm:p-8 md:column-2 text-left sm:rounded-3xl sm:border-t-2 sm:border-l-2 sm:border-b-8 sm:border-r-4 border-gray-600 sm:bg-[#FFFEF7]"
    >
      <h1 class="tracing-wide mb-1">{{ race.name }}</h1>
      <div v-html="race.info" class="info"></div>
      <div v-if="race.traits">
        <h2 class="mt-2">Traits</h2>
        <div v-for="trait in race.traits" :key="trait.title">
          <p>
            <span class="capitalize font-bold">{{ trait.title }}. </span>
            <span class="font-normal">{{ trait.details }}</span>
          </p>
        </div>
      </div>

      <div v-if="race.subraces.length">
        <!--<h2 class="mt-2">Subraces</h2>-->
        <div v-for="subrace in race.subraces" :key="subrace.id">
          <h3 class="capitalize">{{ subrace.name }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RaceService from '@/services/RaceService.js'

export default {
  props: ['slug'],
  data() {
    return {
      race: {},
    }
  },
  created() {
    RaceService.getRace(this.slug)
      .then((response) => {
        this.race = response.data
      })
      .catch((error) => {
        console.log('There was an error:', error.response)
      })
  },
}
</script>
