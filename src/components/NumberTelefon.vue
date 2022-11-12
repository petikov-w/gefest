<template lang="pug">
.telefon(v-if="isDesktop")
  a( :href="`tel:${PhoneNumberLink(tel)}`" class="telefon") {{ PhoneNumberFormat(tel) }}

.telefon-m(v-if="isMobile")
  a( :href="`tel:${PhoneNumberLink(tel)}`" class="telefon-m") {{ PhoneNumberFormat(tel) }}
//<div>
//  <a :href="`tel:${PhoneNumberLink(tel)}`" class="telefon">{{ PhoneNumberFormat(tel) }}</a>
//</div>
</template>

<script>
import {useStore} from 'vuex';
import {ref,computed} from "vue";

export default {
  name: "NumberTelefon",
  props: {tel: String},
  setup(props){
    const store = useStore();
    const number = props.tel;
    const isMobile = computed(() => store.getters.getIsMobile);
    const isDesktop = computed(() => store.getters.getIsDesktop);
    //==============================================================
    const PhoneNumberFormat = (number) => {
      let temp_number;
      let pref;
      temp_number = `${number}`;
      if (temp_number[0] == '8') {
        pref = temp_number.substr(0, 1)
      }
      // console.log(temp_number);
      if (temp_number[0] == '7') {
        pref = '+' + temp_number.substr(0, 1)
      }
      temp_number = temp_number.substr(-10);
      return `${pref} (${temp_number.substr(0, 3)}) ${temp_number.substr(3, 3)}-${temp_number.substr(6, 2)}-${temp_number.substr(8, 2)}`;
    }
    const PhoneNumberLink = (number) => {
      let temp_number;
      let pref;
      temp_number = `${number}`;
      if (temp_number[0] == '8') {
        pref = temp_number.substr(0, 1)
      }
      if (temp_number[0] == '7') {
        pref = '+' + temp_number.substr(0, 1)
      }
      // temp_number = temp_number.substr(-10);
      return `${pref}${temp_number.substr(-10)}`;
    }
    //==============================================================
    return { PhoneNumberFormat,
             PhoneNumberLink,
             isMobile,
             isDesktop,
             number   }
  }

}
</script>

<style lang="scss" scoped>

</style>