
function prevent_submit(event){

    let password = document.getElementById('id_password').value;
    let confirm_password = document.getElementById('id_confirm_password').value;

    let parent_elm = document.querySelector('.list-error');
    let child_elm = document.createElement('p');
    child_elm.textContent = 'Mật Khẩu Không Khớp';
    child_elm.classList.add('error-js');

    let forget = document.querySelector('.forget');
    if(forget){
        forget.style.marginBottom = '22px';
    }

    if(password != confirm_password){
        event.preventDefault();
        parent_elm.appendChild(child_elm);
    }
}