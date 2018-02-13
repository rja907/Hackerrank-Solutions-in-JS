let btno = document.getElementById('btn');
let count = 0;
btno.innerHTML = count;
btno.onclick = function () {
    count++;
    btno.innerHTML = count;
}
