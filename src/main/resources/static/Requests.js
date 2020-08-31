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
    axios.post('/api/v1/person/', {
        name: textBoxName

    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
function DeleteFetchPost()
{
    const textBoxId = document.getElementById('TextBoxID').value;
    axios.delete('/api/v1/person/'+ textBoxId, {


    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}
function PutFetchPost()
{
    const textBoxId = document.getElementById('TextBoxIDForPut').value;
    const textBoxName = document.getElementById('TextBoxIDForPutName').value;
    axios.put('/api/v1/person/'+textBoxId, {

        name: textBoxName

    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}