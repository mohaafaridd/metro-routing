$('#switch').click(function () {

  event.preventDefault();

  const source = $('#source').prop('selectedIndex');
  const destination = $('#destination').prop('selectedIndex');

  $('#source').prop('selectedIndex', destination);
  $('#destination').prop('selectedIndex', source);

});

$(document).ready(function () {

  const source = $('#sourceName').val();
  const destination = $('#destinationName').val();

  if (!source || !destination) {
    return;
  }

  $("#source").val(source);
  $("#destination").val(destination);
});