

// RATE STORY
function checkRateStory(a, b) {
    let rate1 = document.getElementById(a);
    let rate2 = document.getElementById(b);
    let check1 = rate1.classList.contains('act-rate')
    let check2 = rate2.classList.contains('act-rate')

    if (check1 == true) {
        if (check2 == false) {
            rate2.classList.add('act-rate');
        } else {
            rate2.classList.remove('act-rate');
        }
    }
}

function rateStory(a) {
    let rate = document.getElementById(a);
    let check = rate.classList.contains('act-rate')

    if (check == false) {
        rate.classList.add('act-rate');
    } else {
        rate.classList.remove('act-rate');
    }
}

let btnRateLaptop = document.querySelector('.rate-for-laptop');

let iconClose3 = document.getElementById('icon-close-3');
let modalLaptop = document.querySelector('.modal-rateStory-laptop');

if(btnRateLaptop){
    btnRateLaptop.onclick = function () {
        modalLaptop.style.display = 'flex';
    }
}

if(iconClose3){
    iconClose3.onclick = function () {
        modalLaptop.style.display = 'none';
    }
}

// RATE STORY Tablet

function checkRateStoryTablet(a, b) {
    let rate1 = document.getElementById(a);
    let rate2 = document.getElementById(b);
    let check1 = rate1.classList.contains('act-rate-tablet');
    let check2 = rate2.classList.contains('act-rate-tablet');

    if (check1 == true) {
        if (check2 == false) {
            rate2.classList.add('act-rate-tablet');
        } else {
            rate2.classList.remove('act-rate-tablet');
        }
    }
}


function rateStoryTablet(a) {
    let rate = document.getElementById(a);
    let check = rate.classList.contains('act-rate-tablet');

    if (check == false) {
        rate.classList.add('act-rate-tablet');
    } else {
        rate.classList.remove('act-rate-tablet');
    }
}

let btnRateTablet = document.querySelector('.rate-for-tablet');

let iconClose1 = document.getElementById('icon-close-1');
let modalTablet = document.querySelector('.modal-rateStory-tablet');

if(btnRateTablet){
    btnRateTablet.onclick = function () {
        modalTablet.style.display = 'flex';
    }    
}

if(iconClose1){
    iconClose1.onclick = function () {
        modalTablet.style.display = 'none';
    }
}

// Mobile

let btnListChapterMobile = document.getElementById('list-chapter-mobile');
let listChapterMobile = document.querySelector('.list-chapter-mobile');
let sectionCommentMobile = document.querySelector('.comments-story');

let iconCloseListChap = document.getElementById('icon-close-list-chap');
let closeListChap = document.getElementById('close-list-chap-mobile');

btnListChapterMobile.onclick = function () {
    listChapterMobile.style.display = 'block';
    sectionCommentMobile.style.display = "none";
}

iconCloseListChap.onclick = function () {
    listChapterMobile.style.display = 'none';
    sectionCommentMobile.style.display = 'block';
}

closeListChap.onclick = function () {
    listChapterMobile.style.display = 'none';
    sectionCommentMobile.style.display = 'block';
}

function checkRateStoryMobile(a, b) {
    let rate1 = document.getElementById(a);
    let rate2 = document.getElementById(b);
    let check1 = rate1.classList.contains('act-rate-mobile');
    let check2 = rate2.classList.contains('act-rate-mobile');

    if (check1 == true) {
        if (check2 == false) {
            rate2.classList.add('act-rate-mobile');
        } else {
            rate2.classList.remove('act-rate-mobile');
        }
    }
}


function rateStoryMobile(a) {
    let rate = document.getElementById(a);
    let check = rate.classList.contains('act-rate-mobile');

    if (check == false) {
        rate.classList.add('act-rate-mobile');
    } else {
        rate.classList.remove('act-rate-mobile');
    }
}

let btnRateMobile = document.querySelector('.rate-for-mobile');

let iconClose2 = document.getElementById('icon-close-2');
let modalMobile = document.querySelector('.modal-rateStory-mobile');

btnRateMobile.onclick = function () {
    modalMobile.style.display = 'flex';
}

if(iconClose2){
    iconClose2.onclick = function () {
        modalMobile.style.display = 'none';
    }
}

// swap introduce story and list Chapter

let detailInfo = document.getElementById('detail-info');
let listChapter = document.getElementById('list-chapter');
let introduceStory = document.querySelector('.story-content__introduce-story');
let listStory = document.querySelector('.story-content__list-chap');

detailInfo.onclick = function () {
    if (listChapter.classList.contains('act')) {
        listChapter.classList.remove('act');
    }

    detailInfo.classList.add('act');
    introduceStory.style.display = 'block';
    listStory.style.display = 'none';
}

listChapter.onclick = function () {
    if (detailInfo.classList.contains('act')) {
        detailInfo.classList.remove('act');
    }

    listChapter.classList.add('act');
    listStory.style.display = 'flex';
    introduceStory.style.display = 'none';
}

// Get Cookie for fetch

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2)
        return parts
        .pop()
        .split(";")
        .shift();
}

// Send data rate-story

let btnRateStoryLaptop = document.getElementById('rate-story-laptop');
let btnRateStoryTablet = document.getElementById('rate-story-tablet');
let btnRateStoryMobile = document.getElementById('rate-story-mobile');

const api_rate_story = "https://tangkinhcac.vn/rate_story/";

btnRateStoryLaptop.onclick = function() {
    let stars = document.querySelectorAll('.section-rate-laptop .act-rate');
    console.log(stars);
    let stars_new = Array.from(stars);
    var number_star_rate = stars_new.length;
    console.log(number_star_rate);

    if(number_star_rate >= 1){
        var story_id = btnRateStoryLaptop.dataset.story;

        fetch(api_rate_story, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": getCookie("csrftoken")
            },
            body: JSON.stringify({
                data: {
                    'story_id': story_id,
                    'number_star_rate': number_star_rate,
                }
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.status == 'success'){
                modalLaptop.style.display = 'none';
                location.reload()
            }
        })
        .catch(error => console.log(error));
    }
}

btnRateStoryTablet.onclick = function() {
    let stars = document.querySelectorAll('.section-rate-tablet .act-rate-tablet');
    let stars_new = Array.from(stars);
    var number_star_rate = stars_new.length;

    if(number_star_rate >= 1){
        var story_id = btnRateStoryTablet.dataset.story;

        fetch(api_rate_story, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": getCookie("csrftoken")
            },
            body: JSON.stringify({
                data: {
                    'story_id': story_id,
                    'number_star_rate': number_star_rate,
                }
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.status == 'success'){
                modalTablet.style.display = 'none';
                location.reload()
            }
        })
        .catch(error => console.log(error));
    }
}

btnRateStoryMobile.onclick = function() {
    let stars = document.querySelectorAll('.section-rate-mobile .act-rate-mobile');
    let stars_new = Array.from(stars);
    var number_star_rate = stars_new.length;

    if(number_star_rate >= 1){
        var story_id = btnRateStoryMobile.dataset.story;

        fetch(api_rate_story, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": getCookie("csrftoken")
            },
            body: JSON.stringify({
                data: {
                    'story_id': story_id,
                    'number_star_rate': number_star_rate,
                }
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.status == 'success'){
                modalMobile.style.display = 'none';
                location.reload()
            }
        })
        .catch(error => console.log(error));
    }
}


// Send data list-read

const api_add_read_read = "https://tangkinhcac.vn/add_list_read/";

