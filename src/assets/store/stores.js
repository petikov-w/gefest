import {createStore} from "vuex";
import moduleCommon from "@/assets/store/modules/common"
import moduleBox1 from "@/assets/store/modules/home/box1"
import moduleBox2 from "@/assets/store/modules/home/box2"
import moduleBox3 from "@/assets/store/modules/home/box3"
import moduleBox4 from "@/assets/store/modules/home/box4"
import moduleBox5 from "@/assets/store/modules/home/box5"
import moduleBox6 from "@/assets/store/modules/home/box6"
import moduleBox7 from "@/assets/store/modules/home/box7"
import moduleBox8 from "@/assets/store/modules/home/box8"
import moduleBox9 from "@/assets/store/modules/home/box9"
import moduleTabs from "@/assets/store/modules/home/tabs"

export default createStore({
    modules: {
        moduleCommon,
        moduleBox1,
        moduleBox2,
        moduleBox3,
        moduleBox4,
        moduleBox5,
        moduleBox6,
        moduleBox7,
        moduleBox8,
        moduleBox9,
        moduleTabs
    }
})


