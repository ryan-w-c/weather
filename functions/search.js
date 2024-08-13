const algoliasearch = require('algoliasearch');
const instantsearch = require('instantsearch.js');

export default async (req, context) => {
  const searchClient = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY);
  const search = searchClient.initIndex('worldcities');

  const url = new URL(req.url);
  const query = url.searchParams.get('query') || '';
  const { hits } = await search.search(query, {
    attributesToRetrieve: ['city', 'iso2', 'lat', 'lng']
  });

  return new Response(JSON.stringify(hits), { 
    headers: { 'Content-Type': 'application/json' },
  });
};
