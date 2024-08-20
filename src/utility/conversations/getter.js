export default {
  conversationHistory(state) {
    return state.history;
  },

  getMap(state) {
    return state.map;
  },

  getFiles(state) {
    return state.uploadedFile;
  },
};
