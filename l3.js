'use strict';
function ap() {
    fetch(`https://api.github.com/users/${document.getElementById('username').value}`)
        .then(function(response){
            if(response.status>=200 && response.status<400)
                return response.json()
            else
            {
                alert('Error'+response.status);
            }
        })
        .then(function(user){
            let conteiner=document.getElementById('div');
            let box=document.createDocumentFragment();
            conteiner.innerText='';
            let avatar = document.createElement('img');
            let name = document.createElement('div');
            let login = document.createElement('div');
            let bio = document.createElement('div');
            let company = document.createElement('div');
            let location = document.createElement('div');
            let email = document.createElement('div');
            let blog = document.createElement('a');

            SetImg(avatar, user.avatar_url, 'img_style');
            SetText(name, user.name, 'name_style');
            SetText(login, user.login, 'login_style');
            SetText(bio, user.bio, 'bio_style');
            SetText(company, user.company, 'company_style');
            SetText(location, user.location, 'location_style');
            SetText(email, user.email, 'email_style');
            SetLink(blog, user.blog, 'blog_style');

            box.appendChild(avatar);
            box.appendChild(name);
            box.appendChild(login);
            box.appendChild(bio);
            box.appendChild(company);
            box.appendChild(location);
            box.appendChild(email);
            box.appendChild(blog);
            conteiner.appendChild(box);
        })

}
function SetImg(name, contents, style){
    name.setAttribute('class',style);
    name.src = contents;
}
function SetText(name, contents, style) {
    if(!contents){
        return name.innerText==null;
    }
    else{
        name.setAttribute('class',style);
        name.innerText = contents;
    }
}
function SetLink(name, contents, style) {
    if(!contents){
        return name.innerText==null;
    }
    else{
        name.setAttribute('class', style);
        name.setAttribute('href', contents);
        name.innerText = contents;
    }
}