const api_remove_list_read = "https://tangkinhcac.vn/remove_list_read/"

let btnAddListRead = document.getElementById('add-list-read');
let btnAddListReadMobile = document.getElementById('add-list-read-mobile');

btnAddListRead.onclick = function(){
    if (btnAddListRead.innerHTML == 'Thêm Vào Danh Sách Đọc'){
        var story_id = btnAddListRead.dataset.story;

        fetch(api_add_read_read, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": getCookie("csrftoken")
            },
            body: JSON.stringify({
                data:{
                    'story_id': story_id,
                }
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.status == 'success'){
                btnAddListRead.innerHTML = 'Bỏ Lưu';
            }
        })
        .catch(error => console.log(error));
    } else {
        var story_id = btnAddListRead.dataset.story;

        fetch(api_remove_list_read, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": getCookie("csrftoken")
            },
            body: JSON.stringify({
                data:{
                    'story_id': story_id,
                }
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.status == 'success'){
                btnAddListRead.innerHTML = 'Thêm Vào Danh Sách Đọc';
            }
        })
        .catch(error => console.log(error));
    }
}

btnAddListReadMobile.onclick = function(){
    if (btnAddListReadMobile.innerHTML == 'Thêm Vào DSĐ'){
        var story_id = btnAddListReadMobile.dataset.story;

        fetch(api_add_read_read, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": getCookie("csrftoken")
            },
            body: JSON.stringify({
                data:{
                    'story_id': story_id,
                }
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.status == 'success'){
                btnAddListReadMobile.innerHTML = 'Bỏ Lưu';
            }
        })
        .catch(error => console.log(error));
    } else {
        var story_id = btnAddListReadMobile.dataset.story;

        fetch(api_remove_list_read, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": getCookie("csrftoken")
            },
            body: JSON.stringify({
                data:{
                    'story_id': story_id,
                }
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.status == 'success'){
                btnAddListReadMobile.innerHTML = 'Thêm Vào DSĐ';
            }
        })
        .catch(error => console.log(error));
    }
}


// Send data Comment FOR LAPTOP AND TABLET

let btnComment = document.getElementById('btn-comment');
let contentComment = document.getElementById('content-comment');
let showComment = document.getElementById('show-comment');

const apiComment = "https://tangkinhcac.vn/add_comment/";
const apiReplyCommnent = "https://tangkinhcac.vn/reply_comment/"

btnComment.onclick = function(){
    let story_id = btnComment.dataset.story;
    let conten_comment = contentComment.value;

    fetch(apiComment, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken")
        },
        body: JSON.stringify({
            data:{
                'story_id': story_id,
                'content_comment': conten_comment,
            }
        })
    })
    .then(response => response.json())
    .then(data => {
        if(data.status == 'success'){
            receive_data = data.send_data;
            comment_id = receive_data.comment_id;
            username = receive_data.username;
            image_user = receive_data.image;
            date_created = receive_data.date_created;

            var showCommentItem = `
                <div class="list-comments__item" id="parent-comment-${comment_id}">
                    <div class="show-comment" id="${comment_id}">
                        <img src="${image_user}" alt="">
                        <div class="list-comments__item-body">
                            <div class="comment-item__body-user">
                                <h3>${username}</h3>
                                <h4>Bá Tánh Bình Dân</h4>
                            </div>
                            <p class="comment-item__body-content">${conten_comment}</p>
                            <div class="comment-item__body-info">
                                <span>${date_created}</span>
                                <div>
                                    <i class="fa-regular fa-comment-dots"></i>
                                    <span>0 trả lời</span>
                                </div>
                                <div>
                                    <i class="fa-regular fa-thumbs-up"></i>
                                    <span>0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`

            showComment.insertAdjacentHTML('afterbegin', showCommentItem);

            contentComment.value = '';
        }
    })
    .catch(error => console.log(error));
}

// SEND Reply Comment

function addReplyComment(comment_id, story_id, image_user_url){

    var showListComment = document.getElementById(`show-parent_comment-${comment_id}`);
    if(showListComment){
        showListComment.style.display = 'block';
    }

    let checkExistParent = document.querySelector(`#list-comments__item-${comment_id} #reply-comment-${comment_id}`) ? true : false;

    var parent_comment = document.getElementById(`parent-comment-${comment_id}`);

    if(checkExistParent == false){
        parent_comment.insertAdjacentHTML('afterend', `<div class="reply-comment" id="reply-comment-${comment_id}">
            <img src=${image_user_url} alt="">
            <div class="reply-comment__body">
                <textarea name="content-reply" id="content-reply-comment" placeholder="Add a comment"></textarea>
                <input type="submit" id="btn-reply-comment" value="Bình luận">
            </div>
            </div>`)
    }

    var btnReplyCommentSend = document.getElementById('btn-reply-comment');
    var selectContentReplyComment = document.getElementById('content-reply-comment');

    btnReplyCommentSend.onclick = function(){

        var reply_comment = document.getElementById(`reply-comment-${comment_id}`);
        var contentReplyComment = selectContentReplyComment.value;

        fetch(apiReplyCommnent, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": getCookie("csrftoken")
            },
            body: JSON.stringify({
                data:{
                    'story_id': story_id,
                    'content_reply_comment': contentReplyComment,
                    'parent_comment': comment_id,
                }
            })
        })
        .then(response => response.json())
        .then(data =>{
            if(data.status == 'success'){
                let receive_data = data.send_data;
                let comment_id = receive_data.comment_id;
                let username = receive_data.username;
                let image_user = receive_data.image;
                let date_created = receive_data.date_created;

                reply_comment.insertAdjacentHTML('afterend', `
                    <div class="show-comment" id="${comment_id}">
                        <img src="${image_user}" alt="">
                        <div class="list-comments__item-body">
                            <div class="comment-item__body-user">
                                <h3>${username}</h3>
                                <h4>Bá Tánh Bình Dân</h4>
                            </div>
                            <p class="comment-item__body-content">${contentReplyComment}</p>
                            <div class="comment-item__body-info">
                                <span>${date_created}</span>
                                <div>
                                    <i class="fa-regular fa-thumbs-up"></i>
                                    <span>0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                `)

                selectContentReplyComment.value = '';

                let showCommentStyle = document.getElementById(comment_id);
                showCommentStyle.style.cssText = 'margin-left: 70px; margin-bottom: 25px;';
            }
        })
        .catch(error => console.log(error))
    }
}

// Send data Comment FOR MOBILE

// SEND DATA Like Comment

function addLikeComment(comment_id){

    const apiAddLike = "https://tangkinhcac.vn/add_like_comment/"

    fetch(apiAddLike, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken")
        },
        body: JSON.stringify({
            data:{
                'comment_id': comment_id,
            }
        })
    })
    .then(response => response.json())
    .then(data =>{
        if(data.status == 'success'){
            let number_like = data.number_like;
            let showLike = document.getElementById(`like-${comment_id}`);
            let styleLike = document.getElementById(`style-${comment_id}`)
            showLike.innerHTML = number_like;
            styleLike.style.color = '#ed4259';
        }
    })
    .catch(error => console.log(error))
}

// Pagination For Story

