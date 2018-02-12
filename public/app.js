'use strict';
var learnjs = {};

learnjs.problemView = function (problemNumber){
  var title = 'Problem #' + problemNumber + ' Coming soon!'
  return $('<div class = "problem-view">').text(title);
};

learnjs.showView = function (hash){
  var hashParts = hash.split('-')

  var routes={
    '#problem': learnjs.problemView
  };
  var viewFn = routes[hashParts[0]];
  if(viewFn){
    $('.view-container').empty().append(viewFn(hashParts[1]));
  }

};

learnjs.addOnReady = function(){
  window.onhashchange = function(){
    learnjs.showView(window.location.hash);
  };
  learnjs.showView(window.location.hash);
}
