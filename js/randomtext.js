(function replaceTitle() {
  var verbs = ['kill', 'love', 'smile at', 'annihilate', 'drink cold beers with on a saturday night', 'fight in the ring', 'DESTROY. BUILD. DESTROY!', 'high-five', 'find the truth about', 'express how funny the loss meme is, you know, | || || |_, to'];
  document.getElementById('listTitle').innerHTML = "List of people I want to " + verbs[Math.floor(Math.random() * verbs.length)];
})();
