let convert = document.getElementById('convert');
let mainContent = document.getElementById('main-content');
let conversion1 = document.getElementById('conversion-1');
let conversion2 = document.getElementById('conversion-2');
let dataResult1 = document.getElementById('data-1');
let dataResult2 = document.getElementById('data-2');
let displayContent = document.getElementById('displayContent');

convert.addEventListener('click', ($event) => {
    $event.preventDefault();
    displayContent.classList.toggle('display-toggle');
});
conversion1.addEventListener('change', ($event) => {
    var res = Math.floor(($event.target.value * 9/5) + 32);
    dataResult1.textContent = res;
});

conversion2.addEventListener('change', ($event) => {
    var res = Math.floor(($event.target.value - 32) * 5/9);
    dataResult2.textContent = res;
});


