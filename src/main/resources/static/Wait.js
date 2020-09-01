let timeLeft;
let button = document.getElementById("countButton");
let hasTimerStarted = false;
let interval;
let count;

function GetPostCount() {
    fetch("http://localhost:8080/api/v1/person/", {
        "method": "GET",
        "headers": {}
    }).then(function (response) {
        return response.json();
    })
        .then(function (data) {
            EstimatedTime(data);
        }).then(function (data) {
        StartInterval(data);
    })
        .catch(function (err) {
            console.log(err);
        });
}


function EstimatedTime(data)
{
    if (hasTimerStarted == false) {
        count = data.length
        timeLeft = count * 3 * 60
    }
}

function StartInterval()
{
    if (hasTimerStarted == false)
    {
        interval = setInterval(EstimatedTimeCount, 1000)
        hasTimerStarted = true
    }


}


function EstimatedTimeCount()
{
    var div = document.getElementById("countdown")
    const minutes = Math.floor(timeLeft/60)
    let seconds = timeLeft%60
    div.innerHTML = 'Time before meeting(estimated): ' + `${minutes}:${seconds}`;
    timeLeft--
}
function cancelInterval()
{
    cancelInterval(interval)
    timeLeft = count*3*60
}