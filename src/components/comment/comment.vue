<template>
  <div :class="['list-item', { reply: item.reply ? false : true }]">
    <div class="user-face">
      <img src="@/assets/img/thumb.jpeg" alt />
    </div>
    <div class="content">
      <div class="user-info">
        <div class="user-name">
          <a href v-if="item.reply_id != item.to_uid && !item.reply">
            <router-link to='/'>{{ item.from_uid }}</router-link>
            @
            <router-link to='/'>{{ item.to_uid }}:</router-link>
          </a>
          <a href v-else>{{ item.from_uid }}:</a>
        </div>
        <p class="text">{{ item.content }}</p>
      </div>
      <div class="comment-info">
        <span class="time">{{ item.create_time }}</span>
        <span class="like">喜欢{{ item.like_num }}</span>
        <span class="hite">讨厌{{ item.hit_num }}</span>
        <span class="reply-btn" @click="reply(item)">回复</span>
      </div>

      <div>
        <comment
          v-for="(replyItem, index) in item.reply"
          :key="index"
          :item="replyItem"
        ></comment>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comment",
  props: {
    item: Object
  },
  mounted() {
    // console.log(this.item);
  },
  methods: {
    reply() {
      // console.log(obj);
    }
  }
};
</script>

<style lang="scss" scoped>
.list-item {
  display: flex;

  .user-face {
    margin-right: 5px;
    img {
      width: 40px;
      height: 40px;
      display: block;
      border-radius: 100%;
    }
  }
  .content {
    padding: 12px 0 0 5px;
    flex: 1;
    .user-info {
      .user-name {
        padding-bottom: 4px;
      }
      .text {
        padding: 2px 0;
        font-size: 14px;
        line-height: 1.3rem;
      }
    }

    .comment-info {
      line-height: 1.6rem;
      font-size: 12px;

      .time,
      .like,
      .hite {
        margin-right: 20px;
      }
      .reply-btn {
        cursor: pointer;
      }
    }
  }
}
.reply {
  .user-face {
    img {
      width: 20px;
      height: 20px;
    }
  }
  .content {
    padding-top: 0px;

    .user-info {
      display: flex;

      .user-name {
        display: flex;
        padding-bottom: 0;

        a {
          display: flex;
          align-items: center;
        }
      }

      .text {
        margin-left: 10px;
      }
    }
  }
}
</style>
