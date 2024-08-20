export default {
  sendChat(state, dialog) {
    state.history.push(dialog);
  },

  setMap(state, map) {
    state.map = map;
  },

  addFile(state, file) {
    state.uploadedFile = file;
  },
};
