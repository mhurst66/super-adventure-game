
const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
const containerBackground = document.querySelector('.container')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  if (textNode.pic) {
    containerBackground.style.backgroundImage = `url(${textNode.pic})`
  } else {
    containerBackground.style.backgroundImage = 'none'
  }
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
    //   button.background = image goes here
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    pic: './reception.jpg',
    text: `Welcome to Whitney's Woebegone Waypoint & Emporium.

    A shop where things are a little different around every corner!`,
    options: [
      {
        text: 'An Old Wooden Door',
        nextText: 2
      },
      {
        text: 'Frosted Bronze and Glass Door',
        nextText: 3
      },
      {
        text: `Black and White Door`,
        nextText: 4
      }
    ]
  },
  {
    id: 2,
    pic: './hallway.jpg',
    text: `The Hallway

    Pushing through the door you find yourself in a wood paneled hallway.
    You are greeted with a door to your left and your right.

    Through the scuffed wooden door to your left you can just hear the thump of some loud music.
    The right door is quieter and has a plaque with WW printed in stylized font.`,
    options: [
      {
        text: 'Scuffed Wooden Door',
        nextText: 5
      },
      {
        text: 'The WW Door',
        nextText: 6
      }
    ]
  },
  {
    id: 3,
    pic: './greenhouse.jpg',
    text: `The Greenhouse

    Entering this room you are startled by the amount of greenery and for a moment you think you have exited the shop entirely.

    Glancing around again you see you're not exactly wrong but realize you are inside a massive greenhouse; large enough for full sized trees.

    In front of you is a sign that reads:
    Left: Botanical Menagerie
    Right: Fauna Flora`,
    options: [
      {
        text: 'Botanical Menagerie',
        nextText: 7
      },
      {
        text: 'Fauna Flora',
        nextText: 8
      }
    ]
  },
  {
    id: 4,
    pic: './normalstore2.jpg',
    text: `A perfectly normal shop

    As you pass through the door you find yourself in a perfectly normal convenience store with possibly the worst elevator music you’ve ever heard playing.

    Looking around quickly ears aching at the terrible music:
    To your left is an unpainted brown wooden door
    To your right is a bright yellow painted door with small glass panels at the top
`,
    options: [
      {
        text: 'Unpainted Wooden Door',
        nextText: 2
      },
      {
        text: 'Bright Yellow Door',
        nextText: 9
      }
    ]
  },
  {
    id: 5,
    pic: './band.jpg',
    text: `Green Day in the Backrooms

    A small club packed with people greets you. Their raucous singing drowning out the sound of the door shutting behind you. On stage you see a three piece rock band with drums bass and front man wielding a low slung guitar.

To your left you see a black and white paneled door that seems off for the decor of the club.
To your right you see an ultramodern door made of glass and steel`,
    options: [
      {
        text: 'Black and White paneled door',
        nextText: 4
      },
      {
        text: 'Glass and Steel Door',
        nextText: 10
      },
    ]
  },
  {
    id: 6,
    pic: './whitneyoffice.jpg',
    text: `The WW Room

    Entering this room you find Whitney's Office. A large wooden desk sits in the center of the back wall. Amongst the papers and objects you notice a large silver key.`,
    options: [
      {
        text: 'Take the Key?',
        setState: { silverKey: true },
        nextText: 11
      },
      {
        text: 'Move on?',
        nextText: 12
      }
    ]
  },
  {
    id: 7,
    pic: './BotanicalM.jpg',
    text: `Botanical Menagerie

    Moving out of the main greenhouse and down a small hallway with display cases. Inside are strange creatures each moving about their respective cages. TigerLillies: made up of bladed leaves and stalks of the plants shaped like the animal. Hives of BeeOrchids with petals flapping, creating an eerie hum unlike that of honeybees, and a particularly cute group of Dogcactus.

Continuing along you see a door and sign.
The door seems out of place for a greenhouse, stylish and ultramodern made of glass and steel
The right side of the sign still points to Fauna Flora`,
    options: [
      {
        text: 'Fauna Flora',
        nextText: 8
      },
      {
        text: 'Glass and Steel Door',
        nextText: 10
      }
    ]
  },
  {
    id: 8,
    pic: './FaunaFlora.jpg',
    text: `Fauna Flora

    Heading down the right hand path you notice the plants are wildly varied and by reading the plaques as you walk along, from a huge array of different places.
Continuing along the path narrows into a slightly curving hall, with glass and bronze cases each holding a very strange looking plant.
Each plant perfectly taking the shape of an animal but motionless, perfectly shaped and tailored to match the animal it was copying.
Continuing along you see another sign and door.
The sign is like the above except the right is pointing back the way you came. The left still points to Botanical Menagerie
The door seems out of place for a greenhouse, stylish and ultramodern made of glass and steel.`,
    options: [
      {
        text: 'Botanical Menagerie',
        nextText: 7
      },
      {
        text: 'Glass and Steel Door',
        nextText: 10
      }
    ]
  },
  {
    id: 9,
    pic: './Witchshop.jpg',
    text: `The Witch Shop

    Heading through the cheerily painted door you step into a bright shop full of crystals, incense, and cute signs with witty sayings about “witches living here”.
To your left is an older door made of frosted glass and bronze
To your right is a much scuffed unpainted wooden door`,
    options: [
      {
        text: 'Frosted Glass and Bronze Door',
        nextText: 3
      },
      {
        text: 'Scuffed Wooden Door',
        nextText: 2
      }
    ]
  },
  {
    id: 10,
    pic: './UltramodernOffice.jpg',
    text: `Glass and Steel Door

    Passing through this door you find yourself in a luxuriously high class waiting room
Whitney in a perfectly tailored dark purple pin stripped suit says “Hmmm this is awkward I dont believe we have what you are looking for here…”
To your left is a bright yellow door with small glass panels at the top
To your right is a scuffed wooden door
`,
    options: [
      {
        text: 'Bright Yellow Door',
        nextText: 9
      },
      {
        text: 'Scuffed Wooden Door',
        nextText: 2
      }
    ]
  },
  {
    id: 11,
    pic: './whitneyoffice.jpg',
    text: `Grabbing the Silver Key you turn and see two new doors have appeared in the room
    To your left is a bright blue door
    To your right is a bright red door`,
    options: [
      {
        text: 'Bright Blue Door',
        nextText: 13
      },
      {
        text: 'Bright Red Door',
        nextText: 14
      }
    ]
  },
  {
    id: 12,
    pic: './whitneyoffice.jpg',
    text: `Leaving the Silver Key you turn and see two new doors have appeared in the room
    To your left is a bright blue door
    To your right is a bright red door`,
    options: [
      {
        text: 'Bright Blue Door',
        nextText: 13
      },
      {
        text: 'Bright Red Door',
        nextText: 14
      }
    ]
  },
  {
    id: 13,
    pic: './TrophyRoom.jpg',
    text: `Through the blue door you find a room packed with display cases flashing with gold and silver objects. A large case in the middle of the room draws your eye and you can see a gold butterfly nestled in velvet. The lock looks to be perfect for a key.
    You also see another wooden door across the room from you.`,
    options: [
      {
        text: 'Get the Gold Butterfly',
        requiredState: (currentState) => currentState.silverKey,
        nextText: 15
      },
      {
        text: 'Open the Wooden Door',
        nextText: 16
      }
    ]
  },
  {
    id: 14,
    pic: './whitneyoffice.jpg',
    text: `Through the red door you find a room packed with filing cases and another more battered desk and behind it is Whitney in a red shirt.
    You also see another wooden door across the room from you.
    Whitney looks up at you and says "Is that my Silver Key?"`,
    options: [
      {
        text: 'Yes!',
        requiredState: (currentState) => currentState.silverKey,
        nextText: 17
      },
      {
        text: 'Nope, my grandmother gave it to me!',
        requiredState: (currentState) => currentState.silverKey,
        nextText: 18
      },
      {
        text: 'What Silver Key?',
        nextText: 19
      }
    ]
  },
  {
    id: 15,
    pic: './TrophyRoom.jpg',
    text: `Unlocking the case and grabbing the Gold Butterfly, you head to the wooden door at the other end of the room. Pushing the door open you find yourself in the parking lot for Whitney's Woebegone Waypoint and Emporium`,
    options: [
      {
        text: `Congratulations! 
        Play Again?`,
        nextText: -1
      }
    ]
  },
  {
    id: 16,
    pic: './reception.jpg',
    text: `You head to the wooden door and pushing it open find yourself back in the front lobby of Whitney's Woebegone Waypoint and Emporium. Whitney looks up at you from behind the reception desk saying "Find everything you were looking for?`,
    options: [
      {
        text: 'Play again to find the treasure and escape!',
        nextText: -1
      }
    ]
  },
  {
    id: 17,
    pic: './whitneyoffice.jpg',
    text: `"Whew thanks for finding that." Whitney says, checking something off on a piece of paper. "Well what are you waiting for I have so much work to do, I cant run errands all day."
    To your left is wooden door
    To your right is a blue painted door`,
    options: [
      {
        text: 'Wooden Door',
        nextText: 16
      },
      {
        text: 'Bright Blue Door',
        nextText: 13
      }
    ]
  },
  {
    id: 18,
    pic: './whitneyoffice.jpg',
    text: `"Lieing to me in my own shop." Whitney says, checking something off on a piece of paper. "That's pretty low; I think I'll have to kick you out for the day."`,
    options: [
      {
        text: 'Play Again?',
        nextText: -1
      }
    ]
  },
  {
    id: 19,
    pic: './whitneyoffice.jpg',
    text: `"Oh well too bad." Whitney says, checking something off on a piece of paper. "Well what are you waiting for I have so much work to do, I cant run errands all day."
    To your left is wooden door
    To your right is a blue painted door`,
    options: [
      {
        text: 'Wooden Door',
        nextText: 16
      },
      {
        text: 'Bright Blue Door',
        nextText: 13
      }
    ]
  },
]

startGame()