function pagination(elm, story_id, number_page){
    const apiPagination = "https://tangkinhcac.vn/pagination_story/"

    let elementAct = document.querySelector('.pagination-act');
    let eleNextPage = document.querySelectorAll('.next-page');

    elementAct.classList.remove('pagination-act');

    eleNextPage.forEach(item=>{
        item.dataset.page = number_page;
    })

    elm.classList.add('pagination-act');

    fetch(apiPagination, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken")
        },
        body: JSON.stringify({
            data:{
                'story_id': story_id,
                'number_page': number_page,
            }
        })
    })
    .then(response => response.json())
    .then(data =>{
        if(data.status == 'success'){
            const receive_data = data.send_data;
            const data_page = receive_data.data_page;
            const story_slug = receive_data.story_slug;

            let list_chap = document.getElementById('list-chap');

            list_chap.replaceChildren();

            data_page.forEach(chapter => {
                list_chap.insertAdjacentHTML('beforeend', `
                <li>
                    <a href="/story/${story_id}/${story_slug}/${chapter.slug}/${chapter.pk}">Chương
                        ${chapter.chap_number} : ${chapter.title}</a>
                </li>
                `)
            });
        }
    })
    .catch(error => console.log(error))
}

function pagination2(elm, story_id, number_page){
    const apiPagination = "https://tangkinhcac.vn/pagination_story/"

    let elementAct = document.querySelector('.pagination-act');

    elementAct.classList.remove('pagination-act');

    elm.classList.add('pagination-act');

    fetch(apiPagination, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken")
        },
        body: JSON.stringify({
            data:{
                'story_id': story_id,
                'number_page': number_page,
            }
        })
    })
    .then(response => response.json())
    .then(data =>{
        if(data.status == 'success'){
            const receive_data = data.send_data;
            const data_page = receive_data.data_page;
            const story_slug = receive_data.story_slug;

            let list_chap = document.getElementById('list-chap');

            list_chap.replaceChildren();

            data_page.forEach(chapter => {
                list_chap.insertAdjacentHTML('beforeend', `
                <li>
                    <a href="/story/${story_id}/${story_slug}/${chapter.slug}/${chapter.pk}">Chương
                        ${chapter.chap_number} : ${chapter.title}</a>
                </li>
                `)
            });
        }
    })
    .catch(error => console.log(error))
}

function pagination3(elm, story_id){
    const apiPagination = "https://tangkinhcac.vn/pagination_story/"

    let elementAct = document.querySelector('.pagination-act');
    let elmEnd = document.querySelector('.data-end');
    let elmMid = document.querySelector('.data-mid');
    let elmStart = document.querySelector('.data-start');

    if(elm == elmMid){
        var number_page = Number(elmMid.dataset.mid);
    }else if(elm == elmEnd){
        var number_page = Number(elmEnd.dataset.end);
    }else{
        var number_page = Number(elmStart.dataset.start);
    }

    elementAct.classList.remove('pagination-act');
    elm.classList.add('pagination-act');

    fetch(apiPagination, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken")
        },
        body: JSON.stringify({
            data:{
                'story_id': story_id,
                'number_page': number_page,
            }
        })
    })
    .then(response => response.json())
    .then(data =>{
        if(data.status == 'success'){
            const receive_data = data.send_data;
            const data_page = receive_data.data_page;
            const story_slug = receive_data.story_slug;
            const total_pages = receive_data.total_pages;

            let list_chap = document.getElementById('list-chap');

            list_chap.replaceChildren();

            data_page.forEach(chapter => {
                list_chap.insertAdjacentHTML('beforeend', `
                <li>
                    <a href="/story/${story_id}/${story_slug}/${chapter.slug}/${chapter.pk}">Chương
                        ${chapter.chap_number} : ${chapter.title}</a>
                </li>
                `)
            });

            let number_page_next = Number(elmEnd.dataset.end);
            let elmFixed = document.querySelector('.data-fixed');
            let dataNone = document.querySelectorAll('.data-none');
            let number_page_fixed = Number(elmFixed.dataset.fixed);

            let pageDot = document.querySelector('.page-dot');

            if(number_page_next != total_pages){
                if(elm == elmStart){
                    elmStart.setAttribute("id", `act-${number_page-1}`);
                    elmMid.setAttribute("id", `act-${number_page}`);
                    elmEnd.setAttribute("id", `act-${number_page+1}`);
                }else if(elm == elmMid){
                    elmStart.setAttribute("id", `act-${number_page-1}`);
                    elmMid.setAttribute("id", `act-${number_page}`);
                    elmEnd.setAttribute("id", `act-${number_page+1}`);
                }else{
                    elmStart.setAttribute("id", `act-${number_page-1}`);
                    elmMid.setAttribute("id", `act-${number_page}`);
                    elmEnd.setAttribute("id", `act-${number_page+1}`);
                }
            }

            if(number_page == number_page_next){
                if(number_page_next != total_pages){
                    const new_number_page = number_page + 1
                    elmEnd.dataset.end =  new_number_page;
                    elmEnd.innerHTML = `${new_number_page}`;
                    elmMid.dataset.mid = number_page;
                    elmMid.innerHTML = `${number_page}`;
                    const new_number_page_start = number_page - 1;
                    elmStart.dataset.start = number_page - 1;
                    elmStart.innerHTML = `${new_number_page_start}`;

                    let elementAct = document.querySelector('.pagination-act');
                    elementAct.classList.remove('pagination-act');
                    elmMid.classList.add('pagination-act');

                    if(number_page_next == number_page_fixed-1){
                        pageDot.style.display = 'none';
                        dataNone.forEach(item=>{
                            item.style.display = 'none';
                        })
                    }

                    number_page_next = Number(elmEnd.dataset.end);
                }
            }

            if(number_page == number_page_next - 2 && number_page != 1){
                elmStart.dataset.start = number_page - 1;
                elmMid.dataset.mid = number_page;
                const new_number_page = number_page + 1
                elmEnd.dataset.end =  new_number_page;
                const new_number_page_start = number_page - 1;

                elmEnd.innerHTML = `${new_number_page}`;
                elmMid.innerHTML = `${number_page}`;
                elmStart.innerHTML = `${new_number_page_start}`;

                let elementAct = document.querySelector('.pagination-act');
                elementAct.classList.remove('pagination-act');
                elmMid.classList.add('pagination-act');

                if(number_page == number_page_fixed - 2){
                    pageDot.style.display = 'block';
                    dataNone.forEach(item=>{
                        item.style.display = 'block';
                    })
                }

                number_page_next = Number(elmEnd.dataset.end);
            }
        }
    })
    .catch(error => console.log(error))
}

// Paganition next page

function paginationPrev(elm, story_id){
    const apiPagination = "https://tangkinhcac.vn/pagination_story/"

    const number_page_raw = elm.dataset.page;

    if(number_page_raw != 1){
        let number_page = Number(number_page_raw) - 1;
        let eleNextPage = document.querySelectorAll('.next-page');
        let elementAct = document.querySelector('.pagination-act');

        elementAct.classList.remove('pagination-act');
        let newElementAct = document.getElementById(`act-${number_page}`);
        newElementAct.classList.add('pagination-act');

        fetch(apiPagination, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": getCookie("csrftoken")
            },
            body: JSON.stringify({
                data:{
                    'story_id': story_id,
                    'number_page': number_page,
                }
            })
        })
        .then(response => response.json())
        .then(data =>{
            if(data.status == 'success'){
                const receive_data = data.send_data;
                const data_page = receive_data.data_page;
                const story_slug = receive_data.story_slug;
    
                let list_chap = document.getElementById('list-chap');
    
                list_chap.replaceChildren();
    
                data_page.forEach(chapter => {
                    list_chap.insertAdjacentHTML('beforeend', `
                    <li>
                        <a href="/story/${story_id}/${story_slug}/${chapter.slug}/${chapter.pk}">Chương
                            ${chapter.chap_number} : ${chapter.title}</a>
                    </li>
                    `)
                });

                eleNextPage.forEach(item=>{
                    item.dataset.page = number_page;
                })
            }
        })
        .catch(error => console.log(error))
    }

}


