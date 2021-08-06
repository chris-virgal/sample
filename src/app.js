/* global algoliasearch instantsearch */


const searchClient = algoliasearch('VTWN9LBTBB', '374b76e5ea3101f81afb7aa69ff9515e');

const search = instantsearch({
  indexName: 'test Chris',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
<article>
  <h1>{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}</h1>
  <p>{{#helpers.highlight}}{ "attribute": "description" }{{/helpers.highlight}}</p>
  <p><img src="{{#helpers.highlight}}{ "attribute": "image" }{{/helpers.highlight}}"></p>
</article>
`,
    },
  })
]);

search.start();
