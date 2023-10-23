
let general = document.querySelector('.general');
let napLt = document.querySelector('.nap-lt');
let btnThanhToan = document.getElementById('thanh-toan');
let thanhtoanLt = document.querySelector('.thanh-toan-lt');
let inSoTien = document.getElementById('in-so-tien');
let back = document.getElementById('back');

let numberMoney = document.getElementById('number-money');

btnThanhToan.onclick = function () {
    if (numberMoney.value != '') {
        napLt.style.display = 'none';
        thanhtoanLt.style.display = 'block';
        inSoTien.innerHTML = `# Số Tiền: ${numberMoney.value}`;

        general.style.width = '620px';
        general.style.height = '630px';
    }
}

back.onclick = function () {
    thanhtoanLt.style.display = 'none';
    napLt.style.display = 'block';

    general.style.width = '505px';
    general.style.height = '600px';
}