function paginationNext(elm, story_id, total_pages){
    const apiPagination = "https://tangkinhcac.vn/pagination_story/"

    const number_page_raw = elm.dataset.page;

    if(number_page_raw != total_pages){
        let number_page = Number(number_page_raw) + 1;
        let eleNextPage = document.querySelectorAll('.next-page');
        let elementAct = document.querySelector('.pagination-act');
        let newElementAct = document.getElementById(`act-${number_page}`);

        elementAct.classList.remove('pagination-act');
        newElementAct.classList.add('pagination-act');

        fetch(apiPagination, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": getCookie("csrftoken")
            },
            body: JSON.stringify({
                data:{
                    'story_id': story_id,
                    'number_page': number_page,
                }
            })
        })
        .then(response => response.json())
        .then(data =>{
            if(data.status == 'success'){
                const receive_data = data.send_data;
                const data_page = receive_data.data_page;
                const story_slug = receive_data.story_slug;
    
                let list_chap = document.getElementById('list-chap');
    
                list_chap.replaceChildren();
    
                data_page.forEach(chapter => {
                    list_chap.insertAdjacentHTML('beforeend', `
                    <li>
                        <a href="/story/${story_id}/${story_slug}/${chapter.slug}/${chapter.pk}">Chương
                            ${chapter.chap_number} : ${chapter.title}</a>
                    </li>
                    `)
                });

                eleNextPage.forEach(item=>{
                    item.dataset.page = number_page;
                })
            }
        })
        .catch(error => console.log(error))
    }

}


function submitChoicePage(story_id){
    const apiPagination = "https://tangkinhcac.vn/pagination_story/"

    let elmChoice = document.getElementById('choice-page');
    let valueChoice = Number(elmChoice.value);

    fetch(apiPagination, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken")
        },
        body: JSON.stringify({
            data:{
                'story_id': story_id,
                'number_page': valueChoice,
            }
        })
    })
    .then(response => response.json())
    .then(data =>{
        if(data.status == 'success'){
            const receive_data = data.send_data;
            const data_page = receive_data.data_page;
            const story_slug = receive_data.story_slug;
            const total_pages = receive_data.total_pages;

            let list_chap = document.getElementById('list-chap');

            list_chap.replaceChildren();

            data_page.forEach(chapter => {
                list_chap.insertAdjacentHTML('beforeend', `
                <li>
                    <a href="/story/${story_id}/${story_slug}/${chapter.slug}/${chapter.pk}">Chương
                        ${chapter.chap_number} : ${chapter.title}</a>
                </li>
                `)
            });

            elmChoice.value = '';

            let numberPage = document.querySelector('.number_page');
            numberPage.replaceChildren();

            if(valueChoice >= (total_pages - 3) && valueChoice != total_pages ){
                numberPage.innerHTML = `
                <span class="data-start" id="act-${valueChoice-1}" data-start="${valueChoice-1}" onclick="pagination3(this, '${story_id}')">${valueChoice-1}</span>
                <span class="data-mid pagination-act" id="act-${valueChoice}" data-mid="${valueChoice}" onclick="pagination3(this, '${story_id}')">${valueChoice}</span>
                <span class="data-end" id="act-${valueChoice+1}" data-end="${valueChoice+1}" onclick="pagination3(this, '${story_id}')">${valueChoice+1}</span>
                <span class="page-dot" style="display: none;">...</span>
                <span class="data-fixed data-none" data-fixed="${valueChoice+1}" onclick="pagination2(this, '${story_id}', ${valueChoice+1})" style="display: none;">${valueChoice+1}</span>
                <span class="data-none" onclick="pagination2(this, '${story_id}', ${valueChoice+2})" style="display: none;">${valueChoice-+2}</span>
                <span class="data-none" onclick="pagination2(this, '${story_id}', ${valueChoice+3})" style="display: none;">${valueChoice+3}</span>
                `
            }else if(valueChoice == total_pages){
                numberPage.innerHTML = `
                <span class="data-start" id="act-${valueChoice-2}" data-start="${valueChoice-2}" onclick="pagination3(this, '${story_id}')">${valueChoice-2}</span>
                <span class="data-mid" id="act-${valueChoice-1}" data-mid="${valueChoice-1}" onclick="pagination3(this, '${story_id}')">${valueChoice-1}</span>
                <span class="data-end pagination-act" id="act-${valueChoice}" data-end="${valueChoice}" onclick="pagination3(this, '${story_id}')">${valueChoice}</span>
                <span class="page-dot" style="display: none;">...</span>
                <span class="data-fixed data-none" data-fixed="${valueChoice-2}" onclick="pagination2(this, '${story_id}', ${valueChoice-2})" style="display: none;">${valueChoice-2}</span>
                <span class="data-none" onclick="pagination2(this, '${story_id}', ${valueChoice-1})" style="display: none;">${valueChoice-1}</span>
                <span class="data-none" onclick="pagination2(this, '${story_id}', ${valueChoice})" style="display: none;">${valueChoice}</span>
                `
            }else if(valueChoice == 1){
                numberPage.innerHTML = `
                <span class="data-start pagination-act" id="act-${valueChoice}" data-start="${valueChoice}" onclick="pagination3(this, '${story_id}')">${valueChoice}</span>
                <span class="data-mid" id="act-${valueChoice+1}" data-mid="${valueChoice+1}" onclick="pagination3(this, '${story_id}')">${valueChoice+1}</span>
                <span class="data-end" id="act-${valueChoice+2}" data-end="${valueChoice+2}" onclick="pagination3(this, '${story_id}')">${valueChoice+2}</span>
                <span class="page-dot">...</span>
                <span class="data-fixed data-none" data-fixed="${total_pages-2}" onclick="pagination2(this, '${story_id}', ${total_pages-2})">${total_pages-2}</span>
                <span class="data-none" onclick="pagination2(this, '${story_id}', ${total_pages-1})">${total_pages-1}</span>
                <span class="data-none" onclick="pagination2(this, '${story_id}', ${total_pages})">${total_pages}</span>
                `
            }
            else{
                numberPage.innerHTML = `
                <span class="data-start" id="act-${valueChoice-1}" data-start="${valueChoice-1}" onclick="pagination3(this, '${story_id}')">${valueChoice-1}</span>
                <span class="data-mid pagination-act" id="act-${valueChoice}" data-mid="${valueChoice}" onclick="pagination3(this, '${story_id}')">${valueChoice}</span>
                <span class="data-end" id="act-${valueChoice+1}" data-end="${valueChoice+1}" onclick="pagination3(this, '${story_id}')">${valueChoice+1}</span>
                <span class="page-dot">...</span>
                <span class="data-fixed data-none" data-fixed="${total_pages-2}" onclick="pagination2(this, '${story_id}', ${total_pages-2})">${total_pages-2}</span>
                <span class="data-none" onclick="pagination2(this, '${story_id}', ${total_pages-1})">${total_pages-1}</span>
                <span class="data-none" onclick="pagination2(this, '${story_id}', ${total_pages})">${total_pages}</span>
                `
            }
        }
    })
    .catch(error => console.log(error))
}

// PAGINATION FOR COMMENT

