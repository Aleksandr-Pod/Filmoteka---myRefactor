import { refs, cards, settings } from './refs';
import fetchApiSearch from '../fetch/fetchApiSearch';
import pageLoadingInvalid from './pageLoadingInvalid';
import renderCardsHero from './renderCardsHero';
import renderPagination from './renderPagination';
import { spinner } from './spinner';
// import putSettings from './putSettings';

/* Функция pageLoadingSearch принимает значение запроса и номер страницы, и если запрос удачный то рендерит карточки и пагинацию по запрошенному слову,
   в случае не корректного запроса рендерит ошибку */
export default function pageLoadingSearch(query, page = 1) {
  spinner('start');

  fetchApiSearch(query, page)
    .then(data => {
      if (!data.total_results) { // если нет результата поиска..
        spinner('stop');
        refs.searchErrors.classList.remove('is-hidden');
        refs.pagination.classList.add('hidden');
        refs.invalid.classList.remove('hidden');
        pageLoadingInvalid();
        setTimeout(() => {
          refs.searchErrors.classList.add('is-hidden');
        }, 5000);
        throw new Error(response.status);
      }
      spinner('stop');
      cards.arr = data.results
      renderCardsHero(cards.arr);
      return data;
    })
    .then(data => {
      renderPagination(data.total_pages, data.page);
      settings.page = data.page;
      settings.fetch = 'Search';
      settings.query = query;
      return data;
    })
    .catch(data => {
      return data;
    });
}
