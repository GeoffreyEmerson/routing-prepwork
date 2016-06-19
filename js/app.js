console.log(window.location.href);
console.log(window.location.hostname);
console.log(window.location.pathname);

// the "notfound" implements a catch-all
// with page('*', notfound). Here we have
// no catch-all, so page.js will redirect
// to the location of paths which do not
// match any of the following routes
//
page.base('/');

page('', index);
page('articles', articles);
page('about', about);
page('contact', contact);
page('contact/:contactName', contact);
page('*', notFound);
page();

function index(ctx) {
  console.log(ctx);
  showSection('home');
}

function articles() {
  showSection('articles');
}

function about() {
  showSection('about');
}

function contact(ctx) {
  showSection('contact');
  $('h3').html('Contact: ' + (ctx.params.contactName || 'None'));
}

function notFound() {
  showSection('notFound');
}

function showSection(tag) {
  $('section').hide();
  $('#' + tag).show();
}
