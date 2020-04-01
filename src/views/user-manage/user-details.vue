<template>
  <div class="userDetails">
    <asideCommon />
    <div class="main">
      <topbarCommon />
      <div class="header">
        <img
          src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          alt="avatar"
        >
        <div>
          <h4>用户详情</h4>
          <p>用户管理/用户详情</p>
        </div>
      </div>
      <div class="body">
        <div class="mainModule">
            <button class="editButton" @click="skip('/userEdit')">编辑资料</button>
        </div>
        <p>Copyright © ‘’</p>
      </div>
    </div>
  </div>

</template>

<script>
import asideCommon from "@/components/asideCommon";
import topbarCommon from "@/components/topbarCommon";
export default {
  data() {
    return {
      current: 10
    };
  },
  components: { asideCommon,topbarCommon },
  methods: {
    skip(path) {
      this.$router.push({ path });
    },
  }
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
ul,
ol {
  list-style: none;
}
.userDetails {
  display: flex;
  height: 100vh;
  font-size: 14px;
  .main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    .header {
      border-bottom: 1px solid #e9e9e9;
      display: flex;
      align-items: center;
      padding: 42px 0 42px 53px;
      img {
        width: 56px;
        height: 56px;
        margin-right: 24px;
      }
      div {
        p {
          color: #aeaeae;
        }
        h4 {
          font-size: 20px;
          padding-bottom: 16px;
        }
      }
    }
    .body {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #f0f2f5;
      .mainModule {
        width: 83.33vw;
        height: 100%;
        background: #fff;
        margin: 26px 40px 10px 24px;
        border-radius: 2px;
        position: relative;
        .editButton{
            width: 89px;
            height: 32px;
            color: #1890FF;
            border: 1px solid #1890FF;
            border-radius: 5px;
            background: #fff;
            position: absolute;
            top:33px;
            right: 40px;
        }
      }
      p {
        margin: 20px;
      }
    }
  }
}
</style>

