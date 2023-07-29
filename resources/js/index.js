import {magazines} from "/workspace/shivamsinghm256-ME_BUILDOUT_XBOARD/resources/data/magazines.js"
async function init() {
    // console.log(magazines);
    let id = ["politics", "space", "sports"];
    for(let i=0;i<magazines.length;i++){
        let data = await fetchData(magazines[i]);
        for(let j=0;j<data.items.length;j++){
            if(j===0){
                addCarouselItem(id[i],data.items[j].enclosure.link, data.items[j].title, data.items[j].description, data.items[j].link, true);
            }
            else{
                addCarouselItem(id[i],data.items[j].enclosure.link, data.items[j].title, data.items[j].description, data.items[j].link, false);
            }
        }
        
    }

}

function addCarouselItem(id, image, title, description, link, first){
    let item = document.getElementById(id);
    let div = document.createElement("div");
    if(first){
        div.className = "carousel-item active";
    }
    else{
        div.className = "carousel-item";
    }
    div.innerHTML = `<a href="${link}" class = "caraousalImage"><img src="${image}" alt="Image not available" width="100%" height="auto"></a>
        <h2>${title}</h2>
        <p>${description}</p>
    `;
    item.append(div);
    
}
async function fetchData(url){
    try {
        return await fetch("https://api.rss2json.com/v1/api.json?rss_url=" + url).then(data => data.json());
    } catch (error) {
        return null;
    }
}
export {init, fetchData, addCarouselItem};

