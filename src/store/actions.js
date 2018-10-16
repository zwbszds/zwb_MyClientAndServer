//引入接口请求函数

import {reqAddress,
  reqFoodCategorys,
  reqShops,
  reqUser,
  reqLogout,
  reqInfo,
  reqRatings,
  reqGoods,
} from '../api'

//引入mutation-types

import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART
} from './mutation-types'




export default {
  async getAddress({commit, state}) {
    //拿到需要的经纬度
    const {latitude, longitude} = state
    //发送请求获取数据

    const result = await reqAddress(latitude+','+longitude)
    //判断是否成功
    if(result.code===0){
      const address = result.data
      //commit()
      commit(RECEIVE_ADDRESS,{address})
    }




  },
  async getCategorys({commit}) {
    //拿到需要的经纬度

    //发送请求获取数据

    const result = await reqFoodCategorys()
    //判断是否成功
    if(result.code===0){
      const categorys = result.data
      //commit()
      commit(RECEIVE_CATEGORYS,{categorys})
    }




  },

  async getShops({commit, state}) {
    //拿到需要的经纬度
    const {latitude, longitude} = state
    //发送请求获取数据

    const result = await reqShops(longitude, latitude)
    //判断是否成功
    if(result.code===0){
      const shops = result.data
      //commit()
      commit(RECEIVE_SHOPS,{shops})
    }




  },

  //保存用户信息
  saveUser ({commit}, user) {
    commit(RECEIVE_USER, {user})
  },
  //获取用户信息
  async getUser({commit}){
    const result = await reqUser()
    const user = result.data
    if(result.code===0){
      commit(RECEIVE_USER,{user})
    }
  },


  async logout({commit}){
      const result = await reqLogout()
    if(result.code===0){
      commit(RESET_USER)
    }
  },
  // 异步获取goods数据
  async getGoods ({commit},cb) {
    const result = await reqGoods()
    if(result.code===0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
      //在actions提交更新后回调函数调用
      typeof cb==='function' &&cb()
    }
  },

  // 异步获取ratings数据
  async getRatings ({commit}) {
    const result = await reqRatings()
    if(result.code===0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }
  },

  // 异步获取info数据
  async getInfo ({commit}) {
    const result = await reqInfo()
    if(result.code===0) {
      const info = result.data
      commit(RECEIVE_INFO, {info})
    }
  },
  updateFoodCount({commit},{food,isAdd}){

    if(isAdd){
      commit(INCREMENT_FOOD_COUNT,{food})
    }else{
      commit(DECREMENT_FOOD_COUNT,{food})
    }
  },
  clearCart({commit}){
    commit(CLEAR_CART)
  }
}
