<template lang="pug">
.wrapper
  .header-box
    div(v-if="isHome")
      .logo-box
        .logo-title-header {{ logo_title }}
        .logo-subtitle-header {{ logo_subtitle }}
    div(v-if="!isHome")
      router-link( class="logo-link" :to="{ name: 'home'}")
        .logo-box
          .logo-title-header {{ logo_title }}
          .logo-subtitle-header {{ logo_subtitle }}

    button.btn-header У вас уже есть поставщик?
    .call-box
      Telefon(:tel='telefon')
      //.call-telefon-header +7 (495) 444-44-44
      .order-box
        img(src="../assets/images/icon-telefon.png")
        .call-order Заказать обратный звонок
hr
</template>

<script>
import Telefon from "@/components/NumberTelefon";
import {useRoute} from "vue-router";
import {useStore} from 'vuex';
import {computed} from "vue";
export default {
  name: "Header",
  components: { Telefon },
  setup(){
    const route = useRoute();
    const store = useStore();
    const logo_title = computed(()=> store.getters.getLogo.title);
    const logo_subtitle = computed(()=> store.getters.getLogo.subtitle);
    const telefon = computed(()=> store.getters.getTelefon);
    const isHome = computed(() => route.name==='home' ? true : false);

    return {
      logo_title,
      logo_subtitle,
      telefon,
      isHome
    }
  }
}
</script>

<style scoped lang="scss">
:deep(.telefon) {
    font-size: 22px;
    font-weight: 600;
    line-height: 27px;
    letter-spacing: 0.5px;
    text-decoration: none;
    color: #000000;
}

</style>