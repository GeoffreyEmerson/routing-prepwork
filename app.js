// the "notfound" implements a catch-all
// with page('*', notfound). Here we have
// no catch-all, so page.js will redirect
// to the location of paths which do not
// match any of the following routes
//
page.base('/');

page('', index);
page('about', about);
page('contact', contact);
page('contact/:contactName', contact);
page('*', notfound);
page();

function index() {
  $('p').text('viewing index');
  console.log('Index function called.');
}

function about() {
  $('p').text('viewing about');
  console.log('About function called.');
}

function contact(ctx) {
  $('p').text('viewing contact ' + (ctx.params.contactName || ''));
  console.log('Contact function called.');
}

function notfound() {
  $('p').text('selection not found');
  console.log('NotFound function called.');
}
