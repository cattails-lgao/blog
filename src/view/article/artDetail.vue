<template>
  <div class="art_detail">
     <!-- 头部 -->
    <headerComponent></headerComponent>
    <!-- 主体 -->
    <MainComponents>
      {{content}}
    </MainComponents>
    <!-- 底部 -->
    <footerComponent></footerComponent>
  </div>
</template>

<script>
import headerComponent from "@/components/header/Header";
import MainComponents from "@/components/main/Main";
import footerComponent from "@/components/footer/Footer";

export default {
  naem: 'art_detail',
  props: {
    art_id: Number
  },
  components: {
    headerComponent,
    MainComponents,
    footerComponent
  },
  data() {
    return {
      content: 'Hello World'
    }
  },
  mounted() {
    console.log(this.art_id);
  }
}
</script>

<style lang="scss" scoped>

</style>