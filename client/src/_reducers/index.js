// store 내에 reducer가 여러가지 있을 수 있음 => state에 따라 구분 가능
// 위와 같이 분산된 reducer를 combineReducers를 이용하여 rootReducer에서 하나로 합쳐줌
import { combineReducers } from 'redux';
import user from './user_reducer';

const rootReducer = combineReducers({
    user
})

export default rootReducer;