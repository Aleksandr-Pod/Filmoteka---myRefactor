import { refs } from '../base/refs';
import pageLoadingSearch from '../base/pageLoadingSearch';

export default function onSearchMovie(e) {
  e.preventDefault();
  refs.invalidList.innerHTML = '';
  refs.searchErrors.classList.add('is-hidden');
  refs.invalid.classList.add('hidden');

  const query = e.target[0].value.trim();
  if (!query) {
    // refs.searchErrors.classList.remove('is-hidden');
    // refs.hero.innerHTML = '';
    // refs.pagination.classList.add('hidden');
    return;
  }
  refs.hero.innerHTML = '';
  refs.pagination.classList.add('hidden');

  pageLoadingSearch(query);
}