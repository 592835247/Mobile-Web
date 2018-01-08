import {

  RECEIVE_HOME,
  RECEIVE_SORT
} from './mutation-types'
export default {
  //更新数据
  [RECEIVE_HOME](state,{home}){
    state.home = home
    console.log(home, 'jjj');
  },
  [RECEIVE_SORT](state,{sort}){
    state.sort = sort
    console.log(sort, 'jjj');
  }
}
