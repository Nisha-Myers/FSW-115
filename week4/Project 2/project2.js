const starList = document.getElementById("list2");
const starButton = document.getElementById("getList2");

//starwars get list button
starButton.addEventListener("click", () => {
    starButton.style.display = "none";
    axios.get("https://swapi.dev/api/people")
    .then(res => {
        for (i=0; i<res.data.results.length; i++) {
            let div = document.createElement("div");
            starList.appendChild(div);
            let h2 = document.createElement("h2");
            h2.innerHTML = res.data.results[i].name.toUpperCase();
            div.appendChild(h2);
            for (x=0; x<res.data.results[i].films.length; x++) {
                axios.get(res.data.results[i].films[x])
                .then(res => {
                    let li = document.createElement("li");
                    li.innerHTML = res.data.title;
                    div.appendChild(li);
                })
                .catch(() => console.log("error"));
            }
        }
    })
    .catch(() => console.log("error"));
});