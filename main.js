const firstRow = prompt("Введите первое слово");
const secondRow = prompt("Введите второе слово");

function getRow(firstRow, secondRow) {
  let first = [];
  let second = [];
  let compare = [];
  for (let i = 0; i < firstRow.length; i++) {
    const firstLetter = firstRow[i];
    if (firstLetter.charAt(0) == "а" || firstLetter.charAt(0) == "А") {
      first += firstLetter;
    }
  }

  for (let i = 0; i < secondRow.length; i++) {
    const secondLetter = secondRow[i];
    if (secondLetter.charAt(0) == "а" || secondLetter.charAt(0) == "А") {
      second += secondLetter;
    }
  }

  if (first.length > second.length) {
    compare = firstRow;
  } else {
    compare = secondRow;
  }
  return compare;
}

alert("В строке " + getRow(firstRow, secondRow) + " больше букв а(А)");
