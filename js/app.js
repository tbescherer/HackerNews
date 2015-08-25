var _ = require('underscore');
var $ = require('jquery');
var ArticleList = require('./ArticleList');
var React = require('react');
var url = require('url')
if (url.parse(window.location.href).query) {
  var pagePos = parseInt(url.parse(window.location.href).query.split("=")[1]);
}
var page = pagePos || 1;

// Get the top item ids
$.ajax({
  url: 'https://hacker-news.firebaseio.com/v0/topstories.json',
  dataType: 'json'
}).then(function (stories) {
  // Get the item details in 
  var startIdx = (page - 1) * 30;
  var endIdx = page * 30;
  var detailDeferreds = _(stories.slice(startIdx, endIdx)).map(function (itemId) {
    return $.ajax({
      url: 'https://hacker-news.firebaseio.com/v0/item/' + itemId + '.json',
      dataType: 'json'
    });
  });
  return $.when.apply($, detailDeferreds);
}).then(function () {
  // Extract the response JSON
  var items = _(arguments).map(function (argument) {
    return argument[0];
  });

  React.render(<ArticleList items={items} page={page}/>, $('#content')[0]);
});