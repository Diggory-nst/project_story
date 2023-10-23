
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

const apiPagination = "https://tangkinhcac.vn/pagination_filter_story_mob/"

function pagination(elm, number_page){

    let elementAct = document.querySelector('.pagination-act');
    let eleNextPage = document.querySelectorAll('.next-page');

    elementAct.classList.remove('pagination-act');

    eleNextPage.forEach(item=>{
        item.dataset.page = number_page;
    })

    elm.classList.add('pagination-act');

    let data_status = sessionStorage.getItem('status_mob');
    let data_type = sessionStorage.getItem('type_mob');

    let status_story;
    let type_story;

    if(data_status == null && data_type == null){
        status_story = 'Toàn Bộ';
        type_story = 'Tất Cả';
    }else{
        status_story = data_status;
        type_story = data_type;
    }


    fetch(apiPagination, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken")
        },
        body: JSON.stringify({
            data:{
                'status_story': status_story,
                'type_story': type_story,
                'number_page': number_page,
            }
        })
    })
    .then(response => response.json())
    .then(data =>{
        if(data.status == 'success'){
            const receive_data = data.send_data;
            const data_page = receive_data.data_page;

            let list_story = document.getElementById('list-filter-story');

            list_story.replaceChildren();

            data_page.forEach(story => {
                list_story.insertAdjacentHTML('beforeend', `
                <li class="filter-story-item">
                    <a href="/story/${story.pk}/${story.slug}/">
                        <img src="${story.image}">
                        <div class="filter-story__info">
                            <h3>${story.title}</h3>
                            <span>Tác Giả: ${story.author}</span>
                            <span>Thể Loại: ${story.genre}</span>
                            <span>Lượt Xem: ${story.number_of_views}</span>
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

function paginationPrev(elm, story_id){

    const number_page_raw = elm.dataset.page;

    if(number_page_raw != 1){
        let number_page = Number(number_page_raw) - 1;
        let eleNextPage = document.querySelectorAll('.next-page');
        let elementAct = document.querySelector('.pagination-act');

        elementAct.classList.remove('pagination-act');
        let newElementAct = document.getElementById(`act-${number_page}`);
        newElementAct.classList.add('pagination-act');

        let data_status = sessionStorage.getItem('status_mob');
        let data_type = sessionStorage.getItem('type_mob');

        let status_story;
        let type_story;

        if(data_status == null && data_type == null){
            status_story = 'Toàn Bộ';
            type_story = 'Tất Cả';
        }else{
            status_story = data_status;
            type_story = data_type;
        }

        fetch(apiPagination, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": getCookie("csrftoken")
            },
            body: JSON.stringify({
                data:{
                    'status_story': status_story,
                    'type_story': type_story,
                    'number_page': number_page,
                }
            })
        })
        .then(response => response.json())
        .then(data =>{
            if(data.status == 'success'){
                const receive_data = data.send_data;
                const data_page = receive_data.data_page;
    
                let list_story = document.getElementById('list-filter-story');
    
                list_story.replaceChildren();
    
                data_page.forEach(story => {
                    list_story.insertAdjacentHTML('beforeend', `
                    <li class="filter-story-item">
                        <a href="/story/${story.pk}/${story.slug}/">
                            <img src="${story.image}">
                            <div class="filter-story__info">
                                <h3>${story.title}</h3>
                                <span>Tác Giả: ${story.author}</span>
                                <span>Thể Loại: ${story.genre}</span>
                                <span>Lượt Xem: ${story.number_of_views}</span>
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


function paginationNext(elm, total_pages){

    const number_page_raw = elm.dataset.page;

    if(number_page_raw != total_pages){
        let number_page = Number(number_page_raw) + 1;
        let eleNextPage = document.querySelectorAll('.next-page');
        let elementAct = document.querySelector('.pagination-act');
        let newElementAct = document.getElementById(`act-${number_page}`);

        elementAct.classList.remove('pagination-act');
        newElementAct.classList.add('pagination-act');

        let data_status = sessionStorage.getItem('status_mob');
        let data_type = sessionStorage.getItem('type_mob');

        let status_story;
        let type_story;

        if(data_status == null && data_type == null){
            status_story = 'Toàn Bộ';
            type_story = 'Tất Cả';
        }else{
            status_story = data_status;
            type_story = data_type;
        }

        fetch(apiPagination, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": getCookie("csrftoken")
            },
            body: JSON.stringify({
                data:{
                    'status_story': status_story,
                    'type_story': type_story,
                    'number_page': number_page,
                }
            })
        })
        .then(response => response.json())
        .then(data =>{
            if(data.status == 'success'){
                const receive_data = data.send_data;
                const data_page = receive_data.data_page;
    
                let list_story = document.getElementById('list-filter-story');
    
                list_story.replaceChildren();
    
                data_page.forEach(story => {
                    list_story.insertAdjacentHTML('beforeend', `
                    <li class="filter-story-item">
                        <a href="/story/${story.pk}/${story.slug}/">
                            <img src="${story.image}">
                            <div class="filter-story__info">
                                <h3>${story.title}</h3>
                                <span>Tác Giả: ${story.author}</span>
                                <span>Thể Loại: ${story.genre}</span>
                                <span>Lượt Xem: ${story.number_of_views}</span>
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

function pagination2(elm, number_page){

    let elementAct = document.querySelector('.pagination-act');

    elementAct.classList.remove('pagination-act');

    elm.classList.add('pagination-act');

    let data_status = sessionStorage.getItem('status_mob');
    let data_type = sessionStorage.getItem('type_mob');

    let status_story;
    let type_story;

    if(data_status == null && data_type == null){
        status_story = 'Toàn Bộ';
        type_story = 'Tất Cả';
    }else{
        status_story = data_status;
        type_story = data_type;
    }

    fetch(apiPagination, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken")
        },
        body: JSON.stringify({
            data:{
                'status_story': status_story,
                'type_story': type_story,
                'number_page': number_page,
            }
        })
    })
    .then(response => response.json())
    .then(data =>{
        if(data.status == 'success'){
            const receive_data = data.send_data;
            const data_page = receive_data.data_page;

            let list_story = document.getElementById('list-filter-story');

            list_story.replaceChildren();

            data_page.forEach(story => {
                list_story.insertAdjacentHTML('beforeend', `
                <li class="filter-story-item">
                    <a href="/story/${story.pk}/${story.slug}/">
                        <img src="${story.image}">
                        <div class="filter-story__info">
                            <h3>${story.title}</h3>
                            <span>Tác Giả: ${story.author}</span>
                            <span>Thể Loại: ${story.genre}</span>
                            <span>Lượt Xem: ${story.number_of_views}</span>
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

function pagination3(elm){

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

    let data_status = sessionStorage.getItem('status_mob');
    let data_type = sessionStorage.getItem('type_mob');

    let status_story;
    let type_story;

    if(data_status == null && data_type == null){
        status_story = 'Toàn Bộ';
        type_story = 'Tất Cả';
    }else{
        status_story = data_status;
        type_story = data_type;
    }

    fetch(apiPagination, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken")
        },
        body: JSON.stringify({
            data:{
                'status_story': status_story,
                'type_story': type_story,
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

            let list_story = document.getElementById('list-filter-story');

            list_story.replaceChildren();

            data_page.forEach(story => {
                list_story.insertAdjacentHTML('beforeend', `
                <li class="filter-story-item">
                    <a href="/story/${story.pk}/${story.slug}/">
                        <img src="${story.image}">
                        <div class="filter-story__info">
                            <h3>${story.title}</h3>
                            <span>Tác Giả: ${story.author}</span>
                            <span>Thể Loại: ${story.genre}</span>
                            <span>Lượt Xem: ${story.number_of_views}</span>
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

function submitChoicePage(){

    let elmChoice = document.getElementById('choice-page');
    let valueChoice = Number(elmChoice.value);

    let data_status = sessionStorage.getItem('status_mob');
    let data_type = sessionStorage.getItem('type_mob');

    let status_story;
    let type_story;

    if(data_status == null && data_type == null){
        status_story = 'Toàn Bộ';
        type_story = 'Tất Cả';
    }else{
        status_story = data_status;
        type_story = data_type;
    }

    fetch(apiPagination, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": getCookie("csrftoken")
        },
        body: JSON.stringify({
            data:{
                'status_story': status_story,
                'type_story': type_story,
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

            let list_story = document.getElementById('list-filter-story');
    
            list_story.replaceChildren();

            data_page.forEach(story => {
                list_story.insertAdjacentHTML('beforeend', `
                <li class="filter-story-item">
                    <a href="/story/${story.pk}/${story.slug}/">
                        <img src="${story.image}">
                        <div class="filter-story__info">
                            <h3>${story.title}</h3>
                            <span>Tác Giả: ${story.author}</span>
                            <span>Thể Loại: ${story.genre}</span>
                            <span>Lượt Xem: ${story.number_of_views}</span>
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