/**
 * First, we will load all of this project's Javascript utilities and other
 * dependencies. Then, we will be ready to develop a robust and powerful
 * application frontend using useful Laravel and JavaScript libraries.
 */

import './bootstrap';

import Vue from 'vue';
import Vuetify from 'vuetify';

import router from '@/js/routes/routes.js';

import App from '@/js/layouts/App';

import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
    theme: {
        primary: '#121212', // a color that is not in the material colors palette
        accent: colors.grey.darken3,
        secondary: colors.amber.darken3,
        info: colors.teal.lighten1,
        warning: colors.amber,
        error: colors.deepOrange.accent4,
        success: colors.green.accent3
    }
})

// const app = new Vue({
//     el: "#app",
//     router: Routes,
//     render: h => h(App)
// });

const app = new Vue({
    Vuetify,
    router,
    render: h => h(App)
}).$mount('#app');

export default app;
