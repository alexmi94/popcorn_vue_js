export default {
    state: {
        // Define states: each state is a subjet to subscribe
        moviepopular: undefined,
        session: undefined
    },
    
    getters: {
        // Define getters: each states must have getters
        moviepopular: (state) => state.moviepopular,
        session: (state) => state.session
        //token: (state) => state.token
    },

    mutations: {
        // Define mutations: each states must have mutation
        MOVIEPOPULAR( state, payload ){ state.moviepopular = payload.data },
        SESSION( state, payload ){ state.session = payload.data }
        //TOKEN( state, payload ){ state.token = payload.data }
    },

    actions: {
        // CRUD: read one

        Login(context, data){
            console.log(JSON.stringify(data.content))
            fetch( `http://localhost:6829/api/get_token`, {
                method: 'POST',
                body: JSON.stringify(data.content),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: `include`
            })
            .then( response => response.json()) // Parse response
            .then( apiResponse => {
                //context.commit('TOKEN', { data: apiResponse.data})
                console.log("work : ", apiResponse);
            })
            .catch( apiError => {
                console.log('updateFlashNote', 'CRUD read one: ERROR', apiError)
            })
        },

        Createuser(context, data){
            fetch( `http://localhost:6829/api/user`, {
                method: 'POST',
                body: JSON.stringify(data.content),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then( response => response.json(response)) // Parse response
            .then( async apiResponse => {
                // Call action methond within action method
                console.log('updateFlashNote', 'CRUD create one: SUCCESS', apiResponse)

            })
            .catch( apiError => {
                console.log('updateFlashNote', 'CRUD create one: ERROR', apiError)

            })

        },

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
