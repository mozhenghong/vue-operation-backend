<template>
  <div class="addProduct">
  <asideCommon />
    <div class="main">
       <topbarCommon />
      <div class="header">
        <div>
          <h4>添加商品</h4>
          <p>标品管理/产品列表/添加商品</p>
        </div>
      </div>
      <div class="body">
        <div class="mainModule">
          <el-steps :active="active" finish-status="success" class="step">
            <el-step title="产品类目选择"></el-step>
            <el-step title="产品信息"></el-step>
            <el-step title="提交"></el-step>
          </el-steps>
          <el-tree
            class="pruduct-tree"
            :data="data2"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[2, 5,6,9,11]"
            :default-checked-keys="[5]"
            :props="defaultProps"
          ></el-tree>
          <div class="step-button">
            <el-button style="margin-top: 12px;" class="cancel">取消</el-button>
            <el-button style="margin-top: 12px;" @click="next" class="next">下一步</el-button>
          </div>
        </div>
        <p>Copyright © 杭州共享实验科技发展有限公司</p>
      </div>
    </div>
  </div>
</template>

<script>
import asideCommon from '@/components/asideCommon'
import topbarCommon from "@/components/topbarCommon";
export default {
  data() {
    return {
      current: 10,
      active: 0,
      data2: [
        {
          id: 2,
          label: "医学院实验室",
          children: [
            {
              id: 5,
              label: "试剂",
              children: [
                {
                  id: 6,
                  label: "常温试剂"
                },
                {
                  id: 9,
                  label: "低温试剂"
                },
                {
                  id: 10,
                  label: "引物"
                },
                {
                  id: 11,
                  label: "单细胞试剂"
                }
              ]
            },
            {
              id: 7,
              label: "耗材"
            },
            {
              id: 8,
              label: "其他"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  components: {asideCommon,topbarCommon},
  methods: {
    skip(path) {
      this.$router.push({ path });
    },
    next() {
      if (this.active++ > 2) this.active = 0;
    }
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
.addProduct {
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
      padding: 20px 0 20px 33px;
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
        .step {
          margin: 39px 91px 0 104px;
        }
        .pruduct-tree {
          font-size: 16px;
          margin-left: 104px;
          margin-top: 74px;
        }
        .step-button {
          display: flex;
          justify-content: center;
          padding-top: 200px;
          .cancel {
            height: 40px;
            width: 164px;
            margin-right: 24px;
          }
          .next {
            height: 40px;
            width: 164px;
            color: #fff;
            background: #1890ff;
          }
        }
      }
      p {
        margin: 20px;
      }
    }
  }
}
</style>

