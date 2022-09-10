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
       include ../assets/pug/form_box3
      .seed-2
        img(:src='content_box_3.form_image')
.box-4
  .wrapper
    .text-title {{ content_box_4.text_title }}
    .text-subtitle {{ content_box_4.text_subtitle }}
    .section-sklad
      .left-box
        div(v-for="(item, index) in content_box_4.left_section" :key="index")
          .list-sklad
            img(:src='item.image')
            p(v-html="item.title" )

      .right-box
        .sklad-info
          img(:src='content_box_4.right_section.image')
          .ssdd
            .text-sklad(v-html="content_box_4.right_section.title")
.box-5
  .wrapper
    .layout
      img(:src='content_box_5.image_fon')
      .text-title(v-html="content_box_5.title" )



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
    background-color: #1A2C41;
    width: 100%;
    height: 680px;
    .seed {
      display: flex;
      .seed-1 {
      }
      .seed-2 {
        img {
          margin-top: -53px;
        }
      }
    }
  }
  .box-4 {
    .text-title {
      font-size: 40px;
      font-weight: 600;
      line-height: 52px;
      color: #213252;
      margin-top: 161px;
      margin-bottom: 25px;
    }
    .text-subtitle{
      font-size: 24px;
      font-weight: 400;
      line-height: 36px;
      color: #213252;
      margin-bottom: 60px;
    }
    .section-sklad {
      display: flex;
      justify-content: space-between;
      .list-sklad {
        display: flex;
        align-items: center;
        //justify-content: center;
        img {
          width: 192px;
          margin-bottom: 25px;
          margin-right: 40px;
        }
        p {
          margin-top: -20px;
        }
      }
    }
    .right-box {
      .sklad-info  {
        position: relative;
        .ssdd {
          bottom: 0;
          position: absolute;
          background-color: #211D1D;
          height: 90px;
          width: 100%;
          .text-sklad {
            margin-left: 50px;
            margin-top: 17px;
            color: #ffffff;
            font-weight: 400;
            font-size: 18px;
            line-height: 28px;
          }
        }

      }

    }


  }
  .box-5 {
    margin: 175px 0;
    .layout {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      .text-title {
        position: absolute;
        font-size: 40px;
        font-weight: 600;
        line-height: 52px;
        text-align: center;
        color: #ffffff;
      }
    }
  }
</style>
