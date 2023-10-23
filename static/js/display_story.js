
// DISPLAY LIST CHAPTER

let listChapter = document.querySelector('.setting-list');
let errorChapter = document.querySelector('.error-chapter');
let settingChapter = document.querySelector('.setting-setting');

let modal = document.getElementById('modal-list-chap');
let modalListChapter = document.querySelector('.modal-body__list-chapter');
let modalErrorChapter = document.querySelector('.modal-body__error-chapter');
let customBackground = document.querySelector('.custom-background');
let iconClose1 = document.getElementById('icon-close-1');
let iconClose2 = document.getElementById('icon-close-2');
let iconClose3 = document.getElementById('icon-close-3');

let container = document.querySelector('.container'); // #e5e4db
let bodyStory = document.querySelector('.body-story') // #faf5eb
let titleColor = document.querySelector('.title-story>span:last-child');
let textColor = document.querySelector('.display-content-story');
let customBackground1 = document.getElementById('custom-background-1');
let customBackground2 = document.getElementById('custom-background-2');
let customBackground3 = document.getElementById('custom-background-3');

let containerLocal = localStorage.getItem('container');
let bodyLocal = localStorage.getItem('body');
let textLocal = localStorage.getItem('text');
let titleLocal = localStorage.getItem('title');

if(containerLocal && bodyLocal && textLocal && titleLocal){
    container.style.backgroundColor = `${containerLocal}`;
    bodyStory.style.backgroundColor = `${bodyLocal}`;
    textColor.style.color = `${textLocal}`;
    titleColor.style.color = `${titleLocal}`;
}

if(listChapter){
    listChapter.onclick = function () {
        modal.style.display = 'flex';
        modalListChapter.style.display = 'block';
    }
}

if(iconClose1){
    iconClose1.onclick = function () {
        modal.style.display = 'none';
        modalListChapter.style.display = 'none';
    }
}

if(errorChapter){
    errorChapter.onclick = function () {
        modal.style.display = 'flex';
        modalErrorChapter.style.display = 'block';
    }
}

if(iconClose2){
    iconClose2.onclick = function () {
        modal.style.display = 'none';
        modalErrorChapter.style.display = 'none';
    }
}

if(settingChapter){
    settingChapter.onclick = function () {
        customBackground.style.display = 'block';
    }
}

if(iconClose3){
    iconClose3.onclick = function () {
        customBackground.style.display = 'none';
    }
}


var arr = [customBackground1, customBackground2, customBackground3];

function checkExistColor() {
    for (var i = 0; i < arr.length; i++) {
        let check3 = arr[i].classList.contains('check-color');
        if (check3 == true) {
            let iconCheck = document.querySelector('.icon-check');
            arr[i].classList.remove('check-color');
            iconCheck.remove();
        }
    }
}

if(customBackground1){
    customBackground1.onclick = function () {
        let checkExist = customBackground1.classList.contains('check-color');
    
        if (checkExist == false) {
            checkExistColor();
    
            customBackground1.classList.add('check-color');
            customBackground1.innerHTML = '<i class="fa-solid fa-check icon-check"></i>';
            container.style.backgroundColor = '#e5e4db';
            bodyStory.style.backgroundColor = '#faf5eb';
            textColor.style.color = 'black';
            titleColor.style.color = 'black';

            localStorage.setItem('container', '#e5e4db')
            localStorage.setItem('body', '#faf5eb')
            localStorage.setItem('text', 'black')
            localStorage.setItem('title', 'black')
        }
    }
}

if(customBackground2){
    customBackground2.onclick = function () {
        let checkExist = customBackground2.classList.contains('check-color');
        if (checkExist == false) {
            checkExistColor();
    
            customBackground2.classList.add('check-color');
            customBackground2.innerHTML = '<i class="fa-solid fa-check icon-check"></i>';
            container.style.backgroundColor = '#dededeb5';
            bodyStory.style.backgroundColor = '#dcdcdc';
            textColor.style.color = 'black';
            titleColor.style.color = 'black';

            localStorage.setItem('container', '#dededeb5')
            localStorage.setItem('body', '#dcdcdc')
            localStorage.setItem('text', 'black')
            localStorage.setItem('title', 'black')
        }
    }
}

if(customBackground3){
    customBackground3.onclick = function () {
        let checkExist = customBackground3.classList.contains('check-color');
        if (checkExist == false) {
            checkExistColor();
    
            customBackground3.classList.add('check-color');
            customBackground3.innerHTML = '<i class="fa-solid fa-check icon-check"></i>';
            container.style.backgroundColor = '#252626';
            bodyStory.style.backgroundColor = '#161819';
            textColor.style.color = 'white';
            titleColor.style.color = 'white';

            localStorage.setItem('container', '#252626')
            localStorage.setItem('body', '#161819')
            localStorage.setItem('text', 'white')
            localStorage.setItem('title', 'white')
        }
    }
}


// OPEN COMBO VIP

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2)
      return parts
        .pop()
        .split(";")
        .shift();
}

