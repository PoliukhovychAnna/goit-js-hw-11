import axios from "axios";
import Notiflix from 'notiflix';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from "./js/refs";


let page = 1;
let inputValue = '';
const limit = 40;

refs.loadMore.setAttribute('hidden', 'true');
refs.form.addEventListener("submit", onSubmit)
refs.loadMore.addEventListener(
  'click', loadMorePictures)

function onSubmit(e) {
  e.preventDefault();
  inputValue = e.currentTarget.elements.searchQuery.value.trim().toLowerCase()
  if (!inputValue) {
    Notiflix.Notify.warning('Search query can not be empty!');
    refs.galleryList.innerHTML = ''
    refs.loadMore.setAttribute('hidden', 'true');
    page = 1
    return
  }
  getPictures(inputValue)
    .then(resp => (refs.galleryList.innerHTML = createMarkup(resp.data.hits)))
    
}

async function getPictures(value, page) {
    const response = await axios.get(refs.pix_URL, {
      params: {
        key: refs.pix_API_KEY,
            q: value,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: page,
            per_page: 40
      },
    })
  if (response.data.total > 0) {
    Notiflix.Notify.success(
      `Hooray! We found ${response.data.totalHits} images.`
    );
  }
    
  refs.loadMore.removeAttribute('hidden');
  page += 1

  if (response.data.total === 0) {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.');
    refs.galleryList.innerHTML = '';
    page = 1
    refs.loadMore.setAttribute('hidden', 'true');
  }

  if (response.data.total <= limit) {
    refs.loadMore.setAttribute('hidden', 'true');
  }
  return response
    }

    function createMarkup(arr) {
      return arr
        .map(
          ({
            downloads,
            comments,
            views,
            likes,
            tags,
            largeImageURL,
            webformatURL,
          }) => `<div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" width = "370" height = "250" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
      <b>${likes}</b>
    </p>
    <p class="info-item">
      <b>Views</b>
      <b>${views}</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
      <b>${comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
      <b>${downloads}</b>
    </p>
  </div>
</div>`).join('');
      
      
}
    

async function loadMorePictures() {
  const response = await axios.get(refs.pix_URL, {
    params: {
      key: refs.pix_API_KEY,
      q: inputValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: limit,
    },
  })
  refs.galleryList.insertAdjacentHTML("beforeend", createMarkup(response.data.hits));
  
  
  page += 1

  if (response.data.totalHits <= limit * page) {
    refs.loadMore.setAttribute('hidden', 'true');
    Notiflix.Notify.info(
      "We're sorry, but you've reached the end of search results."
    );
    
  }

  if (response.data.total <= limit) {
    refs.loadMore.setAttribute('hidden', 'true');
  }
}




// let options = {
//   root: null,
//   rootMargin: '300px',
//   threshold: 0.5,
// };

// let observer = new IntersectionObserver(onLoad, options);
// function onLoad(entries, observer) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       page += 1;
//       getPictures(page)
//         .then(data => {
//           refs.galleryList.innerHTML = createMarkup(response.data.hits);
//           if (data.page === data.total_pages) {
//             observer.unobserve(refs.galleryList.lastElementChild);
//           }
//         })
//         .catch(err => console.log(err));
//     }
//   });
// }