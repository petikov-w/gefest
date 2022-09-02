<template lang="pug">
footer
  .wrapper
    .footer-box-top
      div(v-if="isHome")
        .logo-box
          .logo-title-footer {{ logo_title }}
          .logo-subtitle-footer {{ logo_subtitle }}
      div(v-if="!isHome")
        router-link( class="logo-link" :to="{ name: 'home'}")
          .logo-box
            .logo-title-footer {{ logo_title }}
            .logo-subtitle-footer {{ logo_subtitle }}

      .socialnet-box
        a(href="https://t.me/hardkrox")
          .circle
            img(src="../assets/images/icon-whatsapp.png")
        a(href="https://t.me/hardkrox")
          .circle
            img(src="../assets/images/icon-telegram.png")
        a(href="https://t.me/hardkrox")
          .circle
            img(src="../assets/images/icon-skype.png")
      .call-box
        Telefon(:tel='telefon')
        .order-box
          img(src="../assets/images/icon-telefon.png")
          .call-order Заказать обратный звонок
    .footer-box-bottom
      .security-box
        router-link(:to="{ name: 'policy'}" class="security-link") Политика конфиденциальности
        router-link(:to="{ name: 'useragreement'}" class="security-link") Пользовательское соглашение
      a(class="security-link" href="//kroxdev.ru") Разработка сайта - PDS


</template>

<script>
import Telefon from "@/components/NumberTelefon";
import {useRoute} from "vue-router";
import {useStore} from 'vuex';
import {computed} from "vue";
export default {
  name: "Footer",
  components: { Telefon},
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
  color: #ffffff;
}

</style>