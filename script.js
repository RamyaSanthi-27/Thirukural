// fetch('https://raw.githubusercontent.com/tk120404/thirukkural/master/thirukkural.json')
//   .then(res => res.json()) // Parse the response as JSON
//   .then(data => console.log(data.kural)) // Log the 'kural' property from the parsed data
//   .catch(error => console.error(error)); // Handle any potential errors


const apiUrl = "https://raw.githubusercontent.com/tk120404/thirukkural/master/thirukkural.json";

function fetchData() {
    return fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.json();
        });
}

// Call the fetchData function and handle the response
fetchData()
    .then((data) => {
        var container = document.createElement("div");
        container.setAttribute("class", "container");

        var row = document.createElement("div");
        row.setAttribute("class", "row");
        var tkural=data.kural;
        console.log(`${tkural}`);
        for (var i = 0; i < tkural.length; i++) {
           

            var col = document.createElement("div");
            col.setAttribute("class", "col-lg-4 col-sm-12");

            col.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <h6 class="card-body">Thirukural : ${tkural[i].Number}</h6>
                    <p class="card-body">${tkural[i].Line1},${tkural[i].Line2}</p>
                    
                    <p class="card-body"><span style="color:yellow">Translation : </span>${tkural[i].Translation}</p>
                    <p class="card-body"><span style="color:yellow">Meaning : </span>${tkural[i].mv}</p>
                    <p class="card-body"><span style="color:yellow">In English : </span>${tkural[i].transliteration1},${tkural[i].transliteration2}</p>
                    
                </div>`;

            row.append(col);
            container.append(row);
        }

        document.body.append(container);
    })
    .catch((error) => {
        console.error("Error:", error);
    });