const usCities = ['US CITIES', 'AKRON', 'ALBANY', 'ALBUQUERQUE', 'ANAHEIM', 'ANCHORAGE', 'ANNAPOLIS', 'ARLINGTON', 'ATLANTA', 'AUGUSTA', 'AURORA', 'AUSTIN', 'BAKERSFIELD', 'BALTIMORE', 'BATON ROUGE', 'BELLEVUE', 'BELLINGHAM', 'BERKELEY', 'BIRMINGHAM', 'BISMARCK', 'BOISE', 'BOSTON', 'BUFFALO', 'CARSON CITY', 'CHANDLER', 'CHARLESTON', 'CHARLOTTE', 'CHATTANOOGA', 'CHESAPEAKE', 'CHICAGO', 'CHULA VISTA', 'CINCINNATI', 'CLEVELAND', 'COLORADO SPRINGS', 'COLUMBIA', 'COLUMBUS', 'CONCORD', 'CORPUS CHRISTI', 'DALLAS', 'DENVER', 'DES MOINES', 'DETROIT', 'DOVER', 'DURHAM', 'EL PASO', 'EUGENE', 'FONTANA', 'FORT WAYNE', 'FORT WORTH', 'FRANKFORT', 'FREMONT', 'FRESNO', 'GILBERT', 'GLENDALE', 'GRAND RAPIDS', 'GREEN BAY', 'GREENSBORO', 'HARRISBURG', 'HARTFORD', 'HELENA', 'HENDERSON', 'HOLLYWOOD', 'HONOLULU', 'HOUSTON', 'INDIANAPOLIS', 'IRVINE', 'JACKSON', 'JACKSONVILLE', 'JERSEY CITY', 'JUNEAU', 'KANSAS CITY', 'LANSING', 'LAREDO', 'LAS VEGAS', 'LEXINGTON', 'LINCOLN', 'LITTLE ROCK', 'LONG BEACH', 'LOS ANGELES', 'LOUISVILLE', 'LUBBOCK', 'MADISON', 'MEDFORD', 'MEMPHIS', 'MESA', 'MIAMI', 'MILWAUKEE', 'MINNEAPOLIS', 'MOBILE', 'MODESTO', 'MONTGOMERY', 'MONTPELIER', 'NASHVILLE', 'NEW HAVEN', 'NEW ORLEANS', 'NEW YORK CITY', 'NEWARK', 'NEWPORT NEWS', 'NORFOLK', 'OAKLAND', 'OKLAHOMA CITY', 'OMAHA', 'ORLANDO', 'PENSACOLA', 'PHILADELPHIA', 'PHOENIX', 'PIERRE', 'PITTSBURGH', 'PLANO', 'PORTLAND', 'PROVIDENCE', 'RALEIGH', 'RENO', 'RICHMOND', 'RIVERSIDE', 'ROCHESTER', 'SACRAMENTO', 'SALEM', 'SALT LAKE CITY', 'SAN ANTONIO', 'SAN BERNARDINO', 'SAN DIEGO', 'SAN FRANCISCO', 'SAN JOSE', 'SANTA ANA', 'SANTA BARBARA', 'SANTA CRUZ', 'SANTA FE', 'SCOTTSDALE', 'SCRANTON', 'SEATTLE', 'SPOKANE', 'SPRINGFIELD', 'ST LOUIS', 'ST PAUL', 'ST PETERSBURG', 'STOCKTON', 'TACOMA', 'TALLAHASSEE', 'TAMPA', 'TEMPE', 'TOLEDO', 'TOPEKA', 'TRENTON', 'TUCSON', 'TULSA', 'VIRGINIA BEACH', 'WACO', 'WASHINGTON', 'WICHITA', 'WORCESTER'];
const worldCities = ['WORLD CITIES', 'ABERDEEN', 'ABU DHABI', 'ADDIS ABABA', 'ADELAIDE', 'ALEXANDRIA', 'ALGIERS', 'AMSTERDAM', 'ANKARA', 'ANTWERP', 'ASTANA', 'ATHENS', 'AUCKLAND', 'BAGHDAD', 'BAKU', 'BANGKOK', 'BARCELONA', 'BEIJING', 'BEIRUT', 'BELFAST', 'BELGRADE', 'BERLIN', 'BERN', 'BIRMINGHAM', 'BOGOTA', 'BRASILIA', 'BRATISLAVA', 'BRISBANE', 'BRUSSELS', 'BUCHAREST', 'BUDAPEST', 'BUENOS AIRES', 'CAIRO', 'CALGARY', 'CALI', 'CANCUN', 'CAPE TOWN', 'CARACAS', 'CARDIFF', 'CASABLANCA', 'CHRISTCHURCH', 'COLOGNE', 'COPENHAGEN', 'COVENTRY', 'DELHI', 'DHAKA', 'DORTMUND', 'DRESDEN', 'DUBAI', 'DUBLIN', 'DUBROVNIK', 'DUSSELDORF', 'EDINBURGH', 'EDMONTON', 'FLORENCE', 'FORTALEZA', 'FRANKFURT', 'GLASGOW', 'GOTHENBURG', 'GUADALAJARA', 'GUANGZHOU', 'GUATEMALA CITY', 'HALIFAX', 'HAMBURG', 'HAMILTON', 'HANOI', 'HAVANA', 'HELSINKI', 'HIROSHIMA', 'HO CHI MINH CITY', 'HONG KONG', 'HYDERABAD', 'INCHEON', 'ISTANBUL', 'JAKARTA', 'JEDDAH', 'JERUSALEM', 'JOHANNESBURG', 'KABUL', 'KARACHI', 'KIEV', 'KINGSTON', 'KRAKOW', 'KUALA LUMPUR', 'LAGOS', 'LAHORE', 'LEEDS', 'LEICESTER', 'LEIPZIG', 'LIMA', 'LISBON', 'LIVERPOOL', 'LONDON', 'LYON', 'MADRID', 'MANAUS', 'MANCHESTER', 'MANILA', 'MARSEILLE', 'MEDELLIN', 'MELBOURNE', 'MEXICO CITY', 'MILAN', 'MINSK', 'MONACO', 'MONTERREY', 'MONTEVIDEO', 'MONTREAL', 'MOSCOW', 'MUMBAI', 'MUNICH', 'NAGASAKI', 'NAGOYA', 'NAIROBI', 'NANJING', 'NAPLES', 'NASSAU', 'NEW DELHI', 'NEWCASTLE', 'NICE', 'NUREMBERG', 'OSAKA', 'OSAKA', 'OSLO', 'OTTAWA', 'PALERMO', 'PANAMA CITY', 'PARIS', 'PERTH', 'PORT AU PRINCE', 'PRAGUE', 'PYONGYANG', 'QUEBEC CITY', 'QUEZON CITY', 'REGINA', 'REYKJAVIK', 'RIGA', 'RIO DE JANEIRO', 'RIYADH', 'ROME', 'ROTTERDAM', 'SAINT PETERSBURG', 'SALVADOR', 'SAN JUAN', 'SAN MARINO', 'SANTIAGO', 'SANTO DOMINGO', 'SAO PAULO', 'SAPPORO', 'SARAJEVO', 'SASKATOON', 'SEOUL', 'SEVILLE', 'SHANGHAI', 'SHEFFIELD', 'SHENZEN', 'SINGAPORE', 'SOFIA', 'SOUTHAMPTON', 'STOCKHOLM', 'STRASBOURG', 'STUTTGART', 'SURABAYA', 'SYDNEY', 'SZCZECIN', 'TAIPEI', 'TALLINN', 'TEHRAN', 'TIJUANA', 'TOKYO', 'TORONTO', 'TOULOUSE', 'TRIPOLI', 'TURIN', 'UTRECHT', 'VALENCIA', 'VALPARAISO', 'VANCOUVER', 'VATICAN CITY', 'VENICE', 'VICTORIA', 'VIENNA', 'WARSAW', 'WELLINGTON', 'WINNIPEG', 'YOKOHAMA', 'ZAGREB', 'ZARAGOZA', 'ZURICH'];
const landmarks = ['LANDMARKS', 'ACROPOLIS', 'ALAMO', 'ALCATRAZ', 'ANGKOR WAT', 'ARC DE TRIOMPHE', 'ATOMIUM', 'BAY BRIDGE', 'BERLIN WALL', 'BIG BEN', 'BRANDENBURG GATE', 'BROOKLYN BRIDGE', 'BRYCE CANYON', 'BUCKINGHAM PALACE', 'BURJ AL ARAB', 'BURJ KHALIFA', 'CAPITOL HILL', 'CENTRAL PARK', 'CHICHEN ITZA', 'CHRIST THE REDEEMER', 'CHRYSLER BUILDING', 'CLOUD GATE', 'CN TOWER', 'COIT TOWER', 'COLOSSEUM', 'DEATH VALLEY', 'DOVER CLIFFS', 'EIFFEL TOWER', 'EMPIRE STATE BUILDING', 'EVERGLADES', 'FORBIDDEN CITY', 'GATEWAY ARCH', 'GIBRALTAR ROCK', 'GOLDEN GATE BRIDGE', 'GRAND CANYON', 'GREAT BARRIER REEF', 'GREAT PYRAMID OF GIZA', 'GREAT SPHINX', 'GREAT WALL OF CHINA', 'GRIFFITH OBSERVATORY', 'HAGIA SOPHIA', 'HOLLYWOOD SIGN', 'HOOVER DAM', 'INDEPENDENCE HALL', 'KILIMANJARO', 'KREMLIN', 'LEANING TOWER OF PISA', 'LINCOLN MEMORIAL', 'LONDON EYE', 'LONDON SHARD', 'MACHU PICCHU', 'MAMMOTH CAVE', 'MATTERHORN', 'MOUNT EVEREST', 'MOUNT FIJI', 'MOUNT RUSHMORE', 'NEUSCHWANSTEIN CASTLE', 'NIAGRA FALLS', 'NOTRE DAME', 'ORIENTAL PEARL TOWER', 'PANAMA CANAL', 'PARTHENON', 'PENTAGON', 'PETRA', 'PIKE PLACE MARKET', 'POMPEII', 'REDWOOD FOREST', 'SAGRADA FAMILIA', 'SAINT BASILS CATHEDRAL', 'SISTINE CHAPEL', 'SPACE NEEDLE', 'ST PETERS BASILICA', 'STANLEY PARK', 'STATUE OF LIBERTY', 'STONEHEDGE', 'SYDNEY HARBOR BRIDGE', 'SYDNEY OPERA HOUSE', 'TABLE MOUNTAIN', 'TAJ MAHAL', 'TIMES SQUARE', 'TOKYO TOWER', 'TOWER BRIDGE', 'TRAFALGAR SQUARE', 'TRANSAMERICA PYRAMID', 'TREVI FOUNTAIN', 'ULURU', 'UNION STATION', 'US BANK TOWER', 'VERSAILLES', 'VICTORIA FALLS', 'WASHINGTON MONUMENT', 'WESTMINSTER ABBEY', 'WHITE HOUSE', 'WILLIS TOWER', 'WORLD TRADE CENTER', 'YELLOWSTONE', 'YOSEMITE'];
const foodAndDrink = ['FOOD AND DRINK', 'APPLE', 'APPLE PIE', 'APPLE SAUCE', 'ARTICHOKE', 'ASPARAGUS', 'AVOCADO', 'BACON', 'BAGEL', 'BEEF JERKY', 'BEER', 'BEET', 'BELL PEPPER', 'BISCUIT', 'BLACKBERRY', 'BLUEBERRY', 'BOURBON', 'BREAD', 'BROCCOLI', 'BRUSSEL SPROUTS', 'BUFFALO WINGS', 'BURRITO', 'BUTTER', 'CAESAR SALAD', 'CAKE', 'CALIFORNIA ROLL', 'CANDY CANE', 'CANNED TUNA', 'CARROT', 'CATFISH', 'CAULIFLOWER', 'CHEDDAR CHEESE', 'CHEESEBURGER', 'CHICKEN TENDERS', 'CHICKEN WINGS', 'CHICKPEA', 'CHOCOLATE', 'CHOCOLATE CHIP', 'CHOCOLATE CHIP COOKIE', 'CHURRO', 'CINNAMON', 'CLAM CHOWDER', 'CLEMENTINE', 'COCA COLA', 'COCONUT', 'COFFEE', 'CORN DOG', 'CORN ON THE COB', 'COTTAGE CHEESE', 'CRAB', 'CRAB RANGOON', 'CRACKERS', 'CRANBERRY', 'CRAWFISH', 'CREAM CHEESE', 'CUCUMBER', 'CUPCAKE', 'CURRY', 'DUMPLING', 'EGGPLANT', 'EGGROLL', 'FANTA', 'FRENCH TOAST', 'FRIED RICE', 'FROZEN YOGURT', 'FRUIT PUNCH', 'GARLIC', 'GHOST PEPPER', 'GINGER', 'GNOCCHI', 'GOAT CHEESE', 'GRAPE', 'GRAPEFRUIT', 'GREEN ONION', 'GREEN TEA', 'GROUND BEEF', 'GUACAMOLE', 'GUMMY BEAR', 'HALIBUT', 'HAMBURGER', 'HONEY', 'HOT DOG', 'ICE CREAM', 'IMITATION CRAB', 'INSTANT NOODLES', 'JALAPENO', 'JASMINE TEA', 'JUNGLE JUICE', 'LEMON', 'LIME', 'LIQUORICE', 'MACARONI', 'MAPLE SYRUP', 'MASHED POTATOES', 'MELON', 'MINT', 'MOONCAKE', 'MOZZARELLA', 'MUFFIN', 'MUSHROOM', 'MUSSEL', 'MUTTON', 'NACHOS', 'NOODLES', 'OLIVE', 'ONION', 'ORANGE', 'ORANGE CHICKEN', 'OREO', 'PANCAKE', 'PAPAYA', 'PASSION FRUIT', 'PEACH', 'PEKING DUCK', 'PICKLE', 'PINEAPPLE', 'PIZZA', 'PLANTAIN', 'PLUM', 'POMELO', 'PORKCHOP', 'POT STICKER', 'POTATO', 'POTATO CHIPS', 'PUMPKIN', 'PUMPKIN PIE', 'RADISH', 'RAISIN', 'RAMEN', 'RASBERRY', 'RATATOUILLE', 'RAVIOLI', 'RED ONION', 'RICE', 'SALAD', 'SALSA', 'SANDWICH', 'SARDINES', 'SAUSAGE', 'SCALLOPS', 'SCRAMBLED EGGS', 'SEA URCHIN', 'SEAWEED', 'SESAME SEEDS', 'SKITTLES', 'SMOKED HAM', 'SPAGHETTI', 'SPINACH', 'SPRING ROLL', 'SPRITE', 'STEAK', 'STUFFING', 'SUNFLOWER SEEDS', 'SWEET ONION', 'SWEET POTATO', 'SZECHUAN SAUCE', 'TACO', 'TAMALE', 'TANGERINE', 'TOFFEE', 'TOFU', 'TOMATO', 'TOMATO SOUP', 'TRUFFLES', 'TUNA', 'VANILLA', 'VENISON', 'VODKA', 'WAFFLES', 'WATERMELON', 'WHISKEY', 'WINE', 'YOGURT', 'YAM', 'ZUCCHINI'];
const animals = ['ANIMALS', 'ALLIGATOR', 'ANGLERFISH', 'ANTELOPE', 'ARCTIC FOX', 'ARMADILLO', 'BABOON', 'BADGER', 'BALD EAGLE', 'BANANA SLUG', 'BARRACUDA', 'BEAGLE', 'BEATLE', 'BEAVER', 'BENGAL TIGER', 'BETTA', 'BLACK BASS', 'BLACK BEAR', 'BLUE JAY', 'BLUE MACAW', 'BLUE WHALE', 'BUFFALO', 'BULLDOG', 'CANADIAN GOOSE', 'CARIBOU', 'CATERPILLAR', 'CATTLE', 'CENTIPEDE', 'CHAMELEON', 'CHEETAH', 'CHICKEN', 'CHIMPANZEE', 'CLAM', 'COCKROACH', 'COLT', 'CORAL', 'CORGI', 'COUGAR', 'CRANE', 'CROCODILE', 'CROW', 'EAGLE RAY', 'ELEPHANT', 'EMU', 'FALCON', 'FENNEC FOX', 'FERRET', 'FLAMINGO', 'FLATWORM', 'FROG', 'GAZELLE', 'GECKO', 'GOLDEN RETRIEVER', 'GOLDFISH', 'GRASSHOPPER', 'GRAY WOLF', 'GREAT WHITE SHARK', 'GRIZZLY BEAR', 'HARBOR SEAL', 'HARP SEAL', 'HERMIT CRAB', 'HONEY BADGER', 'HORNBILL', 'HUMAN', 'HUSKY', 'HYEANA', 'JACK RUSSELL TERRIER', 'JAGUAR', 'JAYHAWK', 'JELLYFISH', 'KANGAROO', 'KILLER WHALE', 'KINGFISHER', 'KIWI', 'KOALA', 'KOI', 'LABRADOR RETRIEVER', 'LAND CRAB', 'LEECH', 'LEMUR', 'LEOPARD', 'LION', 'LIONFISH', 'LOBSTER', 'MACKEREL', 'MALLARD', 'MANDRILL', 'MANTA RAY', 'MEERKAT', 'MILLIPEDE', 'MOA', 'MONKEY', 'MOOSE', 'MORAY EEL', 'MUSTANG', 'NEWT', 'OARFISH', 'OCTOPUS', 'OPPOSUM', 'OSPREY', 'OSTRICH', 'OWL', 'OYSTER', 'PANDA', 'PANTHER', 'PARROT', 'PEACOCK', 'PENGUIN', 'PIGEON', 'PITBULL', 'PLATYPUS', 'POLAR BEAR', 'POMERANIAN', 'POODLE', 'PUFFIN', 'RABBIT', 'RACCOON', 'RAINBOW TROUT', 'RAVEN', 'RED FOX', 'RED PANDA', 'RED TAIL DEER', 'REINDEER', 'RHINOCEROS ', 'ROCKFISH', 'SALAMANDER', 'SALMON', 'SCORPION', 'SEA ANEMONE', 'SEA LION', 'SEA OTTER', 'SEA TURTLE', 'SEAGULL', 'SEAHORSE', 'SHREW', 'SHRIMP', 'SIDEWINDER', 'SKUNK', 'SLOTH', 'SLUG', 'SNAIL', 'SNAKE', 'SPARROW', 'SPERM WHALE', 'SPIDER', 'SPONGE', 'SPRINGBOK', 'SQUID', 'SQUIRREL', 'STICK BUG', 'STINGRAY', 'SWIMMING CRAB', 'TASMANIAN DEVIL', 'TERMITE', 'TIGER SHARK', 'TILAPIA', 'TOAD', 'TORTOISE', 'TOUCAN', 'TRUMPETER SWAN', 'TURKEY', 'TURTLE', 'UNICORN', 'VIPER', 'VULTURE', 'WALLABY', 'WALRUS', 'WARTHOG', 'WEASEL', 'WHALE SHARK', 'WILD BOAR', 'WILDCAT', 'WOODPECKER', 'YAK', 'YELLOW TUNA', 'YELLOWJACKET', 'YORKSHIRE TERRIER', 'ZEBRA'];
const instruments = ['MUSICAL INSTRUMENTS', 'ACCORDION', 'BAGPIPE', 'BANJO', 'BARITONE HORN', 'BASS DRUM', 'BASS GUITAR', 'BASSOON', 'BONGO', 'BUGLE', 'CASTANET', 'CAVAQUINHO', 'CELESTA', 'CELLO', 'CLARINET', 'CLAVICHORD', 'CORNET', 'COWBELL', 'CYMBALS', 'DJEMBE', 'DOUBLE BASS', 'DRUM KIT', 'DRUM MACHINE', 'ELECTRIC GUITAR', 'ENGLISH HORN', 'EUPHONIUM', 'FLUGELHORN', 'FLUTE', 'FRENCH HORN', 'GLOCKENSPIEL', 'GONG', 'GRAND PIANO', 'GUITAR', 'HARP', 'HARPSICHORD', 'KEYBOARD', 'LUTE', 'MANDOLIN', 'MARACA', 'MARIMBA', 'OBOE', 'PICCOLO', 'PIPE ORGAN', 'RECORDER', 'SAXAPHONE', 'SNARE DRUM', 'SOUSAPHONE', 'SYNTHESIZER', 'TAMBOURINE', 'TIMPANI', 'TRIANGLE', 'TROMBONE', 'TRUMPET', 'TUBA', 'UKULELE', 'VIBRAPHONE', 'VIOLA', 'VIOLIN', 'XYLOPHONE'];
const singersBands = ['SINGERS/BANDS', 'ACDC', 'ADAM LAMBERT', 'ADELE', 'ARCTIC MONKEYS', 'AMERICAN AUTHORS', 'ARIANA GRANDE', 'AVICII', 'AWOLNATION', 'BASTILLE', 'BEACH BOYS', 'BEATLES', 'BECK', 'BEE GEES', 'BLACK EYED PEAS', 'BLACK SABBATH', 'BLINK ONE EIGHTY TWO', 'BOB DYLAN', 'BON JOVI', 'BOSTON', 'BRUNO MARS', 'CAGE THE ELEPHANT', 'CAPITAL CITIES', 'CARRIE UNDERWOOD', 'THE CHAINSMOKERS', 'COLDPLAY', 'DAVE MATTHEWS BAND', 'DAVID BOWIE', 'DEF LEPPARD', 'DEMI LOVATO', 'DEPECHE MODE', 'DRAKE', 'DURAN DURAN', 'EAGLES', 'ED SHEERAN', 'ELECTRIC LIGHT ORCHESTRA', 'ELLIE GOULDING', 'ELTON JOHN', 'ELVIS PRESLEY', 'EMINEM', 'EUROPE', 'FALL OUT BOY', 'FERGIE', 'FLEETWOOD MAC', 'FLO RIDA', 'FOO FIGHTERS', 'FREDDIE MERCURY', 'FUTURE', 'GENESIS', 'GREEN DAY', 'HEART', 'HUEY LEWIS AND THE NEWS', 'IMAGINE DRAGONS', 'IRON MAIDEN', 'JASON MRAZ', 'JIMI HENDRIX', 'JOURNEY', 'JOHN DENVER', 'JOHN LEGEND', 'JUSTIN BIEBER', 'JUSTIN TIMBERLAKE', 'KENDRICK LAMAR', 'KELLY CLARKSON', 'KINGS OF LEON', 'KURT COBAIN', 'KYGO', 'LADY GAGA', 'LANA DEL RAY', 'LED ZEPPELIN', 'LIL WAYNE', 'LINKIN PARK', 'LYNYRD SKYNYRD', 'MACKLEMORE', 'MAROON FIVE', 'MEGHAN TRAINOR', 'METALLICA', 'MICHAEL JACKSON', 'MGMT', 'MOTORHEAD', 'MUSE', 'NICKELBACK', 'NIRVANA', 'OASIS', 'ONE DIRECTION', 'ONEREPUBLIC', 'OWL CITY', 'OZZY OSBOURNE', 'PASSENGER', 'PASSION PIT', 'PAUL MCCARTNEY', 'PEARL JAM', 'PENTATONIX', 'PETER GABRIEL', 'PHIL COLLINS', 'PINK FLOYD', 'PITBULL', 'THE POLICE', 'PRINCE', 'QUEEN', 'RADIOHEAD', 'RED HOT CHILI PEPPERS', 'REM', 'RIHANNA', 'ROLLING STONES', 'SAM SMITH', 'THE SCRIPT', 'SELENA GOMEZ', 'SHAKIRA', 'SKRILLEX', 'SMASH MOUTH', 'SNOW PATROL', 'STEVIE WONDER', 'STING', 'TAKE THAT', 'TAYLOR SWIFT', 'TRAIN', 'TWENTY ONE PILOTS', 'VAN HALEN', 'THE VERVE', 'WALK THE MOON', 'THE WEEKND', 'THE WHITE STRIPES', 'WHITNEY HOUSTON'];
const vidGameChars = ['VIDEO GAME CHARACTERS', 'AGENT FORTY SEVEN', 'AIDEN PEARCE', 'AJAY GHALE', 'ALAN WAKE', 'ALDUIN', 'ALEX MASON', 'ALTAIR IBN LA AHAD', 'ALYX VANCE', 'ARNO DORIAN', 'ATOQ NAVARRO', 'AUGUSTUS COLE', 'BAYONETTA', 'BIG BOSS', 'BIG DADDY', 'BIG SMOKE', 'BOWSER', 'CAPTAIN FALCON', 'CAPTAIN PRICE', 'CARL JOHNSON', 'CAVE JOHNSON', 'CHARIZARD', 'CHELL', 'CLAPTRAP', 'CLOUD STRIFE', 'CLYDE BLACKBURN', 'COLE MACGRATH', 'COLONEL RADEC', 'COMMANDER SHEPARD', 'CONNOR KENWAY', 'CORTANA', 'CORVO ATTANO', 'CRASH BANDICOOT', 'DANIEL EDWARDS', 'DANTE', 'DESMOND MILES', 'DIABLO', 'DIDDY KONG', 'DOCTOR MADNAR', 'DONKEY KONG', 'DOOMGUY', 'DOVAHKIIN', 'DUKE NUKEM', 'EDDY RAJA', 'EDWARD JAMES KENWAY', 'EDWARD RICHTOFEN', 'ELENA FISHER', 'ELLIE', 'EMMETT GRAVES', 'EZIO AUDITORE DA FIRENZE', 'FAITH', 'FALCO', 'FOX MCCLOUD', 'FRANK TENPENNY', 'FRANK WOODS', 'FRANKLIN CLINTON', 'FREDDY FAZBEAR', 'FREDERICK BISHOP', 'GABRIEL ROMAN', 'GANONDORF', 'GARRUS VAKARIAN', 'GERALT OF RIVIA', 'GLADOS', 'GORDON FREEMAN', 'GRAY FOX', 'GRENINJA', 'HECTOR ALCAZAR', 'HEIHACHI MISHIMA', 'ICE CLIMBERS', 'ISSAC CLARKE', 'IVYSAUR', 'JACK FOSTER', 'JACK JOYCE', 'JACOB FRYE', 'JAINA PROUDMOORE', 'JAK AND DEXTER', 'JASON BRODY', 'JIGGLYPUFF', 'JIM RAYNOR', 'JOEL', 'JOHN MARSTON', 'JOHNNY CAGE', 'KING DEDEDE', 'KIRBY', 'KOOPA TROOPA', 'KOTAL KAHN', 'KRATOS', 'KYLE SCHNEIDER', 'LARA CROFT', 'LEON KENNEDY', 'LINK', 'LIQUID SNAKE', 'LITTLE MAC', 'LUCA COCCHIOLA', 'LUCARIO', 'LUCAS', 'LUCINA', 'LUIGI', 'MARCUS FENIX', 'MARCUS HOLLOWAY', 'MARIO', 'MARTH', 'MASTER CHIEF', 'MAX PAYNE', 'MCMANUS', 'MEGA MAN', 'META KNIGHT', 'MEWTWO', 'MICHAEL DE SANTA', 'MR GAME AND WATCH', 'NADINE ROSS', 'NATHAN DRAKE', 'NERO', 'NESS', 'NIKO BELLIC', 'OLGA GURLUKOVICH', 'OLIMAR', 'PAC MAN', 'PAGAN MIN', 'PALUTENA', 'PARAPPA', 'PEACH', 'PEASHOOTER', 'PICHU', 'PIKACHU', 'PIT', 'PRINCE OF PERSIA', 'PROFESSOR OAK', 'QBERT', 'RAFE ADLER', 'RAIDEN', 'RATCHET AND CLANK', 'REVOLVER OCELOT', 'RIKA RAJA', 'ROMAN BELLIC', 'RYU', 'SACKBOY', 'SAM DRAKE', 'SAM FISHER', 'SAMUS', 'SARAH KERRIGAN', 'SCORPION', 'SEBASTIAN CASTELLANOS', 'SERGEI GURLUKOVICH', 'SHEIK', 'SHODAN', 'SHULK', 'SHY GUY', 'SLY COOPER', 'SOAP MACTAVISH', 'SOLID SNAKE', 'SONIC', 'SONYA BLADE', 'SORA', 'SPACE CORE', 'SPIKE', 'SPYRO', 'SQUIRTLE', 'STARKILLER', 'SUB ZERO', 'SWEET TOOTH', 'TALBOT', 'TALION', 'TANK DEMPSEY', 'TOWNSEND', 'TRACER', 'TREVOR PHILIPS', 'TRICO', 'URIEL SEPTIM', 'VAAS MONTENEGRO', 'VAULT BOY', 'VENOM SNAKE', 'VICTOR SULLIVAN', 'VIKTOR REZNOV', 'VIRGIL', 'WARIO', 'WHEATLEY', 'WIDOWMAKER', 'WILLIAM BLAZKOWICZ ', 'WINSTON', 'YOSHI', 'ZARA GHUFRAN', 'ZELDA', 'ZORAN LAZAREVIC'];
const comicChars = ['COMIC CHARACTERS', 'AMANDA WALLER', 'ANTMAN', 'AQUAMAN', 'ARCHANGEL', 'BATMAN', 'BAYMAX', 'BLACK PANTHER', 'BLACK WIDOW', 'BLADE', 'CAPTAIN AMERICA', 'CAPTAIN BOOMERANG', 'CATWOMAN', 'COLOSSUS', 'CROSSBONES', 'CYBORG', 'DEADPOOL', 'DEADSHOT', 'DOCTOR DOOM', 'DOCTOR STRANGE', 'DRAX THE DESTROYER', 'EL DIABLO', 'ENCHANTRESS', 'FALCON', 'FLASH', 'FORGE', 'GAMORA', 'GHOST RIDER', 'GREEN LANTERN', 'GROOT', 'HARLEY QUINN', 'HAWKEYE', 'HIRO TAKACHIHO', 'HUMAN TORCH', 'HYPERION', 'ICEMAN', 'INCREDIBLE HULK', 'INVISIBLE WOMAN', 'IRON MAN', 'JACKAL', 'JEAN GREY', 'JOKER', 'KATANA', 'KILLER CROC', 'KORATH', 'LOKI', 'LUKE CAGE', 'MAGIK', 'MAGNETO', 'MISTER FANTASTIC', 'NEBULA', 'NICK FURY', 'NIGHTCRAWLER', 'ODIN', 'OLD MAN LOGAN', 'PHIL COULSON', 'PROFESSOR X', 'PSYLOCKE', 'QUICKSILVER', 'RED SKULL', 'RICK FLAG', 'ROBIN', 'ROCKET RACCOON', 'RONAN THE ACCUSER', 'SABRETOOTH', 'SCARLET WITCH', 'SILVER SURFER', 'SLIPKNOT', 'SPIDERGIRL', 'SPIDERMAN', 'STAR LORD', 'STEEL', 'STORM', 'SUPERGIRL', 'SUPERMAN', 'THANOS', 'THING', 'THOR', 'ULTRON', 'VINDICATOR', 'VISION', 'WAR MACHINE', 'WASP', 'WINTER SOLDIER', 'WOLVERINE', 'WONDER WOMAN', 'YONDU UDONTA'];
const categories = [usCities, worldCities, landmarks, foodAndDrink, animals, instruments, singersBands, vidGameChars, comicChars];
let word = "";
let blanks = 0;
let strikes = 0;
let maxStrikes = 10;
let letters = [];
let guessList = [];


