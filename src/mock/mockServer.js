import Mock from 'mockjs'
import data from './data.json'
Mock.mock('/api/home',{
  code:0,
  data:data.home
})
Mock.mock('/api/sort',{
  code:0,
  data:data.sort
})
