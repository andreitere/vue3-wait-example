import { createStore } from "vuex";
import { wait } from "./wait";
import { other } from "./other";
export const store = createStore({
  modules: {
    wait,
    other,
  },
});
