

let personal = document.getElementById('personal'); //
if (personal != null) {
    var parentPersonal = personal.parentElement;
}
let listRead = document.getElementById('list-read');//
if (listRead != null) {
    var parentListRead = listRead.parentElement;
}
let purchaseHistory = document.getElementById('purchase-history');//
if (purchaseHistory != null) {
    var parentPurchaseHistory = purchaseHistory.parentElement;
}

let displayPersonalInfo = document.querySelector('.personal-info');
let displayListRead = document.querySelector('.listed-story');
let displayPurchaseHistory = document.querySelector('.transaction-history');

let lsntt = document.getElementById('lsntt');
let lsmh = document.getElementById('lsmh');

let nttDetail = document.querySelector('.naptt-history__detail');
let mhDetail = document.querySelector('.purchase-history__detail');


personal.onclick = function () {
    displayPersonalInfo.style.display = 'block';
    displayListRead.style.display = 'none';
    displayPurchaseHistory.style.display = 'none';

    if (parentListRead.classList.contains('act') == true) {
        parentListRead.classList.remove('act');
    }

    if (parentPurchaseHistory.classList.contains('act') == true) {
        parentPurchaseHistory.classList.remove('act');
    }


    if (parentPersonal.classList.contains('act') == false) {
        parentPersonal.classList.add('act');
    }
}

listRead.onclick = function () {
    displayPersonalInfo.style.display = 'none';
    displayListRead.style.display = 'flex';
    displayPurchaseHistory.style.display = 'none';

    if (parentPersonal.classList.contains('act') == true) {
        parentPersonal.classList.remove('act');
    }

    if (parentPurchaseHistory.classList.contains('act') == true) {
        parentPurchaseHistory.classList.remove('act');
    }

    if (parentListRead.classList.contains('act') == false) {
        parentListRead.classList.add('act');
    }
}

purchaseHistory.onclick = function () {
    displayPersonalInfo.style.display = 'none';
    displayListRead.style.display = 'none';
    displayPurchaseHistory.style.display = 'block';

    if (parentListRead.classList.contains('act') == true) {
        parentListRead.classList.remove('act');
    }

    if (parentPersonal.classList.contains('act') == true) {
        parentPersonal.classList.remove('act');
    }

    if (parentPurchaseHistory.classList.contains('act') == false) {
        parentPurchaseHistory.classList.add('act');
    }
}

lsntt.onclick = function () {
    nttDetail.style.display = 'flex';
    mhDetail.style.display = 'none';

    if (lsntt.classList.contains('act') == false) {
        lsntt.classList.add('act');
    }

    if (lsmh.classList.contains('act')) {
        lsmh.classList.remove('act');
    }
}

lsmh.onclick = function () {
    nttDetail.style.display = 'none';
    mhDetail.style.display = 'flex';

    if (lsmh.classList.contains('act') == false) {
        lsmh.classList.add('act');
    }

    if (lsntt.classList.contains('act')) {
        lsntt.classList.remove('act');
    }
}