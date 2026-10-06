export interface Deck {
  id: string
  name: string
  emoji: string
  color: string
  description: string
  cards: string[]
  custom?: boolean
}

const list = (s: string) =>
  s
    .split('\n')
    .map((w) => w.trim())
    .filter(Boolean)

export const BUILT_IN_DECKS: Deck[] = [
  {
    id: 'animals',
    name: 'Animals',
    emoji: '🦁',
    color: '#ff8a3d',
    description: 'Act it out or describe it',
    cards: list(`
      Elephant
      Giraffe
      Penguin
      Kangaroo
      Octopus
      Flamingo
      Sloth
      Platypus
      Cheetah
      Hedgehog
      Gorilla
      Dolphin
      Peacock
      Chameleon
      Koala
      Raccoon
      Jellyfish
      Hippopotamus
      Owl
      Squirrel
      Crocodile
      Bat
      Panda
      Zebra
      Lobster
      Moose
      Ostrich
      Skunk
      Seahorse
      Camel
      Woodpecker
      Shark
      Rhinoceros
      Butterfly
      Llama
      Walrus
      Porcupine
      Frog
      Bee
      Turtle
      Hamster
      Polar Bear
      Snail
      Armadillo
      Parrot
      Wolf
      Pelican
      Meerkat
      Goat
      Anteater
    `),
  },
  {
    id: 'movies',
    name: 'Movies',
    emoji: '🎬',
    color: '#e8445a',
    description: 'Blockbusters & classics',
    cards: list(`
      Titanic
      Jurassic Park
      The Lion King
      Star Wars
      Finding Nemo
      Frozen
      The Matrix
      Jaws
      Back to the Future
      Toy Story
      Harry Potter
      The Wizard of Oz
      Shrek
      Home Alone
      Avatar
      The Godfather
      Ghostbusters
      Rocky
      E.T.
      Mean Girls
      Black Panther
      Barbie
      Top Gun
      Inception
      The Incredibles
      Pirates of the Caribbean
      Forrest Gump
      Up
      Mamma Mia!
      Spider-Man
      The Avengers
      Grease
      Jumanji
      Ratatouille
      Moana
      The Sound of Music
      Mrs. Doubtfire
      Indiana Jones
      Gladiator
      Elf
      Coco
      Shark Tale
      Kung Fu Panda
      The Princess Bride
      Pulp Fiction
      Twilight
      Despicable Me
      The Hunger Games
      Lord of the Rings
      Dirty Dancing
    `),
  },
  {
    id: 'celebrities',
    name: 'Celebrities',
    emoji: '⭐',
    color: '#f5b700',
    description: 'Famous faces',
    cards: list(`
      Taylor Swift
      Beyoncé
      Dwayne Johnson
      Oprah Winfrey
      Elvis Presley
      Lady Gaga
      Albert Einstein
      Marilyn Monroe
      Michael Jackson
      Serena Williams
      Leonardo DiCaprio
      Rihanna
      Tom Hanks
      Shakespeare
      Cleopatra
      Kim Kardashian
      Elon Musk
      Gordon Ramsay
      Ed Sheeran
      Adele
      Lionel Messi
      Cristiano Ronaldo
      Keanu Reeves
      Barack Obama
      Queen Elizabeth II
      Snoop Dogg
      Britney Spears
      Harry Styles
      Morgan Freeman
      Bob Ross
      David Attenborough
      Usain Bolt
      Jennifer Lopez
      Mr. Bean
      Shakira
      Charlie Chaplin
      Dolly Parton
      LeBron James
      Ariana Grande
      Will Smith
      Johnny Depp
      Madonna
      Freddie Mercury
      Napoleon
      Frida Kahlo
      Steve Jobs
      Zendaya
      Bruno Mars
      Meryl Streep
      Mozart
    `),
  },
  {
    id: 'food',
    name: 'Food & Drink',
    emoji: '🍕',
    color: '#3ddc84',
    description: 'Tasty things',
    cards: list(`
      Pizza
      Sushi
      Tacos
      Spaghetti
      Pancakes
      Hot Dog
      Avocado Toast
      Popcorn
      Croissant
      Ice Cream Sundae
      Burrito
      Cheeseburger
      Watermelon
      Chocolate Fondue
      Pretzel
      Lasagna
      Corn on the Cob
      Bubble Tea
      Ramen
      Cupcake
      Fried Chicken
      Bagel
      Smoothie
      Nachos
      Dumplings
      Waffles
      Banana Split
      Lemonade
      Fish and Chips
      Cotton Candy
      Mac and Cheese
      Pineapple
      Salad
      Espresso
      Donut
      Peanut Butter
      Spring Rolls
      Pumpkin Pie
      Milkshake
      Guacamole
      Omelette
      Chili Pepper
      Marshmallow
      Paella
      Coconut
      S'mores
      Hummus
      Birthday Cake
      Cereal
      Toast
    `),
  },
  {
    id: 'act-it-out',
    name: 'Act It Out',
    emoji: '🎭',
    color: '#8b5cf6',
    description: 'No talking allowed!',
    cards: list(`
      Brushing teeth
      Riding a horse
      Skydiving
      Walking a dog
      Playing guitar
      Changing a diaper
      Surfing
      Bowling
      Doing yoga
      Climbing a mountain
      Taking a selfie
      Juggling
      Swimming
      Painting a wall
      Flying a kite
      Milking a cow
      Ice skating
      Getting a haircut
      Sneezing
      Lifting weights
      Blowing up a balloon
      Fishing
      Playing the drums
      Making pizza dough
      Walking on a tightrope
      Being a robot
      Riding a roller coaster
      Shoveling snow
      Conducting an orchestra
      Rowing a boat
      Typing on a keyboard
      Doing the moonwalk
      Eating spaghetti
      Driving a race car
      Building a sandcastle
      Waking up late
      Stepping on Lego
      Hula hooping
      Karate
      Mime trapped in a box
      Bird watching
      Stuck in an elevator
      Sword fighting
      Washing a car
      Archery
      Baking a cake
      Golf
      Zombie
      Doing laundry
      Boxing
    `),
  },
  {
    id: 'accents',
    name: 'Accents',
    emoji: '🗣️',
    color: '#06b6d4',
    description: 'Describe the card in this accent',
    cards: list(`
      Pirate
      Cowboy
      British Royalty
      Surfer Dude
      Robot
      Australian
      Valley Girl
      Sports Commentator
      Movie Trailer Voice
      Grandma
      Vampire
      Toddler
      Texan
      Scottish
      Irish
      French Chef
      Italian
      Russian Spy
      New Yorker
      Shakespearean Actor
      News Anchor
      Yoda
      Opera Singer
      Auctioneer
      Southern Belle
      Game Show Host
      Mad Scientist
      Drill Sergeant
      Whisper
      Alien
      Elderly Wizard
      Infomercial Host
      Nature Documentary
      Caveman
      Superhero
      Ghost
      Teenager
      Medieval Knight
      Chipmunk
      Rapper
    `),
  },
  {
    id: 'sports',
    name: 'Sports',
    emoji: '⚽',
    color: '#22c55e',
    description: 'Games, gear & moves',
    cards: list(`
      Soccer
      Basketball
      Tennis
      Golf
      Baseball
      Ice Hockey
      Volleyball
      Swimming
      Boxing
      Surfing
      Skateboarding
      Snowboarding
      Cricket
      Rugby
      Table Tennis
      Badminton
      Archery
      Fencing
      Gymnastics
      Wrestling
      Cycling
      Marathon
      Bowling
      Darts
      Rock Climbing
      Figure Skating
      Water Polo
      Sumo
      Curling
      Pole Vault
      High Jump
      Lacrosse
      Karate
      Rowing
      Triathlon
      Horse Racing
      Formula 1
      Skiing
      Weightlifting
      Bobsled
      Slam Dunk
      Hole in One
      Penalty Kick
      Home Run
      Touchdown
      Referee
      Trophy
      Olympics
      Cheerleader
      Mascot
    `),
  },
  {
    id: 'places',
    name: 'Places',
    emoji: '🗺️',
    color: '#3b82f6',
    description: 'Landmarks & locations',
    cards: list(`
      Eiffel Tower
      Great Wall of China
      Statue of Liberty
      Grand Canyon
      Pyramids of Giza
      Mount Everest
      Disneyland
      Hollywood
      Las Vegas
      Venice
      Sahara Desert
      Amazon Rainforest
      Antarctica
      Hawaii
      Big Ben
      Colosseum
      Niagara Falls
      Times Square
      Leaning Tower of Pisa
      Stonehenge
      Sydney Opera House
      Machu Picchu
      Taj Mahal
      Golden Gate Bridge
      North Pole
      Tokyo
      Paris
      Rome
      Egypt
      Iceland
      The Moon
      Mount Rushmore
      Hogwarts
      Atlantis
      Airport
      Hospital
      Library
      Zoo
      Beach
      Museum
      Casino
      Bowling Alley
      Haunted House
      Volcano
      Space Station
      Submarine
      Castle
      Desert Island
      Gym
      Supermarket
    `),
  },
  {
    id: 'songs',
    name: 'Songs to Hum',
    emoji: '🎶',
    color: '#c026d3',
    description: 'Hum the tune, no lyrics allowed',
    cards: list(`
      Happy Birthday
      Twinkle Twinkle Little Star
      Jingle Bells
      Bohemian Rhapsody
      Baby Shark
      Let It Go
      Sweet Caroline
      Don't Stop Believin'
      Billie Jean
      Thriller
      Hey Jude
      YMCA
      Macarena
      Dancing Queen
      Never Gonna Give You Up
      The Imperial March
      Jaws Theme
      Mission Impossible Theme
      The Pink Panther
      Ghostbusters
      The Simpsons Theme
      Super Mario Theme
      Tetris Theme
      Wedding March
      Old MacDonald
      Row Row Row Your Boat
      We Will Rock You
      Seven Nation Army
      Take On Me
      Africa
      Livin' on a Prayer
      Shake It Off
      Uptown Funk
      Gangnam Style
      Hallelujah
      Somewhere Over the Rainbow
      I Will Always Love You
      Jingle Bell Rock
      The Final Countdown
      Eye of the Tiger
    `),
  },
  {
    id: 'characters',
    name: 'Characters',
    emoji: '🦸',
    color: '#4f46e5',
    description: 'Heroes, villains and cartoons',
    cards: list(`
      Batman
      Spider-Man
      Darth Vader
      Harry Potter
      Shrek
      SpongeBob
      Pikachu
      Sherlock Holmes
      Elsa
      Gandalf
      Yoda
      Homer Simpson
      Mickey Mouse
      Winnie the Pooh
      Dracula
      Captain Hook
      Cinderella
      Willy Wonka
      Gollum
      Iron Man
      Wonder Woman
      The Joker
      Scooby-Doo
      Garfield
      Kermit the Frog
      Buzz Lightyear
      Sonic the Hedgehog
      Pac-Man
      James Bond
      Indiana Jones
      Godzilla
      King Kong
      Peter Pan
      Simba
      Dory
      Olaf
      The Grinch
      Santa Claus
      The Tooth Fairy
      Hello Kitty
      Barbie
      Mr. Bean
      Cookie Monster
      Frankenstein's Monster
      Robin Hood
    `),
  },
  {
    id: 'jobs',
    name: 'Jobs',
    emoji: '👩‍🚒',
    color: '#92400e',
    description: 'Act out the job',
    cards: list(`
      Astronaut
      Firefighter
      Dentist
      Lifeguard
      Pilot
      Chef
      Magician
      Plumber
      Librarian
      Mime
      Barista
      Surgeon
      Lumberjack
      Zookeeper
      Referee
      Hairdresser
      Detective
      Beekeeper
      Tattoo Artist
      Weather Presenter
      Flight Attendant
      Ventriloquist
      Personal Trainer
      Taxi Driver
      Archaeologist
      DJ
      Farmer
      Mail Carrier
      Window Cleaner
      Tightrope Walker
      Auctioneer
      Orchestra Conductor
      Photographer
      Pirate
      Cowboy
      Ninja
      Clown
      Ballet Dancer
      Stunt Performer
      Bodyguard
      Yoga Instructor
      Car Mechanic
      Lion Tamer
      News Anchor
      Lawyer
    `),
  },
  {
    id: 'struggles',
    name: 'Everyday Struggles',
    emoji: '😩',
    color: '#64748b',
    description: 'Act out the small disasters',
    cards: list(`
      Stubbing your toe
      Brain freeze
      Forgetting someone's name
      Stepping on a Lego
      Phone at 1% battery
      Waving at someone who wasn't waving at you
      Pushing a pull door
      Tangled headphones
      Hiccups
      Stuck in traffic
      Locked out of the house
      Spilling coffee
      Missing the bus
      Sneezing in a quiet room
      Losing your keys
      Wet socks
      Paper cut
      Alarm didn't go off
      Burning your tongue
      Leg falls asleep
      Opening a tight jar
      Assembling flat-pack furniture
      Parallel parking
      Walking into a spider web
      Wi-Fi drops on a video call
      Forgot your password
      Sand in your shoes
      Seagull steals your chips
      Elevator small talk
      Slow walker in front of you
      Shopping cart with a wobbly wheel
      Stepping in gum
      Untangling Christmas lights
      Shampoo in your eyes
      Ice cream falls off the cone
      Accidentally liking an old photo
      Running for a closing door
      Losing the TV remote
      Sitting on a wet bench
      Stuck zipper
    `),
  },
  {
    id: 'inventions',
    name: 'Inventions',
    emoji: '💡',
    color: '#65a30d',
    description: 'Things someone had to invent',
    cards: list(`
      Toaster
      The Wheel
      Light Bulb
      Telephone
      The Internet
      Microwave
      Velcro
      Bubble Wrap
      Selfie Stick
      Zipper
      Umbrella
      Paperclip
      Rubber Duck
      Vacuum Cleaner
      Lava Lamp
      Fidget Spinner
      Roller Skates
      Trampoline
      Hot Air Balloon
      Parachute
      Rubik's Cube
      Slinky
      Frisbee
      Sticky Note
      Sliced Bread
      Telescope
      Compass
      Escalator
      Ferris Wheel
      Traffic Light
      Toothbrush
      Sunglasses
      Bicycle
      Typewriter
      Smoke Detector
      Pizza Cutter
      Snorkel
      Hammock
      Robot Vacuum
      Drone
      Calculator
      Microscope
      Airplane
      Camera
    `),
  },
  {
    id: 'kids',
    name: 'Kids',
    emoji: '🧸',
    color: '#ec4899',
    description: 'Easy words for younger players',
    cards: list(`
      Banana
      Rainbow
      Dinosaur
      Robot
      Snowman
      Bubbles
      Kite
      Train
      Rocket
      Unicorn
      Dragon
      Princess
      Monkey
      Bunny
      Butterfly
      Ice Cream
      Pizza
      Balloon
      Birthday Cake
      Swing
      Slide
      Teddy Bear
      Fire Truck
      Mermaid
      Ghost
      Puppy
      Kitten
      Frog
      Duck
      Pumpkin
      Cupcake
      Castle
      Superhero
      Tractor
      Spider
      Bee
      Moon
      Sandcastle
      Bath Time
      Jump Rope
      Hide and Seek
      Tickle Fight
      Penguin
      Pirate Ship
      Snail
    `),
  },
]
