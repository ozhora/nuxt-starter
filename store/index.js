
export const actions = {
  async nuxtServerInit({ dispatch }, { req }) {
    await dispatch('profile/getProfile')
  },
}
