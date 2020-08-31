function GetFetchPost() {
    fetch("http://localhost:8080/api/v1/person/", {
        "method": "GET",
        "headers": {}
    }).then(function (response) {
        return response.json();
    })
        .then(function (data) {
            appendData(data);
        })
        .catch(function (err) {
            console.log(err);
        });
}

function appendData(data) {
    var mainContainer = document.getElementById("myData");
    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = 'Name: ' + data[i].name;
        mainContainer.appendChild(div);
    }
}

function PostFetchPost() {
    const textBoxName = document.getElementById('TextBoxName').value;
    fetch("http://localhost:8080/api/v1/person/", {
        "method": "POST",
        "headers": {
            "content-type": "application/json"
        },
        "body": {
            "name": textBoxName
        }
    }).then(response => {
        console.log(response);
    })
        .catch(err => {
            console.error(err);
        });
}