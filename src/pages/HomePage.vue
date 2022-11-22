<template lang="pug">
h3(v-if="isDesktop" style="color:blue") Десктопная версия
h3(v-if="isMobile" style="color:red; text-align:center; margin-bottom:-10px")  Мобильная версия
//====================== 1 ===============================
.wrapper
  .box-1(v-if="isDesktop")
    .section_left
      .text-top {{ content_box_1.text_top }}
      .text-bottom {{ content_box_1.text_bottom }}
      button.btn.btn-home {{ content_box_1.text_btn }}
    .section_right
      img(:src='content_box_1.image')
  .box-1-m(v-if="isMobile")
    .section_left
      .text-top {{ content_box_1.text_top }}
      .text-bottom {{ content_box_1.text_bottom }}
      img(:src='content_box_1.image')
      button.btn.btn-home-box1-m {{ content_box_1.text_btn }}
    //.section_right
     //
hr
//====================== 2 ===============================
.wrapper
  .box-2(v-if="isDesktop")
    .text-top(v-html="content_box_2.text_top" )
    .text-bottom {{ content_box_2.text_bottom }}
    .text-title-tab {{ content_box_2.text_title_tab }}
    include ../assets/pug/tabs
  .box-2-m(v-if="isMobile")
    .text-top(v-html="content_box_2.text_top" )
    .text-bottom {{ content_box_2.text_bottom }}
    .text-title-tab {{ content_box_2.text_title_tab }}
     SliderTabs(:list-items="content_tabs_m")
     //include ../assets/pug/tabs_m
//====================== 3 ===============================
.box-3(v-if="isDesktop")
  .wrapper
    .seed
      .seed-1
        include ../assets/pug/form_box3
      .seed-2
        img(:src='content_box_3.form_image')
.box-3-m(v-if="isMobile")
  .wrapper
    include ../assets/pug/form_box3_m
    //.seed
    //  .seed-1
    //    include ../assets/pug/form_box3_m
      //.seed-2
      //  img(:src='content_box_3.form_image')
//====================== 4 ===============================
.box-4(v-if="isDesktop")
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
.box-4-m(v-if="isMobile")
  .wrapper
    .text-title-m {{ content_box_4.text_title }}
    .text-subtitle-m {{ content_box_4.text_subtitle }}
    .section-sklad
      .left-box
        div(v-for="(item, index) in content_box_4.left_section" :key="index")
          .list-sklad
            img(width="125" :src='content_box_4.left_section[index].image')
            p(v-html="content_box_4.left_section[index].title" )

      .right-box
        .sklad-info
          img(width="290" :src='content_box_4.right_section.image')
          .ssdd
            .text-sklad(v-html="content_box_4.right_section.title")
//====================== 5 ===============================
.box-5(v-if="isDesktop")
  .wrapper
    .layout
      img(:src='content_box_5.image_fon')
      .text-title(v-html="content_box_5.title" )
.box-5-m(v-if="isMobile")
  .wrapper
    .layout
      img(:src='content_box_5.image_fon_m')
      .text-title(v-html="content_box_5.title" )
//====================== 6 ===============================
.box-6(v-if="isDesktop")
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
.box-6-m(v-if="isMobile")
  .wrapper
    div(v-for="(item, index) in content_box_6" :key="index")
      .section-info
        .left
          .section-title(v-html="content_box_6[index].title" )
          .section-text(v-html="content_box_6[index].text" )
          img(:src='content_box_6[index].image')
//====================== 7 ===============================
.box-7(v-if="isDesktop")
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
.box-7-m(v-if="isMobile")
  .wrapper
    sections
      section-info
        .title(v-html="content_box_7.title")
        .text1(v-html="content_box_7.text1")
        //
        include ../assets/pug/form_box7
        img.mis(:src='content_box_7.image_m')
        .text2(v-html="content_box_7.text2")
      //section-form

      //section-image
      //  img(:src='content_box_7.image')

//====================== 8 ===============================
.box-8(v-if="isDesktop")
  .wrapper
    .title-1 {{ content_box_8.text_title_1 }}
    section
      subsection
        .title-2 {{ content_box_8.text_title_2 }}
        .text(v-html="content_box_8.text" )
      subsection-2
        img(:src='content_box_8.image')
        img(:src='content_box_8.icon')
