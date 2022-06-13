const pokeList = document.getElementById("list1");
const pokeButton = document.getElementById("getList1");

//pokemon get list button
pokeButton.addEventListener("click", () => {
    pokeButton.style.display = "none";
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=146")
    .then(res => {
        for (i=0; i<res.data.results.length; i++) {
            let div = document.createElement("div");
            pokeList.appendChild(div);
            let h2 = document.createElement("h2");
            h2.innerHTML = res.data.results[i].name.toUpperCase();
            div.appendChild(h2);
            axios.get(res.data.results[i].url)
            .then(res => {
                for (i=0; i<res.data.types.length; i++) {
                    let li = document.createElement("li");
                    li.innerHTML = res.data.types[i].type.name;
                    div.appendChild(li);
                    div.classList.add(res.data.types[i].type.name);
                }
            })
            .catch(() => console.log("error"));
        }
    })
    .catch(() => console.log("error"));
});