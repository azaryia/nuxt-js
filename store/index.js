import Vuex from 'vuex'
import modules from './modules'

const createStore = () => {
  return new Vuex.Store({
    modules,
    strict: process.env.NODE_ENV !== 'production'
  });
};

export default createStore
