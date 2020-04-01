<template>
      <div class="topbar">
        
        <img
          src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
          alt="avatar"
          class="left-logo"
        >
        
        <div class="logout" @click="skip('/')">
          <img
            src="https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
            alt="avatar"
          >
           
          <p>momo</p>
        </div>
      </div>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
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
    .topbar {
      height: 64px;
      padding: 0 30px;
      border-bottom: 1px solid #e9e9e9;
      box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
      display: flex;
      align-items: center;
      justify-content: space-between;
      .left-logo {
        width: 24px;
        height: 24px;
      }
      .logout {
        display: flex;
        align-items: center;
        img {
          width: 24px;
          height: 24px;
        }
      }
    }
</style>

