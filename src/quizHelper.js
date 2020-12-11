let idxFirstWrongYearOpt;
export function checkYearDuplicates({ correctAnswer, array }) {
  idxFirstWrongYearOpt = 240;
  let firstWrongOpt = array[idxFirstWrongYearOpt].year;

  while (firstWrongOpt === correctAnswer) {
    idxFirstWrongYearOpt = idxFirstWrongYearOpt - 1;
    firstWrongOpt = array[idxFirstWrongYearOpt].year;
  }
  return firstWrongOpt;
}

export function checkAllYearDuplicates({ correctAnswer, array }) {
  let firstWrongOpt = array[idxFirstWrongYearOpt].year;
  let scndWrongOpt = array[idxFirstWrongYearOpt].year;

  while (scndWrongOpt === correctAnswer || scndWrongOpt === firstWrongOpt) {
    idxFirstWrongYearOpt = idxFirstWrongYearOpt - 1;
    scndWrongOpt = array[idxFirstWrongYearOpt].year;
  }
  return scndWrongOpt;
}

let idxFirstWrongDirOpt;
export function checkDirDuplicates({ correctAnswer, array }) {
  idxFirstWrongDirOpt = 230;
  let firstWrongOpt = array[idxFirstWrongDirOpt].crew.split(",")[0];

  while (firstWrongOpt === correctAnswer) {
    idxFirstWrongDirOpt = idxFirstWrongDirOpt - 1;
    firstWrongOpt = array[idxFirstWrongDirOpt].crew.split(",")[0];
  }
  return firstWrongOpt;
}

export function checkAllDirDuplicates({ correctAnswer, array }) {
  let firstWrongOpt = array[idxFirstWrongDirOpt].crew.split(",")[0];
  let scndWrongOpt = array[idxFirstWrongDirOpt].crew.split(",")[0];

  while (scndWrongOpt === correctAnswer || scndWrongOpt === firstWrongOpt) {
    idxFirstWrongDirOpt = idxFirstWrongDirOpt - 1;
    scndWrongOpt = array[idxFirstWrongDirOpt].crew.split(",")[0];
  }
  return scndWrongOpt;
}

let idxFirstWrongActOpt;
export function checkActDuplicates({ correctAnswer, array }) {
  idxFirstWrongActOpt = 220;
  let firstWrongOpt = array[idxFirstWrongActOpt].crew.split(",")[1];

  while (firstWrongOpt === correctAnswer) {
    idxFirstWrongActOpt = idxFirstWrongActOpt - 1;
    firstWrongOpt = array[idxFirstWrongActOpt].crew.split(",")[1];
  }
  return firstWrongOpt;
}

export function checkAllActDuplicates({ correctAnswer, array }) {
  let firstWrongOpt = array[idxFirstWrongActOpt].crew.split(",")[1];
  let scndWrongOpt = array[idxFirstWrongActOpt].crew.split(",")[1];

  while (scndWrongOpt === correctAnswer || scndWrongOpt === firstWrongOpt) {
    idxFirstWrongActOpt = idxFirstWrongActOpt - 1;
    scndWrongOpt = array[idxFirstWrongActOpt].crew.split(",")[1];
  }
  return scndWrongOpt;
}
export function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // Generate random number
    let j = Math.floor(Math.random() * (i + 1));

    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
