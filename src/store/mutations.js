//引入mutation_types
import Vue from 'vue'

import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
  DECREMENT_FOOD_COUNT,
  INCREMENT_FOOD_COUNT,
  CLEAR_CART
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS](state,{address}){
    state.address = address
  },
  [RECEIVE_CATEGORYS](state,{categorys}){
   state.categorys = categorys
  },
  [RECEIVE_SHOPS](state,{shops}){
  state.shops = shops
  },
  [RECEIVE_USER] (state, {user}) {
    state.user = user
  },
  [RESET_USER](state){
    state.user = {}
  },
  [RECEIVE_INFO](state, {info}) {
    state.info = info
  },

  [RECEIVE_RATINGS](state, {ratings}) {
    state.ratings = ratings
  },

  [RECEIVE_GOODS](state, {goods}) {
    state.goods = goods
  },
  [INCREMENT_FOOD_COUNT](state,{food}){
    //判断是否存在count属性
    if(food.count){
      food.count++
    }else{
      //vue绑定数据
      //给组件对象设置一个新的响应式的属性
      Vue.set(food,'count',1)

      //给购物车数组添加一个新的food
      state.cartFoods.push(food)

    }


  },
  [DECREMENT_FOOD_COUNT](state,{food}){
    if(food.count>0){
      food.count--

      //如果减为0移除对应的food
      if (food.count===0){
        state.cartFoods.splice(state.cartFoods.indexOf(food),1)
      }

   }
  },
  [CLEAR_CART](state){
    state.cartFoods.forEach(food=>food.count=0)

    state.cartFoods=[]
  }
}
