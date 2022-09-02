import {createStore} from "vuex";

export default createStore({
//=========================================================
    state: {
        // logo: require('@/assets/images/logo-1.svg.png'),
        loadingStatus: false,
        telefon: 79094282463,
        logo: {
            title: "GEFEST",
            subtitle: "Производство и продажа металлопроката"
        },
        current_route: ""
    },
    getters: {
        getLogo: (state) => state.logo,
        getTelefon: (state) => state.telefon,
        getLoadingStatus: state => state.loadingStatus,
        // getCurrentRoute: state => state.current_route
    },
    mutations: {
        setLoadingStatus(state, loadingStatus) {state.loadingStatus = loadingStatus},
        // setCurrentRoute(state, payload) {state.current_route = payload}
    },
    actions: {
        // setCurrentRoute : ({commit}, payload) => {
        //     commit('setCurrentRoute', payload);
        // }
    }
//===========================================================================
})