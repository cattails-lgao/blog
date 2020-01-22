<template>
  <div class="navigator">
      <ul class="f_c">
        <li class="f_j_c" v-for="item in navList" :key="item.id">
            <router-link :to='{name: item.url}' class="f_j_c">{{item.name}}</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: {
        navList: {
            type: Array,
            required: true
        },
        styles: {
            type: Object,
            default: function() {
                return {}
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.navigator{
    height: 100%;
    ul {
        height: inherit;
        li{
            height: inherit;
            position: relative;
            z-index: 2;

            a{
                padding: 0 1rem;
                height: 100%;
                color:#fff;
            }
            &::before {
                content: '';
                display: block;
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: -1;
                transition: all .3s ease;
                border-radius: 100%;
                transform: scale(0);
            }
            &:hover::before {
                border-radius: 0;
                opacity: .8;
                filter: blur(1px);
                transform: scale(1);
                background: rgb(0, 208, 255);
            }
        }
    }
}
</style>