function paginationCom(elm, story_id, number_page){
    const apiPagination = "https://tangkinhcac.vn/pagination_comment/"

    let elementAct = document.querySelector('.pagination_comment-act');
    let eleNextPage = document.querySelectorAll('.next-page-comment');

    elementAct.classList.remove('pagination_comment-act');

    eleNextPage.forEach(item=>{
        item.dataset.pagecom = number_page;
    })

    elm.classList.add('pagination_comment-act');

    fetch(apiPagination, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken")
        },
        body: JSON.stringify({
            data:{
                'story_id': story_id,
                'number_page': number_page,
            }
        })
    })
    .then(response => response.json())
    .then(data =>{
        if(data.status == 'success'){
            const receive_data = data.send_data;
            const comments = receive_data.comments;
            const child_comments = receive_data.child_comments;
            const user_profile_image = receive_data.user_profile_image;

            let list_comment = document.querySelector('.list-comments');

            list_comment.replaceChildren();

            comments.forEach(comment => {
                list_comment.insertAdjacentHTML('beforeend', `
                <div class="list-comments__item" id="list-comments__item-${comment.id}">
                    <div class="show-comment" id="parent-comment-${comment.id}">
                        <img src="${comment.image_user}">
                        <div class="list-comments__item-body">
                            <div class="comment-item__body-user">
                                <h3>${comment.username}</h3>
                                <h4>Bá Tánh Bình Dân</h4>
                            </div>
                            <p class="comment-item__body-content">${comment.content}</p>
                            <div class="comment-item__body-info">
                                <span>${comment.date_created}</span>
                                <div onclick="addReplyComment(${comment.id}, ${story_id}, '${user_profile_image}')">
                                    <i class="fa-regular fa-comment-dots"></i>
                                    <span>${comment.number_reply} trả lời</span>
                                </div>
                                <div onclick="addLikeComment(${comment.id}); this.removeAttribute('onclick');" id="style-${comment.id}">
                                    <i class="fa-regular fa-thumbs-up"></i>
                                    <span id="like-${comment.id}">${comment.number_like}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `)

                if(comment.number_reply > 0){
                    let showComment = document.getElementById(`parent-comment-${comment.id}`);
                    showComment.insertAdjacentHTML('afterend', `
                    <div class="list-reply-comment" style="display: none;" id="show-parent_comment-${comment.id}">
                    `)

                    let listReplyComment = document.getElementById(`show-parent_comment-${comment.id}`);

                    child_comments.forEach(child_comment=>{
                        if(comment.id == child_comment.fields.parent_comment_id){
                            listReplyComment.insertAdjacentHTML('beforeend', `
                            <div class="list-reply-comment__item">
                                <img src="${child_comment.fields.image_user}">
                                <div class="list-comments__item-body">
                                    <div class="comment-item__body-user">
                                        <h3>${child_comment.fields.username}</h3>
                                        <h4>Bá Tánh Bình Dân</h4>
                                    </div>
                                    <p class="comment-item__body-content">${child_comment.fields.content}</p>
                                    <div class="comment-item__body-info">
                                        <span>${child_comment.fields.date_created}</span>
                                        <div onclick="addLikeComment(${child_comment.pk}); this.removeAttribute('onclick');" id="style-${child_comment.pk}">
                                            <i class="fa-regular fa-thumbs-up"></i>
                                            <span id="like-${child_comment.pk}">${child_comment.fields.number_like}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            `)
                        }
                    })
                }
                
            });
        }
    })
    .catch(error => console.log(error))
}

function paginationCom2(elm, story_id, number_page){Com
    const apiPagination = "https://tangkinhcac.vn/pagination_comment/"

    let elementAct = document.querySelector('.pagination_comment-act');

    elementAct.classList.remove('pagination_comment-act');

    elm.classList.add('pagination_comment-act');

    fetch(apiPagination, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken")
        },
        body: JSON.stringify({
            data:{
                'story_id': story_id,
                'number_page': number_page,
            }
        })
    })
    .then(response => response.json())
    .then(data =>{
        if(data.status == 'success'){
            const receive_data = data.send_data;
            const comments = receive_data.comments;
            const child_comments = receive_data.child_comments;
            const user_profile_image = receive_data.user_profile_image;

            let list_comment = document.querySelector('.list-comments');

            list_comment.replaceChildren();

            comments.forEach(comment => {
                list_comment.insertAdjacentHTML('beforeend', `
                <div class="list-comments__item" id="list-comments__item-${comment.id}">
                    <div class="show-comment" id="parent-comment-${comment.id}">
                        <img src="${comment.image_user}">
                        <div class="list-comments__item-body">
                            <div class="comment-item__body-user">
                                <h3>${comment.username}</h3>
                                <h4>Bá Tánh Bình Dân</h4>
                            </div>
                            <p class="comment-item__body-content">${comment.content}</p>
                            <div class="comment-item__body-info">
                                <span>${comment.date_created}</span>
                                <div onclick="addReplyComment(${comment.id}, ${story_id}, '${user_profile_image}')">
                                    <i class="fa-regular fa-comment-dots"></i>
                                    <span>${comment.number_reply} trả lời</span>
                                </div>
                                <div onclick="addLikeComment(${comment.id}); this.removeAttribute('onclick');" id="style-${comment.id}">
                                    <i class="fa-regular fa-thumbs-up"></i>
                                    <span id="like-${comment.id}">${comment.number_like}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `)

                if(comment.number_reply > 0){
                    let showComment = document.getElementById(`parent-comment-${comment.id}`);
                    showComment.insertAdjacentHTML('afterend', `
                    <div class="list-reply-comment" style="display: none;" id="show-parent_comment-${comment.id}">
                    `)

                    let listReplyComment = document.getElementById(`show-parent_comment-${comment.id}`);

                    child_comments.forEach(child_comment=>{
                        if(comment.id == child_comment.fields.parent_comment_id){
                            listReplyComment.insertAdjacentHTML('beforeend', `
                            <div class="list-reply-comment__item">
                                <img src="${child_comment.fields.image_user}">
                                <div class="list-comments__item-body">
                                    <div class="comment-item__body-user">
                                        <h3>${child_comment.fields.username}</h3>
                                        <h4>Bá Tánh Bình Dân</h4>
                                    </div>
                                    <p class="comment-item__body-content">${child_comment.fields.content}</p>
                                    <div class="comment-item__body-info">
                                        <span>${child_comment.fields.date_created}</span>
                                        <div onclick="addLikeComment(${child_comment.pk}); this.removeAttribute('onclick');" id="style-${child_comment.pk}">
                                            <i class="fa-regular fa-thumbs-up"></i>
                                            <span id="like-${child_comment.pk}">${child_comment.fields.number_like}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            `)
                        }
                    })
                }
                
            });
        }
    })
    .catch(error => console.log(error))
}

