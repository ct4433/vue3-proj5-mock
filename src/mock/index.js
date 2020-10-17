//引入mockjs
import Mock from 'mockjs'
//使用mockjs模拟数据
Mock.mock('/api/goodslist','get',{
    status:200,
    message:'获取商品列表成功',
    data:[1,2,3,4,5]
})