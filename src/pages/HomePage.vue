<template lang="pug">
.wrapper
  .box-1
    .section_left
      p.top {{ content_box_1.text_top }}
      p.bottom {{ content_box_1.text_bottom }}
    .section_right
      img(:src='content_box_1.image')
</template>

<script>
 import {useStore} from 'vuex';
// import {useRoute} from "vue-router";
// import {ref, computed} from "vue";
 import {computed} from "vue";
// import {secWord} from "@/assets/js/function";
// import store from "@/assets/store/store";


export default {
  name: "HomePage",

  setup(){

     const store = useStore();
    // store.dispatch('setPosts');
    // const title = computed(() => process.env.VUE_APP_TITLE);
    const content_box_1 = computed(() => store.getters.getHomePageBox_1);
    return { content_box_1 }
  }
}
</script>

<style lang="scss" scoped>
  .box-1 {
    display: flex;
    //position: relative;
    .section_left {
      padding-top: 50px;
      width: 40%;
    }
    .section_right {
      width: 60%;
      img {
        margin-top: -50px;
        height: 727px;
        width: 1038px;
        //position: absolute;

        //margin-left: 50px;
      }
    }

  }
</style>
