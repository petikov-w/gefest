<template lang="pug">
header
  .wrapper
    .header-box(v-if="isDesktop")
      Logo(:is-header="true")
      button.btn.btn-header У вас уже есть поставщик?
      .call-box
        Telefon(:tel='telefon')
        .order-box
          img(src="../assets/images/icon-telefon.png")
          .call-order Заказать обратный звонок
    .header-box-m(v-if="isMobile")
      Logo(:is-header="true")
      section-02
        button.btn.btn-header-m У вас уже есть поставщик?
        .call-box
          Telefon(:tel='telefon')
          .order-box
            img(src="../assets/images/icon-telefon.png")
            .call-order-m Заказать обратный звонок
  hr
</template>

<script>
import Telefon from "@/components/NumberTelefon";
import Logo from "@/components/Logo";
import {useStore} from 'vuex';
import {computed} from "vue";
export default {
  name: "Header",
  components: { Telefon, Logo },
  setup(){
    const store = useStore();
    const telefon = computed(()=> store.getters.getTelefon);
    const isMobile = computed(() => store.getters.getIsMobile);
    const isDesktop = computed(() => store.getters.getIsDesktop);
    return { telefon, isMobile, isDesktop }
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

:deep(.telefon-m) {
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.5px;
  text-decoration: none;
  color: #000000;
}

</style>