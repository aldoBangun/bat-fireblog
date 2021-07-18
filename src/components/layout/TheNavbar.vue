<template>

   <header class="flex items-center h-16 border-b border-solid border-gray-300">
      <nav class="container flex items-center justify-between">
         <div class="text-2xl text-black font-brand">
            <router-link :to="{ name: 'home' }">Bat Fireblogs</router-link>
         </div>
         <NavLinks :items="links" :isActive="isActive" @toggle-nav="toggleNav" />
         <BIconList class="cursor-pointer text-2xl md:hidden" @click="toggleNav" />
      </nav>
   </header>

</template>

<script>
import NavLinks from '../UI/NavLinks.vue'
import { BIconList } from 'bootstrap-icons-vue'

export default {
   components: {
      NavLinks,
      BIconList
   },
   data() {
      return {
         links: [
         {
            label: 'Home',
            link: '#'
         },
         {
            label: 'Blogs',
            link: '#'
         },
         {
            label: 'Create Post',
            link: '#'
         },
         {
            label: 'Sign Up',
            link: '#',
            button: true
         }
            ],
         isActive: false
      }
   },
   methods: {
      toggleNav() {
         this.isActive = !this.isActive
      }
   }
}
</script>