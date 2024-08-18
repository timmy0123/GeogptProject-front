export default {
  sendChat(state, chat) {
    state.history.push({ user: chat });
    state.history.push({ system: "aaa" });
  },

  setMap(state, map) {
    state.map = map;
  },

  addFile(state, file) {
    state.uploadedFile.push(file);
  },
};
