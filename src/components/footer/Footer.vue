<template>
  <footer>
      <div class="linkmore">
        <a href="">首页</a>
        <a href="">关于本站</a>
        <a href="">友情链接</a>
        <a href="">github</a> 
      </div>
      <div class="copyright">
        <span>
          © 2019-2019
          <a href="">www.myweb.com</a>
          All Rights Reserved
        </span>
        <a href="">粤ICP备16002604-3</a>
      </div>
  </footer>
</template>

<script>
export default {
  name: 'footerComponent'
}
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  height: 15vh;
  box-sizing: border-box;

  .linkmore,.copyright {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .linkmore a,.copyright a {
    color: #fff;
  }
  .linkmore {
    color:#fff;
    a {
      padding: .5rem;
    }
  }
  .copyright {
    color:#fff;
    a {
      padding: 0 .5rem;
    }
  }
}
</style>