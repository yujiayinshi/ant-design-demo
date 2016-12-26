/**
 * Created by HuangKai on 2016/12/24.
 */
import dva from 'dva';

export default {
  namespace: 'posts',
  state: [],
  reducers: {
    'delete'(state, {playload: id}){
      return state.filter(item => item.id !== id)
    }
  }
}
