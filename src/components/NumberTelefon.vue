<template lang="pug">
.telefon(v-if="isDesktop")
  a( :href="`tel:${PhoneNumberLink(tel)}`" class="telefon") {{ PhoneNumberFormat(tel) }}

.telefon-m(v-if="isMobile && componentName==='header'")
  a( :href="`tel:${PhoneNumberLink(tel)}`" class="telefon-m") {{ PhoneNumberFormat(tel) }}

.telefon-mf(v-if="isMobile && componentName==='footer'")
  a( :href="`tel:${PhoneNumberLink(tel)}`" class="telefon-mf") {{ PhoneNumberFormat(tel) }}

</template>

<script>
import {useStore} from 'vuex';
import {ref,computed} from "vue";

export default {
  name: "NumberTelefon",
  props: {tel: String,
          isHeader: {require: true, type: Boolean}},
  setup(props){
    const store = useStore();
    const number = props.tel;
    const isHeader = ref(props.isHeader);
    const isMobile = computed(() => store.getters.getIsMobile);
    const isDesktop = computed(() => store.getters.getIsDesktop);
    const componentName = computed(() => isHeader.value ? "header" : "footer");
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
             componentName,
             number   }
  }
}
</script>

<style lang="scss" scoped>

</style>