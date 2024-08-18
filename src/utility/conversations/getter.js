export default {
  conversationHistory(state) {
    console.log(state.history);
    return state.history;
  },

  getMap(state) {
    console.log(state.map);
    return state.map;
  },

  getFiles(state) {
    return state.uploadedFile;
  },
};
