const updateAccordian = (e) => {
  const $tab = $(e.target).closest('.accordian__tab');

  $('.accordian__tab').removeAttr('id');
  $tab.attr('id', 'tabs--active');
};


// on page load
$('.accordian__tab').on('click', updateAccordian);
