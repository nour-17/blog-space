let posts = document.getElementById("posts")
let btn = document.getElementById("btn")
let form = document.getElementById("form")
let title = document.getElementById("post-title")
let body = document.getElementById("post-body")
let postsArr = []


let update = _ => {
    let html = ''
    postsArr.forEach(element => {
        html += 
        `
            <h1>${element.title}</h1>
            <p>${element.body}</p>
            <hr />
         `
    });
    posts.innerHTML = html
}



fetch("https://apis.scrimba.com/jsonplaceholder/posts")
.then(res => res.json())
.then(data =>{
    postsArr = data.slice(0,5)    
    update()
})

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const postTitle = title.value
    const postBody = body.value
    const data = {
        title: postTitle,
        body: postBody
    }
    const options = {
        method:'POST',
        body:JSON.stringify(data),
        headers:{
            'Content-Type':'application/json'
        }
    }

    fetch("https://apis.scrimba.com/jsonplaceholder/posts",options) 
    .then(res => res.json())
    .then(data => {
        postsArr.unshift(data)
        update()
    })
    form.reset()
})