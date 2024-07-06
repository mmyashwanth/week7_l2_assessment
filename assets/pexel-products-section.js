const splideContainerEl1 = document.getElementById('splide-container-1')
const splideContainerEl2 = document.getElementById('splide-container-2')

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};
let apiStatus = apiStatusConstants.initial;
let searchInput = 'laptop'
let pexelsData 
let favList = []

splideContainerEl1.innerHTML = `<div class="splide1 splide" role="group" aria-label="Splide Basic HTML Example">
  <div class="splide__track">
		<ul id = 'splide-list1' class="splide__list">
		</ul>
  </div>
</div>`


async function fetchData(query) {
  console.log("fetch")  
  apiStatus = apiStatusConstants.inProgress
  const url = `https://api.pexels.com/v1/search?query=${encodeURIComponent(
    query
  )}&per_page=10&page=1`;

  try {
    const response = await fetch(url, {
      headers: {
        Authorization: "w29E7EZbYNGGvxFtr1o7qtg2caKj5hF4LOdu4ncWKAApd0e0FIm1DWrF",
      },
    });

    if (!response.ok) {
      throw new Error("Error");
    }

    const data = await response.json();
    pexelsData = data.photos
    console.log(pexelsData)
    apiStatus = apiStatusConstants.success
  } catch (error) {
    apiStatus = apiStatusConstants.failure
    console.error("Error fetching images:", error);
  }
}

