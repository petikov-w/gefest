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
        .call-telefon-footer +7 (495) 444-44-44
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
export default {
  name: "Footer",
  setup(){
    const logo_title = "Gefest";
    const logo_subtitle = "Производство и продажа металлопроката";
    return {
      logo_title,
      logo_subtitle
    }
  }
}
</script>

<style scoped>

</style>