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
            img(:src='content_box_4.left_section[index].image')
            p(v-html="content_box_4.left_section[index].title" )

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
.box-6
  .wrapper
    div(v-for="(item, index) in content_box_6" :key="index")
      .section-info
        .left
          sec(v-if="index!=1")
            .section-title(v-html="content_box_6[index].title" )
            .section-text(v-html="content_box_6[index].text" )
          img(v-else :src='content_box_6[index].image')
        .right
          img(v-if="index!=1" :src='content_box_6[index].image')
          sec(v-else)
            .section-title(v-html="content_box_6[index].title" )
            .section-text(v-html="content_box_6[index].text" )
.box-7
  .wrapper
    sections
      section-info
        .title(v-html="content_box_7.title")
        .text1(v-html="content_box_7.text1")
        .text2(v-html="content_box_7.text2")
      section-image
        img(:src='content_box_7.image')
      section-form
        include ../assets/pug/form_box7
.box-8
  .wrapper
    .title-1 {{ content_box_8.text_title_1 }}
    section
      subsection
        .title-2 {{ content_box_8.text_title_2 }}
        .text(v-html="content_box_8.text" )
      subsection-2
        img(:src='content_box_8.image')
        img(:src='content_box_8.icon')
.box-9
  .wrapper
    section
      subsection
        .title-2 {{ content_box_9.text_title }}
        .text(v-html="content_box_9.text" )
      subsection-2
       subsection-3
        img(:src='content_box_9.icon_partner1')
        img(:src='content_box_9.icon_partner2')
       subsection-4
        img(:src='content_box_9.icon_partner3')
        img(:src='content_box_9.icon_partner4')

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
    const content_box_6 = computed(() => store.getters.getHomePageBox_6);
    const content_box_7 = computed(() => store.getters.getHomePageBox_7);
    const content_box_8 = computed(() => store.getters.getHomePageBox_8);
    const content_box_9 = computed(() => store.getters.getHomePageBox_9);
    const content_tabs = computed(() => store.getters.getTabs);


    console.log("******** >>>> ", content_tabs.value)
    const icon_tab = require('@/assets/images/lenta_a.png');
    return { content_box_1,
      content_box_2,
      content_box_3,
      content_box_4,
      content_box_5,
      content_box_6,
      content_box_7,
      content_box_8,
      content_box_9,
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
.box-6 {
  .section-info {
    display: flex;
    font-weight: 400;
    align-items: center;
    margin-bottom: 20px;
    .section-title {
      font-size: 22px;
      line-height: 32px;
      margin-bottom: 35px;
      max-width: 508px;
    }
    .section-text {
      font-size: 16px;
      line-height: 24px;
      max-width: 508px;
    }
    .left, .right {
      width: 50%;
    }
  }
}
.box-7 {
  background-color: #F6F6F6;
  width: 100%;
  height: 763px;
  margin-top: 60px;
  sections {
    display: flex;

  }
  section-info {
    width: 35%;
    display: flex;
    flex-direction: column;
    .title {
      font-size: 42px;
      font-weight: 700;
      line-height: 50px;
      margin-bottom: 38px;
      margin-top: 88px;
      //position: absolute;
    }
    .text1 {
      font-size: 16px;
      font-weight: 400;
      line-height: 28px;
      //position: absolute;
    }
    .text2 {
      background-color: #ffffff;
      //width: 480px;
      padding: 33px 30px;
      font-size: 16px;
      font-weight: 400;
      line-height: 28px;
      border: 1px solid #DBE1E4;
      border-radius: 8px;
      position: absolute;
      z-index: 99;
      margin-top: 521px;
      margin-left: 125px;
      //top: 30px;
      //left: 200px;
    }
  }
  section-image {
    width: 28%;
    position: relative;
    border-right: 1px solid #DBE1E4;

    z-index: 1;
    img {
      margin-left: -170px;
    }
  }
  section-form {
    width: 40%;
  }
}
.box-8 {
  color: #213252;
  .title-1 {
    font-size: 40px;
    font-weight: 600;
    line-height: 52px;
    margin-top: 125px;
    margin-bottom: 86px;
  }
  .title-2 {
    font-size: 22px;
    font-weight: 600;
    line-height: 32px;
    margin-bottom: 24px;
  }
  .text {
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
  }

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin-bottom: 120px;
  }
  subsection {
    width: 50%;
  }
  subsection-2 {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      position: absolute;
    }
  }



}
.box-9 {
   section {
     display: flex;
     align-items: center;
     margin-bottom: 162px;
     subsection {
       width: 55%;
       margin-top: 65px;
       .title-2 {
         font-size: 22px;
         font-weight: 600;
         line-height: 32px;
         margin-bottom: 24px;
       }
       .text {
         font-size: 18px;
         font-weight: 400;
         line-height: 30px;
       }
     }
     subsection-2 {
       width: 45%;
     }
     subsection-4 {
       width: 500px;
       display: flex;
       align-items: flex-start;
       justify-content: space-between;
       margin-top: 40px;
     }
   }
}

</style>
