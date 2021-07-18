<template>

   <header class="flex items-center h-16 border-b border-solid border-gray-300 mb-8">
      <nav class="container flex items-center justify-between">
         <div class="text-2xl text-black font-brand">
            <router-link :to="{ name: 'home' }">Bat Fireblogs</router-link>
         </div>
         <NavLinks :items="links" />
         <BIconList class="cursor-pointer text-2xl md:hidden" @click="toggleNav" />
      </nav>
   </header>

</template>

<script>
import { mapGetters } from 'vuex'

import NavLinks from '../UI/NavLinks.vue'
import { BIconList } from 'bootstrap-icons-vue'

export default {
   components: {
      NavLinks,
      BIconList
   },
   computed: {
      ...mapGetters({
         links: 'navMenu'
      })
   },
   methods: {
      toggleNav() {
         this.$store.commit('SET_ACTIVE_NAV', true)
      }
   }
}
</script>