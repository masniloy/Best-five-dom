function addAllPlayers(singlePlayer, playerCount) {
    const oneTeam = document.getElementById("ol")
    const ol = document.createElement('ul');
    ol.innerHTML = `<li>${playerCount}. ${singlePlayer}</li>`;
    oneTeam.appendChild(ol);
}

var playerCount = 0;
const select = document.getElementsByClassName('btnSelect');
for (let selectButton of select) {

    selectButton.addEventListener('click', function (event) {
        const playerName = event.target.parentNode.firstChild.nextSibling.innerText;
        console.log(playerName);
        playerCount++;
        if (playerCount <= 5) {
            addAllPlayers(playerName, playerCount);
            // document.playerName.disabled = true;
        }

        else {
            alert("Player limitation is highest 5");
            playerCount--;
        }
    });
}

document.getElementById('per-player-btn').addEventListener('click', function () {
    const perPlayer = document.getElementById('per-player-cst')
    const amount = perPlayer.value;
    const totalAmount = amount * playerCount;
    console.log(totalAmount);

    const totalPlayer = document.getElementById('expenses');
    const totalPlayerCost = totalPlayer.innerText;
    console.log(totalPlayerCost);
    totalPlayer.innerText = totalAmount
});

document.getElementById('per-player-btn').addEventListener('click', function () {
    const perPlayer = document.getElementById('per-player-cst')
});