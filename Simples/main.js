const app = Vue.createApp({
    data() {
        return {
            items: [
                { name: "Item 1", description: "Descrição do item 1" },
                { name: "Item 2", description: "Descrição do item 2" },
                { name: "Item 3", description: "Descrição do item 3" }
            ]
        };
    }
});

app.mount("#app");
