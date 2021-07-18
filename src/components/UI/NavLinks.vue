<template>
   <ul
      class="
         fixed
         top-0
         bottom-0
         right-0
         w-80
         p-8
         transform
         transition
         transition-200
         bg-black
         md:bg-white
         md:transform-none
         md:p-0
         md:w-max
         md:relative
         md:flex 
         md:items-center 
         md:gap-6
      "
      :class="isHiddenNav"
   >
      <li class="mb-4 md:mb-0" v-for="item in items" :key="item.label">
         <router-link
            class="
               inline-flex
               items-center
               h-8
               px-4
               rounded-full
               text-black
               bg-white
               hover:bg-gray-300
               md:bg-black md:text-white md:hover:bg-gray-800
            "
            :to="item.link"
            v-if="item.button"
            >{{ item.label }}</router-link
         >
         <router-link class="text-gray-400 hover:text-white md:text-gray-500 md:hover:text-black" :to="item.link" v-else>{{ item.label }}</router-link>
      </li>
      <BIconX class="text-4xl absolute top-6 right-6 cursor-pointer text-gray-400 hover:text-white md:hidden" @click="toggleNav" />
   </ul>
</template>

<script>
import { BIconX } from 'bootstrap-icons-vue'
import { mapGetters } from 'vuex'

export default {
   components: {
      BIconX
   },
   props: {
      items: {
         type: Array,
         required: true,
      },
   },
   computed: {
      ...mapGetters({
         isActive: 'isActiveNav'
      }),
      isHiddenNav() {
         return this.isActive ? '' : 'translate-x-full'
      }
   },
   methods: {
      toggleNav() {
         this.$store.commit('SET_ACTIVE_NAV', false)
      }
   }
};
</script>
