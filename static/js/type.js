

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

// Pagination For Story

const apiPagination = "https://tangkinhcac.vn/pagination_type_page/"

function pagination(elm, type, number_page){

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
                'type_story': type,
                'number_page': number_page,
            }
        })
    })
    .then(response => response.json())
    .then(data =>{
        if(data.status == 'success'){
            const receive_data = data.send_data;
            const data_page = receive_data.data_page;

            let list_story = document.getElementById('list-type');

            list_story.replaceChildren();

            data_page.forEach(story => {
                list_story.insertAdjacentHTML('beforeend', `
                <div class="col xl-6 l-6 m-12 fix-margin">
                    <div class="type-story">
                        <img src="${story.image}">
                        <div class="type-story__info">
                            <a href="/story/${story.pk}/${story.slug}/">
                                <h3>${story.title}</h3> 
                            </a>
                            <div>
                                <a href="/story/author/${story.author}" class="type-story__info-author">${story.author}</a>
                                <span class="type-story__info-status">${story.status}</span>
                                <span class="type-story__info-chapter">${story.number_of_chapter} chương</span>
                            </div>
                            <p>${story.description}</p>
                            <div>
                                <p>Cập Nhật: <span>${story.date_created}</span></p>
                                <span><a href="/story/${story.pk}/${story.slug}/">Chi tiết</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                `)
            });
        }
    })
    .catch(error => console.log(error))
}