function paginationCom3(elm, story_id){
    const apiPagination = "https://tangkinhcac.vn/pagination_comment/"

    let elementAct = document.querySelector('.pagination_comment-act');
    let elmEnd = document.querySelector('.data_comment-end');
    let elmMid = document.querySelector('.data_comment-mid');
    let elmStart = document.querySelector('.data_comment-start');

    if(elm == elmMid){
        var number_page = Number(elmMid.dataset.midcom);
    }else if(elm == elmEnd){
        var number_page = Number(elmEnd.dataset.endcom);
    }else{
        var number_page = Number(elmStart.dataset.startcom);
    }

    elementAct.classList.remove('pagination_comment-act');
    elm.classList.add('pagination_comment-act');

    fetch(apiPagination, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken")
        },
        body: JSON.stringify({
            data:{
                'story_id': story_id,
                'number_page': number_page,
            }
        })
    })
    .then(response => response.json())
    .then(data =>{
        if(data.status == 'success'){
            const receive_data = data.send_data;
            const comments = receive_data.comments;
            const child_comments = receive_data.child_comments;
            const user_profile_image = receive_data.user_profile_image;
            const total_pages = receive_data.total_pages;

            let list_comment = document.querySelector('.list-comments');

            list_comment.replaceChildren();

            comments.forEach(comment => {
                list_comment.insertAdjacentHTML('beforeend', `
                <div class="list-comments__item" id="list-comments__item-${comment.id}">
                    <div class="show-comment" id="parent-comment-${comment.id}">
                        <img src="${comment.image_user}">
                        <div class="list-comments__item-body">
                            <div class="comment-item__body-user">
                                <h3>${comment.username}</h3>
                                <h4>Bá Tánh Bình Dân</h4>
                            </div>
                            <p class="comment-item__body-content">${comment.content}</p>
                            <div class="comment-item__body-info">
                                <span>${comment.date_created}</span>
                                <div onclick="addReplyComment(${comment.id}, ${story_id}, '${user_profile_image}')">
                                    <i class="fa-regular fa-comment-dots"></i>
                                    <span>${comment.number_reply} trả lời</span>
                                </div>
                                <div onclick="addLikeComment(${comment.id}); this.removeAttribute('onclick');" id="style-${comment.id}">
                                    <i class="fa-regular fa-thumbs-up"></i>
                                    <span id="like-${comment.id}">${comment.number_like}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `)

                if(comment.number_reply > 0){
                    let showComment = document.getElementById(`parent-comment-${comment.id}`);
                    showComment.insertAdjacentHTML('afterend', `
                    <div class="list-reply-comment" style="display: none;" id="show-parent_comment-${comment.id}">
                    `)

                    let listReplyComment = document.getElementById(`show-parent_comment-${comment.id}`);

                    child_comments.forEach(child_comment=>{
                        if(comment.id == child_comment.fields.parent_comment_id){
                            listReplyComment.insertAdjacentHTML('beforeend', `
                            <div class="list-reply-comment__item">
                                <img src="${child_comment.fields.image_user}">
                                <div class="list-comments__item-body">
                                    <div class="comment-item__body-user">
                                        <h3>${child_comment.fields.username}</h3>
                                        <h4>Bá Tánh Bình Dân</h4>
                                    </div>
                                    <p class="comment-item__body-content">${child_comment.fields.content}</p>
                                    <div class="comment-item__body-info">
                                        <span>${child_comment.fields.date_created}</span>
                                        <div onclick="addLikeComment(${child_comment.pk}); this.removeAttribute('onclick');" id="style-${child_comment.pk}">
                                            <i class="fa-regular fa-thumbs-up"></i>
                                            <span id="like-${child_comment.pk}">${child_comment.fields.number_like}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            `)
                        }
                    })
                }
                
            });

            let number_page_next = Number(elmEnd.dataset.endcom);
            let elmFixed = document.querySelector('.data_comment-fixed');
            let dataNone = document.querySelectorAll('.data_comment-none');
            let number_page_fixed = Number(elmFixed.dataset.fixedcom);

            let pageDot = document.querySelector('.page_comment-dot');

            if(number_page_next != total_pages){
                if(elm == elmStart){
                    elmStart.setAttribute("id", `act-comment-${number_page-1}`);
                    elmMid.setAttribute("id", `act-comment-${number_page}`);
                    elmEnd.setAttribute("id", `act-comment-${number_page+1}`);
                }else if(elm == elmMid){
                    elmStart.setAttribute("id", `act-comment-${number_page-1}`);
                    elmMid.setAttribute("id", `act-comment-${number_page}`);
                    elmEnd.setAttribute("id", `act-comment-${number_page+1}`);
                }else{
                    elmStart.setAttribute("id", `act-comment-${number_page-1}`);
                    elmMid.setAttribute("id", `act-comment-${number_page}`);
                    elmEnd.setAttribute("id", `act-comment-${number_page+1}`);
                }
            }

            if(number_page == number_page_next){
                if(number_page_next != total_pages){
                    const new_number_page = number_page + 1
                    elmEnd.dataset.endcom =  new_number_page;
                    elmEnd.innerHTML = `${new_number_page}`;
                    elmMid.dataset.midcom = number_page;
                    elmMid.innerHTML = `${number_page}`;
                    const new_number_page_start = number_page - 1;
                    elmStart.dataset.startcom = number_page - 1;
                    elmStart.innerHTML = `${new_number_page_start}`;

                    let elementAct = document.querySelector('.pagination_comment-act');
                    elementAct.classList.remove('pagination_comment-act');
                    elmMid.classList.add('pagination_comment-act');

                    if(number_page_next == number_page_fixed-1){
                        pageDot.style.display = 'none';
                        dataNone.forEach(item=>{
                            item.style.display = 'none';
                        })
                    }

                    number_page_next = Number(elmEnd.dataset.endcom);
                }
            }

            if(number_page == number_page_next - 2 && number_page != 1){
                elmStart.dataset.startcom = number_page - 1;
                elmMid.dataset.midcom = number_page;
                const new_number_page = number_page + 1
                elmEnd.dataset.endcom =  new_number_page;
                const new_number_page_start = number_page - 1;

                elmEnd.innerHTML = `${new_number_page}`;
                elmMid.innerHTML = `${number_page}`;
                elmStart.innerHTML = `${new_number_page_start}`;

                let elementAct = document.querySelector('.pagination_comment-act');
                elementAct.classList.remove('pagination_comment-act');
                elmMid.classList.add('pagination_comment-act');

                if(number_page == number_page_fixed - 2){
                    pageDot.style.display = 'block';
                    dataNone.forEach(item=>{
                        item.style.display = 'block';
                    })
                }

                number_page_next = Number(elmEnd.dataset.endcom);
            }
        }
    })
    .catch(error => console.log(error))
}

// Paganition next page Comment

