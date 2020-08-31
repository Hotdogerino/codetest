function GetFetchPostCount() {
    fetch("http://localhost:8080/api/v1/person/", {
        "method": "GET",
        "headers": {}
    }).then(function (response) {
        return response.json();
    })
        .then(function (data) {
            EstimatedTime(data);
        })
        .catch(function (err) {
            console.log(err);
        });
}

let timeLeft;

function EstimatedTime(data)
{
    timeLeft = data.length*3*60


}
window.onload = function() {
    document.getElementById('countButton').onclick = function () {
        console.log("clicked")
        setInterval(EstimatedTimeCount, 1000)
    }
};


function EstimatedTimeCount()
{

    var div = document.getElementById("countdown")
    const minutes = Math.floor(timeLeft/60)
    let seconds = timeLeft%60
    div.innerHTML = 'Time before meeting' + `${minutes}:${seconds}`;
    timeLeft--
}