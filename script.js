var i;

function detectChanges() {
  var inputs = document.querySelectorAll('input');
  for (i = 0; i < inputs.length; i++) {
    if (inputs[i].value) {
      return true;
    }
  }
}

function calculateAverage(grades) {
  var total = 0;
  var count = 0;
  for (i = 0; i < grades.length; i++) {
    if (grades[i].value) {
      total += Number(grades[i].value);
      count++;
    }
  }
  return total / count;
}

function displayAverage(grades) {
  var avg = calculateAverage(grades);
  if (isNaN(avg)) {
    return 'Please enter a grade.';
  } else {
    return 'Average: ' + avg.toFixed(1);
  }
}

document.getElementById('calculator').addEventListener('click', function() {
  var listeningGrades = document.querySelectorAll('#listening > input');
  var listeningAverage = document.getElementById('listeningAverage');
  listeningAverage.value = displayAverage(listeningGrades);

  var readingGrades = document.querySelectorAll('#reading > input');
  var readingAverage = document.getElementById('readingAverage');
  readingAverage.value = displayAverage(readingGrades);

  var writingGrades = document.querySelectorAll('#writing > input');
  var writingAverage = document.getElementById('writingAverage');
  writingAverage.value = displayAverage(writingGrades);

calculateFinalGrade();

});

document.getElementById('resetter').addEventListener('click', function() {
  if (detectChanges() && confirm('Your changes will be lost.\nAre you sure you want to reset?')) {
    document.getElementById('form').reset();
  }
});

window.addEventListener('beforeunload', function(event) {
  if (detectChanges()) {
    event.returnValue = 'Your changes may be lost.';
  }
});
