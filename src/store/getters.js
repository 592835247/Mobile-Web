export default {
  LunboImg (state) {
    /*let Imgs=[]
     console.log('cartFoods()',Imgs)*/
    if (state.home.datas){
      return state.home.datas[0].value
    }
  },
  goodsList (state){
    if (state.home.datas){
      return state.home.datas[2].menus
    }
  },
  discount (state){
    if (state.home.datas){
      return state.home.datas[6].discounts.goods
    }
  }
}
