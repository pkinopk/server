'use strict';
Object.defineProperty(exports, '__esModule', { value: true });

// Constructor
class Character {
  constructor(
    firstName,
    lastName,
    title,
    status,
    death,
    age,
    origin,
    gender,
    family,
    pictureURL
  ) {
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
    this.fullName = `${firstName} ${lastName}`.trim();
  }
}
exports.Character = Character;

// Characters List
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
    'Alive',
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
    [
      'Queen of the Andals and the First Men',
      'Protector of the Seven Kingdoms'
    ],
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
      'Queen of the Andals - the Rhoynar - and the First Men',
      'Protector of the Seven Kingdoms',
      'Khaleesi of the Great Grass Sea',
      'Lady of Dragonstone',
      'Daenerys Stormborn',
      'The Breaker of Chains',
      'The Mother of Dragons'
    ],
    'Alive',
    '',
    '22',
    'Dragonstone',
    'Female',
    'Targaryen',
    'https://vignette.wikia.nocookie.net/gameofthrones/images/5/5f/Daenerys_Dragonpit.jpg/revision/latest?cb=20171015095128'
  ),
  new Character(
    'Hodor',
    '',
    [''],
    'Deceased',
    '303 AC at the Cave of the Three-Eyed Raven Killed by wights, giving time for Bran Stark to escape',
    '',
    'Winterfell',
    'Male',
    'Other',
    'https://vignette.wikia.nocookie.net/gameofthrones/images/1/18/Season_6_hodor_main.jpg/revision/latest/scale-to-width-down/350?cb=20160617020835'
  ),
  new Character(
    'Arya',
    'Stark',
    [''],
    'Alive',
    '',
    '17',
    'Winterfel',
    'Female',
    'Stark',
    'https://vignette.wikia.nocookie.net/gameofthrones/images/5/54/Arya_the_dragon_and_the_wolf_s7.jpg/revision/latest/scale-to-width-down/319?cb=20170828062911'
  ),
  new Character(
    'Bran',
    'Stark',
    [''],
    'Alive',
    '',
    '16',
    'Winterfel',
    'Male',
    'Stark',
    'https://vignette.wikia.nocookie.net/gameofthrones/images/d/d8/%22It%27s_Wasted_On_A_Cripple%22.png/revision/latest?cb=20171006183914'
  ),
  new Character(
    'Edmure',
    'Tully',
    ['Ser', 'Lord Commander of the Kingsguard '],
    'Alive',
    '',
    '',
    'Riverrun',
    'Male',
    'Tully',
    'https://vignette.wikia.nocookie.net/gameofthrones/images/0/03/Edmure-Tully-Profile-HD.png/revision/latest/scale-to-width-down/348?cb=20160723031806'
  ),
  new Character(
    'Davos',
    'Seaworth',
    ['Ser'],
    'Alive',
    '',
    '',
    "King's Landing",
    'Male',
    'Other',
    'https://vignette.wikia.nocookie.net/gameofthrones/images/9/9b/Davos_Seaworth_Season_7_Promo_Image.PNG/revision/latest/scale-to-width-down/350?cb=20170420194108'
  ),
  new Character(
    'Tormund',
    '',
    [''],
    'Alive',
    '',
    '',
    'Beyond the Wall',
    'Male',
    'Other',
    'https://vignette.wikia.nocookie.net/gameofthrones/images/9/97/Tormund_Profile.PNG/revision/latest/scale-to-width-down/320?cb=20170818044433'
  ),
  new Character(
    'Meera',
    'Reed',
    [''],
    'Alive',
    '',
    '',
    'Unknown',
    'Female',
    'Other',
    'https://vignette.wikia.nocookie.net/gameofthrones/images/9/93/Meera_Infobox.PNG/revision/latest?cb=20170807214241'
  ),
  new Character(
    'Lyanna',
    'Mormont',
    ['Lady of Bear Island'],
    'Alive',
    '',
    '12',
    'Bear Island',
    'Female',
    'Other',
    'https://vignette.wikia.nocookie.net/gameofthrones/images/9/9e/Dragonstone_2-0.jpg/revision/latest/scale-to-width-down/333?cb=20170712215831'
  ),
  new Character(
    'Benjen',
    'Stark',
    ['First Ranger'],
    'Deceased',
    '304 AC beyond the Wall Overwhelmed fighting wights in order to give Jon Snow time to escape',
    '',
    'Winterfel',
    'Male',
    'Stark',
    'https://vignette.wikia.nocookie.net/gameofthrones/images/0/0f/610_Benjen_Promo_Crop.png/revision/latest/scale-to-width-down/350?cb=20160629183134'
  ),
  new Character(
    'Jaime',
    'Lannister',
    ['Ser', 'Lord Commander of the Kingsguard '],
    'Alive',
    '',
    '42',
    'Casterly Rock',
    'Male',
    'Lannister',
    'https://vignette.wikia.nocookie.net/gameofthrones/images/e/eb/Jaime.jpg/revision/latest/scale-to-width-down/296?cb=20170818052054'
  ),
  new Character(
    'Tyrion',
    'Lannister',
    ['Lord Paramount of the Westerlands', 'Hand of the Queen'],
    'Alive',
    '',
    '38',
    'Casterly Rock',
    'Male',
    'Lannister',
    'https://vignette.wikia.nocookie.net/gameofthrones/images/5/58/Tyrion_main_s7_e6.jpg/revision/latest?cb=20170818050344'
  ),
  new Character(
    'Qyburn',
    '',
    ['Hand of the Queen', 'Master of Whisperers'],
    'Alive',
    '',
    '',
    'Unknown',
    'Male',
    'Other',
    'https://vignette.wikia.nocookie.net/gameofthrones/images/1/19/Profile-Qyburn.png/revision/latest/scale-to-width-down/320?cb=20170819022259'
  ),
  new Character(
    'Gregor',
    'Clegane',
    ['Ser', 'Castellan of Harrenhal', "Knight of Clegane's Keep"],
    'Alive',
    '',
    '',
    "Clegane's Keep",
    'Male',
    'Other',
    'https://vignette.wikia.nocookie.net/gameofthrones/images/5/5d/Gregor_closeup_ep7.png/revision/latest/scale-to-width-down/344?cb=20170903033840'
  ),
  new Character(
    'Bronn',
    '',
    ['Ser', 'Commander of the City Watch'],
    'Alive',
    '',
    '',
    'Unknown',
    'Male',
    'Other',
    'https://vignette.wikia.nocookie.net/gameofthrones/images/9/99/Bronn_Dragonpit.jpg/revision/latest?cb=20170903202847'
  ),
  new Character(
    'Tywin',
    'Lannister',
    [
      'Lord of Casterly Rock',
      'Lord Paramount of the Westerlands',
      'Warden of the West',
      'Shield of Lannisport',
      'Hand of the King',
      'Protector of the Realm',
      'Savior of the City',
      'Ser '
    ],
    'Deceased',
    "301 AC at King's Landing Shot in the stomach and heart by his own son Tyrion with a crossbow",
    '67',
    'Casterly Rock',
    'Male',
    'Lannister',
    'https://vignette.wikia.nocookie.net/gameofthrones/images/7/71/Tywin_Lannister_4x08.jpg/revision/latest/scale-to-width-down/348?cb=20170830015346'
  ),
  new Character(
    'Joffrey',
    'Baratheon',
    [
      'King of the Andals and the First Men',
      'Lord of the Seven Kingdoms',
      'Protector of the Realm',
      'Lord Paramount of the Stormlands'
    ],
    'Deceased',
    "301 AC at King's Landing Poisoned with the strangler at his wedding feast by Olenna Tyrell",
    '19',
    "King's Landing",
    'Male',
    'Baratheon',
    'https://vignette.wikia.nocookie.net/gameofthrones/images/2/25/Joffrey_Season_4_Episode_2_TLATR.jpg/revision/latest?cb=20171105180252'
  ),
  new Character(
    'Myrcella',
    'Baratheon',
    ['Princess'],
    'Deceased',
    '302 AC off the coast of Dorne Poisoned with the Long Farewell after being kissed by Ellaria Sand',
    '19',
    "King's Landing",
    'Female',
    'Baratheon',
    'https://vignette.wikia.nocookie.net/gameofthrones/images/0/02/MyrcellaS5Cropped.jpg/revision/latest/scale-to-width-down/339?cb=20160802025401'
  ),
  new Character(
    'Tommen',
    'Baratheon',
    [
      'King of the Andals and the First Men',
      'Lord of the Seven Kingdoms',
      "Lord of Storm's End",
      'Lord Paramount of the Stormlands'
    ],
    'Deceased',
    "303 AC at King's Landing Committed suicide by jumping from a window in the Red Keep following the destruction of the Great Sept of Baelor",
    '16',
    "King's Landing",
    'Male',
    'Baratheon',
    'https://vignette.wikia.nocookie.net/gameofthrones/images/7/7c/Tommen_blood_of_my_blood.jpg/revision/latest/scale-to-width-down/350?cb=20160530234845'
  )
].sort(compare);
exports.characters = characters;

var isDuplicated = function(newCharacter) {
  for (let character of characters) {
    if (
      (character.firstName + character.lastName).toLowerCase() ==
      (newCharacter.firstName + newCharacter.lastName).toLowerCase()
    ) {
      return true;
    }
  }
  return false;
};
exports.isDuplicated = isDuplicated;

function compare(a, b) {
  if (a.firstName < b.firstName) {
    return -1;
  }
  if (a.firstName > b.firstName) {
    return 1;
  }
  return 0;
}
