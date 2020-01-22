<template>
  <div id="tags-wall">
    <!-- 头部 -->
    <headerComponent></headerComponent>
    <!-- 主体 -->
    <MainComponents>
        <!-- <asideContent className='tags' :styles='styles'> -->
        <asideContent className='tags' :styles='styles'>
            <commonTitle>共{{tags.length}}标签</commonTitle>
            <div class="tags_list">
                <router-link :to='{name: item.url}' v-for="item in tags" :key="item.id" :style="styles">{{item.name}}({{item.num}})</router-link>
            </div>
        </asideContent>
    </MainComponents>
    <!-- 底部 -->
    <footerComponent></footerComponent>
  </div>
</template>

<script>
import headerComponent from "@/components/header/Header";
import MainComponents from "@/components/main/Main";
import footerComponent from "@/components/footer/Footer";
import asideContent from '@/components/aside/aside-content';
import commonTitle from '@/components/common/common-title'

export default {
    name: 'tagsWall',
    components: {
        headerComponent, 
        MainComponents, 
        footerComponent, 
        asideContent,
        commonTitle
    },
    data() {
        return {
            tags: [
                {id: 1, name: '动漫', num: 2, url: 'tags'},
                {id: 2, name: '日常', num: 2, url: 'tags'},
                {id: 3, name: '资源', num: 2, url: 'tags'},
                {id: 4, name: '后端', num: 2, url: 'tags'},
                {id: 5, name: '干货', num: 2, url: 'tags'},
                {id: 6, name: '教程', num: 2, url: 'tags'},
                {id: 7, name: '服务器', num: 2, url: 'tags'},
                {id: 8, name: '前端', num: 2, url: 'tags'},
                {id: 9, name: '生活', num: 2, url: 'tags'},
                {id: 10, name: '技术', num: 2, url: 'tags'}
            ],
            styles: {
                background: 'rgba(255, 255, 255, .8)'
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>