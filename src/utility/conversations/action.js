export default {
  setMap(context, map) {
    console.log(map);
    context.commit("setMap", map);
  },

  addFile(context, file) {
    context.commit("addFile", file);
  },
};
