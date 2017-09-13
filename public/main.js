const updateAccordian = (e) => {
  const $tab = $(e.target).closest('.accordian__tab');

  $('.accordian__tab').removeAttr('id');
  $tab.attr('id', 'tabs--active');
};

const handleDropdown = (e) => {
  $('.nav-bar__dropdown').toggleClass('hide')
};

const handleViewSize = (e) => {
  $('.hide').removeClass('hide');
}


$('.accordian__tab').on('click', updateAccordian);
$('.nav-bar__menu-btn').on('click', handleDropdown);
$(window).on('resize', handleViewSize);
