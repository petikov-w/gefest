<template lang="pug">
div(v-if="isHome")
  .logo-box(v-if="componentName==='header'" )
    .logo-title-header(v-if="isDesktop") {{ logo_title }}
    .logo-title-header-m(v-if="isMobile") {{ logo_title }}
    .logo-subtitle-header(v-if="isDesktop" v-html="logo_subtitle")
    .logo-subtitle-header-m(v-if="isMobile" v-html="logo_subtitle" )
  .logo-box(v-if="componentName==='footer'" )
    .logo-title-footer(v-if="isDesktop") {{ logo_title }}
    .logo-title-footer-m(v-if="isMobile") {{ logo_title }}
    .logo-subtitle-footer(v-if="isDesktop" v-html="logo_subtitle")
    .logo-subtitle-footer-m(v-if="isMobile" v-html="logo_subtitle")
div(v-if="!isHome")
  router-link( class="logo-link" :to="{ name: 'home'}")
    .logo-box(v-if="componentName==='header'" )
      .logo-title-header(v-if="isDesktop") {{ logo_title }}
      .logo-title-header-m(v-if="isMobile") {{ logo_title }}
      .logo-subtitle-header(v-if="isDesktop" v-html="logo_subtitle")
      .logo-subtitle-header-m(v-if="isMobile" v-html="logo_subtitle" )
    .logo-box(v-if="componentName==='footer'" )
      .logo-title-footer(v-if="isDesktop") {{ logo_title }}
      .logo-title-footer-m(v-if="isMobile") {{ logo_title }}
      .logo-subtitle-footer(v-if="isDesktop" v-html="logo_subtitle")
      .logo-subtitle-footer-m(v-if="isMobile" v-html="logo_subtitle")
</template>

<script>
import {useRoute} from "vue-router";
import {useStore} from 'vuex';
import {ref,computed} from "vue";

export default {
  name: "Logo",
  props: {
    isHeader: {require: true, type: Boolean}
  },
  setup(props) {
    const route = useRoute();
    const store = useStore();
    const logo_title = computed(()=> store.getters.getLogo.title);
    const isHeader = ref(props.isHeader);
    console.log("======> ", isHeader.value);
    const logo_subtitle = computed(()=> store.getters.getLogo.subtitle);
    const isHome = computed(() => route.name==='home' ? true : false);
    const componentName = computed(() => isHeader.value ? "header" : "footer");
    const isMobile = computed(() => store.getters.getIsMobile);
    const isDesktop = computed(() => store.getters.getIsDesktop);
    return { logo_title,
             logo_subtitle,
             isHome,
             isMobile,
             isDesktop,
             componentName}
  }
}
</script>

<style scoped>

</style>