import { createStore } from "vuex";
import conversations from "./conversations";
import maps from "./maps";

export default createStore({
  modules: {
    conversations,
    maps,
  },
});
