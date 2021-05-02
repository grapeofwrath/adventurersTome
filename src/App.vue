<template>
  <div
    class="relative min-h-screen font-sans text-center text-gray-900 bg-[#FFFEF7] sm:bg-[#F4F0DB]"
  >
    <NavBar />
    <router-view class="pt-10 pb-20" />
    <Footer />
    <FooterMenu />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import FooterMenu from '@/components/FooterMenu.vue'

export default {
  components: {
    NavBar,
    Footer,
    FooterMenu,
  },
}
</script>
