import {RECEIVE_HOME} from './mutation-types'
export default {
  //更新数据
  [RECEIVE_HOME](state,{home}){
    state.home = home
    console.log(home, 'jjj');
  }
}
