export default {
  setMap(context, map) {
    context.commit("setMap", map);
  },

  async sendChat(context, chat) {
    try {
      const formData = context.state.uploadedFile ? new FormData() : null;
      if (formData) {
        formData.append("file", context.state.uploadedFile);
      }

      const response = await fetch(
        `http://127.0.0.1:5000/chat?thread_id=${context.state.thread_id}&user_input=${chat}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        console.error("Error:", response);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      context.commit("sendChat", {
        user: { messages: [chat] },
        suggestion: data,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  },

  addFile(context, file) {
    context.commit("addFile", file);
  },
};
