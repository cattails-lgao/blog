<template>
    <aside>
        <section>
            <asideTitle title="'搜'的一下"></asideTitle>
            <asideContent className='search'>
                <input type="text" placeholder="请输入搜索关键字" autocomplete="off">
                <router-link to="/" class="icon iconfont icon-sousuo f_j_c"></router-link>
            </asideContent>
        </section>
        <section>
            <asideTitle title="关于博主"></asideTitle>
            <asideContent className='user'>
                <div class="user_info f_c">
                    <div class="user_pic">
                        <img src="@/assets/img/head.jpg" alt="">
                    </div>
                    <div class="user_autograph">
                        <p>正因为生来什么都没有，因此我们能拥有一切。<span>——《游戏人生》</span></p>
                    </div>
                </div>
                <div class="user_desc f_c">
                    <p><span>0</span>文章</p>
                    <p><span>0</span>评论</p>
                    <p><span>0</span>浏览</p>
                </div>
            </asideContent>
        </section>
        <section>
            <asideTitle title="标签墙"></asideTitle>
            <asideContent className='tags' :tags='tags'>
                <div class="tags_list aside">
                    <router-link :to='{name: item.url}' v-for="item in tags" :key="item.id">{{item.name}}</router-link>
                </div>
            </asideContent>
        </section>
    </aside>
</template>

<script>
import asideTitle from '@/components/aside/aside-title'
import asideContent from '@/components/aside/aside-content'

export default {
    name: 'asideComponent',
    components: {
        asideTitle,
        asideContent
    },
    data() {
        return {
            tags: [
                {id: 1, name: '动漫', url: 'tags'},
                {id: 2, name: '日常', url: 'tags'},
                {id: 3, name: '资源', url: 'tags'},
                {id: 4, name: '后端', url: 'tags'},
                {id: 5, name: '干货', url: 'tags'},
                {id: 6, name: '教程', url: 'tags'},
                {id: 7, name: '服务器', url: 'tags'},
                {id: 8, name: '前端', url: 'tags'},
                {id: 9, name: '生活', url: 'tags'},
                {id: 10, name: '技术', url: 'tags'}
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
aside {
    flex: 0 0 28%;
    padding: 0 1rem;

    section{
        position: relative;
        margin-bottom: 1rem;
        padding: 1rem;
        padding-bottom: 1.5rem;
        border-radius: 10px;
        transition: all .3s ease;
        background-color: rgba($color: #fff, $alpha: .8)
        
        // &::before {
        //     content: "";
        //     position: absolute;
        //     top: 0;
        //     right: 0;
        //     bottom: 0;
        //     left: 0;
        //     z-index: -1;
        //     filter: blur(5px);
        //     transition: all 1s ease;
        //     background: rgba(250, 255, 255, 0.8);
        //     border-radius: 10px;
        // }

        // &:hover {
        //     background: none;
        // }

        // &:hover::before {
        //     filter: blur(0);
        //     background: rgba(255, 255, 255, 1); 
        // }
    }   
}
</style>