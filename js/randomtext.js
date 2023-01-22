(function replaceTitle() {
  var verbs = ['love', 'smile at', 'annihilate', 'drink cold beers with on a saturday night', 'exterminate', 'squash like a bug', 'blackmail', 'smash over the head with a comically large frying pan', 'fight in the ring', 'DESTROY. BUILD. DESTROY!', 'high-five', 'find the truth about', 'express how funny the loss meme is, you know, | || || |_, to',];
  document.getElementById('listTitle').innerHTML = "List of people I want to " + verbs[Math.floor(Math.random() * verbs.length)];
})();

function scrollToLetter(letter) {
  const targetElement = document.querySelector(`#list #${letter}`);
  targetElement.scrollIntoView({ behavior: 'smooth' });
}