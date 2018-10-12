<template>
  <div>
    <router-view/>
    <FooterGuide v-if="$route.meta.showFooter"/>
  </div>
</template>

<script>


  import  FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
    mounted(){
       //发送请求
      this.$store.dispatch('getAddress')
      this.$store.dispatch('getUser')
    },

    components:{
      FooterGuide
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
