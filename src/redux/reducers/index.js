import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import officer from "./officer"

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['officer']
}

const rootReducer = combineReducers({
  officer
})

export default persistReducer(persistConfig, rootReducer)