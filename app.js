let friends = [];

function atualizarListaAmigo(friends) {
    const list = document.getElementById("listaAmigos");
    list.innerHTML = "";
    friends.forEach(function (friend) {
        const li = document.createElement("li");
        li.textContent = friend;
        list.appendChild(li);
    })
}

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const name = input.value.trim();
    if (!name) {
        alert("Por favor, insira um nome.");
        return;
    }

    friends.push(name);
    input.value = "";
    atualizarListaAmigo(friends);
}

function sortearAmigo() {
    if (friends.length === 0) {
        alert("Adicione amigos antes de sortear");
        return;
    }
    const indice = Math.floor(Math.random() * friends.length);
    const amigoSorteado = friends[indice];

    const result = document.getElementById("resultado");
    if (!result) return

    result.textContent = "O amigo sorteado é: " + amigoSorteado;
}