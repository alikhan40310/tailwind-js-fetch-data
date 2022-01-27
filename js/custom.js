
// fatching data
fetch('https://jsonplaceholder.typicode.com/photos').then(function(data){
  return data.json()
}).then(function(data){
  // using for each loop
  const sliceArray = data.slice(0,5);
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

    document.getElementById('mainSection').appendChild(mainDiv);
  });
})



