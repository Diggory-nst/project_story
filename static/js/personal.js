

let personal = document.getElementById('personal'); //
if (personal != null) {
    var parentPersonal = personal.parentElement;
}

let listRead = document.getElementById('list-read');//
if (listRead != null) {
    var parentListRead = listRead.parentElement;
}

let purchaseHistory = document.getElementById('purchase-history');
if (purchaseHistory != null) {
    var parentPurchaseHistory = purchaseHistory.parentElement;
}

let displayPersonalInfo = document.querySelector('.personal-info');
let displayListRead = document.querySelector('.listed-story');
let displayPurchaseHistory = document.querySelector('.transaction-history');
let displayPurchaseHistoryTablet = document.querySelector('.transaction-history-for-tablet');

let lsntt = document.getElementById('lsntt');
let lsmh = document.getElementById('lsmh');

let nttDetail = document.getElementById('naptt-history__detail');
let mhDetail = document.getElementById('purchase-history__detail');

if(personal){
    personal.onclick = function () {
        displayPersonalInfo.style.display = 'block';
        displayListRead.style.display = 'none';
        displayPurchaseHistory.style.display = 'none';
        displayPurchaseHistoryTablet.style.display = 'none';
    
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
}

if(listRead){
    listRead.onclick = function () {
        displayPersonalInfo.style.display = 'none';
        displayListRead.style.display = 'flex';
        displayPurchaseHistory.style.display = 'none';
        displayPurchaseHistoryTablet.style.display = 'none';
    
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
}

if(screen.width > 1023 ){
    purchaseHistory.onclick = function () {
        displayPersonalInfo.style.display = 'none';
        displayListRead.style.display = 'none';
        displayPurchaseHistory.style.display = 'block';
        displayPurchaseHistoryTablet.style.display = 'none';
    
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
}

if(lsntt){
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
}

if(lsmh){
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
}

// FOR Tablet

// screen only defined on load page, doesn't load when adjusting website size

if(screen.width >= 800 && screen.width <= 1023 ){

    purchaseHistory.classList.add('purchase-history-tablet');
    let purchaseHistoryTablet = document.querySelector('.purchase-history-tablet');

    let lsnttTablet = document.getElementById('lsntt-tablet');
    let lsmhTablet = document.getElementById('lsmh-tablet');

    let nttDetailTablet = document.getElementById('naptt-history__detail-tablet');
    let mhDetailTablet = document.getElementById('purchase-history__detail-tablet');

    purchaseHistoryTablet.onclick = function(){
        displayPersonalInfo.style.display = 'none';
        displayListRead.style.display = 'none';
        displayPurchaseHistory.style.display = 'none';
        displayPurchaseHistoryTablet.style.display = 'block';
    
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

    lsnttTablet.onclick = function () {
        nttDetailTablet.style.display = 'flex';
        mhDetailTablet.style.display = 'none';
    
        if (lsnttTablet.classList.contains('act') == false) {
            lsnttTablet.classList.add('act');
        }
    
        if (lsmhTablet.classList.contains('act')) {
            lsmhTablet.classList.remove('act');
        }
    }
    
    lsmhTablet.onclick = function () {
        nttDetailTablet.style.display = 'none';
        mhDetailTablet.style.display = 'flex';
    
        if (lsmhTablet.classList.contains('act') == false) {
            lsmhTablet.classList.add('act');
        }
    
        if (lsnttTablet.classList.contains('act')) {
            lsnttTablet.classList.remove('act');
        }
    }
}


// FOR MOBILE

let btnPersonalMob = document.getElementById('personal-mobile');
let btnListReadMob = document.getElementById('list-read-mobile');
let btnPurchaseHistoryMob = document.getElementById('purchase-history-mobile');

let personalMob = document.querySelector('.personal-info-mobile');
let listReadMob = document.querySelector('.list-read-mobile');
let purchaseHistoryMob = document.querySelector('.purchase-history-mobile');

let headerMob = document.querySelector('.header-mobile');
let containerMob = document.querySelector('.container-for-mobile');

let backMob = document.querySelectorAll('.back-mob');
let doneMob = document.querySelectorAll('.done-mob');

if(btnPersonalMob){
    btnPersonalMob.onclick = function(){
        headerMob.style.display = 'none';
        containerMob.style.display = 'none';
        personalMob.style.display = 'block';
        listReadMob.style.display = 'none';
        purchaseHistoryMob.style.display = 'none';
    }
}

if(btnListReadMob){
    btnListReadMob.onclick = function(){
        headerMob.style.display = 'none';
        containerMob.style.display = 'none';
        personalMob.style.display = 'none';
        listReadMob.style.display = 'block';
        purchaseHistoryMob.style.display = 'none';
    }
}

if(btnPurchaseHistoryMob){
    btnPurchaseHistoryMob.onclick = function(){
        headerMob.style.display = 'none';
        containerMob.style.display = 'none';
        personalMob.style.display = 'none';
        listReadMob.style.display = 'none';
        purchaseHistoryMob.style.display = 'block';
    }
}

if(backMob[0] && doneMob[0]){
    backMob[0].onclick = function(){
        headerMob.style.display = 'block';
        containerMob.style.display = 'block';
        personalMob.style.display = 'none';
    }

    doneMob[0].onclick = function(){
        headerMob.style.display = 'block';
        containerMob.style.display = 'block';
        personalMob.style.display = 'none';
    }
}

if(backMob[1] && doneMob[1]){
    backMob[1].onclick = function(){
        headerMob.style.display = 'block';
        containerMob.style.display = 'block';
        listReadMob.style.display = 'none';
    }

    doneMob[1].onclick = function(){
        headerMob.style.display = 'block';
        containerMob.style.display = 'block';
        listReadMob.style.display = 'none';
    }
}

if(backMob[2] && doneMob[2]){
    backMob[2].onclick = function(){
        headerMob.style.display = 'block';
        containerMob.style.display = 'block';
        purchaseHistoryMob.style.display = 'none';
    }

    doneMob[2].onclick = function(){
        headerMob.style.display = 'block';
        containerMob.style.display = 'block';
        purchaseHistoryMob.style.display = 'none';
    }
}