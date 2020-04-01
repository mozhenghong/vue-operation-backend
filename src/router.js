import Vue from "vue";
import Router from "vue-router";
import login from "./views/login";
import home from "./views/Home"
import category from "./views/category-manage"
import productManage from "./views/product/product-manage"
import addProduct from "./views/product/add-product"
import userList from "@/views/user-manage/user-list"
import addLab from "@/views/lab/add-lab/add-lab"
import labList from "@/views/lab/lab-manage/lab-manage-list"
import labConfig from  "@/views/lab/add-lab/lab-config"
import Business from "@/views/lab/business/Business"
import AddBusiness from "@/views/lab/business/AddBusiness"
import userDetails from "@/views/user-manage/user-details"
import userEdit from "@/views/user-manage/user-edit"
import divisionManage from "@/views/permission/division-manage"
import memberManage from "@/views/permission/member-manage"
import labPackage from '@/views/lab/lab-package'
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/views/permission/division-manage",
      name: "divisionManage",
      component: divisionManage
    },
    {
      path: "/views/lab/lab-package",
      name: "labPackage",
      component: labPackage
    },
    {
      path: "/views/permission/member-manage",
      name: "memberManage",
      component: memberManage
    },
    {
      path: "/userDetails",
      name: "userDetails",
      component: userDetails
    },
    {
      path: "/userEdit",
      name: "userEdit",
      component: userEdit
    },
    {
      path: "/",
      name: "login",
      component: login
    },
    {
      path: "/views/lab/business/AddBusiness",
      name: "AddBusiness",
      component: AddBusiness
    },
    {
      path: "/views/lab/business/Business",
      name: "Business",
      component: Business
    },
    {
      path: "/views/lab/add-lab/lab-config",
      name: "labConfig",
      component: labConfig
    },
    {
      path: "/views/lab/lab-manage/lab-manage-list",
      name: "labList",
      component: labList
    },
    {
      path: "/home",
      name: "home",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: home
    },
    {
      path: "/category",
      name: "category",
      component: category
    },
    {
      path: "/productManage",
      name: "productManage",
      component: productManage
    },
    {
      path: "/addProduct",
      name: "addProduct",
      component: addProduct
    },
    {
      path: "/userList",
      name: "userList",
      component: userList
    },
    {
      path: "/userDetails",
      name: "userDetails",
      component: userDetails
    },
    {
      path: "/userEdit",
      name: "userEdit",
      component: userEdit
    },
    {
      path: "/addLab",
      name: "addLab",
      component: addLab
    },
    {
      path: "/divisionManage",
      name: "divisionManage",
      component: divisionManage
    },
    {
      path: "/memberManage",
      name: "memberManage",
      component: memberManage
    },
  ]
});
