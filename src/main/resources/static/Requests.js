let textBoxName
let textBoxId;

function createPerson(name) {
    return axios.post('/api/v1/person/', {
        name
    }).catch((error) => {
        console.log(error);
    });
}

async function PostFetchPost() {
    textBoxName = document.getElementById('TextBoxName').value;
    await createPerson(textBoxName)
    await GetPostCount()
    document.getElementById("buttonID").removeAttribute("disabled")
    document.getElementById("buttonCancel").removeAttribute("disabled")
    document.getElementById("TextBoxID").removeAttribute("disabled")
    document.getElementById("labelID").innerHTML = "Type in your id if you want to cancel the meeting:"
}
function deletePerson(textBoxId)
{

    axios.delete('/api/v1/person/'+ textBoxId, {


    })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

}
async function DeleteFetch() {
    textBoxId = document.getElementById('TextBoxID').value;
    await deletePerson(textBoxId)
    document.getElementById("labelID").innerHTML = ""
    document.getElementById("countdown").innerHTML = ""
    document.getElementById("buttonID").setAttribute("disabled", "disabled")
    document.getElementById("buttonCancel").setAttribute("disabled", "disabled")
    document.getElementById("TextBoxID").setAttribute("disabled", "disabled")
    cancelInterval()
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
        if (textBoxName == data[i].name)
        {
            div.innerHTML = 'Name: ' + data[i].id;
            mainContainer.appendChild(div);
        }

    }
}