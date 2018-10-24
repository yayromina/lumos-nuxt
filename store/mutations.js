let mutations = {
    /**
    * Example
    */
    ADD_PROJECT: (state, payload) => {
        let newProject = {
            'id': payload.newId,
            'title': payload.title
        }

        state.projects.unshift(newProject)
    },

    DELETE_PROJECT: () => {
        let index = state.projects.findIndex(project => project.id === payload)
        state.projects.splace(index, 1)
    }
};

export default mutations
