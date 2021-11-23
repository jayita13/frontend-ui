$(document).ready(function () {
  // card-flipping
  $(".flip-card").on("click", function () {
    $(this).parent().parent().parent().toggleClass('flipped');
  });

  // date-picker
  $('#datepicker').datepicker({
    weekStart: 1,
    daysOfWeekHighlighted: "6,0",
    autoclose: true,
    todayHighlight: true,
  });
  $('#datepicker').datepicker("setDate", new Date());

  // filter content acc to dropdown list
  $('.select-list').on('change', function () {
    var text = $(this).find('option').filter(':selected').text();
    $('.our-team').each(function () {
      if ($(this).text().indexOf(text) != -1) {
        $(this).show();
      } else {
        $(this).hide();
      }
    })
  });   

});
