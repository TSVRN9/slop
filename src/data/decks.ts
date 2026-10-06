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
      Lion
      Tiger
      Bear
      Monkey
      Dog
      Cat
      Horse
      Cow
      Pig
      Sheep
      Chicken
      Duck
      Goose
      Turkey
      Rabbit
      Mouse
      Rat
      Fox
      Deer
      Eagle
      Hawk
      Falcon
      Vulture
      Crow
      Pigeon
      Seagull
      Swan
      Hummingbird
      Toucan
      Puffin
      Kiwi
      Emu
      Rooster
      Snake
      Cobra
      Lizard
      Gecko
      Iguana
      Komodo Dragon
      Alligator
      Tortoise
      Salamander
      Toad
      Whale
      Blue Whale
      Killer Whale
      Narwhal
      Seal
      Sea Lion
      Otter
      Manatee
      Stingray
      Manta Ray
      Clownfish
      Goldfish
      Pufferfish
      Swordfish
      Eel
      Crab
      Hermit Crab
      Starfish
      Squid
      Shrimp
      Oyster
      Sea Turtle
      Spider
      Scorpion
      Ant
      Ladybug
      Grasshopper
      Cricket
      Caterpillar
      Dragonfly
      Firefly
      Mosquito
      Fly
      Wasp
      Cockroach
      Earthworm
      Centipede
      Praying Mantis
      Beetle
      Moth
      Slug
      Bison
      Buffalo
      Yak
      Antelope
      Gazelle
      Wildebeest
      Warthog
      Hyena
      Leopard
      Jaguar
      Panther
      Puma
      Lynx
      Bobcat
      Grizzly Bear
      Red Panda
      Lemur
      Chimpanzee
      Orangutan
      Baboon
      Mandrill
      Beaver
      Badger
      Weasel
      Ferret
      Chipmunk
      Mole
      Bulldog
      Poodle
      Chihuahua
      Dalmatian
      Golden Retriever
      German Shepherd
      Pug
      Husky
      Kitten
      Puppy
      Donkey
      Mule
      Pony
      Reindeer
      Elk
      Alpaca
      Dingo
      Tasmanian Devil
      Wombat
      Quokka
      Coyote
      Jackal
      Mongoose
      Capybara
      Tapir
      Pangolin
      Vampire Bat
      Flying Squirrel
      Guinea Pig
      Gerbil
      Parakeet
      Cockatoo
      Canary
      Roadrunner
      Albatross
      Stork
      Heron
      Crane
      Cardinal
      Blue Jay
      Robin
      Sparrow
      Bald Eagle
      Dodo
      Tyrannosaurus Rex
      Triceratops
      Velociraptor
      Stegosaurus
      Woolly Mammoth
      Piranha
      Great White Shark
      Hammerhead Shark
      Barracuda
      Salmon
      Lionfish
      Sea Urchin
      Axolotl
      Echidna
      Honey Badger
      Beluga Whale
      Mountain Goat
      Lamb
      Calf
      Piglet
      Duckling
      Hen
      Bull
      Stallion
      Bumblebee
      Termite
      Tarantula
      Black Widow
      Hornet
      Flea
      Snow Leopard
      Arctic Fox
      Fennec Fox
      Snowy Owl
      Wolverine
      Caribou
      Hare
      Rattlesnake
      Boa Constrictor
      Bullfrog
      Tree Frog
      Gibbon
      Kookaburra
      Cassowary
      Sea Otter
      Bluebird
      Wild Boar
      Kingfisher
      Pheasant
      Mallard
      Ibis
      Wolf Spider
      Bull Shark
      Water Buffalo
      Tuna
      Cod
      Catfish
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
      The Empire Strikes Back
      Return of the Jedi
      The Lord of the Rings
      The Hobbit
      Jurassic World
      Monsters, Inc.
      Cars
      Wall-E
      Inside Out
      Brave
      Tangled
      Aladdin
      Beauty and the Beast
      The Little Mermaid
      Cinderella
      Snow White
      Sleeping Beauty
      Pinocchio
      Dumbo
      Bambi
      Peter Pan
      Mulan
      Pocahontas
      Hercules
      The Jungle Book
      101 Dalmatians
      Lilo and Stitch
      Zootopia
      Big Hero 6
      Encanto
      Madagascar
      Ice Age
      How to Train Your Dragon
      Minions
      Sing
      The Secret Life of Pets
      Happy Feet
      Bee Movie
      Chicken Run
      Wallace and Gromit
      Paddington
      Mary Poppins
      Chitty Chitty Bang Bang
      Willy Wonka
      Charlie and the Chocolate Factory
      Matilda
      The Parent Trap
      Freaky Friday
      Night at the Museum
      Hook
      Beetlejuice
      Edward Scissorhands
      Batman
      The Dark Knight
      Superman
      Wonder Woman
      Iron Man
      Captain America
      Thor
      Guardians of the Galaxy
      Doctor Strange
      Deadpool
      X-Men
      The Incredible Hulk
      Ant-Man
      Aquaman
      The Flash
      Avengers: Endgame
      Transformers
      Terminator
      Alien
      Predator
      Blade Runner
      Total Recall
      Men in Black
      Independence Day
      Armageddon
      Twister
      Speed
      Die Hard
      Lethal Weapon
      Mission: Impossible
      James Bond
      Skyfall
      Casino Royale
      The Bourne Identity
      John Wick
      Mad Max
      Fast and Furious
      Rush Hour
      Bad Boys
      Kill Bill
      Django Unchained
      Reservoir Dogs
      Goodfellas
      Scarface
      The Departed
      Casino
      Taxi Driver
      Raging Bull
      The Shawshank Redemption
      The Green Mile
      Cast Away
      Saving Private Ryan
      Schindler's List
      Catch Me If You Can
      The Terminal
      Apollo 13
      Big
      Sleepless in Seattle
      You've Got Mail
      Pretty Woman
      Notting Hill
      Love Actually
      Bridget Jones's Diary
      When Harry Met Sally
      Four Weddings and a Funeral
      The Notebook
      Casablanca
      Gone with the Wind
      Citizen Kane
      Psycho
      Vertigo
      Rear Window
      The Birds
      Singin' in the Rain
      West Side Story
      Chicago
      Moulin Rouge
      Les Miserables
      The Greatest Showman
      La La Land
      Wicked
      Rocky Horror Picture Show
      Saturday Night Fever
      Bohemian Rhapsody
      Rocketman
      Walk the Line
      Elvis
      Oppenheimer
      Dune
      Interstellar
      The Prestige
      Memento
      Gravity
      The Martian
      Groundhog Day
      Dumb and Dumber
      Ace Ventura
      The Mask
      Liar Liar
      Bruce Almighty
      Zoolander
      Anchorman
      Step Brothers
      Superbad
      Bridesmaids
      The Hangover
      Wedding Crashers
      Napoleon Dynamite
      Legally Blonde
      Clueless
      10 Things I Hate About You
      Pitch Perfect
      Bring It On
      Karate Kid
      Remember the Titans
      Moneyball
      Creed
      Space Jam
      Happy Gilmore
      The Waterboy
      Cool Runnings
      Free Willy
      Babe
      Homeward Bound
      Air Bud
      A Christmas Story
      The Grinch
      Polar Express
      Nightmare Before Christmas
      It's a Wonderful Life
      Miracle on 34th Street
      Scream
      Halloween
      Friday the 13th
      A Nightmare on Elm Street
      The Exorcist
      The Shining
      Poltergeist
      Get Out
      The Sixth Sense
      Saw
      Gremlins
      The Goonies
      Stand by Me
      The Breakfast Club
      Ferris Bueller's Day Off
      Tron
      The NeverEnding Story
      King Kong
      Godzilla
      Planet of the Apes
      Free Guy
      Everything Everywhere All at Once
      Parasite
      Joker
      Black Swan
      Whiplash
      Slumdog Millionaire
      Life of Pi
      Crazy Rich Asians
      Wonka
      Hocus Pocus
      Coraline
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
      Tom Cruise
      Brad Pitt
      Angelina Jolie
      Jennifer Aniston
      Julia Roberts
      Sandra Bullock
      Robert Downey Jr.
      Chris Hemsworth
      Chris Evans
      Chris Pratt
      Scarlett Johansson
      Emma Watson
      Daniel Radcliffe
      Emma Stone
      Ryan Reynolds
      Ryan Gosling
      Margot Robbie
      Timothee Chalamet
      Tom Holland
      Hugh Jackman
      Jackie Chan
      Bruce Lee
      Arnold Schwarzenegger
      Sylvester Stallone
      Clint Eastwood
      Harrison Ford
      Samuel L. Jackson
      Denzel Washington
      Robin Williams
      Jim Carrey
      Eddie Murphy
      Adam Sandler
      Ben Stiller
      Steve Carell
      Kevin Hart
      Ellen DeGeneres
      Jimmy Fallon
      Conan O'Brien
      Jerry Seinfeld
      Betty White
      Audrey Hepburn
      Elizabeth Taylor
      Grace Kelly
      Judy Garland
      Humphrey Bogart
      Marlon Brando
      James Dean
      John Wayne
      Walt Disney
      Alfred Hitchcock
      Steven Spielberg
      George Lucas
      Tim Burton
      Quentin Tarantino
      Christopher Nolan
      Paul McCartney
      John Lennon
      Ringo Starr
      Mick Jagger
      David Bowie
      Elton John
      Bob Dylan
      Bob Marley
      Jimi Hendrix
      Kurt Cobain
      Whitney Houston
      Mariah Carey
      Celine Dion
      Katy Perry
      Miley Cyrus
      Justin Bieber
      Justin Timberlake
      Selena Gomez
      Billie Eilish
      Dua Lipa
      Olivia Rodrigo
      Bad Bunny
      Drake
      Kanye West
      Jay-Z
      Eminem
      Kendrick Lamar
      Post Malone
      The Weeknd
      Shawn Mendes
      Sia
      Cher
      Tina Turner
      Stevie Wonder
      Ray Charles
      Frank Sinatra
      Louis Armstrong
      Ozzy Osbourne
      Gwen Stefani
      Nicki Minaj
      Cardi B
      Lizzo
      Jon Bon Jovi
      Bruce Springsteen
      Paul Simon
      Tony Bennett
      Luciano Pavarotti
      Michael Jordan
      Kobe Bryant
      Stephen Curry
      Shaquille O'Neal
      Tom Brady
      Patrick Mahomes
      Muhammad Ali
      Mike Tyson
      Tiger Woods
      Roger Federer
      Rafael Nadal
      Novak Djokovic
      Venus Williams
      Simone Biles
      Michael Phelps
      David Beckham
      Pele
      Diego Maradona
      Neymar
      Kylian Mbappe
      Babe Ruth
      Wayne Gretzky
      Lewis Hamilton
      Max Verstappen
      Lance Armstrong
      Floyd Mayweather
      Conor McGregor
      Joe Biden
      Donald Trump
      Abraham Lincoln
      George Washington
      John F. Kennedy
      Martin Luther King Jr.
      Winston Churchill
      Nelson Mandela
      Mahatma Gandhi
      Mother Teresa
      Margaret Thatcher
      Queen Victoria
      King Charles
      Prince William
      Kate Middleton
      Prince Harry
      Meghan Markle
      Princess Diana
      Henry VIII
      Julius Caesar
      Alexander the Great
      Joan of Arc
      Genghis Khan
      Isaac Newton
      Stephen Hawking
      Leonardo da Vinci
      Pablo Picasso
      Vincent van Gogh
      Salvador Dali
      Andy Warhol
      Charles Darwin
      Galileo
      Thomas Edison
      Nikola Tesla
      Marie Curie
      Bill Gates
      Mark Zuckerberg
      Jeff Bezos
      Warren Buffett
      Richard Branson
      Mark Twain
      J.K. Rowling
      Stephen King
      Dr. Seuss
      Roald Dahl
      Jane Austen
      Charles Dickens
      Maya Angelou
      Neil Armstrong
      Buzz Aldrin
      Amelia Earhart
      Christopher Columbus
      Jacques Cousteau
      Steve Irwin
      Jamie Oliver
      Martha Stewart
      Guy Fieri
      Julia Child
      Anthony Bourdain
      Simon Cowell
      Ryan Seacrest
      Trevor Noah
      Jon Stewart
      Stephen Colbert
      Dave Chappelle
      Ricky Gervais
      Rowan Atkinson
      John Cleese
      Greta Thunberg
      Malala Yousafzai
      Pope Francis
      Dalai Lama
      Mr. Rogers
      Wayne Rooney
      Hugh Grant
      Anthony Hopkins
      Nicolas Cage
      Bill Murray
      Mel Gibson
      Lucille Ball
      Kevin Bacon
      Mr. T
      Danny DeVito
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
      Hamburger
      French Fries
      Onion Rings
      Chicken Nuggets
      Chicken Wings
      Hot Wings
      Fried Rice
      Chow Mein
      Pad Thai
      Curry
      Butter Chicken
      Naan
      Falafel
      Kebab
      Shawarma
      Gyro
      Pita Bread
      Baklava
      Samosa
      Empanada
      Quesadilla
      Enchilada
      Fajitas
      Taco Salad
      Salsa
      Tortilla Chips
      Churros
      Flan
      Tiramisu
      Gelato
      Cannoli
      Risotto
      Ravioli
      Gnocchi
      Meatballs
      Garlic Bread
      Caesar Salad
      Greek Salad
      Cobb Salad
      Coleslaw
      Potato Salad
      Mashed Potatoes
      Baked Potato
      Sweet Potato
      Hash Browns
      Scrambled Eggs
      Fried Egg
      Boiled Egg
      Eggs Benedict
      French Toast
      Bacon
      Sausage
      Pot Roast
      Steak
      Ribs
      Pulled Pork
      Meatloaf
      Roast Chicken
      Turkey Dinner
      Stuffing
      Gravy
      Cranberry Sauce
      Pot Pie
      Shepherd's Pie
      Sausage Roll
      Full English Breakfast
      Scones
      Crumpets
      Trifle
      Yorkshire Pudding
      Bangers and Mash
      Haggis
      Sandwich
      Grilled Cheese
      BLT
      Club Sandwich
      Peanut Butter and Jelly
      Sub Sandwich
      Panini
      Wrap
      Bread
      Baguette
      Pepperoni
      Calzone
      Apple Pie
      Cherry Pie
      Key Lime Pie
      Cheesecake
      Brownie
      Chocolate Chip Cookie
      Oatmeal Cookie
      Gingerbread Man
      Fortune Cookie
      Macaron
      Eclair
      Muffin
      Cinnamon Roll
      Pudding
      Jello
      Fudge
      Candy Cane
      Lollipop
      Gummy Bears
      Jelly Beans
      Candy Corn
      Chocolate Bar
      Truffle
      Caramel
      Popsicle
      Snow Cone
      Sorbet
      Frozen Yogurt
      Whipped Cream
      Candy Apple
      Caramel Apple
      Funnel Cake
      Corn Dog
      Hot Chocolate
      Coffee
      Latte
      Cappuccino
      Iced Tea
      Green Tea
      Root Beer
      Soda
      Orange Juice
      Apple Juice
      Milk
      Champagne
      Wine
      Beer
      Margarita
      Pina Colada
      Cocktail
      Strawberry
      Blueberry
      Raspberry
      Banana
      Apple
      Orange
      Lemon
      Lime
      Grapes
      Peach
      Cherry
      Mango
      Pomegranate
      Cantaloupe
      Grapefruit
      Tomato
      Potato
      Carrot
      Broccoli
      Cauliflower
      Corn
      Cucumber
      Lettuce
      Spinach
      Mushroom
      Onion
      Garlic
      Eggplant
      Zucchini
      Pumpkin
      Green Beans
      Brussels Sprouts
      Olive
      Peanut
      Almond
      Walnut
      Granola
      Oatmeal
      Yogurt
      Cheese
      Cheddar
      Mozzarella
      Butter
      Honey
      Maple Syrup
      Jam
      Nutella
      Ketchup
      Mustard
      Mayonnaise
      Hot Sauce
      Soy Sauce
      Wasabi
      Tofu
      Seaweed
      Miso Soup
      Tempura
      Teriyaki
      Kimchi
      Bibimbap
      Pho
      Banh Mi
      Egg Roll
      Peking Duck
      Dim Sum
      Oyster
      Clam Chowder
      Chicken Noodle Soup
      Tomato Soup
      Lobster Roll
      Crab Cake
      Shrimp Cocktail
      Fish Sticks
      Caviar
      Fondue
      Pierogi
      Bratwurst
      Schnitzel
      Crepes
      Escargot
      Quiche
      Cornbread
      Buffalo Wings
      Deviled Eggs
      Charcuterie Board
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
      Brushing your hair
      Taking a shower
      Cooking an egg
      Flipping a pancake
      Chopping onions
      Drinking hot coffee
      Eating a lemon
      Eating a hot pepper
      Blowing out candles
      Opening a present
      Wrapping a gift
      Making a bed
      Vacuuming
      Mopping the floor
      Washing dishes
      Ironing a shirt
      Sewing a button
      Knitting a scarf
      Hammering a nail
      Sawing wood
      Planting a tree
      Mowing the lawn
      Raking leaves
      Watering flowers
      Picking apples
      Digging a hole
      Pushing a stuck car
      Changing a tire
      Pumping gas
      Parallel parking
      Riding a bike
      Riding a unicycle
      Riding a skateboard
      Riding a scooter
      Riding a motorcycle
      Riding a bull
      Riding a camel
      Paddling a canoe
      Water skiing
      Scuba diving
      Snorkeling
      Diving off a board
      Doing the backstroke
      Playing tennis
      Playing basketball
      Playing baseball
      Kicking a penalty
      Throwing a javelin
      Shooting a bow
      Playing ping pong
      Playing the piano
      Playing the violin
      Playing the trumpet
      Playing the flute
      Playing the bagpipes
      Singing karaoke
      Dancing the tango
      Breakdancing
      Doing ballet
      Doing the robot dance
      Line dancing
      Doing the twist
      Doing push-ups
      Doing sit-ups
      Jumping rope
      Running a marathon
      Stretching
      Doing jumping jacks
      Doing a cartwheel
      Doing a handstand
      Doing a backflip
      Playing hopscotch
      Playing hide and seek
      Playing peekaboo
      Playing leapfrog
      Tug of war
      Rock paper scissors
      Blowing bubbles
      Making a snowman
      Snowball fight
      Skiing downhill
      Snowboarding
      Sledding
      Roasting marshmallows
      Pitching a tent
      Starting a campfire
      Hiking uphill
      Swatting a mosquito
      Chasing a butterfly
      Feeding ducks
      Petting a cat
      Training a puppy
      Cleaning a litter box
      Scooping dog poop
      Washing a dog
      Being Frankenstein
      Taking a photo
      Posing for a photo
      Walking on the moon
      Walking in the wind
      Walking in deep mud
      Walking on hot sand
      Walking on ice
      Walking on eggshells
      Walking against a storm
      Sleepwalking
      Sleeping on a plane
      Snoring
      Yawning
      Hiccuping
      Coughing
      Shivering
      Sweating
      Crying
      Laughing
      Giggling
      Whistling
      Winking
      Waving goodbye
      Saluting
      Shaking hands
      Giving a hug
      Blowing a kiss
      Texting while walking
      Talking on the phone
      Scrolling your phone
      Playing video games
      Playing air guitar
      Watching a scary movie
      Watching tennis
      Doing a magic trick
      Pulling a rabbit from a hat
      Blowing a trumpet
      Ringing a doorbell
      Knocking on a door
      Climbing a ladder
      Climbing a rope
      Climbing stairs
      Opening a stuck jar
      Stuck in quicksand
      Falling asleep in class
      Being chased by a bee
      Being chased by a bear
      Slipping on a banana peel
      Sitting on a whoopee cushion
      Holding a heavy box
      Carrying a baby
      Pushing a shopping cart
      Pulling a wagon
      Hailing a taxi
      Missing the bus
      Running for a train
      Fighting a fire
      Putting on makeup
      Putting on a tie
      Tying your shoes
      Shaving
      Plucking eyebrows
      Getting a tattoo
      Getting a shot
      Getting a massage
      Going to the dentist
      Taking a test
      Throwing a boomerang
      Throwing a frisbee
      Throwing a pie
      Catching a fly
      Catching a fish
      Spinning a pizza
      Carving a pumpkin
      Trick or treating
      Decorating a tree
      Hanging a pinata
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
      Whispering Librarian
      Cockney
      Geordie
      Welsh
      Yorkshire
      Posh British
      Butler
      Southern Drawl
      Boston
      Canadian
      Brooklyn
      California Surfer
      Midwestern Mom
      Minnesotan
      Cajun
      Jamaican
      South African
      New Zealander
      Aussie Outback
      German Scientist
      Swedish Chef
      Spanish Matador
      Telenovela Star
      Brazilian Soccer Fan
      Dutch Tourist
      Greek Philosopher
      Leprechaun
      Scottish Highlander
      Parisian Waiter
      Italian Pizza Maker
      Bond Villain
      Secret Agent
      Film Noir Detective
      Old-Timey Radio Host
      1950s Housewife
      Hollywood Diva
      Surfer Bro
      Gym Bro
      Cheerleader
      Gossipy Neighbor
      Bossy Boss
      Sleepy Person
      Grumpy Old Man
      Cranky Toddler
      Excited Kid
      Nervous Wreck
      Super Villain
      Evil Queen
      Fairy Godmother
      Talking Dog
      Talking Cat
      Squeaky Mouse
      Dramatic Opera Diva
      Cheesy Game Show Host
      Used Car Salesman
      Late Night Radio DJ
      Airline Pilot
      Flight Attendant
      Drive-Thru Worker
      GPS Voice
      Automated Phone Menu
      Voice Assistant
      Monotone Robot
      Evil Computer
      Robot Butler
      Space Captain
      Astronaut
      Mission Control
      Wrestling Announcer
      Golf Commentator
      Horse Race Announcer
      Weather Forecaster
      Radio Sports Announcer
      Stadium Announcer
      Ring Announcer
      Courtroom Lawyer
      Judge
      Fancy Waiter
      Yoga Instructor
      Meditation Guide
      Life Coach
      Motivational Speaker
      Preacher
      Football Coach
      Dance Instructor
      Aerobics Instructor
      Personal Trainer
      Kindergarten Teacher
      Strict Teacher
      Drama Teacher
      Professor
      Tour Guide
      Museum Guide
      Park Ranger
      Safari Guide
      Bedtime Story Narrator
      Audiobook Narrator
      Storybook Narrator
      Fairy Tale Narrator
      Monster Truck Announcer
      Shopping Channel Host
      Cooking Show Host
      Reality TV Judge
      Reality TV Contestant
      Talent Show Judge
      Soap Opera Star
      Sitcom Dad
      Cartoon Villain
      Cartoon Hero
      Disney Princess
      Wise Old Wizard
      Dragon
      Troll
      Giant
      Elf
      Dwarf
      Zombie
      Werewolf
      Witch
      Mummy
      Skeleton
      Grim Reaper
      Fortune Teller
      Pirate Captain
      Parrot
      Pilgrim
      Viking
      Roman Emperor
      Gladiator
      Knight in Armor
      Medieval Peasant
      Town Crier
      Royal Herald
      Gunslinger
      Sheriff
      Saloon Keeper
      Cowgirl
      Farmer
      Truck Driver
      Southern Preacher
      Beach Bum
      Hippie
      Beatnik
      Disco Dancer
      Rock Star
      Country Singer
      Jazz Singer
      Lounge Singer
      Rapper from the 90s
      Opera Tenor
      Choir Director
      Sleepy Bear
      Excited Puppy
      Sassy Teenager
      Preteen Influencer
      Beauty Vlogger
      Surfer Grandpa
      Valley Boy
      Baby Talk
      Squeaky Voice
      Deep Bass Voice
      Raspy Voice
      Nasally Voice
      Breathy Voice
      Slow Motion
      Fast Talker
      Sing-Song
      Yelling
      Underwater
      Out of Breath
      Sneezing
      Crying
      Laughing
      Sobbing Actor
      Dramatic Whisper
      Excited Announcer
      Bored Teenager
      Exhausted Parent
      Overly Polite
      Super Posh
      Santa Claus
      Easter Bunny
      Tooth Fairy
      Elf on the Shelf
      Mr. Rogers
      Darth Vader
      Gollum
      Mickey Mouse
      Donald Duck
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
      American Football
      Softball
      Field Hockey
      Handball
      Netball
      Squash
      Racquetball
      Pickleball
      Polo
      Skeleton
      Luge
      Biathlon
      Cross-Country Skiing
      Ski Jumping
      Speed Skating
      Snowshoeing
      Ice Fishing
      Judo
      Taekwondo
      Kickboxing
      Mixed Martial Arts
      Jiu-Jitsu
      Capoeira
      Kendo
      Shot Put
      Discus
      Javelin
      Hammer Throw
      Long Jump
      Hurdles
      Relay Race
      Sprinting
      Decathlon
      Pentathlon
      Steeplechase
      Track and Field
      Cross Country
      Trail Running
      Parkour
      Diving
      Synchronized Swimming
      Sailing
      Kayaking
      Canoeing
      Windsurfing
      Kitesurfing
      Water Skiing
      Paddleboarding
      Scuba Diving
      Spearfishing
      Fly Fishing
      Cliff Diving
      Bungee Jumping
      Skydiving
      Paragliding
      Hang Gliding
      Hot Air Ballooning
      Bodybuilding
      Powerlifting
      CrossFit
      Pilates
      Yoga
      Zumba
      Spin Class
      Jump Rope
      Pull-Up
      Push-Up
      BMX
      Mountain Biking
      Motocross
      NASCAR
      Drag Racing
      Go-Kart Racing
      Demolition Derby
      Rodeo
      Bull Riding
      Dressage
      Show Jumping
      Greyhound Racing
      Sled Dog Racing
      Roller Derby
      Roller Skating
      Rollerblading
      Ice Dancing
      Trampoline
      Pommel Horse
      Balance Beam
      Uneven Bars
      Rhythmic Gymnastics
      Cheerleading
      Dodgeball
      Kickball
      Tug of War
      Capture the Flag
      Ultimate Frisbee
      Disc Golf
      Mini Golf
      Frisbee
      Bocce
      Croquet
      Horseshoes
      Cornhole
      Shuffleboard
      Billiards
      Snooker
      Pool
      Air Hockey
      Foosball
      Pinball
      Chess Boxing
      Esports
      Sumo Wrestling
      Arm Wrestling
      Thumb Wrestling
      Tennis Racket
      Baseball Bat
      Baseball Glove
      Catcher's Mask
      Hockey Stick
      Hockey Puck
      Golf Club
      Golf Cart
      Golf Tee
      Putter
      Football Helmet
      Shoulder Pads
      Mouth Guard
      Goalie Mask
      Boxing Gloves
      Punching Bag
      Boxing Ring
      Basketball Hoop
      Backboard
      Soccer Ball
      Shin Guards
      Goal Net
      Cleats
      Running Shoes
      Swim Goggles
      Swim Cap
      Diving Board
      Life Jacket
      Surfboard
      Skateboard Ramp
      Ski Poles
      Snowboard
      Ice Skates
      Sled
      Fishing Rod
      Bowling Ball
      Bowling Pin
      Dart Board
      Bow and Arrow
      Archery Target
      Fencing Mask
      Yoga Mat
      Dumbbell
      Kettlebell
      Treadmill
      Stopwatch
      Whistle
      Scoreboard
      Finish Line
      Starting Gun
      Checkered Flag
      Gold Medal
      Podium
      Stadium
      Dugout
      Bleachers
      Locker Room
      Halftime Show
      Overtime
      Sudden Death
      Photo Finish
      Hat Trick
      Grand Slam
      Hail Mary
      Free Throw
      Three-Pointer
      Alley-Oop
      Layup
      Dribbling
      Bicycle Kick
      Corner Kick
      Header
      Offside
      Red Card
      Yellow Card
      Goalkeeper
      Strikeout
      Bunt
      Stolen Base
      Pitcher
      Catcher
      Quarterback
      Field Goal
      Tackle
      Sack
      Fumble
      Interception
      Power Play
      Face-Off
      Slapshot
      Checking
      Ace
      Backhand
      Serve
      Tiebreaker
      Birdie
      Eagle
      Bogey
      Mulligan
      Tee Time
      Gutter Ball
      Strike
      Spare
      Cannonball
      Cartwheel
      Somersault
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
      London
      New York City
      Los Angeles
      San Francisco
      Chicago
      Miami
      Washington DC
      Seattle
      New Orleans
      Texas
      California
      Florida
      Alaska
      Canada
      Mexico
      Brazil
      Argentina
      Peru
      Cuba
      Jamaica
      Bahamas
      England
      Scotland
      Ireland
      France
      Spain
      Italy
      Germany
      Greece
      Switzerland
      Sweden
      Norway
      Netherlands
      Russia
      India
      China
      Japan
      South Korea
      Thailand
      Vietnam
      Australia
      New Zealand
      South Africa
      Kenya
      Morocco
      Dubai
      Israel
      Turkey
      Africa
      Europe
      Asia
      South America
      Buckingham Palace
      Tower Bridge
      London Eye
      Westminster Abbey
      Windsor Castle
      Louvre
      Notre Dame
      Arc de Triomphe
      Versailles
      Sagrada Familia
      Acropolis
      Parthenon
      Pompeii
      Vatican
      Sistine Chapel
      Trevi Fountain
      Brandenburg Gate
      Berlin Wall
      Neuschwanstein Castle
      Red Square
      Kremlin
      Forbidden City
      Tiananmen Square
      Great Barrier Reef
      Uluru
      Bondi Beach
      Mount Fuji
      Angkor Wat
      Petra
      Burj Khalifa
      Dead Sea
      Victoria Falls
      Serengeti
      Kilimanjaro
      Table Mountain
      Easter Island
      Galapagos Islands
      Christ the Redeemer
      Chichen Itza
      Rio de Janeiro
      Panama Canal
      Hoover Dam
      Mount St. Helens
      Yellowstone
      Yosemite
      Death Valley
      Alcatraz
      White House
      Capitol Building
      Empire State Building
      Central Park
      Brooklyn Bridge
      Wall Street
      Broadway
      Hollywood Sign
      Walk of Fame
      Space Needle
      Route 66
      Graceland
      Walt Disney World
      Universal Studios
      Area 51
      Silicon Valley
      Waikiki
      Grand Ole Opry
      Mardi Gras
      Bermuda Triangle
      Loch Ness
      Hadrian's Wall
      Edinburgh Castle
      Blarney Castle
      Cliffs of Moher
      Santorini
      Amsterdam
      Barcelona
      Madrid
      Berlin
      Vienna
      Prague
      Moscow
      Beijing
      Hong Kong
      Singapore
      Bangkok
      Cairo
      Istanbul
      Toronto
      Vancouver
      Sydney
      Nashville
      Boston
      Philadelphia
      Atlanta
      Houston
      Detroit
      School
      Classroom
      Cafeteria
      Playground
      Church
      Bank
      Post Office
      Police Station
      Fire Station
      City Hall
      Park
      Farm
      Barn
      Forest
      Jungle
      Swamp
      Cave
      Island
      Lake
      Waterfall
      Cliff
      Campsite
      Lighthouse
      Windmill
      Skyscraper
      Cabin
      Treehouse
      Igloo
      Mansion
      Kitchen
      Backyard
      Swimming Pool
      Hotel
      Restaurant
      Diner
      Bakery
      Coffee Shop
      Ice Cream Shop
      Movie Theater
      Theme Park
      Water Park
      Aquarium
      Circus
      Carnival
      Arcade
      Concert Hall
      Nightclub
      Mall
      Grocery Store
      Pharmacy
      Pet Store
      Bookstore
      Toy Store
      Barbershop
      Salon
      Spa
      Gas Station
      Train Station
      Subway
      Harbor
      Cruise Ship
      Runway
      Control Tower
      Launch Pad
      Observatory
      Laboratory
      Factory
      Construction Site
      Elevator
      Prison
      Graveyard
      Palace
      Pyramid
      Hobbit Hole
      Wonderland
      Neverland
      Narnia
      Gotham City
      Mars
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
      Happy
      Yesterday
      Let It Be
      Imagine
      Smoke on the Water
      Another One Bites the Dust
      Don't Stop Me Now
      We Are the Champions
      Under Pressure
      Come Together
      Here Comes the Sun
      Yellow Submarine
      All You Need Is Love
      Satisfaction
      Sweet Home Alabama
      Born in the U.S.A.
      Brown Eyed Girl
      Stand By Me
      My Girl
      Respect
      I Got You (I Feel Good)
      Superstition
      Stayin' Alive
      September
      Last Christmas
      All I Want for Christmas Is You
      Rudolph the Red-Nosed Reindeer
      Frosty the Snowman
      Silent Night
      Deck the Halls
      Joy to the World
      We Wish You a Merry Christmas
      Santa Claus Is Coming to Town
      Winter Wonderland
      White Christmas
      Away in a Manger
      The Twelve Days of Christmas
      O Christmas Tree
      Auld Lang Syne
      Mary Had a Little Lamb
      Itsy Bitsy Spider
      The Wheels on the Bus
      Head Shoulders Knees and Toes
      If You're Happy and You Know It
      Humpty Dumpty
      London Bridge
      Ring Around the Rosie
      Pop Goes the Weasel
      Baa Baa Black Sheep
      Three Blind Mice
      Frere Jacques
      Alphabet Song
      Hot Cross Buns
      She'll Be Coming Round the Mountain
      Camptown Races
      Oh Susanna
      Yankee Doodle
      When the Saints Go Marching In
      Amazing Grace
      Rock-a-Bye Baby
      Moonlight Sonata
      Fur Elise
      Ode to Joy
      The Blue Danube
      Flight of the Bumblebee
      William Tell Overture
      Ride of the Valkyries
      Canon in D
      In the Hall of the Mountain King
      Swan Lake
      The Nutcracker March
      Dance of the Sugar Plum Fairy
      Can-Can
      Bridal Chorus
      Pomp and Circumstance
      Star-Spangled Banner
      God Save the King
      La Marseillaise
      Rule Britannia
      Land of Hope and Glory
      Jerusalem
      This Land Is Your Land
      America the Beautiful
      Star Wars Theme
      Harry Potter Theme
      Indiana Jones Theme
      Superman Theme
      Batman Theme
      James Bond Theme
      Game of Thrones Theme
      Lord of the Rings Theme
      Pirates of the Caribbean Theme
      Jurassic Park Theme
      Titanic My Heart Will Go On
      E.T. Theme
      Back to the Future Theme
      Rocky Theme
      Gonna Fly Now
      Top Gun Anthem
      Danger Zone
      Hakuna Matata
      Circle of Life
      A Whole New World
      Under the Sea
      Be Our Guest
      Part of Your World
      You've Got a Friend in Me
      When You Wish Upon a Star
      Zip-a-Dee-Doo-Dah
      Supercalifragilisticexpialidocious
      A Spoonful of Sugar
      Do-Re-Mi
      My Favorite Things
      Singin' in the Rain
      Grease Lightnin'
      You're the One That I Want
      Summer Nights
      Waterloo
      Money Money Money
      Chiquitita
      Lose Yourself
      Mr. Brightside
      Wonderwall
      Don't Look Back in Anger
      Hey Ya
      Crazy in Love
      Single Ladies
      Umbrella
      Rolling in the Deep
      Someone Like You
      Hello
      Shallow
      Bad Romance
      Poker Face
      Just Dance
      Born This Way
      Firework
      Roar
      Call Me Maybe
      Shape of You
      Blinding Lights
      Happy Together
      Get Lucky
      Despacito
      Waka Waka
      Mambo No. 5
      La Bamba
      Livin' la Vida Loca
      Hips Don't Lie
      Hotel California
      Stairway to Heaven
      Smells Like Teen Spirit
      Back in Black
      Highway to Hell
      Sweet Child o' Mine
      Pour Some Sugar on Me
      Welcome to the Jungle
      Enter Sandman
      Johnny B. Goode
      Jailhouse Rock
      Blue Suede Shoes
      Hound Dog
      Can't Help Falling in Love
      Great Balls of Fire
      Rock Around the Clock
      Twist and Shout
      Good Vibrations
      California Girls
      Mrs. Robinson
      Sound of Silence
      Bridge Over Troubled Water
      Tiny Dancer
      Rocket Man
      Your Song
      Piano Man
      Purple Rain
      Kiss
      Like a Virgin
      Material Girl
      Like a Prayer
      Girls Just Want to Have Fun
      Time After Time
      Total Eclipse of the Heart
      Footloose
      Flashdance What a Feeling
      Ice Ice Baby
      U Can't Touch This
      Cotton Eye Joe
      Bye Bye Bye
      I Want It That Way
      Wannabe
      Barbie Girl
      Oops I Did It Again
      Toxic
      Mario Kart Theme
      Zelda Theme
      Pokemon Theme
      Friends Theme
      I'll Be There for You
      Cheers Theme
      Star Trek Theme
      Doctor Who Theme
      Addams Family Theme
      Flintstones Theme
      Scooby-Doo Theme
      SpongeBob Theme
      The Muppet Show Theme
      Sesame Street Theme
      Looney Tunes Theme
      Thunderstruck
      We Didn't Start the Fire
      Take Me Home Country Roads
      Ring of Fire
      Sweet Dreams
      Every Breath You Take
      Walk Like an Egyptian
      Come On Eileen
      Careless Whisper
      Wake Me Up Before You Go-Go
      Karma Chameleon
      Video Killed the Radio Star
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
      Superman
      Hulk
      Thor
      Captain America
      Black Widow
      Thanos
      Loki
      Deadpool
      Wolverine
      Aquaman
      The Flash
      Green Lantern
      Catwoman
      Harley Quinn
      Robin
      Lex Luthor
      Penguin
      Mr. Freeze
      Luke Skywalker
      Princess Leia
      Han Solo
      Chewbacca
      R2-D2
      C-3PO
      Darth Maul
      Obi-Wan Kenobi
      Baby Yoda
      Boba Fett
      Frodo Baggins
      Legolas
      Aragorn
      Sauron
      Bilbo Baggins
      Gimli
      Hermione Granger
      Ron Weasley
      Dumbledore
      Voldemort
      Hagrid
      Severus Snape
      Dobby
      Draco Malfoy
      Katniss Everdeen
      Dr. Watson
      Moriarty
      Alice in Wonderland
      The Mad Hatter
      Cheshire Cat
      Queen of Hearts
      White Rabbit
      Dorothy
      The Scarecrow
      The Tin Man
      Cowardly Lion
      Wicked Witch of the West
      Glinda
      Peter Rabbit
      The Cat in the Hat
      Curious George
      Paddington Bear
      Tigger
      Eeyore
      Piglet
      Mowgli
      Baloo
      Bagheera
      Shere Khan
      Tarzan
      Pinocchio
      Jiminy Cricket
      Snow White
      Sleeping Beauty
      Rapunzel
      Belle
      The Beast
      Ariel
      Ursula
      Aladdin
      Genie
      Jasmine
      Mulan
      Moana
      Maui
      Tinker Bell
      Hercules
      Scar
      Mufasa
      Timon
      Pumbaa
      Nala
      Rafiki
      Woody
      Jessie
      Rex
      Nemo
      Marlin
      Lightning McQueen
      Mater
      Mike Wazowski
      Sulley
      Wall-E
      Remy
      Carl Fredricksen
      Baymax
      Stitch
      Lilo
      Mr. Incredible
      Elastigirl
      Edna Mode
      Gru
      Donkey
      Puss in Boots
      Fiona
      Lord Farquaad
      Po
      Alex the Lion
      King Julien
      Manny the Mammoth
      Sid the Sloth
      Scrat
      Bugs Bunny
      Daffy Duck
      Porky Pig
      Tweety
      Sylvester
      Wile E. Coyote
      Road Runner
      Elmer Fudd
      Taz
      Donald Duck
      Goofy
      Minnie Mouse
      Pluto
      Daisy Duck
      Scrooge McDuck
      Popeye
      Olive Oyl
      Betty Boop
      Fred Flintstone
      Barney Rubble
      George Jetson
      Yogi Bear
      Pink Panther
      Shaggy
      Velma
      Charlie Brown
      Snoopy
      Dennis the Menace
      Bart Simpson
      Lisa Simpson
      Marge Simpson
      Peter Griffin
      Stewie Griffin
      Patrick Star
      Squidward
      Mr. Krabs
      Plankton
      Sandy Cheeks
      Dora the Explorer
      Peppa Pig
      Thomas the Tank Engine
      Bob the Builder
      Big Bird
      Elmo
      Oscar the Grouch
      Miss Piggy
      Fozzie Bear
      Gonzo
      Count von Count
      Mario
      Luigi
      Princess Peach
      Bowser
      Yoshi
      Donkey Kong
      Link
      Zelda
      Kirby
      Samus
      Lara Croft
      Master Chief
      Creeper
      Steve from Minecraft
      Ash Ketchum
      Charizard
      Snorlax
      Eevee
      Pennywise
      Freddy Krueger
      Jason Voorhees
      Michael Myers
      Chucky
      Zeus
      Poseidon
      King Arthur
      Merlin
      Zorro
      Frosty the Snowman
      The Easter Bunny
      Jack Sparrow
      Spock
      Mary Poppins
      Matilda
      Oompa Loompa
      Forrest Gump
      Ace Ventura
      Austin Powers
      Ferris Bueller
      Marty McFly
      Doc Brown
      Jack Skellington
      Beetlejuice
      Edward Scissorhands
      Mr. Burns
      Ronald McDonald
      Tony the Tiger
      Smokey Bear
      Mr. Peanut
      Jon Snow
      Daenerys Targaryen
      Tyrion Lannister
      Sheldon Cooper
      Joey Tribbiani
      Ross Geller
      Rachel Green
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
      Police Officer
      Nurse
      Doctor
      Teacher
      Vet
      Paramedic
      Pharmacist
      Physiotherapist
      Optician
      Midwife
      Scientist
      Engineer
      Architect
      Carpenter
      Electrician
      Welder
      Bricklayer
      Painter
      Roofer
      Builder
      Bulldozer Driver
      Crane Operator
      Construction Worker
      Bus Driver
      Train Driver
      Truck Driver
      Ship Captain
      Sailor
      Fisherman
      Submarine Captain
      Race Car Driver
      Cyclist
      Delivery Driver
      Garbage Collector
      Street Sweeper
      Janitor
      Gardener
      Landscaper
      Florist
      Baker
      Butcher
      Waiter
      Bartender
      Sommelier
      Sushi Chef
      Pizza Maker
      Ice Cream Seller
      Cashier
      Salesperson
      Street Vendor
      Fishmonger
      Tailor
      Fashion Designer
      Model
      Makeup Artist
      Barber
      Nail Technician
      Masseuse
      Hotel Receptionist
      Bellhop
      Tour Guide
      Travel Agent
      Security Guard
      Soldier
      Army General
      Spy
      Judge
      Politician
      President
      Mayor
      Diplomat
      Journalist
      Reporter
      Radio Host
      Talk Show Host
      Game Show Host
      Newsreader
      Author
      Poet
      Cartoonist
      Sculptor
      Potter
      Blacksmith
      Glassblower
      Jeweler
      Watchmaker
      Locksmith
      Computer Programmer
      Video Game Tester
      Web Designer
      IT Technician
      Accountant
      Banker
      Stockbroker
      Real Estate Agent
      Secretary
      Actor
      Actress
      Movie Director
      Singer
      Rock Star
      Guitarist
      Drummer
      Pianist
      Violinist
      Opera Singer
      Street Performer
      Comedian
      Juggler
      Acrobat
      Circus Ringmaster
      Trapeze Artist
      Fire Breather
      Sword Swallower
      Puppeteer
      Choreographer
      Cheerleader
      Gymnast
      Boxer
      Wrestler
      Golfer
      Tennis Player
      Soccer Player
      Basketball Player
      Baseball Pitcher
      Swimmer
      Skier
      Surfer
      Sumo Wrestler
      Karate Teacher
      Umpire
      Sports Commentator
      Scuba Diver
      Mountain Climber
      Park Ranger
      Safari Guide
      Dog Walker
      Dog Groomer
      Horse Trainer
      Jockey
      Snake Charmer
      Shepherd
      Santa Claus
      Pastor
      Priest
      Nun
      Monk
      Fortune Teller
      Psychic
      Wizard
      Knight
      King
      Queen
      Viking
      Gladiator
      Samurai
      Inventor
      Mad Scientist
      Rocket Scientist
      Meteorologist
      Geologist
      Astronomer
      Marine Biologist
      Zoologist
      Paleontologist
      Botanist
      Chemist
      Ambulance Driver
      Traffic Warden
      Crossing Guard
      School Bus Driver
      Lunch Lady
      Principal
      Professor
      Tutor
      Babysitter
      Nanny
      Daycare Worker
      Housekeeper
      Butler
      Chimney Sweep
      Handyman
      Furniture Mover
      Postman
      Air Traffic Controller
      Cabin Crew
      Baggage Handler
      Valet
      Gondolier
      Seamstress
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
      Biting your cheek
      Dropping your phone on your face
      Sunburn on one side
      Getting a splinter
      Bumping your head on a cupboard
      Shopping bag handle breaks
      Umbrella flips inside out
      Caught in the rain with no coat
      Gust of wind steals your hat
      Bird poops on your head
      Mosquito buzzing in your ear
      Wasp at a picnic
      Stuck in a revolving door
      Sitting on a whoopee cushion
      Sneaking a snack and getting caught
      Pressing reply all by mistake
      Texting the wrong person
      Autocorrect disaster
      Typing with a cracked phone screen
      Dropping your phone in the toilet
      Phone slips out of your pocket
      Charger cable only works at one angle
      Laptop dies mid-sentence
      Printer jams again
      Slow computer freezing
      Muted on a video call
      Talking while still on mute
      Forgetting to attach the file
      Spelling mistake in an email
      Screen won't stop buffering
      Spoiler ruins the movie
      Falling asleep during a film
      Waking up with a stiff neck
      Pillow is too hot
      Hitting snooze five times
      Sleeping through a flight
      Missing your train stop
      Running for the train and missing it
      Wrong way on the escalator
      Stuck behind a bus
      Flat bicycle tire
      Bike chain falls off
      Car won't start
      Forgetting where you parked
      Getting a parking ticket
      Windshield covered in ice
      Scraping frost off the car
      Hot steering wheel in summer
      Seatbelt stuck
      Baby won't stop crying on a plane
      Kid kicking your airplane seat
      Reclining seat in your face
      Armrest battle on a plane
      Lost luggage
      Suitcase won't zip shut
      Suitcase wheel breaks
      Overweight bag at the airport
      Long queue at the supermarket
      Choosing the slowest checkout line
      Self-checkout says unexpected item
      Carrying too many grocery bags
      Eggs crack in the shopping bag
      Dropping a full tray at a cafeteria
      Spilling soup in your lap
      Ketchup squirts everywhere
      Salt shaker lid falls off
      Biting into a hair in your food
      Food stuck in your teeth
      Spinach in your teeth
      Burnt toast
      Smoke alarm beeps at midnight
      Smoke alarm battery chirps at 3 a.m.
      Burning dinner
      Boiling pot overflows
      Chopping onions and crying
      Cutting yourself while slicing
      Touching a hot pan
      Dropping a plate
      Broken wine glass
      Jar of pickles slips and smashes
      Fridge is empty
      Milk is sour
      Out of toilet paper
      Toilet won't flush
      Toilet seat left up in the dark
      Stepping out of the shower onto cold tiles
      Cold shower surprise
      Soap in your mouth
      Hair stuck in the drain
      Bad haircut
      Fringe cut too short
      Toothpaste on your shirt
      Ink leaks in your pocket
      Pen runs out mid-signature
      Writing on a crumbly pencil
      Eraser smears the page
      Broken shoelace
      Shoes full of pebbles
      Blister from new shoes
      Sock slides down in your shoe
      Button pops off
      Trousers rip
      Clothes shrunk in the wash
      Red sock turns the laundry pink
      Wearing a shirt inside out
      Tag itching your neck
      Static cling
      Getting a shock from a doorknob
      Hair full of static
      Wind blows your hair into your mouth
      Forgot the umbrella on the train
      Finding a hole in your pocket
      Losing one glove
      Lost sock in the dryer
      Glasses fog up in a mask
      Sunglasses sit on your head forever
      Walking into a glass door
      Walking into a lamppost while texting
      Tripping on a flat surface
      Tripping up the stairs
      Missing the last step
      Slipping on ice
      Slipping on a banana peel
      Falling off a chair
      Chair breaks under you
      Sofa swallows the remote
      Tripping over the dog
      Dog eats your homework
      Cat knocks things off the shelf
      Cat sits on your laptop
      Puppy chews your shoe
      Stepping in dog poo
      Dog drags you on a walk
      Dog shakes mud on you
      Bee flies into the car
      Fly keeps landing on you
      Moth circling the lampshade
      Ants in the kitchen
      Finding a spider in the bath
      Mouse in the house
      Raccoon in the trash
      Stuck in a lift between floors
      Stuck in a very long meeting
      Meeting that should have been an email
      Awkward silence in a lift
      Awkward hug versus handshake
      Fist bump goes wrong
      High five missed
      Saying you too to the waiter
      Mixing up two people's names
      Forgetting why you walked into a room
      Forgetting the word you wanted
      Word on the tip of your tongue
      Song stuck in your head
      Mid-sentence brain blank
      Laughing at the wrong moment
      Giggles in a quiet place
      Yawn you can't hold back
      Trying to leave a party quietly
      Awkward small talk at a party
      Wrong gift at a birthday
      Singing happy birthday off key
      Birthday candles won't light
      Balloon pops in your face
      Balloon floats away
      Confetti everywhere
      Missing the ball completely
      Ball hits you in the face
      Kicking a ball and losing your shoe
      Swimming goggles leak
      Water up your nose
      Cramp while swimming
      Belly flop
      Jellyfish sting
      Crab pinches your toe
      Hot sand on bare feet
      Sunscreen in your eyes
      Forgot the sunscreen
      Tent collapses in the rain
      Tent poles won't fit
      Sleeping bag zipper jams
      Camping on a lumpy hill
      Sleeping on a deflating air mattress
      Campfire smoke follows you
      Marshmallow catches fire
      Eating a sandwich full of sand
      Cold pizza for breakfast
      Last slice gets taken
      Soggy cereal
      Fizzy drink explodes when opened
      Straw won't fit the juice box
      Bottle cap flies away
      Can opener goes missing
      Hard to peel sticker
      Tape roll with no visible end
      Wrapping paper too short
      Knot in the necklace
      Tangled yarn
      Crayon snaps in half
      Marker dries out
      Glue sticks to your fingers
      Glitter everywhere
      Finger stuck in a jar
      Head stuck in a railing
      Ring stuck on your finger
      Stuck in quicksand
      Fitted sheet won't fold
      Duvet cover wrestling
      Fighting with a deckchair
      Folding a road map
      Folding a giant map back up
      Opening a stubborn packet of crisps
      Unwrapping a gift with too much tape
      Jigsaw missing a piece
      Board game missing a piece
      Losing at a game you invented
      Losing at rock paper scissors
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
      Wristwatch
      Alarm Clock
      Sundial
      Hourglass
      Thermometer
      Stethoscope
      X-Ray Machine
      Band-Aid
      Contact Lenses
      Eyeglasses
      Hearing Aid
      Wheelchair
      Crutches
      Syringe
      Toothpaste
      Dental Floss
      Razor
      Hair Dryer
      Comb
      Mirror
      Soap
      Deodorant
      Shower
      Flush Toilet
      Bathtub
      Washing Machine
      Dishwasher
      Refrigerator
      Freezer
      Oven
      Stove
      Kettle
      Blender
      Food Processor
      Can Opener
      Spatula
      Whisk
      Rolling Pin
      Cheese Grater
      Pressure Cooker
      Slow Cooker
      Air Fryer
      Coffee Maker
      Teapot
      Thermos
      Ice Cube Tray
      Popsicle
      Ice Cream Cone
      Potato Chips
      Cotton Candy
      Fortune Cookie
      Chewing Gum
      Lollipop
      Candy Cane
      Sandwich
      Hot Dog
      Hamburger
      Fork
      Spoon
      Chopsticks
      Drinking Straw
      Paper Cup
      Paper Bag
      Plastic Bag
      Shopping Cart
      Vending Machine
      Cash Register
      Credit Card
      Piggy Bank
      Safe
      Padlock
      Doorbell
      Door Knob
      Hammer
      Screwdriver
      Wrench
      Saw
      Drill
      Ladder
      Wheelbarrow
      Crane
      Bulldozer
      Tractor
      Pulley
      Lever
      Crowbar
      Tape Measure
      Ruler
      Pencil
      Eraser
      Ballpoint Pen
      Fountain Pen
      Marker
      Crayons
      Chalk
      Whiteboard
      Stapler
      Scissors
      Glue Stick
      Sticky Tape
      Envelope
      Postage Stamp
      Printing Press
      Newspaper
      Dictionary
      Globe
      Calendar
      Abacus
      Computer
      Laptop
      Smartphone
      Tablet
      Computer Mouse
      Keyboard
      Printer
      Scanner
      Microphone
      Loudspeaker
      Headphones
      Radio
      Television
      Remote Control
      Video Game Console
      Joystick
      Webcam
      USB Stick
      Floppy Disk
      CD Player
      Record Player
      Cassette Tape
      Walkman
      Jukebox
      Polaroid Camera
      Movie Projector
      Binoculars
      Periscope
      Magnifying Glass
      Satellite
      Space Rocket
      Space Shuttle
      Submarine
      Hovercraft
      Helicopter
      Jet Engine
      Steam Engine
      Locomotive
      Subway Train
      Bullet Train
      Car
      Motorcycle
      Scooter
      Skateboard
      Unicycle
      Tricycle
      Pogo Stick
      Segway
      Hoverboard
      Roller Coaster
      Merry-Go-Round
      Seesaw
      Swing Set
      Skipping Rope
      Yo-Yo
      Kaleidoscope
      Jigsaw Puzzle
      Chess Set
      Dominoes
      Playing Cards
      Dice
      Lego Brick
      Teddy Bear
      Etch A Sketch
      Magic 8 Ball
      Snow Globe
      Boomerang
      Kite
      Surfboard
      Snowboard
      Skis
      Ice Skates
      Life Jacket
      Scuba Tank
      Fishing Rod
      Sleeping Bag
      Tent
      Flashlight
      Lighter
      Fire Extinguisher
      Battery
      Solar Panel
      Wind Turbine
      Fan
      Air Conditioner
      Heater
      Radiator
      Electric Blanket
      Vacuum Flask
      Iron
      Sewing Machine
      Jeans
      Raincoat
      High Heels
      Flip-Flops
      Baby Bottle
      Stroller
      Bunk Bed
      Bean Bag
      Rocking Chair
      Elevator
      GPS
      Helmet
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
      Apple
      Orange
      Strawberry
      Watermelon
      Grapes
      Cherry
      Pineapple
      Lemon
      Peach
      Carrot
      Broccoli
      Potato
      French Fries
      Sandwich
      Spaghetti
      Cookie
      Donut
      Pancakes
      Popcorn
      Lollipop
      Chocolate
      Milk
      Egg
      Pretzel
      Candy
      Lemonade
      Dog
      Cat
      Horse
      Cow
      Pig
      Sheep
      Chicken
      Rooster
      Goat
      Lion
      Tiger
      Elephant
      Giraffe
      Zebra
      Hippo
      Rhino
      Bear
      Panda
      Polar Bear
      Wolf
      Fox
      Deer
      Squirrel
      Hedgehog
      Kangaroo
      Koala
      Gorilla
      Camel
      Crocodile
      Alligator
      Snake
      Turtle
      Lizard
      Goldfish
      Shark
      Whale
      Dolphin
      Octopus
      Crab
      Jellyfish
      Starfish
      Seahorse
      Seal
      Walrus
      Owl
      Eagle
      Parrot
      Flamingo
      Peacock
      Swan
      Ladybug
      Caterpillar
      Ant
      Dragonfly
      Firefly
      Worm
      Bat
      Mouse
      Hamster
      Barn
      Farm
      Zoo
      School
      Park
      Playground
      Beach
      Forest
      Mountain
      Volcano
      Desert
      Island
      Cave
      Library
      Hospital
      Fire Station
      Supermarket
      Airport
      Bus
      School Bus
      Taxi
      Airplane
      Boat
      Submarine
      Ambulance
      Police Car
      Dump Truck
      Race Car
      Spaceship
      Astronaut
      Alien
      Sun
      Star
      Cloud
      Rain
      Snow
      Thunder
      Tornado
      Planet
      Earth
      Tree
      Flower
      Sunflower
      Leaf
      Mushroom
      Grass
      Doctor
      Nurse
      Teacher
      Firefighter
      Police Officer
      Farmer
      Chef
      Clown
      Wizard
      Knight
      Cowboy
      Ninja
      Fairy
      Witch
      Pencil
      Crayon
      Backpack
      Scissors
      Paint
      Paintbrush
      Glue
      Sticker
      Ruler
      Blocks
      Puzzle
      Doll
      Toy Car
      Toy Train
      Drum
      Guitar
      Piano
      Ball
      Basketball
      Baseball
      Swimming
      Skateboard
      Scooter
      Trampoline
      Seesaw
      Sandbox
      Monkey Bars
      Tent
      Campfire
      Marshmallow
      Treehouse
      Picnic
      Snowball
      Snow Angel
      Sledding
      Ice Skating
      Hopscotch
      Piggyback Ride
      Dancing
      Singing
      Painting
      Drawing
      Reading
      Sleeping
      Brushing Teeth
      Eating Spaghetti
      Washing Hands
      Clapping
      Crying
      Laughing
      Jumping
      Running
      Crawling
      Climbing
      Santa Claus
      Christmas Tree
      Easter Egg
      Halloween
      Present
      Birthday Hat
      Crown
      Bed
      Pillow
      Blanket
      Bubble Bath
      Rubber Duck
      Umbrella
      Rain Boots
      Mittens
      Sunglasses
      Flashlight
      Rocket Ship
    `),
  },
]