function setRandomCategory() {
    let n = Math.floor(Math.random() * categories.length);
    setWord(categories[n]);
}

function setWord(category) {
    letters = [];
    guessList = [];
    blanks = 0;
    strikes = 0;
    document.getElementById("messageBox").innerHTML = "";
    document.getElementById("categoryText").innerHTML = "<h2>Category: " + category[0] + " (" + (category.length - 1) + ")</h2>";
    document.getElementById("word").innerHTML = "";
    word = category[Math.floor(Math.random() * category.length) + 1];
    for (let i = 0; i < word.length; i++) {
        if (word[i] != " ") {
            letters.push("_ ");
            blanks++;
        }
        else {
            letters.push("&emsp;");
        }
        document.getElementById("word").innerHTML += letters[i];
    }
    // console.log(word); // Console output
    document.getElementById("userInput").innerHTML = "<input type='text' id='guess' pattern='[A-Z a-z]*' onchange='checkGuess(word)'></input>";
}

function checkGuess(word) {
    const guess = document.getElementById("guess").value.toUpperCase();
    const wordText = document.getElementById("word");
    const messageBox = document.getElementById("messageBox");

    // Check if the letter has already been guessed
    let letterGuessed = false;
    for (let i = 0; i < guessList.length; i++) {
        if (guess == guessList[i]) {
            messageBox.innerHTML = "You already guessed that!";
            document.getElementById("guess").value = "";
            letterGuessed = true;
        }
    }
    // Check if the letter is in the word if the letter has not already been guessed
    if (letterGuessed == false) {
        let guessInWord = false;
        wordText.innerHTML = "";
        // Check if the letter is in the word
        for (let i = 0; i < word.length; i++) {
            if (guess == word[i]) {
                guessInWord = true;
                letters[i] = word[i];
                blanks--;
                messageBox.innerHTML = "";
            }
            wordText.innerHTML += letters[i]
        }
        guessList.push(guess);
        document.getElementById("guess").value = "";
        let guessListText = "";
        for (let i = 0; i < guessList.length; i++) {
            guessListText += guessList[i] + "<br>";
        }
        document.getElementById("guessedLetters").innerHTML = "<b>Guesses</b>: <br><br>" + guessListText;
        // Check if the guess is the word
        if (guess == word) {
            messageBox.innerHTML = "You win!";
            wordText.innerHTML = word;
            clearGameArea();
            return;
        }
        // If all the letters have been guessed
        if (blanks == 0) {
            messageBox.innerHTML = "You win!";
            clearGameArea();
            return;
        }
        // If the guess was not in the word
        if (guessInWord == false) {
            strikes++;
            document.getElementById("strikeCounter").innerHTML = "Strikes: " + strikes + " / " + maxStrikes;
            document.getElementById("guess").value = "";
        }
        // If the max number of strikes was reached
        if (strikes == maxStrikes) {
            wordText.innerHTML = word;
            messageBox.innerHTML = "You lose!";
            clearGameArea();
            return;
        }
    }
}

function clearGameArea() {
    document.getElementById("guess").value = "";
    document.getElementById("strikeCounter").innerHTML = "";
    document.getElementById("userInput").innerHTML = "";
    document.getElementById("guessedLetters").innerHTML = "";
}