const renderProducts = () =>{
const firstProductEl = document.getElementById('first-product')
  // First Product
    firstProductEl.innerHTML = ''
    const firstProduct = pexelsData[0]
    
    const imgContainerEl = document.createElement("div");
    imgContainerEl.classList.add('splide-image-container')
    firstProductEl.appendChild(imgContainerEl);

    const imgEl = document.createElement("img");
    imgEl.src = firstProduct.src.large;
    imgEl.classList.add('splide-image')
    imgContainerEl.appendChild(imgEl);
  
    const firstProductDetailsContainerEl = document.createElement("section")
    firstProductEl.appendChild(firstProductDetailsContainerEl)
  
   const titleEl = document.createElement("h3");
    titleEl.textContent = firstProduct.alt;
    firstProductDetailsContainerEl.appendChild(titleEl);
    
    const nameEl = document.createElement("p");
    nameEl.textContent = firstProduct.photographer;
    firstProductDetailsContainerEl.appendChild(nameEl);

  splideContainerEl1.innerHTML = ''
splideContainerEl1.innerHTML = `<div class="splide1 splide" role="group" aria-label="Splide Basic HTML Example">
  <div class="splide__track">
		<ul id = 'splide-list1' class="splide__list">
		</ul>
  </div>
</div>`
  
  pexelsData.forEach((element) => {
    if (pexelsData[0].id === element.id) {
    return; 
  }
    const splideListEl = splideContainerEl1.querySelector(".splide__list");
    const splideSlideEl = document.createElement("li");
    splideSlideEl.classList.add("splide__slide", "splide__li", "splide-slide");
    splideListEl.appendChild(splideSlideEl);

    const favIconContainer = document.createElement("button")
    favIconContainer.innerHTML = `<i class="fa-solid fa-heart"></i>`
    favIconContainer.classList.add("fav-icon-container")
    splideSlideEl.appendChild(favIconContainer)

    favIconContainer.addEventListener("click", ()=>{
      favIconContainer.classList.add("active")
      if (favList.includes(element)){
        null
      }else{
        favList.push(element)
        console.log(favList)
        splideContainerEl2.innerHTML = `<div class="splide2 splide" role="group" aria-label="Splide Basic HTML Example">
  <div class="splide__track">
		<ul id = 'splide-list2'  class="splide__list"></ul>
  </div>
</div>`

        favList.forEach((element)=>{
          const splideListEl = splideContainerEl2.querySelector(".splide__list");
    const splideSlideEl = document.createElement("li");
    splideSlideEl.classList.add("splide__slide", "splide__li", "splide-slide");
    splideListEl.appendChild(splideSlideEl);
          
 const favIconContainer = document.createElement("button")
    favIconContainer.innerHTML = `<i class="fa-solid fa-heart"></i>`
    favIconContainer.classList.add("fav-icon-container", "active")
    splideSlideEl.appendChild(favIconContainer)

 const imgContainerEl = document.createElement("div");
    imgContainerEl.classList.add('splide-image-container')
    splideSlideEl.appendChild(imgContainerEl);
    
    const imgEl = document.createElement("img");
    imgEl.src = element.src.large;
    imgEl.classList.add('splide-image')
    imgContainerEl.appendChild(imgEl);
    
   const titleEl = document.createElement("h3");
    titleEl.textContent = element.alt;
    splideSlideEl.appendChild(titleEl);
    
    const nameEl = document.createElement("p");
    nameEl.textContent = element.photographer;
    splideSlideEl.appendChild(nameEl);
        })
     var splide2 = new Splide( '.splide2' , {
      perPage: 4
    });
    splide2.mount();
      }
    })

    
   const imgContainerEl = document.createElement("div");
    imgContainerEl.classList.add('splide-image-container')
    splideSlideEl.appendChild(imgContainerEl);
    
    const imgEl = document.createElement("img");
    imgEl.src = element.src.large;
    imgEl.classList.add('splide-image')
    imgContainerEl.appendChild(imgEl);
    
   const titleEl = document.createElement("h3");
    titleEl.textContent = element.alt;
    splideSlideEl.appendChild(titleEl);
    
    const nameEl = document.createElement("p");
    nameEl.textContent = element.photographer;
    splideSlideEl.appendChild(nameEl);
  });

    var splide = new Splide( '.splide1', {
      perPage: 4
    });
    splide.mount();

// FAV LIST 
  if (favList.length === 0){
    splideContainerEl2.innerHTML = 'No Items to display'
  }else{
    
  splideContainerEl2.innerHTML = `<div class="splide2 splide" role="group" aria-label="Splide Basic HTML Example">
  <div class="splide__track">
		<ul id = 'splide-list2'  class="splide__list">
						
		</ul>
  </div>
</div>`
 favList.forEach((element)=>{
          const splideListEl = splideContainerEl2.querySelector(".splide__list");
    const splideSlideEl = document.createElement("li");
    splideSlideEl.classList.add("splide__slide", "splide__li", "splide-slide");
    splideListEl.appendChild(splideSlideEl);
   
 const favIconContainer = document.createElement("button")
    favIconContainer.innerHTML = `<i class="fa-solid fa-heart"></i>`
    favIconContainer.classList.add("fav-icon-container", "active")
    splideSlideEl.appendChild(favIconContainer)
   
 const imgContainerEl = document.createElement("div");
    imgContainerEl.classList.add('splide-image-container')
    splideSlideEl.appendChild(imgContainerEl);
    
    const imgEl = document.createElement("img");
    imgEl.src = element.src.large;
    imgEl.classList.add('splide-image')
    imgContainerEl.appendChild(imgEl);
    
   const titleEl = document.createElement("h3");
    titleEl.textContent = element.alt;
    splideSlideEl.appendChild(titleEl);
    
    const nameEl = document.createElement("p");
    nameEl.textContent = element.photographer;
    splideSlideEl.appendChild(nameEl);
        })
     var splide2 = new Splide( '.splide2' , {
       perPage: 4, 
     });
    splide2.mount();
  }
}

const renderSuccessView = () =>{
  // Input 
  const inputEl = document.getElementById('search-input')
  inputEl.oninput = (e) =>{
    searchInput = e.target.value
  }
  
  const searchBtn = document.getElementById('search-button')  
    searchBtn.addEventListener("click", () => {
    fetchData(searchInput).then(() => {
  switch (apiStatus) {
    case apiStatusConstants.inProgress:
      return renderLoadingView();
    case apiStatusConstants.success:
      return renderSuccessView();
    case apiStatusConstants.failure:
      return renderFailureView();
    default:
      console.log("Unknown status");
  }
})
});
  renderProducts()
}

 
fetchData(searchInput).then(() => {
  switch (apiStatus) {
    case apiStatusConstants.inProgress:
      return renderLoadingView();
    case apiStatusConstants.success:
      return renderSuccessView();
    case apiStatusConstants.failure:
      return renderFailureView();
    default:
      console.log("Unknown status");
  }
});

