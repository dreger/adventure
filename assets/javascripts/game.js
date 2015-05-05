$( document ).ready(function() {
  $('.game-button').attr("disabled", false);
});

$('.game-button').click(function() {
  $('.game-intro').fadeOut();
  $(this).attr("disabled", true).val("Waiting on transmission...");
})
