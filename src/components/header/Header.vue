<template>
  <header>
    <div class="header_top">
      <!-- log -->
      <div class="log f_j_c">
        <router-link to="/">
          <img src="@/assets/img/logo.gif" alt />
        </router-link>
      </div>
      <!-- 站内导航 -->
      <div class="header_nav f_c">
        <div class="header_left f_c">
          <!-- 导航组件 -->
          <navigator :navList="navList"></navigator>
        </div>
        <div class="header_right f_c">
          <!-- 登录 -->
          <ul class="f_c">
            <li class="f_j_c">
              <router-link to="/" class="f_j_c">登录</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="header_bottom">
      <h2>未来的事无人知晓, 所以才有无穷可能</h2>
    </div>
  </header>
</template>

<script>
import navigator from "@/components/navigator/Nav";

export default {
  name: "headerComponent",
  components: {
    navigator
  },
  data() {
    return {
      navList: [
        { id: 1, name: "首页", url: 'index' },
        { id: 2, name: "标签墙", url: 'tagsWall'},
        { id: 3, name: "存档", url: 'archives' },
        { id: 4, name: "留言", url: 'leaveMessage' }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
header {
  position: relative;
  height: 30vh;
  .header_top {
    position: relative;
    z-index: 2;
    height: 2.625rem;
    display: flex;
    align-items: center;
    padding: 0 2rem;
    position: relative;
    // background-color: rgba(10, 10, 0, 0.5);

    // &::before {
    //   content: "";
    //   position: absolute;
    //   top: 0;
    //   right: 0;
    //   bottom: 0;
    //   left: 0;
    //   z-index: -1;
    //   background-image: url("../../assets/img/k-on.jpg");
    //   background-size: cover;
    //   background-position: center center;
    //   background-attachment: fixed;
    //   filter: blur(5px);
    // }

    .log,
    .search,
    .header_nav {
      height: inherit;
    }

    .log {
      width: 40vw;
      a {
        height: inherit;
        img {
          height: inherit;
        }
      }
    }

    .header_nav {
      width: 60vw;

      .header_left,
      .header_right {
        height: inherit;
      }

      .header_left {
        justify-content: flex-end;
        flex: 1;
        ul {
          height: inherit;
          li {
            padding: 0 1rem;
            height: inherit;
            a {
              height: 100%;
              color: #fff;
            }
            &:hover {
              background: rgba(102, 88, 184, 0.8);
            }
          }
        }
      }

      .header_right {
        padding-left: 1rem;
        width: 10vw;
        justify-content: flex-end;

        ul {
          height: inherit;
          li {
            height: inherit;
            position: relative;
            z-index: 2;

            a {
              padding: 0 0.5rem;  
              height: 100%;
              color: #fff;
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
    }
  }

  .header_bottom {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,.5);
    
    h2 {
      color: #fff;
      font-weight: normal;
      font-size: 2rem;
    }
  }
}
</style>