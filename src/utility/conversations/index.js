import conversationGetter from "./getter.js";
import conversationAction from "./action.js";
import conversationMutation from "./mutation.js";
import { v4 as uuidv4 } from "uuid";

export default {
  namespaced: true,
  state() {
    return {
      history: [],
      map: null,
      threadId: uuidv4(),
      uploadedFile: null,
    };
  },
  getters: conversationGetter,
  actions: conversationAction,
  mutations: conversationMutation,
};
