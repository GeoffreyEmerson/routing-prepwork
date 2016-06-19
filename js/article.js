var articles = [];

function Article(dataObject) {
  this.title = dataObject.title;
  this.body = dataObject.body;
}

Article.loadArticles = function() {
  $.getJSON('articles.json')
    .done(Article.initPage)
    .fail(function( jqxhr, textStatus, error ) {
      var err = textStatus + ', ' + error;
      console.error( 'Request Failed: ' + err );
    });
};

Article.initPage = function(dataObjects) {
  Article.makeObjectArray(dataObjects);
  Article.processMarkdown();
  Article.compileHandlebars();
  Article.renderArticles();
};

Article.makeObjectArray = function(dataObjects) {
  articles = dataObjects.map(function(dataObject) {
    return new Article(dataObject);
  });
};

Article.processMarkdown = function() {
  articles.forEach(function(article){
    article.body = marked(article.body);
  });
};

Article.compileHandlebars = function() {
  var templateHtml = $('#handlebarsTemplate').html();
  Article.toHtml = Handlebars.compile(templateHtml);
};

Article.renderArticles = function() {
  articles.forEach(function(article) {
    var newHtml = Article.toHtml(article);
    $('#articles').append(newHtml);
  });
  $('.templateBody').find('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
};
