function whosBuying(people) {
  var numOfpeople = people.length;
  var randomPos = Math.floor(Math.random() * numOfpeople);
  var RandomPerson = people[randomPos];

  return RandomPerson + " is buying lunch";
}

console.log(whosBuying(["Angel", "Bob", "Chloe", "Michael", "Fardan"]));