function paginationPrev(elm, type){

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
                    'type_story': type,
                    'number_page': number_page,
                }
            })
        })
        .then(response => response.json())
        .then(data =>{
            if(data.status == 'success'){
                const receive_data = data.send_data;
                const data_page = receive_data.data_page;
    
                let list_story = document.getElementById('list-type');
    
                list_story.replaceChildren();
    
                data_page.forEach(story => {
                    list_story.insertAdjacentHTML('beforeend', `
                    <div class="col xl-6 l-6 m-12 fix-margin">
                        <div class="type-story">
                            <img src="${story.image}">
                            <div class="type-story__info">
                                <a href="/story/${story.pk}/${story.slug}/">
                                    <h3>${story.title}</h3> 
                                </a>
                                <div>
                                    <a href="/story/author/${story.author}" class="type-story__info-author">${story.author}</a>
                                    <span class="type-story__info-status">${story.status}</span>
                                    <span class="type-story__info-chapter">${story.number_of_chapter} chương</span>
                                </div>
                                <p>${story.description}</p>
                                <div>
                                    <p>Cập Nhật: <span>${story.date_created}</span></p>
                                    <span><a href="/story/${story.pk}/${story.slug}/">Chi tiết</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
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


function paginationNext(elm, type, total_pages){

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
                    'type_story': type,
                    'number_page': number_page,
                }
            })
        })
        .then(response => response.json())
        .then(data =>{
            if(data.status == 'success'){
                const receive_data = data.send_data;
                const data_page = receive_data.data_page;
    
                let list_story = document.getElementById('list-type');
    
                list_story.replaceChildren();
    
                data_page.forEach(story => {
                    list_story.insertAdjacentHTML('beforeend', `
                    <div class="col xl-6 l-6 m-12 fix-margin">
                        <div class="type-story">
                            <img src="${story.image}">
                            <div class="type-story__info">
                                <a href="/story/${story.pk}/${story.slug}/">
                                    <h3>${story.title}</h3> 
                                </a>
                                <div>
                                    <a href="/story/author/${story.author}" class="type-story__info-author">${story.author}</a>
                                    <span class="type-story__info-status">${story.status}</span>
                                    <span class="type-story__info-chapter">${story.number_of_chapter} chương</span>
                                </div>
                                <p>${story.description}</p>
                                <div>
                                    <p>Cập Nhật: <span>${story.date_created}</span></p>
                                    <span><a href="/story/${story.pk}/${story.slug}/">Chi tiết</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
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

function pagination2(elm, type, number_page){

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
                'type_story': type,
                'number_page': number_page,
            }
        })
    })
    .then(response => response.json())
    .then(data =>{
        if(data.status == 'success'){
            const receive_data = data.send_data;
            const data_page = receive_data.data_page;

            let list_story = document.getElementById('list-type');

            list_story.replaceChildren();

            data_page.forEach(story => {
                list_story.insertAdjacentHTML('beforeend', `
                <div class="col xl-6 l-6 m-12 fix-margin">
                    <div class="type-story">
                        <img src="${story.image}">
                        <div class="type-story__info">
                            <a href="/story/${story.pk}/${story.slug}/">
                                <h3>${story.title}</h3> 
                            </a>
                            <div>
                                <a href="/story/author/${story.author}" class="type-story__info-author">${story.author}</a>
                                <span class="type-story__info-status">${story.status}</span>
                                <span class="type-story__info-chapter">${story.number_of_chapter} chương</span>
                            </div>
                            <p>${story.description}</p>
                            <div>
                                <p>Cập Nhật: <span>${story.date_created}</span></p>
                                <span><a href="/story/${story.pk}/${story.slug}/">Chi tiết</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                `)
            });
        }
    })
    .catch(error => console.log(error))
}

function pagination3(elm, type){

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
                'type_story': type,
                'number_page': number_page,
            }
        })
    })
    .then(response => response.json())
    .then(data =>{
        if(data.status == 'success'){
            const receive_data = data.send_data;
            const data_page = receive_data.data_page;
            const total_pages = receive_data.total_pages;

            let list_story = document.getElementById('list-type');

            list_story.replaceChildren();

            data_page.forEach(story => {
                list_story.insertAdjacentHTML('beforeend', `
                <div class="col xl-6 l-6 m-12 fix-margin">
                    <div class="type-story">
                        <img src="${story.image}">
                        <div class="type-story__info">
                            <a href="/story/${story.pk}/${story.slug}/">
                                <h3>${story.title}</h3> 
                            </a>
                            <div>
                                <a href="/story/author/${story.author}" class="type-story__info-author">${story.author}</a>
                                <span class="type-story__info-status">${story.status}</span>
                                <span class="type-story__info-chapter">${story.number_of_chapter} chương</span>
                            </div>
                            <p>${story.description}</p>
                            <div>
                                <p>Cập Nhật: <span>${story.date_created}</span></p>
                                <span><a href="/story/${story.pk}/${story.slug}/">Chi tiết</a></span>
                            </div>
                        </div>
                    </div>
                </div>
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

function submitChoicePage(type){

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
                'type_story': type,
                'number_page': valueChoice,
            }
        })
    })
    .then(response => response.json())
    .then(data =>{
        if(data.status == 'success'){
            const receive_data = data.send_data;
            const data_page = receive_data.data_page;
            const total_pages = receive_data.total_pages;

            let list_story = document.getElementById('list-type');
    
            list_story.replaceChildren();

            data_page.forEach(story => {
                list_story.insertAdjacentHTML('beforeend', `
                <div class="col xl-6 l-6 m-12 fix-margin">
                    <div class="type-story">
                        <img src="${story.image}">
                        <div class="type-story__info">
                            <a href="/story/${story.pk}/${story.slug}/">
                                <h3>${story.title}</h3> 
                            </a>
                            <div>
                                <a href="/story/author/${story.author}" class="type-story__info-author">${story.author}</a>
                                <span class="type-story__info-status">${story.status}</span>
                                <span class="type-story__info-chapter">${story.number_of_chapter} chương</span>
                            </div>
                            <p>${story.description}</p>
                            <div>
                                <p>Cập Nhật: <span>${story.date_created}</span></p>
                                <span><a href="/story/${story.pk}/${story.slug}/">Chi tiết</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                `)
            });

            elmChoice.value = '';

            let numberPage = document.querySelector('.number_page');
            numberPage.replaceChildren();

            if(valueChoice >= (total_pages - 3) && valueChoice != total_pages ){
                numberPage.innerHTML = `
                <span class="data-start" id="act-${valueChoice-1}" data-start="${valueChoice-1}" onclick="pagination3(this)">${valueChoice-1}</span>
                <span class="data-mid pagination-act" id="act-${valueChoice}" data-mid="${valueChoice}" onclick="pagination3(this)">${valueChoice}</span>
                <span class="data-end" id="act-${valueChoice+1}" data-end="${valueChoice+1}" onclick="pagination3(this)">${valueChoice+1}</span>
                <span class="page-dot" style="display: none;">...</span>
                <span class="data-fixed data-none" data-fixed="${valueChoice+1}" onclick="pagination2(this, ${valueChoice+1})" style="display: none;">${valueChoice+1}</span>
                <span class="data-none" onclick="pagination2(this, ${valueChoice+2})" style="display: none;">${valueChoice-+2}</span>
                <span class="data-none" onclick="pagination2(this, ${valueChoice+3})" style="display: none;">${valueChoice+3}</span>
                `
            }else if(valueChoice == total_pages){
                numberPage.innerHTML = `
                <span class="data-start" id="act-${valueChoice-2}" data-start="${valueChoice-2}" onclick="pagination3(this)">${valueChoice-2}</span>
                <span class="data-mid" id="act-${valueChoice-1}" data-mid="${valueChoice-1}" onclick="pagination3(this)">${valueChoice-1}</span>
                <span class="data-end pagination-act" id="act-${valueChoice}" data-end="${valueChoice}" onclick="pagination3(this)">${valueChoice}</span>
                <span class="page-dot" style="display: none;">...</span>
                <span class="data-fixed data-none" data-fixed="${valueChoice-2}" onclick="pagination2(this, ${valueChoice-2})" style="display: none;">${valueChoice-2}</span>
                <span class="data-none" onclick="pagination2(this, ${valueChoice-1})" style="display: none;">${valueChoice-1}</span>
                <span class="data-none" onclick="pagination2(this, ${valueChoice})" style="display: none;">${valueChoice}</span>
                `
            }else if(valueChoice == 1){
                numberPage.innerHTML = `
                <span class="data-start pagination-act" id="act-${valueChoice}" data-start="${valueChoice}" onclick="pagination3(this)">${valueChoice}</span>
                <span class="data-mid" id="act-${valueChoice+1}" data-mid="${valueChoice+1}" onclick="pagination3(this)">${valueChoice+1}</span>
                <span class="data-end" id="act-${valueChoice+2}" data-end="${valueChoice+2}" onclick="pagination3(this)">${valueChoice+2}</span>
                <span class="page-dot">...</span>
                <span class="data-fixed data-none" data-fixed="${total_pages-2}" onclick="pagination2(this, ${total_pages-2})">${total_pages-2}</span>
                <span class="data-none" onclick="pagination2(this, ${total_pages-1})">${total_pages-1}</span>
                <span class="data-none" onclick="pagination2(this, ${total_pages})">${total_pages}</span>
                `
            }
            else{
                numberPage.innerHTML = `
                <span class="data-start" id="act-${valueChoice-1}" data-start="${valueChoice-1}" onclick="pagination3(this)">${valueChoice-1}</span>
                <span class="data-mid pagination-act" id="act-${valueChoice}" data-mid="${valueChoice}" onclick="pagination3(this)">${valueChoice}</span>
                <span class="data-end" id="act-${valueChoice+1}" data-end="${valueChoice+1}" onclick="pagination3(this)">${valueChoice+1}</span>
                <span class="page-dot">...</span>
                <span class="data-fixed data-none" data-fixed="${total_pages-2}" onclick="pagination2(this, ${total_pages-2})">${total_pages-2}</span>
                <span class="data-none" onclick="pagination2(this, ${total_pages-1})">${total_pages-1}</span>
                <span class="data-none" onclick="pagination2(this, ${total_pages})">${total_pages}</span>
                `
            }
        }
    })
    .catch(error => console.log(error))
}


// Pagination For Story Mobile

function paginationMob(elm, type, number_page){

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
                'type_story': type,
                'number_page': number_page,
            }
        })
    })
    .then(response => response.json())
    .then(data =>{
        if(data.status == 'success'){
            const receive_data = data.send_data;
            const data_page = receive_data.data_page;

            let list_story = document.getElementById('list-type-mob');

            list_story.replaceChildren();

            data_page.forEach(story => {
                list_story.insertAdjacentHTML('beforeend', `
                <li>
                    <a href="/story/${story.pk}/${story.slug}/">
                        <img src="${story.image}" alt="">
                        <div class="list-type__info">
                            <h3>${story.title}</h3>
                            <span>Tác Giả: ${story.author}</span>
                            <span>Lượt Xem: ${story.number_of_views}</span>
                            <span>Tình Trạng: ${story.status}</span>
                            <span>Số Chương: ${story.number_of_chapter}</span>
                        </div>
                    </a>
                </li>
                `)
            });
        }
    })
    .catch(error => console.log(error))
}

function paginationMobPrev(elm, type){

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
                    'type_story': type,
                    'number_page': number_page,
                }
            })
        })
        .then(response => response.json())
        .then(data =>{
            if(data.status == 'success'){
                const receive_data = data.send_data;
                const data_page = receive_data.data_page;
    
                let list_story = document.getElementById('list-type-mob');
    
                list_story.replaceChildren();
    
                data_page.forEach(story => {
                    list_story.insertAdjacentHTML('beforeend', `
                    <li>
                        <a href="/story/${story.pk}/${story.slug}/">
                            <img src="${story.image}" alt="">
                            <div class="list-type__info">
                                <h3>${story.title}</h3>
                                <span>Tác Giả: ${story.author}</span>
                                <span>Lượt Xem: ${story.number_of_views}</span>
                                <span>Tình Trạng: ${story.status}</span>
                                <span>Số Chương: ${story.number_of_chapter}</span>
                            </div>
                        </a>
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


function paginationMobNext(elm, type, total_pages){

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
                    'type_story': type,
                    'number_page': number_page,
                }
            })
        })
        .then(response => response.json())
        .then(data =>{
            if(data.status == 'success'){
                const receive_data = data.send_data;
                const data_page = receive_data.data_page;
    
                let list_story = document.getElementById('list-type-mob');
    
                list_story.replaceChildren();
    
                data_page.forEach(story => {
                    list_story.insertAdjacentHTML('beforeend', `
                    <li>
                        <a href="/story/${story.pk}/${story.slug}/">
                            <img src="${story.image}" alt="">
                            <div class="list-type__info">
                                <h3>${story.title}</h3>
                                <span>Tác Giả: ${story.author}</span>
                                <span>Lượt Xem: ${story.number_of_views}</span>
                                <span>Tình Trạng: ${story.status}</span>
                                <span>Số Chương: ${story.number_of_chapter}</span>
                            </div>
                        </a>
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

function paginationMob2(elm, type, number_page){

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
                'type_story': type,
                'number_page': number_page,
            }
        })
    })
    .then(response => response.json())
    .then(data =>{
        if(data.status == 'success'){
            const receive_data = data.send_data;
            const data_page = receive_data.data_page;

            let list_story = document.getElementById('list-type-mob');

            list_story.replaceChildren();

            data_page.forEach(story => {
                list_story.insertAdjacentHTML('beforeend', `
                <li>
                    <a href="/story/${story.pk}/${story.slug}/">
                        <img src="${story.image}" alt="">
                        <div class="list-type__info">
                            <h3>${story.title}</h3>
                            <span>Tác Giả: ${story.author}</span>
                            <span>Lượt Xem: ${story.number_of_views}</span>
                            <span>Tình Trạng: ${story.status}</span>
                            <span>Số Chương: ${story.number_of_chapter}</span>
                        </div>
                    </a>
                </li>
                `)
            });
        }
    })
    .catch(error => console.log(error))
}

function paginationMob3(elm, type){

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
                'type_story': type,
                'number_page': number_page,
            }
        })
    })
    .then(response => response.json())
    .then(data =>{
        if(data.status == 'success'){
            const receive_data = data.send_data;
            const data_page = receive_data.data_page;
            const total_pages = receive_data.total_pages;

            let list_story = document.getElementById('list-type-mob');

            list_story.replaceChildren();

            data_page.forEach(story => {
                list_story.insertAdjacentHTML('beforeend', `
                <li>
                    <a href="/story/${story.pk}/${story.slug}/">
                        <img src="${story.image}" alt="">
                        <div class="list-type__info">
                            <h3>${story.title}</h3>
                            <span>Tác Giả: ${story.author}</span>
                            <span>Lượt Xem: ${story.number_of_views}</span>
                            <span>Tình Trạng: ${story.status}</span>
                            <span>Số Chương: ${story.number_of_chapter}</span>
                        </div>
                    </a>
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

function submitChoicePageMob(type){

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
                'type_story': type,
                'number_page': valueChoice,
            }
        })
    })
    .then(response => response.json())
    .then(data =>{
        if(data.status == 'success'){
            const receive_data = data.send_data;
            const data_page = receive_data.data_page;
            const total_pages = receive_data.total_pages;

            let list_story = document.getElementById('list-type-mob');
    
            list_story.replaceChildren();

            data_page.forEach(story => {
                list_story.insertAdjacentHTML('beforeend', `
                <li>
                    <a href="/story/${story.pk}/${story.slug}/">
                        <img src="${story.image}" alt="">
                        <div class="list-type__info">
                            <h3>${story.title}</h3>
                            <span>Tác Giả: ${story.author}</span>
                            <span>Lượt Xem: ${story.number_of_views}</span>
                            <span>Tình Trạng: ${story.status}</span>
                            <span>Số Chương: ${story.number_of_chapter}</span>
                        </div>
                    </a>
                </li>
                `)
            });

            elmChoice.value = '';

            let numberPage = document.querySelector('.number_page');
            numberPage.replaceChildren();

            if(valueChoice >= (total_pages - 3) && valueChoice != total_pages ){
                numberPage.innerHTML = `
                <span class="data-start" id="act-${valueChoice-1}" data-start="${valueChoice-1}" onclick="pagination3(this)">${valueChoice-1}</span>
                <span class="data-mid pagination-act" id="act-${valueChoice}" data-mid="${valueChoice}" onclick="pagination3(this)">${valueChoice}</span>
                <span class="data-end" id="act-${valueChoice+1}" data-end="${valueChoice+1}" onclick="pagination3(this)">${valueChoice+1}</span>
                <span class="page-dot" style="display: none;">...</span>
                <span class="data-fixed data-none" data-fixed="${valueChoice+1}" onclick="pagination2(this, ${valueChoice+1})" style="display: none;">${valueChoice+1}</span>
                <span class="data-none" onclick="pagination2(this, ${valueChoice+2})" style="display: none;">${valueChoice-+2}</span>
                <span class="data-none" onclick="pagination2(this, ${valueChoice+3})" style="display: none;">${valueChoice+3}</span>
                `
            }else if(valueChoice == total_pages){
                numberPage.innerHTML = `
                <span class="data-start" id="act-${valueChoice-2}" data-start="${valueChoice-2}" onclick="pagination3(this)">${valueChoice-2}</span>
                <span class="data-mid" id="act-${valueChoice-1}" data-mid="${valueChoice-1}" onclick="pagination3(this)">${valueChoice-1}</span>
                <span class="data-end pagination-act" id="act-${valueChoice}" data-end="${valueChoice}" onclick="pagination3(this)">${valueChoice}</span>
                <span class="page-dot" style="display: none;">...</span>
                <span class="data-fixed data-none" data-fixed="${valueChoice-2}" onclick="pagination2(this, ${valueChoice-2})" style="display: none;">${valueChoice-2}</span>
                <span class="data-none" onclick="pagination2(this, ${valueChoice-1})" style="display: none;">${valueChoice-1}</span>
                <span class="data-none" onclick="pagination2(this, ${valueChoice})" style="display: none;">${valueChoice}</span>
                `
            }else if(valueChoice == 1){
                numberPage.innerHTML = `
                <span class="data-start pagination-act" id="act-${valueChoice}" data-start="${valueChoice}" onclick="pagination3(this)">${valueChoice}</span>
                <span class="data-mid" id="act-${valueChoice+1}" data-mid="${valueChoice+1}" onclick="pagination3(this)">${valueChoice+1}</span>
                <span class="data-end" id="act-${valueChoice+2}" data-end="${valueChoice+2}" onclick="pagination3(this)">${valueChoice+2}</span>
                <span class="page-dot">...</span>
                <span class="data-fixed data-none" data-fixed="${total_pages-2}" onclick="pagination2(this, ${total_pages-2})">${total_pages-2}</span>
                <span class="data-none" onclick="pagination2(this, ${total_pages-1})">${total_pages-1}</span>
                <span class="data-none" onclick="pagination2(this, ${total_pages})">${total_pages}</span>
                `
            }
            else{
                numberPage.innerHTML = `
                <span class="data-start" id="act-${valueChoice-1}" data-start="${valueChoice-1}" onclick="pagination3(this)">${valueChoice-1}</span>
                <span class="data-mid pagination-act" id="act-${valueChoice}" data-mid="${valueChoice}" onclick="pagination3(this)">${valueChoice}</span>
                <span class="data-end" id="act-${valueChoice+1}" data-end="${valueChoice+1}" onclick="pagination3(this)">${valueChoice+1}</span>
                <span class="page-dot">...</span>
                <span class="data-fixed data-none" data-fixed="${total_pages-2}" onclick="pagination2(this, ${total_pages-2})">${total_pages-2}</span>
                <span class="data-none" onclick="pagination2(this, ${total_pages-1})">${total_pages-1}</span>
                <span class="data-none" onclick="pagination2(this, ${total_pages})">${total_pages}</span>
                `
            }
        }
    })
    .catch(error => console.log(error))
}