<template>
    <div class="aside">
     
      <div class="header"></div>
       
      <ul class="catalog">
        <li class="catalog-li" @click="skip('/home')">
          <img src="../assets/图表-饼图.png" alt="img" >
          <div class="no-group">首页</div>
        </li>
        <li class="catalog-li attribute-li" @click="skip('/category')">
          <img src="../assets/图表-饼图.png" alt="img">
          <div class="no-group">类目管理</div>
        </li>
        <li class="group-li">
          
          <el-row class="tac">
            
            <el-menu class="el-menu-vertical-demo" background-color="#001529" text-color="#fff">
              <el-submenu index="1">
                <template slot="title">
                  <img src="../assets/图表-饼图.png" alt="img">
                  <span>标品管理</span>
                </template>
                <el-menu-item-group>
                  <div class="group" v-bind:class="{active:current===0}" @click="productList(0,'/productManage')">产品列表</div>
                </el-menu-item-group>
                <el-menu-item-group>
                  <div class="group" v-bind:class="{active:current===1}" @click="productList(1,'/addProduct')">添加商品</div>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-row>
        </li>
        <li class="group-li" >
        

          <el-row class="tac">
            <el-menu class="el-menu-vertical-demo" background-color="#001529" text-color="#fff">
              <el-submenu index="1">
                <template slot="title">
                  <img src="../assets/图表-饼图.png" alt="img">
                  <span>实验室管理</span>
                </template>
                <el-menu-item-group>
                  <div class="group" v-bind:class="{active:current===2}" @click="productList(2,'/views/lab/lab-manage/lab-manage-list')">实验室列表</div>
                </el-menu-item-group>
               
                <el-menu-item-group>
                  <div class="group" v-bind:class="{active:current===3}" @click="productList(3,'/views/lab/lab-package')">套餐配置</div>
                </el-menu-item-group>
                <el-menu-item-group>
                  <div class="group" v-bind:class="{active:current===4}" @click="productList(4,'/views/lab/business/Business')">业务模块</div>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-row>
        </li>
        <li class="group-li">
         

          <el-row class="tac">
            <el-menu class="el-menu-vertical-demo" background-color="#001529" text-color="#fff">
              <el-submenu index="1">
                <template slot="title">
                  <img src="../assets/图表-饼图.png" alt="img">
                  <span>用户管理</span>
                </template>
                <el-menu-item-group>
                  <div class="group" v-bind:class="{active:current===5}" @click="productList(5,'/userList')">用户列表</div>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-row>
        </li>
        <li class="group-li">
    
          <el-row class="tac">
            <el-menu class="el-menu-vertical-demo" background-color="#001529" text-color="#fff">
              <el-submenu index="1">
                <template slot="title">
                  <img src="../assets/图表-饼图.png" alt="img">
                  <span>权限管理</span>
                </template>
                <el-menu-item-group>
                  <div class="group" v-bind:class="{active:current===6}" @click="productList(6,'/divisionManage')">部门管理</div>
                </el-menu-item-group>
                <el-menu-item-group>
                  <div class="group" v-bind:class="{active:current===7}" @click="productList(7,'/memberManage')">成员管理</div>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-row>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      current: 10
    };
  },
  methods: {
    skip(path) {
      this.$router.push({ path });
    },
    productList(number,path) {
      this.current = number;
     this.$router.push({ path })
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
  .aside {
    height: 100vh;
    background: #001529;
    width: 13.33vw;
    color: #fff;
    box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
    .header {
      height: 64px;
      background: #00284d;
    }
    .catalog {
      .catalog-li {
        cursor: pointer;
        padding-left: 24px;
        padding-right: 4px;
        padding-top: 30px;
        display: flex;
        align-items: center;
        img {
          width: 16px;
          height: 16px;
        }
        .no-group {
          padding-left: 20px;
          font-size: 14px;
        }
      }
      .attribute-li {
        padding-bottom: 15px;
      }
      .group-li {
        padding-left: 4px;
        padding-right: 4px;
        display: flex;
        align-items: center;
        img {
          width: 16px;
          height: 16px;
        }
        .no-group {
          padding-left: 20px;
        }
        .tac {
          padding: 0;
          margin: 0;
          flex-grow: 1;
          overflow: hidden;
          .el-menu-vertical-demo {
            padding: 0;
            margin: 0;
            border: none;
            img{
              margin-right: 20px;
            }
            .el-submenu__title{
              padding: 0;
              padding-left: 0;
            }
            .group {
              font-size: 14px;
              padding: 8px 0 8px 56px;
            }
            .active {
              background: #1890ff;
            }
          }
        }
      }
    }
  }
</style>

