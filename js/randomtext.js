(function replaceTitle() {
  var verbs = ['kill', 'love', 'smile at', 'annihilate', 'drink cold beers with on a saturday night'];
  document.getElementById('listTitle').innerHTML = "List of people I want to " + verbs[Math.floor(Math.random() * verbs.length)];
})();
