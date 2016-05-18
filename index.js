var Metalsmith   = require('metalsmith');
var collections  = require('metalsmith-collections');
var markdown     = require('metalsmith-markdown');
var templates    = require('metalsmith-templates');
var permalinks   = require('metalsmith-permalinks');
var tags         = require('metalsmith-tags');
var gist         = require('metalsmith-gist');
var drafts       = require('metalsmith-drafts');
var pagination   = require('metalsmith-pagination');

var fs           = require('fs');
var Handlebars   = require('handlebars');
var moment       = require('moment');
var baseUrl      = process.env.BASE_URL || 'http://localhost:8001';

Handlebars.registerPartial({
  'header': fs.readFileSync('./templates/partials/header.hbt').toString(),
  'footer': fs.readFileSync('./templates/partials/footer.hbt').toString()
});
Handlebars.registerHelper('baseUrl', function() {
  return baseUrl;
});
Handlebars.registerHelper('dateFormat', function( context ) {
  return moment(context).format("LL");
});
Handlebars.registerHelper('dateGMT', function( context ) {
  context = context === 'new' ? new Date() : context;
  return context.toGMTString();
});

Handlebars.registerHelper('currentPage', function( current, page ) {
  return current === page ? 'current' : '';
});

Metalsmith(__dirname)
  .use(drafts())
  .use(collections({
      posts: {
          pattern: 'posts/*.md',
          sortBy: 'date',
          reverse: true
      }
  }))
  .use(markdown())
  .use(permalinks({
      pattern: ':title',
      relative: false
  }))

  .use(pagination({
    'collections.posts': {
      perPage: 3,
      template: 'index.hbt',
      first: 'index.html',
      path: ':num/index.html'
    }
  }))
  .use(gist())
  .use(templates('handlebars'))
  .destination('./build')
  .build(function(err, files) {
    if (err) { throw err; }
  });
