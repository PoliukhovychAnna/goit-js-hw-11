const form = document.querySelector('#search-form');

const pix_API_KEY = '36097908-8b74f3252a1456be0d804a847';
const pix_URL = 'https://pixabay.com/api/';

form.addEventListener("submit", onSubmit)

async function onSubmit(e) {
  e.preventDefault();
  const {
    elements: { searchQuery },
  } = e.currentTarget;

  const options = {
    q: searchQuery.value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  const request = await fetch(`${pix_URL}${pix_API_KEY},${options}`);
  console.log(request);
}
