<template>
   <div class="container">
      <ul class="recent-posts">
         <li class="overflow-hidden relative" v-for="post in recentPosts" :key="post.id">
            <router-link :to="'#post/' + post.id">
               <img class="w-max h-full object-cover filter contrast-100 brightness-50 transform transition-all duration-1000" :src="'src/assets/img/' + post.thumbnail" :alt="post.title">
               <div class="absolute bottom-4 left-4 z-40 text-white">
                  <h1 class="text-2xl font-semibold mb-2"> {{ post.title }} </h1>
                  <p class="text-sm text-gray-300"> {{ post.publishedAt }} </p>
               </div>
            </router-link>
         </li>
      </ul>
   </div>
</template>

<script>
export default {
   data() {
      return {
         recentPosts: [
            {
               id: 1,
               title: 'Learn Git and Github Basics',
               content: 'First Post',
               publishedAt: '17 July 2021',
               thumbnail: 'post-1.jpg'
            },
            {
               id: 2,
               title: 'Being a Web Developer In 2021',
               content: 'Second Post',
               publishedAt: '17 July 2021',
               thumbnail: 'post-2.jpg'
            },
            {
               id: 3,
               title: 'Web Development Environment',
               publishedAt: '17 July 2021',
               content: 'Third Post',
               thumbnail: 'post-3.jpg'
            }
         ]
      }
   }
}
</script>

<style scoped>

.recent-posts {
   display: grid;
   grid-template-columns: 1fr minmax(15rem, 18rem);
   grid-template-rows: 15rem 15rem;
   grid-template-areas: "first second" "first third";
   gap: 1rem;
}

@media (max-width: 768px) and (min-width: 640px) {
   .recent-posts {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 20rem 15rem;
      grid-template-areas: "first first" "second third";
      gap: 1rem;
   }
} 

@media (max-width: 639px) {
   .recent-posts {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(3, 20rem);
      grid-template-areas: "first" "second" "third";
      gap: 1rem;
   }
}


.recent-posts li:nth-child(1) {
   grid-area: first;
}

.recent-posts li:nth-child(2) {
   grid-area: second;
}

.recent-posts li:nth-child(3) {
   grid-area: third;
}

.recent-posts li:hover img {
   @apply scale-110 grayscale;
}

</style>