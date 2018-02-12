window.onload = function () {
    let tmp;
    let arr = document.querySelectorAll("button:not([id=btn5])");
    //The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.
    document.getElementById("btn5").onclick = function () {
        //Rotating values.
        tmp = arr[0].innerHTML;
        arr[0].innerHTML = arr[3].innerHTML;
        arr[3].innerHTML = arr[5].innerHTML;
        arr[5].innerHTML = arr[6].innerHTML;
        arr[6].innerHTML = arr[7].innerHTML;
        arr[7].innerHTML = arr[4].innerHTML;
        arr[4].innerHTML = arr[2].innerHTML;
        arr[2].innerHTML = arr[1].innerHTML;
        arr[1].innerHTML = tmp;
    }
};
