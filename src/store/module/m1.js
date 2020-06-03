const state = { a: 1 }

const mutations = {
  CREATE_A: state => {
    state.a++
  },
}

export default {
  namespaced: true,
  state,
  mutations,
}
