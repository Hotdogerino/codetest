function GetFetchPostDisplay() {
    fetch("http://localhost:8080/api/v1/person/", {
        "method": "GET",
        "headers": {}
    }).then(function (response) {
        return response.json();
    })
        .then(function (data) {
            appendDataDisplay(data);
        })
        .catch(function (err) {
            console.log(err);
        });

}

function appendDataDisplay(data) {
    let lol;
    let lastFiveIndex;
    var mainContainer = document.getElementById("myData");
    lastFiveIndex = data.length - 5
    for (var i = lastFiveIndex; i < data.length; i++) {
        var div = document.createElement("div");

        lol = div.innerHTML = 'Name: ' + data[i].name;
        mainContainer.appendChild(div);
    }
}

function StartIntervalForDisplay()
{
        setInterval(GetFetchPostDisplay, 5000)
}
