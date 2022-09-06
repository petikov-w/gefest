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
        home_page_box_2: {
            text_top: "Выгодные цены на<br> металлопрокат в Новосибирске",
            text_bottom: "Обратитесь к менеджеру и он отправит вам цены на нужные позиции",
            text_btn: "Узнать стоимость",
            text_title_tab: "Посмотрите какие товарные группы есть в наличии в Новосибирске"
        },
        home_page_tabs: {
            tab_1: {
                image_a: require('@/assets/images/lenta_a.png'),
                image_na: require('@/assets/images/lenta_na.png'),
                image_main: require('@/assets/images/lenta_m.png'),
                text_tab: "Штрипс, лента<br> оцинкованная",
                text_side: "Штрипс, лента оцинкованная",
                list_side: ["Оцинкованный штрипс",
                            "Оцинкованная стальная лента",
                            "Оцинкованная полоса Г/К"]
            },
            tab_2: {
                image_a: require('@/assets/images/setka_a.png'),
                image_na: require('@/assets/images/setka_na.png'),
                image_main: require('@/assets/images/setka_m.png'),
                text_tab: "Сетка",
                text_side: "Сетка",
                list_side: ["Сетка сварная",
                            "Сетка ПВЛ"]
            },
            tab_3: {
                image_a: require('@/assets/images/profil_a.png'),
                image_na: require('@/assets/images/profil_na.png'),
                image_main: require('@/assets/images/profil_m.png'),
                text_tab: "Профиль<br> оцинкованный",
                text_side: "Профиль оцинкованный",
                list_side: ["Профиль ГКЛ",
                            "Профиль фасадный",
                            "Профиль армирующий",
                            "Комплектующие"]
            },
            tab_4: {
                image_a: require('@/assets/images/profnastil_a.png'),
                image_na: require('@/assets/images/profnastil_na.png'),
                image_main: require('@/assets/images/profnastil_m.png'),
                text_tab: "Профнастил",
                text_side: "Профнастил",
                list_side: []
            },
            tab_5: {
                image_a: require('@/assets/images/blackprocat_a.png'),
                image_na: require('@/assets/images/blackprocat_na.png'),
                image_main: require('@/assets/images/blackprocat_m.png'),
                text_tab: "Черный<br> металлопрокат",
                text_side: "Черный металлопрокат",
                list_side: []
            },
            tab_6: {
                image_a: require('@/assets/images/zakaz_a.png'),
                image_na: require('@/assets/images/zakaz_na.png'),
                image_main: require('@/assets/images/zakaz_m.png'),
                text_tab: "Изделия<br> на заказ",
                text_side: "Изделия на заказ",
                list_side: ["по любым вашим размерам",
                            "из интересующих марок стали",
                            "в соотвествии с ТУ и ГОСТ"]
            },
        },

        current_route: ""
    },
    getters: {
        getLogo: (state) => state.logo,
        getTelefon: (state) => state.telefon,
        getLoadingStatus: state => state.loadingStatus,
        getHomePageBox_1: state => state.home_page_box_1,
        getHomePageBox_2: state => state.home_page_box_2,
        getTabs : state => state.home_page_tabs
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

