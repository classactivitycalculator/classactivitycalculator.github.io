var form = document.querySelector('form');

function averageInputValues(fieldset) {
  var totalValue = 0;
  var totalNumber = 0;
  var inputs = fieldset.querySelectorAll('input');
  for (var input of inputs) {
    if (!input.validity.valid) {
      return;
    }
    totalValue += Number(input.value);
    totalNumber += Boolean(input.value);
  }
  return totalValue / totalNumber;
}

form.querySelector('[type="button"]').addEventListener('click', setOutputValues);

function detectChange() {
  var inputs = form.querySelectorAll('input');
  for (var input of inputs) {
    if (input.value) {
      return true;
    }
  }
}

form.querySelector('[type="reset"]').addEventListener('click', function(event) {
  if (detectChange() && !confirm('Your changes will be lost.\nAre you sure you want to reset?')) {
    event.preventDefault();
  }
});

window.addEventListener('beforeunload', function(event) {
  if (detectChange()) {
    event.returnValue = 'Your changes may be lost.';
  }
});
