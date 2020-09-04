const btns = document.querySelectorAll('.btn');
var screenView = document.getElementById('screenside');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');


for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        let number = btns[i].getAttribute('data-num');
        screenView.value += number;
    })
}


equalBtn.addEventListener('click', function () {
    let value = eval(screenView.value);
    screenView.value = value;

})

clearBtn.addEventListener('click', function () {
    screenView.value = '';
})
