import  ajax from './ajax.js'


//多个接口请求函数
// 1、根据经纬度获取位置详情
export const reqAddress = (geohash)=> ajax('/api/position/'+geohash)
// 2. 获取食品分类列表
export const reqFoodCategorys = ()=>ajax('/api/index_category')

// 3、根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax('/api/shops', {latitude, longitude})
