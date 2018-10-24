let actions = {
    /**
    * Example
    */
    addProject: (context, payload) => {
        context.commit('ADD_PROJECT', payload)
    },
    deleteProject: (context, payload) => {
        context.commit('DELETE_PROJECT', payload)
    },

}

export default actions
