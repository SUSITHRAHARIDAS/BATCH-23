const username = document.getElementById('user').value

console.log(username)

function repo(username) {
    var request = new XMLHttpRequest();

    request.open('GET', `https://api.github.com/users/${username}/repos`, true);

    request.onload = function () {
        var data = JSON.parse(this.response)
        console.log(data)
    }



}