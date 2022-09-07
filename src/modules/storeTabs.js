export default {
    namespaced: true,
    state: {
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
        getters: {
            getTabs : state => state.home_page_tabs
        },
        mutations: {
            setCur(state, payload) {state["storeTabs/home_page_tabs"].tab_2.text_side = payload}
        },
        actions: {
            setCur : ({commit}, payload) => {
                commit('setCur', payload);
            }
        },
    }
}