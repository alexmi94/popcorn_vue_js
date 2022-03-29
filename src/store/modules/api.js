export default {
    state: {
        // Define states: each state is a subjet to subscribe
        moviepopular: undefined,
    },
    
    getters: {
        // Define getters: each states must have getters
        moviepopular: (state) => state.moviepopular,
    },

    mutations: {
        // Define mutations: each states must have mutation
        MOVIEPOPULAR( state, payload ){ state.moviepopular = payload.data },
    },

    actions: {
        // CRUD: read one
/*
        GetMovie(context, data){
            fetch( `http://localhost:6829/api/${data.path}/${data.id}`, {
                method: `GET`,
            })
            .then( response => response.json(response)) // Parse response
            .then( async apiResponse => {
                // Commit new state
                if( data.path === 'detail' ){
                    context.commit('SINGLEUSER', { data: apiResponse })
                }
                else if( data.path === 'recommendations' ){
                    context.commit('SINGLEALBUM', { data: apiResponse })
                }
            })
            .catch( apiError => {
                console.log('updateFlashNote', 'CRUD read one: ERROR', apiError)
            })
        },
*/
        PopularMovie(context, data){
            fetch( `http://localhost:6829/api/movie/popular/${data.nb}`, {
                method: 'GET',
            })
            .then( response => response.json()) // Parse response
            .then( apiResponse => {
                context.commit('MOVIEPOPULAR', { data: apiResponse.data})
            })
            .catch( apiError => {
                console.log('updateFlashNote', 'CRUD read one: ERROR', apiError)
            })
        },
    }
}
