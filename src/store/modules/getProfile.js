const getProfile = {
  state: {},
  mutations: {
    saveUuid(state, data) {
      localStorage.setItem("uuid", JSON.stringify(data.key));
    }
  },
  actions: {
    /*   async getUser(ctx, uuid) {
      const url = "http://localhost:5000/api/user";
      fetch(url, {
        method: "GET",
        body: uuid,
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            console.log(data);
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }, */
    async getUuid(ctx) {
      const url = "http://localhost:5000/api/beans/key";
      fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            console.log(data);
            ctx.commit("saveUuid", data);
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  }
};

export default getProfile;
