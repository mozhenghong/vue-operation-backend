<template>
  <div class="home">
    <asideCommon />
    <div class="main">
      <topbarCommon />
      <div class="header">
        <img
          src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          alt="avatar"
        >
        <div>
          <h4>早安，xxx</h4>
          <p>欢迎使用GX labtech运营维护系统</p>
        </div>
      </div>
      <div class="body">
        <div class="mainModule">
           <img src="@/assets/home.jpg"/>
        </div>
        <p>Copyright © 杭州共享实验科技发展有限公司</p>
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
.home {
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
      }
      p {
        margin: 20px;
      }
    }
  }
}
</style>

