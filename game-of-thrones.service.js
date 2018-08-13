'use strict';
Object.defineProperty(exports, '__esModule', { value: true });

// Constructor
class Character {
  constructor(firstName, lastName, title, status, death, age, origin, gender, family, pictureURL) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
    this.status = status;
    this.death = death;
    this.age = age;
    this.origin = origin;
    this.gender = gender;
    this.family = family;
    this.pictureURL = pictureURL;
  }
}
exports.Character = Character;

// Character List
var characters = [
  new Character(
    'Jon',
    'Snow',
    ['Warden of the North'],
    'Alive',
    '',
    '22',
    'Winterfell',
    'Male',
    'Stark',
    'https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/Profile-JonSnow-707.png/revision/latest?cb=20170828030553'
  ),
  new Character(
    'Sansa',
    'Stark',
    ['Lady of Winterfell'],
    'Alice',
    '',
    '19',
    'Winterfell',
    'Female',
    'Stark',
    'https://vignette.wikia.nocookie.net/gameofthrones/images/7/7e/Sansastark706.jpg/revision/latest/scale-to-width-down/316?cb=20170828072803'
  ),
  new Character(
    'Cersei',
    'Lannister',
    ['Queen of the Andals and the First Men', 'Protector of the Seven Kingdoms'],
    'Alive',
    '',
    '42',
    'Casterly Rock',
    'Female',
    'Lannister',
    'https://vignette.wikia.nocookie.net/gameofthrones/images/c/c3/Profile-CerseiLannister.png/revision/latest/scale-to-width-down/323?cb=20170828071355'
  ),
  new Character(
    'Daenerys',
    'Targaryen',
    [
      'Queen of the Andals, the Rhoynar, and the First Men',
      'Protector of the Seven Kingdoms',
      'Khaleesi of the Great Grass Sea',
      'Lady of Dragonstone',
      'Daenerys Stormborn',
      'The Breaker of Chains',
      'The Mother of Dragons',
    ],
    'Alive',
    '',
    '22',
    'Dragonstone',
    'Female',
    'Targaryen',
    'https://vignette.wikia.nocookie.net/gameofthrones/images/5/5f/Daenerys_Dragonpit.jpg/revision/latest?cb=20171015095128'
  ),
];
exports.characters = characters;

var isDuplicated = function(newCharacter) {
  for (let character of characters) {
    if ((character.firstName + character.lastName).toLowerCase() == (newCharacter.firstName + newCharacter.lastName).toLowerCase()) {
      return true;
    }
  }
  return false;
};
exports.isDuplicated = isDuplicated;
