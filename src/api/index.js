/**
 * Created by Hyf on 2018/1/5.
 */
import ajax from './ajax'
//定义一个promise处理函数  接收的是一个promise对象（处理data的）
//获取Home数据
export const requestHome = ()=>ajax('/api/home')
export const requestSort = ()=>ajax('/api/sort')
