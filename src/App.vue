<template>
  <div id="app">
    <router-view />
    <div :class="['back_top', {'hide':hide}]" @click="backToTop">
      <span class="icon iconfont icon-jiantou7 f_j_c"></span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      elem: '',
      hide: true,
      scrollTop: '',
    }
  },
  mounted() {
    this.getDocument();
    this.scrollEvent();
  },
  methods: {
    getDocument() {
      if(document.documentElement && document.documentElement.clientHeight) {
        this.elem = document.documentElement;
      } else if(document.body) {
        this.elem = document.body;
      }
    },
    scrollEvent() {
      window.onscroll = () => {
        this.scrollTop   = Math.ceil(this.elem.scrollTop);
        let clientHeight = this.elem.clientHeight;
        let htmlHeight   = this.elem.scrollHeight;

        if((this.scrollTop + clientHeight) == htmlHeight) {
          this.hide = false; 
        } else {
          this.hide = true;
        }
      }
    },
    backToTop() {
      setTimeout(() => {
        if(this.scrollTop>0) {
          this.backToTop();
        }
        this.elem.scrollTop = this.scrollTop -= 20;
      }, 1);
    }
  },
  destroyed() {
    window.onscroll = null;
  }
}
</script>

<style lang="scss">
  @import url(./assets/css/normalize.css);
  @import url(./assets/css/iconfont.css);

  #app{
    position: relative;

    .back_top{
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 40px;
      height: 40px;
      background: #00d0ff;
      border-radius: 100%;

      span{
        width: inherit;
        height: inherit;
        color: #fff;
        cursor: pointer;
      }
    }
  }
</style>
