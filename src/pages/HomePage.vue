<template lang="pug">
.wrapper
  .box-1
    .section_left
      .text-top {{ content_box_1.text_top }}
      .text-bottom {{ content_box_1.text_bottom }}
      button.btn.btn-home {{ content_box_1.text_btn }}
    .section_right
      img(:src='content_box_1.image')
hr
.wrapper
  .box-2
    .text-top(v-html="content_box_2.text_top" )
    .text-bottom {{ content_box_2.text_bottom }}
    .text-title-tab {{ content_box_2.text_title_tab }}
    .tabs
      input(type="radio" name="tab-btn" id="tab-btn-1" value="" checked)
      label(for="tab-btn-1") {{ "Вкладка 1" }}
      input(type="radio" name="tab-btn" id="tab-btn-2" value="" )
      label(for="tab-btn-2") {{ "Вкладка 2" }}
      input(type="radio" name="tab-btn" id="tab-btn-3" value="" )
      label(for="tab-btn-3") {{ "Вкладка 3" }}
      #content-1.tab-h {{ "Содержимое 1..." }}
      #content-2.tab-h {{ "Содержимое 2..." }}
      #content-3.tab-h {{ "Содержимое 3..." }}






</template>

<script>
 import {useStore} from 'vuex';
// import {useRoute} from "vue-router";
// import {ref, computed} from "vue";
 import {computed} from "vue";
// import store from "@/assets/store/store";


export default {
  name: "HomePage",

  setup(){

     const store = useStore();
    const content_box_1 = computed(() => store.getters.getHomePageBox_1);
    const content_box_2 = computed(() => store.getters.getHomePageBox_2);
    return { content_box_1,
             content_box_2 }
  }
}
</script>

<style lang="scss" scoped>
  .box-1 {
    display: flex;
    .section_left {
      padding-top: 160px;
      padding-bottom: 187px;
      width: 45%;
      .text-top {
        font-weight: 600;
        font-size: 37px;
        line-height: 56px;
        margin-bottom: 45px;
      }
      .text-bottom{
        font-weight: 400;
        font-size: 22px;
        line-height: 36px;
        margin-bottom: 73px;
      }
    }
    .section_right {
      width: 55%;
      img {
        margin-top: 30px;
        height: 727px;
        width: 1038px;
      }
    }
  }
  .box-2 {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .text-top {
      margin-top: 100px;
      margin-bottom: 15px;
      font-weight: 600;
      font-size: 37px;
      line-height: 56px;

    }
    .text-bottom {
      margin-bottom: 55px;
      font-weight: 400;
      font-size: 24px;
      line-height: 36px;
    }
    .text-title-tab {
      margin-bottom: 35px;
      font-weight: 600;
      font-size: 24px;
      line-height: 36px;

    }
  }
</style>
