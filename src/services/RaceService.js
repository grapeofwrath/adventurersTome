import { Directus } from '@directus/sdk'

const directus = new Directus('http://localhost:8055')

export default {
  async getRaces() {
    const races = await directus.items('races?fields=*,subraces.*').readMany()
    return races
  },
  async getRace(slug) {
    const race = await directus
      .items('races?fields=*,subraces.*&filter[slug][_eq]=' + slug)
      .readMany()
    return race
  },
  async createRace() {
    await directus.items('races').createOne({
      name: '',
      slug: '',
      traits: [],
      age: '',
      size: '',
      game_system: '',
    })
  },
}
