let friends = [];

function atualizarListaAmigo(listId, friends) {
    const list = document.getElementById(listId);
    list.innerHTML = "";
    friends.forEach(function (friend) {
        const li = document.createElement("li");
        li.textContent = friend;
        list.appendChild(li);
    })
}

function adicionarAmigo() {
    const name = document.getElementById("amigo").value;
    if (name.trim() === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    friends.push(name);
    document.getElementById("amigo").value = "";

    atualizarListaAmigo("listaAmigos", friends);
}