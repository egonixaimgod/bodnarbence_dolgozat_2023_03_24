/*
* File: app.js
* Author: Bodnár Bence
* Copyright: 2023, Bodnár Bence
* Group: Szoft i/2/n
* Date: 2023.03.24
* Github: https://github.com/egonixaimgod/
*/

aElInput = document.querySelector("#aEl");
bElInput = document.querySelector("#aEl");
cElInput = document.querySelector("#aEl");
szamolButton = document.querySelector("#button");
terfogatKiszamitas = document.querySelector("#terfogat");

szamolButton.addEventListener('click', () => {
    let eredmeny = Number(aElInput.value) * Number(bElInput.value) * Number(cElInput.value);
    terfogatKiszamitas.value = eredmeny;
});