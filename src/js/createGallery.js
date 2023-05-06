// import { refs } from "./refs";
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// const gallery = new SimpleLightbox('.gallery a')

// export function createGallery(arr) {
//   const markup = arr
//     .map(
//       ({
//         downloads,
//         comments,
//         views,
//         likes,
//         tags,
//         largeImageURL,
//         webformatURL,
//       }) => `<div class="gallery"> <div class="photo-card">
//       <a class="gallery__link" href="${largeImageURL}">
//   <img src="${webformatURL}" alt="${tags}" width = "370" height = "250" loading="lazy" />
//   <div class="info">
//     <p class="info-item">
//       <b>Likes</b>
//       <b>${likes}</b>
//     </p>
//     <p class="info-item">
//       <b>Views</b>
//       <b>${views}</b>
//     </p>
//     <p class="info-item">
//       <b>Comments</b>
//       <b>${comments}</b>
//     </p>
//     <p class="info-item">
//       <b>Downloads</b>
//       <b>${downloads}</b>
//     </p>
//   </div>
// </div></div>`
//     )
//     .join('');
//   return markup
  
// }


// let gallery = new SimpleLightbox('.gallery a', {
//   captionSelector: 'img',
//   captionsData: 'alt',
//   captions: true,
//   captionDelay: 250,
//   preloading: false,
// });
// gallery.on('show.simplelightbox', function () {
//   // do something…
// });
