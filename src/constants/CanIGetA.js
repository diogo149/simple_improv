// http://www.can-i-get-a.com/

const locations = [
  "Operating Room",
  "Driveway",
  "Stables",
  "Kitchen",
  "Walk-In Closet",
  "Man Cave",
  "Garage at Home",
  "Mechanic's Garage",
  "Executive Office",
  "Oval Office",
  "Apollo Capsule",
  "Torture Chamber",
  "Sex Dungeon",
  "Safe Room",
  "Hotel Lobby",
  "Weight Room",
  "Tailor",
  "Change Room at a Store",
  "Café",
  "Terrasse",
  "Dr. Office",
  "Lawyer Office",
  "Boat Deck",
  "Sauna",
  "Hot Tub",
  "Singles Bar",
  "Star's Dressing Room",
  "Batcave",
  "Limo",
  "Ambulance",
  "Private Jet",
  "Hoarder's Shed",
  "Green House",
  "Billiard Room",
  "Library",
  "Dorm Room",
  "Brewery",
  "Basement",
  "Attic",
  "Storage Locker",
  "Bike Shop",
  "Artist Studio",
  "Hayloft",
  "Dark Alley",
  "Jail Cell",
  "Moving Van",
  "Stasis Chamber",
  "Beach",
  "Poker Room",
  "Ball Pit",
  "Butcher's",
  "Meat Freezer",
  "Boxing Ring",
  "Jeweller's",
  "Sweat Shop",
  "Candy Store",
  "Antiques Store",
  "Museum Storage",
  "Classroom",
  "Teacher's Lounge",
  "VIP Lounge",
  "Airport Gate",
  "Morgue",
  "Abandoned Home",
  "Trailer Home",
  "Campsite",
  "Cave",
  "Sinkhole",
  "Quicksand",
  "Military Tent",
  "Ladies Restroom",
  "Men's Restroom",
  "Penthouse Apt",
  "Slum Apt",
  "Bus",
  "English Pub",
  "Shoe Shop",
  "Recording Studio",
  "Observatory",
  "Ice Fishing Shack",
  "Cockpit",
  "Bank",
  "Dep/Bodega/Convenience Store",
  "Florist",
  "Rowboat",
  "Life Raft",
  "Yoga Class",
  "Dance Hall",
  "Skate Park",
  "Playground",
  "Golf Green",
  "Bus Stop",
  "Vintage Shop",
  "Museum Hall",
  "Workshop",
  "Tennis Court",
  "Food Cart/Truck",
  "Courtroom",
  "Photobooth",
  "Fallout Shelter",
  "Hobo Rail Car",
  "Hot Dog Stand",
  "Hair Salon",
  "Airlock",
  "Subway Car",
  "Balcony",
  "Arcade",
  "Greenhouse",
  "Botanical Garden",
  "Arctic Research Camp",
  "WWI Trench",
  "Tea House",
  "High School Lockers",
  "Bowling Alley",
  "Chemistry Lab",
  "Liquor Store",
  "Playground",
  "Public Pool",
  "Whitewater Raft",
  "Bird Sanctuary",
  "Kennel",
  "Projection Room",
  "Candy Store",
  "Bedroom",
  "Bachelor Pad",
  "Man Cave",
  "Movie Set",
  "Fancy Restaurant",
  "Flea Market",
  "Hotel Lobby",
  "Classroom",
  "House's Roof",
  "Convention Booth",
  "Waiting Room",
  "Car Showroom",
  "Bike Rack",
  "Monastery",
  "Rooftop Farm",
  "Stasis Chamber",
  "Holodeck",
  "Fusion Chamber",
  "Airlock",
  "Hyperdrive Cavity",
  "CERN Lab",
  "Kids Table",
  "LAN Party",
  "Gaming Store",
  "Craft Beer Pub",
  "Minivan",
  "Shipping Container",
  "Ski Lodge",
  "Tiny Cottage",
  "Manhattan Apartment",
  "Balcony",
  "Sports Luxury Suite",
  "Wine & Cheese",
  "Vernissage",
  "Fashion Studio",
  "Radio Booth",
  "Wine Cellar",
  "Cold Storage",
  "Sauna",
  "Horse Carriage",
  "Saloon",
  "Chess Club",
  "Flight Lounge",
  "Secluded Beach",
  "Registrar's Office",
  "Weight Room",
  "Bulk Food Store",
  "Throne Room",
  "Bank Vault",
  "In an Ambulance",
  "Photo Booth",
  "Apple Store"
];
const relationships = [
  "Bus Driver/A Regular",
  "Bartender/Waitress",
  "Cook/Sous-Chef",
  "Schoolbus Driver/The Last Kid",
  "EMT/Cop",
  "Team Owner/Superstar",
  "Two Shoe Designers",
  "Watchmaker/Apprentice",
  "X-Ray Tech/Doctor",
  "Vampire/Werewolf",
  "Millionaire/Yacht Salesperson",
  "Producer/Manager",
  "Gardener/Pool Boy",
  "Conductor/1st Violin",
  "Jockey/Vet",
  "Union Leader/CEO",
  "Skateboard Salesperson/Teen",
  "Foreman/Architect",
  "Torturer/Jester",
  "Prince(ss)/Stablehand",
  "Dog Food Chef/Cat Food Chef",
  "Postal Worker/UPS Delivery",
  "Buggy Driver/Car Owner",
  "Supervillain/Prison Guard",
  "Tatoo Artist/Piercer",
  "Baby/Pet",
  "Hostage/Robber",
  "Ambassador/King",
  "Spy/Handler",
  "Pitcher/Catcher",
  "Arms Dealer/Parent",
  "Mayor/Janitor",
  "Street Hustler/Off-Duty Cop",
  "Piano Tuner/Concept Artist",
  "Person/Future Self",
  "Newlywed/Bellhop",
  "Doctor/Assassin",
  "Hobo/Street Vendor",
  "Blacksmith/Jockey",
  "Astronaut/Mission Chief",
  "Tailor/Cobbler",
  "Foster Parent/Teen",
  "Entrepreneur/Bank Officer",
  "Dictator/General",
  "Socialite/Plumber",
  "Senator/Lobbyist",
  "Executive/Assistant",
  "Party Animal/Cop",
  "Spouse/Homewrecker",
  "Rival Explorers",
  "Principal/Teacher",
  "Astronomer/Meteor",
  "Robot/Its Inventor",
  "Forest Ranger/Camper",
  "Bear/Cub",
  "Landscaper/Homeowner",
  "Scriptwriter/Actor",
  "Programmer/Student",
  "Sailor/Lighthouse Keeper",
  "Pilot/Flight Tower",
  "Dentist/Patient",
  "Optometrist/Patient",
  "Pharmacist/Customer",
  "Nurse/Recovering Patient",
  "Midwife/Expecting Mother",
  "Two Judges",
  "Professor/Star Pupil",
  "Physical Trainer/Actor",
  "Archivist/Researcher",
  "Museum Curator/Politician",
  "Author/Editor",
  "Journalist/Informant",
  "Traveler/Translator",
  "Sculptor/Model",
  "Photographer/Subject",
  "Bride/Wedding Planner",
  "Coach/Referee",
  "Chef/Maitre D'",
  "Hairdresser/Regular",
  "Telephone Operator/Caller",
  "Ticket Agent/Traveler",
  "Airplane Passengers",
  "Bartender/Regular",
  "Babysitter/New Parent",
  "Pet Groomer/Pet Owner",
  "Cashier/Customer",
  "Teenager/Mentor",
  "Security Guard/Janitor",
  "Woodsman/Camper",
  "Cyclist/Driver",
  "Rare Book Collectors",
  "Taxi Driver/Passenger",
  "Limo Driver/Trophy Spouse",
  "Kid/Parent",
  "Teen/Parent",
  "Teen/Grandparent",
  "Parent/Grandparent",
  "Logger/Forest Ranger",
  "Fishing Boat Captain/1st Mate",
  "Farmer/Scarecrow",
  "Spouse/Parent-In-Law",
  "Student/Rich Relative",
  "Stunt Driver/Director",
  "Forger/Crime Boss",
  "Castaway/Coconut",
  "AI/Space Pilot",
  "Joker/Sucker",
  "Physicist/Mathematician"
];
const words = [
  "Commerce",
  "Constitution",
  "Patriot",
  "Pride",
  "Prejudice",
  "Speech",
  "Crowds",
  "Stadium",
  "Architect",
  "Blueprints",
  "Prince",
  "Princess",
  "Recess",
  "Government",
  "Elections",
  "President",
  "Resident",
  "House",
  "Home",
  "Homophobe",
  "Disagree",
  "Argument",
  "Couch",
  "TV",
  "Radio",
  "Internet",
  "Programming",
  "Alone",
  "Friends",
  "Trust",
  "Loan",
  "Borrow",
  "Interest",
  "Hobby",
  "Hotel",
  "Leaving",
  "Arriving",
  "Airport",
  "Jetlag",
  "Time Zone",
  "Shifting",
  "Uppercase",
  "Capitals",
  "Geography",
  "Cartography",
  "Maps",
  "Boots",
  "Marching",
  "Army",
  "Camping",
  "Nature",
  "Tree Planting",
  "Paper",
  "Pens",
  "Literacy",
  "Newspapers",
  "Journalism",
  "Weather",
  "Storm",
  "Hurricane",
  "Boxer",
  "UPS",
  "Overnight",
  "Moon",
  "Eclipse",
  "Dark",
  "Trapped",
  "Care",
  "Bats",
  "Batman",
  "Heroes",
  "Villains",
  "Comic Books",
  "Collector",
  "Flea Market",
  "Vintage",
  "Antiques",
  "Civil War",
  "Uniform",
  "Weapons",
  "Atom",
  "Physics",
  "Genius",
  "Genuine",
  "Forgery",
  "Painting",
  "Artist",
  "Poverty",
  "Charity",
  "Heart",
  "Love",
  "Platonic",
  "Greece",
  "Democracy",
  "Volunteer",
  "Tea",
  "Sugar",
  "Coffee",
  "Bitterness",
  "Lemon",
  "Salesman",
  "Theater",
  "Director",
  "Movies",
  "Actor",
  "Agent",
  "Spy",
  "Infiltrate",
  "Prison",
  "Guard",
  "Key",
  "Pie",
  "Circle",
  "Square",
  "Fair",
  "Unfair",
  "Rivalry",
  "Siblings",
  "Parents",
  "Pregnancy",
  "Rain",
  "Clouds",
  "Rorschach",
  "Psychology",
  "Auditorium",
  "Cafeteria",
  "Quad",
  "Pecs",
  "Six-pack",
  "Ten-Four",
  "Quarterback",
  "Goals",
  "Careers",
  "Directionless",
  "Hobo",
  "Packing",
  "Moving",
  "Mail",
  "Post Office",
  "Telegram",
  "Titanic",
  "Iceberg",
  "Lettuce",
  "Migrant",
  "Geese",
  "Foie Gras",
  "Cheese",
  "Ham",
  "Peanut Butter",
  "Tobacco",
  "Smoking",
  "Break Room",
  "Interview",
  "Vampire",
  "Ghost",
  "Haunted",
  "Trauma",
  "ER",
  "Blood",
  "Period",
  "Teenager",
  "Mall",
  "Milkshake",
  "Fountain",
  "Rome",
  "Soccer",
  "World Cup",
  "World Series",
  "WWII",
  "WWI",
  "Versailles",
  "Palace",
  "Salon",
  "Witty",
  "Kitten",
  "Laser",
  "Shark",
  "Pool",
  "Hustle",
  "Boston",
  "Accent",
  "London",
  "Medieval",
  "Jousting",
  "Armor",
  "Blacksmith",
  "Horseshoe",
  "Lucky",
  "Unlucky",
  "Unrequited",
  "Crush",
  "Pact",
  "Oath",
  "Oats",
  "Goats",
  "Cliff",
  "Canyon",
  "Burro",
  "Jockey",
  "Boxers",
  "Briefs",
  "Briefcase",
  "Minister",
  "Prime Minister",
  "Politics",
  "Debate",
  "Club",
  "Diamond",
  "Heart",
  "Shovel",
  "Cemetary",
  "Video Games",
  "Dungeon",
  "Hostage",
  "Negotiation",
  "Unions",
  "Big Business",
  "Savings",
  "Monument",
  "Statue",
  "Sculptor",
  "Da Vinci",
  "Notebook",
  "Journalism",
  "Expedition",
  "Exploring",
  "Adventure",
  "Quest",
  "Question",
  "Riddle",
  "Waffle",
  "Maple Syrup",
  "Beans",
  "Has Been",
  "Fame",
  "Infamous",
  "Wanted",
  "Outlaw",
  "Sheriff",
  "Showdown",
  "Sunset",
  "Refraction",
  "Vision",
  "Eloquence",
  "Password",
  "Encryption",
  "Hacker",
  "Pentagon",
  "Top Secret",
  "Taxonomy",
  "Astrology",
  "Twins",
  "Nonsense",
  "Codes",
  "Doors",
  "Elevator",
  "Escalator",
  "Exercise",
  "Fitness",
  "Purpost",
  "Porpoise",
  "Tortoise",
  "Glasses",
  "Nerd",
  "Jock",
  "Bimbo",
  "Ditz",
  "Blonde",
  "U-Turn",
  "Give Up",
  "Quit",
  "Logic",
  "Logo",
  "Arrows",
  "Slings",
  "Giant",
  "Dragon",
  "Treasure",
  "Locket",
  "Pop and Lock",
  "Disco",
  "Rap",
  "Country",
  "Anthem",
  "Revolution",
  "Regime",
  "Reggae",
  "Remix",
  "Studio",
  "Grammy",
  "Oscar",
  "Trashed",
  "Diva",
  "Diving",
  "Penalty",
  "Crowd",
  "Tickets",
  "Sold Out",
  "Sell Out",
  "Rock Star",
  "Contract",
  "Expand",
  "Pond",
  "Time Travel",
  "Paradox",
  "Pandora's Box",
  "Present",
  "Part",
  "Future",
  "Sci-Fi",
  "Jetpack",
  "Supersonic",
  "Sonic Boom",
  "Fighter",
  "Lover",
  "Confession",
  "Church",
  "Holy",
  "Smoke",
  "Detector",
  "Detective",
  "Rejected",
  "Ejected",
  "Dejected",
  "Depression",
  "Hiding",
  "Bully",
  "Playing",
  "Slacking",
  "Laziness",
  "Sleep",
  "Experiment",
  "Academic",
  "Presentation",
  "Christmas",
  "Hunger",
  "Hanging",
  "Execution",
  "Anonymous",
  "Addiction",
  "Treatment",
  "Trick or Treat",
  "Disguise",
  "Mask",
  "Cowboy",
  "Fired",
  "Jobs",
  "Paycheck",
  "Casino",
  "Luxury",
  "Taxes",
  "Dom",
  "Bomb",
  "Sphere",
  "Biosphere",
  "Planet",
  "Space",
  "Comets",
  "The Sun",
  "Sunburn",
  "Beach",
  "Towel",
  "Shower",
  "Soap",
  "Dishwater",
  "Kitchen",
  "Cook",
  "Hat",
  "Winter",
  "Summer",
  "Fall",
  "Spring",
  "Mattress",
  "Bed",
  "Seduction",
  "Subtraction",
  "Math",
  "Chemistry",
  "Dating",
  "Breaking Up",
  "Anger",
  "Revenge",
  "Murder",
  "Tickling",
  "Children",
  "Birth",
  "Pregnancy",
  "Surprise",
  "Attack",
  "Defensive",
  "Guilty",
  "Innocence",
  "Virgin",
  "Cocktail",
  "Bar",
  "Bartender",
  "Tipping",
  "Cows",
  "Milk",
  "Surgery",
  "Sterile",
  "Spaceship",
  "Vacuum",
  "Dust",
  "Ashes",
  "Cricket",
  "Basbeball",
  "Umpire",
  "Referee",
  "Hockey",
  "Trophy",
  "Wife",
  "Husband",
  "Wedding",
  "Divorce",
  "Court",
  "Judge",
  "Jury",
  "Executioner",
  "Guillotine",
  "Aristocrat",
  "Peasant",
  "Farm",
  "Tractor",
  "Property",
  "Manners",
  "Table",
  "Chairs",
  "Chairman",
  "CEO",
  "Stocks",
  "Trading",
  "Cards",
  "Birthday",
  "Cake",
  "Chocolate",
  "Vanilla",
  "Ice Cream",
  "Cones",
  "Traffic",
  "Drugs",
  "Mental",
  "Health",
  "Wealth",
  "Vault",
  "Pole",
  "Tall",
  "Short",
  "Temper",
  "Sword",
  "Samurai",
  "Japan",
  "China",
  "Registry",
  "Engaged",
  "Rings",
  "Olympics",
  "Silver",
  "Stains",
  "Laundry",
  "River",
  "Provoked",
  "Hostile",
  "Infuriated",
  "Irritated",
  "Withdrawn",
  "Suspicious",
  "Skeptical",
  "Sarcastic",
  "Judgmental",
  "Loathing",
  "Repugnant",
  "Revolted",
  "Revulsion",
  "Detestable",
  "Aversion",
  "Hesitant",
  "Remorseful",
  "Ashamed",
  "Ignored",
  "Powerless",
  "Vulnerable",
  "Inferior",
  "Empty",
  "Abandoned",
  "Isolated",
  "Apathy",
  "Inspired",
  "Open",
  "Playful",
  "Sensitive",
  "Hopeful",
  "Loving",
  "Provocative",
  "Courageous",
  "Enraged",
  "Resentful",
  "Jealous",
  "Insecure",
  "Devastated",
  "Embarrassed",
  "Ridicule",
  "Disrespected",
  "Alienated",
  "Inadequate",
  "Insignificant",
  "Worthless",
  "Worried",
  "Overwhelmed",
  "Frightened",
  "Shocked",
  "Dismayed",
  "Disillusioned",
  "Perplexed",
  "Amazed",
  "Eager",
  "Energetic",
  "Liberated",
  "Amused",
  "Inquisitive",
  "Important",
  "Confident",
  "Respected",
  "Fulfilled",
  "Powerful",
  "Accepted",
  "Distant",
  "Critical",
  "Bored",
  "Intimate",
  "Proud"
];

export default {
  locations,
  relationships,
  words
};
