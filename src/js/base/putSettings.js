export default function putSettings(page, fetch, query) {
    const settings = {page,fetch,query}; // shorthand
    localStorage.setItem('page', JSON.stringify(settings));
}