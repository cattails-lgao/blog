<template>
  <div id='archives'>
    <!-- 头部 -->
    <headerComponent></headerComponent>
    <!-- 主体 -->
    <MainComponents>
        <div class="archives_content">
            <commonTitle>存档 - 共 {{num}} 文章</commonTitle>
            <div class="archives_times_list">
                <ul>
                    <li v-for="item in times" :key="item.id"><span>{{item.date}}({{item.num}})</span></li>
                </ul>
            </div>
        </div>  
    </MainComponents>
    <!-- 底部 -->
    <footerComponent></footerComponent>
  </div>
</template>

<script>
import headerComponent from "@/components/header/Header";
import MainComponents from "@/components/main/Main";
import footerComponent from "@/components/footer/Footer";
import commonTitle from "@/components/common/common-title";

export default {
    name: 'archives',
    components: {
        headerComponent,
        MainComponents,
        footerComponent,
        commonTitle
    },
    data() {
        return {
            times: [
                {id: 1, date: '2019年11月', num: 1},
                {id: 2, date: '2019年10月', num: 2}
            ],
            num: 55
        }
    }
}
</script>

<style lang="scss" scoped>
#archives {
    .archives_content {
        height: inherit;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 10px;

        .archives_title{
            font-size: 1.375rem;
            padding: 1rem;
            font-weight: bold;
        }

        .archives_times_list{
            ul>li {
                padding: .9rem 1rem;
                border-bottom: 1px solid #ddd;
                font-size: 14px;
                color: #3d4450;
                transition: all .2s linear;
                
                &:hover{
                    border-radius: 3px;
                    border: 1px solid #e5e9ef;
                    border-bottom: 0 solid #e5e9ef;
                    box-shadow: 1px 2px 2px rgba(0,0,0,.3);
                    color: #00a1d6;
                    background: #fff;
                }

                span{
                    display: block;
                    transition: .3s;
                }

                &:hover>span{
                    padding-left: .5rem;
                }
            }
        }
    }
}
</style>