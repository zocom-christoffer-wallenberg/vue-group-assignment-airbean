const getMenu = {
  state: { menu: [] },
  mutations: {},
  actions: {
    async getMenu(ctx) {
      const url = "http://localhost:5000/api/beans";
      fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      })
        .then(response => response.json())
        .then(data => {
          if (data) {
            ctx.commit("setMenu", data["menu"]);
            console.log(data);
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  }
};

export default getMenu;