function paginationComPrev(elm, story_id){
    const apiPaginationComment = "https://tangkinhcac.vn/pagination_comment/"

    const number_page_raw = elm.dataset.pagecom;

    if(number_page_raw != 1){
        let number_page = Number(number_page_raw) - 1;
        let eleNextPage = document.querySelectorAll('.next-page-comment');
        let elementAct = document.querySelector('.pagination_comment-act');

        elementAct.classList.remove('pagination_comment-act');
        let newElementAct = document.getElementById(`act-comment-${number_page}`);
        console.log(newElementAct);
        newElementAct.classList.add('pagination_comment-act');

        fetch(apiPaginationComment, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": getCookie("csrftoken")
            },
            body: JSON.stringify({
                data:{
                    'story_id': story_id,
                    'number_page': number_page,
                }
            })
        })
        .then(response => response.json())
        .then(data =>{
            if(data.status == 'success'){
                const receive_data = data.send_data;
                const comments = receive_data.comments;
                const child_comments = receive_data.child_comments;
                const user_profile_image = receive_data.user_profile_image;
    
                let list_comment = document.querySelector('.list-comments');
    
                list_comment.replaceChildren();
    
                comments.forEach(comment => {
                    list_comment.insertAdjacentHTML('beforeend', `
                    <div class="list-comments__item" id="list-comments__item-${comment.id}">
                        <div class="show-comment" id="parent-comment-${comment.id}">
                            <img src="${comment.image_user}">
                            <div class="list-comments__item-body">
                                <div class="comment-item__body-user">
                                    <h3>${comment.username}</h3>
                                    <h4>Bá Tánh Bình Dân</h4>
                                </div>
                                <p class="comment-item__body-content">${comment.content}</p>
                                <div class="comment-item__body-info">
                                    <span>${comment.date_created}</span>
                                    <div onclick="addReplyComment(${comment.id}, ${story_id}, '${user_profile_image}')">
                                        <i class="fa-regular fa-comment-dots"></i>
                                        <span>${comment.number_reply} trả lời</span>
                                    </div>
                                    <div onclick="addLikeComment(${comment.id}); this.removeAttribute('onclick');" id="style-${comment.id}">
                                        <i class="fa-regular fa-thumbs-up"></i>
                                        <span id="like-${comment.id}">${comment.number_like}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `)
    
                    if(comment.number_reply > 0){
                        let showComment = document.getElementById(`parent-comment-${comment.id}`);
                        showComment.insertAdjacentHTML('afterend', `
                        <div class="list-reply-comment" style="display: none;" id="show-parent_comment-${comment.id}">
                        `)
    
                        let listReplyComment = document.getElementById(`show-parent_comment-${comment.id}`);
    
                        child_comments.forEach(child_comment=>{
                            if(comment.id == child_comment.fields.parent_comment_id){
                                listReplyComment.insertAdjacentHTML('beforeend', `
                                <div class="list-reply-comment__item">
                                    <img src="${child_comment.fields.image_user}">
                                    <div class="list-comments__item-body">
                                        <div class="comment-item__body-user">
                                            <h3>${child_comment.fields.username}</h3>
                                            <h4>Bá Tánh Bình Dân</h4>
                                        </div>
                                        <p class="comment-item__body-content">${child_comment.fields.content}</p>
                                        <div class="comment-item__body-info">
                                            <span>${child_comment.fields.date_created}</span>
                                            <div onclick="addLikeComment(${child_comment.pk}); this.removeAttribute('onclick');" id="style-${child_comment.pk}">
                                                <i class="fa-regular fa-thumbs-up"></i>
                                                <span id="like-${child_comment.pk}">${child_comment.fields.number_like}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `)
                            }
                        })
                    }
                    
                });

                eleNextPage.forEach(item=>{
                    item.dataset.pagecom = number_page;
                })
            }
        })
        .catch(error => console.log(error))
    }
}


function paginationComNext(elm, story_id, total_pages_comment){
    const apiPaginationComment = "https://tangkinhcac.vn/pagination_comment/"

    const number_page_raw = elm.dataset.pagecom;

    if(number_page_raw != total_pages_comment){
        let number_page = Number(number_page_raw) + 1;
        let eleNextPage = document.querySelectorAll('.next-page-comment');
        let elementAct = document.querySelector('.pagination_comment-act');

        elementAct.classList.remove('pagination_comment-act');
        let newElementAct = document.getElementById(`act-comment-${number_page}`);
        console.log(newElementAct);
        newElementAct.classList.add('pagination_comment-act');

        fetch(apiPaginationComment, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": getCookie("csrftoken")
            },
            body: JSON.stringify({
                data:{
                    'story_id': story_id,
                    'number_page': number_page,
                }
            })
        })
        .then(response => response.json())
        .then(data =>{
            if(data.status == 'success'){
                const receive_data = data.send_data;
                const comments = receive_data.comments;
                const child_comments = receive_data.child_comments;
                const user_profile_image = receive_data.user_profile_image;
    
                let list_comment = document.querySelector('.list-comments');
    
                list_comment.replaceChildren();
    
                comments.forEach(comment => {
                    list_comment.insertAdjacentHTML('beforeend', `
                    <div class="list-comments__item" id="list-comments__item-${comment.id}">
                        <div class="show-comment" id="parent-comment-${comment.id}">
                            <img src="${comment.image_user}">
                            <div class="list-comments__item-body">
                                <div class="comment-item__body-user">
                                    <h3>${comment.username}</h3>
                                    <h4>Bá Tánh Bình Dân</h4>
                                </div>
                                <p class="comment-item__body-content">${comment.content}</p>
                                <div class="comment-item__body-info">
                                    <span>${comment.date_created}</span>
                                    <div onclick="addReplyComment(${comment.id}, ${story_id}, '${user_profile_image}')">
                                        <i class="fa-regular fa-comment-dots"></i>
                                        <span>${comment.number_reply} trả lời</span>
                                    </div>
                                    <div onclick="addLikeComment(${comment.id}); this.removeAttribute('onclick');" id="style-${comment.id}">
                                        <i class="fa-regular fa-thumbs-up"></i>
                                        <span id="like-${comment.id}">${comment.number_like}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `)
    
                    if(comment.number_reply > 0){
                        let showComment = document.getElementById(`parent-comment-${comment.id}`);
                        showComment.insertAdjacentHTML('afterend', `
                        <div class="list-reply-comment" style="display: none;" id="show-parent_comment-${comment.id}">
                        `)
    
                        let listReplyComment = document.getElementById(`show-parent_comment-${comment.id}`);
    
                        child_comments.forEach(child_comment=>{
                            if(comment.id == child_comment.fields.parent_comment_id){
                                listReplyComment.insertAdjacentHTML('beforeend', `
                                <div class="list-reply-comment__item">
                                    <img src="${child_comment.fields.image_user}">
                                    <div class="list-comments__item-body">
                                        <div class="comment-item__body-user">
                                            <h3>${child_comment.fields.username}</h3>
                                            <h4>Bá Tánh Bình Dân</h4>
                                        </div>
                                        <p class="comment-item__body-content">${child_comment.fields.content}</p>
                                        <div class="comment-item__body-info">
                                            <span>${child_comment.fields.date_created}</span>
                                            <div onclick="addLikeComment(${child_comment.pk}); this.removeAttribute('onclick');" id="style-${child_comment.pk}">
                                                <i class="fa-regular fa-thumbs-up"></i>
                                                <span id="like-${child_comment.pk}">${child_comment.fields.number_like}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `)
                            }
                        })
                    }
                    
                });

                eleNextPage.forEach(item=>{
                    item.dataset.pagecom = number_page;
                })
            }
        })
        .catch(error => console.log(error))
    }

}


