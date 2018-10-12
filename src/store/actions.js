//引入接口请求函数

import {reqAddress,
  reqFoodCategorys,
  reqShops} from '../api'

//引入mutation-types

import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS
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




  }
}