let openComboVip = document.getElementById('open-combo-vip');
let modalVip = document.getElementById('model-vip');
let linkOpenCombo = document.getElementById('link-open-combo');
let openFull = document.querySelector('.open-full');
let openCombo = document.querySelector('.open-combo');
let modalOpenComboVip = document.querySelector('.modal-open-combo-vip');
let back = document.getElementById('back');
let iconClose4 = document.getElementById('icon-close-4');


if(openComboVip){
    openComboVip.onclick = function () {
        modalVip.style.display = 'flex';
        modalOpenComboVip.style.display = 'block';
    }
}

var numberStart = document.getElementById('number_start');
var numberEnd = document.getElementById('number_end');

if(linkOpenCombo){
    linkOpenCombo.onclick = function () {
        var chapterStart = numberStart.value
        var chapterEnd = numberEnd.value
    
        if((chapterStart != '' && chapterEnd != '') && ((chapterEnd-chapterStart) >= 2)){
            openCombo.style.display = 'block';
            openFull.style.display = 'none';
            modalOpenComboVip.style.height = '256px';
        
            var numberChapterOpen = document.getElementById('number_chapter_open');
            var originalPrice = document.getElementById('original_price');
            var salePrice = document.getElementById('sale_price')
    
            var payMoney = document.getElementById('pay-money');
    
            var price = payMoney.dataset.price;
        
            var totalChapter = (chapterEnd - chapterStart) + 1;
            var totalOriginalMoney = totalChapter*price;
    
            numberChapterOpen.innerHTML = totalChapter;
            originalPrice.innerHTML = `${totalOriginalMoney} Linh Thạch`;
            
            if(totalChapter >= 100){
                var totalSaleMoney = (totalOriginalMoney - ((totalOriginalMoney*20)/100));
                salePrice.innerHTML = `- Giá đã giảm <b>20%</b>: <b>${totalSaleMoney} Linh Thạch</b>`
            }
    
            // Send Data openCombo vip to Django
    
            const api = "https://tangkinhcac.vn/open_combo_vip/";
            
            payMoney.onclick = function(){
                var story_id = payMoney.dataset.story;
                var chapter_slug = payMoney.dataset.chapter;
    
                var messageData = document.getElementById('message-data');
    
                fetch(api, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "X-CSRFToken": getCookie("csrftoken")
                    },
                    body: JSON.stringify({
                        data:{
                            'chapter_start': chapterStart,
                            'chapter_end': chapterEnd,
                            'total_chapter': totalChapter,
                            'story_id': story_id,
                            'chapter_slug': chapter_slug,
                        }
                    })
                })
                .then(response =>response.json())
                .then(data => {
                    if(data.status == 'success'){
                        messageData.innerHTML = data.message;
                        setTimeout(function(){
                            modalOpenComboVip.style.display = 'none';
                            modalVip.style.display = 'none';
                            location.reload();
                        }, 2000)
                    }else {
                        modalOpenComboVip.style.height = '275px';
                        messageData.innerHTML = data.message;
                    }
                })
                .catch(error => console.log(error));
            }
        }
    }
}

function open_full_vip(total_money, story_id, chapter_id){
    const api = "https://tangkinhcac.vn/open_full_vip/";
    
    var messageData = document.getElementById('message-data-full');

    fetch(api, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken")
        },
        body: JSON.stringify({
            data:{
                'total_money': total_money,
                'story_id': story_id,
                'chapter_id': chapter_id,
            }
        })
    })
    .then(response =>response.json())
    .then(data => {
        if(data.status == 'success'){
            messageData.innerHTML = data.message;
            modalOpenComboVip.style.height = '476px';
            setTimeout(function(){
                modalOpenComboVip.style.display = 'none';
                modalVip.style.display = 'none';
                location.reload();
            }, 2000)
        }else {
            modalOpenComboVip.style.height = '476px';
            messageData.innerHTML = data.message;
        }
    })
    .catch(error => console.log(error));
}

if(back){
    back.onclick = function () {
        openCombo.style.display = 'none';
        openFull.style.display = 'flex';
        modalOpenComboVip.style.height = '440px';
    }
}

if(iconClose4){
    iconClose4.onclick = function () {
        modalOpenComboVip.style.display = 'none';
        modalVip.style.display = 'none';
    }
}


// Send Data Error Chapter

const text_error = document.querySelector('.text-error');
const btn_report = document.getElementById('btn-report');

const apiReportError = "https://tangkinhcac.vn/receive_error_chapter/";

function reportError(name_story, name_chapter){

    const value_text_error = text_error.value;

    fetch(apiReportError, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken")
        },
        body: JSON.stringify({
            data:{
                'name_story': name_story,
                'name_chapter': name_chapter,
                'content_error': value_text_error,
            }
        })
    })
    .then(response =>response.json())
    .then(data => {
        if(data.status == 'success'){
            value_text_error.value = '';
            modal.style.display = 'none';
            modalErrorChapter.style.display = 'none';
        }
    })
    .catch(error => console.log(error));
}


//

let parentElm = document.querySelector('.next-chapter');
let allChild = parentElm.children;
let listAllChild = Array.from(allChild);

if(listAllChild.length == 1){
    listAllChild[0].style.marginRight = '0px';
    parentElm.style.justifyContent = 'center';
}