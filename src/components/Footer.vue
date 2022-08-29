<template lang="pug">
footer
  .wrapper
    .footer-box
      .logo-box
        .logo-title-footer {{ logo_title }}
        .logo-subtitle {{ logo_subtitle }}
      .call-box
        .call-telefon +7 (495) 444-44-44
        .order-box
          img(src="../assets/images/icon-telefon.png")
          .call-order Заказать обратный звонок

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