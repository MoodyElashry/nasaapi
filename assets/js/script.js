let show_btn = document.getElementById('show_btn')
let apikey = "gIlbXMAjMJOTWTcYEq7X4YbqYotz5xvdAgHtJ9QE"
let img_con = document.getElementById('img_con')
let the_title = document.getElementById('title')
let des = document.getElementById('des')
let copy = document.getElementById('copy')

show_btn.onclick = ()=>{
    let date = document.getElementById('input_main')
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apikey}&date=${date.value}`).then(result => result.json()).then((data)=>{
        console.log(data)
        img_con.innerHTML = `<img src="${data.hdurl}" alt="" class="the_img" height="85vh" width="50%">`
        the_title.innerText = `${data.title}`
        des.innerText = data.explanation
        copy.innerHTML = `${data.copyright}  &copy;`

    })
}


