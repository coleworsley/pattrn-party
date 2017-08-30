// document.querySelector('main').innerHTML = '<div><p>Hooked Up</p></div>'
const ipsums = [
  {
    title: 'Zombies!!!',
    content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby.',
  },
  {
    title: 'Chuck Norris',
    content: 'Crop circles are Chuck Norris\' way of telling the world that sometimes corn needs to lie down Chuck Norris once roundhouse kicked someone so hard that his foot broke the speed of light, went back in time, and killed Amelia Earhart while she was flying over the Pacific Ocean Chuck Norris is so fast, he can run around the world and punch himself in the back of the head. The chief export of Chuck Norris is Pain. Chuck Norris does not get frostbite.',
  },
  {
    title: 'CHEESE',
    content: 'Blue castello lancashire paneer. Cheese and wine cheese on toast bavarian bergkase everyone loves jarlsberg camembert de normandie when the cheese comes out everybody\'s happy hard cheese. Boursin dolcelatte halloumi cheese slices fromage cheese and wine cheeseburger manchego. Say cheese stilton goat taleggio taleggio gouda cheese on toast swiss. Cheesecake.',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  }
];

const updateAccordian = (e) => {
  $('.tabs__tab').removeAttr('id');

  $(e.target).attr('id', 'tabs--active');

  accordianText();
};

const accordianText = () => {
  const index =  $('#tabs--active').val();
  const info = ipsums[index];

  $('.accordian__content-box').html(
    `
      <h3 class="accordian__title">${info.title}</h3>
      <p class="accordian__content">${info.content}</p>
    `
  );
}

// on page load
accordianText();

$('.tabs__tab').on('click', updateAccordian);
