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
        home_page_box_1: {
            image: require('@/assets/images/img_box1.png'),
            text_top: "Металлопрокат в наличии в Новосибирске от производителя " +
                      "с доставкой до вас за 1-2 дня по цене ниже рыночной",
            text_bottom: "Склады и филиалы производства в 26 крупных городах " +
                         "по всей территории РФ",
            text_btn: "Получить прайс с персональными ценами"
        },
        current_route: ""
    },
    getters: {
        getLogo: (state) => state.logo,
        getTelefon: (state) => state.telefon,
        getLoadingStatus: state => state.loadingStatus,
        getHomePageBox_1: state => state.home_page_box_1
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