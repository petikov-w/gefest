<template lang="pug">
swiper(
  class="swiper"
  :modules="modules"
  :initial-slide="0"
  :slides-per-view="slidesView"
  :navigation="{ prevEl: prev, nextEl: next}"
  :pagination="false"
  :loop="false"
  )
  .swiper-button-prev(ref="prev")
  .swiper-button-next(ref="next")

  swiper-slide(v-for="(item, index) in listItems" :key="item.index")
    img(:src="item")

</template>

<script>
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import {ref} from "vue";

export default {
  name: "slider",
  components: {Swiper, SwiperSlide},
  props: {
    listItems: {
      type: Array,
      default: []
    },
    slidesView: {
      type: Number,
      default: 1
    }
  },
  setup(props) {
    const prev = ref(null);
    const next = ref(null);
    const listItems = props.listItems;
    const slidesView = props.slidesView;
    console.log('=======>>>>>>> ',listItems)
    return {prev,
            next,
            listItems,
            slidesView,
            modules: [Autoplay,
                      Pagination,
                      Navigation]}
  }

}
</script>

<style lang="scss" scoped>

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 82%;
  }
}

.swiper-button-prev,
.swiper-button-next {
  --swiper-navigation-size: 16px;
  color: dimgrey;
  font-size: 16px;
  padding-left: -20px;
}
</style>