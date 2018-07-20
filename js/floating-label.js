// Floating label behavior

$('.with-floating-label').keyup(function() {
  $(this).toggleClass('not-empty', ($(this).val().length !== 0));
});
