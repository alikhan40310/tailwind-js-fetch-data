
// fatching data
fetch('https://jsonplaceholder.typicode.com/photos').then(function(data){
  return data.json()
}).then(function(data){
  // using for each loop
  const sliceArray = data.slice(0,50);
  sliceArray.forEach(function(a){
    // creating elements of required data
    let mainDiv = document.createElement("div");
    let title = document.createElement("p");
    let image = document.createElement("img");
    // append data in main div
    mainDiv.appendChild(image);
    mainDiv.appendChild(title);
    // replacing element with innerHtml
    title.innerHTML = a.title;
    image.src = a.url;
    // styling of apend element
    mainDiv.style.width ="300px";
    title.style.fontSize="18px";
    title.style.marginTop="10px";

    document.getElementById('mainSection').appendChild(mainDiv);
  });
})



