<template lang="pug">
footer
  .wrapper
    .footer-box-top(v-if="isDesktop")
      Logo(:is-header="false")
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
    .footer-box-bottom(v-if="isDesktop")
      .security-box
        router-link(:to="{ name: 'policy'}" class="security-link") Политика конфиденциальности
        router-link(:to="{ name: 'useragreement'}" class="security-link") Пользовательское соглашение
      a(class="security-link" href="//kroxdev.ru") Разработка сайта - PDS
footer-m(v-if="isMobile")
  .footer-box-top-m(v-if="isMobile")
    .footer-logo-m
      Logo(:is-header="false")
    section-m
      button.btn.btn-header-mf У вас уже есть поставщик?
      .call-box
        Telefon(:tel='telefon' :is-header="false")
        .order-box
          img(src="../assets/images/icon-telefon.png")
          .call-order-m Заказать обратный звонок
    .socialnet-box-m(v-if="isMobile")
      a(href="https://t.me/hardkrox")
        .circle
          img(src="../assets/images/icon-whatsapp.png")
      a(href="https://t.me/hardkrox")
        .circle
          img(src="../assets/images/icon-telegram.png")
      a(href="https://t.me/hardkrox")
        .circle
          img(src="../assets/images/icon-skype.png")

  .footer-box-bottom-m(v-if="isMobile")
    .security-box
      router-link(:to="{ name: 'policy'}" class="security-link-m") Политика конфиденциальности
      router-link(:to="{ name: 'useragreement'}" class="security-link-m") Пользовательское соглашение
    a(class="security-link-m" href="//kroxdev.ru") Разработка сайта - PDS


</template>

<script>
import Telefon from "@/components/NumberTelefon";
import Logo from "@/components/Logo";
// import {useRoute} from "vue-router";
import {useStore} from 'vuex';
import {computed} from "vue";
export default {
  name: "Footer",
  components: { Telefon, Logo},
  setup(){

    // const route = useRoute();
    const store = useStore();
    // const logo_title = computed(()=> store.getters.getLogo.title);
    // const logo_subtitle = computed(()=> store.getters.getLogo.subtitle);
    const telefon = computed(()=> store.getters.getTelefon);
    const isMobile = computed(() => store.getters.getIsMobile);
    const isDesktop = computed(() => store.getters.getIsDesktop);
    // const isHome = computed(() => route.name==='home' ? true : false);

    return {
      // logo_title,
      // logo_subtitle,
      telefon,
      isMobile,
      isDesktop
      // isHome
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

:deep(.telefon-mf) {
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-decoration: none;
  color: #ffffff;
}
</style>