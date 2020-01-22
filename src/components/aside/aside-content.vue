<template>
    <div :class="['aside_content', className]" :style="className == 'tags' ? styles : ''">
        <slot></slot> 
    </div>
</template>

<script>
export default {
    name:'aside-content',
    props: {
        className: {
            type: String,
            default: 'search'
        },
        tags: {
            type: Array,
            default: function(){
                return [];
            }
        },
        styles: {
            type: Object,
            default: function() {
                return {};
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.aside_content{
    position: relative;
}
.search{
    input{
        -webkit-appearance: none;
        width: 100%;
        display: block;
        font-size: 14px;
        line-height: 40px;
        height: 40px;
        padding: 0 2.5rem 0 .8rem;
        box-sizing: border-box;
        color: #313131;
        border: 1px solid #ccc;
        border-radius: 2px;
        outline: 0;
        background-color: #fff;
        box-shadow: 0 1px 4px rgba(0,0,0,0.04);
        border-radius: 10px;
    }

    a{
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        width: 2.5rem;
    }
}
.user{
    .user_info{
        margin-bottom: 1.2rem;
        height: 5rem;
        .user_pic{
            width: 5rem;
            height: inherit;
            padding-right: 1rem;

            img{
                display: block;
                width: inherit;
                height: inherit;
            }
        }
        .user_autograph{
            height: inherit;

            p{
                color: #333;
                display: flex;
                flex-direction: column;
                height: inherit;
                justify-content: space-between;

                span{
                    display: flex;
                    font-size: 12px;
                    justify-content: flex-end;
                    color: #aaa;
                }
            }
            
        }
    }
    .user_desc{
        p{
            margin-right: .8rem;
            font-size: .9rem;
            color: #aaa;

            span{
                margin-right: .3rem;
                color: #333;
            }
        }
        p:last-child{
            margin-right: 0;
        }
    }
}
.tags{
    
    height: inherit;
    border-radius: 10px;
    
    &>.tags_list {
        display: flex;
        flex-flow: wrap;
        padding: 0 1rem;
        padding-top: .5rem;

        a{
            border: 1px solid #ececec;
            border-radius: 2px;
            box-sizing: border-box;
            font-size: .9rem;
            text-decoration: none;
            margin-bottom: 6px;
            margin-right: 6px;
            padding: 5px 10px;
            transition: all .3s linear;

            &:hover{
                box-shadow: 2px 2px 2px rgba(0,0,0,0.1);
                border-color: #D6555F;
                color: #D6555F;
            }
        }
    }
}
</style>