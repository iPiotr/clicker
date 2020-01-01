const clicker = document.getElementById('clicker');
const score = document.getElementById('score');
const saveStorage = document.getElementById('saveStorage');
const clearStorage = document.getElementById('clearStorage');
const storage = window.localStorage;

let save = {};

function load() {
    if (storage.getItem("save")) {
        save = JSON.parse(storage.getItem("save"));
        score.innerHTML = save.count;
    } else {
        save.count = 0;
        score.innerHTML = 0;
    }
}

load();

clicker.addEventListener("click", function () {
    save.count++;
    score.innerHTML = save.count;
});

saveStorage.addEventListener("click", function () {
    storage.setItem("save", JSON.stringify(save));
});

clearStorage.addEventListener("click", function () {
    storage.removeItem("save");
    score.innerHTML = save.count;
});
