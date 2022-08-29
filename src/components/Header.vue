<template lang="pug">
.wrapper
  .header-box
    .logo-box
      .logo-title-header {{ logo_title }}
      .logo-subtitle {{ logo_subtitle }}
    button.btn-header У вас уже есть поставщик?
    .call-box
      .call-telefon +7 (495) 444-44-44
      .order-box
        img(src="../assets/images/icon-telefon.png")
        .call-order Заказать обратный звонок
hr
</template>

<script>
export default {
  name: "Header",
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