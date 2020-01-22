<template>
  <article>
    <div class="article_info f_c">
      <div class="article_info_left f_c">
        <div class="article_info_from">
          <router-link to="/" class="f_c">
            <img :src="data.pic" alt />
            <span>{{data.nickname}}</span>
          </router-link>
        </div>
        <div class="article_info_tags f_c">
          <div class="icon_list">
            <div class="icon_item" v-for="(item, index) in data.tags" :key="index">
              <span class="icon iconfont icon-biaoqian"></span>
              <router-link to="/" >{{item}}</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="article_info_right">
        <span class="article_year">{{data.time}}</span>
      </div>
    </div>
    <div class="article_introc" @click="toDetail(data.id)">
      <div class="title">
        <h3>{{data.title}}</h3>
      </div>
      <div class="abstract">
        <p>{{data.desc}}</p>
      </div>
    </div>
    <div class="article_visit f_c" @click="toDetail(data.id)">
      <span>{{data.commentNum}}</span>评论
      <p class="visit_line"></p>
      <p class="visit_num">
        <span>{{data.visitNum}}</span>浏览
      </p>
    </div>
  </article>
</template>

<script>
export default {
    name: 'articleComponent',
    props: {
      data: {
        type: Object,
        default: function() {
          return [];
        }
      }
    },
    methods: {
      toDetail(id) {
        this.$router.push({
          name: 'art_detail',
          params: {
            art_id: id
          }
        })
      }
    }
};
</script>

<style lang="scss" scoped>
article {
  position: relative;
  // margin-bottom: 3rem;
  padding: 1rem;
  // border-radius: 10px;
  transition: all .3s ease;
  border-bottom: 1px solid #dedee0;

  // &::before {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   right: 0;
  //   bottom: 0;
  //   left: 0;
  //   z-index: -1;
  //   transition: all 1s ease;
  //   background: rgba(235, 235, 235, 0.5);
  //   border-radius: 10px;
  // }

  .article_info {
    justify-content: space-between;
    height: 2.5rem;

    .article_info_left {
      height: inherit;

      .article_info_from {
        height: inherit;
        a {
          height: inherit;

          img {
            height: inherit;
            width: 2.5rem;
            border-radius: 100%;
          }
          span {
            padding-left: 10px;
          }
        }
      }

      .article_info_tags {
        height: inherit;
        margin-left: 1rem;

        .icon_list {
          display: flex;
          align-items: center;

          .icon_item {
            margin-right: .2rem;

            a {
              font-size: 0.8em;
            }
          }
        }
      }
    }

    .article_info_right {
      height: inherit;
      display: flex;

      span {
        font-size: 0.8em;
        color: #000;
        display: flex;
        align-items: center;
      }
    }
  }

  .article_introc, .article_visit {
    cursor: pointer;
  }

  .article_introc {
    margin: 1rem 0;
    .title {
      margin-bottom: 1rem;

      h3 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: normal;
      }
    }

    .abstract {
      color: #99a2aa;
      word-wrap: break-word;
      overflow: auto;
      line-height: 1.5;
      font-size: 14px;
      word-break: break-word;

      p {
        margin: 0;
      }
    }
  }

  .article_visit {
    display: inline-flex;
    position: relative;
    height: 20px;
    font-size: 14px;
    color:#99a2aa;

    span {
      margin-right: 5px;
    }

    .visit_line {
      margin: 0 1rem;
      height: 80%;
      width: 1px;
      background: #000;
    }
  }
}
</style>