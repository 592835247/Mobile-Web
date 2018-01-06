import axios from 'axios'
export default async function ajax(url) {
  //返回一个promise对象（直接返回的data数据）
  return new Promise((resolve,reject)=>{
    axios.get(url)
      .then(response=>{
        //如果成功调用成功的函数 返回data数据 mock  data对象
        resolve(response.data)
      })
      .catch(error=>{
        reject(error)
      })
  })
}
