let liapi1 = document.createElement("li")
let liapi2 = document.createElement("li")

let api1 = document.querySelector('#api1')
let api2 = document.querySelector('#api2')
let api3 = document.querySelector('#api3')

async function loadData(){
    const [swapiResponse, reqresResponse, rickResponse] = await Promise.all([
        fetch('https://swapi.dev/api/people/1'),
        fetch('https://reqres.in/api/users/8'),
        fetch('https://rickandmortyapi.com/api/character')
      ]);

	const response = await fetch("https://swapi.dev/api/people/1");
	const swapiList = await swapiResponse.json();
    const reqresList = await reqresResponse.json();
    const rickList = await rickResponse.json();
	
	return [swapiList, reqresList,rickList];
}

document.addEventListener("DOMContentLoaded", async () =>{

	let list = [];
	try{
		list = await loadData();
	}catch(e){
		console.log("Error");
		console.log(e);
	}
	
    liapi1.textContent=list[0].name + " " + list[0].height + " " + list[0].hair_color;
	api1.appendChild(liapi1);

	liapi2.textContent=list[1].data.first_name + " "+list[1].data.last_name + " "+list[1].data.email;
	api2.appendChild(liapi2);

    for(i = 0; i < list[2].results.length; i++){
		let liapi3 = document.createElement("li")
		liapi3.textContent=list[2].results[i].name + " " + list[2].results[i].status + " " +  list[2].results[i].species;
		api3.appendChild(liapi3);
	}
});