<template lang="pug">
h1 {{ title }}
</template>

<script>
export default {
  name: "App",
  setup() {
      const title = `${process.env.VUE_APP_TITLE}`
    return { title }
  }
}
</script>

<style scoped>

</style>