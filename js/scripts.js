$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();

    const year = parseInt($('input#year').val());

    let isLeapYear;

    if (year % 4 != 0 || year % 100 === 0 && year % 400 != 0) {
      isLeapYear = false;
    } else {
      isLeapYear = true;
    }
    $("#output").text(isLeapYear);

    $('div#input-row').hide();
    $('#output-div').show();
  });
  $("#back").click(function() {
    $("#input-row").show();
    $('#output-div').hide();
  })
});