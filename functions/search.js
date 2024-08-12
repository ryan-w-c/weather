const algoliasearch = require('algoliasearch');
const instantsearch = require('instantsearch.js');

export default async (req, context) => {
  const searchClient = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_API_KEY);
  const search = instantsearch('worldcities', searchClient);

  const { query } = JSON.parse(req.body);
  const { hits } = await search.search(query, {
    attributesToRetrieve: ['city', 'iso2', '_geoloc.lat', '_geoloc.lng']
  });

  const data = await hits.json();
  return new Response(JSON.stringify(data), { 
    headers: { 'Content-Type': 'application/json' },
  });
};
