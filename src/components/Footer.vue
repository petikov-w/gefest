<template lang="pug">
footer
  .wrapper
    .footer-box-top
      .logo-box
        .logo-title-footer {{ logo_title }}
        .logo-subtitle-footer {{ logo_subtitle }}
      .socialnet-box
        .circle
          img(src="../assets/images/icon-whatsapp.png")
        .circle
          img(src="../assets/images/icon-telegram.png")
        .circle
          img(src="../assets/images/icon-skype.png")
      .call-box
        Telefon(:tel='telefon')
        //.call-telefon-footer +7 (495) 444-44-44
        .order-box
          img(src="../assets/images/icon-telefon.png")
          .call-order Заказать обратный звонок
    .footer-box-bottom
      .security-box
        span.security-link Политика конфиденциальности
        span.security-link Пользовательское соглашение
      span.devloper-link Разработка сайта - PDS

</template>

<script>
import Telefon from "@/components/NumberTelefon";
export default {
  name: "Footer",
  components: { Telefon},
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
  color: #ffffff;
}

</style>