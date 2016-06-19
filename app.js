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
  hideAndSeek('main');
}

function about() {
  hideAndSeek('about');
}

function contact(ctx) {
  hideAndSeek('contact');
  console.log(ctx.params.contactName);
  $('h3').html('Contact: ' + (ctx.params.contactName || 'None'));
  console.log('Contact function called.');
}

function notfound() {
  // $('p').text('selection not found');
  console.log('NotFound function called.');
}

function hideAndSeek(tag) {
  $('article').hide();
  $('#' + tag).show();
}

$(function(){
  hideAndSeek('main');
});
