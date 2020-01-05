window.onload = function(){ //runs main when the window has loaded
        main();
}

function main() {
	var searchForm = document.getElementById("searchForm")
	var recentButton = document.getElementById("recent");

	searchForm.addEventListener("submit", search);
	recentButton.addEventListener("click", recent);
}

async function search(event) {
	event.preventDefault();
	var form = document.getElementById("searchForm");
	var query = form['query'].value
	var time = form['time'].value
	console.log(form, query, time);
	console.log(event);
	fetch('/search', {
		method: 'POST',
		headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
		},
		body: JSON.stringify({ "time" : time, "phrases" : [ {"speech" : query} ]})
		}).then((response) => response.json())
		.then((data) => {
		console.log('Success:', data);
		var results = document.getElementById("resultsList");
		results.innerHTML = "";
		for (var i = 0; i < data.length; i++){
			var item = document.createElement("li");
			var talk = document.createElement("p");
			talk.innerHTML = "<a href=\"/timeflow?talkId=" + data[i]['_id'] + "&userId=" + data[i]['userId'] + "\">" + data[i]['talk'] + "</a>, " + data[i]['prettyTime']
			//talk.innerHTML = data[i]['talk'] + ", " + data[i]['timestamp']
			item.appendChild(talk)
			results.appendChild(item);
		}
		});
}


async function recent(event) {
	window.location = "/timeflow?userId=5e0e6e1807cdcbd6a097708d"
}