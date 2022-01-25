export const state = () => ({
  sahabat_kalbu: []
})

export const mutations = {
  SET_SAHABAT_KALBU(state, payload) {
    state.sahabat_kalbu = payload
  }
}

export const actions = {
  getProfile({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.get(`/profile`)
      .then((response) => {
        console.info('get data profile')
        resolve(response.data)
      })
      .catch((error) => {
        resolve(error)
      })
    })
  },
  // getProfileSahabat({ commit }, payload) {
  //   return new Promise((resolve, reject) => {
  //     this.$axios.get(`/sahabatkalbu/detail/${payload}`)
  //     .then((response) => {
  //       commit('SET_SAHABAT_KALBU', response.data.data)
  //       console.log(response)
  //       resolve(response)
  //     })
  //     .catch((error) => {
  //       resolve(error)
  //     })
  //   })
  // },
  // editProfileKalbunian({ commit }, payload) {
  //   return new Promise((resolve, reject) => {
  //     this.$axios.post(`/kalbunian/edit`, payload)
  //     .then((response) => {
  //       resolve(response)
  //     })
  //     .catch((error) => {
  //       resolve(error)
  //     })
  //   })
  // },
  // editProfileSahabat({ commit }, payload) {
  //   return new Promise((resolve, reject) => {
  //     this.$axios.post(`/sahabatkalbu/edit`, payload)
  //     .then((response) => {
  //       resolve(response)
  //     })
  //     .catch((error) => {
  //       resolve(error)
  //     })
  //   })
  // },
}
