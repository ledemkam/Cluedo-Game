//Suspects
const Suspectsarray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: "45",
    description: "He has a lot of connections ",
    color: "green",
    image: "assets/img/mrGreen.jpeg",
  },
  {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: "26",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy ",
    color: "white",
    image: "assets/img/drOrchild.jpeg",
  },

  {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer ",
    age: "22 ",
    description: "Billionaire video game designer",
    color: "purple",
    image: "assets/img/profPlum.jpeg",
  },

  {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actress",
    age: "31",
    description: "She is an A-list movie star with a dark past",
    color: "red",
    image: "assets/img/missScarlet.jpeg",
  },

  {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: "36",
    description:
      "She is from a wealthy family and uses her status and money to earn popularity",
    color: "blue",
    image: "assets/img/mrPeacock.jpeg",
  },

  {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: "62",
    description:
      "He is a former football player who tries to get by on his former glory",
    color: "yellow",
    image: "assets/img/mrmustard.jpeg",
  },
  {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: "26",
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy ",
    color: "white",
    image: "assets/img/drOrchild.jpeg",
  },

  {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer ",
    age: "22 ",
    description: "Billionaire video game designer",
    color: "purple",
    image: "assets/img/profPlum.jpeg",
  },

  {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actress",
    age: "31",
    description: "She is an A-list movie star with a dark past",
    color: "red",
    image: "assets/img/missScarlet.jpeg",
  },

  {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: "36",
    description:
      "She is from a wealthy family and uses her status and money to earn popularity",
    color: "blue",
    image: "assets/img/mrPeacock.jpeg",
  },

  {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: "62",
    description:
      "He is a former football player who tries to get by on his former glory",
    color: "yellow",
    image: "assets/img/mrmustard.jpeg",
  },
];

//Weapons

const Weaponsarray = [
  {
    name: "rope",
    weight: 10,
  },

  {
    name: "knife",
    weight: "8",
  },

  {
    name: "candlestick",
    weight: "2",
  },

  {
    name: "dumbbell",
    weight: "30",
  },

  {
    name: "poison",
    weight: "4",
  },
  {
    name: "axe",
    weight: "15",
  },
  {
    name: "bat",
    weight: "13",
  },
  {
    name: "trophy",
    weight: "25",
  },
  {
    name: "pistol",
    weight: "20",
  },
];
// Rooms
const Roomsarray = [
  {
    name: "Dining Room",
  },

  {
    name: "Conservatory",
  },

  {
    name: "Kitchen",
  },
  {
    name: "Study",
  },
  {
    name: "Library",
  },
  {
    name: "Billiard Room ",
  },
  {
    name: "Ballroom",
  },
  {
    name: "Lounge",
  },
  {
    name: "Hall",
  },
  {
    name: "Spa",
  },
  {
    name: "Dining Room ",
  },
  {
    name: "Living Room",
  },
  {
    name: "Observatory",
  },
  {
    name: "Theater",
  },

  {
    name: "Guest House",
  },
  {
    name: "Patio ",
  },
];

// THIS FUNCTION WILL RANDOMLY SELECT ONE ITEM FROM THE ARRAY THAT YOU PASS IN TO THE FUNCTION.
//Math.random() used with Math.floor() can be used to return random integers.
//Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):

const selectRandom = (array) => {
  return Math.floor(Math.random() * array.length);
};

// eine Funktion namens pickMystery, die keine Argumente annimmt und ein Objekt mit drei Eigenschaften zurückgibt: Verdächtiger, Waffe und Raum, wobei jede als Wert eine Karte dieses spezifischen Typs enthält

const pickMystery = () => {
  let result = document.getElementById("result");
  let randomSus = Suspectsarray[selectRandom(Suspectsarray)];
  let randomweapon = Weaponsarray[selectRandom(Weaponsarray)];
  let randomrooms = Roomsarray[selectRandom(Roomsarray)];

  let mystery = [randomSus, randomweapon, randomrooms];

  result.innerHTML = [
    `${mystery[0].firstName} ${mystery[0].lastName} killed Mr. Boddy with a ${mystery[1].name} in the ${mystery[2].name}.`,
  ];
  document.getElementById("killerImg").src = `${randomSus.img}`;

  let images = document.querySelectorAll("img");

  for (i = 0; i < images.length; i++) {
    if (images[i].id === mystery[0].lastName) {
      images[i].classList.add("shaky");

      setTimeout(() => {
        for (i = 0; i < images.length; i++) {
          images[i].classList.remove("shaky");
        }
      }, 300);
    }
  }
};
