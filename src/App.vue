<template lang="pug">
Header
router-view
Footer
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {useStore} from 'vuex';
import {computed, onMounted} from "vue";

export default {
  name: "App",
  components: {Header, Footer},
  setup() {
    const store = useStore();
    const isMobile = computed(() => store.getters.getIsMobile);
    const isDesktop = computed(() => store.getters.getIsDesktop);
    onMounted(() => { window.addEventListener('resize', function () {
      if (window.innerWidth>400) {
        store.dispatch("setDesktop")
      } else {
        store.dispatch("setMobile")
      }
    })
    })
    return { isMobile, isDesktop}
  }
}
</script>

<style scoped>

</style>