import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

const createStore = () => {
    return new Vuex.Store({
        actions: actions,
        state: state,
        mutations: mutations,
        getters: getters

    })
}

export default createStore