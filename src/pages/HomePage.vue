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
      label(for="tab-btn-1")
        .tab-dis
          img(:src='content_tabs.tab_1.image_a')
          .text-tab(v-html="content_tabs.tab_1.text_tab")
      input(type="radio" name="tab-btn" id="tab-btn-2" value="" )
      label(for="tab-btn-2")
        .tab-dis
          img(:src='content_tabs.tab_2.image_a')
          .text-tab(v-html="content_tabs.tab_2.text_tab")
      input(type="radio" name="tab-btn" id="tab-btn-3" value="" )
      label(for="tab-btn-3")
        .tab-dis
        img(:src='content_tabs.tab_3.image_a')
        .text-tab(v-html="content_tabs.tab_3.text_tab")
      input(type="radio" name="tab-btn" id="tab-btn-4" value="" )
      label(for="tab-btn-4")
        .tab-dis
          img(:src='content_tabs.tab_4.image_a')
          .text-tab(v-html="content_tabs.tab_4.text_tab")
      input(type="radio" name="tab-btn" id="tab-btn-5" value="" )
      label(for="tab-btn-5")
        .tab-dis
          img(:src='content_tabs.tab_5.image_a')
          .text-tab(v-html="content_tabs.tab_5.text_tab")
      input(type="radio" name="tab-btn" id="tab-btn-6" value="" )
      label(for="tab-btn-6")
        .tab-dis
          img(:src='content_tabs.tab_6.image_a')
          .text-tab(v-html="content_tabs.tab_6.text_tab")

      #content-1
        .tab-h
          .tab-left-side
            img(:src='content_tabs.tab_1.image_main')
          .tab-right-side
            .section-1
              .title-side {{ content_tabs.tab_1.text_side }}
              ul
                li(v-for="item in content_tabs.tab_1.list_side" :key="index") {{ item }}
            .section-2
              button.btn.btn-home-tab {{ content_box_2.text_btn }}

      #content-2.tab-h
        .tab-h
          .tab-left-side
            img(:src='content_tabs.tab_2.image_main')
          .tab-right-side
            .section-1
              .title-side {{ content_tabs.tab_2.text_side }}
              ul
                li(v-for="item in content_tabs.tab_2.list_side" :key="index") {{ item }}
            .section-2
              button.btn.btn-home-tab {{ content_box_2.text_btn }}
      #content-3.tab-h
        .tab-h
          .tab-left-side
            img(:src='content_tabs.tab_3.image_main')
          .tab-right-side
            .section-1
              .title-side {{ content_tabs.tab_3.text_side }}
              ul
                li(v-for="item in content_tabs.tab_3.list_side" :key="index") {{ item }}
            .section-2
              button.btn.btn-home-tab {{ content_box_2.text_btn }}
      #content-4
        .tab-h
          .tab-left-side
            img(:src='content_tabs.tab_4.image_main')
          .tab-right-side
            .section-1
              .title-side {{ content_tabs.tab_4.text_side }}
              ul
                li(v-for="item in content_tabs.tab_4.list_side" :key="index") {{ item }}
            .section-2
              button.btn.btn-home-tab {{ content_box_2.text_btn }}
      #content-5.tab-h
        .tab-h
          .tab-left-side
            img(:src='content_tabs.tab_5.image_main')
          .tab-right-side
            .section-1
              .title-side {{ content_tabs.tab_5.text_side }}
              ul
                li(v-for="item in content_tabs.tab_5.list_side" :key="index") {{ item }}
            .section-2
              button.btn.btn-home-tab {{ content_box_2.text_btn }}
      #content-6.tab-h
        .tab-h
          .tab-left-side
            img(:src='content_tabs.tab_6.image_main')
          .tab-right-side
            .section-1
              .title-side {{ content_tabs.tab_6.text_side }}
              ul
                li(v-for="item in content_tabs.tab_6.list_side" :key="index") {{ item }}
            .section-2
              button.btn.btn-home-tab {{ content_box_2.text_btn }}

</template>

<script>
 import {useStore} from 'vuex';
// import {useRoute} from "vue-router";
// import {ref, computed} from "vue";
 import {computed} from "vue";
 import storeTabs from "@/modules/storeTabs";
// import store from "@/assets/store/store";


export default {
  name: "HomePage",

  setup(){

    const store = useStore();
    const content_box_1 = computed(() => store.getters.getHomePageBox_1);
    const content_box_2 = computed(() => store.getters.getHomePageBox_2);
    const content_tabs = computed(() => storeTabs.state.home_page_tabs);


    console.log("******** >>>> ", content_tabs.value)
    const icon_tab = require('@/assets/images/lenta_a.png');
    return { content_box_1,
             content_box_2,
             content_tabs
    }
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