.box-8-m(v-if="isMobile")
  //.wrapper
  .title-1 {{ content_box_8.text_title_1 }}
  .title-2 {{ content_box_8.text_title_2 }}
  .text(v-html="content_box_8.text" )
  subsection-2
   img.i1(:src='content_box_8.image')
   img.i2(:src='content_box_8.icon')
hr
//====================== 9 ===============================
.box-9(v-if="isDesktop")
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
.box-9-m(v-if="isMobile")
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
//====================== 10 ===============================
.box-10(v-if="isDesktop")
  .wrapper
    section-1
      .title(v-html="content_box_10.text_title" )
      .subtitle(v-html="content_box_10.text_subtitle" )
    section-2
    Slider(:list-items="content_box_10.list_doc" :slides-view="4")
.box-10-m(v-if="isMobile")
  .wrapper-m
    section-1
      .title(v-html="content_box_10.text_title" )
      .subtitle(v-html="content_box_10.text_subtitle" )
    section-2
      Slider(:list-items="content_box_10.list_doc")

//====================== 11 ===============================
.box-11(v-if="isDesktop")
  .wrapper
    section
      subsection-1
        img(:src='content_box_11.image_director')
        .text-director(v-html="content_box_11.text_director")
      subsection-2
        .title(v-html="content_box_11.text_title" )
        .subtitle.s1(v-html="content_box_11.text_subtitle1" )
        .subtitle.s2(v-html="content_box_11.text_subtitle2" )
        section-form
          include ../assets/pug/form_box11
.box-11-m(v-if="isMobile")
  //.wrapper
  section
    //subsection-2
    .title(v-html="content_box_11.text_title" )
    .subtitle.s1(v-html="content_box_11.text_subtitle1" )
    .subtitle.s2(v-html="content_box_11.text_subtitle2" )
    img.mis(:src='content_box_11.image_director_m')
    .text-director(v-html="content_box_11.text_director")
    //subsection-1
    //  img.mis(:src='content_box_11.image_director')
    //  .text-director(v-html="content_box_11.text_director")
    section-form
      include ../assets/pug/form_box11
    //subsection-1
    //  img(:src='content_box_11.image_director')
    //  .text-director(v-html="content_box_11.text_director")
    //subsection-2
    //  .title(v-html="content_box_11.text_title" )
    //  .subtitle.s1(v-html="content_box_11.text_subtitle1" )
    //  .subtitle.s2(v-html="content_box_11.text_subtitle2" )
    //  section-form
    //    include ../assets/pug/form_box11

</template>

<script>
import {useStore} from 'vuex';
import {computed, ref} from "vue";
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import Slider from "@/components/slider";
import SliderTabs from "@/components/sliderTabs";

export default {
  name: "HomePage",
  components: {Slider, SliderTabs, Swiper, SwiperSlide},


  setup(){

    const store = useStore();
    const prev = ref(null);
    const next = ref(null);
    const content_box_1 = computed(() => store.getters.getHomePageBox_1);
    const content_box_2 = computed(() => store.getters.getHomePageBox_2);
    const content_box_3 = computed(() => store.getters.getHomePageBox_3);
    const content_box_4 = computed(() => store.getters.getHomePageBox_4);
    const content_box_5 = computed(() => store.getters.getHomePageBox_5);
    const content_box_6 = computed(() => store.getters.getHomePageBox_6);
    const content_box_7 = computed(() => store.getters.getHomePageBox_7);
    const content_box_8 = computed(() => store.getters.getHomePageBox_8);
    const content_box_9 = computed(() => store.getters.getHomePageBox_9);
    const content_box_10 = computed(() => store.getters.getHomePageBox_10);
    const content_box_11 = computed(() => store.getters.getHomePageBox_11);
    const content_tabs = computed(() => store.getters.getTabs);
    const content_tabs_m = computed(() => store.getters.getTabs_m);
    const isMobile = computed(() => store.getters.getIsMobile);
    const isDesktop = computed(() => store.getters.getIsDesktop);
    // const listDocuments = computed(() => store.getters.getHomePageBox_10.list_doc);

    //const icon_tab = require('@/assets/images/lenta_a.png');
    return { content_box_1,
      content_box_2,
      content_box_3,
      content_box_4,
      content_box_5,
      content_box_6,
      content_box_7,
      content_box_8,
      content_box_9,
      content_box_10,
      content_box_11,
      content_tabs,
      content_tabs_m,
      isMobile,
      isDesktop,
      prev,
      next,
      modules: [Navigation]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
