const state = () => {
  return {
    search: ''
  };
};

const mutations = {
  SEARCH(state, search) {
    state.search = search;
    return state.search
  }
};

const actions = {
};

const getters = {
  search: state => state.search,
};

export default {
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
}
