<template>
  <div id="leaveMessage">
    <!-- 头部 -->
    <headerComponent></headerComponent>
    <!-- 主体 -->
    <MainComponents>
      <div class="lm_content">
        <div class="lm_box">
          <commonTitle :level="1">留言</commonTitle>
          <div class="lm-form">
            <el-form ref="leave_form" :model="form" :rules="rules" label-width="80px">
              <el-form-item label="您的姓名" prop="name">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="选择头像" prop="pic">
                <p class="lm_pic">
                  <span
                    v-for="item in imgList"
                    :key="item.id"
                    :class="{ select: current == item.id }"
                    @click="selectPic(item.id, item.url)"
                  >
                    <img :src="item.url" alt />
                  </span>
                  <el-input v-model="form.pic" type="hidden"></el-input>
                </p>
              </el-form-item>
              <el-form-item label="留言内容" prop="content">
                <el-input
                  type="textarea"
                  resize="none"
                  maxlength="100"
                  rows="5"
                  :show-word-limit="true"
                  v-model="form.content"
                ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit('leave_form')">提交</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>
        <div class="lm_comment">
          <commonTitle :level="1">评论</commonTitle>
          <div class="comment-container">
            <comment v-for="(item, index) in commentData" :key="index" :item="item"></comment>
          </div>
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
import comment from "@/components/comment/comment";

export default {
  name: "leaveMessage",
  components: {
    headerComponent,
    MainComponents,
    footerComponent,
    commonTitle,
    comment
  },
  data() {
    return {
      form: {
        name: "",
        content: "",
        pic: require("@/assets/img/thumb.jpeg")
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入您的昵称",
            trigger: "blur"
          },
          {
            min: 2,
            max: 10,
            message: "长度在 2 到 5 个字符",
            trigger: "blur"
          }
        ],
        content: [
          {
            required: true,
            message: "请输入留言内容",
            trigger: "blur"
          }
        ],
        pic: [{ required: true, message: "请选择头像" }]
      },
      current: 1,
      imgList: [
        { id: 1, url: require("@/assets/img/thumb.jpeg") },
        { id: 2, url: require("@/assets/img/thumb.jpeg") },
        { id: 3, url: require("@/assets/img/thumb.jpeg") }
      ],
      commentData:[
        {
          comment_id: 1,
          reply_id: 1000,
          from_uid: 1000,
          to_uid: 1001,
          content: '写作CL，读作人生',
          create_time: new Date(),
          like_num: 20,
          hit_num: 2,
          reply: [
            {
              comment_id: 1,
              reply_id: 1000,
              from_uid: 1002,
              to_uid: 1000,
              content: 'CL大师作',
              create_time: new Date(),
              like_num: 20,
              hit_num: 2,
            },
            {
              comment_id: 2,
              from_uid: 1003,
              to_uid: 1002,
              content: '+1',
              create_time: new Date(),
              like_num: 20,
              hit_num: 2,
            }
          ]
        },
        {
          comment_id: 1,
          reply_id: 1000,
          from_uid: 1000,
          to_uid: 1001,
          content: '你将不再是武器，而是人如其名的人',
          create_time: new Date(),
          like_num: 20,
          hit_num: 2,
          reply: []
        }
      ]
    };
  },
  methods: {
    selectPic(num, url) {
      this.current = num;
      this.form.pic = url;
    },
    onSubmit(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
#leaveMessage {
  .lm_content {
    height: inherit;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 10px;

    .lm_box {
      .lm-form{
        .lm_pic {
          display: flex;
          span {
            display: block;
            width: 50px;
            height: 50px;
            margin-right: 1rem;
            cursor: pointer;

            &:last-child {
              margin-right: 0;
            }

            img {
              height: 100%;
              display: block;
              border-radius: 100%;
            }
          }

          .select {
            img {
              box-shadow: 0 0 2px 2px rgba(0, 0, 255, 0.5);
            }
          }
        }
      }

      .comment {
        .title {
          font-size: 1.375rem;
          padding: 1rem;
          font-weight: bold;
        }
      }
    }

    .lm_comment {
      margin-top: 22px;

      .comment-container{
        padding-left: .8rem;
      }
    }
  }
}
</style>
