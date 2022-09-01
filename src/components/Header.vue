<template lang="pug">
.wrapper
  .header-box
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
export default {
  name: "Header",
  components: { Telefon },
  setup(){
    const logo_title = "Gefest";
    const telefon = '74954444448';
    const logo_subtitle = "Производство и продажа металлопроката";
    return {
      logo_title,
      logo_subtitle,
      telefon
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