<template>
  <div id="tags">
    <!-- 头部 -->
    <headerComponent></headerComponent>
    <!-- 主体 -->
    <MainComponents>
      <articleComponent v-for="(item, index) in list" :key="index" :data="item"></articleComponent>
    </MainComponents>
    <!-- 底部 -->
    <footerComponent></footerComponent>
  </div>
</template>

<script>
import headerComponent from "@/components/header/Header";
import MainComponents from "@/components/main/Main";
import footerComponent from "@/components/footer/Footer";
import articleComponent from '@/components/article/article'

export default {
  name: "tags",
  components: {
    articleComponent,
    footerComponent,
    headerComponent,
    MainComponents
  },
  data() {
    return {
      list: [
        {
          id: 1,
          nickname: '小米',
          pic: require('@/assets/img/head.jpg'),
          time: '2019-11-29',
          tags: ['动漫', '技术'],
          title: '近期随想',
          desc: '入职新公司快大半年了，也逐渐适应了这边的工作节奏。',
          commentNum: 1,
          visitNum: 2
        },
        {
          id: 2,
          nickname: '小哄',
          pic: require('@/assets/img/head.jpg'),
          time: '2019-11-29',
          tags: ['动漫', '技术'],
          title: '近期随想1',
          desc: '入职新公司快大半年了，也逐渐适应了这边的工作节奏。',
          commentNum: 1,
          visitNum: 2
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
