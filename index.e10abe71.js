const e=document.querySelector("#search-form");e.addEventListener("submit",(async function(e){e.preventDefault();const{elements:{searchQuery:t}}=e.currentTarget,a={q:t.value,image_type:"photo",orientation:"horizontal",safesearch:!0},o=await fetch(`https://pixabay.com/api/36097908-8b74f3252a1456be0d804a847,${a}`);console.log(o)}));
//# sourceMappingURL=index.e10abe71.js.map