function submitChoicePageCom(story_id){
    const apiPagination = "https://tangkinhcac.vn/pagination_comment/"

    let elmChoice = document.getElementById('choice-page-comment');
    let valueChoice = Number(elmChoice.value);

    fetch(apiPagination, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken")
        },
        body: JSON.stringify({
            data:{
                'story_id': story_id,
                'number_page': valueChoice,
            }
        })
    })
    .then(response => response.json())
    .then(data =>{
        if(data.status == 'success'){
            const receive_data = data.send_data;
            const comments = receive_data.comments;
            const child_comments = receive_data.child_comments;
            const user_profile_image = receive_data.user_profile_image;
            const total_pages = receive_data.total_pages;

            let list_comment = document.querySelector('.list-comments');

            list_comment.replaceChildren();

            comments.forEach(comment => {
                list_comment.insertAdjacentHTML('beforeend', `
                <div class="list-comments__item" id="list-comments__item-${comment.id}">
                    <div class="show-comment" id="parent-comment-${comment.id}">
                        <img src="${comment.image_user}">
                        <div class="list-comments__item-body">
                            <div class="comment-item__body-user">
                                <h3>${comment.username}</h3>
                                <h4>Bá Tánh Bình Dân</h4>
                            </div>
                            <p class="comment-item__body-content">${comment.content}</p>
                            <div class="comment-item__body-info">
                                <span>${comment.date_created}</span>
                                <div onclick="addReplyComment(${comment.id}, ${story_id}, '${user_profile_image}')">
                                    <i class="fa-regular fa-comment-dots"></i>
                                    <span>${comment.number_reply} trả lời</span>
                                </div>
                                <div onclick="addLikeComment(${comment.id}); this.removeAttribute('onclick');" id="style-${comment.id}">
                                    <i class="fa-regular fa-thumbs-up"></i>
                                    <span id="like-${comment.id}">${comment.number_like}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `)

                if(comment.number_reply > 0){
                    let showComment = document.getElementById(`parent-comment-${comment.id}`);
                    showComment.insertAdjacentHTML('afterend', `
                    <div class="list-reply-comment" style="display: none;" id="show-parent_comment-${comment.id}">
                    `)

                    let listReplyComment = document.getElementById(`show-parent_comment-${comment.id}`);

                    child_comments.forEach(child_comment=>{
                        if(comment.id == child_comment.fields.parent_comment_id){
                            listReplyComment.insertAdjacentHTML('beforeend', `
                            <div class="list-reply-comment__item">
                                <img src="${child_comment.fields.image_user}">
                                <div class="list-comments__item-body">
                                    <div class="comment-item__body-user">
                                        <h3>${child_comment.fields.username}</h3>
                                        <h4>Bá Tánh Bình Dân</h4>
                                    </div>
                                    <p class="comment-item__body-content">${child_comment.fields.content}</p>
                                    <div class="comment-item__body-info">
                                        <span>${child_comment.fields.date_created}</span>
                                        <div onclick="addLikeComment(${child_comment.pk}); this.removeAttribute('onclick');" id="style-${child_comment.pk}">
                                            <i class="fa-regular fa-thumbs-up"></i>
                                            <span id="like-${child_comment.pk}">${child_comment.fields.number_like}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            `)
                        }
                    })
                }
                
            });

            elmChoice.value = '';

            let numberPage = document.querySelector('.number-page-comment');
            numberPage.replaceChildren();

            if(valueChoice >= (total_pages - 3) && valueChoice != total_pages ){
                numberPage.innerHTML = `
                <span class="data_comment-start" id="act-comment-${valueChoice-1}" data-startcom="${valueChoice-1}" onclick="paginationCom3(this, '${story_id}')">${valueChoice-1}</span>
                <span class="data_comment-mid pagination_comment-act" id="act-comment-${valueChoice}" data-midcom="${valueChoice}" onclick="paginationCom3(this, '${story_id}')">${valueChoice}</span>
                <span class="data_comment-end" id="actcomment--${valueChoice+1}" data-endcom="${valueChoice+1}" onclick="paginationCom3(this, '${story_id}')">${valueChoice+1}</span>
                <span class="page_comment-dot" style="display: none;">...</span>
                <span class="data_comment-fixed data_comment-none" data-fixedcom="${valueChoice+1}" onclick="pagination2(this, '${story_id}', ${valueChoice+1})" style="display: none;">${valueChoice+1}</span>
                <span class="data_comment-none" onclick="paginationCom2(this, '${story_id}', ${valueChoice+2})" style="display: none;">${valueChoice-+2}</span>
                <span class="data_comment-none" onclick="paginationCom2(this, '${story_id}', ${valueChoice+3})" style="display: none;">${valueChoice+3}</span>
                `
            }else if(valueChoice == total_pages){
                numberPage.innerHTML = `
                <span class="data_comment-start" id="act-comment-${valueChoice-2}" data-startcom="${valueChoice-2}" onclick="paginationCom3(this, '${story_id}')">${valueChoice-2}</span>
                <span class="data_comment-mid" id="act-comment-${valueChoice-1}" data-midcom="${valueChoice-1}" onclick="paginationCom3(this, '${story_id}')">${valueChoice-1}</span>
                <span class="data_comment-end pagination_comment-act" id="act-comment-${valueChoice}" data-endcom="${valueChoice}" onclick="paginationCom3(this, '${story_id}')">${valueChoice}</span>
                <span class="page_comment-dot" style="display: none;">...</span>
                <span class="data_comment-fixed data_comment-none" data-fixedcom="${valueChoice-2}" onclick="paginationCom2(this, '${story_id}', ${valueChoice-2})" style="display: none;">${valueChoice-2}</span>
                <span class="data_comment-none" onclick="paginationCom2(this, '${story_id}', ${valueChoice-1})" style="display: none;">${valueChoice-1}</span>
                <span class="data_comment-none" onclick="paginationCom2(this, '${story_id}', ${valueChoice})" style="display: none;">${valueChoice}</span>
                `
            }else if(valueChoice == 1){
                numberPage.innerHTML = `
                <span class="data_comment-start pagination_comment-act" id="act-comment-${valueChoice}" data-startcom="${valueChoice}" onclick="paginationCom3(this, '${story_id}')">${valueChoice}</span>
                <span class="data_comment-mid" id="act-comment-${valueChoice}" data-midcom="${valueChoice+1}" onclick="paginationCom3(this, '${story_id}')">${valueChoice+1}</span>
                <span class="data_comment-end" id="act-comment-${valueChoice+1}" data-endcom="${valueChoice+2}" onclick="paginationCom3(this, '${story_id}')">${valueChoice+2}</span>
                <span class="page_comment-dot">...</span>
                <span class="data_comment-fixed data_comment-none" data-fixedcom="${total_pages-2}" onclick="paginationCom2(this, '${story_id}', ${total_pages-2})">${total_pages-2}</span>
                <span class="data_comment-none" onclick="paginationCom2(this, '${story_id}', ${total_pages-1})">${total_pages-1}</span>
                <span class="data_comment-none" onclick="paginationCom2(this, '${story_id}', ${total_pages})">${total_pages}</span>
                `
            }else{
                numberPage.innerHTML = `
                <span class="data_comment-start" id="act-comment-${valueChoice-1}" data-startcom="${valueChoice-1}" onclick="paginationCom3(this, '${story_id}')">${valueChoice-1}</span>
                <span class="data_comment-mid pagination_comment-act" id="act-comment-${valueChoice}" data-midcom="${valueChoice}" onclick="paginationCom3(this, '${story_id}')">${valueChoice}</span>
                <span class="data_comment-end" id="act-comment-${valueChoice+1}" data-endcom="${valueChoice+1}" onclick="paginationCom3(this, '${story_id}')">${valueChoice+1}</span>
                <span class="page_comment-dot">...</span>
                <span class="data_comment-fixed data_comment-none" data-fixedcom="${total_pages-2}" onclick="paginationCom2(this, '${story_id}', ${total_pages-2})">${total_pages-2}</span>
                <span class="data_comment-none" onclick="paginationCom2(this, '${story_id}', ${total_pages-1})">${total_pages-1}</span>
                <span class="data_comment-none" onclick="paginationCom2(this, '${story_id}', ${total_pages})">${total_pages}</span>
                `
            }
        }
    })
    .catch(error => console.log(error))
}

// DISPLAY LIST CHAPTER FOR MOBILE

let btnClickListMobile = document.querySelector('.new-story-update');

if(btnClickListMobile){
    btnClickListMobile.onclick = function(){
        listChapterMobile.style.display = 'block';
    }
}