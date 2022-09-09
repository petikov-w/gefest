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
    include ../assets/pug/tabs
.box-3
  .wrapper
    .seed
      .seed-1
        form()
          .form-title(v-html="content_box_3.form_title")
          .in-1
            input
            input
          .in-2
            input
            input
          button
          .form-policy(v-html="content_box_3.text_policy")

      .seed-2
        img(:src='content_box_3.form_image')
.box-4
.box-5



</template>

<script>
 import {useStore} from 'vuex';
 import {computed} from "vue";

export default {
  name: "HomePage",

  setup(){

    const store = useStore();
    const content_box_1 = computed(() => store.getters.getHomePageBox_1);
    const content_box_2 = computed(() => store.getters.getHomePageBox_2);
    const content_box_3 = computed(() => store.getters.getHomePageBox_3);
    const content_box_4 = computed(() => store.getters.getHomePageBox_4);
    const content_box_5 = computed(() => store.getters.getHomePageBox_5);
    const content_tabs = computed(() => store.getters.getTabs);


    console.log("******** >>>> ", content_tabs.value)
    const icon_tab = require('@/assets/images/lenta_a.png');
    return { content_box_1,
             content_box_2,
             content_box_3,
             content_box_4,
             content_box_5,
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
  .box-3 {
    background-color: #213252;
    width: 100%;
    height: 680px;
    //display: flex;
    //position: relative;
    .seed {
      display: flex;
      .seed-1 {
        //width: 50%;
        form {
          padding-top: 76px;
          color: #ffffff;
          font-size: 40px;
          font-weight: 600;
          line-height: 52px;
        }
      }
      .seed-2 {
        //width: 50%;
        img {
          margin-left: 63px;
          margin-top: -53px;
        }
      }
    }
  }
</style>
