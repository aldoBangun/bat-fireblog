import { createStore } from "vuex";

const store = createStore({
   state() {
      return {
         isActiveNav: false,
         navMenu: [
            {
               label: "Home",
               link: "#",
            },
            {
               label: "Blogs",
               link: "#",
            },
            {
               label: "Create Post",
               link: "#",
            },
            {
               label: "Sign Up",
               link: "#",
               button: true,
            },
         ],
      };
   },
   getters: {
      isActiveNav(state) {
         return state.isActiveNav
      },
      navMenu(state) {
         return state.navMenu
      },
   },
   mutations: {
      SET_ACTIVE_NAV(state, payload) {
         state.isActiveNav = payload;
      },
   },
   actions: {},
   modules: {},
});

export default store;
