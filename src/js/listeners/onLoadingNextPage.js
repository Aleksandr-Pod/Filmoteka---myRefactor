import { refs, settings } from '../base/refs';
import pageLoading from '../base/pageLoading';
import pageLoadingSearch from '../base/pageLoadingSearch';
import onWatched from '../listeners/onWatched';
import onQueue from '../listeners/onQueue';

export default function onLoadingNextPage(e) {
  let nextPage = e.target.dataset.page;
  let currentPage = settings.page;

  if (!nextPage) return;

  refs.hero.innerHTML = '';

  switch (nextPage) {
    case 'Previos':
      nextPage = parseInt(currentPage) - 1;
      break;

    case 'Next':
      nextPage = parseInt(currentPage) + 1;
      break;

    case 'left':
      nextPage = parseInt(currentPage) - 3;
      break;

    case 'right':
      nextPage = parseInt(currentPage) + 3;
      break;

    case 'left-end':
      nextPage = parseInt(currentPage) - 7; // исделано по инвалидному
      break;

    case 'right-end':
      nextPage = parseInt(currentPage) + 6; // исделано по инвалидному
      break;

    default:
  }

  switch (settings.fetch) {
    case 'Week':
      pageLoading(parseInt(nextPage));
      break;

    case 'Search':
      pageLoadingSearch(settings.query, parseInt(nextPage));
      break;

    case 'Watched':
      onWatched(null, parseInt(nextPage));
      break;

    case 'Queue':
      onQueue(null, parseInt(nextPage));
      break;

    default:
  }
}
