import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import * as getters from "./getters";
import state from "./state";
import { default as mutations } from "./mutations";
import * as actions from "./actions";
import ProductModule from "./modules/product";
import CartModule from "./modules/cart";
import auth from "./modules/auth"

const store = createStore({
  modules: {
    ProductModule,
    CartModule,
    // auth
  },
  state,
  getters,
  mutations,
  actions,
  plugins: [createPersistedState()],
});

export default store;
