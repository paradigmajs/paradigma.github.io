
var site='http://api.giphy.com/v1/gifs/search?q={';
var api='}&api_key=dc6zaTOxFJmzC';

go=()=>{
    let name = document.getElementById("name").value
    search(name)
}

search= async (q)=>{
    let resp = await fetch(site+q+api)
    let data = await resp.json()
    console.log(data)
    let result = document.getElementById("result")
    data.data.forEach(element => {
        let img = document.createElement('iframe')
        img.setAttribute('src', element.embed_url)
        result.appendChild(img)
    });
}