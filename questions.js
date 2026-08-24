// Original, style-matched HSPT practice questions — not reproductions of any real exam.
// Schema: every choice has its own explanation, so review feedback is specific to
// whichever answer the student actually picked, not just the correct one.
// choices: { LETTER: { text, explain } }, correct: 'LETTER'

const PASSAGES = {
  p1: `Honeybees communicate the location of food sources to other members of their hive through a movement known as the waggle dance. By moving in a figure-eight pattern and vibrating its body, a bee can indicate both the direction and distance of a flower patch relative to the sun. Scientists have found that the angle of the dance corresponds to the angle between the sun and the food source, while the duration of the waggle portion indicates how far away the source lies. This remarkable form of communication allows a hive to efficiently direct large numbers of foragers to the most productive locations without any single bee needing to guide the others directly.`,
  p2: `Elena had practiced the same eight measures for nearly an hour, her bow arm aching and her patience thinning. Her teacher, however, showed no sign of ending the lesson. "Again," he said simply, not unkindly, but with the quiet certainty of someone who has taught this passage a hundred times before. Elena set her jaw, lifted the violin, and began once more. This time, on the fifth measure, something shifted — the note rang clear and full, exactly as it was meant to. Her teacher's expression did not change, but he nodded once. It was enough.`,
  p3: `Some of the most remote islands on Earth were never connected to any continent. Instead, they formed directly from the ocean floor as volcanic activity built up layers of cooled lava over thousands of years. As magma rises through a weak point in the earth's crust, it cools upon contact with seawater, gradually forming rock. Repeated eruptions over time can raise this rock above the surface, creating new land. Because these islands rise independently from the sea rather than breaking off a larger landmass, the plants and animals that eventually populate them must arrive by wind, water, or wing, making their ecosystems especially unique.`,
  p4: `Marcus had fallen off his skateboard so many times that the scrape on his elbow had become a familiar sight. His older sister, watching from the porch, called out the same advice she always did: "Bend your knees, look ahead, not down." He rolled his eyes, certain he already knew this. But this time, as he pushed off down the driveway, he tried it anyway — knees bent, eyes fixed on the tree at the end of the path, not on his feet. The board wobbled once, twice, and then, to his own surprise, steadied beneath him. He did not look down at his elbow. He did not look down at all.`,
  p5: `Before the mid-1400s, books in Europe were copied by hand, a process so slow that a single volume could take months to complete. This made books rare and expensive, limiting reading to a small number of wealthy or religious institutions. The introduction of the movable-type printing press changed this dramatically. By arranging individual metal letters that could be reused for different pages, printers could produce dozens of copies of a text in the time it once took to copy a single page by hand. Within decades, printed books spread across Europe, making written knowledge available to a far wider audience than ever before.`,
  p6: `Every autumn, the Arctic tern begins one of the longest migrations of any animal on Earth, traveling nearly 25,000 miles from the Arctic to the Antarctic and back again each year. Scientists tracking the birds with tiny leg-mounted sensors discovered that many terns take winding, indirect routes, likely following wind patterns that make the long journey less exhausting than a straight path would be. Because the tern experiences two summers each year — one in each hemisphere — researchers believe it may see more daylight over its lifetime than any other creature on the planet.`,
  p7: `Daniela stood at the edge of the diving board for the fourth time that afternoon, her toes curled over the rough edge. Below her, the water looked impossibly far away, though she knew it was only ten feet. Her coach hadn't said a word the last three times she'd climbed back down the ladder without jumping. This time, instead of looking down, she looked straight out at the horizon, took a breath, and stepped off before she could change her mind. The fall lasted only a second, but the moment she surfaced, grinning and out of breath, felt much longer.`,
  p8: `Before mechanical refrigeration became common in homes during the early 1900s, many households relied on ice harvested from frozen lakes and rivers during winter. Workers would cut large blocks of ice and store them in insulated icehouses packed with sawdust, which could keep the ice from melting for months. Ice was then delivered door to door by wagon, and families used iceboxes — insulated cabinets, not unlike modern refrigerators — to keep food cool until the next delivery. This entire industry largely disappeared within a few decades once electric refrigerators became affordable enough for ordinary households.`,
  p9: `Every Sunday, Marcus's grandfather insisted on cooking dinner exactly the way his own mother had taught him decades earlier, refusing to measure a single ingredient. "You'll know when it's right," he always said, tapping his temple. Marcus, ever precise, spent months secretly writing down approximate measurements after each visit, determined to recreate the recipe on his own. The first time he cooked it alone and it tasted almost right, he called his grandfather immediately, half expecting to be scolded for reducing the recipe to numbers. Instead, his grandfather just laughed and said, "Now you know it too."`,
  p10: `Beneath many forests lies a vast underground network of fungal threads that connect the roots of different trees, sometimes spanning entire hillsides. Scientists have found that trees use this network, often nicknamed the "wood wide web," to share nutrients with weaker or younger trees nearby, and even to send warning signals when insects begin attacking their leaves. Older, larger trees — sometimes called "mother trees" — appear to funnel extra resources to seedlings growing in their shade, suggesting a level of cooperation between trees that scientists once assumed didn't exist in what they had considered a purely competitive plant world.`,
  p11: `Deep beneath the ocean's surface, where sunlight never reaches, many creatures produce their own light through a chemical reaction known as bioluminescence. Anglerfish use a glowing lure to attract prey directly to their mouths, while some species of squid release glowing ink to confuse predators rather than simply hiding behind a dark cloud. Scientists estimate that the majority of deep-sea animals possess some form of bioluminescence, making it one of the most common forms of communication and defense in an environment where eyesight alone would otherwise be nearly useless.`,
  p12: `Theo had been practicing the same violin piece for weeks, and every night his younger sister would knock on his door, asking when he'd finally "get it right." He never answered, mostly because he wasn't sure himself. But the night before his recital, something clicked; his fingers found each note without him having to think about where they belonged. When his sister knocked that night, he opened the door and, for the first time, played it start to finish without a single mistake. She didn't say anything. She just sat down on his bed and listened until he finished.`,
  p13: `Long before the zipper became a standard part of clothing, most garments relied on buttons, hooks, or laces to stay closed, all of which took considerably more time to fasten. Early versions of the zipper, first patented in the late 1800s, were unreliable and prone to snagging, which kept them out of everyday clothing for decades. It wasn't until manufacturing improvements in the 1920s and 1930s made the mechanism smoother and more durable that zippers began appearing widely in jackets, boots, and eventually nearly every type of clothing.`,
  p14: `Priya arrived twenty minutes early for her first shift, half-hoping no one would notice how nervous she was. The kitchen was already a blur of motion — pans clattering, orders being called out, someone laughing near the walk-in fridge. The head chef glanced at her only once, tossed her an apron, and said, "Watch first, then jump in whenever you're ready." She expected to feel out of place all night. Instead, by the time she finally picked up a knife an hour later, it felt less like being thrown in and more like finally being let in.`,
  p15: `Ocean tides rise and fall largely due to the gravitational pull of the moon, which tugs on the Earth's oceans as it orbits. Because the moon's pull is strongest on the side of the Earth facing it, water bulges outward on that side, creating a high tide, while a second bulge forms on the opposite side of the planet due to inertia. As the Earth rotates through these two bulges roughly once a day, most coastlines experience two high tides and two low tides within about 24 hours.`,
  p16: `Over thousands of years, massive sheets of ice called glaciers have carved much of the world's mountainous terrain, grinding against rock as they slowly creep forward under their own weight. As a glacier moves, it picks up boulders and debris, using them almost like sandpaper to scrape and reshape the valleys below. When a glacier eventually melts or retreats, it often leaves behind distinctive U-shaped valleys, quite different from the narrower V-shaped valleys typically carved by rivers. Studying these leftover landforms allows scientists to map where ancient glaciers once existed, even in regions that have been ice-free for thousands of years.`,
  p17: `Amara had rebuilt her volcano model three times, each attempt collapsing before the baking soda and vinegar ever had a chance to erupt. Her older brother, home for the weekend, offered to just build it for her the fourth time. She almost said yes. Instead, she asked him to explain what was going wrong instead of fixing it himself. Twenty minutes and one wobbly cardboard support later, her fourth attempt held together — and when the reaction finally bubbled over the sides at the science fair the next day, it was hers, mistakes and all.`,
  p18: `Before the telegraph, sending a message across the country could take weeks, carried by horseback riders or ships. When the first successful long-distance telegraph lines were built in the mid-1800s, messages that once took weeks could suddenly arrive in minutes, transmitted as electrical pulses along a wire and translated using Morse code. Newspapers were among the earliest to benefit, publishing news from distant cities on the same day it happened rather than long after the fact. The telegraph's speed fundamentally changed how businesses, governments, and ordinary people thought about distance and time.`,
  p19: `For the first month in their new apartment, Diego kept reaching for the light switch on the wrong wall, out of habit from their old place. His mother laughed the first few times, then eventually stopped noticing it at all — she'd started doing the same thing with the kitchen drawers. It wasn't until Diego caught himself, without thinking, walking straight to the right switch one evening that he realized the new apartment had quietly become the place his hands now expected first.`,
  p20: `A rainbow appears when sunlight passes through raindrops suspended in the air, bending and separating into its different wavelengths as it enters and exits each droplet. Because each color bends at a slightly different angle, the light spreads out into the familiar band of colors, always appearing in the same order from red to violet. A rainbow is not a fixed object in one location; its position depends entirely on where the viewer is standing relative to the sun and the rain, which is why two people standing apart are technically looking at two slightly different rainbows at the same time.`,
  p21: `Each fall, millions of monarch butterflies travel up to 3,000 miles from the United States and Canada to a small region of central Mexico, where they cluster by the millions in the same forests their ancestors used generations earlier. No single butterfly completes the full round trip; the journey instead spans three or four generations, with each new generation continuing the route somehow without ever having traveled it before. Scientists still debate exactly how this multigenerational memory is passed down, though many suspect a combination of the sun's position and the Earth's magnetic field play a role in guiding them.`,
  p22: `Every piece Naomi threw on the wheel came out lopsided, collapsing into a shapeless lump the moment she tried to raise the walls higher. Her instructor never touched the clay for her, only adjusting her hands slightly and saying, "Slower. Let it come to you." After two months of nothing but crooked bowls, she stopped trying to force the clay upward all at once. The bowl that emerged that evening wasn't perfect, but it stood straight, and for the first time, she understood what her instructor had meant all along.`,
  p23: `The modern pencil traces back to a large graphite deposit discovered in England during the 1500s, which local shepherds initially used to mark their sheep. Because pure graphite is soft and breaks easily, early users wrapped strips of it in string or sheepskin to make it easier to hold. It wasn't until the late 1700s that manufacturers began encasing thin graphite rods in wood, creating the recognizable pencil shape still used today. Interestingly, the material has never actually contained lead; the ongoing use of the word "lead" to describe pencil cores is a holdover from the graphite's early nickname, "black lead."`,
  p24: `When Malik found out his best friend was moving across the country, he spent an entire week convinced there was nothing left to say that wouldn't sound hollow. On the morning of the move, he showed up anyway, holding a shoebox full of ticket stubs, notes, and photos from six years of friendship, saying nothing as he handed it over. His friend opened it, laughed at a movie ticket from a film neither of them even remembered seeing, and for a moment, the goodbye felt less like an ending and more like proof of everything that had already happened.`,
  p25: `Sinkholes form when water gradually dissolves soluble rock, such as limestone, that lies beneath the soil's surface, hollowing out underground cavities over many years. As the cavity grows large enough, the ground above it can no longer support its own weight, and the surface abruptly collapses, sometimes swallowing roads, trees, or even entire structures within seconds. Because the erosion process happens slowly and invisibly underground, sinkholes often appear with little to no warning, which is why regions with large limestone deposits are closely monitored for early signs of ground instability.`,
  p26: `Unlike most birds, owls can fly almost completely silently, a trait that gives them a significant hunting advantage over prey with sharp hearing. The secret lies largely in the structure of their feathers: the leading edge of an owl's wing feather has a comb-like fringe that breaks up the turbulent air passing over the wing, while a soft, velvety texture on the surface absorbs sound that would otherwise be produced by friction. Engineers studying owl flight have used these same principles to design quieter fans, wind turbines, and even aircraft components, hoping to replicate nature's solution to a problem humans have struggled with for decades.`,
  p27: `Two days before the competition, the robot's arm kept freezing mid-motion, and no one on the team could figure out why. Jasmine wanted to scrap the arm design entirely and start over. Marcus insisted they just needed more time to debug it. Instead of picking a side, their captain suggested testing both approaches for one hour each, side by side, before deciding anything. By the end of the two hours, they'd found the actual problem — a loose wire neither original plan would have caught — and fixed the arm with time to spare.`,
  p28: `For centuries, umbrellas were used almost exclusively as protection from the sun rather than rain, particularly in ancient China and Egypt, where they were often symbols of status carried by servants for nobility. Waterproofing umbrellas for rain became more common in Europe by the 1700s, though early versions were heavy, made from oiled canvas stretched over whalebone ribs. It wasn't until the mid-1800s, when steel ribs replaced whalebone, that umbrellas became light and affordable enough for ordinary people to carry them as everyday rain protection rather than as a luxury item.`,
  p29: `Malik had rehearsed his presentation forty times in the mirror, and it never once caught in his throat the way he feared it would in front of the class. When his turn finally came, the first word stuck anyway, just as he'd dreaded. He paused, took a breath the way his speech therapist had taught him, and started the sentence again. No one laughed. By the third slide, he'd stopped noticing the room entirely, focused only on the argument he'd worked so hard to build.`,
  p30: `That sharp, sudden pain from eating something cold too quickly, often called "brain freeze," happens when cold food or drink touches the roof of the mouth, rapidly cooling blood vessels there. In response, blood vessels in the area briefly constrict and then rapidly dilate again, a reaction your brain appears to misread as pain coming from the head rather than the mouth. This phenomenon, known scientifically as sphenopalatine ganglioneuralgia, usually fades within a minute or two, and can often be avoided simply by eating cold foods more slowly or warming them against the roof of the mouth with the tongue.`,
  p31: `GPS receivers determine location by measuring the time it takes for signals to travel from multiple satellites orbiting roughly 12,000 miles above Earth. Because radio signals travel at a known, constant speed, a receiver can calculate its distance from each satellite based on how long the signal took to arrive. By combining distance measurements from at least four different satellites, the receiver can pinpoint its exact position through a process called trilateration. Even a tiny timing error of a few nanoseconds can throw off a location reading by several feet, which is why GPS satellites carry extremely precise atomic clocks.`,
  p32: `Every time Elena approached a four-way stop, her hands tightened on the wheel, certain she'd misjudge whose turn it was. Her driving instructor never once took the wheel from her, even when she hesitated a beat too long and someone honked. "You have time to think," he said calmly, the fourth time it happened. "Just not forever." By her road test three weeks later, she rolled through the intersection near the testing center without a single hesitation, and didn't even notice she'd done it until the examiner marked it correct.`,
  p33: `Long before chocolate became a sweet treat, ancient Mesoamerican cultures such as the Maya and Aztec prepared cacao as a bitter, frothy drink, often mixed with chili peppers and spices rather than sugar. Cacao beans were so valuable that they were sometimes used as a form of currency. When Spanish explorers brought cacao back to Europe in the 1500s, sugar was added to suit European tastes, gradually transforming the bitter beverage into something closer to the sweet chocolate recognized today. It wasn't until the mid-1800s that inventors developed methods for making solid chocolate bars, moving the treat away from its origins purely as a drink.`,
  p34: `Going into the final lap, Owen was nearly a full body length behind the leader, and every instinct told him the race was already decided. His coach had drilled one thing into him all season: finish strong regardless of position. He kept his stroke rate steady rather than panicking into a sloppier, faster one, trusting the technique he'd practiced for months. He touched the wall a hundredth of a second before the swimmer beside him, in third place — not first, but ahead of where panic would have left him.`,
  p35: `Lightning forms when static electrical charges build up within a storm cloud, typically with negative charges collecting near the base of the cloud and positive charges gathering near the top. As this charge difference grows large enough, it can overcome the insulating properties of air, creating a sudden electrical discharge, either within the cloud, between clouds, or between a cloud and the ground. A single lightning bolt can heat the surrounding air to roughly five times hotter than the surface of the sun, causing the air to expand explosively and produce the sound known as thunder.`,
  p36: `Vaccines work by training the immune system to recognize a specific virus or bacteria without causing the actual illness, typically by introducing a weakened, inactivated, or partial version of the pathogen. In response, the immune system produces antibodies and memory cells that remain in the body long after the vaccine is given. If the real pathogen is encountered later, these memory cells allow the immune system to respond far more quickly and effectively than it would during a first-time infection, often stopping the illness before symptoms even appear. This is why some vaccines require multiple doses over time, to help the immune system build a stronger and longer-lasting memory response.`,
  p37: `Every game against his older cousin ended the same way — a quick checkmate within the first ten moves, and a demonstration of exactly which move had doomed him from the start. For months, eight-year-old Theo begged to play something else instead. His cousin refused, insisting that losing to the same trap enough times was the only way he'd stop falling into it. The day Theo finally saw the trap coming three moves early and sidestepped it entirely, his cousin didn't offer a single correction. He just reset the board and said, "Again, but harder this time."`,
  p38: `The earliest eyeglasses, developed in Italy during the late 1200s, consisted of two magnifying lenses joined by a rivet and balanced awkwardly on the bridge of the nose, since arms that hooked behind the ears weren't added until centuries later. For hundreds of years, eyeglasses remained a luxury item, often custom-made and expensive, limiting their use mostly to scholars, clergy, and the wealthy. It wasn't until manufacturing techniques improved during the Industrial Revolution that glasses became affordable and widely available, transforming them from a rare luxury into an everyday tool used by millions of people with vision problems.`,
  p39: `Mia's hands had shaken so badly during her audition that she'd fumbled through a piece she'd played perfectly a hundred times at home. The rejection letter that followed felt less like feedback and more like confirmation of everything she'd feared about herself. Her teacher didn't offer comforting words about the judges being wrong. Instead, she asked Mia to play the same piece, right there, in front of just the two of them. When Mia finished without a single shaky note, her teacher simply said, "The piece was never the problem. Let's work on the shaking."`,
  p40: `A mirage occurs when light bends as it passes through layers of air with different temperatures, most commonly near hot road surfaces or deserts. Near the ground, intensely heated air is less dense than the cooler air above it, and light traveling through this boundary bends upward toward an observer's eyes, creating the illusion of a reflective, water-like surface in the distance. What appears to be a puddle on a hot highway is actually a distorted reflection of the sky, bent into view by the temperature difference rather than any actual liquid present on the road.`
};

const QUESTIONS = {

  verbal: [
    { id:'v1', skill:'Synonyms', prompt:'Choose the word that means the same as CANDID.', correct:'B',
      choices:{
        A:{text:'Dishonest', explain:'Candid actually means openly honest, which is the reverse of dishonest.'},
        B:{text:'Frank', explain:'Frank means direct and honest, which is exactly what candid means.'},
        C:{text:'Timid', explain:'Timid describes shyness, not honesty — unrelated to what candid means.'},
        D:{text:'Elaborate', explain:'Elaborate describes detail or complexity, not honesty.'}
      } },
    { id:'v2', skill:'Antonyms', prompt:'Choose the word most nearly opposite to FRUGAL.', correct:'B',
      choices:{
        A:{text:'Thrifty', explain:'Thrifty is actually a synonym of frugal, not its opposite.'},
        B:{text:'Wasteful', explain:'Frugal means careful with resources, so wasteful is its direct opposite.'},
        C:{text:'Modest', explain:'Modest describes humility, not spending habits, so it is not a true opposite of frugal.'},
        D:{text:'Careful', explain:'Careful is another synonym of frugal, not an opposite.'}
      } },
    { id:'v3', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'D',
      choices:{
        A:{text:'Salmon', explain:'Salmon is a fish, fitting the category shared by three of the four choices.'},
        B:{text:'Trout', explain:'Trout is also a fish, matching the shared category.'},
        C:{text:'Bass', explain:'Bass is a fish as well, consistent with the rest of the group.'},
        D:{text:'Dolphin', explain:'Unlike the others, a dolphin is a mammal, not a fish, which is why it does not belong.'}
      } },
    { id:'v4', skill:'Syllogisms', prompt:'All poets are dreamers. Some dreamers are painters. Therefore:', correct:'C',
      choices:{
        A:{text:'All poets are painters', explain:'This overstates the connection — the second sentence never claims all painters overlap with poets.'},
        B:{text:'Some painters are poets', explain:'This feels plausible but is not guaranteed — the painters mentioned could be entirely different dreamers than the poets.'},
        C:{text:'No valid conclusion can be drawn', explain:'The statements only guarantee overlap between dreamers and painters, not between poets and painters specifically.'},
        D:{text:'All painters are dreamers', explain:'This reverses the original statement without support — we only know some dreamers are painters, not all painters are dreamers.'}
      } },
    { id:'v5', skill:'Analogies', prompt:'Puppy is to dog as cub is to ___.', correct:'B',
      choices:{
        A:{text:'Forest', explain:'Forest describes a habitat, not a young-to-adult animal relationship.'},
        B:{text:'Bear', explain:'A puppy is a young dog, so following the same pattern, a cub is a young bear.'},
        C:{text:'Den', explain:'Den describes where a cub might live, not what it grows into.'},
        D:{text:'Baby', explain:'Baby is a generic term for a young creature, but the pattern calls for a specific adult animal, like the dog/puppy pairing.'}
      } },
    { id:'v6', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'B',
      choices:{
        A:{text:'Whisper', explain:'Whisper fits the quiet-speech category shared by three of the four choices.'},
        B:{text:'Shout', explain:'Shout is the only loud form of speech here, making it the one that does not match the others.'},
        C:{text:'Murmur', explain:'Murmur is another quiet form of speech, matching the shared category.'},
        D:{text:'Mutter', explain:'Mutter also describes quiet, low speech, fitting with the group.'}
      } },
    { id:'v7', skill:'Syllogisms', prompt:'No fish are mammals. All whales are mammals. Therefore:', correct:'A',
      choices:{
        A:{text:'No whales are fish', explain:'Since no fish are mammals, and whales are mammals, whales cannot also be fish.'},
        B:{text:'All whales are fish', explain:'This directly contradicts the first statement, which rules out any overlap between fish and mammals.'},
        C:{text:'Some whales are fish', explain:'Even partial overlap is ruled out, since the first statement excludes all fish from being mammals.'},
        D:{text:'No conclusion can be drawn', explain:'A conclusion can actually be drawn — the two statements combine to rule out whales being fish.'}
      } },
    { id:'v8', skill:'Synonyms', prompt:'Choose the word that means the same as METICULOUS.', correct:'B',
      choices:{
        A:{text:'Careless', explain:'Careless is nearly the opposite of meticulous, which describes careful attention to detail.'},
        B:{text:'Thorough', explain:'Meticulous means showing great care and attention to detail, matching thorough closely.'},
        C:{text:'Hasty', explain:'Hasty implies rushing, which is the opposite of the careful attention meticulous describes.'},
        D:{text:'Confused', explain:'Confused describes a lack of clarity, unrelated to the careful precision meticulous conveys.'}
      } },
    { id:'v9', skill:'Synonyms', prompt:'Choose the word that means the same as RETICENT.', correct:'B',
      choices:{
        A:{text:'Talkative', explain:'Talkative describes someone who speaks a lot, the opposite of what reticent describes.'},
        B:{text:'Reserved', explain:'Reticent describes someone reluctant to speak freely, which matches reserved closely.'},
        C:{text:'Angry', explain:'Anger is an emotion unrelated to how much someone speaks.'},
        D:{text:'Foolish', explain:'Foolish describes poor judgment, not a tendency to stay quiet.'}
      } },
    { id:'v10', skill:'Antonyms', prompt:'Choose the word most nearly opposite to BENEVOLENT.', correct:'B',
      choices:{
        A:{text:'Kind', explain:'Kind is a synonym of benevolent, not its opposite.'},
        B:{text:'Malicious', explain:'Benevolent means kind and well-meaning, so malicious, meaning intending harm, is its opposite.'},
        C:{text:'Generous', explain:'Generous is closely related to benevolent, not opposite to it.'},
        D:{text:'Wealthy', explain:'Wealthy describes money, not intention toward others, so it is not a true opposite.'}
      } },
    { id:'v11', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'D',
      choices:{
        A:{text:'Oak', explain:'Oak is a type of tree, fitting the shared category.'},
        B:{text:'Maple', explain:'Maple is also a tree, matching the group.'},
        C:{text:'Birch', explain:'Birch is a tree as well, consistent with the others.'},
        D:{text:'Granite', explain:'Unlike the others, granite is a type of rock, not a tree, making it the one that does not belong.'}
      } },
    { id:'v12', skill:'Analogies', prompt:'Author is to book as composer is to ___.', correct:'B',
      choices:{
        A:{text:'Orchestra', explain:'An orchestra performs music, but it is not the specific work a composer creates, the way a book is what an author creates.'},
        B:{text:'Symphony', explain:'An author creates a book; following the same pattern, a composer creates a symphony.'},
        C:{text:'Piano', explain:'A piano is an instrument used to compose or perform, not the finished work itself.'},
        D:{text:'Concert', explain:'A concert is an event where music is performed, not the work a composer produces.'}
      } },
    { id:'v13', skill:'Syllogisms', prompt:'All squares are rectangles. All rectangles have four sides. Therefore:', correct:'A',
      choices:{
        A:{text:'All squares have four sides', explain:'Since all squares are rectangles, and all rectangles have four sides, all squares must have four sides too.'},
        B:{text:'All rectangles are squares', explain:'This reverses the original statement — not all rectangles meet the extra requirements of a square.'},
        C:{text:'Some four-sided figures are not squares', explain:'This may be true in general, but it is not the conclusion that follows directly from these two specific statements.'},
        D:{text:'No conclusion can be drawn', explain:'A conclusion can be drawn here — the two statements combine directly to guarantee squares have four sides.'}
      } },
    { id:'v14', skill:'Synonyms', prompt:'Choose the word that means the same as OBSTINATE.', correct:'B',
      choices:{
        A:{text:'Flexible', explain:'Flexible describes willingness to change, the opposite of what obstinate means.'},
        B:{text:'Stubborn', explain:'Obstinate means refusing to change one\'s mind, matching stubborn closely.'},
        C:{text:'Weak', explain:'Weak describes a lack of strength, unrelated to stubbornness.'},
        D:{text:'Curious', explain:'Curious describes interest in learning, unrelated to obstinate\'s meaning.'}
      } },
    { id:'v15', skill:'Antonyms', prompt:'Choose the word most nearly opposite to TRANSPARENT.', correct:'B',
      choices:{
        A:{text:'Clear', explain:'Clear is a synonym of transparent, not its opposite.'},
        B:{text:'Opaque', explain:'Transparent means able to be seen through, so opaque, meaning not able to be seen through, is its opposite.'},
        C:{text:'Fragile', explain:'Fragile describes how easily something breaks, unrelated to transparency.'},
        D:{text:'Bright', explain:'Bright describes light level, not the property of being seen through.'}
      } },
    { id:'v16', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'B',
      choices:{
        A:{text:'Whale', explain:'A whale is a mammal, matching the shared category of the other choices except one.'},
        B:{text:'Shark', explain:'Unlike the others, a shark is a fish, not a mammal, making it the one that does not belong.'},
        C:{text:'Dolphin', explain:'A dolphin is a mammal, fitting the shared category.'},
        D:{text:'Seal', explain:'A seal is also a mammal, consistent with the rest of the group.'}
      } },
    { id:'v17', skill:'Analogies', prompt:'Chef is to kitchen as surgeon is to ___.', correct:'B',
      choices:{
        A:{text:'Hospital', explain:'A hospital is the larger building, but the pattern calls for the specific room where the work happens, like a kitchen for a chef.'},
        B:{text:'Operating room', explain:'A chef works specifically in a kitchen; following the same pattern, a surgeon works specifically in an operating room.'},
        C:{text:'Patient', explain:'A patient is who the surgeon treats, not the place where the work happens.'},
        D:{text:'Scalpel', explain:'A scalpel is a tool a surgeon uses, not the place where the work happens.'}
      } },
    { id:'v18', skill:'Syllogisms', prompt:'No reptiles are warm-blooded. All snakes are reptiles. Therefore:', correct:'A',
      choices:{
        A:{text:'No snakes are warm-blooded', explain:'Since no reptiles are warm-blooded, and snakes are reptiles, snakes cannot be warm-blooded.'},
        B:{text:'All snakes are warm-blooded', explain:'This directly contradicts the first statement, which excludes all reptiles from being warm-blooded.'},
        C:{text:'Some snakes are warm-blooded', explain:'Even partial overlap is ruled out, since the first statement excludes all reptiles from being warm-blooded.'},
        D:{text:'Cannot be determined', explain:'A conclusion can be drawn here — the two statements combine directly to rule out snakes being warm-blooded.'}
      } },
    { id:'v19', skill:'Synonyms', prompt:'Choose the word that means the same as AUDACIOUS.', correct:'B',
      choices:{
        A:{text:'Timid', explain:'Timid is nearly the opposite of audacious, which describes bold, daring behavior.'},
        B:{text:'Bold', explain:'Audacious means willing to take bold risks, matching bold closely.'},
        C:{text:'Quiet', explain:'Quiet describes volume or reticence, unrelated to boldness.'},
        D:{text:'Careful', explain:'Careful suggests caution, which is nearly the opposite of the risk-taking audacious describes.'}
      } },
    { id:'v20', skill:'Antonyms', prompt:'Choose the word most nearly opposite to ABUNDANT.', correct:'B',
      choices:{
        A:{text:'Plentiful', explain:'Plentiful is a synonym of abundant, not its opposite.'},
        B:{text:'Scarce', explain:'Abundant means existing in large quantities, so scarce, meaning very little available, is its opposite.'},
        C:{text:'Large', explain:'Large describes size, not quantity available, so it is not a true opposite.'},
        D:{text:'Available', explain:'Available describes accessibility, not quantity, so it is not the opposite of abundant.'}
      } },
    { id:'v21', skill:'Synonyms', prompt:'Choose the word that means the same as PRUDENT.', correct:'A',
      choices:{
        A:{text:'Wise and careful', explain:'Prudent means showing careful, sensible judgment.'},
        B:{text:'Careless', explain:'This is the opposite of prudent.'},
        C:{text:'Wealthy', explain:'Wealth isn\'t what prudent describes.'},
        D:{text:'Stubborn', explain:'Stubbornness isn\'t related to careful judgment.'}
      } },
    { id:'v22', skill:'Synonyms', prompt:'Choose the word that means the same as VIGILANT.', correct:'B',
      choices:{
        A:{text:'Careless', explain:'This is nearly the opposite of vigilant.'},
        B:{text:'Watchful', explain:'Vigilant means staying alert and watchful for danger.'},
        C:{text:'Tired', explain:'Fatigue is nearly the opposite of alertness.'},
        D:{text:'Confused', explain:'Confusion isn\'t what vigilant describes.'}
      } },
    { id:'v23', skill:'Synonyms', prompt:'Choose the word that means the same as METHODICAL.', correct:'C',
      choices:{
        A:{text:'Messy', explain:'This is the opposite of methodical.'},
        B:{text:'Fast', explain:'Speed isn\'t what methodical describes.'},
        C:{text:'Organized', explain:'Methodical means done in an orderly, systematic way.'},
        D:{text:'Loud', explain:'Volume isn\'t related to this word.'}
      } },
    { id:'v24', skill:'Synonyms', prompt:'Choose the word that means the same as EARNEST.', correct:'D',
      choices:{
        A:{text:'Sarcastic', explain:'This is nearly the opposite of earnest.'},
        B:{text:'Silly', explain:'Silliness contradicts the seriousness earnest describes.'},
        C:{text:'Careless', explain:'Carelessness is nearly the opposite of earnest sincerity.'},
        D:{text:'Sincere', explain:'Earnest means showing sincere and serious intention.'}
      } },
    { id:'v25', skill:'Antonyms', prompt:'Choose the word most nearly opposite to TRANQUIL.', correct:'A',
      choices:{
        A:{text:'Chaotic', explain:'Tranquil means calm and peaceful, so chaotic is its opposite.'},
        B:{text:'Peaceful', explain:'Peaceful is a synonym of tranquil, not its opposite.'},
        C:{text:'Slow', explain:'Speed isn\'t what tranquil describes.'},
        D:{text:'Bright', explain:'Brightness isn\'t related to tranquility.'}
      } },
    { id:'v26', skill:'Antonyms', prompt:'Choose the word most nearly opposite to ELABORATE.', correct:'B',
      choices:{
        A:{text:'Detailed', explain:'Detailed is a synonym of elaborate, not its opposite.'},
        B:{text:'Simple', explain:'Elaborate means detailed and complex, so simple is its opposite.'},
        C:{text:'Expensive', explain:'Cost isn\'t what elaborate describes.'},
        D:{text:'Colorful', explain:'Color isn\'t related to complexity.'}
      } },
    { id:'v27', skill:'Antonyms', prompt:'Choose the word most nearly opposite to TIMID.', correct:'C',
      choices:{
        A:{text:'Shy', explain:'Shy is a synonym of timid, not its opposite.'},
        B:{text:'Quiet', explain:'Quiet describes volume, not confidence level.'},
        C:{text:'Bold', explain:'Timid means easily frightened or shy, so bold is its opposite.'},
        D:{text:'Kind', explain:'Kindness isn\'t related to timidity.'}
      } },
    { id:'v28', skill:'Antonyms', prompt:'Choose the word most nearly opposite to ABRUPT.', correct:'D',
      choices:{
        A:{text:'Sudden', explain:'Sudden is a synonym of abrupt, not its opposite.'},
        B:{text:'Rude', explain:'Abrupt speech can seem rude, but rudeness itself isn\'t the opposite.'},
        C:{text:'Quick', explain:'Quick is closely related to abrupt, not opposite to it.'},
        D:{text:'Gradual', explain:'Abrupt means sudden and unexpected, so gradual is its opposite.'}
      } },
    { id:'v29', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'A',
      choices:{
        A:{text:'Nail', explain:'Unlike the others, a nail is a fastener, not a tool used to manipulate one.'},
        B:{text:'Hammer', explain:'A hammer is a hand tool, fitting the shared category.'},
        C:{text:'Wrench', explain:'A wrench is also a hand tool.'},
        D:{text:'Pliers', explain:'Pliers are also a hand tool, consistent with the group.'}
      } },
    { id:'v30', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'B',
      choices:{
        A:{text:'Anger', explain:'An emotion, fitting the shared category.'},
        B:{text:'Table', explain:'Unlike the others, a table is an object, not an emotion.'},
        C:{text:'Fear', explain:'Also an emotion.'},
        D:{text:'Joy', explain:'Also an emotion.'}
      } },
    { id:'v31', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'C',
      choices:{
        A:{text:'Piano', explain:'A stringed instrument, fitting the shared category.'},
        B:{text:'Guitar', explain:'Also a stringed instrument.'},
        C:{text:'Drum', explain:'Unlike the others, a drum is a percussion instrument, not a stringed one.'},
        D:{text:'Harp', explain:'Also a stringed instrument.'}
      } },
    { id:'v32', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'D',
      choices:{
        A:{text:'Rain', explain:'A form of precipitation, fitting the shared category.'},
        B:{text:'Snow', explain:'Also a form of precipitation.'},
        C:{text:'Hail', explain:'Also a form of precipitation.'},
        D:{text:'Cloud', explain:'Unlike the others, a cloud produces precipitation but is not itself a form of it.'}
      } },
    { id:'v33', skill:'Analogies', prompt:'Fish is to gills as human is to ___.', correct:'A',
      choices:{
        A:{text:'Lungs', explain:'A fish breathes using gills; a human breathes using lungs, following the same pattern.'},
        B:{text:'Heart', explain:'The heart pumps blood, but it is not the organ used for breathing.'},
        C:{text:'Skin', explain:'Skin is not the primary organ used for breathing.'},
        D:{text:'Blood', explain:'Blood is not an organ, and is not the direct parallel to gills.'}
      } },
    { id:'v34', skill:'Analogies', prompt:'Author is to write as sculptor is to ___.', correct:'B',
      choices:{
        A:{text:'Museum', explain:'A museum is where art might be displayed, not the action a sculptor performs.'},
        B:{text:'Carve', explain:'An author writes; a sculptor carves, following the same pattern.'},
        C:{text:'Clay', explain:'Clay is a material a sculptor might use, not the action itself.'},
        D:{text:'Art', explain:'Too broad — the pattern calls for the specific action, like "write" is specific.'}
      } },
    { id:'v35', skill:'Analogies', prompt:'Umbrella is to rain as sunscreen is to ___.', correct:'C',
      choices:{
        A:{text:'Beach', explain:'A beach is a place sunscreen might be used, not what it protects against.'},
        B:{text:'Skin', explain:'Skin is what sunscreen protects, not what it protects against.'},
        C:{text:'Sun', explain:'An umbrella protects against rain; sunscreen protects against the sun, following the same pattern.'},
        D:{text:'Lotion', explain:'Lotion is a category sunscreen belongs to, not what it protects against.'}
      } },
    { id:'v36', skill:'Analogies', prompt:'Bee is to hive as bird is to ___.', correct:'D',
      choices:{
        A:{text:'Sky', explain:'The sky is where a bird flies, not its specific dwelling place.'},
        B:{text:'Feather', explain:'A feather is part of a bird, not its home.'},
        C:{text:'Flock', explain:'A flock is a group of birds, not a dwelling place.'},
        D:{text:'Nest', explain:'A bee lives in a hive; a bird lives in a nest, following the same pattern.'}
      } },
    { id:'v37', skill:'Syllogisms', prompt:'All members of the choir practice on Tuesdays. Lily practices on Tuesdays. Therefore:', correct:'A',
      choices:{
        A:{text:'Cannot be determined whether Lily is in the choir', explain:'Practicing on Tuesdays doesn\'t confirm choir membership — other people or groups could also practice that day.'},
        B:{text:'Lily is in the choir', explain:'This reverses the logic — the statement never says only choir members practice on Tuesdays.'},
        C:{text:'Lily is not in the choir', explain:'Nothing rules out Lily being in the choir either.'},
        D:{text:'Everyone who practices on Tuesdays is in the choir', explain:'This is an unsupported reversal of the original statement.'}
      } },
    { id:'v38', skill:'Syllogisms', prompt:'All members of Team A wear blue jerseys. No one on Team B wears blue jerseys. Therefore:', correct:'B',
      choices:{
        A:{text:'Everyone on Team A is on Team B', explain:'This isn\'t supported — the statements describe jersey colors, not team overlap in this direction.'},
        B:{text:'No one on Team B is on Team A', explain:'Since Team A always wears blue and Team B never does, the two groups cannot overlap.'},
        C:{text:'Some Team B members are on Team A', explain:'This directly contradicts the given statements.'},
        D:{text:'Cannot be determined', explain:'The two statements combine directly to rule out any overlap.'}
      } },
    { id:'v39', skill:'Syllogisms', prompt:'Some vegetables are green. All broccoli is a vegetable. Therefore:', correct:'C',
      choices:{
        A:{text:'All broccoli is green', explain:'This overstates the first statement, which only says "some" vegetables are green.'},
        B:{text:'No broccoli is green', explain:'This isn\'t supported either — broccoli could be among the green vegetables.'},
        C:{text:'Cannot be determined whether broccoli is green', explain:'The statements don\'t specify which vegetables are the green ones, so broccoli\'s color can\'t be confirmed.'},
        D:{text:'Some broccoli is definitely green', explain:'This assumes broccoli is specifically among the "some" green vegetables, which isn\'t guaranteed.'}
      } },
    { id:'v40', skill:'Syllogisms', prompt:'All members of the orchestra can read music. Jake cannot read music. Therefore:', correct:'D',
      choices:{
        A:{text:'Jake is in the orchestra', explain:'This directly contradicts the premise that all orchestra members can read music.'},
        B:{text:'Jake used to be in the orchestra', explain:'This adds information not supported by the statements.'},
        C:{text:'Cannot be determined', explain:'This can actually be determined directly from the premises.'},
        D:{text:'Jake is not in the orchestra', explain:'Since all orchestra members can read music, and Jake cannot, Jake cannot be a member.'}
      } },
    { id:'v41', skill:'Synonyms', prompt:'Choose the word that means the same as MERITORIOUS.', correct:'C',
      choices:{
        A:{text:'Wealthy', explain:'Wealth isn\'t what meritorious describes.'},
        B:{text:'Confusing', explain:'Confusion isn\'t related to this word.'},
        C:{text:'Deserving of praise', explain:'Meritorious means deserving reward or praise.'},
        D:{text:'Careless', explain:'Carelessness is nearly the opposite of meritorious behavior.'}
      } },
    { id:'v42', skill:'Synonyms', prompt:'Choose the word that means the same as IMPETUOUS.', correct:'D',
      choices:{
        A:{text:'Careful and deliberate', explain:'This is nearly the opposite of impetuous.'},
        B:{text:'Calm and patient', explain:'Patience is nearly the opposite of impetuous.'},
        C:{text:'Wealthy', explain:'Wealth isn\'t what impetuous describes.'},
        D:{text:'Acting hastily without thinking', explain:'Impetuous means acting suddenly without careful thought.'}
      } },
    { id:'v43', skill:'Synonyms', prompt:'Choose the word that means the same as VERACIOUS.', correct:'A',
      choices:{
        A:{text:'Truthful and honest', explain:'Veracious means habitually telling the truth.'},
        B:{text:'Deceptive', explain:'This is the opposite of veracious.'},
        C:{text:'Wealthy', explain:'Wealth isn\'t what veracious describes.'},
        D:{text:'Silent', explain:'Silence isn\'t related to truthfulness.'}
      } },
    { id:'v44', skill:'Synonyms', prompt:'Choose the word that means the same as STOIC.', correct:'B',
      choices:{
        A:{text:'Complaining constantly', explain:'This is the opposite of stoic.'},
        B:{text:'Enduring hardship without complaint', explain:'Stoic describes enduring pain or hardship without showing feeling or complaint.'},
        C:{text:'Wealthy and generous', explain:'Wealth isn\'t what stoic describes.'},
        D:{text:'Nervous and anxious', explain:'Anxiety contradicts the calm endurance stoic describes.'}
      } },
    { id:'v45', skill:'Antonyms', prompt:'Choose the word most nearly opposite to LUCRATIVE.', correct:'C',
      choices:{
        A:{text:'Profitable', explain:'Profitable is a synonym of lucrative, not its opposite.'},
        B:{text:'Popular', explain:'Popularity isn\'t related to profitability.'},
        C:{text:'Unprofitable', explain:'Lucrative means profitable, so unprofitable is its opposite.'},
        D:{text:'Convenient', explain:'Convenience isn\'t what lucrative describes.'}
      } },
    { id:'v46', skill:'Antonyms', prompt:'Choose the word most nearly opposite to ADROIT.', correct:'D',
      choices:{
        A:{text:'Skillful', explain:'Skillful is a synonym of adroit, not its opposite.'},
        B:{text:'Graceful', explain:'Graceful is closely related to adroit, not opposite.'},
        C:{text:'Quick', explain:'Speed isn\'t the direct opposite of skill.'},
        D:{text:'Clumsy', explain:'Adroit means skillful and clever, so clumsy is its opposite.'}
      } },
    { id:'v47', skill:'Antonyms', prompt:'Choose the word most nearly opposite to TACIT.', correct:'A',
      choices:{
        A:{text:'Explicit', explain:'Tacit means understood without being directly stated, so explicit, meaning clearly stated, is its opposite.'},
        B:{text:'Silent', explain:'Silence is closely related to tacit, not its opposite.'},
        C:{text:'Quiet', explain:'Quiet isn\'t the direct opposite of unspoken understanding.'},
        D:{text:'Hidden', explain:'Hidden is closely related to tacit\'s meaning, not opposite.'}
      } },
    { id:'v48', skill:'Antonyms', prompt:'Choose the word most nearly opposite to BENIGN.', correct:'B',
      choices:{
        A:{text:'Gentle', explain:'Gentle is related to benign, not its opposite.'},
        B:{text:'Harmful', explain:'Benign means harmless or gentle, so harmful is its opposite.'},
        C:{text:'Calm', explain:'Calm isn\'t the direct opposite of harmless.'},
        D:{text:'Weak', explain:'Weakness isn\'t related to benign\'s meaning.'}
      } },
    { id:'v49', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'C',
      choices:{
        A:{text:'Sedan', explain:'A sedan is a motorized vehicle, fitting the shared category.'},
        B:{text:'Truck', explain:'A truck is also motorized.'},
        C:{text:'Bicycle', explain:'Unlike the others, a bicycle is not motorized.'},
        D:{text:'SUV', explain:'An SUV is also motorized.'}
      } },
    { id:'v50', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'D',
      choices:{
        A:{text:'Trumpet', explain:'A trumpet is a wind instrument, fitting the shared category.'},
        B:{text:'Clarinet', explain:'A clarinet is also a wind instrument.'},
        C:{text:'Flute', explain:'A flute is also a wind instrument.'},
        D:{text:'Xylophone', explain:'Unlike the others, a xylophone is a percussion instrument, not a wind instrument.'}
      } },
    { id:'v51', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'A',
      choices:{
        A:{text:'Falcon', explain:'Unlike the others, a falcon is a bird, not a member of the dog family.'},
        B:{text:'Wolf', explain:'A wolf is part of the dog family, fitting the shared category.'},
        C:{text:'Fox', explain:'A fox is also part of the dog family.'},
        D:{text:'Coyote', explain:'A coyote is also part of the dog family.'}
      } },
    { id:'v52', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'B',
      choices:{
        A:{text:'Novel', explain:'A novel is a written work, fitting the shared category.'},
        B:{text:'Sculpture', explain:'Unlike the others, a sculpture is a visual art form, not writing.'},
        C:{text:'Biography', explain:'A biography is also a written work.'},
        D:{text:'Textbook', explain:'A textbook is also a written work.'}
      } },
    { id:'v53', skill:'Analogies', prompt:'Doctor is to hospital as teacher is to ___.', correct:'C',
      choices:{
        A:{text:'Classroom', explain:'A classroom is too specific compared to the broader parallel of hospital.'},
        B:{text:'Student', explain:'A student is who a teacher works with, not the workplace.'},
        C:{text:'School', explain:'A doctor works in a hospital; a teacher works in a school, following the same pattern.'},
        D:{text:'Lesson', explain:'A lesson is what a teacher delivers, not the workplace.'}
      } },
    { id:'v54', skill:'Analogies', prompt:'Key is to unlock as map is to ___.', correct:'D',
      choices:{
        A:{text:'Location', explain:'A location is what a map shows, not the action it enables.'},
        B:{text:'Road', explain:'A road is shown on a map, not the action a map enables.'},
        C:{text:'Compass', explain:'A compass is a different tool, not the action a map performs.'},
        D:{text:'Navigate', explain:'A key is used to unlock; a map is used to navigate, following the same pattern.'}
      } },
    { id:'v55', skill:'Analogies', prompt:'Caterpillar is to butterfly as tadpole is to ___.', correct:'A',
      choices:{
        A:{text:'Frog', explain:'A caterpillar transforms into a butterfly; a tadpole transforms into a frog, following the same pattern.'},
        B:{text:'Pond', explain:'A pond is a habitat, not what a tadpole transforms into.'},
        C:{text:'Egg', explain:'An egg comes before a tadpole in its life cycle, not after.'},
        D:{text:'Fish', explain:'A fish is a different animal, not what a tadpole becomes.'}
      } },
    { id:'v56', skill:'Analogies', prompt:'Recipe is to cook as blueprint is to ___.', correct:'B',
      choices:{
        A:{text:'Architect', explain:'An architect is a person, not the action performed, unlike the verb pattern with cook.'},
        B:{text:'Build', explain:'A recipe guides how to cook; a blueprint guides how to build, following the same pattern.'},
        C:{text:'Building', explain:'A building is the result, not the action performed using a blueprint.'},
        D:{text:'Design', explain:'Design is related but is a different action than the specific pattern of constructing something.'}
      } },
    { id:'v57', skill:'Syllogisms', prompt:'All members of the debate team speak in public. No shy people speak in public. Therefore:', correct:'C',
      choices:{
        A:{text:'Some members of the debate team are shy', explain:'This contradicts the logical conclusion that follows from the two statements.'},
        B:{text:'All shy people are on the debate team', explain:'This reverses the logic without support.'},
        C:{text:'No members of the debate team are shy', explain:'Since debate team members speak in public, and shy people do not, no debate team member can be shy.'},
        D:{text:'Cannot be determined', explain:'A conclusion can actually be drawn here.'}
      } },
    { id:'v58', skill:'Syllogisms', prompt:'Some doctors are surgeons. All surgeons perform operations. Therefore:', correct:'D',
      choices:{
        A:{text:'All doctors perform operations', explain:'This overstates the conclusion — only "some" doctors are surgeons.'},
        B:{text:'No doctors perform operations', explain:'This contradicts the given statements.'},
        C:{text:'All doctors are surgeons', explain:'This overstates the first statement, which only says "some" doctors are surgeons.'},
        D:{text:'Some doctors perform operations', explain:'Since some doctors are surgeons, and all surgeons perform operations, at least those doctors perform operations.'}
      } },
    { id:'v59', skill:'Syllogisms', prompt:'All hexagons have six sides. This shape has five sides. Therefore:', correct:'A',
      choices:{
        A:{text:'It is not a hexagon', explain:'Since all hexagons must have six sides, a five-sided shape cannot be a hexagon.'},
        B:{text:'It is a hexagon', explain:'This directly contradicts the premise.'},
        C:{text:'It might be a hexagon', explain:'The premises rule this out completely, not just partially.'},
        D:{text:'Cannot be determined', explain:'This can be determined directly from the premises.'}
      } },
    { id:'v60', skill:'Syllogisms', prompt:'All members of the swim team can dive. Maria cannot dive. Therefore:', correct:'B',
      choices:{
        A:{text:'Maria is on the swim team', explain:'This contradicts the premise that all swim team members can dive.'},
        B:{text:'Maria is not on the swim team', explain:'Since all swim team members can dive, and Maria cannot, Maria cannot be a member.'},
        C:{text:'Maria used to be on the swim team', explain:'This adds information not supported by the statements.'},
        D:{text:'Cannot be determined', explain:'This can be determined directly from the premises.'}
      } },
    { id:'v61', skill:'Synonyms', prompt:'Choose the word that means the same as LOQUACIOUS.', correct:'B',
      choices:{
        A:{text:'Silent', explain:'This is the opposite of loquacious.'},
        B:{text:'Very talkative', explain:'Loquacious means very talkative.'},
        C:{text:'Careful', explain:'Carefulness isn\'t what loquacious describes.'},
        D:{text:'Confused', explain:'Confusion isn\'t what loquacious describes.'}
      } },
    { id:'v62', skill:'Synonyms', prompt:'Choose the word that means the same as INTREPID.', correct:'C',
      choices:{
        A:{text:'Fearful', explain:'This is the opposite of intrepid.'},
        B:{text:'Careless', explain:'Carelessness isn\'t what intrepid describes.'},
        C:{text:'Fearless and adventurous', explain:'Intrepid means fearless and adventurous.'},
        D:{text:'Confused', explain:'Confusion isn\'t what intrepid describes.'}
      } },
    { id:'v63', skill:'Synonyms', prompt:'Choose the word that means the same as MERCURIAL.', correct:'D',
      choices:{
        A:{text:'Steady', explain:'This is the opposite of mercurial.'},
        B:{text:'Calm', explain:'This is nearly the opposite of mercurial.'},
        C:{text:'Predictable', explain:'This is the opposite of mercurial.'},
        D:{text:'Changeable in mood', explain:'Mercurial means subject to sudden, unpredictable changes in mood.'}
      } },
    { id:'v64', skill:'Synonyms', prompt:'Choose the word that means the same as SAGACIOUS.', correct:'A',
      choices:{
        A:{text:'Wise and shrewd', explain:'Sagacious means having good judgment, wise.'},
        B:{text:'Foolish', explain:'This is the opposite of sagacious.'},
        C:{text:'Careless', explain:'Carelessness contradicts wise judgment.'},
        D:{text:'Confused', explain:'Confusion isn\'t what sagacious describes.'}
      } },
    { id:'v65', skill:'Antonyms', prompt:'Choose the word most nearly opposite to PLACID.', correct:'B',
      choices:{
        A:{text:'Calm', explain:'Calm is a synonym of placid, not its opposite.'},
        B:{text:'Turbulent', explain:'Placid means calm and peaceful, so turbulent is its opposite.'},
        C:{text:'Quiet', explain:'Quiet is related to placid, not opposite.'},
        D:{text:'Gentle', explain:'Gentle is related to placid, not opposite.'}
      } },
    { id:'v66', skill:'Antonyms', prompt:'Choose the word most nearly opposite to MAGNANIMOUS.', correct:'C',
      choices:{
        A:{text:'Generous', explain:'Generous is a synonym of magnanimous, not its opposite.'},
        B:{text:'Forgiving', explain:'Forgiving is related to magnanimous, not opposite.'},
        C:{text:'Petty', explain:'Magnanimous means generous and noble in spirit, so petty is its opposite.'},
        D:{text:'Kind', explain:'Kind is related to magnanimous, not opposite.'}
      } },
    { id:'v67', skill:'Antonyms', prompt:'Choose the word most nearly opposite to INSOLENT.', correct:'D',
      choices:{
        A:{text:'Rude', explain:'Rude is a synonym of insolent, not its opposite.'},
        B:{text:'Disrespectful', explain:'Disrespectful is a synonym of insolent, not opposite.'},
        C:{text:'Bold', explain:'Bold is related to insolent, not its direct opposite.'},
        D:{text:'Polite', explain:'Insolent means rudely disrespectful, so polite is its opposite.'}
      } },
    { id:'v68', skill:'Antonyms', prompt:'Choose the word most nearly opposite to AUSPICIOUS.', correct:'A',
      choices:{
        A:{text:'Unfavorable', explain:'Auspicious means favorable or promising, so unfavorable is its opposite.'},
        B:{text:'Favorable', explain:'Favorable is a synonym of auspicious, not its opposite.'},
        C:{text:'Lucky', explain:'Lucky is related to auspicious, not opposite.'},
        D:{text:'Promising', explain:'Promising is a synonym of auspicious, not opposite.'}
      } },
    { id:'v69', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'B',
      choices:{
        A:{text:'Copper', explain:'Copper is a metal, fitting the shared category.'},
        B:{text:'Diamond', explain:'Unlike the others, a diamond is a gemstone, not a metal.'},
        C:{text:'Iron', explain:'Iron is also a metal.'},
        D:{text:'Gold', explain:'Gold is also a metal.'}
      } },
    { id:'v70', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'C',
      choices:{
        A:{text:'Soccer', explain:'Soccer is a physical sport, fitting the shared category.'},
        B:{text:'Basketball', explain:'Basketball is also a physical sport.'},
        C:{text:'Chess', explain:'Unlike the others, chess is a board game without physical athletic play.'},
        D:{text:'Tennis', explain:'Tennis is also a physical sport.'}
      } },
    { id:'v71', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'D',
      choices:{
        A:{text:'Sparrow', explain:'A sparrow is a bird, fitting the shared category.'},
        B:{text:'Crow', explain:'A crow is also a bird.'},
        C:{text:'Pigeon', explain:'A pigeon is also a bird.'},
        D:{text:'Bat', explain:'Unlike the others, a bat is a mammal, not a bird.'}
      } },
    { id:'v72', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'A',
      choices:{
        A:{text:'Sculpture', explain:'Unlike the others, a sculpture is a visual art form, not a genre of theater.'},
        B:{text:'Comedy', explain:'Comedy is a genre of theater, fitting the shared category.'},
        C:{text:'Tragedy', explain:'Tragedy is also a genre of theater.'},
        D:{text:'Drama', explain:'Drama is also a genre of theater.'}
      } },
    { id:'v73', skill:'Analogies', prompt:'Library is to books as museum is to ___.', correct:'B',
      choices:{
        A:{text:'Building', explain:'A building is too generic — the pattern calls for what\'s specifically housed inside.'},
        B:{text:'Exhibits', explain:'A library houses books; a museum houses exhibits, following the same pattern.'},
        C:{text:'Tickets', explain:'Tickets are how one enters, not what\'s housed inside.'},
        D:{text:'Visitors', explain:'Visitors are the people who come, not what\'s housed inside.'}
      } },
    { id:'v74', skill:'Analogies', prompt:'Thermometer is to temperature as clock is to ___.', correct:'C',
      choices:{
        A:{text:'Numbers', explain:'Numbers appear on a clock\'s face but aren\'t what it measures conceptually.'},
        B:{text:'Metal', explain:'Material isn\'t the parallel being tested.'},
        C:{text:'Time', explain:'A thermometer measures temperature; a clock measures time, following the same pattern.'},
        D:{text:'Hours', explain:'Hours are a unit of time, but the pattern calls for the broader concept, like temperature is broader than degrees.'}
      } },
    { id:'v75', skill:'Analogies', prompt:'Wound is to bandage as thirst is to ___.', correct:'D',
      choices:{
        A:{text:'Hunger', explain:'Hunger is a different need, not what resolves thirst.'},
        B:{text:'Dryness', explain:'Dryness describes a symptom, not the solution.'},
        C:{text:'Heat', explain:'Heat can cause thirst but isn\'t the solution to it.'},
        D:{text:'Water', explain:'A bandage treats a wound; water resolves thirst, following the same pattern.'}
      } },
    { id:'v76', skill:'Analogies', prompt:'Actor is to stage as athlete is to ___.', correct:'A',
      choices:{
        A:{text:'Field', explain:'An actor performs on a stage; an athlete performs on a field, following the same pattern.'},
        B:{text:'Team', explain:'A team is a group of people, not a specific place of performance.'},
        C:{text:'Trophy', explain:'A trophy is a reward, not a place of performance.'},
        D:{text:'Coach', explain:'A coach is a person, not a place of performance.'}
      } },
    { id:'v77', skill:'Syllogisms', prompt:'All members of the chess club can play chess. Ben cannot play chess. Therefore:', correct:'B',
      choices:{
        A:{text:'Ben is in the chess club', explain:'This contradicts the premise that all chess club members can play chess.'},
        B:{text:'Ben is not in the chess club', explain:'Since all chess club members can play chess, and Ben cannot, Ben cannot be a member.'},
        C:{text:'Ben used to be in the chess club', explain:'This adds information not supported by the statements.'},
        D:{text:'Cannot be determined', explain:'This can be determined directly from the premises.'}
      } },
    { id:'v78', skill:'Syllogisms', prompt:'Some flowers are red. All roses are flowers. Therefore:', correct:'C',
      choices:{
        A:{text:'All roses are red', explain:'This overstates the first statement, which only says "some" flowers are red.'},
        B:{text:'No roses are red', explain:'This isn\'t supported either — roses could be among the red flowers.'},
        C:{text:'Cannot be determined whether roses are red', explain:'The statements don\'t specify which flowers are the red ones, so roses\' color can\'t be confirmed.'},
        D:{text:'Some roses are definitely red', explain:'This assumes roses are specifically among the "some" red flowers, which isn\'t guaranteed.'}
      } },
    { id:'v79', skill:'Syllogisms', prompt:'All pentagons have five sides. This shape has four sides. Therefore:', correct:'D',
      choices:{
        A:{text:'It is a pentagon', explain:'This directly contradicts the premise.'},
        B:{text:'It might be a pentagon', explain:'The premises rule this out completely, not just partially.'},
        C:{text:'Cannot be determined', explain:'This can be determined directly from the premises.'},
        D:{text:'It is not a pentagon', explain:'Since all pentagons must have five sides, a four-sided shape cannot be a pentagon.'}
      } },
    { id:'v80', skill:'Syllogisms', prompt:'No fish breathe air directly from the atmosphere. All sharks are fish. Therefore:', correct:'A',
      choices:{
        A:{text:'No sharks breathe air directly from the atmosphere', explain:'Since no fish breathe air directly from the atmosphere, and sharks are fish, sharks cannot either.'},
        B:{text:'All sharks breathe air directly from the atmosphere', explain:'This directly contradicts the first statement.'},
        C:{text:'Some sharks breathe air directly from the atmosphere', explain:'Even partial overlap is ruled out by the first statement.'},
        D:{text:'Cannot be determined', explain:'A conclusion can actually be drawn here.'}
      } },
    { id:'v81', skill:'Synonyms', prompt:'Choose the word that means the same as DEXTEROUS.', correct:'A',
      choices:{
        A:{text:'Skillful with the hands', explain:'Dexterous means skillful in using the hands or body.'},
        B:{text:'Clumsy', explain:'This is the opposite of dexterous.'},
        C:{text:'Confused', explain:'Confusion isn\'t what dexterous describes.'},
        D:{text:'Careless', explain:'Carelessness contradicts skillful, precise movement.'}
      } },
    { id:'v82', skill:'Synonyms', prompt:'Choose the word that means the same as COPIOUS.', correct:'B',
      choices:{
        A:{text:'Scarce', explain:'This is the opposite of copious.'},
        B:{text:'Abundant and plentiful', explain:'Copious means abundant or plentiful in supply.'},
        C:{text:'Confused', explain:'Confusion isn\'t what copious describes.'},
        D:{text:'Careful', explain:'Carefulness isn\'t what copious describes.'}
      } },
    { id:'v83', skill:'Synonyms', prompt:'Choose the word that means the same as OMINOUS.', correct:'C',
      choices:{
        A:{text:'Cheerful', explain:'This is the opposite of ominous.'},
        B:{text:'Calm', explain:'This is nearly the opposite of ominous.'},
        C:{text:'Threatening or foreboding', explain:'Ominous means giving the impression something bad is about to happen.'},
        D:{text:'Confused', explain:'Confusion isn\'t what ominous describes.'}
      } },
    { id:'v84', skill:'Synonyms', prompt:'Choose the word that means the same as JOVIAL.', correct:'D',
      choices:{
        A:{text:'Gloomy', explain:'This is the opposite of jovial.'},
        B:{text:'Angry', explain:'This is nearly the opposite of jovial.'},
        C:{text:'Confused', explain:'Confusion isn\'t what jovial describes.'},
        D:{text:'Cheerful and friendly', explain:'Jovial means cheerful, friendly, and good-humored.'}
      } },
    { id:'v85', skill:'Antonyms', prompt:'Choose the word most nearly opposite to ELATED.', correct:'A',
      choices:{
        A:{text:'Dejected', explain:'Elated means extremely happy, so dejected, meaning very sad, is its opposite.'},
        B:{text:'Joyful', explain:'Joyful is a synonym of elated, not its opposite.'},
        C:{text:'Excited', explain:'Excited is related to elated, not opposite.'},
        D:{text:'Proud', explain:'Proud is related to elated, not its direct opposite.'}
      } },
    { id:'v86', skill:'Antonyms', prompt:'Choose the word most nearly opposite to ADAMANT.', correct:'B',
      choices:{
        A:{text:'Stubborn', explain:'Stubborn is a synonym of adamant, not its opposite.'},
        B:{text:'Flexible and open to change', explain:'Adamant means refusing to change one\'s mind, so flexible is its opposite.'},
        C:{text:'Firm', explain:'Firm is a synonym of adamant, not opposite.'},
        D:{text:'Determined', explain:'Determined is related to adamant, not opposite.'}
      } },
    { id:'v87', skill:'Antonyms', prompt:'Choose the word most nearly opposite to SPONTANEOUS.', correct:'C',
      choices:{
        A:{text:'Impulsive', explain:'Impulsive is related to spontaneous, not its opposite.'},
        B:{text:'Sudden', explain:'Sudden is a synonym of spontaneous, not opposite.'},
        C:{text:'Carefully planned in advance', explain:'Spontaneous means done without planning, so carefully planned is its opposite.'},
        D:{text:'Unpredictable', explain:'Unpredictable is related to spontaneous, not opposite.'}
      } },
    { id:'v88', skill:'Antonyms', prompt:'Choose the word most nearly opposite to GENEROUS.', correct:'D',
      choices:{
        A:{text:'Kind', explain:'Kind is related to generous, not its opposite.'},
        B:{text:'Charitable', explain:'Charitable is a synonym of generous, not opposite.'},
        C:{text:'Giving', explain:'Giving is a synonym of generous, not opposite.'},
        D:{text:'Stingy and unwilling to share', explain:'Generous means willing to give freely, so stingy is its opposite.'}
      } },
    { id:'v89', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'A',
      choices:{
        A:{text:'Oak', explain:'Unlike the others, an oak is a tree, not a flower.'},
        B:{text:'Rose', explain:'A rose is a flower, fitting the shared category.'},
        C:{text:'Tulip', explain:'A tulip is also a flower.'},
        D:{text:'Daisy', explain:'A daisy is also a flower.'}
      } },
    { id:'v90', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'B',
      choices:{
        A:{text:'Screwdriver', explain:'A screwdriver is a tool, fitting the shared category.'},
        B:{text:'Bolt', explain:'Unlike the others, a bolt is a fastener, not a tool used to manipulate one.'},
        C:{text:'Wrench', explain:'A wrench is also a tool.'},
        D:{text:'Pliers', explain:'Pliers are also a tool.'}
      } },
    { id:'v91', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'C',
      choices:{
        A:{text:'Elephant', explain:'An elephant is a mammal, fitting the shared category.'},
        B:{text:'Giraffe', explain:'A giraffe is also a mammal.'},
        C:{text:'Ostrich', explain:'Unlike the others, an ostrich is a bird, not a mammal.'},
        D:{text:'Lion', explain:'A lion is also a mammal.'}
      } },
    { id:'v92', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'D',
      choices:{
        A:{text:'Sonnet', explain:'A sonnet is a form of poetry, fitting the shared category.'},
        B:{text:'Haiku', explain:'A haiku is also a form of poetry.'},
        C:{text:'Limerick', explain:'A limerick is also a form of poetry.'},
        D:{text:'Melody', explain:'Unlike the others, a melody is a musical structure, not a poetry form.'}
      } },
    { id:'v93', skill:'Analogies', prompt:'Chef is to knife as carpenter is to ___.', correct:'A',
      choices:{
        A:{text:'Hammer', explain:'A chef uses a knife as a primary tool; a carpenter uses a hammer as a primary tool, following the same pattern.'},
        B:{text:'Wood', explain:'Wood is a material a carpenter works with, not the tool itself.'},
        C:{text:'House', explain:'A house is what a carpenter might build, not the tool.'},
        D:{text:'Nail', explain:'A nail is a fastener the carpenter uses the hammer with, not the tool itself.'}
      } },
    { id:'v94', skill:'Analogies', prompt:'Whisper is to shout as crawl is to ___.', correct:'B',
      choices:{
        A:{text:'Walk', explain:'Walking is only a slight increase in movement, not matching the dramatic shift from whisper to shout.'},
        B:{text:'Run', explain:'Whisper is quiet speech and shout is loud speech; crawl is slow movement and run is fast movement, following the same intensity increase.'},
        C:{text:'Sleep', explain:'Sleep is unrelated to movement speed.'},
        D:{text:'Sit', explain:'Sitting is stillness, not an increase in movement.'}
      } },
    { id:'v95', skill:'Analogies', prompt:'Chapter is to book as verse is to ___.', correct:'C',
      choices:{
        A:{text:'Poem', explain:'A poem could contain verses, but the pattern calls for the parallel to book, which is a larger structured work like a song.'},
        B:{text:'Word', explain:'A word is too small a unit, unlike chapter\'s relationship to a book.'},
        C:{text:'Song', explain:'A chapter is part of a book; a verse is part of a song, following the same pattern.'},
        D:{text:'Author', explain:'An author is a person, not the larger work verses belong to.'}
      } },
    { id:'v96', skill:'Analogies', prompt:'Icicle is to cold as ember is to ___.', correct:'D',
      choices:{
        A:{text:'Wood', explain:'Wood is a material, not the quality being tested.'},
        B:{text:'Fire', explain:'Fire could produce an ember but isn\'t the quality parallel to cold.'},
        C:{text:'Smoke', explain:'Smoke is a byproduct, not the quality parallel to cold.'},
        D:{text:'Heat', explain:'An icicle is associated with cold; an ember is associated with heat, following the same pattern.'}
      } },
    { id:'v97', skill:'Syllogisms', prompt:'All members of the honor society maintain a 3.5 GPA. Diego has a 3.2 GPA. Therefore:', correct:'A',
      choices:{
        A:{text:'Diego is not in the honor society', explain:'Since all honor society members maintain a 3.5 GPA, and Diego\'s GPA is below that, Diego cannot be a member.'},
        B:{text:'Diego is in the honor society', explain:'This contradicts the premise that all honor society members maintain a 3.5 GPA.'},
        C:{text:'Diego used to be in the honor society', explain:'This adds information not supported by the statements.'},
        D:{text:'Cannot be determined', explain:'This can be determined directly from the premises.'}
      } },
    { id:'v98', skill:'Syllogisms', prompt:'Some vegetables are orange. All carrots are vegetables. Therefore:', correct:'B',
      choices:{
        A:{text:'All carrots are orange', explain:'This overstates the first statement, which only says "some" vegetables are orange.'},
        B:{text:'Cannot be determined whether carrots are orange', explain:'The statements don\'t specify which vegetables are the orange ones, so carrots\' color can\'t be confirmed from logic alone.'},
        C:{text:'No carrots are orange', explain:'This isn\'t supported either — carrots could be among the orange vegetables.'},
        D:{text:'Some carrots are definitely orange', explain:'This assumes carrots are specifically among the "some" orange vegetables, which isn\'t guaranteed by the statements.'}
      } },
    { id:'v99', skill:'Syllogisms', prompt:'All quadrilaterals have four sides. This shape has three sides. Therefore:', correct:'C',
      choices:{
        A:{text:'It is a quadrilateral', explain:'This directly contradicts the premise.'},
        B:{text:'It might be a quadrilateral', explain:'The premises rule this out completely, not just partially.'},
        C:{text:'It is not a quadrilateral', explain:'Since all quadrilaterals must have four sides, a three-sided shape cannot be a quadrilateral.'},
        D:{text:'Cannot be determined', explain:'This can be determined directly from the premises.'}
      } },
    { id:'v100', skill:'Syllogisms', prompt:'No reptiles produce milk for their young. All lizards are reptiles. Therefore:', correct:'D',
      choices:{
        A:{text:'All lizards produce milk for their young', explain:'This directly contradicts the first statement.'},
        B:{text:'Some lizards produce milk for their young', explain:'Even partial overlap is ruled out by the first statement.'},
        C:{text:'Cannot be determined', explain:'A conclusion can actually be drawn here.'},
        D:{text:'No lizards produce milk for their young', explain:'Since no reptiles produce milk, and lizards are reptiles, lizards cannot either.'}
      } },
    { id:'v101', skill:'Synonyms', prompt:'Choose the word that means the same as PUNGENT.', correct:'B',
      choices:{
        A:{text:'Bland', explain:'This is the opposite of pungent.'},
        B:{text:'Sharp and strong in smell or taste', explain:'Pungent means having a sharp, strong smell or taste.'},
        C:{text:'Confused', explain:'Confusion isn\'t what pungent describes.'},
        D:{text:'Careful', explain:'Carefulness isn\'t what pungent describes.'}
      } },
    { id:'v102', skill:'Synonyms', prompt:'Choose the word that means the same as EXPEDIENT.', correct:'C',
      choices:{
        A:{text:'Wasteful', explain:'This is nearly the opposite of expedient.'},
        B:{text:'Confused', explain:'Confusion isn\'t what expedient describes.'},
        C:{text:'Convenient and practical', explain:'Expedient means convenient and practical, even if not always ideal.'},
        D:{text:'Careless', explain:'Carelessness contradicts practical decision-making.'}
      } },
    { id:'v103', skill:'Synonyms', prompt:'Choose the word that means the same as INDIGNANT.', correct:'D',
      choices:{
        A:{text:'Calm', explain:'This is the opposite of indignant.'},
        B:{text:'Pleased', explain:'This is the opposite of indignant.'},
        C:{text:'Confused', explain:'Confusion isn\'t what indignant describes.'},
        D:{text:'Angry at unfair treatment', explain:'Indignant means feeling angry because of something unjust or unfair.'}
      } },
    { id:'v104', skill:'Synonyms', prompt:'Choose the word that means the same as AFFLUENT.', correct:'A',
      choices:{
        A:{text:'Wealthy', explain:'Affluent means having a great deal of money or wealth.'},
        B:{text:'Poor', explain:'This is the opposite of affluent.'},
        C:{text:'Confused', explain:'Confusion isn\'t what affluent describes.'},
        D:{text:'Careless', explain:'Carelessness isn\'t what affluent describes.'}
      } },
    { id:'v105', skill:'Antonyms', prompt:'Choose the word most nearly opposite to TRANSIENT.', correct:'B',
      choices:{
        A:{text:'Temporary', explain:'Temporary is a synonym of transient, not its opposite.'},
        B:{text:'Permanent and lasting', explain:'Transient means lasting only a short time, so permanent is its opposite.'},
        C:{text:'Brief', explain:'Brief is a synonym of transient, not opposite.'},
        D:{text:'Passing', explain:'Passing is a synonym of transient, not opposite.'}
      } },
    { id:'v106', skill:'Antonyms', prompt:'Choose the word most nearly opposite to LENIENT.', correct:'C',
      choices:{
        A:{text:'Merciful', explain:'Merciful is a synonym of lenient, not its opposite.'},
        B:{text:'Forgiving', explain:'Forgiving is a synonym of lenient, not opposite.'},
        C:{text:'Strict and harsh', explain:'Lenient means mild or permissive, so strict is its opposite.'},
        D:{text:'Gentle', explain:'Gentle is related to lenient, not opposite.'}
      } },
    { id:'v107', skill:'Antonyms', prompt:'Choose the word most nearly opposite to PROSPEROUS.', correct:'D',
      choices:{
        A:{text:'Successful', explain:'Successful is a synonym of prosperous, not its opposite.'},
        B:{text:'Thriving', explain:'Thriving is a synonym of prosperous, not opposite.'},
        C:{text:'Wealthy', explain:'Wealthy is a synonym of prosperous, not opposite.'},
        D:{text:'Struggling and poor', explain:'Prosperous means successful and thriving, so struggling is its opposite.'}
      } },
    { id:'v108', skill:'Antonyms', prompt:'Choose the word most nearly opposite to DILATORY.', correct:'A',
      choices:{
        A:{text:'Prompt and timely', explain:'Dilatory means slow to act or causing delay, so prompt is its opposite.'},
        B:{text:'Slow', explain:'Slow is a synonym of dilatory, not its opposite.'},
        C:{text:'Delayed', explain:'Delayed is a synonym of dilatory, not opposite.'},
        D:{text:'Hesitant', explain:'Hesitant is related to dilatory, not opposite.'}
      } },
    { id:'v109', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'D',
      choices:{
        A:{text:'Trout', explain:'A trout is a fish, fitting the shared category.'},
        B:{text:'Salmon', explain:'A salmon is also a fish.'},
        C:{text:'Bass', explain:'A bass is also a fish.'},
        D:{text:'Seagull', explain:'Unlike the others, a seagull is a bird, not a fish.'}
      } },
    { id:'v110', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'D',
      choices:{
        A:{text:'Rectangle', explain:'A rectangle is a flat, two-dimensional shape, fitting the shared category.'},
        B:{text:'Square', explain:'A square is also a flat, two-dimensional shape.'},
        C:{text:'Rhombus', explain:'A rhombus is also a flat, two-dimensional shape.'},
        D:{text:'Sphere', explain:'Unlike the others, a sphere is a three-dimensional shape, not a flat one.'}
      } },
    { id:'v111', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'D',
      choices:{
        A:{text:'Poodle', explain:'A poodle is a dog breed, fitting the shared category.'},
        B:{text:'Beagle', explain:'A beagle is also a dog breed.'},
        C:{text:'Terrier', explain:'A terrier is also a dog breed.'},
        D:{text:'Tabby', explain:'Unlike the others, a tabby is a type of cat, not a dog breed.'}
      } },
    { id:'v112', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'D',
      choices:{
        A:{text:'Violin', explain:'A violin is a string instrument, fitting the shared category.'},
        B:{text:'Cello', explain:'A cello is also a string instrument.'},
        C:{text:'Viola', explain:'A viola is also a string instrument.'},
        D:{text:'Trumpet', explain:'Unlike the others, a trumpet is a brass instrument, not a string instrument.'}
      } },
    { id:'v113', skill:'Analogies', prompt:'Compass is to direction as ruler is to ___.', correct:'A',
      choices:{
        A:{text:'Length', explain:'A compass measures direction; a ruler measures length, following the same pattern.'},
        B:{text:'Wood', explain:'Wood is a material a ruler might be made from, not what it measures.'},
        C:{text:'Numbers', explain:'Numbers appear on a ruler but aren\'t the quantity it measures.'},
        D:{text:'Drawing', explain:'Drawing is an activity a ruler might assist with, not what it measures.'}
      } },
    { id:'v114', skill:'Analogies', prompt:'Seed is to plant as egg is to ___.', correct:'B',
      choices:{
        A:{text:'Nest', explain:'A nest is where an egg might be kept, not what it becomes.'},
        B:{text:'Chick', explain:'A seed grows into a plant; an egg develops into a chick, following the same pattern.'},
        C:{text:'Feather', explain:'A feather is part of a grown bird, not the direct parallel to plant.'},
        D:{text:'Shell', explain:'A shell is part of the egg itself, not what it grows into.'}
      } },
    { id:'v115', skill:'Analogies', prompt:'Painter is to canvas as poet is to ___.', correct:'D',
      choices:{
        A:{text:'Pen', explain:'A pen is a tool a poet uses, similar to a paintbrush, not the surface being tested here.'},
        B:{text:'Rhyme', explain:'Rhyme is a technique in poetry, not the surface a poet writes on.'},
        C:{text:'Ink', explain:'Ink is a material, not the surface a poet writes on.'},
        D:{text:'Page', explain:'A painter works on a canvas; a poet works on a page, following the same pattern.'}
      } },
    { id:'v116', skill:'Analogies', prompt:'Engine is to car as heart is to ___.', correct:'C',
      choices:{
        A:{text:'Blood', explain:'Blood is what the heart moves, not the whole system it powers.'},
        B:{text:'Lungs', explain:'Lungs are a different organ, not the parallel to car.'},
        C:{text:'Body', explain:'An engine powers a car; a heart powers the body, following the same pattern.'},
        D:{text:'Pulse', explain:'A pulse is a sign of the heart working, not the system it powers.'}
      } },
    { id:'v117', skill:'Syllogisms', prompt:'All members of the drama club rehearse on Fridays. Priya does not rehearse on Fridays. Therefore:', correct:'A',
      choices:{
        A:{text:'Priya is not in the drama club', explain:'Since all drama club members rehearse on Fridays, and Priya does not, Priya cannot be a member.'},
        B:{text:'Priya is in the drama club', explain:'This directly contradicts the premise.'},
        C:{text:'Priya used to be in the drama club', explain:'This adds information not supported by the statements.'},
        D:{text:'Cannot be determined', explain:'This can be determined directly from the premises.'}
      } },
    { id:'v118', skill:'Syllogisms', prompt:'Some instruments are string instruments. All violins are instruments. Therefore:', correct:'B',
      choices:{
        A:{text:'All violins are string instruments', explain:'This overstates the first statement, which only says "some" instruments are string instruments.'},
        B:{text:'Cannot be determined whether violins are string instruments from these statements alone', explain:'The statements don\'t specify which instruments are the string ones, so violins can\'t be confirmed by logic alone.'},
        C:{text:'No violins are string instruments', explain:'This isn\'t supported either — violins could be among the string instruments.'},
        D:{text:'Some violins are definitely string instruments', explain:'This assumes violins are specifically among the "some" string instruments, which isn\'t guaranteed by the statements.'}
      } },
    { id:'v119', skill:'Syllogisms', prompt:'All hexagons have six sides. This shape has six sides. Therefore:', correct:'C',
      choices:{
        A:{text:'This shape is a hexagon', explain:'This assumes only hexagons can have six sides, which the statement doesn\'t guarantee.'},
        B:{text:'This shape is not a hexagon', explain:'This isn\'t supported either — the shape could still be a hexagon.'},
        C:{text:'Cannot be determined whether this shape is a hexagon from these statements alone', explain:'The statement only tells us hexagons have six sides, not that only hexagons have six sides.'},
        D:{text:'No conclusion is possible under any circumstances', explain:'This overstates the uncertainty — the given premises simply don\'t settle this particular question.'}
      } },
    { id:'v120', skill:'Syllogisms', prompt:'No amphibians live permanently in salt water. All frogs are amphibians. Therefore:', correct:'D',
      choices:{
        A:{text:'All frogs live permanently in salt water', explain:'This directly contradicts the first statement.'},
        B:{text:'Some frogs live permanently in salt water', explain:'Even partial overlap is ruled out by the first statement.'},
        C:{text:'Cannot be determined', explain:'A conclusion can actually be drawn here.'},
        D:{text:'No frogs live permanently in salt water', explain:'Since no amphibians live permanently in salt water, and frogs are amphibians, frogs cannot either.'}
      } },
    { id:'v121', skill:'Synonyms', prompt:'Choose the word that means the same as ASSIDUOUS.', correct:'A',
      choices:{
        A:{text:'Diligent and hardworking', explain:'Assiduous means showing great care and effort, diligent.'},
        B:{text:'Lazy', explain:'This is the opposite of assiduous.'},
        C:{text:'Confused', explain:'Confusion isn\'t what assiduous describes.'},
        D:{text:'Careless', explain:'Carelessness is the opposite of assiduous.'}
      } },
    { id:'v122', skill:'Synonyms', prompt:'Choose the word that means the same as EBULLIENT.', correct:'B',
      choices:{
        A:{text:'Gloomy', explain:'This is the opposite of ebullient.'},
        B:{text:'Cheerful and full of energy', explain:'Ebullient means overflowing with enthusiasm and high spirits.'},
        C:{text:'Confused', explain:'Confusion isn\'t what ebullient describes.'},
        D:{text:'Careful', explain:'Carefulness isn\'t what ebullient describes.'}
      } },
    { id:'v123', skill:'Synonyms', prompt:'Choose the word that means the same as OBDURATE.', correct:'C',
      choices:{
        A:{text:'Flexible', explain:'This is the opposite of obdurate.'},
        B:{text:'Confused', explain:'Confusion isn\'t what obdurate describes.'},
        C:{text:'Stubborn and unyielding', explain:'Obdurate means stubbornly refusing to change one\'s opinion or course of action.'},
        D:{text:'Careless', explain:'Carelessness isn\'t what obdurate describes.'}
      } },
    { id:'v124', skill:'Synonyms', prompt:'Choose the word that means the same as PERSPICACIOUS.', correct:'D',
      choices:{
        A:{text:'Foolish', explain:'This is the opposite of perspicacious.'},
        B:{text:'Careless', explain:'This is nearly the opposite of perspicacious.'},
        C:{text:'Confused', explain:'This is the opposite of perspicacious.'},
        D:{text:'Perceptive and sharp-witted', explain:'Perspicacious means having keen insight or good judgment.'}
      } },
    { id:'v125', skill:'Antonyms', prompt:'Choose the word most nearly opposite to MUNIFICENT.', correct:'A',
      choices:{
        A:{text:'Miserly', explain:'Munificent means extremely generous, so miserly is its opposite.'},
        B:{text:'Generous', explain:'Generous is a synonym of munificent, not its opposite.'},
        C:{text:'Giving', explain:'Giving is a synonym of munificent, not opposite.'},
        D:{text:'Charitable', explain:'Charitable is a synonym of munificent, not opposite.'}
      } },
    { id:'v126', skill:'Antonyms', prompt:'Choose the word most nearly opposite to AMIABLE.', correct:'B',
      choices:{
        A:{text:'Friendly', explain:'Friendly is a synonym of amiable, not its opposite.'},
        B:{text:'Hostile', explain:'Amiable means friendly and pleasant, so hostile is its opposite.'},
        C:{text:'Warm', explain:'Warm is related to amiable, not opposite.'},
        D:{text:'Kind', explain:'Kind is related to amiable, not opposite.'}
      } },
    { id:'v127', skill:'Antonyms', prompt:'Choose the word most nearly opposite to PROLIX.', correct:'C',
      choices:{
        A:{text:'Wordy', explain:'Wordy is a synonym of prolix, not its opposite.'},
        B:{text:'Lengthy', explain:'Lengthy is related to prolix, not opposite.'},
        C:{text:'Concise and brief', explain:'Prolix means using too many words, so concise is its opposite.'},
        D:{text:'Detailed', explain:'Detailed is related to prolix, not opposite.'}
      } },
    { id:'v128', skill:'Antonyms', prompt:'Choose the word most nearly opposite to INTRANSIGENT.', correct:'D',
      choices:{
        A:{text:'Stubborn', explain:'Stubborn is a synonym of intransigent, not its opposite.'},
        B:{text:'Unyielding', explain:'Unyielding is a synonym of intransigent, not opposite.'},
        C:{text:'Firm', explain:'Firm is related to intransigent, not opposite.'},
        D:{text:'Flexible and willing to compromise', explain:'Intransigent means refusing to change one\'s views, so flexible is its opposite.'}
      } },
    { id:'v129', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'D',
      choices:{
        A:{text:'Maple', explain:'A maple is a tree, fitting the shared category.'},
        B:{text:'Birch', explain:'A birch is also a tree.'},
        C:{text:'Elm', explain:'An elm is also a tree.'},
        D:{text:'Granite', explain:'Unlike the others, granite is a type of rock, not a tree.'}
      } },
    { id:'v130', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'D',
      choices:{
        A:{text:'Piano', explain:'A piano is a keyboard instrument, fitting the shared category.'},
        B:{text:'Organ', explain:'An organ is also a keyboard instrument.'},
        C:{text:'Harpsichord', explain:'A harpsichord is also a keyboard instrument.'},
        D:{text:'Flute', explain:'Unlike the others, a flute is a wind instrument, not a keyboard instrument.'}
      } },
    { id:'v131', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'D',
      choices:{
        A:{text:'Tiger', explain:'A tiger is a big cat, fitting the shared category.'},
        B:{text:'Leopard', explain:'A leopard is also a big cat.'},
        C:{text:'Panther', explain:'A panther is also a big cat.'},
        D:{text:'Eagle', explain:'Unlike the others, an eagle is a bird, not a big cat.'}
      } },
    { id:'v132', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'D',
      choices:{
        A:{text:'Essay', explain:'An essay is a written work, fitting the shared category.'},
        B:{text:'Article', explain:'An article is also a written work.'},
        C:{text:'Report', explain:'A report is also a written work.'},
        D:{text:'Sculpture', explain:'Unlike the others, a sculpture is a visual art form, not writing.'}
      } },
    { id:'v133', skill:'Analogies', prompt:'Sculptor is to chisel as writer is to ___.', correct:'A',
      choices:{
        A:{text:'Pen', explain:'A sculptor uses a chisel as a primary tool; a writer uses a pen as a primary tool, following the same pattern.'},
        B:{text:'Paper', explain:'Paper is a material a writer works on, not the tool itself.'},
        C:{text:'Book', explain:'A book is what a writer might produce, not the tool used.'},
        D:{text:'Idea', explain:'An idea is what a writer works with conceptually, not a physical tool.'}
      } },
    { id:'v134', skill:'Analogies', prompt:'Nurse is to hospital as pilot is to ___.', correct:'C',
      choices:{
        A:{text:'Airport', explain:'An airport is a larger location, but the pattern calls for the specific workspace, like hospital is specific.'},
        B:{text:'Passenger', explain:'A passenger is who the pilot transports, not the workspace.'},
        C:{text:'Cockpit', explain:'A nurse works specifically in a hospital; a pilot works specifically in a cockpit, following the same pattern.'},
        D:{text:'Airplane ticket', explain:'A ticket is unrelated to the pilot\'s workspace.'}
      } },
    { id:'v135', skill:'Analogies', prompt:'Puzzle is to solve as riddle is to ___.', correct:'B',
      choices:{
        A:{text:'Question', explain:'A question is part of a riddle, not the action performed on it.'},
        B:{text:'Decipher', explain:'A puzzle is solved; a riddle is deciphered, following a similar pattern of figuring something out.'},
        C:{text:'Confuse', explain:'Confusing is the opposite of the action being tested here.'},
        D:{text:'Forget', explain:'Forgetting is unrelated to solving something.'}
      } },
    { id:'v136', skill:'Analogies', prompt:'Battery is to device as fuel is to ___.', correct:'D',
      choices:{
        A:{text:'Energy', explain:'Energy is too abstract compared to the specific parallel to device.'},
        B:{text:'Gas station', explain:'A gas station is where fuel is obtained, not what fuel powers.'},
        C:{text:'Electricity', explain:'Electricity is what a battery provides, not the parallel to device.'},
        D:{text:'Engine', explain:'A battery powers a device; fuel powers an engine, following the same pattern.'}
      } },
    { id:'v137', skill:'Syllogisms', prompt:'All members of the yearbook committee attend Thursday meetings. Sam does not attend Thursday meetings. Therefore:', correct:'A',
      choices:{
        A:{text:'Sam is not on the yearbook committee', explain:'Since all committee members attend Thursday meetings, and Sam does not, Sam cannot be a member.'},
        B:{text:'Sam is on the yearbook committee', explain:'This directly contradicts the premise.'},
        C:{text:'Sam used to be on the yearbook committee', explain:'This adds information not supported by the statements.'},
        D:{text:'Cannot be determined', explain:'This can be determined directly from the premises.'}
      } },
    { id:'v138', skill:'Syllogisms', prompt:'Some tools are electric. All drills are tools. Therefore:', correct:'B',
      choices:{
        A:{text:'All drills are electric', explain:'This overstates the first statement, which only says "some" tools are electric.'},
        B:{text:'Cannot be determined whether drills are electric from these statements alone', explain:'The statements don\'t specify which tools are the electric ones, so drills can\'t be confirmed by logic alone.'},
        C:{text:'No drills are electric', explain:'This isn\'t supported either — drills could be among the electric tools.'},
        D:{text:'Some drills are definitely electric', explain:'This assumes drills are specifically among the "some" electric tools, which isn\'t guaranteed by the statements.'}
      } },
    { id:'v139', skill:'Syllogisms', prompt:'All octagons have eight sides. This shape has eight sides. Therefore:', correct:'C',
      choices:{
        A:{text:'This shape is an octagon', explain:'This assumes only octagons can have eight sides, which the statement doesn\'t guarantee.'},
        B:{text:'This shape is not an octagon', explain:'This isn\'t supported either — the shape could still be an octagon.'},
        C:{text:'Cannot be determined whether this shape is an octagon from these statements alone', explain:'The statement only tells us octagons have eight sides, not that only octagons have eight sides.'},
        D:{text:'No conclusion is possible under any circumstances', explain:'This overstates the uncertainty — the given premises simply don\'t settle this particular question.'}
      } },
    { id:'v140', skill:'Syllogisms', prompt:'No cold-blooded animals regulate their own body temperature internally. All snakes are cold-blooded. Therefore:', correct:'D',
      choices:{
        A:{text:'All snakes regulate their own body temperature internally', explain:'This directly contradicts the first statement.'},
        B:{text:'Some snakes regulate their own body temperature internally', explain:'Even partial overlap is ruled out by the first statement.'},
        C:{text:'Cannot be determined', explain:'A conclusion can actually be drawn here.'},
        D:{text:'No snakes regulate their own body temperature internally', explain:'Since no cold-blooded animals regulate their own body temperature, and snakes are cold-blooded, snakes cannot either.'}
      } },
    { id:'v141', skill:'Synonyms', prompt:'Choose the word that means the same as VORACIOUS.', correct:'B',
      choices:{
        A:{text:'Uninterested', explain:'This is the opposite of voracious.'},
        B:{text:'Greedy, especially for food or knowledge', explain:'Voracious means having a very eager approach to an activity, especially eating.'},
        C:{text:'Confused', explain:'Confusion isn\'t what voracious describes.'},
        D:{text:'Careful', explain:'Carefulness isn\'t what voracious describes.'}
      } },
    { id:'v142', skill:'Synonyms', prompt:'Choose the word that means the same as TENUOUS.', correct:'C',
      choices:{
        A:{text:'Strong', explain:'This is the opposite of tenuous.'},
        B:{text:'Confident', explain:'Confidence isn\'t what tenuous describes.'},
        C:{text:'Weak and barely holding', explain:'Tenuous means very weak or flimsy, barely maintained.'},
        D:{text:'Careless', explain:'Carelessness isn\'t what tenuous describes.'}
      } },
    { id:'v143', skill:'Synonyms', prompt:'Choose the word that means the same as STAUNCH.', correct:'D',
      choices:{
        A:{text:'Disloyal', explain:'This is the opposite of staunch.'},
        B:{text:'Confused', explain:'Confusion isn\'t what staunch describes.'},
        C:{text:'Careless', explain:'Carelessness isn\'t what staunch describes.'},
        D:{text:'Firm and loyal in support', explain:'Staunch means loyal and committed in attitude, firmly supportive.'}
      } },
    { id:'v144', skill:'Synonyms', prompt:'Choose the word that means the same as CAPRICIOUS.', correct:'A',
      choices:{
        A:{text:'Unpredictable and impulsive', explain:'Capricious means given to sudden and unaccountable changes of mood or behavior.'},
        B:{text:'Steady and reliable', explain:'This is the opposite of capricious.'},
        C:{text:'Confused', explain:'Confusion isn\'t what capricious describes.'},
        D:{text:'Careful', explain:'Carefulness isn\'t what capricious describes.'}
      } },
    { id:'v145', skill:'Antonyms', prompt:'Choose the word most nearly opposite to BRAZEN.', correct:'B',
      choices:{
        A:{text:'Bold', explain:'Bold is a synonym of brazen, not its opposite.'},
        B:{text:'Timid', explain:'Brazen means bold and shameless, so timid is its opposite.'},
        C:{text:'Shameless', explain:'Shameless is a synonym of brazen, not opposite.'},
        D:{text:'Confident', explain:'Confident is related to brazen, not opposite.'}
      } },
    { id:'v146', skill:'Antonyms', prompt:'Choose the word most nearly opposite to WARY.', correct:'C',
      choices:{
        A:{text:'Cautious', explain:'Cautious is a synonym of wary, not its opposite.'},
        B:{text:'Suspicious', explain:'Suspicious is related to wary, not opposite.'},
        C:{text:'Trusting and unguarded', explain:'Wary means cautious and watchful, so trusting is its opposite.'},
        D:{text:'Careful', explain:'Careful is related to wary, not opposite.'}
      } },
    { id:'v147', skill:'Antonyms', prompt:'Choose the word most nearly opposite to STOLID.', correct:'D',
      choices:{
        A:{text:'Unemotional', explain:'Unemotional is a synonym of stolid, not its opposite.'},
        B:{text:'Calm', explain:'Calm is related to stolid, not opposite.'},
        C:{text:'Steady', explain:'Steady is related to stolid, not opposite.'},
        D:{text:'Expressive and emotional', explain:'Stolid means showing little emotion, so expressive is its opposite.'}
      } },
    { id:'v148', skill:'Antonyms', prompt:'Choose the word most nearly opposite to VOLUBLE.', correct:'A',
      choices:{
        A:{text:'Reticent and quiet', explain:'Voluble means talking fluently and at length, so reticent is its opposite.'},
        B:{text:'Talkative', explain:'Talkative is a synonym of voluble, not its opposite.'},
        C:{text:'Chatty', explain:'Chatty is a synonym of voluble, not opposite.'},
        D:{text:'Expressive', explain:'Expressive is related to voluble, not opposite.'}
      } },
    { id:'v149', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'D',
      choices:{
        A:{text:'Salmon', explain:'A salmon is a fish, fitting the shared category.'},
        B:{text:'Trout', explain:'A trout is also a fish.'},
        C:{text:'Tuna', explain:'A tuna is also a fish.'},
        D:{text:'Dolphin', explain:'Unlike the others, a dolphin is a mammal, not a fish.'}
      } },
    { id:'v150', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'D',
      choices:{
        A:{text:'Cello', explain:'A cello is a string instrument, fitting the shared category.'},
        B:{text:'Bass', explain:'A double bass is also a string instrument.'},
        C:{text:'Viola', explain:'A viola is also a string instrument.'},
        D:{text:'Trombone', explain:'Unlike the others, a trombone is a brass instrument, not a string instrument.'}
      } },
    { id:'v151', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'D',
      choices:{
        A:{text:'Robin', explain:'A robin is a bird, fitting the shared category.'},
        B:{text:'Cardinal', explain:'A cardinal is also a bird.'},
        C:{text:'Sparrow', explain:'A sparrow is also a bird.'},
        D:{text:'Gecko', explain:'Unlike the others, a gecko is a reptile, not a bird.'}
      } },
    { id:'v152', skill:'Verbal classification', prompt:'Which word does NOT belong with the others?', correct:'D',
      choices:{
        A:{text:'Poem', explain:'A poem is a form of poetry, fitting the shared category.'},
        B:{text:'Sonnet', explain:'A sonnet is also a form of poetry.'},
        C:{text:'Ballad', explain:'A ballad is also a form of poetry.'},
        D:{text:'Portrait', explain:'Unlike the others, a portrait is a visual art form, not a poetry form.'}
      } },
    { id:'v153', skill:'Analogies', prompt:'Architect is to blueprint as chef is to ___.', correct:'C',
      choices:{
        A:{text:'Kitchen', explain:'A kitchen is a workspace, not the guiding document being tested here.'},
        B:{text:'Ingredients', explain:'Ingredients are materials used, not the guiding plan.'},
        C:{text:'Recipe', explain:'An architect follows a blueprint; a chef follows a recipe, following the same pattern.'},
        D:{text:'Restaurant', explain:'A restaurant is a location, not the guiding document.'}
      } },
    { id:'v154', skill:'Analogies', prompt:'Glove is to hand as helmet is to ___.', correct:'A',
      choices:{
        A:{text:'Head', explain:'A glove protects the hand; a helmet protects the head, following the same pattern.'},
        B:{text:'Bicycle', explain:'A bicycle is an activity associated with helmets, not the body part protected.'},
        C:{text:'Safety', explain:'Safety is too abstract compared to the specific body part being tested.'},
        D:{text:'Strap', explain:'A strap is part of the helmet itself, not what it protects.'}
      } },
    { id:'v155', skill:'Analogies', prompt:'Author is to manuscript as sculptor is to ___.', correct:'B',
      choices:{
        A:{text:'Chisel', explain:'A chisel is a tool a sculptor uses, not the finished work.'},
        B:{text:'Statue', explain:'An author produces a manuscript; a sculptor produces a statue, following the same pattern.'},
        C:{text:'Marble', explain:'Marble is a material a sculptor might use, not the finished work itself.'},
        D:{text:'Museum', explain:'A museum is where a statue might be displayed, not the work itself.'}
      } },
    { id:'v156', skill:'Analogies', prompt:'Teacher is to lesson as chef is to ___.', correct:'D',
      choices:{
        A:{text:'Kitchen', explain:'A kitchen is a workspace, not the product being tested here.'},
        B:{text:'Restaurant', explain:'A restaurant is a location, not the product a chef creates.'},
        C:{text:'Apron', explain:'An apron is clothing, not the product a chef creates.'},
        D:{text:'Dish', explain:'A teacher creates a lesson; a chef creates a dish, following the same pattern.'}
      } },
    { id:'v157', skill:'Syllogisms', prompt:'All members of the orchestra own an instrument. Kai does not own an instrument. Therefore:', correct:'A',
      choices:{
        A:{text:'Kai is not in the orchestra', explain:'Since all orchestra members own an instrument, and Kai does not, Kai cannot be a member.'},
        B:{text:'Kai is in the orchestra', explain:'This directly contradicts the premise.'},
        C:{text:'Kai used to be in the orchestra', explain:'This adds information not supported by the statements.'},
        D:{text:'Cannot be determined', explain:'This can be determined directly from the premises.'}
      } },
    { id:'v158', skill:'Syllogisms', prompt:'Some paintings are watercolors. All portraits are paintings. Therefore:', correct:'B',
      choices:{
        A:{text:'All portraits are watercolors', explain:'This overstates the first statement, which only says "some" paintings are watercolors.'},
        B:{text:'Cannot be determined whether portraits are watercolors from these statements alone', explain:'The statements don\'t specify which paintings are the watercolors, so portraits can\'t be confirmed by logic alone.'},
        C:{text:'No portraits are watercolors', explain:'This isn\'t supported either — portraits could be among the watercolors.'},
        D:{text:'Some portraits are definitely watercolors', explain:'This assumes portraits are specifically among the "some" watercolors, which isn\'t guaranteed by the statements.'}
      } },
    { id:'v159', skill:'Syllogisms', prompt:'All rectangles have four right angles. This shape has four right angles. Therefore:', correct:'C',
      choices:{
        A:{text:'This shape is a rectangle', explain:'This assumes only rectangles can have four right angles, which the statement doesn\'t guarantee.'},
        B:{text:'This shape is not a rectangle', explain:'This isn\'t supported either — the shape could still be a rectangle.'},
        C:{text:'Cannot be determined whether this shape is a rectangle from these statements alone', explain:'The statement only tells us rectangles have four right angles, not that only rectangles have four right angles.'},
        D:{text:'No conclusion is possible under any circumstances', explain:'This overstates the uncertainty — the given premises simply don\'t settle this particular question.'}
      } },
    { id:'v160', skill:'Syllogisms', prompt:'No insects have a backbone. All beetles are insects. Therefore:', correct:'D',
      choices:{
        A:{text:'All beetles have a backbone', explain:'This directly contradicts the first statement.'},
        B:{text:'Some beetles have a backbone', explain:'Even partial overlap is ruled out by the first statement.'},
        C:{text:'Cannot be determined', explain:'A conclusion can actually be drawn here.'},
        D:{text:'No beetles have a backbone', explain:'Since no insects have a backbone, and beetles are insects, beetles cannot either.'}
      } }
  ],

  quant: [
    { id:'q1', skill:'Number series', prompt:'2, 5, 11, 23, 47, ___', correct:'C',
      choices:{
        A:{text:'71', explain:'This would fit a pattern of adding a fixed amount each time, which is not what this series does.'},
        B:{text:'83', explain:'This doesn\'t match the doubling-plus-one pattern running through the series.'},
        C:{text:'95', explain:'Each number is double the previous number plus 1, so 47x2+1 = 95.'},
        D:{text:'94', explain:'Close to the pattern, but doubling 47 and adding 1 gives 95, not 94.'}
      } },
    { id:'q2', skill:'Number series', prompt:'3, 6, 12, 24, ___', correct:'C',
      choices:{
        A:{text:'30', explain:'This would fit if the pattern were adding a fixed number, which breaks down after the first couple of terms.'},
        B:{text:'36', explain:'This doesn\'t match the doubling pattern present in the series.'},
        C:{text:'48', explain:'Each term doubles the one before it, so 24 x 2 = 48.'},
        D:{text:'42', explain:'This doesn\'t follow from doubling 24, which is the actual pattern.'}
      } },
    { id:'q3', skill:'Quantitative comparison', prompt:'Compare: Column A = 3/4  Column B = 0.7', correct:'A',
      choices:{
        A:{text:'Column A is greater', explain:'3/4 equals 0.75, which is greater than 0.7.'},
        B:{text:'Column B is greater', explain:'This would only be true if 0.7 were larger than 0.75, but it is not.'},
        C:{text:'The two columns are equal', explain:'0.75 and 0.7 are close but not equal.'},
        D:{text:'Cannot be determined', explain:'Both values are fixed numbers, so a direct comparison is always possible here.'}
      } },
    { id:'q4', skill:'Quantitative comparison', prompt:'Compare: Column A = 5 squared  Column B = 2 to the 5th power', correct:'B',
      choices:{
        A:{text:'Column A is greater', explain:'It is tempting to assume the larger base (5) wins, but exponents repeat the base by itself, and 2 to the 5th ends up larger.'},
        B:{text:'Column B is greater', explain:'5 squared is 25 and 2 to the 5th is 32, so Column B is greater.'},
        C:{text:'The two columns are equal', explain:'25 and 32 are not equal.'},
        D:{text:'Cannot be determined', explain:'Both expressions evaluate to fixed numbers, so they can be directly compared.'}
      } },
    { id:'q5', skill:'Number series', prompt:'1, 4, 9, 16, 25, ___', correct:'C',
      choices:{
        A:{text:'30', explain:'This doesn\'t match the perfect-squares pattern (1, 4, 9, 16...) running through the series.'},
        B:{text:'32', explain:'This isn\'t a perfect square following 25 in the sequence.'},
        C:{text:'36', explain:'These are consecutive perfect squares, so following 5 squared = 25, the next term is 6 squared = 36.'},
        D:{text:'34', explain:'This isn\'t a perfect square, so it breaks the pattern.'}
      } },
    { id:'q6', skill:'Number series', prompt:'100, 90, 81, 73, ___', correct:'A',
      choices:{
        A:{text:'66', explain:'The amount subtracted decreases by 1 each time (-10,-9,-8,-7), so 73-7 = 66.'},
        B:{text:'64', explain:'This would follow from subtracting 9 again, but the gap itself decreases by 1 each step.'},
        C:{text:'68', explain:'This doesn\'t match the decreasing-gap pattern in the series.'},
        D:{text:'70', explain:'This would follow a much smaller subtraction than the pattern calls for at this step.'}
      } },
    { id:'q7', skill:'Quantitative comparison', prompt:'Compare: Column A = 40% of 60  Column B = 25% of 90', correct:'A',
      choices:{
        A:{text:'Column A is greater', explain:'40% of 60 is 24, and 25% of 90 is 22.5, so Column A is greater.'},
        B:{text:'Column B is greater', explain:'This would only be true if 22.5 were larger than 24, which it is not.'},
        C:{text:'The two columns are equal', explain:'24 and 22.5 are close but not equal.'},
        D:{text:'Cannot be determined', explain:'Both percentages of both numbers can be calculated directly, so a comparison is always possible.'}
      } },
    { id:'q8', skill:'Number series', prompt:'5, 10, 8, 16, 14, 28, ___', correct:'A',
      choices:{
        A:{text:'26', explain:'The pattern alternates x2 and -2, so after 14x2=28, the next step is 28-2=26.'},
        B:{text:'56', explain:'This assumes another x2 step, but the pattern calls for a -2 step here.'},
        C:{text:'30', explain:'This doesn\'t match either operation in the alternating pattern.'},
        D:{text:'24', explain:'Close, but this would require subtracting 4, not 2, from 28.'}
      } },
    { id:'q9', skill:'Number series', prompt:'7, 14, 28, 56, ___', correct:'C',
      choices:{
        A:{text:'84', explain:'This would follow adding 28 again rather than doubling 56.'},
        B:{text:'98', explain:'This doesn\'t match the doubling pattern present in the series.'},
        C:{text:'112', explain:'Each term doubles the previous one, so 56x2=112.'},
        D:{text:'106', explain:'This doesn\'t result from doubling 56 correctly.'}
      } },
    { id:'q10', skill:'Number series', prompt:'81, 27, 9, 3, ___', correct:'B',
      choices:{
        A:{text:'0', explain:'This assumes subtracting rather than dividing, which is not the pattern here.'},
        B:{text:'1', explain:'Each term is divided by 3, so 3 divided by 3 is 1.'},
        C:{text:'2', explain:'This doesn\'t match dividing 3 by 3 correctly.'},
        D:{text:'1/3', explain:'This would be the next step after 1, going one term too far.'}
      } },
    { id:'q11', skill:'Quantitative comparison', prompt:'Compare: Column A = 1/3  Column B = 0.35', correct:'B',
      choices:{
        A:{text:'Column A is greater', explain:'1/3 is approximately 0.333, which is less than 0.35, so this is not correct.'},
        B:{text:'Column B is greater', explain:'1/3 is approximately 0.333, and 0.35 is larger than that, so Column B is greater.'},
        C:{text:'The two columns are equal', explain:'0.333 and 0.35 are close but not equal.'},
        D:{text:'Cannot be determined', explain:'Both values can be expressed as decimals and compared directly.'}
      } },
    { id:'q12', skill:'Quantitative comparison', prompt:'Compare: Column A = the square root of 49  Column B = 6', correct:'A',
      choices:{
        A:{text:'Column A is greater', explain:'The square root of 49 is 7, which is greater than 6.'},
        B:{text:'Column B is greater', explain:'This would only be true if 6 were greater than 7, which it is not.'},
        C:{text:'The two columns are equal', explain:'7 and 6 are not equal.'},
        D:{text:'Cannot be determined', explain:'The square root of 49 is a fixed value (7), so a direct comparison is possible.'}
      } },
    { id:'q13', skill:'Number series', prompt:'2, 6, 18, 54, ___', correct:'B',
      choices:{
        A:{text:'108', explain:'This would follow adding 54 rather than multiplying by 3.'},
        B:{text:'162', explain:'Each term triples the one before it, so 54x3=162.'},
        C:{text:'150', explain:'This doesn\'t match tripling 54 correctly.'},
        D:{text:'216', explain:'This overshoots the correct product of 54 and 3.'}
      } },
    { id:'q14', skill:'Number series', prompt:'4, 9, 16, 25, 36, ___', correct:'C',
      choices:{
        A:{text:'42', explain:'This isn\'t a perfect square, so it breaks the pattern.'},
        B:{text:'45', explain:'This also isn\'t a perfect square following the sequence.'},
        C:{text:'49', explain:'These are consecutive perfect squares (2 squared through 6 squared), so the next term is 7 squared = 49.'},
        D:{text:'48', explain:'This isn\'t a perfect square, so it doesn\'t fit the pattern.'}
      } },
    { id:'q15', skill:'Quantitative comparison', prompt:'Compare: Column A = 3 cubed  Column B = 4 squared', correct:'A',
      choices:{
        A:{text:'Column A is greater', explain:'3 cubed is 27 and 4 squared is 16, so Column A is greater.'},
        B:{text:'Column B is greater', explain:'This would only be true if 16 were greater than 27, which it is not.'},
        C:{text:'The two columns are equal', explain:'27 and 16 are not equal.'},
        D:{text:'Cannot be determined', explain:'Both expressions evaluate to fixed numbers, so a direct comparison is possible.'}
      } },
    { id:'q16', skill:'Number series', prompt:'200, 100, 50, 25, ___', correct:'B',
      choices:{
        A:{text:'10', explain:'This doesn\'t match dividing 25 by 2.'},
        B:{text:'12.5', explain:'Each term is divided by 2, so 25 divided by 2 is 12.5.'},
        C:{text:'15', explain:'This doesn\'t follow from dividing 25 by 2 correctly.'},
        D:{text:'20', explain:'This is too large to follow the halving pattern from 25.'}
      } },
    { id:'q17', skill:'Quantitative comparison', prompt:'Compare: Column A = 60% of 150  Column B = 75% of 120', correct:'C',
      choices:{
        A:{text:'Column A is greater', explain:'60% of 150 is 90, which is not greater than Column B\'s value.'},
        B:{text:'Column B is greater', explain:'75% of 120 is also 90, so it is not greater than Column A.'},
        C:{text:'The two columns are equal', explain:'60% of 150 is 90, and 75% of 120 is also 90, so the columns are equal.'},
        D:{text:'Cannot be determined', explain:'Both percentages can be calculated directly, so a comparison is always possible.'}
      } },
    { id:'q18', skill:'Number series', prompt:'1, 1, 2, 3, 5, 8, ___', correct:'C',
      choices:{
        A:{text:'11', explain:'This doesn\'t match adding the two previous terms together.'},
        B:{text:'12', explain:'This is close but doesn\'t match 5+8 exactly.'},
        C:{text:'13', explain:'Each term is the sum of the two before it, so 5+8=13.'},
        D:{text:'15', explain:'This overshoots the sum of 5 and 8.'}
      } },
    { id:'q19', skill:'Quantitative comparison', prompt:'Compare: Column A = 0.5 squared  Column B = 0.5 times 2', correct:'B',
      choices:{
        A:{text:'Column A is greater', explain:'0.5 squared is 0.25, which is much smaller than Column B\'s value, not greater.'},
        B:{text:'Column B is greater', explain:'0.5 squared is 0.25, while 0.5 times 2 is 1, so Column B is greater.'},
        C:{text:'The two columns are equal', explain:'0.25 and 1 are not equal.'},
        D:{text:'Cannot be determined', explain:'Both expressions evaluate to fixed numbers, so a direct comparison is possible.'}
      } },
    { id:'q20', skill:'Number series', prompt:'9, 7, 10, 8, 11, 9, ___', correct:'A',
      choices:{
        A:{text:'12', explain:'The pattern alternates -2 and +3, and since the last step was -2 (11 to 9), the next step is +3, giving 9+3=12.'},
        B:{text:'10', explain:'This doesn\'t match the +3 step that comes next in the alternating pattern.'},
        C:{text:'6', explain:'This would follow another -2 step, but the pattern calls for +3 here.'},
        D:{text:'13', explain:'This overshoots the correct +3 step from 9.'}
      } },
    { id:'q21', skill:'Number series', prompt:'8, 16, 32, 64, ___', correct:'C',
      choices:{
        A:{text:'96', explain:'Doesn\'t match doubling.'},
        B:{text:'112', explain:'Doesn\'t match doubling correctly.'},
        C:{text:'128', explain:'Each term doubles: 64x2=128.'},
        D:{text:'120', explain:'Doesn\'t match doubling.'}
      } },
    { id:'q22', skill:'Number series', prompt:'100, 50, 25, 12.5, ___', correct:'B',
      choices:{
        A:{text:'5', explain:'Doesn\'t match dividing by 2.'},
        B:{text:'6.25', explain:'Each term is divided by 2: 12.5/2=6.25.'},
        C:{text:'7.5', explain:'Doesn\'t match dividing 12.5 by 2 correctly.'},
        D:{text:'10', explain:'Doesn\'t match the halving pattern.'}
      } },
    { id:'q23', skill:'Number series', prompt:'2, 5, 10, 17, 26, ___', correct:'D',
      choices:{
        A:{text:'32', explain:'Doesn\'t match the increasing-gap pattern.'},
        B:{text:'34', explain:'Doesn\'t match the correct next gap.'},
        C:{text:'35', explain:'Close, but doesn\'t match adding 11 to 26.'},
        D:{text:'37', explain:'The gaps increase by 2 each time (+3,+5,+7,+9), so the next gap is +11: 26+11=37.'}
      } },
    { id:'q24', skill:'Number series', prompt:'7, 14, 21, 28, ___', correct:'A',
      choices:{
        A:{text:'35', explain:'Each term adds 7: 28+7=35.'},
        B:{text:'32', explain:'Doesn\'t match adding 7.'},
        C:{text:'36', explain:'Doesn\'t match adding 7 correctly.'},
        D:{text:'42', explain:'This skips ahead an extra step in the pattern.'}
      } },
    { id:'q25', skill:'Number series', prompt:'1, 8, 27, 64, ___', correct:'B',
      choices:{
        A:{text:'100', explain:'Doesn\'t match the perfect-cubes pattern.'},
        B:{text:'125', explain:'These are consecutive perfect cubes (1,8,27,64 = 1\u00b3,2\u00b3,3\u00b3,4\u00b3), so the next term is 5\u00b3=125.'},
        C:{text:'128', explain:'This matches a doubling pattern, not the cubes pattern actually present.'},
        D:{text:'81', explain:'This is a perfect square, not the next perfect cube.'}
      } },
    { id:'q26', skill:'Number series', prompt:'3, 4, 7, 11, 18, ___', correct:'C',
      choices:{
        A:{text:'22', explain:'Doesn\'t match summing the two previous terms.'},
        B:{text:'25', explain:'Doesn\'t match the correct sum.'},
        C:{text:'29', explain:'Each term is the sum of the two before it: 11+18=29.'},
        D:{text:'31', explain:'Overshoots the correct sum of 11 and 18.'}
      } },
    { id:'q27', skill:'Number series', prompt:'64, 32, 16, 8, ___', correct:'D',
      choices:{
        A:{text:'2', explain:'This skips ahead an extra division step.'},
        B:{text:'6', explain:'Doesn\'t match dividing by 2.'},
        C:{text:'5', explain:'Doesn\'t match the halving pattern.'},
        D:{text:'4', explain:'Each term is divided by 2: 8/2=4.'}
      } },
    { id:'q28', skill:'Number series', prompt:'5, 11, 23, 47, ___', correct:'A',
      choices:{
        A:{text:'95', explain:'Each number doubles the previous and adds 1: 47x2+1=95.'},
        B:{text:'92', explain:'Doesn\'t match the doubling-plus-one pattern.'},
        C:{text:'90', explain:'Doesn\'t match the correct calculation.'},
        D:{text:'94', explain:'Close, but doesn\'t match 47x2+1 exactly.'}
      } },
    { id:'q29', skill:'Number series', prompt:'2, 4, 8, 14, 22, ___', correct:'D',
      choices:{
        A:{text:'26', explain:'Doesn\'t match the increasing-gap pattern.'},
        B:{text:'28', explain:'Doesn\'t match the correct next gap.'},
        C:{text:'30', explain:'Close, but doesn\'t match adding 10 to 22.'},
        D:{text:'32', explain:'The gaps increase by 2 each time (+2,+4,+6,+8), so the next gap is +10: 22+10=32.'}
      } },
    { id:'q30', skill:'Number series', prompt:'90, 80, 72, 66, ___', correct:'A',
      choices:{
        A:{text:'62', explain:'The amount subtracted decreases by 2 each time (-10,-8,-6), so the next step is -4: 66-4=62.'},
        B:{text:'60', explain:'This overshoots the correct -4 step.'},
        C:{text:'64', explain:'Doesn\'t match the decreasing-gap pattern.'},
        D:{text:'58', explain:'This assumes a larger subtraction than the pattern calls for.'}
      } },
    { id:'q31', skill:'Quantitative comparison', prompt:'Compare: Column A = 5/6   Column B = 0.83', correct:'A',
      choices:{
        A:{text:'Column A is greater', explain:'5/6 is approximately 0.833, which is greater than 0.83.'},
        B:{text:'Column B is greater', explain:'0.83 is actually less than 5/6.'},
        C:{text:'The two columns are equal', explain:'0.833 and 0.83 are close but not equal.'},
        D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'}
      } },
    { id:'q32', skill:'Quantitative comparison', prompt:'Compare: Column A = 9 squared   Column B = 3 to the 4th power', correct:'C',
      choices:{
        A:{text:'Column A is greater', explain:'9 squared is 81, which is not greater than Column B.'},
        B:{text:'Column B is greater', explain:'3 to the 4th is also 81, not greater than Column A.'},
        C:{text:'The two columns are equal', explain:'9 squared = 81 and 3 to the 4th power = 81, so they are equal.'},
        D:{text:'Cannot be determined', explain:'Both evaluate to fixed numbers, so a comparison is possible.'}
      } },
    { id:'q33', skill:'Quantitative comparison', prompt:'Compare: Column A = 35% of 80   Column B = 20% of 140', correct:'C',
      choices:{
        A:{text:'Column A is greater', explain:'35% of 80 is 28, which is not greater than Column B.'},
        B:{text:'Column B is greater', explain:'20% of 140 is also 28, not greater than Column A.'},
        C:{text:'The two columns are equal', explain:'35% of 80 is 28, and 20% of 140 is also 28, so they are equal.'},
        D:{text:'Cannot be determined', explain:'Both percentages can be calculated directly.'}
      } },
    { id:'q34', skill:'Quantitative comparison', prompt:'Compare: Column A = 2/9   Column B = 0.2', correct:'A',
      choices:{
        A:{text:'Column A is greater', explain:'2/9 is approximately 0.222, which is greater than 0.2.'},
        B:{text:'Column B is greater', explain:'0.2 is actually less than 2/9.'},
        C:{text:'The two columns are equal', explain:'0.222 and 0.2 are close but not equal.'},
        D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'}
      } },
    { id:'q35', skill:'Quantitative comparison', prompt:'Compare: Column A = 10 squared   Column B = 2 to the 7th power', correct:'B',
      choices:{
        A:{text:'Column A is greater', explain:'10 squared is 100, which is less than 2 to the 7th power.'},
        B:{text:'Column B is greater', explain:'2 to the 7th power is 128, greater than 10 squared (100).'},
        C:{text:'The two columns are equal', explain:'100 and 128 are not equal.'},
        D:{text:'Cannot be determined', explain:'Both evaluate to fixed numbers, so a comparison is possible.'}
      } },
    { id:'q36', skill:'Quantitative comparison', prompt:'Compare: Column A = 3/4 of 60   Column B = 50% of 100', correct:'B',
      choices:{
        A:{text:'Column A is greater', explain:'3/4 of 60 is 45, which is less than Column B.'},
        B:{text:'Column B is greater', explain:'50% of 100 is 50, greater than 3/4 of 60 (45).'},
        C:{text:'The two columns are equal', explain:'45 and 50 are not equal.'},
        D:{text:'Cannot be determined', explain:'Both can be calculated directly.'}
      } },
    { id:'q37', skill:'Quantitative comparison', prompt:'Compare: Column A = 0.6   Column B = 5/8', correct:'B',
      choices:{
        A:{text:'Column A is greater', explain:'0.6 is less than 5/8 (0.625).'},
        B:{text:'Column B is greater', explain:'5/8 equals 0.625, which is greater than 0.6.'},
        C:{text:'The two columns are equal', explain:'0.6 and 0.625 are close but not equal.'},
        D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'}
      } },
    { id:'q38', skill:'Quantitative comparison', prompt:'Compare: Column A = 4 cubed   Column B = 6 squared', correct:'A',
      choices:{
        A:{text:'Column A is greater', explain:'4 cubed is 64, which is greater than 6 squared (36).'},
        B:{text:'Column B is greater', explain:'6 squared is 36, less than 4 cubed.'},
        C:{text:'The two columns are equal', explain:'64 and 36 are not equal.'},
        D:{text:'Cannot be determined', explain:'Both evaluate to fixed numbers, so a comparison is possible.'}
      } },
    { id:'q39', skill:'Quantitative comparison', prompt:'Compare: Column A = 15% of 300   Column B = 40% of 100', correct:'A',
      choices:{
        A:{text:'Column A is greater', explain:'15% of 300 is 45, greater than 40% of 100 (40).'},
        B:{text:'Column B is greater', explain:'40% of 100 is 40, less than Column A.'},
        C:{text:'The two columns are equal', explain:'45 and 40 are not equal.'},
        D:{text:'Cannot be determined', explain:'Both percentages can be calculated directly.'}
      } },
    { id:'q40', skill:'Quantitative comparison', prompt:'Compare: Column A = 7/10   Column B = 0.72', correct:'B',
      choices:{
        A:{text:'Column A is greater', explain:'7/10 is 0.7, which is less than 0.72.'},
        B:{text:'Column B is greater', explain:'0.72 is greater than 7/10 (0.7).'},
        C:{text:'The two columns are equal', explain:'0.7 and 0.72 are close but not equal.'},
        D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'}
      } },
    { id:'q41', skill:'Number series', prompt:'4, 12, 36, 108, ___', correct:'C',
      choices:{
        A:{text:'216', explain:'Doesn\'t match tripling 108.'},
        B:{text:'300', explain:'Doesn\'t match the correct product.'},
        C:{text:'324', explain:'Each term triples: 108x3=324.'},
        D:{text:'432', explain:'This overshoots the correct product of 108 and 3.'}
      } },
    { id:'q42', skill:'Number series', prompt:'3, 9, 15, 21, ___', correct:'D',
      choices:{
        A:{text:'24', explain:'Doesn\'t match adding 6.'},
        B:{text:'25', explain:'Doesn\'t match adding 6 correctly.'},
        C:{text:'26', explain:'Doesn\'t match the +6 pattern.'},
        D:{text:'27', explain:'Each term adds 6: 21+6=27.'}
      } },
    { id:'q43', skill:'Number series', prompt:'1, 3, 7, 15, 31, ___', correct:'A',
      choices:{
        A:{text:'63', explain:'Each term doubles the previous and adds 1: 31x2+1=63.'},
        B:{text:'59', explain:'Doesn\'t match the doubling-plus-one pattern.'},
        C:{text:'60', explain:'Doesn\'t match the correct calculation.'},
        D:{text:'65', explain:'This overshoots the correct value.'}
      } },
    { id:'q44', skill:'Number series', prompt:'81, 27, 9, ___', correct:'B',
      choices:{
        A:{text:'1', explain:'This skips ahead an extra division step.'},
        B:{text:'3', explain:'Each term is divided by 3: 9/3=3.'},
        C:{text:'6', explain:'Doesn\'t match dividing by 3.'},
        D:{text:'9', explain:'This repeats the previous term instead of continuing the pattern.'}
      } },
    { id:'q45', skill:'Number series', prompt:'2, 3, 5, 8, 12, 17, ___', correct:'C',
      choices:{
        A:{text:'20', explain:'Doesn\'t match the increasing-gap pattern.'},
        B:{text:'21', explain:'Doesn\'t match the correct next gap.'},
        C:{text:'23', explain:'The gaps increase by 1 each time (+1,+2,+3,+4,+5), so the next gap is +6: 17+6=23.'},
        D:{text:'25', explain:'This overshoots the correct next gap.'}
      } },
    { id:'q46', skill:'Number series', prompt:'6, 12, 24, 48, 96, ___', correct:'D',
      choices:{
        A:{text:'144', explain:'Doesn\'t match doubling 96.'},
        B:{text:'172', explain:'Doesn\'t match the correct product.'},
        C:{text:'180', explain:'Doesn\'t match doubling correctly.'},
        D:{text:'192', explain:'Each term doubles: 96x2=192.'}
      } },
    { id:'q47', skill:'Number series', prompt:'1, 2, 4, 7, 11, 16, ___', correct:'A',
      choices:{
        A:{text:'22', explain:'The gaps increase by 1 each time (+1,+2,+3,+4,+5), so the next gap is +6: 16+6=22.'},
        B:{text:'20', explain:'Doesn\'t match the correct next gap.'},
        C:{text:'21', explain:'Close, but doesn\'t match adding 6 to 16.'},
        D:{text:'24', explain:'This overshoots the correct next gap.'}
      } },
    { id:'q48', skill:'Number series', prompt:'5, 10, 20, 40, ___', correct:'B',
      choices:{
        A:{text:'60', explain:'Doesn\'t match doubling 40.'},
        B:{text:'80', explain:'Each term doubles: 40x2=80.'},
        C:{text:'70', explain:'Doesn\'t match doubling correctly.'},
        D:{text:'45', explain:'This adds instead of doubling.'}
      } },
    { id:'q49', skill:'Number series', prompt:'100, 91, 83, 76, 70, ___', correct:'C',
      choices:{
        A:{text:'64', explain:'Close, but doesn\'t match the correct next gap.'},
        B:{text:'63', explain:'Doesn\'t match the decreasing-gap pattern.'},
        C:{text:'65', explain:'The amount subtracted decreases by 1 each time (-9,-8,-7,-6), so the next step is -5: 70-5=65.'},
        D:{text:'67', explain:'Doesn\'t match the -5 step.'}
      } },
    { id:'q50', skill:'Number series', prompt:'1, 1, 2, 3, 5, 8, 13, ___', correct:'D',
      choices:{
        A:{text:'18', explain:'Doesn\'t match summing the two previous terms.'},
        B:{text:'19', explain:'Doesn\'t match the correct sum.'},
        C:{text:'20', explain:'Close, but doesn\'t match 8+13 exactly.'},
        D:{text:'21', explain:'Each term is the sum of the two before it: 8+13=21.'}
      } },
    { id:'q51', skill:'Quantitative comparison', prompt:'Compare: Column A = 5/9   Column B = 0.56', correct:'B',
      choices:{
        A:{text:'Column A is greater', explain:'5/9 is approximately 0.556, which is slightly less than 0.56.'},
        B:{text:'Column B is greater', explain:'0.56 is slightly greater than 5/9 (about 0.556).'},
        C:{text:'The two columns are equal', explain:'0.556 and 0.56 are close but not equal.'},
        D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'}
      } },
    { id:'q52', skill:'Quantitative comparison', prompt:'Compare: Column A = 2 to the 6th power   Column B = 4 cubed', correct:'C',
      choices:{
        A:{text:'Column A is greater', explain:'2 to the 6th power is 64, which is not greater than Column B.'},
        B:{text:'Column B is greater', explain:'4 cubed is also 64, not greater than Column A.'},
        C:{text:'The two columns are equal', explain:'2 to the 6th power = 64 and 4 cubed = 64, so they are equal.'},
        D:{text:'Cannot be determined', explain:'Both evaluate to fixed numbers, so a comparison is possible.'}
      } },
    { id:'q53', skill:'Quantitative comparison', prompt:'Compare: Column A = 45% of 60   Column B = 30% of 90', correct:'C',
      choices:{
        A:{text:'Column A is greater', explain:'45% of 60 is 27, not greater than Column B.'},
        B:{text:'Column B is greater', explain:'30% of 90 is also 27, not greater than Column A.'},
        C:{text:'The two columns are equal', explain:'45% of 60 is 27, and 30% of 90 is also 27, so they are equal.'},
        D:{text:'Cannot be determined', explain:'Both percentages can be calculated directly.'}
      } },
    { id:'q54', skill:'Quantitative comparison', prompt:'Compare: Column A = 7/8   Column B = 0.85', correct:'D',
      choices:{
        A:{text:'Column B is greater', explain:'0.85 is less than 7/8 (0.875).'},
        B:{text:'The two columns are equal', explain:'0.875 and 0.85 are close but not equal.'},
        C:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'},
        D:{text:'Column A is greater', explain:'7/8 equals 0.875, which is greater than 0.85.'}
      } },
    { id:'q55', skill:'Quantitative comparison', prompt:'Compare: Column A = 6 squared   Column B = 3 cubed', correct:'B',
      choices:{
        A:{text:'Column B is greater', explain:'3 cubed is 27, less than 6 squared.'},
        B:{text:'Column A is greater', explain:'6 squared is 36, greater than 3 cubed (27).'},
        C:{text:'The two columns are equal', explain:'36 and 27 are not equal.'},
        D:{text:'Cannot be determined', explain:'Both evaluate to fixed numbers, so a comparison is possible.'}
      } },
    { id:'q56', skill:'Quantitative comparison', prompt:'Compare: Column A = 0.45   Column B = 4/9', correct:'C',
      choices:{
        A:{text:'Column B is greater', explain:'4/9 is less than 0.45.'},
        B:{text:'The two columns are equal', explain:'0.45 and 0.444 are close but not equal.'},
        C:{text:'Column A is greater', explain:'0.45 is greater than 4/9 (approximately 0.444).'},
        D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'}
      } },
    { id:'q57', skill:'Quantitative comparison', prompt:'Compare: Column A = 1/6   Column B = 0.15', correct:'D',
      choices:{
        A:{text:'Column B is greater', explain:'0.15 is less than 1/6 (about 0.167).'},
        B:{text:'The two columns are equal', explain:'0.167 and 0.15 are close but not equal.'},
        C:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'},
        D:{text:'Column A is greater', explain:'1/6 is approximately 0.167, which is greater than 0.15.'}
      } },
    { id:'q58', skill:'Quantitative comparison', prompt:'Compare: Column A = 55% of 40   Column B = 20% of 100', correct:'B',
      choices:{
        A:{text:'Column B is greater', explain:'20% of 100 is 20, less than Column A.'},
        B:{text:'Column A is greater', explain:'55% of 40 is 22, greater than 20% of 100 (20).'},
        C:{text:'The two columns are equal', explain:'22 and 20 are not equal.'},
        D:{text:'Cannot be determined', explain:'Both percentages can be calculated directly.'}
      } },
    { id:'q59', skill:'Quantitative comparison', prompt:'Compare: Column A = 8 squared   Column B = 2 to the 6th power', correct:'D',
      choices:{
        A:{text:'Column A is greater', explain:'8 squared is 64, not greater than Column B.'},
        B:{text:'Column B is greater', explain:'2 to the 6th power is also 64, not greater than Column A.'},
        C:{text:'Cannot be determined', explain:'Both evaluate to fixed numbers, so a comparison is possible.'},
        D:{text:'The two columns are equal', explain:'8 squared = 64 and 2 to the 6th power = 64, so they are equal.'}
      } },
    { id:'q60', skill:'Quantitative comparison', prompt:'Compare: Column A = 9/10   Column B = 0.91', correct:'B',
      choices:{
        A:{text:'Column A is greater', explain:'9/10 is 0.9, which is less than 0.91.'},
        B:{text:'Column B is greater', explain:'0.91 is greater than 9/10 (0.9).'},
        C:{text:'The two columns are equal', explain:'0.9 and 0.91 are close but not equal.'},
        D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'}
      } },
    { id:'q61', skill:'Number series', prompt:'9, 18, 36, 72, ___', correct:'D',
      choices:{
        A:{text:'128', explain:'Doesn\'t match doubling 72.'},
        B:{text:'136', explain:'Doesn\'t match the correct product.'},
        C:{text:'140', explain:'Doesn\'t match doubling correctly.'},
        D:{text:'144', explain:'Each term doubles: 72x2=144.'}
      } },
    { id:'q62', skill:'Number series', prompt:'5, 8, 11, 14, ___', correct:'A',
      choices:{
        A:{text:'17', explain:'Each term adds 3: 14+3=17.'},
        B:{text:'16', explain:'Doesn\'t match adding 3.'},
        C:{text:'18', explain:'Overshoots the correct value.'},
        D:{text:'15', explain:'Doesn\'t match the +3 pattern.'}
      } },
    { id:'q63', skill:'Number series', prompt:'3, 7, 15, 31, 63, ___', correct:'B',
      choices:{
        A:{text:'123', explain:'Doesn\'t match the doubling-plus-one pattern.'},
        B:{text:'127', explain:'Each number doubles the previous and adds 1: 63x2+1=127.'},
        C:{text:'125', explain:'Close, but doesn\'t match 63x2+1 exactly.'},
        D:{text:'130', explain:'Overshoots the correct value.'}
      } },
    { id:'q64', skill:'Number series', prompt:'256, 128, 64, 32, ___', correct:'C',
      choices:{
        A:{text:'8', explain:'This skips ahead an extra division step.'},
        B:{text:'12', explain:'Doesn\'t match dividing by 2.'},
        C:{text:'16', explain:'Each term is divided by 2: 32/2=16.'},
        D:{text:'24', explain:'Doesn\'t match the halving pattern.'}
      } },
    { id:'q65', skill:'Number series', prompt:'8, 27, 64, 125, ___', correct:'D',
      choices:{
        A:{text:'150', explain:'Doesn\'t match the perfect-cubes pattern.'},
        B:{text:'196', explain:'This is a perfect square, not the next perfect cube.'},
        C:{text:'200', explain:'Doesn\'t match the correct next cube.'},
        D:{text:'216', explain:'These are consecutive perfect cubes (2, 3, 4, 5 cubed), so the next term is 6 cubed = 216.'}
      } },
    { id:'q66', skill:'Number series', prompt:'3, 6, 11, 18, 27, ___', correct:'A',
      choices:{
        A:{text:'38', explain:'The gaps increase by 2 each time (+3,+5,+7,+9), so the next gap is +11: 27+11=38.'},
        B:{text:'36', explain:'Doesn\'t match the correct next gap.'},
        C:{text:'40', explain:'Overshoots the correct next gap.'},
        D:{text:'35', explain:'Doesn\'t match the increasing-gap pattern.'}
      } },
    { id:'q67', skill:'Number series', prompt:'7, 21, 63, 189, ___', correct:'B',
      choices:{
        A:{text:'504', explain:'Doesn\'t match tripling 189.'},
        B:{text:'567', explain:'Each term triples: 189x3=567.'},
        C:{text:'550', explain:'Doesn\'t match the correct product.'},
        D:{text:'600', explain:'Overshoots the correct product.'}
      } },
    { id:'q68', skill:'Number series', prompt:'50, 48, 44, 38, ___', correct:'C',
      choices:{
        A:{text:'28', explain:'Doesn\'t match the decreasing-gap pattern.'},
        B:{text:'32', explain:'Doesn\'t match the correct next gap.'},
        C:{text:'30', explain:'The amount subtracted increases by 2 each time (-2,-4,-6), so the next step is -8: 38-8=30.'},
        D:{text:'26', explain:'Overshoots the correct -8 step.'}
      } },
    { id:'q69', skill:'Number series', prompt:'4, 7, 13, 25, 49, ___', correct:'D',
      choices:{
        A:{text:'90', explain:'Doesn\'t match the x2-1 pattern.'},
        B:{text:'95', explain:'Close, but doesn\'t match 49x2-1 exactly.'},
        C:{text:'99', explain:'Overshoots the correct value.'},
        D:{text:'97', explain:'Each term doubles the previous and subtracts 1: 49x2-1=97.'}
      } },
    { id:'q70', skill:'Number series', prompt:'15, 13, 16, 14, 17, 15, ___', correct:'A',
      choices:{
        A:{text:'18', explain:'The pattern alternates -2 and +3; since the last step was -2 (17 to 15), the next step is +3: 15+3=18.'},
        B:{text:'16', explain:'Doesn\'t match the +3 step that comes next.'},
        C:{text:'13', explain:'This would follow another -2 step, but the pattern calls for +3 here.'},
        D:{text:'20', explain:'Overshoots the correct +3 step.'}
      } },
    { id:'q71', skill:'Quantitative comparison', prompt:'Compare: Column A = 3/7   Column B = 0.43', correct:'B',
      choices:{
        A:{text:'Column A is greater', explain:'3/7 is approximately 0.429, which is less than 0.43.'},
        B:{text:'Column B is greater', explain:'0.43 is slightly greater than 3/7 (about 0.429).'},
        C:{text:'The two columns are equal', explain:'0.429 and 0.43 are close but not equal.'},
        D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'}
      } },
    { id:'q72', skill:'Quantitative comparison', prompt:'Compare: Column A = 5 squared   Column B = 3 cubed', correct:'C',
      choices:{
        A:{text:'Column A is greater', explain:'5 squared is 25, which is less than 3 cubed (27).'},
        B:{text:'The two columns are equal', explain:'25 and 27 are not equal.'},
        C:{text:'Column B is greater', explain:'3 cubed is 27, greater than 5 squared (25).'},
        D:{text:'Cannot be determined', explain:'Both evaluate to fixed numbers, so a comparison is possible.'}
      } },
    { id:'q73', skill:'Quantitative comparison', prompt:'Compare: Column A = 25% of 120   Column B = 15% of 200', correct:'D',
      choices:{
        A:{text:'Column A is greater', explain:'25% of 120 is 30, not greater than Column B.'},
        B:{text:'Column B is greater', explain:'15% of 200 is also 30, not greater than Column A.'},
        C:{text:'Cannot be determined', explain:'Both percentages can be calculated directly.'},
        D:{text:'The two columns are equal', explain:'25% of 120 is 30, and 15% of 200 is also 30, so they are equal.'}
      } },
    { id:'q74', skill:'Quantitative comparison', prompt:'Compare: Column A = 11/12   Column B = 0.9', correct:'A',
      choices:{
        A:{text:'Column A is greater', explain:'11/12 is approximately 0.917, which is greater than 0.9.'},
        B:{text:'Column B is greater', explain:'0.9 is less than 11/12.'},
        C:{text:'The two columns are equal', explain:'0.917 and 0.9 are close but not equal.'},
        D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'}
      } },
    { id:'q75', skill:'Quantitative comparison', prompt:'Compare: Column A = 7 squared   Column B = 2 to the 6th power', correct:'B',
      choices:{
        A:{text:'Column A is greater', explain:'7 squared is 49, less than 2 to the 6th power (64).'},
        B:{text:'Column B is greater', explain:'2 to the 6th power is 64, greater than 7 squared (49).'},
        C:{text:'The two columns are equal', explain:'49 and 64 are not equal.'},
        D:{text:'Cannot be determined', explain:'Both evaluate to fixed numbers, so a comparison is possible.'}
      } },
    { id:'q76', skill:'Quantitative comparison', prompt:'Compare: Column A = 0.125   Column B = 1/8', correct:'C',
      choices:{
        A:{text:'Column A is greater', explain:'0.125 equals 1/8 exactly, so it isn\'t greater.'},
        B:{text:'Column B is greater', explain:'1/8 equals 0.125 exactly, so it isn\'t greater.'},
        C:{text:'The two columns are equal', explain:'0.125 and 1/8 are exactly equal.'},
        D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'}
      } },
    { id:'q77', skill:'Quantitative comparison', prompt:'Compare: Column A = 3/5   Column B = 0.58', correct:'D',
      choices:{
        A:{text:'Column B is greater', explain:'0.58 is less than 3/5 (0.6).'},
        B:{text:'The two columns are equal', explain:'0.6 and 0.58 are close but not equal.'},
        C:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'},
        D:{text:'Column A is greater', explain:'3/5 equals 0.6, which is greater than 0.58.'}
      } },
    { id:'q78', skill:'Quantitative comparison', prompt:'Compare: Column A = 70% of 90   Column B = 90% of 70', correct:'A',
      choices:{
        A:{text:'The two columns are equal', explain:'70% of 90 is 63, and 90% of 70 is also 63, so they are equal.'},
        B:{text:'Column A is greater', explain:'70% of 90 is 63, not greater than Column B.'},
        C:{text:'Column B is greater', explain:'90% of 70 is also 63, not greater than Column A.'},
        D:{text:'Cannot be determined', explain:'Both percentages can be calculated directly.'}
      } },
    { id:'q79', skill:'Quantitative comparison', prompt:'Compare: Column A = 2 to the 8th power   Column B = 4 to the 4th power', correct:'B',
      choices:{
        A:{text:'Column A is greater', explain:'2 to the 8th power is 256, not greater than Column B.'},
        B:{text:'The two columns are equal', explain:'2 to the 8th power = 256 and 4 to the 4th power = 256, so they are equal.'},
        C:{text:'Column B is greater', explain:'4 to the 4th power is also 256, not greater than Column A.'},
        D:{text:'Cannot be determined', explain:'Both evaluate to fixed numbers, so a comparison is possible.'}
      } },
    { id:'q80', skill:'Quantitative comparison', prompt:'Compare: Column A = 13/20   Column B = 0.64', correct:'C',
      choices:{
        A:{text:'Column B is greater', explain:'0.64 is less than 13/20 (0.65).'},
        B:{text:'The two columns are equal', explain:'0.65 and 0.64 are close but not equal.'},
        C:{text:'Column A is greater', explain:'13/20 equals 0.65, which is greater than 0.64.'},
        D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'}
      } },
    { id:'q81', skill:'Number series', prompt:'11, 22, 44, 88, ___', correct:'D',
      choices:{
        A:{text:'154', explain:'Doesn\'t match doubling 88.'},
        B:{text:'165', explain:'Doesn\'t match the correct product.'},
        C:{text:'170', explain:'Doesn\'t match doubling correctly.'},
        D:{text:'176', explain:'Each term doubles: 88x2=176.'}
      } },
    { id:'q82', skill:'Number series', prompt:'6, 10, 14, 18, ___', correct:'A',
      choices:{
        A:{text:'22', explain:'Each term adds 4: 18+4=22.'},
        B:{text:'20', explain:'Doesn\'t match adding 4.'},
        C:{text:'24', explain:'Overshoots the correct value.'},
        D:{text:'21', explain:'Doesn\'t match the +4 pattern.'}
      } },
    { id:'q83', skill:'Number series', prompt:'4, 9, 19, 39, ___', correct:'B',
      choices:{
        A:{text:'77', explain:'Doesn\'t match the doubling-plus-one pattern.'},
        B:{text:'79', explain:'Each number doubles the previous and adds 1: 39x2+1=79.'},
        C:{text:'80', explain:'Close, but doesn\'t match 39x2+1 exactly.'},
        D:{text:'75', explain:'Doesn\'t match the correct calculation.'}
      } },
    { id:'q84', skill:'Number series', prompt:'625, 125, 25, ___', correct:'C',
      choices:{
        A:{text:'1', explain:'This skips ahead an extra division step.'},
        B:{text:'10', explain:'Doesn\'t match dividing by 5.'},
        C:{text:'5', explain:'Each term is divided by 5: 25/5=5.'},
        D:{text:'15', explain:'Doesn\'t match the correct division.'}
      } },
    { id:'q85', skill:'Number series', prompt:'100, 95, 87, 76, 62, ___', correct:'D',
      choices:{
        A:{text:'40', explain:'Doesn\'t match the correct next gap.'},
        B:{text:'42', explain:'Close, but doesn\'t match the -17 step.'},
        C:{text:'48', explain:'Overshoots incorrectly for a decreasing pattern.'},
        D:{text:'45', explain:'The gap decreases by 3 each time (-5,-8,-11,-14), so the next gap is -17: 62-17=45.'}
      } },
    { id:'q86', skill:'Number series', prompt:'2, 6, 12, 20, 30, ___', correct:'A',
      choices:{
        A:{text:'42', explain:'The gaps increase by 2 each time (+4,+6,+8,+10), so the next gap is +12: 30+12=42.'},
        B:{text:'38', explain:'Doesn\'t match the correct next gap.'},
        C:{text:'40', explain:'Close, but doesn\'t match adding 12 to 30.'},
        D:{text:'44', explain:'Overshoots the correct next gap.'}
      } },
    { id:'q87', skill:'Number series', prompt:'5, 9, 17, 33, ___', correct:'B',
      choices:{
        A:{text:'63', explain:'Doesn\'t match the x2-1 pattern.'},
        B:{text:'65', explain:'Each term doubles the previous and subtracts 1: 33x2-1=65.'},
        C:{text:'67', explain:'Doesn\'t match the correct calculation.'},
        D:{text:'70', explain:'Overshoots the correct value.'}
      } },
    { id:'q88', skill:'Number series', prompt:'400, 200, 100, 50, ___', correct:'C',
      choices:{
        A:{text:'20', explain:'Doesn\'t match dividing 50 by 2.'},
        B:{text:'15', explain:'Doesn\'t match the halving pattern.'},
        C:{text:'25', explain:'Each term is divided by 2: 50/2=25.'},
        D:{text:'30', explain:'Overshoots — doesn\'t match halving.'}
      } },
    { id:'q89', skill:'Number series', prompt:'3, 4, 6, 9, 13, ___', correct:'D',
      choices:{
        A:{text:'15', explain:'Doesn\'t match the increasing-gap pattern.'},
        B:{text:'16', explain:'Doesn\'t match the correct next gap.'},
        C:{text:'17', explain:'Close, but doesn\'t match adding 5 to 13.'},
        D:{text:'18', explain:'The gaps increase by 1 each time (+1,+2,+3,+4), so the next gap is +5: 13+5=18.'}
      } },
    { id:'q90', skill:'Number series', prompt:'10, 30, 90, 270, ___', correct:'A',
      choices:{
        A:{text:'810', explain:'Each term triples: 270x3=810.'},
        B:{text:'800', explain:'Doesn\'t match tripling correctly.'},
        C:{text:'820', explain:'Doesn\'t match the correct product.'},
        D:{text:'900', explain:'Overshoots the correct product.'}
      } },
    { id:'q91', skill:'Quantitative comparison', prompt:'Compare: Column A = 4/11   Column B = 0.36', correct:'C',
      choices:{
        A:{text:'Column B is greater', explain:'0.36 is less than 4/11 (approximately 0.364).'},
        B:{text:'The two columns are equal', explain:'0.364 and 0.36 are close but not equal.'},
        C:{text:'Column A is greater', explain:'4/11 is approximately 0.364, which is greater than 0.36.'},
        D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'}
      } },
    { id:'q92', skill:'Quantitative comparison', prompt:'Compare: Column A = 6 squared   Column B = 2 to the 5th power', correct:'A',
      choices:{
        A:{text:'Column A is greater', explain:'6 squared is 36, greater than 2 to the 5th power (32).'},
        B:{text:'Column B is greater', explain:'2 to the 5th power is 32, less than 6 squared.'},
        C:{text:'The two columns are equal', explain:'36 and 32 are not equal.'},
        D:{text:'Cannot be determined', explain:'Both evaluate to fixed numbers, so a comparison is possible.'}
      } },
    { id:'q93', skill:'Quantitative comparison', prompt:'Compare: Column A = 80% of 25   Column B = 25% of 80', correct:'D',
      choices:{
        A:{text:'Column A is greater', explain:'80% of 25 is 20, not greater than Column B.'},
        B:{text:'Column B is greater', explain:'25% of 80 is also 20, not greater than Column A.'},
        C:{text:'Cannot be determined', explain:'Both percentages can be calculated directly.'},
        D:{text:'The two columns are equal', explain:'80% of 25 is 20, and 25% of 80 is also 20, so they are equal.'}
      } },
    { id:'q94', skill:'Quantitative comparison', prompt:'Compare: Column A = 9/11   Column B = 0.8', correct:'B',
      choices:{
        A:{text:'Column B is greater', explain:'0.8 is less than 9/11 (approximately 0.818).'},
        B:{text:'Column A is greater', explain:'9/11 is approximately 0.818, which is greater than 0.8.'},
        C:{text:'The two columns are equal', explain:'0.818 and 0.8 are not equal.'},
        D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'}
      } },
    { id:'q95', skill:'Quantitative comparison', prompt:'Compare: Column A = 3 to the 5th power   Column B = 5 cubed', correct:'C',
      choices:{
        A:{text:'Column B is greater', explain:'5 cubed is 125, less than 3 to the 5th power (243).'},
        B:{text:'The two columns are equal', explain:'243 and 125 are not equal.'},
        C:{text:'Column A is greater', explain:'3 to the 5th power is 243, greater than 5 cubed (125).'},
        D:{text:'Cannot be determined', explain:'Both evaluate to fixed numbers, so a comparison is possible.'}
      } },
    { id:'q96', skill:'Quantitative comparison', prompt:'Compare: Column A = 0.3   Column B = 3/8', correct:'D',
      choices:{
        A:{text:'Column A is greater', explain:'0.3 is less than 3/8 (0.375).'},
        B:{text:'The two columns are equal', explain:'0.3 and 0.375 are not equal.'},
        C:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'},
        D:{text:'Column B is greater', explain:'3/8 equals 0.375, which is greater than 0.3.'}
      } },
    { id:'q97', skill:'Quantitative comparison', prompt:'Compare: Column A = 65% of 40   Column B = 40% of 65', correct:'A',
      choices:{
        A:{text:'The two columns are equal', explain:'65% of 40 is 26, and 40% of 65 is also 26, so they are equal.'},
        B:{text:'Column A is greater', explain:'65% of 40 is 26, not greater than Column B.'},
        C:{text:'Column B is greater', explain:'40% of 65 is also 26, not greater than Column A.'},
        D:{text:'Cannot be determined', explain:'Both percentages can be calculated directly.'}
      } },
    { id:'q98', skill:'Quantitative comparison', prompt:'Compare: Column A = 17/25   Column B = 0.7', correct:'B',
      choices:{
        A:{text:'Column A is greater', explain:'17/25 equals 0.68, which is less than 0.7.'},
        B:{text:'Column B is greater', explain:'0.7 is greater than 17/25 (0.68).'},
        C:{text:'The two columns are equal', explain:'0.68 and 0.7 are not equal.'},
        D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'}
      } },
    { id:'q99', skill:'Quantitative comparison', prompt:'Compare: Column A = 2 to the 10th power   Column B = 4 to the 5th power', correct:'C',
      choices:{
        A:{text:'Column A is greater', explain:'2 to the 10th power is 1024, not greater than Column B.'},
        B:{text:'Column B is greater', explain:'4 to the 5th power is also 1024, not greater than Column A.'},
        C:{text:'The two columns are equal', explain:'2 to the 10th power = 1024 and 4 to the 5th power = 1024, so they are equal.'},
        D:{text:'Cannot be determined', explain:'Both evaluate to fixed numbers, so a comparison is possible.'}
      } },
    { id:'q100', skill:'Quantitative comparison', prompt:'Compare: Column A = 5/8   Column B = 0.6', correct:'D',
      choices:{
        A:{text:'Column B is greater', explain:'0.6 is less than 5/8 (0.625).'},
        B:{text:'The two columns are equal', explain:'0.625 and 0.6 are not equal.'},
        C:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'},
        D:{text:'Column A is greater', explain:'5/8 equals 0.625, which is greater than 0.6.'}
      } },
    { id:'q101', skill:'Number series', prompt:'13, 26, 52, 104, ___', correct:'D',
      choices:{
        A:{text:'182', explain:'Doesn\'t match doubling 104.'},
        B:{text:'195', explain:'Doesn\'t match the correct product.'},
        C:{text:'200', explain:'Doesn\'t match doubling correctly.'},
        D:{text:'208', explain:'Each term doubles: 104x2=208.'}
      } },
    { id:'q102', skill:'Number series', prompt:'8, 13, 18, 23, ___', correct:'A',
      choices:{
        A:{text:'28', explain:'Each term adds 5: 23+5=28.'},
        B:{text:'26', explain:'Doesn\'t match adding 5.'},
        C:{text:'30', explain:'Overshoots the correct value.'},
        D:{text:'27', explain:'Doesn\'t match the +5 pattern.'}
      } },
    { id:'q103', skill:'Number series', prompt:'6, 13, 27, 55, ___', correct:'B',
      choices:{
        A:{text:'108', explain:'Doesn\'t match the doubling-plus-one pattern.'},
        B:{text:'111', explain:'Each number doubles the previous and adds 1: 55x2+1=111.'},
        C:{text:'113', explain:'Close, but doesn\'t match 55x2+1 exactly.'},
        D:{text:'115', explain:'Doesn\'t match the correct calculation.'}
      } },
    { id:'q104', skill:'Number series', prompt:'2187, 729, 243, ___', correct:'C',
      choices:{
        A:{text:'27', explain:'This skips ahead an extra division step.'},
        B:{text:'90', explain:'Doesn\'t match dividing by 3.'},
        C:{text:'81', explain:'Each term is divided by 3: 243/3=81.'},
        D:{text:'100', explain:'Doesn\'t match the correct division.'}
      } },
    { id:'q105', skill:'Number series', prompt:'90, 84, 75, 63, 48, ___', correct:'D',
      choices:{
        A:{text:'25', explain:'Doesn\'t match the correct next gap.'},
        B:{text:'28', explain:'Close, but doesn\'t match the -18 step.'},
        C:{text:'35', explain:'Overshoots incorrectly for a decreasing pattern.'},
        D:{text:'30', explain:'The gap decreases by 3 each time (-6,-9,-12,-15), so the next gap is -18: 48-18=30.'}
      } },
    { id:'q106', skill:'Number series', prompt:'4, 8, 14, 22, 32, ___', correct:'A',
      choices:{
        A:{text:'44', explain:'The gaps increase by 2 each time (+4,+6,+8,+10), so the next gap is +12: 32+12=44.'},
        B:{text:'40', explain:'Doesn\'t match the correct next gap.'},
        C:{text:'42', explain:'Close, but doesn\'t match adding 12 to 32.'},
        D:{text:'46', explain:'Overshoots the correct next gap.'}
      } },
    { id:'q107', skill:'Number series', prompt:'6, 11, 21, 41, ___', correct:'B',
      choices:{
        A:{text:'79', explain:'Doesn\'t match the x2-1 pattern.'},
        B:{text:'81', explain:'Each term doubles the previous and subtracts 1: 41x2-1=81.'},
        C:{text:'83', explain:'Doesn\'t match the correct calculation.'},
        D:{text:'85', explain:'Overshoots the correct value.'}
      } },
    { id:'q108', skill:'Number series', prompt:'810, 270, 90, ___', correct:'C',
      choices:{
        A:{text:'20', explain:'Doesn\'t match dividing 90 by 3.'},
        B:{text:'27', explain:'Doesn\'t match the correct division.'},
        C:{text:'30', explain:'Each term is divided by 3: 90/3=30.'},
        D:{text:'45', explain:'Overshoots — doesn\'t match the halving-style division.'}
      } },
    { id:'q109', skill:'Number series', prompt:'5, 6, 8, 11, 15, ___', correct:'D',
      choices:{
        A:{text:'17', explain:'Doesn\'t match the increasing-gap pattern.'},
        B:{text:'18', explain:'Doesn\'t match the correct next gap.'},
        C:{text:'19', explain:'Close, but doesn\'t match adding 5 to 15.'},
        D:{text:'20', explain:'The gaps increase by 1 each time (+1,+2,+3,+4), so the next gap is +5: 15+5=20.'}
      } },
    { id:'q110', skill:'Number series', prompt:'4, 12, 36, 108, 324, ___', correct:'A',
      choices:{
        A:{text:'972', explain:'Each term triples: 324x3=972.'},
        B:{text:'960', explain:'Doesn\'t match tripling correctly.'},
        C:{text:'980', explain:'Doesn\'t match the correct product.'},
        D:{text:'1000', explain:'Overshoots the correct product.'}
      } },
    { id:'q111', skill:'Quantitative comparison', prompt:'Compare: Column A = 6/13   Column B = 0.46', correct:'A',
      choices:{
        A:{text:'Column A is greater', explain:'6/13 is approximately 0.4615, which is greater than 0.46.'},
        B:{text:'Column B is greater', explain:'0.46 is actually slightly less than 6/13 (about 0.4615).'},
        C:{text:'The two columns are equal', explain:'0.4615 and 0.46 are close but not equal.'},
        D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'}
      } },
    { id:'q112', skill:'Quantitative comparison', prompt:'Compare: Column A = 8 squared   Column B = 4 cubed', correct:'C',
      choices:{
        A:{text:'Column A is greater', explain:'8 squared is 64, not greater than Column B.'},
        B:{text:'Column B is greater', explain:'4 cubed is also 64, not greater than Column A.'},
        C:{text:'The two columns are equal', explain:'8 squared = 64 and 4 cubed = 64, so they are equal.'},
        D:{text:'Cannot be determined', explain:'Both evaluate to fixed numbers, so a comparison is possible.'}
      } },
    { id:'q113', skill:'Quantitative comparison', prompt:'Compare: Column A = 55% of 60   Column B = 60% of 55', correct:'B',
      choices:{
        A:{text:'Column A is greater', explain:'55% of 60 is 33, not greater than Column B.'},
        B:{text:'The two columns are equal', explain:'55% of 60 is 33, and 60% of 55 is also 33, so they are equal.'},
        C:{text:'Column B is greater', explain:'60% of 55 is also 33, not greater than Column A.'},
        D:{text:'Cannot be determined', explain:'Both percentages can be calculated directly.'}
      } },
    { id:'q114', skill:'Quantitative comparison', prompt:'Compare: Column A = 7/9   Column B = 0.78', correct:'B',
      choices:{
        A:{text:'Column A is greater', explain:'7/9 is approximately 0.778, which is less than 0.78.'},
        B:{text:'Column B is greater', explain:'0.78 is slightly greater than 7/9 (approximately 0.778).'},
        C:{text:'The two columns are equal', explain:'0.778 and 0.78 are close but not equal.'},
        D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'}
      } },
    { id:'q115', skill:'Quantitative comparison', prompt:'Compare: Column A = 4 to the 4th power   Column B = 2 to the 9th power', correct:'B',
      choices:{
        A:{text:'Column A is greater', explain:'4 to the 4th power is 256, less than 2 to the 9th power (512).'},
        B:{text:'Column B is greater', explain:'2 to the 9th power is 512, greater than 4 to the 4th power (256).'},
        C:{text:'The two columns are equal', explain:'256 and 512 are not equal.'},
        D:{text:'Cannot be determined', explain:'Both evaluate to fixed numbers, so a comparison is possible.'}
      } },
    { id:'q116', skill:'Quantitative comparison', prompt:'Compare: Column A = 0.55   Column B = 5/9', correct:'B',
      choices:{
        A:{text:'Column A is greater', explain:'0.55 is less than 5/9 (approximately 0.556).'},
        B:{text:'Column B is greater', explain:'5/9 is approximately 0.556, which is greater than 0.55.'},
        C:{text:'The two columns are equal', explain:'0.55 and 0.556 are close but not equal.'},
        D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'}
      } },
    { id:'q117', skill:'Quantitative comparison', prompt:'Compare: Column A = 45% of 200   Column B = 90% of 100', correct:'C',
      choices:{
        A:{text:'Column A is greater', explain:'45% of 200 is 90, not greater than Column B.'},
        B:{text:'Column B is greater', explain:'90% of 100 is also 90, not greater than Column A.'},
        C:{text:'The two columns are equal', explain:'45% of 200 is 90, and 90% of 100 is also 90, so they are equal.'},
        D:{text:'Cannot be determined', explain:'Both percentages can be calculated directly.'}
      } },
    { id:'q118', skill:'Quantitative comparison', prompt:'Compare: Column A = 19/20   Column B = 0.94', correct:'A',
      choices:{
        A:{text:'Column A is greater', explain:'19/20 equals 0.95, which is greater than 0.94.'},
        B:{text:'Column B is greater', explain:'0.94 is less than 19/20 (0.95).'},
        C:{text:'The two columns are equal', explain:'0.95 and 0.94 are not equal.'},
        D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'}
      } },
    { id:'q119', skill:'Quantitative comparison', prompt:'Compare: Column A = 3 to the 6th power   Column B = 9 cubed', correct:'D',
      choices:{
        A:{text:'Column A is greater', explain:'3 to the 6th power is 729, not greater than Column B.'},
        B:{text:'Column B is greater', explain:'9 cubed is also 729, not greater than Column A.'},
        C:{text:'Cannot be determined', explain:'Both evaluate to fixed numbers, so a comparison is possible.'},
        D:{text:'The two columns are equal', explain:'3 to the 6th power = 729 and 9 cubed = 729, so they are equal.'}
      } },
    { id:'q120', skill:'Quantitative comparison', prompt:'Compare: Column A = 11/16   Column B = 0.7', correct:'B',
      choices:{
        A:{text:'Column A is greater', explain:'11/16 equals 0.6875, which is less than 0.7.'},
        B:{text:'Column B is greater', explain:'0.7 is greater than 11/16 (0.6875).'},
        C:{text:'The two columns are equal', explain:'0.6875 and 0.7 are not equal.'},
        D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'}
      } },
    { id:'q121', skill:'Number series', prompt:'14, 28, 56, 112, ___', correct:'D',
      choices:{
        A:{text:'196', explain:'Doesn\'t match doubling 112.'},
        B:{text:'200', explain:'Doesn\'t match the correct product.'},
        C:{text:'210', explain:'Doesn\'t match doubling correctly.'},
        D:{text:'224', explain:'Each term doubles: 112x2=224.'}
      } },
    { id:'q122', skill:'Number series', prompt:'9, 15, 21, 27, ___', correct:'A',
      choices:{
        A:{text:'33', explain:'Each term adds 6: 27+6=33.'},
        B:{text:'30', explain:'Doesn\'t match adding 6.'},
        C:{text:'36', explain:'Overshoots the correct value.'},
        D:{text:'31', explain:'Doesn\'t match the +6 pattern.'}
      } },
    { id:'q123', skill:'Number series', prompt:'9, 19, 39, 79, ___', correct:'B',
      choices:{
        A:{text:'155', explain:'Doesn\'t match the doubling-plus-one pattern.'},
        B:{text:'159', explain:'Each number doubles the previous and adds 1: 79x2+1=159.'},
        C:{text:'160', explain:'Close, but doesn\'t match 79x2+1 exactly.'},
        D:{text:'165', explain:'Overshoots the correct value.'}
      } },
    { id:'q124', skill:'Number series', prompt:'4096, 1024, 256, ___', correct:'C',
      choices:{
        A:{text:'32', explain:'This skips ahead an extra division step.'},
        B:{text:'128', explain:'Doesn\'t match dividing by 4.'},
        C:{text:'64', explain:'Each term is divided by 4: 256/4=64.'},
        D:{text:'96', explain:'Doesn\'t match the correct division.'}
      } },
    { id:'q125', skill:'Number series', prompt:'80, 72, 60, 44, 24, ___', correct:'A',
      choices:{
        A:{text:'0', explain:'The gap decreases by 4 each time (-8,-12,-16,-20), so the next gap is -24: 24-24=0.'},
        B:{text:'4', explain:'Doesn\'t match the correct next gap.'},
        C:{text:'8', explain:'Overshoots incorrectly for a decreasing pattern.'},
        D:{text:'-4', explain:'This overshoots below the correct pattern by an extra step.'}
      } },
    { id:'q126', skill:'Number series', prompt:'3, 7, 13, 21, 31, ___', correct:'D',
      choices:{
        A:{text:'38', explain:'Doesn\'t match the increasing-gap pattern.'},
        B:{text:'40', explain:'Doesn\'t match the correct next gap.'},
        C:{text:'41', explain:'Close, but doesn\'t match adding 12 to 31.'},
        D:{text:'43', explain:'The gaps increase by 2 each time (+4,+6,+8,+10), so the next gap is +12: 31+12=43.'}
      } },
    { id:'q127', skill:'Number series', prompt:'8, 15, 29, 57, ___', correct:'B',
      choices:{
        A:{text:'110', explain:'Doesn\'t match the x2-1 pattern.'},
        B:{text:'113', explain:'Each term doubles the previous and subtracts 1: 57x2-1=113.'},
        C:{text:'115', explain:'Doesn\'t match the correct calculation.'},
        D:{text:'120', explain:'Overshoots the correct value.'}
      } },
    { id:'q128', skill:'Number series', prompt:'640, 160, 40, ___', correct:'C',
      choices:{
        A:{text:'5', explain:'This skips ahead an extra division step.'},
        B:{text:'20', explain:'Doesn\'t match dividing by 4.'},
        C:{text:'10', explain:'Each term is divided by 4: 40/4=10.'},
        D:{text:'15', explain:'Doesn\'t match the correct division.'}
      } },
    { id:'q129', skill:'Number series', prompt:'7, 8, 10, 13, 17, ___', correct:'A',
      choices:{
        A:{text:'22', explain:'The gaps increase by 1 each time (+1,+2,+3,+4), so the next gap is +5: 17+5=22.'},
        B:{text:'20', explain:'Doesn\'t match the correct next gap.'},
        C:{text:'21', explain:'Close, but doesn\'t match adding 5 to 17.'},
        D:{text:'24', explain:'Overshoots the correct next gap.'}
      } },
    { id:'q130', skill:'Number series', prompt:'5, 15, 45, 135, 405, ___', correct:'B',
      choices:{
        A:{text:'1200', explain:'Doesn\'t match tripling correctly.'},
        B:{text:'1215', explain:'Each term triples: 405x3=1215.'},
        C:{text:'1220', explain:'Doesn\'t match the correct product.'},
        D:{text:'1250', explain:'Overshoots the correct product.'}
      } },
    { id:'q131', skill:'Quantitative comparison', prompt:'Compare: Column A = 8/17   Column B = 0.47', correct:'A',
      choices:{
        A:{text:'Column A is greater', explain:'8/17 is approximately 0.471, which is greater than 0.47.'},
        B:{text:'Column B is greater', explain:'0.47 is actually slightly less than 8/17 (about 0.471).'},
        C:{text:'The two columns are equal', explain:'0.471 and 0.47 are close but not equal.'},
        D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'}
      } },
    { id:'q132', skill:'Quantitative comparison', prompt:'Compare: Column A = 10 squared   Column B = 5 cubed', correct:'B',
      choices:{
        A:{text:'Column A is greater', explain:'10 squared is 100, less than 5 cubed (125).'},
        B:{text:'Column B is greater', explain:'5 cubed is 125, greater than 10 squared (100).'},
        C:{text:'The two columns are equal', explain:'100 and 125 are not equal.'},
        D:{text:'Cannot be determined', explain:'Both evaluate to fixed numbers, so a comparison is possible.'}
      } },
    { id:'q133', skill:'Quantitative comparison', prompt:'Compare: Column A = 48% of 50   Column B = 50% of 48', correct:'C',
      choices:{
        A:{text:'Column A is greater', explain:'48% of 50 is 24, not greater than Column B.'},
        B:{text:'Column B is greater', explain:'50% of 48 is also 24, not greater than Column A.'},
        C:{text:'The two columns are equal', explain:'48% of 50 is 24, and 50% of 48 is also 24, so they are equal.'},
        D:{text:'Cannot be determined', explain:'Both percentages can be calculated directly.'}
      } },
    { id:'q134', skill:'Quantitative comparison', prompt:'Compare: Column A = 13/15   Column B = 0.86', correct:'A',
      choices:{
        A:{text:'Column A is greater', explain:'13/15 is approximately 0.867, which is greater than 0.86.'},
        B:{text:'Column B is greater', explain:'0.86 is less than 13/15 (approximately 0.867).'},
        C:{text:'The two columns are equal', explain:'0.867 and 0.86 are close but not equal.'},
        D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'}
      } },
    { id:'q135', skill:'Quantitative comparison', prompt:'Compare: Column A = 2 to the 11th power   Column B = 4 to the 6th power', correct:'B',
      choices:{
        A:{text:'Column A is greater', explain:'2 to the 11th power is 2048, less than 4 to the 6th power (4096).'},
        B:{text:'Column B is greater', explain:'4 to the 6th power is 4096, greater than 2 to the 11th power (2048).'},
        C:{text:'The two columns are equal', explain:'2048 and 4096 are not equal.'},
        D:{text:'Cannot be determined', explain:'Both evaluate to fixed numbers, so a comparison is possible.'}
      } },
    { id:'q136', skill:'Quantitative comparison', prompt:'Compare: Column A = 0.72   Column B = 13/18', correct:'B',
      choices:{
        A:{text:'Column A is greater', explain:'0.72 is slightly less than 13/18 (approximately 0.722).'},
        B:{text:'Column B is greater', explain:'13/18 is approximately 0.722, which is slightly greater than 0.72.'},
        C:{text:'The two columns are equal', explain:'0.72 and 0.722 are close but not equal.'},
        D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'}
      } },
    { id:'q137', skill:'Quantitative comparison', prompt:'Compare: Column A = 36% of 150   Column B = 54% of 100', correct:'C',
      choices:{
        A:{text:'Column A is greater', explain:'36% of 150 is 54, not greater than Column B.'},
        B:{text:'Column B is greater', explain:'54% of 100 is also 54, not greater than Column A.'},
        C:{text:'The two columns are equal', explain:'36% of 150 is 54, and 54% of 100 is also 54, so they are equal.'},
        D:{text:'Cannot be determined', explain:'Both percentages can be calculated directly.'}
      } },
    { id:'q138', skill:'Quantitative comparison', prompt:'Compare: Column A = 23/25   Column B = 0.92', correct:'C',
      choices:{
        A:{text:'Column A is greater', explain:'23/25 equals 0.92, so it is not greater than Column B.'},
        B:{text:'Column B is greater', explain:'0.92 equals 23/25, so it is not greater than Column A.'},
        C:{text:'The two columns are equal', explain:'23/25 equals exactly 0.92, so the columns are equal.'},
        D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'}
      } },
    { id:'q139', skill:'Quantitative comparison', prompt:'Compare: Column A = 6 to the 4th power   Column B = 36 squared', correct:'D',
      choices:{
        A:{text:'Column A is greater', explain:'6 to the 4th power is 1296, not greater than Column B.'},
        B:{text:'Column B is greater', explain:'36 squared is also 1296, not greater than Column A.'},
        C:{text:'Cannot be determined', explain:'Both evaluate to fixed numbers, so a comparison is possible.'},
        D:{text:'The two columns are equal', explain:'6 to the 4th power = 1296 and 36 squared = 1296, so they are equal.'}
      } },
    { id:'q140', skill:'Quantitative comparison', prompt:'Compare: Column A = 17/24   Column B = 0.7', correct:'A',
      choices:{
        A:{text:'Column A is greater', explain:'17/24 is approximately 0.708, which is greater than 0.7.'},
        B:{text:'Column B is greater', explain:'0.7 is less than 17/24 (approximately 0.708).'},
        C:{text:'The two columns are equal', explain:'0.708 and 0.7 are close but not equal.'},
        D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'}
      } },
    { id:'q141', skill:'Number series', prompt:'16, 32, 64, 128, ___', correct:'D',
      choices:{
        A:{text:'224',explain:'Doesn\'t match doubling.'},
        B:{text:'240',explain:'Doesn\'t match the correct product.'},
        C:{text:'250',explain:'Doesn\'t match doubling correctly.'},
        D:{text:'256',explain:'Each term doubles: 128x2=256.'}
      } },
    { id:'q142', skill:'Number series', prompt:'11, 22, 33, 44, ___', correct:'A',
      choices:{
        A:{text:'55',explain:'Each term adds 11: 44+11=55.'},
        B:{text:'50',explain:'Doesn\'t match adding 11.'},
        C:{text:'60',explain:'Overshoots the correct value.'},
        D:{text:'54',explain:'Doesn\'t match the +11 pattern.'}
      } },
    { id:'q143', skill:'Number series', prompt:'8, 17, 35, 71, ___', correct:'B',
      choices:{
        A:{text:'139',explain:'Doesn\'t match the doubling-plus-one pattern.'},
        B:{text:'143',explain:'Each number doubles the previous and adds 1: 71x2+1=143.'},
        C:{text:'145',explain:'Doesn\'t match the correct calculation.'},
        D:{text:'150',explain:'Overshoots the correct value.'}
      } },
    { id:'q144', skill:'Number series', prompt:'5000, 1000, 200, ___', correct:'C',
      choices:{
        A:{text:'20',explain:'This skips ahead an extra division step.'},
        B:{text:'100',explain:'Doesn\'t match dividing by 5.'},
        C:{text:'40',explain:'Each term is divided by 5: 200/5=40.'},
        D:{text:'50',explain:'Doesn\'t match the correct division.'}
      } },
    { id:'q145', skill:'Number series', prompt:'95, 85, 72, 56, ___', correct:'D',
      choices:{
        A:{text:'35',explain:'Overshoots the correct next gap.'},
        B:{text:'40',explain:'Doesn\'t match the correct next gap.'},
        C:{text:'42',explain:'Doesn\'t match the decreasing-gap pattern.'},
        D:{text:'37',explain:'The gap increases by 3 each time (-10,-13,-16), so the next gap is -19: 56-19=37.'}
      } },
    { id:'q146', skill:'Number series', prompt:'5, 9, 15, 23, 33, ___', correct:'A',
      choices:{
        A:{text:'45',explain:'The gaps increase by 2 each time (+4,+6,+8,+10), so the next gap is +12: 33+12=45.'},
        B:{text:'42',explain:'Doesn\'t match the correct next gap.'},
        C:{text:'44',explain:'Close, but doesn\'t match adding 12 to 33.'},
        D:{text:'48',explain:'Overshoots the correct next gap.'}
      } },
    { id:'q147', skill:'Number series', prompt:'9, 17, 33, 65, ___', correct:'B',
      choices:{
        A:{text:'125',explain:'Doesn\'t match the x2-1 pattern.'},
        B:{text:'129',explain:'Each term doubles the previous and subtracts 1: 65x2-1=129.'},
        C:{text:'131',explain:'Doesn\'t match the correct calculation.'},
        D:{text:'135',explain:'Overshoots the correct value.'}
      } },
    { id:'q148', skill:'Number series', prompt:'972, 324, 108, ___', correct:'C',
      choices:{
        A:{text:'27',explain:'This skips ahead an extra division step.'},
        B:{text:'54',explain:'Doesn\'t match dividing by 3.'},
        C:{text:'36',explain:'Each term is divided by 3: 108/3=36.'},
        D:{text:'42',explain:'Doesn\'t match the correct division.'}
      } },
    { id:'q149', skill:'Number series', prompt:'8, 9, 11, 14, 18, ___', correct:'A',
      choices:{
        A:{text:'23',explain:'The gaps increase by 1 each time (+1,+2,+3,+4), so the next gap is +5: 18+5=23.'},
        B:{text:'21',explain:'Doesn\'t match the correct next gap.'},
        C:{text:'22',explain:'Close, but doesn\'t match adding 5 to 18.'},
        D:{text:'25',explain:'Overshoots the correct next gap.'}
      } },
    { id:'q150', skill:'Number series', prompt:'6, 18, 54, 162, 486, ___', correct:'B',
      choices:{
        A:{text:'1400',explain:'Doesn\'t match tripling correctly.'},
        B:{text:'1458',explain:'Each term triples: 486x3=1458.'},
        C:{text:'1460',explain:'Doesn\'t match the correct product.'},
        D:{text:'1500',explain:'Overshoots the correct product.'}
      } },
    { id:'q151', skill:'Quantitative comparison', prompt:'Compare: Column A = 9/19   Column B = 0.48', correct:'B',
      choices:{
        A:{text:'Column A is greater', explain:'9/19 is approximately 0.474, which is less than 0.48.'},
        B:{text:'Column B is greater', explain:'0.48 is greater than 9/19 (approximately 0.474).'},
        C:{text:'The two columns are equal', explain:'0.474 and 0.48 are close but not equal.'},
        D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'}
      } },
    { id:'q152', skill:'Quantitative comparison', prompt:'Compare: Column A = 9 squared   Column B = 3 to the 4th power', correct:'C',
      choices:{
        A:{text:'Column A is greater', explain:'9 squared is 81, not greater than Column B.'},
        B:{text:'Column B is greater', explain:'3 to the 4th power is also 81, not greater than Column A.'},
        C:{text:'The two columns are equal', explain:'9 squared = 81 and 3 to the 4th power = 81, so they are equal.'},
        D:{text:'Cannot be determined', explain:'Both evaluate to fixed numbers, so a comparison is possible.'}
      } },
    { id:'q153', skill:'Quantitative comparison', prompt:'Compare: Column A = 62% of 50   Column B = 50% of 62', correct:'D',
      choices:{
        A:{text:'Column A is greater', explain:'62% of 50 is 31, not greater than Column B.'},
        B:{text:'Column B is greater', explain:'50% of 62 is also 31, not greater than Column A.'},
        C:{text:'Cannot be determined', explain:'Both percentages can be calculated directly.'},
        D:{text:'The two columns are equal', explain:'62% of 50 is 31, and 50% of 62 is also 31, so they are equal.'}
      } },
    { id:'q154', skill:'Quantitative comparison', prompt:'Compare: Column A = 15/17   Column B = 0.88', correct:'A',
      choices:{
        A:{text:'Column A is greater', explain:'15/17 is approximately 0.882, which is greater than 0.88.'},
        B:{text:'Column B is greater', explain:'0.88 is less than 15/17 (approximately 0.882).'},
        C:{text:'The two columns are equal', explain:'0.882 and 0.88 are close but not equal.'},
        D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'}
      } },
    { id:'q155', skill:'Quantitative comparison', prompt:'Compare: Column A = 2 to the 12th power   Column B = 4 to the 6th power', correct:'C',
      choices:{
        A:{text:'Column A is greater', explain:'2 to the 12th power is 4096, not greater than Column B.'},
        B:{text:'Column B is greater', explain:'4 to the 6th power is also 4096, not greater than Column A.'},
        C:{text:'The two columns are equal', explain:'2 to the 12th power = 4096 and 4 to the 6th power = 4096, so they are equal.'},
        D:{text:'Cannot be determined', explain:'Both evaluate to fixed numbers, so a comparison is possible.'}
      } },
    { id:'q156', skill:'Quantitative comparison', prompt:'Compare: Column A = 0.68   Column B = 17/25', correct:'C',
      choices:{
        A:{text:'Column A is greater', explain:'0.68 equals 17/25, so it isn\'t greater.'},
        B:{text:'Column B is greater', explain:'17/25 equals 0.68, so it isn\'t greater.'},
        C:{text:'The two columns are equal', explain:'17/25 equals exactly 0.68, so the columns are equal.'},
        D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'}
      } },
    { id:'q157', skill:'Quantitative comparison', prompt:'Compare: Column A = 42% of 150   Column B = 63% of 100', correct:'B',
      choices:{
        A:{text:'Column A is greater', explain:'42% of 150 is 63, not greater than Column B.'},
        B:{text:'The two columns are equal', explain:'42% of 150 is 63, and 63% of 100 is also 63, so they are equal.'},
        C:{text:'Column B is greater', explain:'63% of 100 is also 63, not greater than Column A.'},
        D:{text:'Cannot be determined', explain:'Both percentages can be calculated directly.'}
      } },
    { id:'q158', skill:'Quantitative comparison', prompt:'Compare: Column A = 21/23   Column B = 0.91', correct:'A',
      choices:{
        A:{text:'Column A is greater', explain:'21/23 is approximately 0.913, which is greater than 0.91.'},
        B:{text:'Column B is greater', explain:'0.91 is less than 21/23 (approximately 0.913).'},
        C:{text:'The two columns are equal', explain:'0.913 and 0.91 are close but not equal.'},
        D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'}
      } },
    { id:'q159', skill:'Quantitative comparison', prompt:'Compare: Column A = 5 to the 4th power   Column B = 25 squared', correct:'D',
      choices:{
        A:{text:'Column A is greater', explain:'5 to the 4th power is 625, not greater than Column B.'},
        B:{text:'Column B is greater', explain:'25 squared is also 625, not greater than Column A.'},
        C:{text:'Cannot be determined', explain:'Both evaluate to fixed numbers, so a comparison is possible.'},
        D:{text:'The two columns are equal', explain:'5 to the 4th power = 625 and 25 squared = 625, so they are equal.'}
      } },
    { id:'q160', skill:'Quantitative comparison', prompt:'Compare: Column A = 19/26   Column B = 0.73', correct:'A',
      choices:{
        A:{text:'Column A is greater', explain:'19/26 is approximately 0.731, which is greater than 0.73.'},
        B:{text:'Column B is greater', explain:'0.73 is less than 19/26 (approximately 0.731).'},
        C:{text:'The two columns are equal', explain:'0.731 and 0.73 are close but not equal.'},
        D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'}
      } }
  ],

  math: [
    { id:'m1', skill:'Algebra', prompt:'If 3x + 5 = 20, what is x?', correct:'B',
      choices:{
        A:{text:'3', explain:'This would come from dividing 20 by 5 directly without isolating x properly first.'},
        B:{text:'5', explain:'Subtract 5 from both sides to get 3x = 15, then divide by 3 to get x = 5.'},
        C:{text:'15', explain:'This is the value of 3x, not x itself — the last division step is missing.'},
        D:{text:'25', explain:'This comes from adding 5 to 20 instead of subtracting it.'}
      } },
    { id:'m2', skill:'Percentages', prompt:'What is 15% of 200?', correct:'C',
      choices:{
        A:{text:'15', explain:'This is just the percentage number itself, not the calculated portion of 200.'},
        B:{text:'20', explain:'This doesn\'t match multiplying 200 by 0.15.'},
        C:{text:'30', explain:'15% equals 0.15, and 0.15 x 200 = 30.'},
        D:{text:'35', explain:'This overshoots the correct product of 0.15 and 200.'}
      } },
    { id:'m3', skill:'Geometry', prompt:'A rectangle has a length of 8 and a width of 5. What is its area?', correct:'C',
      choices:{
        A:{text:'13', explain:'This is the sum of length and width, which relates to perimeter, not area.'},
        B:{text:'26', explain:'This would come from doubling 13, still a perimeter-related number, not area.'},
        C:{text:'40', explain:'Area of a rectangle is length x width, so 8 x 5 = 40.'},
        D:{text:'45', explain:'This doesn\'t match multiplying 8 and 5 correctly.'}
      } },
    { id:'m4', skill:'Algebra', prompt:'Simplify: 4(x + 3) - 2x', correct:'A',
      choices:{
        A:{text:'2x + 12', explain:'Distributing gives 4x + 12, and combining with -2x leaves 2x + 12.'},
        B:{text:'2x + 3', explain:'This drops part of the distributed constant term.'},
        C:{text:'6x + 12', explain:'This adds the x-terms instead of subtracting the 2x.'},
        D:{text:'2x + 7', explain:'This changes the constant incorrectly during distribution.'}
      } },
    { id:'m5', skill:'Word problems', prompt:'The sum of three consecutive integers is 72. What is the smallest of the three?', correct:'B',
      choices:{
        A:{text:'22', explain:'This is one less than the correct smallest integer.'},
        B:{text:'23', explain:'Setting the integers as n, n+1, n+2 gives 3n+3 = 72, so n = 23.'},
        C:{text:'24', explain:'This is actually the middle integer (72 divided by 3), not the smallest.'},
        D:{text:'25', explain:'This overshoots the smallest integer in the sequence.'}
      } },
    { id:'m6', skill:'Geometry', prompt:'What is the perimeter of a square with a side length of 9?', correct:'C',
      choices:{
        A:{text:'18', explain:'This is half of the correct perimeter.'},
        B:{text:'27', explain:'This doesn\'t match multiplying the side length by 4.'},
        C:{text:'36', explain:'Perimeter of a square is 4 x side length, so 4 x 9 = 36.'},
        D:{text:'81', explain:'This is the square\'s area (9x9), not its perimeter.'}
      } },
    { id:'m7', skill:'Word problems', prompt:'A train travels 60 miles in 1.5 hours. What is its average speed?', correct:'B',
      choices:{
        A:{text:'30 mph', explain:'This doesn\'t match dividing 60 by 1.5.'},
        B:{text:'40 mph', explain:'Speed = distance divided by time, so 60 / 1.5 = 40 mph.'},
        C:{text:'45 mph', explain:'This doesn\'t follow from the correct division.'},
        D:{text:'90 mph', explain:'This comes from multiplying instead of dividing distance by time.'}
      } },
    { id:'m8', skill:'Exponents', prompt:'What is the value of 2 cubed plus 3 squared?', correct:'C',
      choices:{
        A:{text:'12', explain:'This would come from treating the exponents as multiplication (2x3) instead of repeated multiplication.'},
        B:{text:'13', explain:'This doesn\'t match the correct values of 2 cubed and 3 squared added together.'},
        C:{text:'17', explain:'2 cubed is 8 and 3 squared is 9, and 8 + 9 = 17.'},
        D:{text:'36', explain:'36 would be 6 squared, which is not related to adding 2 cubed and 3 squared.'}
      } },
    { id:'m9', skill:'Fractions', prompt:'What is 1/4 + 1/3?', correct:'C',
      choices:{
        A:{text:'2/7', explain:'This comes from adding numerators and denominators directly, which is not how fractions are added.'},
        B:{text:'1/2', explain:'This doesn\'t match finding a common denominator correctly.'},
        C:{text:'7/12', explain:'Using a common denominator of 12, 1/4 = 3/12 and 1/3 = 4/12, and 3/12 + 4/12 = 7/12.'},
        D:{text:'5/7', explain:'This doesn\'t follow from adding the fractions with a common denominator.'}
      } },
    { id:'m10', skill:'Algebra', prompt:'Solve for x: 2x - 7 = 11', correct:'C',
      choices:{
        A:{text:'2', explain:'This would come from dividing 7 by 2 without isolating x properly.'},
        B:{text:'7', explain:'This is close to a step in the process but is not the final value of x.'},
        C:{text:'9', explain:'Add 7 to both sides to get 2x = 18, then divide by 2 to get x = 9.'},
        D:{text:'18', explain:'This is the value of 2x, not x itself — the final division step is missing.'}
      } },
    { id:'m11', skill:'Geometry', prompt:'What is the circumference of a circle with radius 7? (Use pi \u2248 22/7)', correct:'B',
      choices:{
        A:{text:'22', explain:'This is only half the correct circumference.'},
        B:{text:'44', explain:'Circumference is 2 x pi x r, so 2 x (22/7) x 7 = 44.'},
        C:{text:'49', explain:'This would be closer to an area-style calculation, not circumference.'},
        D:{text:'154', explain:'This is actually the area of the circle (pi x r squared), not its circumference.'}
      } },
    { id:'m12', skill:'Percentages', prompt:'A shirt originally priced at $40 is discounted 25%. What is the sale price?', correct:'C',
      choices:{
        A:{text:'$10', explain:'This is the discount amount itself, not the final sale price.'},
        B:{text:'$25', explain:'This doesn\'t match subtracting 25% of $40 from $40 correctly.'},
        C:{text:'$30', explain:'25% of $40 is $10, and $40 minus $10 is $30.'},
        D:{text:'$35', explain:'This doesn\'t match the correct discount amount of $10.'}
      } },
    { id:'m13', skill:'Geometry', prompt:'What is the volume of a cube with a side length of 4?', correct:'C',
      choices:{
        A:{text:'16', explain:'This is the area of one face of the cube, not its volume.'},
        B:{text:'48', explain:'This doesn\'t match multiplying 4 x 4 x 4 correctly.'},
        C:{text:'64', explain:'Volume of a cube is side cubed, so 4 x 4 x 4 = 64.'},
        D:{text:'12', explain:'This resembles a perimeter-style calculation, not volume.'}
      } },
    { id:'m14', skill:'Algebra', prompt:'If y = 3x + 2 and x = 4, what is y?', correct:'C',
      choices:{
        A:{text:'9', explain:'This doesn\'t match multiplying 3 by 4 and adding 2 correctly.'},
        B:{text:'12', explain:'This is only 3 times 4, without adding the 2.'},
        C:{text:'14', explain:'3 times 4 is 12, and 12 plus 2 is 14.'},
        D:{text:'20', explain:'This overshoots the correct sum of 12 and 2.'}
      } },
    { id:'m15', skill:'Number properties', prompt:'What is the least common multiple of 4 and 6?', correct:'B',
      choices:{
        A:{text:'10', explain:'This is the sum of 4 and 6, not their least common multiple.'},
        B:{text:'12', explain:'12 is the smallest number that both 4 and 6 divide into evenly.'},
        C:{text:'24', explain:'24 is a common multiple of 4 and 6, but not the least one.'},
        D:{text:'6', explain:'6 is a multiple of itself but not of 4, so it is not a common multiple of both.'}
      } },
    { id:'m16', skill:'Word problems', prompt:'A recipe calls for 2 cups of flour for 12 cookies. How many cups are needed for 18 cookies?', correct:'B',
      choices:{
        A:{text:'2.5', explain:'This doesn\'t match scaling the ratio of flour to cookies proportionally.'},
        B:{text:'3', explain:'18 cookies is 1.5 times 12, so 2 cups x 1.5 = 3 cups.'},
        C:{text:'3.5', explain:'This overshoots the correctly scaled amount.'},
        D:{text:'4', explain:'This would match doubling the recipe, but 18 cookies is only 1.5 times the original, not double.'}
      } },
    { id:'m17', skill:'Exponents', prompt:'What is 7 squared minus 4 squared?', correct:'C',
      choices:{
        A:{text:'9', explain:'This would come from squaring the difference (7-4) instead of subtracting the squares.'},
        B:{text:'25', explain:'This doesn\'t match calculating both squares correctly before subtracting.'},
        C:{text:'33', explain:'7 squared is 49 and 4 squared is 16, and 49 - 16 = 33.'},
        D:{text:'45', explain:'This doesn\'t follow from subtracting 16 from 49 correctly.'}
      } },
    { id:'m18', skill:'Algebra', prompt:'Solve: 5(x - 2) = 25', correct:'C',
      choices:{
        A:{text:'3', explain:'This doesn\'t match dividing 25 by 5 and adding 2 correctly.'},
        B:{text:'5', explain:'This is close to a step in the process but is not the final value of x.'},
        C:{text:'7', explain:'Divide both sides by 5 to get x - 2 = 5, then add 2 to get x = 7.'},
        D:{text:'10', explain:'This overshoots the correct value after adding 2.'}
      } },
    { id:'m19', skill:'Geometry', prompt:'What is the area of a triangle with a base of 10 and a height of 6?', correct:'B',
      choices:{
        A:{text:'16', explain:'This is the sum of the base and height, not the area.'},
        B:{text:'30', explain:'Area of a triangle is half of base times height, so 0.5 x 10 x 6 = 30.'},
        C:{text:'60', explain:'This is the area of a rectangle with the same dimensions, not a triangle, which is half that.'},
        D:{text:'36', explain:'This doesn\'t match the correct triangle area formula.'}
      } },
    { id:'m20', skill:'Percentages', prompt:'A jacket costs $80 after a 20% discount. What was the original price?', correct:'B',
      choices:{
        A:{text:'$96', explain:'This doesn\'t match reversing a 20% discount correctly.'},
        B:{text:'$100', explain:'If $80 is 80% of the original price, then the original price is 80 divided by 0.8, which is $100.'},
        C:{text:'$90', explain:'This doesn\'t match dividing 80 by 0.8 correctly.'},
        D:{text:'$120', explain:'This overshoots the correct original price.'}
      } },
    { id:'m21', skill:'Algebra', prompt:'Solve for x: 4x + 7 = 31', correct:'B',
      choices:{
        A:{text:'5', explain:'Doesn\'t match the correct steps.'},
        B:{text:'6', explain:'Subtract 7 from both sides (4x=24), then divide by 4 (x=6).'},
        C:{text:'7', explain:'Overshoots the correct value.'},
        D:{text:'8', explain:'Doesn\'t match dividing 24 by 4 correctly.'}
      } },
    { id:'m22', skill:'Algebra', prompt:'Solve for x: 2(x - 5) = 18', correct:'C',
      choices:{
        A:{text:'9', explain:'This is the value inside the parentheses before adding 5, not x itself.'},
        B:{text:'11', explain:'Doesn\'t match the correct final step.'},
        C:{text:'14', explain:'Divide both sides by 2 (x-5=9), then add 5 (x=14).'},
        D:{text:'18', explain:'This mistakes the right-hand side for the value of x.'}
      } },
    { id:'m23', skill:'Algebra', prompt:'Simplify: 5(2x - 3) + 4', correct:'A',
      choices:{
        A:{text:'10x - 11', explain:'Distribute first: 10x-15+4, then combine constants: 10x-11.'},
        B:{text:'10x - 15', explain:'This forgets to add the +4 at the end.'},
        C:{text:'7x - 11', explain:'This incorrectly combines the x-term with the constant multiplier.'},
        D:{text:'10x + 11', explain:'This changes the sign of the constant incorrectly.'}
      } },
    { id:'m24', skill:'Algebra', prompt:'If 3x - 4 = 2x + 9, what is x?', correct:'D',
      choices:{
        A:{text:'5', explain:'Doesn\'t match isolating x correctly.'},
        B:{text:'9', explain:'This is part of the original equation, not the solved value.'},
        C:{text:'4', explain:'Doesn\'t match the correct steps.'},
        D:{text:'13', explain:'Subtract 2x from both sides (x-4=9), then add 4 (x=13).'}
      } },
    { id:'m25', skill:'Percentages', prompt:'What is 25% of 160?', correct:'B',
      choices:{
        A:{text:'35', explain:'Doesn\'t match 0.25x160.'},
        B:{text:'40', explain:'0.25 x 160 = 40.'},
        C:{text:'45', explain:'Overshoots the correct product.'},
        D:{text:'50', explain:'Doesn\'t match the correct calculation.'}
      } },
    { id:'m26', skill:'Fractions', prompt:'What is 3/8 + 1/4?', correct:'C',
      choices:{
        A:{text:'4/12', explain:'Adding numerators and denominators directly isn\'t how fractions are added.'},
        B:{text:'1/2', explain:'Doesn\'t match the correct sum with a common denominator.'},
        C:{text:'5/8', explain:'Using a common denominator of 8: 1/4=2/8, so 3/8+2/8=5/8.'},
        D:{text:'4/8', explain:'Doesn\'t match adding 3/8 and 2/8 correctly.'}
      } },
    { id:'m27', skill:'Percentages', prompt:'A shirt costs $60 after a 40% discount. What was the original price?', correct:'A',
      choices:{
        A:{text:'$100', explain:'If $60 is 60% of the original price, the original price is 60 divided by 0.6, which is $100.'},
        B:{text:'$84', explain:'This doesn\'t match reversing the discount correctly.'},
        C:{text:'$90', explain:'Doesn\'t match dividing 60 by 0.6 correctly.'},
        D:{text:'$120', explain:'This overshoots the correct original price.'}
      } },
    { id:'m28', skill:'Fractions', prompt:'What is 5/6 - 1/3?', correct:'B',
      choices:{
        A:{text:'4/3', explain:'Doesn\'t match subtracting with a common denominator.'},
        B:{text:'1/2', explain:'Using a common denominator of 6: 1/3=2/6, so 5/6-2/6=3/6=1/2.'},
        C:{text:'4/6', explain:'Doesn\'t match the correct subtraction.'},
        D:{text:'2/3', explain:'This doesn\'t match 5/6 minus 2/6.'}
      } },
    { id:'m29', skill:'Geometry', prompt:'What is the area of a rectangle with length 12 and width 7?', correct:'D',
      choices:{
        A:{text:'19', explain:'This is the sum of length and width, related to perimeter, not area.'},
        B:{text:'38', explain:'This doubles the sum, still a perimeter-related number.'},
        C:{text:'70', explain:'Doesn\'t match multiplying 12 and 7 correctly.'},
        D:{text:'84', explain:'Area of a rectangle is length x width, so 12 x 7 = 84.'}
      } },
    { id:'m30', skill:'Geometry', prompt:'What is the perimeter of a triangle with sides 5, 7, and 9?', correct:'C',
      choices:{
        A:{text:'11', explain:'Doesn\'t match adding all three sides.'},
        B:{text:'16', explain:'This only adds two of the three sides.'},
        C:{text:'21', explain:'Perimeter is the sum of all sides: 5+7+9=21.'},
        D:{text:'315', explain:'This multiplies the sides instead of adding them.'}
      } },
    { id:'m31', skill:'Geometry', prompt:'What is the volume of a cube with a side length of 5?', correct:'A',
      choices:{
        A:{text:'125', explain:'Volume of a cube is side cubed, so 5x5x5=125.'},
        B:{text:'25', explain:'This is only the area of one face, not the full volume.'},
        C:{text:'15', explain:'This resembles a perimeter-style calculation, not volume.'},
        D:{text:'100', explain:'Doesn\'t match multiplying 5x5x5 correctly.'}
      } },
    { id:'m32', skill:'Geometry', prompt:'What is the circumference of a circle with radius 4? (use pi \u2248 3.14)', correct:'B',
      choices:{
        A:{text:'12.56', explain:'This is pi x radius, missing the factor of 2.'},
        B:{text:'25.12', explain:'Circumference = 2 x pi x radius = 2 x 3.14 x 4 = 25.12.'},
        C:{text:'50.24', explain:'This is actually the area (pi x radius squared), not circumference.'},
        D:{text:'16', explain:'This is just the radius times 4, not the circumference formula.'}
      } },
    { id:'m33', skill:'Word problems', prompt:'The sum of two consecutive odd integers is 44. What is the larger integer?', correct:'C',
      choices:{
        A:{text:'19', explain:'This is too small to be the larger of the two integers.'},
        B:{text:'20', explain:'20 is not an odd integer, so it can\'t fit this problem.'},
        C:{text:'23', explain:'Let the integers be n and n+2: 2n+2=44, so n=21, meaning the larger integer is 23.'},
        D:{text:'25', explain:'This overshoots the correct larger integer.'}
      } },
    { id:'m34', skill:'Word problems', prompt:'A train travels 210 miles in 3.5 hours. What is its average speed?', correct:'A',
      choices:{
        A:{text:'60 mph', explain:'Speed = distance divided by time, so 210 / 3.5 = 60 mph.'},
        B:{text:'70 mph', explain:'Doesn\'t match the correct division.'},
        C:{text:'50 mph', explain:'Doesn\'t match dividing 210 by 3.5.'},
        D:{text:'75 mph', explain:'This overshoots the correct speed.'}
      } },
    { id:'m35', skill:'Word problems', prompt:'Sam has 3 times as many marbles as Jake. Together they have 48 marbles. How many does Jake have?', correct:'D',
      choices:{
        A:{text:'36', explain:'This is Sam\'s amount, not Jake\'s.'},
        B:{text:'16', explain:'Doesn\'t match solving the equation correctly.'},
        C:{text:'24', explain:'This would be true only if they had equal amounts, but Sam has 3 times as many.'},
        D:{text:'12', explain:'Let Jake = x and Sam = 3x: 4x=48, so x=12.'}
      } },
    { id:'m36', skill:'Word problems', prompt:'A recipe calls for 3 cups of sugar for 24 cookies. How many cups are needed for 40 cookies?', correct:'B',
      choices:{
        A:{text:'4', explain:'Doesn\'t match the correct proportional scaling.'},
        B:{text:'5', explain:'40 cookies is 5/3 times 24, so 3 cups x 5/3 = 5 cups.'},
        C:{text:'4.5', explain:'This doesn\'t match scaling the ratio correctly.'},
        D:{text:'6', explain:'This overshoots the correctly scaled amount.'}
      } },
    { id:'m37', skill:'Exponents', prompt:'What is 5 cubed?', correct:'C',
      choices:{
        A:{text:'15', explain:'This treats the exponent as multiplication (5x3), not repeated multiplication.'},
        B:{text:'25', explain:'That\'s 5 squared, not 5 cubed.'},
        C:{text:'125', explain:'5 x 5 x 5 = 125.'},
        D:{text:'100', explain:'Doesn\'t match the correct repeated multiplication.'}
      } },
    { id:'m38', skill:'Number properties', prompt:'What is the least common multiple of 8 and 12?', correct:'A',
      choices:{
        A:{text:'24', explain:'24 is the smallest number that both 8 and 12 divide into evenly.'},
        B:{text:'96', explain:'96 is a common multiple, but not the least one.'},
        C:{text:'4', explain:'4 is a common factor, not a common multiple.'},
        D:{text:'20', explain:'20 is not evenly divisible by 8.'}
      } },
    { id:'m39', skill:'Number properties', prompt:'What is the greatest common factor of 30 and 45?', correct:'B',
      choices:{
        A:{text:'5', explain:'5 divides both, but it isn\'t the greatest common factor.'},
        B:{text:'15', explain:'15 is the largest number that divides both 30 and 45 evenly.'},
        C:{text:'10', explain:'10 doesn\'t divide 45 evenly.'},
        D:{text:'90', explain:'90 is a common multiple, not a common factor.'}
      } },
    { id:'m40', skill:'Exponents', prompt:'What is 6 squared minus 4 squared?', correct:'D',
      choices:{
        A:{text:'4', explain:'This treats the exponents as multiplication instead of repeated multiplication.'},
        B:{text:'12', explain:'Doesn\'t match calculating both squares correctly before subtracting.'},
        C:{text:'16', explain:'This is 4 squared alone, not the full subtraction.'},
        D:{text:'20', explain:'6 squared is 36 and 4 squared is 16, and 36-16=20.'}
      } },
    { id:'m41', skill:'Algebra', prompt:'Solve for x: 6x - 9 = 21', correct:'B',
      choices:{
        A:{text:'4', explain:'Doesn\'t match the correct steps.'},
        B:{text:'5', explain:'Add 9 to both sides (6x=30), then divide by 6 (x=5).'},
        C:{text:'6', explain:'Overshoots the correct value.'},
        D:{text:'7', explain:'Doesn\'t match dividing 30 by 6.'}
      } },
    { id:'m42', skill:'Algebra', prompt:'Solve for x: 4(x - 2) = 24', correct:'C',
      choices:{
        A:{text:'6', explain:'Doesn\'t match the correct steps.'},
        B:{text:'7', explain:'Close, but doesn\'t match the correct final step.'},
        C:{text:'8', explain:'Divide both sides by 4 (x-2=6), then add 2 (x=8).'},
        D:{text:'10', explain:'Overshoots the correct value.'}
      } },
    { id:'m43', skill:'Algebra', prompt:'Simplify: 2(3x - 1) + 5x', correct:'D',
      choices:{
        A:{text:'11x + 2', explain:'This changes the sign of the constant incorrectly.'},
        B:{text:'6x - 2', explain:'This forgets to add the 5x term correctly.'},
        C:{text:'11x', explain:'This drops the constant term entirely.'},
        D:{text:'11x - 2', explain:'Distribute first: 6x-2+5x, then combine like terms: 11x-2.'}
      } },
    { id:'m44', skill:'Algebra', prompt:'If 5x + 2 = 3x + 16, what is x?', correct:'A',
      choices:{
        A:{text:'7', explain:'Subtract 3x from both sides (2x+2=16), then subtract 2 (2x=14), then divide by 2 (x=7).'},
        B:{text:'8', explain:'Doesn\'t match the correct steps.'},
        C:{text:'9', explain:'Doesn\'t match solving the equation correctly.'},
        D:{text:'14', explain:'This is the value of 2x, not x itself.'}
      } },
    { id:'m45', skill:'Percentages', prompt:'What is 60% of 250?', correct:'B',
      choices:{
        A:{text:'140', explain:'Doesn\'t match 0.6x250.'},
        B:{text:'150', explain:'0.6 x 250 = 150.'},
        C:{text:'160', explain:'Overshoots the correct product.'},
        D:{text:'125', explain:'Doesn\'t match the correct calculation.'}
      } },
    { id:'m46', skill:'Fractions', prompt:'What is 1/3 + 1/6?', correct:'C',
      choices:{
        A:{text:'2/9', explain:'Adding numerators and denominators directly isn\'t how fractions are added.'},
        B:{text:'1/3', explain:'Doesn\'t match the correct sum with a common denominator.'},
        C:{text:'1/2', explain:'Using a common denominator of 6: 1/3=2/6, so 2/6+1/6=3/6=1/2.'},
        D:{text:'2/6', explain:'3/6 simplifies to 1/2, so this isn\'t in simplest form.'}
      } },
    { id:'m47', skill:'Percentages', prompt:'A backpack costs $45 after a 25% discount. What was the original price?', correct:'D',
      choices:{
        A:{text:'$50', explain:'Doesn\'t match reversing the discount correctly.'},
        B:{text:'$54', explain:'Doesn\'t match dividing 45 by 0.75.'},
        C:{text:'$56.25', explain:'This adds 25% of 45 rather than reversing the discount correctly.'},
        D:{text:'$60', explain:'If $45 is 75% of the original price, the original price is 45 divided by 0.75, which is $60.'}
      } },
    { id:'m48', skill:'Fractions', prompt:'What is 7/8 - 1/2?', correct:'A',
      choices:{
        A:{text:'3/8', explain:'Using a common denominator of 8: 1/2=4/8, so 7/8-4/8=3/8.'},
        B:{text:'1/4', explain:'Doesn\'t match the correct subtraction.'},
        C:{text:'1/2', explain:'This mistakes the subtrahend for the answer.'},
        D:{text:'6/8', explain:'This doesn\'t match subtracting 4/8 from 7/8 correctly.'}
      } },
    { id:'m49', skill:'Geometry', prompt:'What is the area of a rectangle with length 15 and width 4?', correct:'B',
      choices:{
        A:{text:'19', explain:'This is the sum of length and width, related to perimeter, not area.'},
        B:{text:'60', explain:'Area of a rectangle is length x width, so 15 x 4 = 60.'},
        C:{text:'38', explain:'This doubles the sum, still a perimeter-related number.'},
        D:{text:'56', explain:'Doesn\'t match multiplying 15 and 4 correctly.'}
      } },
    { id:'m50', skill:'Geometry', prompt:'What is the perimeter of a square with a side length of 11?', correct:'C',
      choices:{
        A:{text:'22', explain:'This is only twice the side length, not the full perimeter.'},
        B:{text:'33', explain:'Doesn\'t match multiplying the side length by 4.'},
        C:{text:'44', explain:'Perimeter of a square is 4 x side length, so 4 x 11 = 44.'},
        D:{text:'121', explain:'This is the square\'s area (11x11), not its perimeter.'}
      } },
    { id:'m51', skill:'Geometry', prompt:'What is the volume of a cube with a side length of 6?', correct:'D',
      choices:{
        A:{text:'36', explain:'This is only the area of one face, not the full volume.'},
        B:{text:'108', explain:'Doesn\'t match multiplying 6x6x6 correctly.'},
        C:{text:'196', explain:'Doesn\'t match the correct calculation.'},
        D:{text:'216', explain:'Volume of a cube is side cubed, so 6x6x6=216.'}
      } },
    { id:'m52', skill:'Geometry', prompt:'What is the circumference of a circle with radius 9? (use pi \u2248 3.14)', correct:'A',
      choices:{
        A:{text:'56.52', explain:'Circumference = 2 x pi x radius = 2 x 3.14 x 9 = 56.52.'},
        B:{text:'28.26', explain:'This is only pi x radius, missing the factor of 2.'},
        C:{text:'254.34', explain:'This is actually the area (pi x radius squared), not circumference.'},
        D:{text:'113.04', explain:'This doubles the correct circumference incorrectly.'}
      } },
    { id:'m53', skill:'Word problems', prompt:'The sum of three consecutive integers is 108. What is the largest?', correct:'B',
      choices:{
        A:{text:'35', explain:'This is the smallest integer, not the largest.'},
        B:{text:'37', explain:'Let the integers be n, n+1, n+2: 3n+3=108, so n=35, meaning the largest integer is 37.'},
        C:{text:'36', explain:'This is the middle integer, not the largest.'},
        D:{text:'38', explain:'This overshoots the correct largest integer.'}
      } },
    { id:'m54', skill:'Word problems', prompt:'A car travels 175 miles in 2.5 hours. What is its average speed?', correct:'C',
      choices:{
        A:{text:'65 mph', explain:'Doesn\'t match dividing 175 by 2.5.'},
        B:{text:'75 mph', explain:'Overshoots the correct speed.'},
        C:{text:'70 mph', explain:'Speed = distance divided by time, so 175 / 2.5 = 70 mph.'},
        D:{text:'80 mph', explain:'This overshoots the correct speed by even more.'}
      } },
    { id:'m55', skill:'Word problems', prompt:'Twice a number decreased by 5 is 21. What is the number?', correct:'D',
      choices:{
        A:{text:'8', explain:'Doesn\'t match solving 2x-5=21 correctly.'},
        B:{text:'11', explain:'Doesn\'t match the correct steps.'},
        C:{text:'16', explain:'This overshoots the correct value.'},
        D:{text:'13', explain:'Add 5 to both sides (2x=26), then divide by 2 (x=13).'}
      } },
    { id:'m56', skill:'Word problems', prompt:'A recipe calls for 4 cups of flour for 20 cookies. How many cups are needed for 35 cookies?', correct:'A',
      choices:{
        A:{text:'7', explain:'35 cookies is 1.75 times 20, so 4 cups x 1.75 = 7 cups.'},
        B:{text:'6', explain:'Doesn\'t match the correct proportional scaling.'},
        C:{text:'6.5', explain:'Doesn\'t match scaling the ratio correctly.'},
        D:{text:'8', explain:'This overshoots the correctly scaled amount.'}
      } },
    { id:'m57', skill:'Exponents', prompt:'What is 6 cubed?', correct:'B',
      choices:{
        A:{text:'18', explain:'This treats the exponent as multiplication (6x3), not repeated multiplication.'},
        B:{text:'216', explain:'6 x 6 x 6 = 216.'},
        C:{text:'36', explain:'That\'s 6 squared, not 6 cubed.'},
        D:{text:'108', explain:'Doesn\'t match the correct repeated multiplication.'}
      } },
    { id:'m58', skill:'Number properties', prompt:'What is the least common multiple of 6 and 9?', correct:'C',
      choices:{
        A:{text:'3', explain:'3 is a common factor, not a common multiple.'},
        B:{text:'54', explain:'54 is a common multiple, but not the least one.'},
        C:{text:'18', explain:'18 is the smallest number that both 6 and 9 divide into evenly.'},
        D:{text:'27', explain:'27 is not evenly divisible by 6.'}
      } },
    { id:'m59', skill:'Number properties', prompt:'What is the greatest common factor of 36 and 48?', correct:'A',
      choices:{
        A:{text:'12', explain:'12 is the largest number that divides both 36 and 48 evenly.'},
        B:{text:'6', explain:'6 divides both, but it isn\'t the greatest common factor.'},
        C:{text:'4', explain:'4 divides both, but it isn\'t the greatest common factor.'},
        D:{text:'144', explain:'144 is a common multiple, not a common factor.'}
      } },
    { id:'m60', skill:'Exponents', prompt:'What is 5 squared plus 2 cubed?', correct:'D',
      choices:{
        A:{text:'17', explain:'This doesn\'t match calculating both exponents correctly before adding.'},
        B:{text:'19', explain:'Doesn\'t match the correct sum.'},
        C:{text:'29', explain:'Close, but doesn\'t match 25+8 exactly.'},
        D:{text:'33', explain:'5 squared is 25 and 2 cubed is 8, and 25+8=33.'}
      } },
    { id:'m61', skill:'Algebra', prompt:'Solve for x: 7x + 3 = 38', correct:'C',
      choices:{
        A:{text:'3', explain:'Doesn\'t match the correct steps.'},
        B:{text:'4', explain:'Close, but doesn\'t match dividing 35 by 7.'},
        C:{text:'5', explain:'Subtract 3 from both sides (7x=35), then divide by 7 (x=5).'},
        D:{text:'7', explain:'Overshoots the correct value.'}
      } },
    { id:'m62', skill:'Algebra', prompt:'Solve for x: 3(x + 5) = 36', correct:'D',
      choices:{
        A:{text:'5', explain:'Doesn\'t match dividing 36 by 3 first.'},
        B:{text:'6', explain:'Close, but doesn\'t match subtracting 5 correctly.'},
        C:{text:'8', explain:'Overshoots the correct value.'},
        D:{text:'7', explain:'Divide both sides by 3 (x+5=12), then subtract 5 (x=7).'}
      } },
    { id:'m63', skill:'Algebra', prompt:'Simplify: 4(2x + 3) - 3x', correct:'A',
      choices:{
        A:{text:'5x + 12', explain:'Distribute first: 8x+12-3x, then combine like terms: 5x+12.'},
        B:{text:'5x + 3', explain:'This drops part of the distributed constant.'},
        C:{text:'8x + 12', explain:'This forgets to subtract the 3x term.'},
        D:{text:'11x + 12', explain:'This adds the x-terms instead of subtracting the 3x.'}
      } },
    { id:'m64', skill:'Algebra', prompt:'If 6x - 1 = 4x + 11, what is x?', correct:'B',
      choices:{
        A:{text:'5', explain:'Doesn\'t match the correct steps.'},
        B:{text:'6', explain:'Subtract 4x from both sides (2x-1=11), then add 1 (2x=12), then divide by 2 (x=6).'},
        C:{text:'8', explain:'Doesn\'t match solving the equation correctly.'},
        D:{text:'12', explain:'This is the value of 2x, not x itself.'}
      } },
    { id:'m65', skill:'Percentages', prompt:'What is 45% of 180?', correct:'C',
      choices:{
        A:{text:'72', explain:'Doesn\'t match 0.45x180.'},
        B:{text:'76', explain:'Doesn\'t match the correct product.'},
        C:{text:'81', explain:'0.45 x 180 = 81.'},
        D:{text:'90', explain:'Overshoots the correct product.'}
      } },
    { id:'m66', skill:'Fractions', prompt:'What is 2/3 + 1/9?', correct:'D',
      choices:{
        A:{text:'3/12', explain:'Adding numerators and denominators directly isn\'t how fractions are added.'},
        B:{text:'1/3', explain:'Doesn\'t match the correct sum with a common denominator.'},
        C:{text:'5/9', explain:'Doesn\'t match adding 6/9 and 1/9 correctly.'},
        D:{text:'7/9', explain:'Using a common denominator of 9: 2/3=6/9, so 6/9+1/9=7/9.'}
      } },
    { id:'m67', skill:'Percentages', prompt:'A jacket costs $70 after a 30% discount. What was the original price?', correct:'A',
      choices:{
        A:{text:'$100', explain:'If $70 is 70% of the original price, the original price is 70 divided by 0.7, which is $100.'},
        B:{text:'$91', explain:'Doesn\'t match dividing 70 by 0.7.'},
        C:{text:'$95', explain:'Doesn\'t match the correct calculation.'},
        D:{text:'$110', explain:'This overshoots the correct original price.'}
      } },
    { id:'m68', skill:'Fractions', prompt:'What is 5/6 - 1/4?', correct:'B',
      choices:{
        A:{text:'2/2', explain:'This doesn\'t represent a valid simplified fraction result here.'},
        B:{text:'7/12', explain:'Using a common denominator of 12: 5/6=10/12 and 1/4=3/12, so 10/12-3/12=7/12.'},
        C:{text:'1/2', explain:'Doesn\'t match the correct subtraction.'},
        D:{text:'8/12', explain:'Doesn\'t match subtracting 3/12 from 10/12 correctly.'}
      } },
    { id:'m69', skill:'Geometry', prompt:'What is the area of a rectangle with length 9 and width 11?', correct:'D',
      choices:{
        A:{text:'20', explain:'This is the sum of length and width, related to perimeter, not area.'},
        B:{text:'40', explain:'This doubles the sum, still a perimeter-related number.'},
        C:{text:'90', explain:'Doesn\'t match multiplying 9 and 11 correctly.'},
        D:{text:'99', explain:'Area of a rectangle is length x width, so 9 x 11 = 99.'}
      } },
    { id:'m70', skill:'Geometry', prompt:'What is the perimeter of a triangle with sides 8, 10, and 12?', correct:'C',
      choices:{
        A:{text:'20', explain:'Doesn\'t match adding all three sides.'},
        B:{text:'960', explain:'This multiplies the sides instead of adding them.'},
        C:{text:'30', explain:'Perimeter is the sum of all sides: 8+10+12=30.'},
        D:{text:'18', explain:'Doesn\'t match adding all three sides correctly.'}
      } },
    { id:'m71', skill:'Geometry', prompt:'What is the volume of a cube with a side length of 7?', correct:'A',
      choices:{
        A:{text:'343', explain:'Volume of a cube is side cubed, so 7x7x7=343.'},
        B:{text:'49', explain:'This is only the area of one face, not the full volume.'},
        C:{text:'21', explain:'This resembles a perimeter-style calculation, not volume.'},
        D:{text:'294', explain:'Doesn\'t match multiplying 7x7x7 correctly.'}
      } },
    { id:'m72', skill:'Geometry', prompt:'What is the circumference of a circle with radius 6? (use pi \u2248 3.14)', correct:'B',
      choices:{
        A:{text:'18.84', explain:'This is pi x radius, missing the factor of 2.'},
        B:{text:'37.68', explain:'Circumference = 2 x pi x radius = 2 x 3.14 x 6 = 37.68.'},
        C:{text:'113.04', explain:'This is actually the area (pi x radius squared), not circumference.'},
        D:{text:'12', explain:'This is just the radius times 2, not the circumference formula.'}
      } },
    { id:'m73', skill:'Word problems', prompt:'The sum of three consecutive even integers is 90. What is the largest?', correct:'C',
      choices:{
        A:{text:'28', explain:'This is the smallest integer, not the largest.'},
        B:{text:'30', explain:'This is the middle integer, not the largest.'},
        C:{text:'32', explain:'Let the integers be n, n+2, n+4: 3n+6=90, so n=28, meaning the largest integer is 32.'},
        D:{text:'34', explain:'This overshoots the correct largest integer.'}
      } },
    { id:'m74', skill:'Word problems', prompt:'A car travels 240 miles in 4 hours. What is its average speed?', correct:'D',
      choices:{
        A:{text:'50 mph', explain:'Doesn\'t match dividing 240 by 4.'},
        B:{text:'55 mph', explain:'Doesn\'t match the correct division.'},
        C:{text:'65 mph', explain:'Overshoots the correct speed.'},
        D:{text:'60 mph', explain:'Speed = distance divided by time, so 240 / 4 = 60 mph.'}
      } },
    { id:'m75', skill:'Word problems', prompt:'Three times a number plus 7 is 31. What is the number?', correct:'A',
      choices:{
        A:{text:'8', explain:'Subtract 7 from both sides (3x=24), then divide by 3 (x=8).'},
        B:{text:'6', explain:'Doesn\'t match the correct steps.'},
        C:{text:'10', explain:'Overshoots the correct value.'},
        D:{text:'24', explain:'This is the value of 3x, not x itself.'}
      } },
    { id:'m76', skill:'Word problems', prompt:'A recipe calls for 5 cups of flour for 30 cookies. How many cups are needed for 42 cookies?', correct:'C',
      choices:{
        A:{text:'6', explain:'Doesn\'t match the correct proportional scaling.'},
        B:{text:'6.5', explain:'Doesn\'t match scaling the ratio correctly.'},
        C:{text:'7', explain:'42 cookies is 1.4 times 30, so 5 cups x 1.4 = 7 cups.'},
        D:{text:'8', explain:'This overshoots the correctly scaled amount.'}
      } },
    { id:'m77', skill:'Exponents', prompt:'What is 7 cubed?', correct:'D',
      choices:{
        A:{text:'21', explain:'This treats the exponent as multiplication (7x3), not repeated multiplication.'},
        B:{text:'49', explain:'That\'s 7 squared, not 7 cubed.'},
        C:{text:'147', explain:'Doesn\'t match the correct repeated multiplication.'},
        D:{text:'343', explain:'7 x 7 x 7 = 343.'}
      } },
    { id:'m78', skill:'Number properties', prompt:'What is the least common multiple of 4 and 10?', correct:'B',
      choices:{
        A:{text:'40', explain:'40 is a common multiple, but not the least one.'},
        B:{text:'20', explain:'20 is the smallest number that both 4 and 10 divide into evenly.'},
        C:{text:'2', explain:'2 is a common factor, not a common multiple.'},
        D:{text:'14', explain:'14 is not evenly divisible by 4.'}
      } },
    { id:'m79', skill:'Number properties', prompt:'What is the greatest common factor of 24 and 36?', correct:'A',
      choices:{
        A:{text:'12', explain:'12 is the largest number that divides both 24 and 36 evenly.'},
        B:{text:'6', explain:'6 divides both, but it isn\'t the greatest common factor.'},
        C:{text:'4', explain:'4 divides both, but it isn\'t the greatest common factor.'},
        D:{text:'72', explain:'72 is a common multiple, not a common factor.'}
      } },
    { id:'m80', skill:'Exponents', prompt:'What is 4 cubed minus 3 squared?', correct:'D',
      choices:{
        A:{text:'19', explain:'This doesn\'t match calculating both exponents correctly before subtracting.'},
        B:{text:'37', explain:'Doesn\'t match the correct subtraction.'},
        C:{text:'46', explain:'Close, but doesn\'t match 64-9 exactly.'},
        D:{text:'55', explain:'4 cubed is 64 and 3 squared is 9, and 64-9=55.'}
      } },
    { id:'m81', skill:'Algebra', prompt:'Solve for x: 8x - 5 = 27', correct:'B',
      choices:{
        A:{text:'3', explain:'Doesn\'t match the correct steps.'},
        B:{text:'4', explain:'Add 5 to both sides (8x=32), then divide by 8 (x=4).'},
        C:{text:'5', explain:'Overshoots the correct value.'},
        D:{text:'6', explain:'Doesn\'t match dividing 32 by 8.'}
      } },
    { id:'m82', skill:'Algebra', prompt:'Solve for x: 5(x - 3) = 25', correct:'D',
      choices:{
        A:{text:'5', explain:'Doesn\'t match the correct steps.'},
        B:{text:'6', explain:'Close, but doesn\'t match adding 3 correctly.'},
        C:{text:'7', explain:'Doesn\'t match dividing 25 by 5 first.'},
        D:{text:'8', explain:'Divide both sides by 5 (x-3=5), then add 3 (x=8).'}
      } },
    { id:'m83', skill:'Algebra', prompt:'Simplify: 3(4x - 2) + 2x', correct:'A',
      choices:{
        A:{text:'14x - 6', explain:'Distribute first: 12x-6+2x, then combine like terms: 14x-6.'},
        B:{text:'14x - 2', explain:'This drops part of the distributed constant.'},
        C:{text:'12x - 6', explain:'This forgets to add the 2x term.'},
        D:{text:'6x - 6', explain:'This subtracts the x-terms instead of adding.'}
      } },
    { id:'m84', skill:'Algebra', prompt:'If 7x + 3 = 4x + 18, what is x?', correct:'C',
      choices:{
        A:{text:'3', explain:'Doesn\'t match the correct steps.'},
        B:{text:'4', explain:'Doesn\'t match solving the equation correctly.'},
        C:{text:'5', explain:'Subtract 4x from both sides (3x+3=18), then subtract 3 (3x=15), then divide by 3 (x=5).'},
        D:{text:'18', explain:'This is one side of the original equation, not the solved value.'}
      } },
    { id:'m85', skill:'Percentages', prompt:'What is 70% of 90?', correct:'D',
      choices:{
        A:{text:'56', explain:'Doesn\'t match 0.7x90.'},
        B:{text:'60', explain:'Doesn\'t match the correct product.'},
        C:{text:'66', explain:'Overshoots the correct product.'},
        D:{text:'63', explain:'0.7 x 90 = 63.'}
      } },
    { id:'m86', skill:'Fractions', prompt:'What is 3/4 + 1/8?', correct:'A',
      choices:{
        A:{text:'7/8', explain:'Using a common denominator of 8: 3/4=6/8, so 6/8+1/8=7/8.'},
        B:{text:'4/12', explain:'Adding numerators and denominators directly isn\'t how fractions are added.'},
        C:{text:'5/8', explain:'Doesn\'t match adding 6/8 and 1/8 correctly.'},
        D:{text:'1', explain:'Overshoots the correct sum.'}
      } },
    { id:'m87', skill:'Percentages', prompt:'A jacket costs $54 after a 10% discount. What was the original price?', correct:'B',
      choices:{
        A:{text:'$58', explain:'Doesn\'t match dividing 54 by 0.9.'},
        B:{text:'$60', explain:'If $54 is 90% of the original price, the original price is 54 divided by 0.9, which is $60.'},
        C:{text:'$65', explain:'Overshoots the correct original price.'},
        D:{text:'$50', explain:'Doesn\'t match reversing the discount correctly.'}
      } },
    { id:'m88', skill:'Fractions', prompt:'What is 4/5 - 1/10?', correct:'C',
      choices:{
        A:{text:'3/10', explain:'Doesn\'t match the correct subtraction.'},
        B:{text:'1/2', explain:'Doesn\'t match subtracting 1/10 from 8/10.'},
        C:{text:'7/10', explain:'Using a common denominator of 10: 4/5=8/10, so 8/10-1/10=7/10.'},
        D:{text:'5/10', explain:'Doesn\'t match the correct subtraction.'}
      } },
    { id:'m89', skill:'Geometry', prompt:'What is the area of a rectangle with length 13 and width 6?', correct:'D',
      choices:{
        A:{text:'19', explain:'This is the sum of length and width, related to perimeter, not area.'},
        B:{text:'38', explain:'This doubles the sum, still a perimeter-related number.'},
        C:{text:'70', explain:'Doesn\'t match multiplying 13 and 6 correctly.'},
        D:{text:'78', explain:'Area of a rectangle is length x width, so 13 x 6 = 78.'}
      } },
    { id:'m90', skill:'Geometry', prompt:'What is the perimeter of a square with a side length of 14?', correct:'A',
      choices:{
        A:{text:'56', explain:'Perimeter of a square is 4 x side length, so 4 x 14 = 56.'},
        B:{text:'28', explain:'This is only twice the side length, not the full perimeter.'},
        C:{text:'196', explain:'This is the square\'s area (14x14), not its perimeter.'},
        D:{text:'42', explain:'Doesn\'t match multiplying the side length by 4.'}
      } },
    { id:'m91', skill:'Geometry', prompt:'What is the volume of a cube with a side length of 8?', correct:'B',
      choices:{
        A:{text:'64', explain:'This is only the area of one face, not the full volume.'},
        B:{text:'512', explain:'Volume of a cube is side cubed, so 8x8x8=512.'},
        C:{text:'24', explain:'This resembles a perimeter-style calculation, not volume.'},
        D:{text:'448', explain:'Doesn\'t match multiplying 8x8x8 correctly.'}
      } },
    { id:'m92', skill:'Geometry', prompt:'What is the circumference of a circle with radius 12? (use pi \u2248 3.14)', correct:'C',
      choices:{
        A:{text:'37.68', explain:'This is pi x radius, missing the factor of 2.'},
        B:{text:'150.72', explain:'This doubles the correct circumference incorrectly.'},
        C:{text:'75.36', explain:'Circumference = 2 x pi x radius = 2 x 3.14 x 12 = 75.36.'},
        D:{text:'452.16', explain:'This is actually the area (pi x radius squared), not circumference.'}
      } },
    { id:'m93', skill:'Word problems', prompt:'The sum of three consecutive integers is 126. What is the largest?', correct:'D',
      choices:{
        A:{text:'40', explain:'This is the smallest integer, not the largest.'},
        B:{text:'41', explain:'Doesn\'t match the correct largest integer.'},
        C:{text:'42', explain:'This is the middle integer, not the largest.'},
        D:{text:'43', explain:'Let the integers be n, n+1, n+2: 3n+3=126, so n=41, meaning the largest integer is 43.'}
      } },
    { id:'m94', skill:'Word problems', prompt:'A car travels 320 miles in 5 hours. What is its average speed?', correct:'A',
      choices:{
        A:{text:'64 mph', explain:'Speed = distance divided by time, so 320 / 5 = 64 mph.'},
        B:{text:'60 mph', explain:'Doesn\'t match the correct division.'},
        C:{text:'70 mph', explain:'Overshoots the correct speed.'},
        D:{text:'80 mph', explain:'This overshoots the correct speed by even more.'}
      } },
    { id:'m95', skill:'Word problems', prompt:'Four times a number minus 9 is 23. What is the number?', correct:'B',
      choices:{
        A:{text:'6', explain:'Doesn\'t match the correct steps.'},
        B:{text:'8', explain:'Add 9 to both sides (4x=32), then divide by 4 (x=8).'},
        C:{text:'10', explain:'Overshoots the correct value.'},
        D:{text:'32', explain:'This is the value of 4x, not x itself.'}
      } },
    { id:'m96', skill:'Word problems', prompt:'A recipe calls for 6 cups of flour for 24 cookies. How many cups are needed for 36 cookies?', correct:'C',
      choices:{
        A:{text:'7', explain:'Doesn\'t match the correct proportional scaling.'},
        B:{text:'8', explain:'Doesn\'t match scaling the ratio correctly.'},
        C:{text:'9', explain:'36 cookies is 1.5 times 24, so 6 cups x 1.5 = 9 cups.'},
        D:{text:'10', explain:'This overshoots the correctly scaled amount.'}
      } },
    { id:'m97', skill:'Exponents', prompt:'What is 2 to the 7th power?', correct:'D',
      choices:{
        A:{text:'14', explain:'This treats the exponent as multiplication (2x7), not repeated multiplication.'},
        B:{text:'49', explain:'Doesn\'t match the correct repeated multiplication.'},
        C:{text:'64', explain:'That\'s 2 to the 6th power, not the 7th.'},
        D:{text:'128', explain:'2 multiplied by itself 7 times equals 128.'}
      } },
    { id:'m98', skill:'Number properties', prompt:'What is the least common multiple of 9 and 12?', correct:'A',
      choices:{
        A:{text:'36', explain:'36 is the smallest number that both 9 and 12 divide into evenly.'},
        B:{text:'108', explain:'108 is a common multiple, but not the least one.'},
        C:{text:'3', explain:'3 is a common factor, not a common multiple.'},
        D:{text:'72', explain:'72 is a common multiple, but not the least one.'}
      } },
    { id:'m99', skill:'Number properties', prompt:'What is the greatest common factor of 45 and 60?', correct:'B',
      choices:{
        A:{text:'5', explain:'5 divides both, but it isn\'t the greatest common factor.'},
        B:{text:'15', explain:'15 is the largest number that divides both 45 and 60 evenly.'},
        C:{text:'9', explain:'9 doesn\'t divide 60 evenly.'},
        D:{text:'180', explain:'180 is a common multiple, not a common factor.'}
      } },
    { id:'m100', skill:'Exponents', prompt:'What is 6 squared plus 3 cubed?', correct:'C',
      choices:{
        A:{text:'27', explain:'This doesn\'t match calculating both exponents correctly before adding.'},
        B:{text:'45', explain:'Doesn\'t match the correct sum.'},
        C:{text:'63', explain:'6 squared is 36 and 3 cubed is 27, and 36+27=63.'},
        D:{text:'72', explain:'Overshoots the correct sum.'}
      } },
    { id:'m101', skill:'Algebra', prompt:'Solve for x: 9x - 4 = 41', correct:'B',
      choices:{
        A:{text:'4', explain:'Doesn\'t match the correct steps.'},
        B:{text:'5', explain:'Add 4 to both sides (9x=45), then divide by 9 (x=5).'},
        C:{text:'6', explain:'Overshoots the correct value.'},
        D:{text:'7', explain:'Doesn\'t match dividing 45 by 9.'}
      } },
    { id:'m102', skill:'Algebra', prompt:'Solve for x: 6(x + 2) = 42', correct:'C',
      choices:{
        A:{text:'3', explain:'Doesn\'t match the correct steps.'},
        B:{text:'4', explain:'Close, but doesn\'t match subtracting 2 correctly.'},
        C:{text:'5', explain:'Divide both sides by 6 (x+2=7), then subtract 2 (x=5).'},
        D:{text:'7', explain:'This is the value inside the parentheses before subtracting 2, not x itself.'}
      } },
    { id:'m103', skill:'Algebra', prompt:'Simplify: 5(3x - 2) + 4x', correct:'D',
      choices:{
        A:{text:'19x - 2', explain:'This drops part of the distributed constant.'},
        B:{text:'15x - 10', explain:'This forgets to add the 4x term.'},
        C:{text:'9x - 10', explain:'This incorrectly combines the x-term with the constant multiplier.'},
        D:{text:'19x - 10', explain:'Distribute first: 15x-10+4x, then combine like terms: 19x-10.'}
      } },
    { id:'m104', skill:'Algebra', prompt:'If 8x - 3 = 5x + 18, what is x?', correct:'A',
      choices:{
        A:{text:'7', explain:'Subtract 5x from both sides (3x-3=18), then add 3 (3x=21), then divide by 3 (x=7).'},
        B:{text:'8', explain:'Doesn\'t match the correct steps.'},
        C:{text:'9', explain:'Doesn\'t match solving the equation correctly.'},
        D:{text:'21', explain:'This is the value of 3x, not x itself.'}
      } },
    { id:'m105', skill:'Percentages', prompt:'What is 85% of 200?', correct:'C',
      choices:{
        A:{text:'160', explain:'Doesn\'t match 0.85x200.'},
        B:{text:'165', explain:'Doesn\'t match the correct product.'},
        C:{text:'170', explain:'0.85 x 200 = 170.'},
        D:{text:'175', explain:'Overshoots the correct product.'}
      } },
    { id:'m106', skill:'Fractions', prompt:'What is 3/5 + 1/10?', correct:'A',
      choices:{
        A:{text:'7/10', explain:'Using a common denominator of 10: 3/5=6/10, so 6/10+1/10=7/10.'},
        B:{text:'4/15', explain:'Adding numerators and denominators directly isn\'t how fractions are added.'},
        C:{text:'1/2', explain:'Doesn\'t match adding 6/10 and 1/10 correctly.'},
        D:{text:'8/10', explain:'Overshoots the correct sum.'}
      } },
    { id:'m107', skill:'Percentages', prompt:'A shirt costs $36 after a 20% discount. What was the original price?', correct:'B',
      choices:{
        A:{text:'$40', explain:'Doesn\'t match dividing 36 by 0.8.'},
        B:{text:'$45', explain:'If $36 is 80% of the original price, the original price is 36 divided by 0.8, which is $45.'},
        C:{text:'$50', explain:'Overshoots the correct original price.'},
        D:{text:'$38', explain:'Doesn\'t match reversing the discount correctly.'}
      } },
    { id:'m108', skill:'Fractions', prompt:'What is 7/8 - 3/16?', correct:'D',
      choices:{
        A:{text:'4/8', explain:'Doesn\'t match the correct subtraction.'},
        B:{text:'1/2', explain:'Doesn\'t match subtracting 3/16 from 14/16.'},
        C:{text:'10/16', explain:'Doesn\'t match the correct subtraction.'},
        D:{text:'11/16', explain:'Using a common denominator of 16: 7/8=14/16, so 14/16-3/16=11/16.'}
      } },
    { id:'m109', skill:'Geometry', prompt:'What is the area of a rectangle with length 14 and width 5?', correct:'C',
      choices:{
        A:{text:'19', explain:'This is the sum of length and width, related to perimeter, not area.'},
        B:{text:'38', explain:'This doubles the sum, still a perimeter-related number.'},
        C:{text:'70', explain:'Area of a rectangle is length x width, so 14 x 5 = 70.'},
        D:{text:'65', explain:'Doesn\'t match multiplying 14 and 5 correctly.'}
      } },
    { id:'m110', skill:'Geometry', prompt:'What is the perimeter of a rectangle with length 9 and width 4?', correct:'A',
      choices:{
        A:{text:'26', explain:'Perimeter of a rectangle is 2(length+width), so 2(9+4)=26.'},
        B:{text:'36', explain:'This is the area, not the perimeter.'},
        C:{text:'13', explain:'This is only half the correct perimeter.'},
        D:{text:'22', explain:'Doesn\'t match the correct perimeter formula.'}
      } },
    { id:'m111', skill:'Geometry', prompt:'What is the volume of a cube with a side length of 9?', correct:'B',
      choices:{
        A:{text:'81', explain:'This is only the area of one face, not the full volume.'},
        B:{text:'729', explain:'Volume of a cube is side cubed, so 9x9x9=729.'},
        C:{text:'27', explain:'This resembles a perimeter-style calculation, not volume.'},
        D:{text:'648', explain:'Doesn\'t match multiplying 9x9x9 correctly.'}
      } },
    { id:'m112', skill:'Geometry', prompt:'What is the circumference of a circle with radius 15? (use pi \u2248 3.14)', correct:'D',
      choices:{
        A:{text:'47.1', explain:'This is pi x radius, missing the factor of 2.'},
        B:{text:'188.4', explain:'This doubles the correct circumference incorrectly.'},
        C:{text:'706.5', explain:'This is actually the area (pi x radius squared), not circumference.'},
        D:{text:'94.2', explain:'Circumference = 2 x pi x radius = 2 x 3.14 x 15 = 94.2.'}
      } },
    { id:'m113', skill:'Word problems', prompt:'The sum of three consecutive integers is 144. What is the largest?', correct:'C',
      choices:{
        A:{text:'46', explain:'This is the smallest integer, not the largest.'},
        B:{text:'47', explain:'This is the middle integer, not the largest.'},
        C:{text:'49', explain:'Let the integers be n, n+1, n+2: 3n+3=144, so n=47, meaning the largest integer is 49.'},
        D:{text:'50', explain:'This overshoots the correct largest integer.'}
      } },
    { id:'m114', skill:'Word problems', prompt:'A car travels 450 miles in 6 hours. What is its average speed?', correct:'A',
      choices:{
        A:{text:'75 mph', explain:'Speed = distance divided by time, so 450 / 6 = 75 mph.'},
        B:{text:'70 mph', explain:'Doesn\'t match the correct division.'},
        C:{text:'80 mph', explain:'Overshoots the correct speed.'},
        D:{text:'65 mph', explain:'Doesn\'t match dividing 450 by 6.'}
      } },
    { id:'m115', skill:'Word problems', prompt:'Five times a number plus 8 is 53. What is the number?', correct:'C',
      choices:{
        A:{text:'7', explain:'Doesn\'t match the correct steps.'},
        B:{text:'8', explain:'Doesn\'t match solving the equation correctly.'},
        C:{text:'9', explain:'Subtract 8 from both sides (5x=45), then divide by 5 (x=9).'},
        D:{text:'45', explain:'This is the value of 5x, not x itself.'}
      } },
    { id:'m116', skill:'Word problems', prompt:'A recipe calls for 8 cups of flour for 32 cookies. How many cups are needed for 44 cookies?', correct:'D',
      choices:{
        A:{text:'9', explain:'Doesn\'t match the correct proportional scaling.'},
        B:{text:'10', explain:'Doesn\'t match scaling the ratio correctly.'},
        C:{text:'10.5', explain:'Close, but doesn\'t match the precise scaling.'},
        D:{text:'11', explain:'44 cookies is 1.375 times 32, so 8 cups x 1.375 = 11 cups.'}
      } },
    { id:'m117', skill:'Exponents', prompt:'What is 3 to the 5th power?', correct:'B',
      choices:{
        A:{text:'15', explain:'This treats the exponent as multiplication (3x5), not repeated multiplication.'},
        B:{text:'243', explain:'3 multiplied by itself 5 times equals 243.'},
        C:{text:'81', explain:'That\'s 3 to the 4th power, not the 5th.'},
        D:{text:'125', explain:'Doesn\'t match the correct repeated multiplication.'}
      } },
    { id:'m118', skill:'Number properties', prompt:'What is the least common multiple of 6 and 8?', correct:'A',
      choices:{
        A:{text:'24', explain:'24 is the smallest number that both 6 and 8 divide into evenly.'},
        B:{text:'48', explain:'48 is a common multiple, but not the least one.'},
        C:{text:'2', explain:'2 is a common factor, not a common multiple.'},
        D:{text:'14', explain:'14 is not evenly divisible by 6.'}
      } },
    { id:'m119', skill:'Number properties', prompt:'What is the greatest common factor of 28 and 42?', correct:'C',
      choices:{
        A:{text:'4', explain:'4 doesn\'t divide 42 evenly.'},
        B:{text:'7', explain:'7 divides both, but it isn\'t the greatest common factor.'},
        C:{text:'14', explain:'14 is the largest number that divides both 28 and 42 evenly.'},
        D:{text:'84', explain:'84 is a common multiple, not a common factor.'}
      } },
    { id:'m120', skill:'Exponents', prompt:'What is 7 squared minus 2 cubed?', correct:'B',
      choices:{
        A:{text:'33', explain:'This doesn\'t match calculating both exponents correctly before subtracting.'},
        B:{text:'41', explain:'7 squared is 49 and 2 cubed is 8, and 49-8=41.'},
        C:{text:'45', explain:'Doesn\'t match the correct subtraction.'},
        D:{text:'47', explain:'Close, but doesn\'t match 49-8 exactly.'}
      } },
    { id:'m121', skill:'Algebra', prompt:'Solve for x: 7x + 9 = 44', correct:'A',
      choices:{
        A:{text:'5', explain:'Subtract 9 from both sides (7x=35), then divide by 7 (x=5).'},
        B:{text:'6', explain:'Overshoots the correct value.'},
        C:{text:'7', explain:'Doesn\'t match dividing 35 by 7.'},
        D:{text:'4', explain:'Doesn\'t match the correct steps.'}
      } },
    { id:'m122', skill:'Algebra', prompt:'Solve for x: 4(x - 6) = 20', correct:'C',
      choices:{
        A:{text:'8', explain:'Doesn\'t match dividing 20 by 4 first.'},
        B:{text:'9', explain:'Close, but doesn\'t match adding 6 correctly.'},
        C:{text:'11', explain:'Divide both sides by 4 (x-6=5), then add 6 (x=11).'},
        D:{text:'5', explain:'This is the value inside the parentheses before adding 6, not x itself.'}
      } },
    { id:'m123', skill:'Algebra', prompt:'Simplify: 6(2x - 3) + 5x', correct:'D',
      choices:{
        A:{text:'12x - 3', explain:'This forgets to add the 5x term.'},
        B:{text:'11x - 18', explain:'This incorrectly combines the x-term with the constant multiplier.'},
        C:{text:'17x - 3', explain:'This drops part of the distributed constant.'},
        D:{text:'17x - 18', explain:'Distribute first: 12x-18+5x, then combine like terms: 17x-18.'}
      } },
    { id:'m124', skill:'Algebra', prompt:'If 9x - 2 = 6x + 13, what is x?', correct:'B',
      choices:{
        A:{text:'4', explain:'Doesn\'t match solving the equation correctly.'},
        B:{text:'5', explain:'Subtract 6x from both sides (3x-2=13), then add 2 (3x=15), then divide by 3 (x=5).'},
        C:{text:'6', explain:'Doesn\'t match the correct steps.'},
        D:{text:'15', explain:'This is the value of 3x, not x itself.'}
      } },
    { id:'m125', skill:'Percentages', prompt:'What is 55% of 220?', correct:'D',
      choices:{
        A:{text:'110', explain:'Doesn\'t match 0.55x220.'},
        B:{text:'115', explain:'Doesn\'t match the correct product.'},
        C:{text:'125', explain:'Overshoots the correct product.'},
        D:{text:'121', explain:'0.55 x 220 = 121.'}
      } },
    { id:'m126', skill:'Fractions', prompt:'What is 5/8 + 1/4?', correct:'A',
      choices:{
        A:{text:'7/8', explain:'Using a common denominator of 8: 1/4=2/8, so 5/8+2/8=7/8.'},
        B:{text:'6/12', explain:'Adding numerators and denominators directly isn\'t how fractions are added.'},
        C:{text:'3/4', explain:'Doesn\'t match adding 5/8 and 2/8 correctly.'},
        D:{text:'1', explain:'Overshoots the correct sum.'}
      } },
    { id:'m127', skill:'Percentages', prompt:'A jacket costs $63 after a 30% discount. What was the original price?', correct:'C',
      choices:{
        A:{text:'$81', explain:'Doesn\'t match dividing 63 by 0.7.'},
        B:{text:'$85', explain:'Overshoots the correct original price.'},
        C:{text:'$90', explain:'If $63 is 70% of the original price, the original price is 63 divided by 0.7, which is $90.'},
        D:{text:'$75', explain:'Doesn\'t match reversing the discount correctly.'}
      } },
    { id:'m128', skill:'Fractions', prompt:'What is 11/12 - 1/3?', correct:'B',
      choices:{
        A:{text:'10/9', explain:'Doesn\'t match subtracting with a common denominator.'},
        B:{text:'7/12', explain:'Using a common denominator of 12: 1/3=4/12, so 11/12-4/12=7/12.'},
        C:{text:'1/2', explain:'Doesn\'t match the correct subtraction.'},
        D:{text:'8/12', explain:'Doesn\'t match subtracting 4/12 from 11/12 correctly.'}
      } },
    { id:'m129', skill:'Geometry', prompt:'What is the area of a rectangle with length 16 and width 7?', correct:'D',
      choices:{
        A:{text:'23', explain:'This is the sum of length and width, related to perimeter, not area.'},
        B:{text:'46', explain:'This doubles the sum, still a perimeter-related number.'},
        C:{text:'100', explain:'Doesn\'t match multiplying 16 and 7 correctly.'},
        D:{text:'112', explain:'Area of a rectangle is length x width, so 16 x 7 = 112.'}
      } },
    { id:'m130', skill:'Geometry', prompt:'What is the perimeter of a rectangle with length 10 and width 6?', correct:'A',
      choices:{
        A:{text:'32', explain:'Perimeter of a rectangle is 2(length+width), so 2(10+6)=32.'},
        B:{text:'60', explain:'This is the area, not the perimeter.'},
        C:{text:'16', explain:'This is only half the correct perimeter.'},
        D:{text:'26', explain:'Doesn\'t match the correct perimeter formula.'}
      } },
    { id:'m131', skill:'Geometry', prompt:'What is the volume of a cube with a side length of 10?', correct:'B',
      choices:{
        A:{text:'100', explain:'This is only the area of one face, not the full volume.'},
        B:{text:'1000', explain:'Volume of a cube is side cubed, so 10x10x10=1000.'},
        C:{text:'40', explain:'This resembles a perimeter-style calculation, not volume.'},
        D:{text:'900', explain:'Doesn\'t match multiplying 10x10x10 correctly.'}
      } },
    { id:'m132', skill:'Geometry', prompt:'What is the circumference of a circle with radius 20? (use pi \u2248 3.14)', correct:'C',
      choices:{
        A:{text:'62.8', explain:'This is pi x radius, missing the factor of 2.'},
        B:{text:'251.2', explain:'This doubles the correct circumference incorrectly.'},
        C:{text:'125.6', explain:'Circumference = 2 x pi x radius = 2 x 3.14 x 20 = 125.6.'},
        D:{text:'1256', explain:'This is actually the area (pi x radius squared), not circumference.'}
      } },
    { id:'m133', skill:'Word problems', prompt:'The sum of three consecutive integers is 162. What is the largest?', correct:'D',
      choices:{
        A:{text:'52', explain:'This is the smallest integer, not the largest.'},
        B:{text:'53', explain:'This is the middle integer, not the largest.'},
        C:{text:'54', explain:'Doesn\'t match the correct largest integer.'},
        D:{text:'55', explain:'Let the integers be n, n+1, n+2: 3n+3=162, so n=53, meaning the largest integer is 55.'}
      } },
    { id:'m134', skill:'Word problems', prompt:'A car travels 560 miles in 8 hours. What is its average speed?', correct:'A',
      choices:{
        A:{text:'70 mph', explain:'Speed = distance divided by time, so 560 / 8 = 70 mph.'},
        B:{text:'65 mph', explain:'Doesn\'t match the correct division.'},
        C:{text:'75 mph', explain:'Overshoots the correct speed.'},
        D:{text:'80 mph', explain:'This overshoots the correct speed by even more.'}
      } },
    { id:'m135', skill:'Word problems', prompt:'Six times a number plus 7 is 61. What is the number?', correct:'C',
      choices:{
        A:{text:'7', explain:'Doesn\'t match the correct steps.'},
        B:{text:'8', explain:'Doesn\'t match solving the equation correctly.'},
        C:{text:'9', explain:'Subtract 7 from both sides (6x=54), then divide by 6 (x=9).'},
        D:{text:'54', explain:'This is the value of 6x, not x itself.'}
      } },
    { id:'m136', skill:'Word problems', prompt:'A recipe calls for 10 cups of flour for 40 cookies. How many cups are needed for 52 cookies?', correct:'B',
      choices:{
        A:{text:'12', explain:'Doesn\'t match the correct proportional scaling.'},
        B:{text:'13', explain:'52 cookies is 1.3 times 40, so 10 cups x 1.3 = 13 cups.'},
        C:{text:'11', explain:'Doesn\'t match scaling the ratio correctly.'},
        D:{text:'14', explain:'This overshoots the correctly scaled amount.'}
      } },
    { id:'m137', skill:'Exponents', prompt:'What is 4 to the 4th power?', correct:'D',
      choices:{
        A:{text:'16', explain:'This treats the exponent as multiplication (4x4), not repeated multiplication in this case, matching only 4 squared.'},
        B:{text:'64', explain:'That\'s 4 cubed, not 4 to the 4th power.'},
        C:{text:'128', explain:'Doesn\'t match the correct repeated multiplication.'},
        D:{text:'256', explain:'4 multiplied by itself 4 times equals 256.'}
      } },
    { id:'m138', skill:'Number properties', prompt:'What is the least common multiple of 10 and 15?', correct:'A',
      choices:{
        A:{text:'30', explain:'30 is the smallest number that both 10 and 15 divide into evenly.'},
        B:{text:'150', explain:'150 is a common multiple, but not the least one.'},
        C:{text:'5', explain:'5 is a common factor, not a common multiple.'},
        D:{text:'20', explain:'20 is not evenly divisible by 15.'}
      } },
    { id:'m139', skill:'Number properties', prompt:'What is the greatest common factor of 54 and 72?', correct:'B',
      choices:{
        A:{text:'9', explain:'9 divides both, but it isn\'t the greatest common factor.'},
        B:{text:'18', explain:'18 is the largest number that divides both 54 and 72 evenly.'},
        C:{text:'6', explain:'6 divides both, but it isn\'t the greatest common factor.'},
        D:{text:'216', explain:'216 is a common multiple, not a common factor.'}
      } },
    { id:'m140', skill:'Exponents', prompt:'What is 8 squared minus 5 squared?', correct:'C',
      choices:{
        A:{text:'9', explain:'This doesn\'t match calculating both exponents correctly before subtracting.'},
        B:{text:'19', explain:'Doesn\'t match the correct subtraction.'},
        C:{text:'39', explain:'8 squared is 64 and 5 squared is 25, and 64-25=39.'},
        D:{text:'45', explain:'Close, but doesn\'t match 64-25 exactly.'}
      } },
    { id:'m141', skill:'Algebra', prompt:'Solve for x: 8x - 6 = 42', correct:'B',
      choices:{
        A:{text:'5', explain:'Doesn\'t match the correct steps.'},
        B:{text:'6', explain:'Add 6 to both sides (8x=48), then divide by 8 (x=6).'},
        C:{text:'7', explain:'Overshoots the correct value.'},
        D:{text:'8', explain:'Doesn\'t match dividing 48 by 8.'}
      } },
    { id:'m142', skill:'Algebra', prompt:'Solve for x: 3(x + 7) = 36', correct:'A',
      choices:{
        A:{text:'5', explain:'Divide both sides by 3 (x+7=12), then subtract 7 (x=5).'},
        B:{text:'6', explain:'Close, but doesn\'t match subtracting 7 correctly.'},
        C:{text:'12', explain:'This is the value inside the parentheses before subtracting 7, not x itself.'},
        D:{text:'8', explain:'Doesn\'t match dividing 36 by 3 first.'}
      } },
    { id:'m143', skill:'Algebra', prompt:'Simplify: 7(2x - 3) + 4x', correct:'D',
      choices:{
        A:{text:'14x - 3', explain:'This drops part of the distributed constant.'},
        B:{text:'11x - 21', explain:'This incorrectly combines the x-term with the constant multiplier.'},
        C:{text:'14x + 21', explain:'This changes the sign of the constant incorrectly.'},
        D:{text:'18x - 21', explain:'Distribute first: 14x-21+4x, then combine like terms: 18x-21.'}
      } },
    { id:'m144', skill:'Algebra', prompt:'If 10x - 4 = 7x + 11, what is x?', correct:'C',
      choices:{
        A:{text:'3', explain:'Doesn\'t match solving the equation correctly.'},
        B:{text:'4', explain:'Doesn\'t match the correct steps.'},
        C:{text:'5', explain:'Subtract 7x from both sides (3x-4=11), then add 4 (3x=15), then divide by 3 (x=5).'},
        D:{text:'15', explain:'This is the value of 3x, not x itself.'}
      } },
    { id:'m145', skill:'Percentages', prompt:'What is 65% of 240?', correct:'B',
      choices:{
        A:{text:'150', explain:'Doesn\'t match 0.65x240.'},
        B:{text:'156', explain:'0.65 x 240 = 156.'},
        C:{text:'160', explain:'Overshoots the correct product.'},
        D:{text:'165', explain:'Doesn\'t match the correct calculation.'}
      } },
    { id:'m146', skill:'Fractions', prompt:'What is 7/10 + 1/5?', correct:'A',
      choices:{
        A:{text:'9/10', explain:'Using a common denominator of 10: 1/5=2/10, so 7/10+2/10=9/10.'},
        B:{text:'8/15', explain:'Adding numerators and denominators directly isn\'t how fractions are added.'},
        C:{text:'4/5', explain:'Doesn\'t match adding 7/10 and 2/10 correctly.'},
        D:{text:'1', explain:'Overshoots the correct sum.'}
      } },
    { id:'m147', skill:'Percentages', prompt:'A shirt costs $56 after a 20% discount. What was the original price?', correct:'C',
      choices:{
        A:{text:'$65', explain:'Doesn\'t match dividing 56 by 0.8.'},
        B:{text:'$68', explain:'Overshoots the correct original price.'},
        C:{text:'$70', explain:'If $56 is 80% of the original price, the original price is 56 divided by 0.8, which is $70.'},
        D:{text:'$60', explain:'Doesn\'t match reversing the discount correctly.'}
      } },
    { id:'m148', skill:'Fractions', prompt:'What is 9/10 - 3/5?', correct:'B',
      choices:{
        A:{text:'6/5', explain:'Doesn\'t match subtracting with a common denominator.'},
        B:{text:'3/10', explain:'Using a common denominator of 10: 3/5=6/10, so 9/10-6/10=3/10.'},
        C:{text:'1/2', explain:'Doesn\'t match the correct subtraction.'},
        D:{text:'2/5', explain:'Doesn\'t match subtracting 6/10 from 9/10 correctly.'}
      } },
    { id:'m149', skill:'Geometry', prompt:'What is the area of a rectangle with length 18 and width 6?', correct:'D',
      choices:{
        A:{text:'24', explain:'This is the sum of length and width, related to perimeter, not area.'},
        B:{text:'48', explain:'This doubles the sum, still a perimeter-related number.'},
        C:{text:'100', explain:'Doesn\'t match multiplying 18 and 6 correctly.'},
        D:{text:'108', explain:'Area of a rectangle is length x width, so 18 x 6 = 108.'}
      } },
    { id:'m150', skill:'Geometry', prompt:'What is the perimeter of a rectangle with length 11 and width 5?', correct:'A',
      choices:{
        A:{text:'32', explain:'Perimeter of a rectangle is 2(length+width), so 2(11+5)=32.'},
        B:{text:'55', explain:'This is the area, not the perimeter.'},
        C:{text:'16', explain:'This is only half the correct perimeter.'},
        D:{text:'28', explain:'Doesn\'t match the correct perimeter formula.'}
      } },
    { id:'m151', skill:'Geometry', prompt:'What is the volume of a cube with a side length of 11?', correct:'C',
      choices:{
        A:{text:'121', explain:'This is only the area of one face, not the full volume.'},
        B:{text:'44', explain:'This resembles a perimeter-style calculation, not volume.'},
        C:{text:'1331', explain:'Volume of a cube is side cubed, so 11x11x11=1331.'},
        D:{text:'1210', explain:'Doesn\'t match multiplying 11x11x11 correctly.'}
      } },
    { id:'m152', skill:'Geometry', prompt:'What is the circumference of a circle with radius 25? (use pi \u2248 3.14)', correct:'A',
      choices:{
        A:{text:'157', explain:'Circumference = 2 x pi x radius = 2 x 3.14 x 25 = 157.'},
        B:{text:'78.5', explain:'This is pi x radius, missing the factor of 2.'},
        C:{text:'1962.5', explain:'This is actually the area (pi x radius squared), not circumference.'},
        D:{text:'50', explain:'This is just the radius times 2, not the circumference formula.'}
      } },
    { id:'m153', skill:'Word problems', prompt:'The sum of three consecutive integers is 189. What is the largest?', correct:'D',
      choices:{
        A:{text:'61', explain:'This is the smallest integer, not the largest.'},
        B:{text:'62', explain:'This is the middle integer, not the largest.'},
        C:{text:'63', explain:'Doesn\'t match the correct largest integer.'},
        D:{text:'64', explain:'Let the integers be n, n+1, n+2: 3n+3=189, so n=62, meaning the largest is 64.'}
      } },
    { id:'m154', skill:'Word problems', prompt:'A car travels 630 miles in 9 hours. What is its average speed?', correct:'A',
      choices:{
        A:{text:'70 mph', explain:'Speed = distance divided by time, so 630 / 9 = 70 mph.'},
        B:{text:'65 mph', explain:'Doesn\'t match the correct division.'},
        C:{text:'75 mph', explain:'Overshoots the correct speed.'},
        D:{text:'80 mph', explain:'This overshoots the correct speed by even more.'}
      } },
    { id:'m155', skill:'Word problems', prompt:'Seven times a number plus 5 is 54. What is the number?', correct:'C',
      choices:{
        A:{text:'6', explain:'Doesn\'t match the correct steps.'},
        B:{text:'6.5', explain:'Doesn\'t match solving the equation correctly.'},
        C:{text:'7', explain:'Subtract 5 from both sides (7x=49), then divide by 7 (x=7).'},
        D:{text:'49', explain:'This is the value of 7x, not x itself.'}
      } },
    { id:'m156', skill:'Word problems', prompt:'A recipe calls for 12 cups of flour for 48 cookies. How many cups are needed for 60 cookies?', correct:'B',
      choices:{
        A:{text:'14', explain:'Doesn\'t match the correct proportional scaling.'},
        B:{text:'15', explain:'60 cookies is 1.25 times 48, so 12 cups x 1.25 = 15 cups.'},
        C:{text:'13', explain:'Doesn\'t match scaling the ratio correctly.'},
        D:{text:'16', explain:'This overshoots the correctly scaled amount.'}
      } },
    { id:'m157', skill:'Exponents', prompt:'What is 5 to the 4th power?', correct:'B',
      choices:{
        A:{text:'20', explain:'This treats the exponent as multiplication (5x4), not repeated multiplication.'},
        B:{text:'625', explain:'5 multiplied by itself 4 times equals 625.'},
        C:{text:'125', explain:'That\'s 5 cubed, not 5 to the 4th power.'},
        D:{text:'500', explain:'Doesn\'t match the correct repeated multiplication.'}
      } },
    { id:'m158', skill:'Number properties', prompt:'What is the least common multiple of 12 and 18?', correct:'A',
      choices:{
        A:{text:'36', explain:'36 is the smallest number that both 12 and 18 divide into evenly.'},
        B:{text:'216', explain:'216 is a common multiple, but not the least one.'},
        C:{text:'6', explain:'6 is a common factor, not a common multiple.'},
        D:{text:'24', explain:'24 is not evenly divisible by 18.'}
      } },
    { id:'m159', skill:'Number properties', prompt:'What is the greatest common factor of 63 and 84?', correct:'C',
      choices:{
        A:{text:'7', explain:'7 divides both, but it isn\'t the greatest common factor.'},
        B:{text:'9', explain:'9 doesn\'t divide 84 evenly.'},
        C:{text:'21', explain:'21 is the largest number that divides both 63 and 84 evenly.'},
        D:{text:'252', explain:'252 is a common multiple, not a common factor.'}
      } },
    { id:'m160', skill:'Exponents', prompt:'What is 9 squared minus 6 squared?', correct:'D',
      choices:{
        A:{text:'9', explain:'This doesn\'t match calculating both exponents correctly before subtracting.'},
        B:{text:'27', explain:'Doesn\'t match the correct subtraction.'},
        C:{text:'36', explain:'This is 6 squared alone, not the full subtraction.'},
        D:{text:'45', explain:'9 squared is 81 and 6 squared is 36, and 81-36=45.'}
      } }
  ],

  language: [
    { id:'l1', skill:'Subject-verb agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Neither of the boys were ready.', explain:'Neither is grammatically singular, so it should pair with was, not were — making this the sentence with the error.'},
        B:{text:'She and I went to the store.', explain:'This uses correct subject pronouns and agreement, so it is not the error.'},
        C:{text:'The books are on the shelf.', explain:'Books (plural) correctly agrees with are, so this sentence is correct.'},
        D:{text:'No mistake', explain:'There is a mistake in choice A, so this option is incorrect.'}
      } },
    { id:'l2', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:"Its a beautiful day, isnt it?", explain:"This is missing the required apostrophes in both it's and isn't."},
        B:{text:"It's a beautiful day, isn't it?", explain:'Both contractions are correctly punctuated with apostrophes, and the sentence correctly ends in a question mark.'},
        C:{text:"Its' a beautiful day, isn't it.", explain:"The apostrophe is misplaced in Its', and the sentence should end with a question mark, not a period."},
        D:{text:"It's a beautiful, day isn't it?", explain:'The comma after beautiful is incorrectly placed and breaks up the sentence.'}
      } },
    { id:'l3', skill:'Pronoun case', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Me and him went fishing.', explain:'Me and him should be He and I, since they serve as the subject of the sentence.'},
        B:{text:'He and I went fishing.', explain:'This uses the correct subject pronouns, so it is not the error.'},
        C:{text:'She and they went fishing.', explain:'This also uses correct subject pronouns, so it is not the error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l4', skill:'Sentence combining', prompt:'What is the best way to combine these two sentences? "The dog barked. The dog was hungry."', correct:'B',
      choices:{
        A:{text:'The dog barked, it was hungry.', explain:'Joining two full sentences with only a comma creates a run-on sentence.'},
        B:{text:'The dog, being hungry, barked.', explain:'This smoothly turns the second idea into a descriptive phrase attached to the main sentence.'},
        C:{text:'The dog barked being hungry.', explain:'This creates an awkward, unclear connection between the two ideas.'},
        D:{text:'The dog barked; hungry.', explain:'A semicolon needs a complete sentence on both sides, and "hungry" alone is not complete.'}
      } },
    { id:'l5', skill:'Capitalization', prompt:'Which sentence is capitalized correctly?', correct:'B',
      choices:{
        A:{text:'I visited paris last Summer.', explain:'Paris is a proper noun and should be capitalized, while Summer incorrectly is.'},
        B:{text:'I visited Paris last summer.', explain:'Paris is correctly capitalized as a proper noun, and summer is correctly lowercase since seasons are not proper nouns.'},
        C:{text:'i visited Paris last Summer.', explain:'The sentence-starting "i" should be capitalized, and Summer should not be.'},
        D:{text:'I Visited Paris Last Summer.', explain:'Visited, Last, and Summer are all capitalized when they should not be.'}
      } },
    { id:'l6', skill:'Pronoun agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Everyone should bring their own lunch.', explain:'Everyone is grammatically singular, so traditional agreement calls for his or her rather than their.'},
        B:{text:'Each student must bring his or her book.', explain:'This correctly uses a singular pronoun to match the singular each student.'},
        C:{text:'The team celebrated its victory.', explain:'Team correctly takes the singular pronoun its.'},
        D:{text:'No mistake', explain:'Choice A contains an error under traditional agreement rules, so this option is incorrect.'}
      } },
    { id:'l7', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'I have three pets: a cat a dog and a fish.', explain:'The list items need commas separating them, which are missing here.'},
        B:{text:'I have three pets: a cat, a dog, and a fish.', explain:'This correctly uses a colon to introduce the list, with commas separating each item.'},
        C:{text:'I have three pets, a cat, a dog, and a fish.', explain:'A colon, not a comma, should introduce a list like this.'},
        D:{text:'I have three pets a cat, a dog and a fish.', explain:'This is missing the colon needed to introduce the list.'}
      } },
    { id:'l8', skill:'Subject-verb agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:"She don't like broccoli.", explain:"She is singular and third-person, so it needs doesn't, not don't."},
        B:{text:"He doesn't like peas.", explain:"This correctly uses doesn't with the singular subject he."},
        C:{text:"They don't like carrots.", explain:"They is plural, so don't is the correct form here."},
        D:{text:'No mistake', explain:'Choice A contains a subject-verb agreement error, so this option is incorrect.'}
      } },
    { id:'l9', skill:'Contractions vs. possessives', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Its raining outside.', explain:'This needs the contraction it\'s (it is), not the possessive its.'},
        B:{text:'The cat licked its paw.', explain:'This correctly uses the possessive its, since no contraction is intended.'},
        C:{text:'She lost her keys.', explain:'This sentence uses correct possessive pronoun usage throughout.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l10', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'Where are you going.', explain:'A question needs a question mark, not a period.'},
        B:{text:'Where are you going?', explain:'This correctly ends a question with a question mark.'},
        C:{text:'Where, are you going?', explain:'The comma after Where is unnecessary and breaks up the sentence.'},
        D:{text:'where are you going?', explain:'The sentence should begin with a capital letter.'}
      } },
    { id:'l11', skill:'Pronoun case', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Give the book to Sarah and I.', explain:'As the object of the sentence, this should be Sarah and me, not Sarah and I.'},
        B:{text:'Give the book to Sarah and me.', explain:'This correctly uses me as the object of the sentence.'},
        C:{text:'Give the book to us.', explain:'This correctly uses the object pronoun us.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l12', skill:'Sentence combining', prompt:'What is the best way to combine these two sentences? "The rain stopped. The sun came out."', correct:'B',
      choices:{
        A:{text:'The rain stopped, the sun came out.', explain:'Joining two full sentences with only a comma creates a run-on sentence.'},
        B:{text:'After the rain stopped, the sun came out.', explain:'This correctly combines the two ideas using a subordinating word to show the sequence of events.'},
        C:{text:'The rain stopped the sun came out.', explain:'This runs the two sentences together with no punctuation at all.'},
        D:{text:'The rain stopped; the sun, coming out.', explain:'The comma after sun is unnecessary and makes the sentence awkward.'}
      } },
    { id:'l13', skill:'Capitalization', prompt:'Which sentence is capitalized correctly?', correct:'C',
      choices:{
        A:{text:'We celebrate thanksgiving in November.', explain:'Thanksgiving is a proper noun and should be capitalized.'},
        B:{text:'We celebrate Thanksgiving in november.', explain:'November is a proper noun (a month) and should be capitalized.'},
        C:{text:'We celebrate Thanksgiving in November.', explain:'Both Thanksgiving and November are proper nouns and are correctly capitalized here.'},
        D:{text:'we celebrate Thanksgiving in November.', explain:'The sentence-starting word should be capitalized.'}
      } },
    { id:'l14', skill:'Contractions vs. possessives', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Their going to the park.', explain:'This should be they\'re (they are), not the possessive their.'},
        B:{text:'They\'re happy about the news.', explain:'This correctly uses the contraction they\'re (they are).'},
        C:{text:'The cat sat over there.', explain:'This correctly uses there to describe a location.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l15', skill:'Contractions', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'I can\'t believe were almost done!', explain:'This needs the contraction we\'re (we are), not were.'},
        B:{text:'I can\'t believe we\'re almost done!', explain:'This correctly uses the contraction we\'re (we are).'},
        C:{text:'I cant believe we\'re almost done!', explain:'Cant is missing its apostrophe; it should be can\'t.'},
        D:{text:'I can\'t believe were, almost done!', explain:'The comma is unnecessary, and were should be we\'re.'}
      } },
    { id:'l16', skill:'Contractions vs. possessives', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Who\'s coat is this?', explain:'This should be the possessive whose, not the contraction who\'s (who is).'},
        B:{text:'Whose coat is this?', explain:'This correctly uses the possessive whose to ask about ownership.'},
        C:{text:'Who is coat this?', explain:'This rearranges the words in a way that does not form a proper question.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l17', skill:'Sentence combining', prompt:'What is the best way to combine these two sentences? "Maria studied hard. Maria passed the exam."', correct:'B',
      choices:{
        A:{text:'Maria studied hard, passed the exam.', explain:'This drops the second subject, creating an incomplete second clause.'},
        B:{text:'Maria studied hard and passed the exam.', explain:'This correctly joins the two related actions with and, avoiding repetition of the subject.'},
        C:{text:'Maria studied hard passed the exam.', explain:'This runs the two ideas together with no connecting word or punctuation.'},
        D:{text:'Maria studied hard; the exam was passed.', explain:'This awkwardly shifts to passive voice and loses the direct connection between the two actions.'}
      } },
    { id:'l18', skill:'Capitalization', prompt:'Which sentence is capitalized correctly?', correct:'A',
      choices:{
        A:{text:'My uncle Joe lives in Texas.', explain:'Uncle is lowercase here since it is used generally before the name, while Joe and Texas are properly capitalized as proper nouns.'},
        B:{text:'My Uncle joe lives in texas.', explain:'Uncle should not be capitalized in this context, and Texas needs to be capitalized as a proper noun.'},
        C:{text:'My uncle joe lives in Texas.', explain:'Joe is a proper noun and should be capitalized.'},
        D:{text:'my uncle Joe lives in Texas.', explain:'The sentence-starting word should be capitalized.'}
      } },
    { id:'l19', skill:'Plurals vs. possessives', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'The two puppy\'s played together.', explain:'This needs the plural puppies, not the possessive puppy\'s.'},
        B:{text:'The two puppies played together.', explain:'This correctly uses the plural form puppies.'},
        C:{text:'The two puppie\'s played together.', explain:'This misspells the plural form and adds an unnecessary apostrophe.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l20', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'My favorite subjects are math science and art.', explain:'The list items need commas separating them, which are missing here.'},
        B:{text:'My favorite subjects are math, science, and art.', explain:'This correctly separates each item in the list with commas.'},
        C:{text:'My favorite subjects are, math science and art.', explain:'The comma after are is misplaced and does not belong there.'},
        D:{text:'My favorite subjects are math, science and art', explain:'This sentence is missing its final period.'}
      } },
    { id:'l21', skill:'Subject-verb agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'The list of items were long.', explain:'"List" is the singular subject, so it needs "was," not "were."'},
        B:{text:'The players on the team are excited.', explain:'"Players" is plural, correctly matching "are."'},
        C:{text:'She sings beautifully.', explain:'This correctly uses a singular verb with the singular subject "she."'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l22', skill:'Subject-verb agreement', prompt:'Which sentence contains an error?', correct:'B',
      choices:{
        A:{text:'Neither of the answers is correct.', explain:'"Neither" is singular, correctly paired with "is."'},
        B:{text:'Both of the answers is correct.', explain:'"Both" is plural, so it needs "are," not "is."'},
        C:{text:'Each answer is correct.', explain:'"Each" is singular, correctly paired with "is."'},
        D:{text:'No mistake', explain:'Choice B contains an error, so this option is incorrect.'}
      } },
    { id:'l23', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'We need eggs milk and bread.', explain:'This is missing the commas needed to separate the list items.'},
        B:{text:'We need eggs, milk, and bread.', explain:'Commas correctly separate each item in the list.'},
        C:{text:'We need, eggs milk and bread.', explain:'The comma right after "need" is misplaced.'},
        D:{text:'We need eggs milk, and bread.', explain:'This is missing a comma between "eggs" and "milk."'}
      } },
    { id:'l24', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'He had one goal win the championship.', explain:'This is missing the colon needed to introduce the explanation.'},
        B:{text:'He had one goal: win the championship.', explain:'A colon correctly introduces the explanation of his goal.'},
        C:{text:'He had one goal, win the championship.', explain:'A colon, not a comma, should introduce this explanation.'},
        D:{text:'He had one goal; win the championship.', explain:'A semicolon needs a complete sentence on both sides, and "win the championship" alone isn\'t complete.'}
      } },
    { id:'l25', skill:'Pronoun case', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Between you and I, this is a secret.', explain:'As the object of "between," this should be "you and me," not "you and I."'},
        B:{text:'Between you and me, this is a secret.', explain:'This correctly uses the object pronoun "me."'},
        C:{text:'This is a secret between us.', explain:'This correctly uses the object pronoun "us."'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l26', skill:'Pronoun case', prompt:'Which sentence contains an error?', correct:'B',
      choices:{
        A:{text:'Give the trophy to whoever wins.', explain:'"Whoever" is correctly used as the subject of "wins."'},
        B:{text:'Give the trophy to whomever wins.', explain:'Since this pronoun is the subject of "wins," it should be "whoever," not the object form "whomever."'},
        C:{text:'Whoever wins gets the trophy.', explain:'This correctly uses "whoever" as the subject of the sentence.'},
        D:{text:'No mistake', explain:'Choice B contains an error, so this option is incorrect.'}
      } },
    { id:'l27', skill:'Sentence combining', prompt:'What is the best way to combine: "The concert was sold out. Fans lined up outside anyway."?', correct:'B',
      choices:{
        A:{text:'The concert was sold out, fans lined up outside anyway.', explain:'Joining two full sentences with only a comma creates a run-on sentence.'},
        B:{text:'Even though the concert was sold out, fans lined up outside anyway.', explain:'This correctly shows the contrast between the sold-out show and fans still lining up.'},
        C:{text:'The concert was sold out fans lined up outside anyway.', explain:'This runs the two sentences together with no connecting word or punctuation.'},
        D:{text:'The concert was sold out; outside, fans lined up anyway.', explain:'This awkwardly reorders the words in a way that doesn\'t read naturally.'}
      } },
    { id:'l28', skill:'Sentence combining', prompt:'What is the best way to combine: "The power went out. We lit candles."?', correct:'B',
      choices:{
        A:{text:'The power went out, we lit candles.', explain:'Joining two full sentences with only a comma creates a comma splice.'},
        B:{text:'When the power went out, we lit candles.', explain:'This correctly uses "when" to show the timing relationship between the two events.'},
        C:{text:'The power went out we lit candles.', explain:'This runs the two ideas together with no punctuation or connector.'},
        D:{text:'The power went out; candles, we lit.', explain:'This awkwardly reorders the words in a way that doesn\'t read naturally.'}
      } },
    { id:'l29', skill:'Capitalization', prompt:'Which sentence is capitalized correctly?', correct:'C',
      choices:{
        A:{text:'We celebrated Independence day in july.', explain:'"Day" should be capitalized as part of the holiday name, and July needs capitalizing too.'},
        B:{text:'We celebrated independence day in July.', explain:'"Independence Day" is a proper noun and should be fully capitalized.'},
        C:{text:'We celebrated Independence Day in July.', explain:'Independence Day and July are both correctly capitalized as proper nouns.'},
        D:{text:'we celebrated Independence Day in July.', explain:'The sentence-starting word should be capitalized.'}
      } },
    { id:'l30', skill:'Capitalization', prompt:'Which sentence is capitalized correctly?', correct:'B',
      choices:{
        A:{text:'My Grandmother lives in florida.', explain:'"Grandmother" shouldn\'t be capitalized here, and Florida needs to be capitalized as a proper noun.'},
        B:{text:'My grandmother lives in Florida.', explain:'Grandmother is correctly lowercase as a general relation word, and Florida is correctly capitalized as a proper noun.'},
        C:{text:'My grandmother lives in florida.', explain:'Florida is a proper noun and should be capitalized.'},
        D:{text:'my grandmother lives in Florida.', explain:'The sentence-starting word should be capitalized.'}
      } },
    { id:'l31', skill:'Pronoun agreement', prompt:'Which sentence contains an error?', correct:'B',
      choices:{
        A:{text:'Every dog needs its own bed.', explain:'"Every dog" is singular, correctly matched with "its."'},
        B:{text:'Every dog needs their own bed.', explain:'"Every dog" is grammatically singular, so traditional agreement calls for "its" rather than "their."'},
        C:{text:'Every dog needs a bed of its own.', explain:'This correctly uses the singular possessive "its."'},
        D:{text:'No mistake', explain:'Choice B contains an error under traditional agreement rules, so this option is incorrect.'}
      } },
    { id:'l32', skill:'Pronoun agreement', prompt:'Which sentence contains an error?', correct:'B',
      choices:{
        A:{text:'Neither of the girls brought her lunch.', explain:'"Neither" is singular, correctly matched with "her."'},
        B:{text:'Neither of the girls brought their lunch.', explain:'"Neither" is grammatically singular, so traditional agreement calls for "her" rather than "their."'},
        C:{text:'Neither girl brought her lunch.', explain:'This correctly uses the singular "her."'},
        D:{text:'No mistake', explain:'Choice B contains an error under traditional agreement rules, so this option is incorrect.'}
      } },
    { id:'l33', skill:'Contractions vs. possessives', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:"The company changed it's logo.", explain:'This should be the possessive "its" (no apostrophe), not the contraction "it\'s" (it is).'},
        B:{text:'The company changed its logo.', explain:'This correctly uses the possessive "its."'},
        C:{text:'The logo belongs to the company.', explain:'This sentence has no possessive or contraction error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l34', skill:'Contractions', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Your going to love this movie.', explain:'This should be the contraction "you\'re" (you are), not the possessive "your."'},
        B:{text:'You\'re going to love this movie.', explain:'This correctly uses the contraction "you\'re" (you are).'},
        C:{text:'This is your favorite movie.', explain:'This correctly uses the possessive "your."'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l35', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'The store closed early, we had to come back tomorrow.', explain:'Joining two complete sentences with only a comma creates a comma splice.'},
        B:{text:'The store closed early; we had to come back tomorrow.', explain:'A semicolon correctly joins these two related complete sentences.'},
        C:{text:'The store closed early we had to come back tomorrow.', explain:'This runs the two sentences together with no punctuation at all.'},
        D:{text:'The store closed early. and we had to come back tomorrow.', explain:'A period followed by a lowercase conjunction doesn\'t form a proper sentence structure.'}
      } },
    { id:'l36', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'She needed three things confidence, practice, and patience.', explain:'This is missing the colon needed to introduce the list.'},
        B:{text:'She needed three things: confidence, practice, and patience.', explain:'A colon correctly introduces the list, with commas separating each item.'},
        C:{text:'She needed three things, confidence, practice, and patience.', explain:'A colon, not a comma, should introduce a list like this.'},
        D:{text:'She needed three things; confidence, practice, and patience.', explain:'A semicolon needs a complete sentence on both sides, which this list doesn\'t provide.'}
      } },
    { id:'l37', skill:'Plurals vs. possessives', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:"The childrens' toys were scattered everywhere.", explain:'"Children" is already plural, so it just needs an apostrophe-s: "children\'s," not "childrens\'."'},
        B:{text:"The children's toys were scattered everywhere.", explain:'This correctly forms the possessive of the irregular plural "children."'},
        C:{text:'The toys belonged to the children.', explain:'This sentence has no possessive error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l38', skill:'Plurals vs. possessives', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'The dogs bowls were empty.', explain:'This needs an apostrophe to show the bowls belong to the dogs: "dogs\' bowls."'},
        B:{text:"The dogs' bowls were empty.", explain:'This correctly uses the plural possessive "dogs\'."'},
        C:{text:'The bowls belonged to the dogs.', explain:'This sentence has no possessive error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l39', skill:'Subject-verb agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Everybody in the class agree with the teacher.', explain:'"Everybody" is singular, so it needs "agrees," not "agree."'},
        B:{text:'Everybody in the class agrees with the teacher.', explain:'This correctly uses the singular verb "agrees" with the singular subject "everybody."'},
        C:{text:'Everyone agrees with the plan.', explain:'This correctly uses a singular verb with the singular subject "everyone."'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l40', skill:'Sentence combining', prompt:'What is the best way to combine: "The museum was closed for renovations. We visited the park instead."?', correct:'B',
      choices:{
        A:{text:'The museum was closed for renovations, we visited the park instead.', explain:'Joining two complete sentences with only a comma creates a comma splice.'},
        B:{text:'Since the museum was closed for renovations, we visited the park instead.', explain:'This correctly uses "since" to show the cause-and-effect relationship between the two events.'},
        C:{text:'The museum was closed for renovations we visited the park instead.', explain:'This runs the two ideas together with no punctuation or connector.'},
        D:{text:'The museum was closed for renovations; park, we visited instead.', explain:'This awkwardly reorders the words in a way that doesn\'t read naturally.'}
      } },
    { id:'l41', skill:'Subject-verb agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'The jury have reached a verdict.', explain:'"Jury" is treated as a singular unit here, so it needs "has," not "have."'},
        B:{text:'The judge read the verdict aloud.', explain:'This sentence has no agreement error.'},
        C:{text:'Every juror agreed on the outcome.', explain:'"Every juror" correctly takes the singular verb "agreed."'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l42', skill:'Subject-verb agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Physics are my favorite subject.', explain:'"Physics" is treated as a singular subject here, so it needs "is," not "are."'},
        B:{text:'Mathematics is challenging for many students.', explain:'This correctly treats "mathematics" as singular.'},
        C:{text:'The news was surprising.', explain:'"News" is correctly treated as singular here.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l43', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'I have one rule always be honest.', explain:'This is missing the colon needed to introduce the explanation.'},
        B:{text:'I have one rule: always be honest.', explain:'A colon correctly introduces the explanation of the rule.'},
        C:{text:'I have one rule, always be honest.', explain:'A colon, not a comma, should introduce this explanation.'},
        D:{text:'I have one rule; always be honest.', explain:'A semicolon needs a complete sentence on both sides, and "always be honest" alone isn\'t complete.'}
      } },
    { id:'l44', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'The store sells books magazines and newspapers.', explain:'This is missing the commas needed to separate the list items.'},
        B:{text:'The store sells books, magazines, and newspapers.', explain:'Commas correctly separate each item in the list.'},
        C:{text:'The store sells books, magazines and newspapers,', explain:'This sentence incorrectly ends with a comma instead of a period.'},
        D:{text:'The store sells, books magazines and newspapers.', explain:'The comma right after "sells" is misplaced.'}
      } },
    { id:'l45', skill:'Pronoun case', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Just between she and I, the plan won\'t work.', explain:'As the object of "between," this should be "her and me," not "she and I."'},
        B:{text:'Just between her and me, the plan won\'t work.', explain:'This correctly uses the object pronouns "her and me."'},
        C:{text:'The plan won\'t work, between us.', explain:'This correctly uses the object pronoun "us."'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l46', skill:'Pronoun case', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'The award goes to whomever deserves it.', explain:'Since this pronoun is the subject of "deserves," it should be "whoever," not the object form "whomever."'},
        B:{text:'The award goes to whoever deserves it.', explain:'This correctly uses "whoever" as the subject of "deserves."'},
        C:{text:'Whoever deserves it will win.', explain:'This correctly uses "whoever" as the subject of the sentence.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l47', skill:'Sentence combining', prompt:'What is the best way to combine: "The bridge was under construction. Traffic was rerouted."?', correct:'B',
      choices:{
        A:{text:'The bridge was under construction, traffic was rerouted.', explain:'Joining two complete sentences with only a comma creates a comma splice.'},
        B:{text:'Because the bridge was under construction, traffic was rerouted.', explain:'This correctly shows the cause-and-effect relationship between the two events.'},
        C:{text:'The bridge was under construction traffic was rerouted.', explain:'This runs the two sentences together with no connecting word or punctuation.'},
        D:{text:'The bridge was under construction; rerouted, traffic was.', explain:'This awkwardly reorders the words in a way that doesn\'t read naturally.'}
      } },
    { id:'l48', skill:'Sentence combining', prompt:'What is the best way to combine: "The lecture ran long. Students grew restless."?', correct:'B',
      choices:{
        A:{text:'The lecture ran long, students grew restless.', explain:'Joining two complete sentences with only a comma creates a comma splice.'},
        B:{text:'As the lecture ran long, students grew restless.', explain:'This correctly uses "as" to show the relationship between the two events over time.'},
        C:{text:'The lecture ran long students grew restless.', explain:'This runs the two ideas together with no punctuation or connector.'},
        D:{text:'The lecture ran long; restless, students grew.', explain:'This awkwardly reorders the words in a way that doesn\'t read naturally.'}
      } },
    { id:'l49', skill:'Capitalization', prompt:'Which sentence is capitalized correctly?', correct:'C',
      choices:{
        A:{text:'We drove north on interstate 95 toward Boston.', explain:'"Interstate 95" is a proper noun and should be fully capitalized.'},
        B:{text:'We drove North on Interstate 95 toward boston.', explain:'"North" shouldn\'t be capitalized here, and "Boston" needs to be capitalized as a proper noun.'},
        C:{text:'We drove north on Interstate 95 toward Boston.', explain:'"North" is correctly lowercase as a direction, while "Interstate 95" and "Boston" are correctly capitalized as proper nouns.'},
        D:{text:'we drove north on Interstate 95 toward Boston.', explain:'The sentence-starting word should be capitalized.'}
      } },
    { id:'l50', skill:'Capitalization', prompt:'Which sentence is capitalized correctly?', correct:'B',
      choices:{
        A:{text:'I study Spanish and Chemistry at Central High School.', explain:'"Chemistry" is a general subject and shouldn\'t be capitalized here.'},
        B:{text:'I study Spanish and chemistry at Central High School.', explain:'"Spanish" is capitalized since it\'s also a language/nationality, while "chemistry" correctly stays lowercase as a general subject.'},
        C:{text:'I study spanish and chemistry at central high school.', explain:'"Spanish" and "Central High School" are proper nouns and should be capitalized.'},
        D:{text:'i study Spanish and chemistry at Central High School.', explain:'The sentence-starting word should be capitalized.'}
      } },
    { id:'l51', skill:'Pronoun agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Anybody can join if they follow the rules.', explain:'"Anybody" is grammatically singular, so traditional agreement calls for "he or she" rather than "they."'},
        B:{text:'Anyone can join if he or she follows the rules.', explain:'This correctly uses a singular pronoun to match the singular "anyone."'},
        C:{text:'Each person must follow the rules.', explain:'This sentence has no agreement error.'},
        D:{text:'No mistake', explain:'Choice A contains an error under traditional agreement rules, so this option is incorrect.'}
      } },
    { id:'l52', skill:'Pronoun agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Somebody left their jacket in the classroom.', explain:'"Somebody" is grammatically singular, so traditional agreement calls for "his or her" rather than "their."'},
        B:{text:'Somebody left his or her jacket in the classroom.', explain:'This correctly uses a singular pronoun to match the singular "somebody."'},
        C:{text:'A student left a jacket behind.', explain:'This sentence has no agreement error.'},
        D:{text:'No mistake', explain:'Choice A contains an error under traditional agreement rules, so this option is incorrect.'}
      } },
    { id:'l53', skill:'Contractions vs. possessives', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:"The cat chased it's tail.", explain:'This should be the possessive "its" (no apostrophe), not the contraction "it\'s" (it is).'},
        B:{text:'The cat chased its tail.', explain:'This correctly uses the possessive "its."'},
        C:{text:'The tail belongs to the cat.', explain:'This sentence has no possessive or contraction error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l54', skill:'Contractions', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Theyre going to be late.', explain:'This is missing the apostrophe needed for the contraction "they\'re" (they are).'},
        B:{text:"They're going to be late.", explain:'This correctly uses the contraction "they\'re" (they are).'},
        C:{text:'Their car broke down.', explain:'This correctly uses the possessive "their."'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l55', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'The show ended late, everyone rushed to their cars.', explain:'Joining two complete sentences with only a comma creates a comma splice.'},
        B:{text:'The show ended late; everyone rushed to their cars.', explain:'A semicolon correctly joins these two related complete sentences.'},
        C:{text:'The show ended late everyone rushed to their cars.', explain:'This runs the two sentences together with no punctuation at all.'},
        D:{text:'The show ended late. and everyone rushed.', explain:'A period followed by a lowercase conjunction doesn\'t form a proper sentence structure.'}
      } },
    { id:'l56', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'We packed for three climates cold, mild, and hot.', explain:'This is missing the colon needed to introduce the list.'},
        B:{text:'We packed for three climates: cold, mild, and hot.', explain:'A colon correctly introduces the list, with commas separating each item.'},
        C:{text:'We packed for three climates, cold, mild, and hot.', explain:'A colon, not a comma, should introduce a list like this.'},
        D:{text:'We packed for three climates; cold, mild, and hot.', explain:'A semicolon needs a complete sentence on both sides, which this list doesn\'t provide.'}
      } },
    { id:'l57', skill:'Plurals vs. possessives', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:"The womens' coats were hung by the door.", explain:'"Women" is already plural, so it just needs an apostrophe-s: "women\'s," not "womens\'."'},
        B:{text:"The women's coats were hung by the door.", explain:'This correctly forms the possessive of the irregular plural "women."'},
        C:{text:'The coats belonged to the women.', explain:'This sentence has no possessive error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l58', skill:'Plurals vs. possessives', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'The cats toys were scattered around the room.', explain:'This needs an apostrophe to show the toys belong to the cat: "cat\'s toys."'},
        B:{text:"The cat's toys were scattered around the room.", explain:'This correctly uses the possessive "cat\'s."'},
        C:{text:'The toys belonged to the cat.', explain:'This sentence has no possessive error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l59', skill:'Subject-verb agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Mathematics are a required course.', explain:'"Mathematics" is treated as a singular subject here, so it needs "is," not "are."'},
        B:{text:'Mathematics is a required course.', explain:'This correctly treats "mathematics" as singular.'},
        C:{text:'Science is fascinating.', explain:'This sentence has no agreement error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l60', skill:'Sentence combining', prompt:'What is the best way to combine: "The band finished their set. The crowd demanded an encore."?', correct:'B',
      choices:{
        A:{text:'The band finished their set, the crowd demanded an encore.', explain:'Joining two complete sentences with only a comma creates a comma splice.'},
        B:{text:'After the band finished their set, the crowd demanded an encore.', explain:'This correctly uses "after" to show the sequence of the two events.'},
        C:{text:'The band finished their set the crowd demanded an encore.', explain:'This runs the two ideas together with no punctuation or connector.'},
        D:{text:'The band finished their set; encore, the crowd demanded.', explain:'This awkwardly reorders the words in a way that doesn\'t read naturally.'}
      } },
    { id:'l61', skill:'Subject-verb agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'The scissors is on the table.', explain:'"Scissors" is treated as plural, so it needs "are," not "is."'},
        B:{text:'The scissors are on the table.', explain:'This correctly treats "scissors" as plural.'},
        C:{text:'These scissors are sharp.', explain:'This sentence has no agreement error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l62', skill:'Subject-verb agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'The news are on at six.', explain:'"News" is treated as a singular subject here, so it needs "is," not "are."'},
        B:{text:'The news is on at six.', explain:'This correctly treats "news" as singular.'},
        C:{text:'Good news travels fast.', explain:'This correctly uses a singular verb with the singular subject "news."'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l63', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'Only one thing mattered winning.', explain:'This is missing the colon needed to introduce the explanation.'},
        B:{text:'Only one thing mattered: winning.', explain:'A colon correctly introduces the explanation of what mattered.'},
        C:{text:'Only one thing mattered, winning.', explain:'A colon, not a comma, should introduce this explanation.'},
        D:{text:'Only one thing mattered; winning.', explain:'A semicolon needs a complete sentence on both sides, and "winning" alone isn\'t complete.'}
      } },
    { id:'l64', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'We visited Paris London and Rome.', explain:'This is missing the commas needed to separate the list items.'},
        B:{text:'We visited Paris, London, and Rome.', explain:'Commas correctly separate each item in the list.'},
        C:{text:'We visited Paris, London and Rome,', explain:'This sentence incorrectly ends with a comma instead of a period.'},
        D:{text:'We visited, Paris London and Rome.', explain:'The comma right after "visited" is misplaced.'}
      } },
    { id:'l65', skill:'Pronoun case', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Us students need more time.', explain:'As the subject of the sentence, this should be "we students," not "us students."'},
        B:{text:'We students need more time.', explain:'This correctly uses the subject pronoun "we."'},
        C:{text:'The students need more time.', explain:'This sentence has no pronoun error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l66', skill:'Pronoun case', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Let\'s keep this between you and I.', explain:'As the object of "between," this should be "you and me," not "you and I."'},
        B:{text:'Let\'s keep this between you and me.', explain:'This correctly uses the object pronoun "me."'},
        C:{text:'This stays between us.', explain:'This correctly uses the object pronoun "us."'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l67', skill:'Sentence combining', prompt:'What is the best way to combine: "The fireworks began. The whole town gathered to watch."?', correct:'B',
      choices:{
        A:{text:'The fireworks began, the whole town gathered to watch.', explain:'Joining two complete sentences with only a comma creates a comma splice.'},
        B:{text:'When the fireworks began, the whole town gathered to watch.', explain:'This correctly uses "when" to show the timing relationship between the two events.'},
        C:{text:'The fireworks began the whole town gathered to watch.', explain:'This runs the two ideas together with no punctuation or connector.'},
        D:{text:'The fireworks began; watch, the whole town gathered to.', explain:'This awkwardly reorders the words in a way that doesn\'t read naturally.'}
      } },
    { id:'l68', skill:'Sentence combining', prompt:'What is the best way to combine: "The teacher explained the rule twice. Some students were still confused."?', correct:'B',
      choices:{
        A:{text:'The teacher explained the rule twice, some students were still confused.', explain:'Joining two complete sentences with only a comma creates a comma splice.'},
        B:{text:'Although the teacher explained the rule twice, some students were still confused.', explain:'This correctly uses "although" to show the contrast between the explanation and the confusion.'},
        C:{text:'The teacher explained the rule twice some students were still confused.', explain:'This runs the two ideas together with no punctuation or connector.'},
        D:{text:'The teacher explained the rule twice; confused, some students were still.', explain:'This awkwardly reorders the words in a way that doesn\'t read naturally.'}
      } },
    { id:'l69', skill:'Capitalization', prompt:'Which sentence is capitalized correctly?', correct:'C',
      choices:{
        A:{text:'She visited the Grand canyon last winter.', explain:'"Canyon" should be capitalized as part of the proper name "Grand Canyon."'},
        B:{text:'She visited the Grand Canyon last Winter.', explain:'"Winter" is a season and shouldn\'t be capitalized here.'},
        C:{text:'She visited the Grand Canyon last winter.', explain:'"Grand Canyon" is correctly capitalized as a proper noun, and "winter" is correctly lowercase as a season.'},
        D:{text:'she visited the Grand Canyon last winter.', explain:'The sentence-starting word should be capitalized.'}
      } },
    { id:'l70', skill:'Capitalization', prompt:'Which sentence is capitalized correctly?', correct:'C',
      choices:{
        A:{text:'He plays for the Chicago bulls.', explain:'"Bulls" should be capitalized as part of the team\'s proper name.'},
        B:{text:'He plays for the chicago Bulls.', explain:'"Chicago" is a proper noun and should be capitalized.'},
        C:{text:'He plays for the Chicago Bulls.', explain:'Both "Chicago" and "Bulls" are correctly capitalized as parts of the proper team name.'},
        D:{text:'he plays for the Chicago Bulls.', explain:'The sentence-starting word should be capitalized.'}
      } },
    { id:'l71', skill:'Pronoun agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'No one on the team forgot their jersey.', explain:'"No one" is grammatically singular, so traditional agreement calls for "his or her" rather than "their."'},
        B:{text:'No one on the team forgot his or her jersey.', explain:'This correctly uses a singular pronoun to match the singular "no one."'},
        C:{text:'Nobody forgot the schedule.', explain:'This sentence has no agreement error.'},
        D:{text:'No mistake', explain:'Choice A contains an error under traditional agreement rules, so this option is incorrect.'}
      } },
    { id:'l72', skill:'Pronoun agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Either of the boys can bring their own snack.', explain:'"Either" is grammatically singular, so traditional agreement calls for "his" rather than "their."'},
        B:{text:'Either of the boys can bring his own snack.', explain:'This correctly uses a singular pronoun to match the singular "either."'},
        C:{text:'Either boy can bring a snack.', explain:'This sentence has no agreement error.'},
        D:{text:'No mistake', explain:'Choice A contains an error under traditional agreement rules, so this option is incorrect.'}
      } },
    { id:'l73', skill:'Contractions vs. possessives', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:"The team celebrated it's win.", explain:'This should be the possessive "its" (no apostrophe), not the contraction "it\'s" (it is).'},
        B:{text:'The team celebrated its win.', explain:'This correctly uses the possessive "its."'},
        C:{text:'The win belonged to the whole team.', explain:'This sentence has no possessive or contraction error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l74', skill:'Contractions', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Whos bringing the drinks?', explain:'This is missing the apostrophe needed for the contraction "who\'s" (who is).'},
        B:{text:"Who's bringing the drinks?", explain:'This correctly uses the contraction "who\'s" (who is).'},
        C:{text:'Whose idea was this?', explain:'This correctly uses the possessive "whose."'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l75', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'The flight was delayed, passengers grew impatient.', explain:'Joining two complete sentences with only a comma creates a comma splice.'},
        B:{text:'The flight was delayed; passengers grew impatient.', explain:'A semicolon correctly joins these two related complete sentences.'},
        C:{text:'The flight was delayed passengers grew impatient.', explain:'This runs the two sentences together with no punctuation at all.'},
        D:{text:'The flight was delayed. and passengers grew impatient.', explain:'A period followed by a lowercase conjunction doesn\'t form a proper sentence structure.'}
      } },
    { id:'l76', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'Bring these items sunscreen, a towel, and sandals.', explain:'This is missing the colon needed to introduce the list.'},
        B:{text:'Bring these items: sunscreen, a towel, and sandals.', explain:'A colon correctly introduces the list, with commas separating each item.'},
        C:{text:'Bring these items, sunscreen, a towel, and sandals.', explain:'A colon, not a comma, should introduce a list like this.'},
        D:{text:'Bring these items; sunscreen, a towel, and sandals.', explain:'A semicolon needs a complete sentence on both sides, which this list doesn\'t provide.'}
      } },
    { id:'l77', skill:'Plurals vs. possessives', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:"The mens' locker room was being renovated.", explain:'"Men" is already plural, so it just needs an apostrophe-s: "men\'s," not "mens\'."'},
        B:{text:"The men's locker room was being renovated.", explain:'This correctly forms the possessive of the irregular plural "men."'},
        C:{text:'The locker room belonged to the men.', explain:'This sentence has no possessive error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l78', skill:'Plurals vs. possessives', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'The birds nest fell from the tree.', explain:'This needs an apostrophe to show the nest belongs to the bird: "bird\'s nest."'},
        B:{text:"The bird's nest fell from the tree.", explain:'This correctly uses the possessive "bird\'s."'},
        C:{text:'The nest belonged to the bird.', explain:'This sentence has no possessive error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l79', skill:'Subject-verb agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'The scissors was too dull to cut the paper.', explain:'"Scissors" is treated as plural, so it needs "were," not "was."'},
        B:{text:'The scissors were too dull to cut the paper.', explain:'This correctly treats "scissors" as plural.'},
        C:{text:'These are sharp scissors.', explain:'This sentence has no agreement error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l80', skill:'Sentence combining', prompt:'What is the best way to combine: "The internet went down. The whole office stopped working."?', correct:'B',
      choices:{
        A:{text:'The internet went down, the whole office stopped working.', explain:'Joining two complete sentences with only a comma creates a comma splice.'},
        B:{text:'When the internet went down, the whole office stopped working.', explain:'This correctly uses "when" to show the timing relationship between the two events.'},
        C:{text:'The internet went down the whole office stopped working.', explain:'This runs the two ideas together with no punctuation or connector.'},
        D:{text:'The internet went down; stopped, the office working.', explain:'This awkwardly reorders the words in a way that doesn\'t read naturally.'}
      } },
    { id:'l81', skill:'Subject-verb agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'The pair of shoes were expensive.', explain:'"Pair" is treated as a singular subject here, so it needs "was," not "were."'},
        B:{text:'The pair of shoes was expensive.', explain:'This correctly treats "pair" as singular.'},
        C:{text:'These shoes are comfortable.', explain:'This sentence has no agreement error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l82', skill:'Subject-verb agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Economics are a difficult subject.', explain:'"Economics" is treated as a singular subject here, so it needs "is," not "are."'},
        B:{text:'Economics is a difficult subject.', explain:'This correctly treats "economics" as singular.'},
        C:{text:'Biology is fascinating.', explain:'This sentence has no agreement error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l83', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'She had one rule never quit.', explain:'This is missing the colon needed to introduce the explanation.'},
        B:{text:'She had one rule: never quit.', explain:'A colon correctly introduces the explanation of the rule.'},
        C:{text:'She had one rule, never quit.', explain:'A colon, not a comma, should introduce this explanation.'},
        D:{text:'She had one rule; never quit.', explain:'A semicolon needs a complete sentence on both sides, and "never quit" alone isn\'t complete.'}
      } },
    { id:'l84', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'He ordered soup salad and bread.', explain:'This is missing the commas needed to separate the list items.'},
        B:{text:'He ordered soup, salad, and bread.', explain:'Commas correctly separate each item in the list.'},
        C:{text:'He ordered soup, salad and bread,', explain:'This sentence incorrectly ends with a comma instead of a period.'},
        D:{text:'He ordered, soup salad and bread.', explain:'The comma right after "ordered" is misplaced.'}
      } },
    { id:'l85', skill:'Pronoun case', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'This decision affects you and I equally.', explain:'As the object of "affects," this should be "you and me," not "you and I."'},
        B:{text:'This decision affects you and me equally.', explain:'This correctly uses the object pronoun "me."'},
        C:{text:'This decision affects us equally.', explain:'This correctly uses the object pronoun "us."'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l86', skill:'Pronoun case', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'She gave the prize to whomever answered first.', explain:'Since this pronoun is the subject of "answered," it should be "whoever," not the object form "whomever."'},
        B:{text:'She gave the prize to whoever answered first.', explain:'This correctly uses "whoever" as the subject of "answered."'},
        C:{text:'Whoever answers first wins the prize.', explain:'This correctly uses "whoever" as the subject of the sentence.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l87', skill:'Sentence combining', prompt:'What is the best way to combine: "The power grid failed. Thousands of homes lost electricity."?', correct:'B',
      choices:{
        A:{text:'The power grid failed, thousands of homes lost electricity.', explain:'Joining two complete sentences with only a comma creates a comma splice.'},
        B:{text:'When the power grid failed, thousands of homes lost electricity.', explain:'This correctly uses "when" to show the timing relationship between the two events.'},
        C:{text:'The power grid failed thousands of homes lost electricity.', explain:'This runs the two ideas together with no punctuation or connector.'},
        D:{text:'The power grid failed; electricity, thousands of homes lost.', explain:'This awkwardly reorders the words in a way that doesn\'t read naturally.'}
      } },
    { id:'l88', skill:'Sentence combining', prompt:'What is the best way to combine: "The coach called a timeout. The team regrouped."?', correct:'B',
      choices:{
        A:{text:'The coach called a timeout, the team regrouped.', explain:'Joining two complete sentences with only a comma creates a comma splice.'},
        B:{text:'After the coach called a timeout, the team regrouped.', explain:'This correctly uses "after" to show the sequence of the two events.'},
        C:{text:'The coach called a timeout the team regrouped.', explain:'This runs the two ideas together with no punctuation or connector.'},
        D:{text:'The coach called a timeout; regrouped, the team.', explain:'This awkwardly reorders the words in a way that doesn\'t read naturally.'}
      } },
    { id:'l89', skill:'Capitalization', prompt:'Which sentence is capitalized correctly?', correct:'C',
      choices:{
        A:{text:'We drove past mount rushmore on our way to Wyoming.', explain:'"Mount Rushmore" is a proper noun and should be fully capitalized.'},
        B:{text:'We drove past Mount Rushmore on our way to wyoming.', explain:'"Wyoming" is a proper noun and should be capitalized.'},
        C:{text:'We drove past Mount Rushmore on our way to Wyoming.', explain:'Both "Mount Rushmore" and "Wyoming" are correctly capitalized as proper nouns.'},
        D:{text:'we drove past Mount Rushmore on our way to Wyoming.', explain:'The sentence-starting word should be capitalized.'}
      } },
    { id:'l90', skill:'Capitalization', prompt:'Which sentence is capitalized correctly?', correct:'C',
      choices:{
        A:{text:'She works at the smithsonian institution in Washington.', explain:'"Smithsonian Institution" is a proper noun and should be fully capitalized.'},
        B:{text:'She works at the Smithsonian Institution in washington.', explain:'"Washington" is a proper noun and should be capitalized.'},
        C:{text:'She works at the Smithsonian Institution in Washington.', explain:'Both "Smithsonian Institution" and "Washington" are correctly capitalized as proper nouns.'},
        D:{text:'she works at the Smithsonian Institution in Washington.', explain:'The sentence-starting word should be capitalized.'}
      } },
    { id:'l91', skill:'Pronoun agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Every employee must wear their badge.', explain:'"Every employee" is grammatically singular, so traditional agreement calls for "his or her" rather than "their."'},
        B:{text:'Every employee must wear his or her badge.', explain:'This correctly uses a singular pronoun to match the singular "every employee."'},
        C:{text:'All employees must wear badges.', explain:'This sentence has no agreement error.'},
        D:{text:'No mistake', explain:'Choice A contains an error under traditional agreement rules, so this option is incorrect.'}
      } },
    { id:'l92', skill:'Pronoun agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'One of the dogs lost their collar.', explain:'"One" is grammatically singular, so traditional agreement calls for "its" rather than "their."'},
        B:{text:'One of the dogs lost its collar.', explain:'This correctly uses the singular possessive "its" to match "one."'},
        C:{text:'The dogs lost their collars.', explain:'This correctly uses the plural "their" to match the plural "dogs."'},
        D:{text:'No mistake', explain:'Choice A contains an error under traditional agreement rules, so this option is incorrect.'}
      } },
    { id:'l93', skill:'Contractions vs. possessives', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:"The company moved it's headquarters.", explain:'This should be the possessive "its" (no apostrophe), not the contraction "it\'s" (it is).'},
        B:{text:'The company moved its headquarters.', explain:'This correctly uses the possessive "its."'},
        C:{text:'The headquarters belongs to the company.', explain:'This sentence has no possessive or contraction error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l94', skill:'Contractions', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Wheres the nearest exit?', explain:'This is missing the apostrophe needed for the contraction "where\'s" (where is).'},
        B:{text:"Where's the nearest exit?", explain:'This correctly uses the contraction "where\'s" (where is).'},
        C:{text:'I wonder where the exit is.', explain:'This sentence has no contraction error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l95', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'The road was icy, drivers slowed down.', explain:'Joining two complete sentences with only a comma creates a comma splice.'},
        B:{text:'The road was icy; drivers slowed down.', explain:'A semicolon correctly joins these two related complete sentences.'},
        C:{text:'The road was icy drivers slowed down.', explain:'This runs the two sentences together with no punctuation at all.'},
        D:{text:'The road was icy. and drivers slowed down.', explain:'A period followed by a lowercase conjunction doesn\'t form a proper sentence structure.'}
      } },
    { id:'l96', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'Pack these essentials passport, tickets, and cash.', explain:'This is missing the colon needed to introduce the list.'},
        B:{text:'Pack these essentials: passport, tickets, and cash.', explain:'A colon correctly introduces the list, with commas separating each item.'},
        C:{text:'Pack these essentials, passport, tickets, and cash.', explain:'A colon, not a comma, should introduce a list like this.'},
        D:{text:'Pack these essentials; passport, tickets, and cash.', explain:'A semicolon needs a complete sentence on both sides, which this list doesn\'t provide.'}
      } },
    { id:'l97', skill:'Plurals vs. possessives', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'The childrens toys were donated.', explain:'This is missing the apostrophe entirely; it should be "children\'s toys."'},
        B:{text:"The children's toys were donated.", explain:'This correctly forms the possessive of the irregular plural "children."'},
        C:{text:'The toys belonged to the children.', explain:'This sentence has no possessive error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l98', skill:'Plurals vs. possessives', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:"The bosses office was locked.", explain:'This is missing an apostrophe; it should be "boss\'s office" to show possession.'},
        B:{text:"The boss's office was locked.", explain:'This correctly uses the possessive "boss\'s."'},
        C:{text:'The office belonged to the boss.', explain:'This sentence has no possessive error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l99', skill:'Subject-verb agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Economics have always interested me.', explain:'"Economics" is treated as a singular subject here, so it needs "has," not "have."'},
        B:{text:'Economics has always interested me.', explain:'This correctly treats "economics" as singular.'},
        C:{text:'History interests me too.', explain:'This sentence has no agreement error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l100', skill:'Sentence combining', prompt:'What is the best way to combine: "The alarm went off. Everyone evacuated the building."?', correct:'B',
      choices:{
        A:{text:'The alarm went off, everyone evacuated the building.', explain:'Joining two complete sentences with only a comma creates a comma splice.'},
        B:{text:'When the alarm went off, everyone evacuated the building.', explain:'This correctly uses "when" to show the timing relationship between the two events.'},
        C:{text:'The alarm went off everyone evacuated the building.', explain:'This runs the two ideas together with no punctuation or connector.'},
        D:{text:'The alarm went off; evacuated, everyone the building.', explain:'This awkwardly reorders the words in a way that doesn\'t read naturally.'}
      } },
    { id:'l101', skill:'Subject-verb agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'The crew were finishing the project.', explain:'"Crew" is treated as a singular unit here, so it needs "was," not "were."'},
        B:{text:'The crew was finishing the project.', explain:'This correctly treats "crew" as a singular unit.'},
        C:{text:'The workers are finishing the project.', explain:'This sentence has no agreement error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l102', skill:'Subject-verb agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Gymnastics are her favorite sport.', explain:'"Gymnastics" is treated as a singular subject here, so it needs "is," not "are."'},
        B:{text:'Gymnastics is her favorite sport.', explain:'This correctly treats "gymnastics" as singular.'},
        C:{text:'Athletics interest her too.', explain:'This sentence has no agreement error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l103', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'He had one fear heights.', explain:'This is missing the colon needed to introduce the explanation.'},
        B:{text:'He had one fear: heights.', explain:'A colon correctly introduces the explanation of his fear.'},
        C:{text:'He had one fear, heights.', explain:'A colon, not a comma, should introduce this explanation.'},
        D:{text:'He had one fear; heights.', explain:'A semicolon needs a complete sentence on both sides, and "heights" alone isn\'t complete.'}
      } },
    { id:'l104', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'She bought apples pears and grapes.', explain:'This is missing the commas needed to separate the list items.'},
        B:{text:'She bought apples, pears, and grapes.', explain:'Commas correctly separate each item in the list.'},
        C:{text:'She bought apples, pears and grapes,', explain:'This sentence incorrectly ends with a comma instead of a period.'},
        D:{text:'She bought, apples pears and grapes.', explain:'The comma right after "bought" is misplaced.'}
      } },
    { id:'l105', skill:'Pronoun case', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'This gift is for you and I.', explain:'As the object of "for," this should be "you and me," not "you and I."'},
        B:{text:'This gift is for you and me.', explain:'This correctly uses the object pronoun "me."'},
        C:{text:'This gift is for us.', explain:'This correctly uses the object pronoun "us."'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l106', skill:'Pronoun case', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Invite whomever wants to come.', explain:'Since this pronoun is the subject of "wants," it should be "whoever," not the object form "whomever."'},
        B:{text:'Invite whoever wants to come.', explain:'This correctly uses "whoever" as the subject of "wants."'},
        C:{text:'Whoever comes is welcome.', explain:'This correctly uses "whoever" as the subject of the sentence.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l107', skill:'Sentence combining', prompt:'What is the best way to combine: "The library closed early. Students had to leave."?', correct:'B',
      choices:{
        A:{text:'The library closed early, students had to leave.', explain:'Joining two complete sentences with only a comma creates a comma splice.'},
        B:{text:'Because the library closed early, students had to leave.', explain:'This correctly shows the cause-and-effect relationship between the two events.'},
        C:{text:'The library closed early students had to leave.', explain:'This runs the two ideas together with no punctuation or connector.'},
        D:{text:'The library closed early; leave, students had to.', explain:'This awkwardly reorders the words in a way that doesn\'t read naturally.'}
      } },
    { id:'l108', skill:'Sentence combining', prompt:'What is the best way to combine: "The rain finally stopped. The game resumed."?', correct:'B',
      choices:{
        A:{text:'The rain finally stopped, the game resumed.', explain:'Joining two complete sentences with only a comma creates a comma splice.'},
        B:{text:'Once the rain finally stopped, the game resumed.', explain:'This correctly uses "once" to show the timing relationship between the two events.'},
        C:{text:'The rain finally stopped the game resumed.', explain:'This runs the two ideas together with no punctuation or connector.'},
        D:{text:'The rain finally stopped; resumed, the game.', explain:'This awkwardly reorders the words in a way that doesn\'t read naturally.'}
      } },
    { id:'l109', skill:'Capitalization', prompt:'Which sentence is capitalized correctly?', correct:'C',
      choices:{
        A:{text:'We toured the Statue of liberty in New York.', explain:'"Liberty" should be capitalized as part of the proper name "Statue of Liberty."'},
        B:{text:'We toured the Statue of Liberty in new york.', explain:'"New York" is a proper noun and should be capitalized.'},
        C:{text:'We toured the Statue of Liberty in New York.', explain:'Both "Statue of Liberty" and "New York" are correctly capitalized as proper nouns.'},
        D:{text:'we toured the Statue of Liberty in New York.', explain:'The sentence-starting word should be capitalized.'}
      } },
    { id:'l110', skill:'Capitalization', prompt:'Which sentence is capitalized correctly?', correct:'C',
      choices:{
        A:{text:'He attends Harvard university in massachusetts.', explain:'"University" should be capitalized as part of the proper name "Harvard University," and Massachusetts needs capitalizing too.'},
        B:{text:'He attends Harvard University in massachusetts.', explain:'"Massachusetts" is a proper noun and should be capitalized.'},
        C:{text:'He attends Harvard University in Massachusetts.', explain:'Both "Harvard University" and "Massachusetts" are correctly capitalized as proper nouns.'},
        D:{text:'he attends Harvard University in Massachusetts.', explain:'The sentence-starting word should be capitalized.'}
      } },
    { id:'l111', skill:'Pronoun agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Each of the players brought their own gear.', explain:'"Each" is grammatically singular, so traditional agreement calls for "his" rather than "their."'},
        B:{text:'Each of the players brought his own gear.', explain:'This correctly uses a singular pronoun to match the singular "each."'},
        C:{text:'All the players brought gear.', explain:'This sentence has no agreement error.'},
        D:{text:'No mistake', explain:'Choice A contains an error under traditional agreement rules, so this option is incorrect.'}
      } },
    { id:'l112', skill:'Pronoun agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Neither of the twins finished their homework.', explain:'"Neither" is grammatically singular, so traditional agreement calls for "his" rather than "their."'},
        B:{text:'Neither of the twins finished his homework.', explain:'This correctly uses a singular pronoun to match the singular "neither."'},
        C:{text:'Both twins finished their homework.', explain:'This correctly uses the plural "their" to match the plural "both."'},
        D:{text:'No mistake', explain:'Choice A contains an error under traditional agreement rules, so this option is incorrect.'}
      } },
    { id:'l113', skill:'Contractions vs. possessives', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:"The library moved it's collection.", explain:'This should be the possessive "its" (no apostrophe), not the contraction "it\'s" (it is).'},
        B:{text:'The library moved its collection.', explain:'This correctly uses the possessive "its."'},
        C:{text:'The collection belongs to the library.', explain:'This sentence has no possessive or contraction error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l114', skill:'Contractions', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Theres no time to waste.', explain:'This is missing the apostrophe needed for the contraction "there\'s" (there is).'},
        B:{text:"There's no time to waste.", explain:'This correctly uses the contraction "there\'s" (there is).'},
        C:{text:'Their time is limited.', explain:'This correctly uses the possessive "their."'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l115', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'The meeting ran late, everyone missed lunch.', explain:'Joining two complete sentences with only a comma creates a comma splice.'},
        B:{text:'The meeting ran late; everyone missed lunch.', explain:'A semicolon correctly joins these two related complete sentences.'},
        C:{text:'The meeting ran late everyone missed lunch.', explain:'This runs the two sentences together with no punctuation at all.'},
        D:{text:'The meeting ran late. and everyone missed lunch.', explain:'A period followed by a lowercase conjunction doesn\'t form a proper sentence structure.'}
      } },
    { id:'l116', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'Bring these supplies paper, pencils, and glue.', explain:'This is missing the colon needed to introduce the list.'},
        B:{text:'Bring these supplies: paper, pencils, and glue.', explain:'A colon correctly introduces the list, with commas separating each item.'},
        C:{text:'Bring these supplies, paper, pencils, and glue.', explain:'A colon, not a comma, should introduce a list like this.'},
        D:{text:'Bring these supplies; paper, pencils, and glue.', explain:'A semicolon needs a complete sentence on both sides, which this list doesn\'t provide.'}
      } },
    { id:'l117', skill:'Plurals vs. possessives', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'The ladies room was being cleaned.', explain:'This needs an apostrophe to show possession: "ladies\' room."'},
        B:{text:"The ladies' room was being cleaned.", explain:'This correctly uses the plural possessive "ladies\'."'},
        C:{text:'The room belonged to the ladies.', explain:'This sentence has no possessive error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l118', skill:'Plurals vs. possessives', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'The teachers lounge needed repairs.', explain:'This needs an apostrophe to show possession: "teachers\' lounge."'},
        B:{text:"The teachers' lounge needed repairs.", explain:'This correctly uses the plural possessive "teachers\'."'},
        C:{text:'The lounge belonged to the teachers.', explain:'This sentence has no possessive error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l119', skill:'Subject-verb agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Gymnastics require great flexibility.', explain:'"Gymnastics" is treated as a singular subject here, so it needs "requires," not "require."'},
        B:{text:'Gymnastics requires great flexibility.', explain:'This correctly treats "gymnastics" as singular.'},
        C:{text:'Dance requires flexibility too.', explain:'This sentence has no agreement error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l120', skill:'Sentence combining', prompt:'What is the best way to combine: "The bakery ran out of bread. Customers were disappointed."?', correct:'B',
      choices:{
        A:{text:'The bakery ran out of bread, customers were disappointed.', explain:'Joining two complete sentences with only a comma creates a comma splice.'},
        B:{text:'When the bakery ran out of bread, customers were disappointed.', explain:'This correctly uses "when" to show the timing relationship between the two events.'},
        C:{text:'The bakery ran out of bread customers were disappointed.', explain:'This runs the two ideas together with no punctuation or connector.'},
        D:{text:'The bakery ran out of bread; disappointed, customers were.', explain:'This awkwardly reorders the words in a way that doesn\'t read naturally.'}
      } },
    { id:'l121', skill:'Subject-verb agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'The audience were cheering loudly.', explain:'"Audience" is treated as a singular unit here, so it needs "was," not "were."'},
        B:{text:'The audience was cheering loudly.', explain:'This correctly treats "audience" as a singular unit.'},
        C:{text:'The fans are cheering too.', explain:'This sentence has no agreement error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l122', skill:'Subject-verb agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Civics are an important subject.', explain:'"Civics" is treated as a singular subject here, so it needs "is," not "are."'},
        B:{text:'Civics is an important subject.', explain:'This correctly treats "civics" as singular.'},
        C:{text:'Geography is important too.', explain:'This sentence has no agreement error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l123', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'She had one wish to travel the world.', explain:'This is missing the colon needed to introduce the explanation.'},
        B:{text:'She had one wish: to travel the world.', explain:'A colon correctly introduces the explanation of her wish.'},
        C:{text:'She had one wish, to travel the world.', explain:'A colon, not a comma, should introduce this explanation.'},
        D:{text:'She had one wish; to travel the world.', explain:'A semicolon needs a complete sentence on both sides, and "to travel the world" alone isn\'t complete.'}
      } },
    { id:'l124', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'He collects coins stamps and cards.', explain:'This is missing the commas needed to separate the list items.'},
        B:{text:'He collects coins, stamps, and cards.', explain:'Commas correctly separate each item in the list.'},
        C:{text:'He collects coins, stamps and cards,', explain:'This sentence incorrectly ends with a comma instead of a period.'},
        D:{text:'He collects, coins stamps and cards.', explain:'The comma right after "collects" is misplaced.'}
      } },
    { id:'l125', skill:'Pronoun case', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'The teacher asked you and I to stay after class.', explain:'As the object of "asked," this should be "you and me," not "you and I."'},
        B:{text:'The teacher asked you and me to stay after class.', explain:'This correctly uses the object pronoun "me."'},
        C:{text:'The teacher asked us to stay after class.', explain:'This correctly uses the object pronoun "us."'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l126', skill:'Pronoun case', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Reward whomever finishes first.', explain:'Since this pronoun is the subject of "finishes," it should be "whoever," not the object form "whomever."'},
        B:{text:'Reward whoever finishes first.', explain:'This correctly uses "whoever" as the subject of "finishes."'},
        C:{text:'Whoever finishes first gets a reward.', explain:'This correctly uses "whoever" as the subject of the sentence.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l127', skill:'Sentence combining', prompt:'What is the best way to combine: "The dog barked all night. The neighbors couldn\'t sleep."?', correct:'B',
      choices:{
        A:{text:'The dog barked all night, the neighbors couldn\'t sleep.', explain:'Joining two complete sentences with only a comma creates a comma splice.'},
        B:{text:'Because the dog barked all night, the neighbors couldn\'t sleep.', explain:'This correctly shows the cause-and-effect relationship between the two events.'},
        C:{text:'The dog barked all night the neighbors couldn\'t sleep.', explain:'This runs the two ideas together with no punctuation or connector.'},
        D:{text:'The dog barked all night; sleep, the neighbors couldn\'t.', explain:'This awkwardly reorders the words in a way that doesn\'t read naturally.'}
      } },
    { id:'l128', skill:'Sentence combining', prompt:'What is the best way to combine: "The trail was steep. Hikers stopped frequently to rest."?', correct:'B',
      choices:{
        A:{text:'The trail was steep, hikers stopped frequently to rest.', explain:'Joining two complete sentences with only a comma creates a comma splice.'},
        B:{text:'Since the trail was steep, hikers stopped frequently to rest.', explain:'This correctly uses "since" to show the cause-and-effect relationship between the two events.'},
        C:{text:'The trail was steep hikers stopped frequently to rest.', explain:'This runs the two ideas together with no punctuation or connector.'},
        D:{text:'The trail was steep; rest, hikers stopped to.', explain:'This awkwardly reorders the words in a way that doesn\'t read naturally.'}
      } },
    { id:'l129', skill:'Capitalization', prompt:'Which sentence is capitalized correctly?', correct:'C',
      choices:{
        A:{text:'We visited the Golden gate bridge in California.', explain:'"Gate Bridge" should be capitalized as part of the proper name "Golden Gate Bridge."'},
        B:{text:'We visited the Golden Gate Bridge in california.', explain:'"California" is a proper noun and should be capitalized.'},
        C:{text:'We visited the Golden Gate Bridge in California.', explain:'Both "Golden Gate Bridge" and "California" are correctly capitalized as proper nouns.'},
        D:{text:'we visited the Golden Gate Bridge in California.', explain:'The sentence-starting word should be capitalized.'}
      } },
    { id:'l130', skill:'Capitalization', prompt:'Which sentence is capitalized correctly?', correct:'C',
      choices:{
        A:{text:'He studies at Yale university in connecticut.', explain:'"University" should be capitalized as part of the proper name "Yale University," and Connecticut needs capitalizing too.'},
        B:{text:'He studies at Yale University in connecticut.', explain:'"Connecticut" is a proper noun and should be capitalized.'},
        C:{text:'He studies at Yale University in Connecticut.', explain:'Both "Yale University" and "Connecticut" are correctly capitalized as proper nouns.'},
        D:{text:'he studies at Yale University in Connecticut.', explain:'The sentence-starting word should be capitalized.'}
      } },
    { id:'l131', skill:'Pronoun agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Everybody should bring their own water bottle.', explain:'"Everybody" is grammatically singular, so traditional agreement calls for "his or her" rather than "their."'},
        B:{text:'Everybody should bring his or her own water bottle.', explain:'This correctly uses a singular pronoun to match the singular "everybody."'},
        C:{text:'All students should bring water bottles.', explain:'This sentence has no agreement error.'},
        D:{text:'No mistake', explain:'Choice A contains an error under traditional agreement rules, so this option is incorrect.'}
      } },
    { id:'l132', skill:'Pronoun agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Each of the puppies chewed on their toy.', explain:'"Each" is grammatically singular, so traditional agreement calls for "its" rather than "their."'},
        B:{text:'Each of the puppies chewed on its toy.', explain:'This correctly uses a singular pronoun to match the singular "each."'},
        C:{text:'All the puppies chewed on their toys.', explain:'This correctly uses the plural "their" to match the plural "all."'},
        D:{text:'No mistake', explain:'Choice A contains an error under traditional agreement rules, so this option is incorrect.'}
      } },
    { id:'l133', skill:'Contractions vs. possessives', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:"The museum changed it's exhibit.", explain:'This should be the possessive "its" (no apostrophe), not the contraction "it\'s" (it is).'},
        B:{text:'The museum changed its exhibit.', explain:'This correctly uses the possessive "its."'},
        C:{text:'The exhibit belongs to the museum.', explain:'This sentence has no possessive or contraction error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l134', skill:'Contractions', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Youre going to love this book.', explain:'This is missing the apostrophe needed for the contraction "you\'re" (you are).'},
        B:{text:"You're going to love this book.", explain:'This correctly uses the contraction "you\'re" (you are).'},
        C:{text:'Your book is on the table.', explain:'This correctly uses the possessive "your."'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l135', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'The concert sold out, fans were upset.', explain:'Joining two complete sentences with only a comma creates a comma splice.'},
        B:{text:'The concert sold out; fans were upset.', explain:'A semicolon correctly joins these two related complete sentences.'},
        C:{text:'The concert sold out fans were upset.', explain:'This runs the two sentences together with no punctuation at all.'},
        D:{text:'The concert sold out. and fans were upset.', explain:'A period followed by a lowercase conjunction doesn\'t form a proper sentence structure.'}
      } },
    { id:'l136', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'She needed three tools a hammer, nails, and wood.', explain:'This is missing the colon needed to introduce the list.'},
        B:{text:'She needed three tools: a hammer, nails, and wood.', explain:'A colon correctly introduces the list, with commas separating each item.'},
        C:{text:'She needed three tools, a hammer, nails, and wood.', explain:'A colon, not a comma, should introduce a list like this.'},
        D:{text:'She needed three tools; a hammer, nails, and wood.', explain:'A semicolon needs a complete sentence on both sides, which this list doesn\'t provide.'}
      } },
    { id:'l137', skill:'Plurals vs. possessives', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'The mices tails were long.', explain:'"Mice" is already the plural of mouse; the correct possessive form is "mice\'s," not "mices."'},
        B:{text:"The mice's tails were long.", explain:'This correctly forms the possessive of the irregular plural "mice."'},
        C:{text:'The tails belonged to the mice.', explain:'This sentence has no possessive error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l138', skill:'Plurals vs. possessives', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'The childs toy was broken.', explain:'This needs an apostrophe to show possession: "child\'s toy."'},
        B:{text:"The child's toy was broken.", explain:'This correctly uses the possessive "child\'s."'},
        C:{text:'The toy belonged to the child.', explain:'This sentence has no possessive error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l139', skill:'Subject-verb agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Civics require careful study.', explain:'"Civics" is treated as a singular subject here, so it needs "requires," not "require."'},
        B:{text:'Civics requires careful study.', explain:'This correctly treats "civics" as singular.'},
        C:{text:'History requires careful study too.', explain:'This sentence has no agreement error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l140', skill:'Sentence combining', prompt:'What is the best way to combine: "The elevator broke down. Everyone took the stairs."?', correct:'B',
      choices:{
        A:{text:'The elevator broke down, everyone took the stairs.', explain:'Joining two complete sentences with only a comma creates a comma splice.'},
        B:{text:'When the elevator broke down, everyone took the stairs.', explain:'This correctly uses "when" to show the timing relationship between the two events.'},
        C:{text:'The elevator broke down everyone took the stairs.', explain:'This runs the two ideas together with no punctuation or connector.'},
        D:{text:'The elevator broke down; stairs, everyone took the.', explain:'This awkwardly reorders the words in a way that doesn\'t read naturally.'}
      } },
    { id:'l141', skill:'Subject-verb agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'The flock of geese were flying south.', explain:'"Flock" is treated as a singular unit here, so it needs "was," not "were."'},
        B:{text:'The flock of geese was flying south.', explain:'This correctly treats "flock" as a singular unit.'},
        C:{text:'The geese are flying south too.', explain:'This sentence has no agreement error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l142', skill:'Subject-verb agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Aerobics are good exercise.', explain:'"Aerobics" is treated as a singular subject here, so it needs "is," not "are."'},
        B:{text:'Aerobics is good exercise.', explain:'This correctly treats "aerobics" as singular.'},
        C:{text:'Swimming is good exercise too.', explain:'This sentence has no agreement error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l143', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'He had one goal to graduate.', explain:'This is missing the colon needed to introduce the explanation.'},
        B:{text:'He had one goal: to graduate.', explain:'A colon correctly introduces the explanation of his goal.'},
        C:{text:'He had one goal, to graduate.', explain:'A colon, not a comma, should introduce this explanation.'},
        D:{text:'He had one goal; to graduate.', explain:'A semicolon needs a complete sentence on both sides, and "to graduate" alone isn\'t complete.'}
      } },
    { id:'l144', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'We saw lions tigers and bears.', explain:'This is missing the commas needed to separate the list items.'},
        B:{text:'We saw lions, tigers, and bears.', explain:'Commas correctly separate each item in the list.'},
        C:{text:'We saw lions, tigers and bears,', explain:'This sentence incorrectly ends with a comma instead of a period.'},
        D:{text:'We saw, lions tigers and bears.', explain:'The comma right after "saw" is misplaced.'}
      } },
    { id:'l145', skill:'Pronoun case', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'The prize was given to her and I.', explain:'As the object of "given to," this should be "her and me," not "her and I."'},
        B:{text:'The prize was given to her and me.', explain:'This correctly uses the object pronoun "me."'},
        C:{text:'The prize was given to us.', explain:'This correctly uses the object pronoun "us."'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l146', skill:'Pronoun case', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Choose whomever seems most qualified.', explain:'Since this pronoun is the subject of "seems," it should be "whoever," not the object form "whomever."'},
        B:{text:'Choose whoever seems most qualified.', explain:'This correctly uses "whoever" as the subject of "seems."'},
        C:{text:'Whoever seems most qualified will be chosen.', explain:'This correctly uses "whoever" as the subject of the sentence.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l147', skill:'Sentence combining', prompt:'What is the best way to combine: "The power went out. Candles were lit."?', correct:'B',
      choices:{
        A:{text:'The power went out, candles were lit.', explain:'Joining two complete sentences with only a comma creates a comma splice.'},
        B:{text:'When the power went out, candles were lit.', explain:'This correctly uses "when" to show the timing relationship between the two events.'},
        C:{text:'The power went out candles were lit.', explain:'This runs the two ideas together with no punctuation or connector.'},
        D:{text:'The power went out; lit, candles were.', explain:'This awkwardly reorders the words in a way that doesn\'t read naturally.'}
      } },
    { id:'l148', skill:'Sentence combining', prompt:'What is the best way to combine: "The forecast predicted rain. The picnic was moved indoors."?', correct:'B',
      choices:{
        A:{text:'The forecast predicted rain, the picnic was moved indoors.', explain:'Joining two complete sentences with only a comma creates a comma splice.'},
        B:{text:'Since the forecast predicted rain, the picnic was moved indoors.', explain:'This correctly uses "since" to show the cause-and-effect relationship between the two events.'},
        C:{text:'The forecast predicted rain the picnic was moved indoors.', explain:'This runs the two ideas together with no punctuation or connector.'},
        D:{text:'The forecast predicted rain; indoors, the picnic was moved.', explain:'This awkwardly reorders the words in a way that doesn\'t read naturally.'}
      } },
    { id:'l149', skill:'Capitalization', prompt:'Which sentence is capitalized correctly?', correct:'C',
      choices:{
        A:{text:'We hiked through Yellowstone national park in Wyoming.', explain:'"Park" should be capitalized as part of the proper name "Yellowstone National Park."'},
        B:{text:'We hiked through Yellowstone National Park in wyoming.', explain:'"Wyoming" is a proper noun and should be capitalized.'},
        C:{text:'We hiked through Yellowstone National Park in Wyoming.', explain:'Both "Yellowstone National Park" and "Wyoming" are correctly capitalized as proper nouns.'},
        D:{text:'we hiked through Yellowstone National Park in Wyoming.', explain:'The sentence-starting word should be capitalized.'}
      } },
    { id:'l150', skill:'Capitalization', prompt:'Which sentence is capitalized correctly?', correct:'C',
      choices:{
        A:{text:'She works for the United nations in New York.', explain:'"Nations" should be capitalized as part of the proper name "United Nations."'},
        B:{text:'She works for the United Nations in new york.', explain:'"New York" is a proper noun and should be capitalized.'},
        C:{text:'She works for the United Nations in New York.', explain:'Both "United Nations" and "New York" are correctly capitalized as proper nouns.'},
        D:{text:'she works for the United Nations in New York.', explain:'The sentence-starting word should be capitalized.'}
      } },
    { id:'l151', skill:'Pronoun agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Somebody left their umbrella by the door.', explain:'"Somebody" is grammatically singular, so traditional agreement calls for "his or her" rather than "their."'},
        B:{text:'Somebody left his or her umbrella by the door.', explain:'This correctly uses a singular pronoun to match the singular "somebody."'},
        C:{text:'Several people left umbrellas by the door.', explain:'This sentence has no agreement error.'},
        D:{text:'No mistake', explain:'Choice A contains an error under traditional agreement rules, so this option is incorrect.'}
      } },
    { id:'l152', skill:'Pronoun agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Either of the answers could be their correct choice.', explain:'"Either" is grammatically singular, so traditional agreement calls for "his" rather than "their."'},
        B:{text:'Either of the answers could be his correct choice.', explain:'This correctly uses a singular pronoun to match the singular "either."'},
        C:{text:'Both answers could be correct choices.', explain:'This correctly uses the plural to match the plural "both."'},
        D:{text:'No mistake', explain:'Choice A contains an error under traditional agreement rules, so this option is incorrect.'}
      } },
    { id:'l153', skill:'Contractions vs. possessives', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:"The band changed it's sound.", explain:'This should be the possessive "its" (no apostrophe), not the contraction "it\'s" (it is).'},
        B:{text:'The band changed its sound.', explain:'This correctly uses the possessive "its."'},
        C:{text:'The sound belongs to the band.', explain:'This sentence has no possessive or contraction error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l154', skill:'Contractions', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Whos coming to the party?', explain:'This is missing the apostrophe needed for the contraction "who\'s" (who is).'},
        B:{text:"Who's coming to the party?", explain:'This correctly uses the contraction "who\'s" (who is).'},
        C:{text:'Whose party is it?', explain:'This correctly uses the possessive "whose."'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l155', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'The bridge closed, traffic backed up for miles.', explain:'Joining two complete sentences with only a comma creates a comma splice.'},
        B:{text:'The bridge closed; traffic backed up for miles.', explain:'A semicolon correctly joins these two related complete sentences.'},
        C:{text:'The bridge closed traffic backed up for miles.', explain:'This runs the two sentences together with no punctuation at all.'},
        D:{text:'The bridge closed. and traffic backed up.', explain:'A period followed by a lowercase conjunction doesn\'t form a proper sentence structure.'}
      } },
    { id:'l156', skill:'Punctuation', prompt:'Which sentence is punctuated correctly?', correct:'B',
      choices:{
        A:{text:'Pack light clothes, a toothbrush, and snacks.', explain:'This is missing the colon needed to introduce the list.'},
        B:{text:'Pack light: clothes, a toothbrush, and snacks.', explain:'A colon correctly introduces the list, with commas separating each item.'},
        C:{text:'Pack light, clothes, a toothbrush, and snacks.', explain:'A colon, not a comma, should introduce a list like this.'},
        D:{text:'Pack light; clothes, a toothbrush, and snacks.', explain:'A semicolon needs a complete sentence on both sides, which this list doesn\'t provide.'}
      } },
    { id:'l157', skill:'Plurals vs. possessives', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:"The geeses' feathers were ruffled.", explain:'"Geese" is already plural, so it just needs an apostrophe-s: "geese\'s," not "geeses\'."'},
        B:{text:"The geese's feathers were ruffled.", explain:'This correctly forms the possessive of the irregular plural "geese."'},
        C:{text:'The feathers belonged to the geese.', explain:'This sentence has no possessive error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l158', skill:'Plurals vs. possessives', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'The dads car was in the shop.', explain:'This needs an apostrophe to show possession: "dad\'s car."'},
        B:{text:"The dad's car was in the shop.", explain:'This correctly uses the possessive "dad\'s."'},
        C:{text:'The car belonged to the dad.', explain:'This sentence has no possessive error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l159', skill:'Subject-verb agreement', prompt:'Which sentence contains an error?', correct:'A',
      choices:{
        A:{text:'Aerobics require a lot of energy.', explain:'"Aerobics" is treated as a singular subject here, so it needs "requires," not "require."'},
        B:{text:'Aerobics requires a lot of energy.', explain:'This correctly treats "aerobics" as singular.'},
        C:{text:'Running requires energy too.', explain:'This sentence has no agreement error.'},
        D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'}
      } },
    { id:'l160', skill:'Sentence combining', prompt:'What is the best way to combine: "The printer jammed. The meeting was delayed."?', correct:'B',
      choices:{
        A:{text:'The printer jammed, the meeting was delayed.', explain:'Joining two complete sentences with only a comma creates a comma splice.'},
        B:{text:'Because the printer jammed, the meeting was delayed.', explain:'This correctly shows the cause-and-effect relationship between the two events.'},
        C:{text:'The printer jammed the meeting was delayed.', explain:'This runs the two ideas together with no punctuation or connector.'},
        D:{text:'The printer jammed; delayed, the meeting was.', explain:'This awkwardly reorders the words in a way that doesn\'t read naturally.'}
      } }
  ],

  reading: [
    { id:'r1', passage:'p1', skill:'Main idea', prompt:'This passage is primarily about:', correct:'B',
      choices:{
        A:{text:'The diet of honeybees', explain:'Diet is never discussed in the passage at all.'},
        B:{text:'How honeybees communicate location information', explain:'Every sentence in the passage builds toward explaining the waggle dance as a communication method.'},
        C:{text:'The dangers facing honeybee populations', explain:'Danger or population decline is never mentioned in the passage.'},
        D:{text:'How bees make honey', explain:'Honey-making is not discussed; the passage focuses only on the waggle dance.'}
      } },
    { id:'r2', passage:'p1', skill:'Detail', prompt:'According to the passage, the duration of the waggle indicates:', correct:'C',
      choices:{
        A:{text:'The direction of the food', explain:'Direction is controlled by the angle of the dance, not its duration — this is likely what duration is being confused with.'},
        B:{text:'The size of the flower patch', explain:'The passage never connects duration to the size of a flower patch.'},
        C:{text:'How far away the food source is', explain:'The passage states directly that the duration of the waggle indicates how far away the source lies.'},
        D:{text:'The number of bees needed', explain:'This detail is not mentioned anywhere in the passage.'}
      } },
    { id:'r3', passage:'p1', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'forager' most nearly means:", correct:'B',
      choices:{
        A:{text:'A bee that guards the hive', explain:'Guard bees are a real hive role, but that is not how forager is used in this passage.'},
        B:{text:'A bee that searches for food', explain:'The passage describes foragers being directed to productive locations, meaning bees that go out to search for food.'},
        C:{text:'A queen bee', explain:'The queen\'s role is not discussed in this passage at all.'},
        D:{text:'A predator of bees', explain:'Foragers are part of the hive, not a threat to it.'}
      } },
    { id:'r4', passage:'p1', skill:'Inference', prompt:'It can be inferred from the passage that the waggle dance is important because it:', correct:'B',
      choices:{
        A:{text:'Entertains other bees', explain:'Nothing in the passage suggests the dance serves an entertainment purpose.'},
        B:{text:'Allows bees to communicate without direct guidance', explain:'The passage explains that the dance lets a hive direct foragers without any single bee needing to guide the others directly.'},
        C:{text:'Helps bees avoid predators', explain:'Predators are not mentioned anywhere in the passage.'},
        D:{text:'Is used only when the hive is threatened', explain:'The passage describes the dance as a routine method, not a threat response.'}
      } },
    { id:'r5', passage:'p2', skill:'Inference', prompt:"The teacher's response at the end of the passage suggests that he:", correct:'B',
      choices:{
        A:{text:'Was disappointed in Elena', explain:'Nothing in the passage suggests disappointment; the nod comes right after she improves.'},
        B:{text:'Recognized her improvement without excessive praise', explain:'The nod comes right after Elena finally plays the passage correctly, and the passage calls it "enough" — a quiet sign of recognition.'},
        C:{text:'Had not been listening', explain:'The passage shows he is closely attentive throughout, not distracted.'},
        D:{text:'Wanted her to stop practicing', explain:'There is no indication he wants the lesson to end; his reaction reads as quiet approval.'}
      } },
    { id:'r6', passage:'p2', skill:'Main idea', prompt:"Elena's mood at the beginning of the passage can best be described as:", correct:'B',
      choices:{
        A:{text:'Excited', explain:'Nothing in the passage suggests excitement at the start.'},
        B:{text:'Frustrated', explain:'The passage describes her bow arm aching and her patience thinning, both signs of frustration.'},
        C:{text:'Confident', explain:'Her aching arm and thinning patience suggest the opposite of confidence at this point.'},
        D:{text:'Indifferent', explain:'Her visible frustration shows she cares about the outcome, not indifference.'}
      } },
    { id:'r7', passage:'p2', skill:'Vocabulary in context', prompt:"The phrase 'quiet certainty' suggests that the teacher:", correct:'B',
      choices:{
        A:{text:'Was unsure of what to do next', explain:'Quiet certainty suggests the opposite of uncertainty.'},
        B:{text:'Was calm and confident in his teaching method', explain:'This certainty comes from someone who has taught this passage a hundred times before, showing calm experience.'},
        C:{text:'Was angry with Elena', explain:'Nothing in the phrase or surrounding text suggests anger.'},
        D:{text:"Doubted Elena's ability", explain:'Quiet certainty describes his own confidence, not doubt in her.'}
      } },
    { id:'r8', passage:'p2', skill:'Main idea', prompt:'What is the best summary of this passage?', correct:'B',
      choices:{
        A:{text:'A teacher ends a lesson early.', explain:'The lesson does not end early; it continues until she improves.'},
        B:{text:'A student struggles but eventually improves with practice.', explain:'The passage moves from struggle and fatigue to a moment of improvement on the fifth measure.'},
        C:{text:'A student decides to quit violin.', explain:'Quitting is never mentioned or implied in the passage.'},
        D:{text:'A teacher criticizes a student harshly.', explain:'The teacher\'s response is quiet and measured, not harsh criticism.'}
      } },
    { id:'r9', passage:'p3', skill:'Main idea', prompt:'This passage is primarily about:', correct:'A',
      choices:{
        A:{text:'How volcanic islands form', explain:'The passage explains step by step how magma and repeated eruptions build islands from the ocean floor.'},
        B:{text:'The dangers of volcanic eruptions', explain:'Danger is not discussed anywhere in the passage.'},
        C:{text:'How animals migrate between islands', explain:'Migration methods are mentioned only briefly, not as the passage\'s main focus.'},
        D:{text:'The history of a specific island', explain:'The passage discusses volcanic islands generally, not the history of one named island.'}
      } },
    { id:'r10', passage:'p3', skill:'Detail', prompt:'According to the passage, magma cools upon contact with:', correct:'C',
      choices:{
        A:{text:'Air', explain:'The passage specifies seawater, not air, as what the magma contacts.'},
        B:{text:'Wind', explain:'Wind is not mentioned in connection with the magma cooling.'},
        C:{text:'Seawater', explain:'The passage states directly that magma cools upon contact with seawater.'},
        D:{text:'Lava', explain:'Lava is the magma itself once it reaches the surface, not something separate it contacts.'}
      } },
    { id:'r11', passage:'p3', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'populate' most nearly means:", correct:'B',
      choices:{
        A:{text:'To govern', explain:'Governing implies authority, which is not related to how populate is used here.'},
        B:{text:'To inhabit', explain:'The passage discusses plants and animals populating islands, meaning coming to live there.'},
        C:{text:'To destroy', explain:'Destruction is the opposite of what populate describes.'},
        D:{text:'To measure', explain:'Measuring is unrelated to living somewhere, which is what populate refers to.'}
      } },
    { id:'r12', passage:'p3', skill:'Inference', prompt:'It can be inferred that the ecosystems of these islands are unique because:', correct:'B',
      choices:{
        A:{text:'They are protected by law', explain:'Legal protection is never mentioned in the passage.'},
        B:{text:'Their plants and animals must arrive from elsewhere rather than already being present', explain:'The passage explains that life must arrive by wind, water, or wing since the island rises independently from any landmass.'},
        C:{text:'No plants or animals can survive there', explain:'The passage implies plants and animals do eventually populate these islands, just from elsewhere.'},
        D:{text:'They are located near continents', explain:'The passage specifically describes these islands as never having been connected to a continent.'}
      } },
    { id:'r13', passage:'p4', skill:'Inference', prompt:"Marcus's decision to try his sister's advice suggests that he:", correct:'B',
      choices:{
        A:{text:'Had never heard the advice before', explain:'The passage says this was "the same advice she always did," meaning he had heard it many times.'},
        B:{text:'Was willing to try something different after repeated failure', explain:'After many falls, Marcus finally tries the advice he had previously dismissed, showing a willingness to change his approach.'},
        C:{text:'Wanted to impress his sister', explain:'The passage does not mention any motivation related to impressing her.'},
        D:{text:'Planned to give up skateboarding', explain:'The passage shows him trying again and succeeding, not giving up.'}
      } },
    { id:'r14', passage:'p4', skill:'Main idea', prompt:'This passage is mainly about:', correct:'C',
      choices:{
        A:{text:'A sibling rivalry', explain:'The passage shows supportive advice, not rivalry, between the siblings.'},
        B:{text:'A skateboarding competition', explain:'No competition is mentioned in the passage.'},
        C:{text:'A boy improving after finally following advice', explain:'The passage centers on Marcus succeeding once he finally applies his sister\'s repeated advice.'},
        D:{text:'An injury that ends a hobby', explain:'The scrape is mentioned only as a familiar detail, and the passage ends with him succeeding, not quitting.'}
      } },
    { id:'r15', passage:'p4', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'steadied' most nearly means:", correct:'B',
      choices:{
        A:{text:'Became unstable', explain:'This is nearly the opposite of what steadied means in context.'},
        B:{text:'Became balanced', explain:'The board wobbling and then steadying describes it going from unstable to balanced.'},
        C:{text:'Stopped moving', explain:'The board is still in motion as he rides it; steadied describes balance, not stopping.'},
        D:{text:'Fell over', explain:'Falling over is the opposite of what happens — the board stays upright.'}
      } },
    { id:'r16', passage:'p4', skill:'Detail', prompt:"According to the passage, what two things does Marcus's sister tell him to do?", correct:'B',
      choices:{
        A:{text:'Look down and go slow', explain:'This is the opposite of the advice given in the passage.'},
        B:{text:'Bend your knees and look ahead', explain:'The passage directly quotes his sister\'s advice: "Bend your knees, look ahead, not down."'},
        C:{text:'Wear a helmet and pads', explain:'Safety gear is not mentioned anywhere in the passage.'},
        D:{text:'Practice daily and stay calm', explain:'This general advice is not what the sister actually says in the passage.'}
      } },
    { id:'r17', passage:'p5', skill:'Main idea', prompt:'This passage is primarily about:', correct:'B',
      choices:{
        A:{text:'The cost of paper in medieval Europe', explain:'Paper cost specifically is not discussed; the passage focuses on the speed and method of producing books.'},
        B:{text:'How the printing press changed access to books', explain:'The passage traces the shift from slow hand-copying to widely available printed books.'},
        C:{text:'A biography of a famous printer', explain:'No specific individual printer is discussed in the passage.'},
        D:{text:'The history of handwriting', explain:'Handwriting is mentioned only briefly as a contrast to printing, not as the main topic.'}
      } },
    { id:'r18', passage:'p5', skill:'Detail', prompt:'According to the passage, before the printing press, a single book could take:', correct:'C',
      choices:{
        A:{text:'A few hours to copy', explain:'The passage describes a much longer process than a few hours.'},
        B:{text:'A few days to copy', explain:'The passage describes an even longer timeframe than a few days.'},
        C:{text:'Months to copy', explain:'The passage states directly that a single volume could take months to complete by hand.'},
        D:{text:'Only minutes to copy', explain:'This contradicts the passage\'s description of a slow, months-long process.'}
      } },
    { id:'r19', passage:'p5', skill:'Vocabulary in context', prompt:"As used in the passage, 'movable-type' most nearly refers to:", correct:'A',
      choices:{
        A:{text:'Letters that could be rearranged and reused', explain:'The passage describes individual metal letters that could be arranged and reused for different pages.'},
        B:{text:'Books that could be transported easily', explain:'Portability of books is not what movable-type refers to in the passage.'},
        C:{text:'Ink that dried quickly', explain:'Ink drying speed is not discussed in the passage.'},
        D:{text:'Pages that could be removed', explain:'Removable pages are not mentioned; the term refers to the reusable letters themselves.'}
      } },
    { id:'r20', passage:'p5', skill:'Inference', prompt:'It can be inferred from the passage that before the printing press:', correct:'B',
      choices:{
        A:{text:'Most people could read fluently', explain:'The passage suggests the opposite — books were limited to a small number of institutions, implying limited access to reading.'},
        B:{text:'Access to books was limited to a small number of people', explain:'The passage states that hand-copied books were rare and expensive, limiting reading to a small number of wealthy or religious institutions.'},
        C:{text:'Printing was faster than it became afterward', explain:'The passage describes the opposite — printing became much faster after the press was introduced.'},
        D:{text:'Books were mostly written in pictures', explain:'Picture-based books are not mentioned anywhere in the passage.'}
      } },
    { id:'r21', passage:'p6', skill:'Main idea', prompt:'This passage is primarily about:', correct:'B',
      choices:{
        A:{text:'The dangers Arctic terns face', explain:'Danger is never discussed in the passage.'},
        B:{text:"The Arctic tern's extraordinary migration", explain:'The passage focuses on the length, route, and unusual daylight effects of the tern\'s migration.'},
        C:{text:'How birds build nests', explain:'Nest-building isn\'t discussed anywhere in the passage.'},
        D:{text:'The diet of Arctic terns', explain:'Diet is never mentioned in the passage.'}
      } },
    { id:'r22', passage:'p6', skill:'Detail', prompt:'According to the passage, terns take winding routes because:', correct:'C',
      choices:{
        A:{text:'They get lost easily', explain:'The passage attributes the winding path to wind patterns, not confusion.'},
        B:{text:'They are avoiding predators', explain:'Predators aren\'t mentioned anywhere in the passage.'},
        C:{text:'They may be following wind patterns to conserve energy', explain:'The passage states the winding routes likely follow "wind patterns that make the long journey less exhausting."'},
        D:{text:'They are searching for food along the way', explain:'Food searching isn\'t given as the reason for the winding route in the passage.'}
      } },
    { id:'r23', passage:'p6', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'winding' most nearly means:", correct:'B',
      choices:{
        A:{text:'Straight', explain:'This is nearly the opposite of winding.'},
        B:{text:'Curving and indirect', explain:'The passage contrasts these routes with "a straight path," suggesting winding means curving and indirect.'},
        C:{text:'Fast', explain:'Speed isn\'t suggested by this word in context.'},
        D:{text:'Dangerous', explain:'Danger isn\'t suggested anywhere near this word in the passage.'}
      } },
    { id:'r24', passage:'p6', skill:'Inference', prompt:"It can be inferred that the tern's migration pattern results in the bird experiencing:", correct:'B',
      choices:{
        A:{text:'Only winter each year', explain:'This contradicts the passage, which describes the tern experiencing two summers.'},
        B:{text:'More daylight over its lifetime than most animals', explain:'The passage states researchers believe the tern "may see more daylight over its lifetime than any other creature on the planet."'},
        C:{text:'Less daylight than other birds', explain:'This contradicts the passage\'s point about experiencing two summers.'},
        D:{text:'A single season each year', explain:'The passage describes experiencing two summers, not a single season.'}
      } },
    { id:'r25', passage:'p7', skill:'Inference', prompt:"The passage suggests Daniela's coach:", correct:'B',
      choices:{
        A:{text:'Was frustrated with her', explain:'Nothing in the passage suggests frustration; the coach says nothing at all during her attempts.'},
        B:{text:'Was patient and let her decide when she was ready', explain:'The coach staying silent through her three retreats down the ladder suggests patience, letting her choose her own moment.'},
        C:{text:'Forced her to jump', explain:'The passage shows Daniela stepping off on her own, not being forced.'},
        D:{text:"Didn't care whether she jumped", explain:'Silence doesn\'t necessarily mean indifference, especially paired with waiting through repeated attempts.'}
      } },
    { id:'r26', passage:'p7', skill:'Main idea', prompt:'This passage is mainly about:', correct:'B',
      choices:{
        A:{text:'A swimming competition', explain:'No competition is mentioned in the passage.'},
        B:{text:'A girl overcoming her fear to jump off a diving board', explain:'The passage centers on Daniela working up to and finally making the jump.'},
        C:{text:"A coach's teaching method", explain:'The coach is present but not the main focus of the passage.'},
        D:{text:'A dangerous pool accident', explain:'No accident occurs in the passage.'}
      } },
    { id:'r27', passage:'p7', skill:'Vocabulary in context', prompt:"The word 'impossibly' in the passage most nearly means:", correct:'B',
      choices:{
        A:{text:'Actually', explain:'This contradicts the exaggerated, subjective quality the word suggests.'},
        B:{text:'Seemingly beyond belief', explain:'The passage uses "impossibly far away" to describe how the water looked to her, despite being only ten feet — an exaggerated impression, not a literal fact.'},
        C:{text:'Barely', explain:'This doesn\'t match the exaggerated quality suggested by the word.'},
        D:{text:'Slightly', explain:'This contradicts the dramatic, exaggerated impression the word conveys.'}
      } },
    { id:'r28', passage:'p7', skill:'Detail', prompt:'According to the passage, how many times had Daniela climbed back down without jumping?', correct:'B',
      choices:{
        A:{text:'Two', explain:'This isn\'t the number given in the passage.'},
        B:{text:'Three', explain:'The passage states this was the fourth time she stood at the edge, meaning she had climbed down three times before.'},
        C:{text:'Four', explain:'Four is the total number of times she stood at the edge, not the number of times she climbed back down.'},
        D:{text:'Five', explain:'This isn\'t the number given in the passage.'}
      } },
    { id:'r29', passage:'p8', skill:'Main idea', prompt:'This passage is primarily about:', correct:'B',
      choices:{
        A:{text:'How electric refrigerators are made', explain:'The manufacturing process of electric refrigerators isn\'t discussed.'},
        B:{text:'The ice harvesting industry that existed before electric refrigeration', explain:'The passage explains how ice was harvested, stored, and delivered before refrigerators became common.'},
        C:{text:'Modern refrigeration technology', explain:'The passage focuses on the older ice industry, not modern technology.'},
        D:{text:'Famous inventors of the 1900s', explain:'No specific inventors are mentioned in the passage.'}
      } },
    { id:'r30', passage:'p8', skill:'Detail', prompt:'According to the passage, what was used to help keep ice from melting in icehouses?', correct:'B',
      choices:{
        A:{text:'Electric fans', explain:'Electric fans are not mentioned in the passage.'},
        B:{text:'Sawdust', explain:'The passage states the icehouses were "packed with sawdust" to keep ice from melting.'},
        C:{text:'Salt water', explain:'Salt water isn\'t mentioned in the passage.'},
        D:{text:'Wooden crates', explain:'Wooden crates aren\'t mentioned as the insulating material in the passage.'}
      } },
    { id:'r31', passage:'p8', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'insulated' most nearly means:", correct:'A',
      choices:{
        A:{text:'Designed to prevent heat transfer', explain:'The passage describes insulated icehouses and iceboxes used specifically to keep things cool, matching this meaning.'},
        B:{text:'Painted a bright color', explain:'Color isn\'t related to insulation.'},
        C:{text:'Built underground', explain:'Location isn\'t what insulated describes.'},
        D:{text:'Made of metal', explain:'Material type isn\'t what insulated specifically describes.'}
      } },
    { id:'r32', passage:'p8', skill:'Inference', prompt:'It can be inferred that the ice harvesting industry declined because:', correct:'B',
      choices:{
        A:{text:'Ice became too expensive to harvest', explain:'Cost of harvesting isn\'t discussed as the reason for decline.'},
        B:{text:'Electric refrigeration made it unnecessary', explain:'The passage states the industry "largely disappeared" once electric refrigerators became affordable.'},
        C:{text:'Lakes stopped freezing', explain:'This isn\'t mentioned anywhere in the passage.'},
        D:{text:'Wagons were banned from cities', explain:'No such ban is mentioned in the passage.'}
      } },
    { id:'r33', passage:'p9', skill:'Inference', prompt:"The passage suggests the grandfather's reaction to Marcus's approach was:", correct:'B',
      choices:{
        A:{text:'Angry and disapproving', explain:'The passage describes him laughing, not showing anger.'},
        B:{text:'Amused and accepting', explain:'The passage describes him laughing and saying "Now you know it too," suggesting warm acceptance.'},
        C:{text:'Indifferent', explain:'His laughter and comment suggest genuine engagement, not indifference.'},
        D:{text:'Confused', explain:'His clear, warm response doesn\'t suggest confusion.'}
      } },
    { id:'r34', passage:'p9', skill:'Main idea', prompt:'This passage is mainly about:', correct:'B',
      choices:{
        A:{text:'A disagreement between family members', explain:'The passage shows acceptance, not disagreement.'},
        B:{text:'A grandson learning a family recipe in his own way', explain:'The passage follows Marcus secretly measuring and eventually recreating his grandfather\'s recipe.'},
        C:{text:'A cooking competition', explain:'No competition is mentioned in the passage.'},
        D:{text:"A grandfather's failing memory", explain:'Memory loss isn\'t discussed in the passage.'}
      } },
    { id:'r35', passage:'p9', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'precise' most nearly means:", correct:'B',
      choices:{
        A:{text:'Careless', explain:'This is nearly the opposite of precise.'},
        B:{text:'Exact and detail-oriented', explain:'The passage contrasts Marcus\'s precision with his grandfather\'s refusal to measure anything, suggesting Marcus values exactness.'},
        C:{text:'Impatient', explain:'Patience level isn\'t what precise describes.'},
        D:{text:'Forgetful', explain:'This contradicts the careful, detail-tracking behavior described.'}
      } },
    { id:'r36', passage:'p9', skill:'Detail', prompt:'According to the passage, how did Marcus go about learning the recipe?', correct:'B',
      choices:{
        A:{text:'He asked his grandfather to write it down', explain:'The passage shows his grandfather refusing to measure, not writing anything down for Marcus.'},
        B:{text:'He secretly wrote down approximate measurements after each visit', explain:'The passage states Marcus "spent months secretly writing down approximate measurements after each visit."'},
        C:{text:'He found an old family cookbook', explain:'No cookbook is mentioned in the passage.'},
        D:{text:'He guessed based on taste alone', explain:'The passage describes deliberate measurement-tracking, not guessing.'}
      } },
    { id:'r37', passage:'p10', skill:'Main idea', prompt:'This passage is primarily about:', correct:'B',
      choices:{
        A:{text:'How trees compete for sunlight', explain:'The passage focuses on cooperation through the fungal network, not competition for sunlight.'},
        B:{text:'An underground fungal network that connects and helps trees cooperate', explain:'The passage describes the "wood wide web" and how it allows trees to share resources and warnings.'},
        C:{text:'The dangers of forest fires', explain:'Forest fires aren\'t discussed in the passage.'},
        D:{text:'How mushrooms grow', explain:'Mushroom growth isn\'t the focus of the passage.'}
      } },
    { id:'r38', passage:'p10', skill:'Detail', prompt:"According to the passage, what do 'mother trees' do?", correct:'B',
      choices:{
        A:{text:'Compete with seedlings for resources', explain:'This contradicts the passage, which describes them helping seedlings.'},
        B:{text:'Funnel extra resources to nearby seedlings', explain:'The passage states that mother trees "appear to funnel extra resources to seedlings growing in their shade."'},
        C:{text:'Attack insects directly', explain:'The passage describes sending warning signals about insects, not attacking them directly.'},
        D:{text:'Grow faster than other trees', explain:'Growth speed isn\'t discussed as a trait of mother trees in the passage.'}
      } },
    { id:'r39', passage:'p10', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'funnel' most nearly means:", correct:'B',
      choices:{
        A:{text:'Block', explain:'This is nearly the opposite of funnel in this context.'},
        B:{text:'Direct or channel', explain:'The passage describes mother trees funneling resources toward seedlings, meaning directing resources to them.'},
        C:{text:'Ignore', explain:'This contradicts the active, helpful behavior described.'},
        D:{text:'Destroy', explain:'Destruction isn\'t suggested by this word in context.'}
      } },
    { id:'r40', passage:'p10', skill:'Inference', prompt:"It can be inferred that scientists' previous view of forests was:", correct:'B',
      choices:{
        A:{text:'That trees mostly cooperate', explain:'This is what the passage says scientists now believe, not their previous view.'},
        B:{text:'That trees mostly compete without cooperating', explain:'The passage states scientists once assumed a "purely competitive plant world," implying they didn\'t previously believe in cooperation.'},
        C:{text:'That trees do not interact at all', explain:'The passage doesn\'t suggest scientists believed trees had no interaction at all, just that it was competitive.'},
        D:{text:'That fungi are harmful to trees', explain:'This isn\'t discussed as the previous scientific view in the passage.'}
      } },
    { id:'r41', passage:'p11', skill:'Main idea', prompt:'This passage is primarily about:', correct:'B',
      choices:{
        A:{text:'How anglerfish hunt', explain:'This is one detail from the passage, not its overall focus.'},
        B:{text:'Bioluminescence as a common survival tool in the deep sea', explain:'The passage discusses multiple examples of bioluminescence and how common it is among deep-sea creatures.'},
        C:{text:'The chemistry of light', explain:'The chemical process is mentioned only briefly, not as the main focus.'},
        D:{text:'How squid make ink', explain:'Ink production itself isn\'t explained in the passage.'}
      } },
    { id:'r42', passage:'p11', skill:'Detail', prompt:'According to the passage, anglerfish use their glowing lure to:', correct:'C',
      choices:{
        A:{text:'Scare away predators', explain:'The passage describes attracting prey, not scaring predators.'},
        B:{text:'Communicate with other anglerfish', explain:'Communication with other anglerfish isn\'t mentioned in the passage.'},
        C:{text:'Attract prey directly to their mouths', explain:'The passage states anglerfish "use a glowing lure to attract prey directly to their mouths."'},
        D:{text:'Navigate through dark water', explain:'Navigation isn\'t mentioned as the lure\'s purpose in the passage.'}
      } },
    { id:'r43', passage:'p11', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'majority' most nearly means:", correct:'D',
      choices:{
        A:{text:'A small number', explain:'This is nearly the opposite of majority.'},
        B:{text:'All of them', explain:'Majority means more than half, not the complete total.'},
        C:{text:'None of them', explain:'This is the opposite of majority.'},
        D:{text:'More than half', explain:'The passage states the majority of deep-sea animals possess bioluminescence, meaning more than half.'}
      } },
    { id:'r44', passage:'p11', skill:'Inference', prompt:'It can be inferred that bioluminescence is especially useful in the deep sea because:', correct:'A',
      choices:{
        A:{text:'Sunlight is unavailable, so light-based signals stand out', explain:'The passage notes this occurs "where sunlight never reaches," making self-produced light especially valuable for communication and defense.'},
        B:{text:'The deep sea is too cold for other survival methods', explain:'Temperature isn\'t discussed in the passage.'},
        C:{text:'Deep-sea animals cannot see at all', explain:'The passage doesn\'t claim deep-sea animals are blind.'},
        D:{text:'Predators are rare in the deep sea', explain:'The passage discusses defense against predators, implying they do exist there.'}
      } },
    { id:'r45', passage:'p12', skill:'Inference', prompt:"The passage suggests the sister's silence at the end was because:", correct:'B',
      choices:{
        A:{text:'She was bored', explain:'Sitting down to listen contradicts boredom.'},
        B:{text:'She was fully absorbed in listening', explain:'Sitting down and listening until he finished suggests she was captivated, not merely present.'},
        C:{text:'She had fallen asleep', explain:'Nothing suggests she fell asleep; she listened until he finished.'},
        D:{text:"She didn't like the piece", explain:'Her attentive listening contradicts disliking the performance.'}
      } },
    { id:'r46', passage:'p12', skill:'Main idea', prompt:'This passage is mainly about:', correct:'C',
      choices:{
        A:{text:'A sibling rivalry over music', explain:'The passage shows support, not rivalry, between the siblings.'},
        B:{text:'A canceled recital', explain:'The recital is not canceled in the passage.'},
        C:{text:'A musician finally mastering a difficult piece', explain:'The passage centers on Theo\'s breakthrough with the violin piece before his recital.'},
        D:{text:'An argument between siblings', explain:'No argument occurs in the passage.'}
      } },
    { id:'r47', passage:'p12', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'clicked' most nearly means:", correct:'D',
      choices:{
        A:{text:'Made a clicking sound', explain:'This is a literal reading that doesn\'t fit the context of a sudden breakthrough.'},
        B:{text:'Broke down', explain:'This contradicts the positive breakthrough described.'},
        C:{text:'Became confusing', explain:'This is nearly the opposite of what happens in the passage.'},
        D:{text:'Suddenly made sense or came together', explain:'The passage describes his fingers suddenly finding each note, suggesting a sudden breakthrough.'}
      } },
    { id:'r48', passage:'p12', skill:'Detail', prompt:'According to the passage, when did the breakthrough happen?', correct:'B',
      choices:{
        A:{text:'Weeks before the recital', explain:'The passage describes weeks of practice before the breakthrough, not the breakthrough itself.'},
        B:{text:'The night before the recital', explain:'The passage states "the night before his recital, something clicked."'},
        C:{text:'During the recital itself', explain:'The passage describes this happening the night before, not during the recital.'},
        D:{text:'The morning of the recital', explain:'This isn\'t the timeframe given in the passage.'}
      } },
    { id:'r49', passage:'p13', skill:'Main idea', prompt:'This passage is primarily about:', correct:'A',
      choices:{
        A:{text:'The invention and slow adoption of the zipper', explain:'The passage traces the zipper from its unreliable early patents to its eventual widespread use.'},
        B:{text:'Modern clothing manufacturing', explain:'Modern manufacturing isn\'t the passage\'s focus.'},
        C:{text:'The history of buttons', explain:'Buttons are mentioned only briefly as an alternative fastening method.'},
        D:{text:'Famous fashion designers', explain:'No designers are mentioned in the passage.'}
      } },
    { id:'r50', passage:'p13', skill:'Detail', prompt:'According to the passage, when were early zippers first patented?', correct:'C',
      choices:{
        A:{text:'Late 1700s', explain:'This isn\'t the date given in the passage.'},
        B:{text:'Early 1900s', explain:'This isn\'t the specific date given for the first patent in the passage.'},
        C:{text:'Late 1800s', explain:'The passage states early zippers were "first patented in the late 1800s."'},
        D:{text:'1950s', explain:'This isn\'t mentioned as the patent date in the passage.'}
      } },
    { id:'r51', passage:'p13', skill:'Vocabulary in context', prompt:"As used in the passage, 'prone to' most nearly means:", correct:'D',
      choices:{
        A:{text:'Protected from', explain:'This is the opposite of prone to.'},
        B:{text:'Completely immune to', explain:'This is nearly the opposite of prone to.'},
        C:{text:'Rarely affected by', explain:'This contradicts the passage\'s description of frequent snagging.'},
        D:{text:'Likely to experience', explain:'The passage describes early zippers as "prone to snagging," meaning likely to experience this problem.'}
      } },
    { id:'r52', passage:'p13', skill:'Inference', prompt:"It can be inferred that the zipper's slow adoption was mainly due to:", correct:'C',
      choices:{
        A:{text:'High cost', explain:'Cost isn\'t discussed in the passage.'},
        B:{text:'Lack of interest from clothing makers', explain:'The passage attributes the delay to reliability, not lack of interest.'},
        C:{text:'Reliability problems with early designs', explain:'The passage states early zippers were "unreliable and prone to snagging," which kept them out of clothing for decades.'},
        D:{text:'Government regulations', explain:'No regulations are mentioned in the passage.'}
      } },
    { id:'r53', passage:'p14', skill:'Inference', prompt:"The passage suggests the head chef's approach was:", correct:'D',
      choices:{
        A:{text:'Harsh and dismissive', explain:'Tossing her an apron and inviting her to watch first doesn\'t suggest harshness.'},
        B:{text:'Indifferent to her presence', explain:'Directly addressing her with instructions contradicts indifference.'},
        C:{text:'Overly strict', explain:'Letting her watch and join "whenever you\'re ready" contradicts strictness.'},
        D:{text:'Encouraging without being pressuring', explain:'Telling her to "watch first, then jump in whenever you\'re ready" shows support without forcing her pace.'}
      } },
    { id:'r54', passage:'p14', skill:'Main idea', prompt:'This passage is mainly about:', correct:'C',
      choices:{
        A:{text:"A chef's strict kitchen rules", explain:'The chef\'s approach in the passage is supportive, not strict.'},
        B:{text:'A kitchen accident', explain:'No accident occurs in the passage.'},
        C:{text:"A new employee's growing comfort in an unfamiliar setting", explain:'The passage follows Priya\'s nervousness transforming into a feeling of belonging.'},
        D:{text:'A disagreement between coworkers', explain:'No disagreement occurs in the passage.'}
      } },
    { id:'r55', passage:'p14', skill:'Vocabulary in context', prompt:"The phrase 'blur of motion' most nearly suggests:", correct:'B',
      choices:{
        A:{text:'A slow, quiet scene', explain:'This is the opposite of what the phrase suggests.'},
        B:{text:'A fast-paced, busy scene', explain:'The description of clattering pans and calling out orders supports a fast-paced, busy atmosphere.'},
        C:{text:'An empty, still scene', explain:'This contradicts the described activity in the kitchen.'},
        D:{text:'A dangerous, chaotic scene', explain:'Danger isn\'t suggested, just fast-paced activity.'}
      } },
    { id:'r56', passage:'p14', skill:'Detail', prompt:'According to the passage, what did the head chef tell Priya to do at first?', correct:'C',
      choices:{
        A:{text:'Start cooking immediately', explain:'This contradicts the chef\'s actual instruction to watch first.'},
        B:{text:'Clean the kitchen', explain:'Cleaning isn\'t mentioned in the passage.'},
        C:{text:'Watch first, then join in when ready', explain:'The passage directly quotes the chef: "Watch first, then jump in whenever you\'re ready."'},
        D:{text:'Wait outside', explain:'The passage shows her already inside the kitchen, not waiting outside.'}
      } },
    { id:'r57', passage:'p15', skill:'Main idea', prompt:'This passage is primarily about:', correct:'B',
      choices:{
        A:{text:'Why the moon orbits Earth', explain:'The moon\'s orbit itself isn\'t explained; only its effect on tides is.'},
        B:{text:"How the moon's gravity creates ocean tides", explain:'The passage explains how the moon\'s gravitational pull causes the rise and fall of tides.'},
        C:{text:'The dangers of high tides', explain:'Danger isn\'t discussed in the passage.'},
        D:{text:'How ships navigate tides', explain:'Navigation isn\'t mentioned in the passage.'}
      } },
    { id:'r58', passage:'p15', skill:'Detail', prompt:'According to the passage, how many high tides do most coastlines experience within about 24 hours?', correct:'C',
      choices:{
        A:{text:'One', explain:'This isn\'t the number given in the passage.'},
        B:{text:'Three', explain:'This isn\'t the number given in the passage.'},
        C:{text:'Two', explain:'The passage states coastlines experience "two high tides and two low tides within about 24 hours."'},
        D:{text:'Four', explain:'This isn\'t the number given for high tides specifically in the passage.'}
      } },
    { id:'r59', passage:'p15', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'bulges' most nearly means:", correct:'D',
      choices:{
        A:{text:'Shrinks inward', explain:'This is the opposite of bulges.'},
        B:{text:'Freezes solid', explain:'Temperature isn\'t what bulges describes.'},
        C:{text:'Disappears completely', explain:'This contradicts water swelling outward, as the passage describes.'},
        D:{text:'Swells outward', explain:'The passage describes water bulging outward on the side facing the moon, meaning swelling outward.'}
      } },
    { id:'r60', passage:'p15', skill:'Inference', prompt:'It can be inferred that the tide bulge on the side of Earth facing the moon is caused by:', correct:'C',
      choices:{
        A:{text:'Wind patterns', explain:'Wind isn\'t mentioned in the passage.'},
        B:{text:'Ocean currents alone', explain:'Currents alone aren\'t identified as the cause in the passage.'},
        C:{text:"The moon's gravitational pull", explain:'The passage states the moon\'s pull is strongest on the side facing it, causing water to bulge there.'},
        D:{text:"Earth's rotation alone", explain:'Rotation is mentioned as spreading the effect across a day, not as the direct cause of the bulge itself.'}
      } },
    { id:'r61', passage:'p16', skill:'Main idea', prompt:'This passage is primarily about:', correct:'B',
      choices:{
        A:{text:'How rivers carve valleys', explain:'Rivers are mentioned only briefly as a contrast to glaciers.'},
        B:{text:'How glaciers shape the landscape as they move', explain:'The passage explains how glaciers grind rock and carve distinctive valleys as they move.'},
        C:{text:'The dangers of melting ice', explain:'Danger isn\'t discussed in the passage.'},
        D:{text:'How scientists date rocks', explain:'Rock-dating methods aren\'t discussed in the passage.'}
      } },
    { id:'r62', passage:'p16', skill:'Detail', prompt:'According to the passage, what shape valley does a glacier typically leave behind?', correct:'C',
      choices:{
        A:{text:'V-shaped', explain:'The passage attributes V-shaped valleys to rivers, not glaciers.'},
        B:{text:'Circular', explain:'This shape isn\'t mentioned in the passage.'},
        C:{text:'U-shaped', explain:'The passage states glaciers leave behind "distinctive U-shaped valleys."'},
        D:{text:'Triangular', explain:'This shape isn\'t mentioned in the passage.'}
      } },
    { id:'r63', passage:'p16', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'debris' most nearly means:", correct:'D',
      choices:{
        A:{text:'Water', explain:'Water isn\'t what debris refers to in this context.'},
        B:{text:'Wildlife', explain:'Wildlife isn\'t related to what a glacier picks up and carries.'},
        C:{text:'Ice crystals', explain:'The debris is described as separate from the ice itself, picked up by the glacier.'},
        D:{text:'Scattered fragments of rock and material', explain:'The passage describes the glacier picking up "boulders and debris" to use like sandpaper, meaning loose rock material.'}
      } },
    { id:'r64', passage:'p16', skill:'Inference', prompt:'It can be inferred that scientists can identify past glacier locations because:', correct:'B',
      choices:{
        A:{text:'Glaciers are still visible today everywhere', explain:'The passage discusses regions that have been ice-free for thousands of years.'},
        B:{text:'The distinctive landforms glaciers leave behind persist long after the ice is gone', explain:'The passage explains that leftover landforms allow scientists to map ancient glacier locations even in ice-free regions.'},
        C:{text:'Old maps recorded glacier locations', explain:'Maps aren\'t mentioned in the passage.'},
        D:{text:'Rivers and glaciers carve identical valleys', explain:'The passage contrasts river-carved and glacier-carved valleys as different shapes.'}
      } },
    { id:'r65', passage:'p17', skill:'Inference', prompt:'The passage suggests Amara valued:', correct:'C',
      choices:{
        A:{text:'Winning at any cost', explain:'Winning isn\'t mentioned as her motivation in the passage.'},
        B:{text:"Her brother's approval above all", explain:'She asks for help understanding, not for his approval specifically.'},
        C:{text:'Doing the work herself, even if it meant more effort', explain:'She declines her brother\'s offer to simply build it for her and asks him to explain instead, choosing to do it herself.'},
        D:{text:'Avoiding failure entirely', explain:'The passage shows her failing three times before succeeding, showing she didn\'t avoid failure.'}
      } },
    { id:'r66', passage:'p17', skill:'Main idea', prompt:'This passage is mainly about:', correct:'B',
      choices:{
        A:{text:'A science fair competition between siblings', explain:'The siblings aren\'t competing against each other in the passage.'},
        B:{text:'A student choosing to learn rather than take an easy shortcut', explain:'The passage centers on Amara choosing to understand the problem rather than let her brother fix it for her.'},
        C:{text:'A volcano that failed to erupt', explain:'The volcano does erupt successfully at the science fair.'},
        D:{text:'A disagreement between siblings', explain:'No disagreement occurs in the passage.'}
      } },
    { id:'r67', passage:'p17', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'wobbly' most nearly means:", correct:'B',
      choices:{
        A:{text:'Sturdy and firm', explain:'This is the opposite of wobbly.'},
        B:{text:'Unstable and shaky', explain:'The passage describes a "wobbly cardboard support," suggesting something unstable that could still hold with care.'},
        C:{text:'Colorful', explain:'Color isn\'t what wobbly describes.'},
        D:{text:'Expensive', explain:'Cost isn\'t what wobbly describes.'}
      } },
    { id:'r68', passage:'p17', skill:'Detail', prompt:'According to the passage, what did Amara ask her brother to do instead of fixing it?', correct:'C',
      choices:{
        A:{text:'Build a new model from scratch', explain:'This contradicts her wanting to do it herself.'},
        B:{text:'Enter the competition for her', explain:'This isn\'t what she asks for in the passage.'},
        C:{text:'Explain what was going wrong', explain:'The passage states she "asked him to explain what was going wrong instead of fixing it himself."'},
        D:{text:'Buy new supplies', explain:'Supplies aren\'t mentioned as the issue in the passage.'}
      } },
    { id:'r69', passage:'p18', skill:'Main idea', prompt:'This passage is primarily about:', correct:'B',
      choices:{
        A:{text:'How Morse code was invented', explain:'Morse code\'s invention itself isn\'t explained, just its use.'},
        B:{text:'How the telegraph transformed long-distance communication', explain:'The passage traces the shift from weeks-long message delivery to near-instant telegraph communication.'},
        C:{text:'The history of newspapers', explain:'Newspapers are mentioned only as one beneficiary of the telegraph.'},
        D:{text:'How horses were used for mail delivery', explain:'This is mentioned only briefly as the older method being replaced.'}
      } },
    { id:'r70', passage:'p18', skill:'Detail', prompt:'According to the passage, how were telegraph messages translated?', correct:'A',
      choices:{
        A:{text:'Using Morse code', explain:'The passage states messages were "translated using Morse code."'},
        B:{text:'Using handwritten notes', explain:'This contradicts the electrical pulse method described in the passage.'},
        C:{text:'Using picture symbols', explain:'Picture symbols aren\'t mentioned in the passage.'},
        D:{text:'Using recorded voice', explain:'Voice recording isn\'t mentioned as part of telegraph technology in the passage.'}
      } },
    { id:'r71', passage:'p18', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'transmitted' most nearly means:", correct:'B',
      choices:{
        A:{text:'Destroyed', explain:'This contradicts the idea of a message successfully arriving.'},
        B:{text:'Sent or carried across a distance', explain:'The passage describes messages "transmitted as electrical pulses along a wire," meaning sent across distance.'},
        C:{text:'Translated exactly', explain:'Translation is a separate step (Morse code), not what transmitted describes.'},
        D:{text:'Ignored', explain:'This contradicts a message actually being delivered.'}
      } },
    { id:'r72', passage:'p18', skill:'Inference', prompt:'It can be inferred that before the telegraph, businesses and governments:', correct:'B',
      choices:{
        A:{text:'Had no need for fast communication', explain:'The passage implies the telegraph\'s speed was valuable, suggesting fast communication was indeed useful.'},
        B:{text:'Operated with a much slower sense of distance and time', explain:'The passage states the telegraph\'s speed "fundamentally changed how businesses, governments, and ordinary people thought about distance and time," implying a slower prior mindset.'},
        C:{text:'Used telegraphs occasionally', explain:'The passage describes life before the telegraph existed at all.'},
        D:{text:'Communicated instantly through other means', explain:'The passage describes messages taking weeks before the telegraph, not instant communication.'}
      } },
    { id:'r73', passage:'p19', skill:'Inference', prompt:'The passage suggests that a place starts to feel like home when:', correct:'B',
      choices:{
        A:{text:'You memorize its address', explain:'Memorizing an address isn\'t discussed in the passage.'},
        B:{text:'Your habits adjust to it without conscious effort', explain:'The passage shows Diego\'s hands automatically finding the right switch, without him thinking about it, as a sign of adjustment.'},
        C:{text:'You stop missing your old home entirely', explain:'This isn\'t discussed in the passage.'},
        D:{text:'You redecorate every room', explain:'Redecorating isn\'t mentioned in the passage.'}
      } },
    { id:'r74', passage:'p19', skill:'Main idea', prompt:'This passage is mainly about:', correct:'B',
      choices:{
        A:{text:'A family conflict over moving', explain:'No conflict occurs in the passage.'},
        B:{text:'Gradually adjusting to a new home without realizing it', explain:'The passage traces the family\'s habits slowly shifting to fit the new apartment.'},
        C:{text:'A funny mistake Diego made once', explain:'The passage describes a recurring pattern, not a single mistake.'},
        D:{text:'Renovating an apartment', explain:'Renovation isn\'t mentioned in the passage.'}
      } },
    { id:'r75', passage:'p19', skill:'Vocabulary in context', prompt:"As used in the passage, the phrase 'out of habit' most nearly means:", correct:'B',
      choices:{
        A:{text:'Deliberately and with full attention', explain:'This is nearly the opposite of acting out of habit.'},
        B:{text:'Automatically, from repeated past behavior', explain:'The passage describes Diego reaching for the switch without thinking, based on his old routine.'},
        C:{text:'By accident, unrelated to the past', explain:'This contradicts the passage\'s connection to his old apartment\'s layout.'},
        D:{text:'Nervously, from anxiety', explain:'Anxiety isn\'t suggested as the cause in the passage.'}
      } },
    { id:'r76', passage:'p19', skill:'Detail', prompt:"According to the passage, what did Diego's mother start doing the same way as him?", correct:'C',
      choices:{
        A:{text:'Reaching for the wrong light switch', explain:'This is what Diego does, not specifically what his mother is described doing.'},
        B:{text:'Walking to the wrong room', explain:'This isn\'t mentioned in the passage.'},
        C:{text:'Opening the wrong kitchen drawers', explain:'The passage states she "started doing the same thing with the kitchen drawers."'},
        D:{text:'Losing her keys', explain:'This isn\'t mentioned in the passage.'}
      } },
    { id:'r77', passage:'p20', skill:'Main idea', prompt:'This passage is primarily about:', correct:'B',
      choices:{
        A:{text:'Why rain falls from clouds', explain:'Rain formation itself isn\'t explained in the passage.'},
        B:{text:'How and why rainbows form', explain:'The passage explains the process of light bending through raindrops to create a rainbow.'},
        C:{text:'The history of color theory', explain:'Color theory history isn\'t discussed in the passage.'},
        D:{text:'How to photograph rainbows', explain:'Photography isn\'t mentioned in the passage.'}
      } },
    { id:'r78', passage:'p20', skill:'Detail', prompt:'According to the passage, what causes light to separate into different colors?', correct:'A',
      choices:{
        A:{text:'Each color bending at a slightly different angle inside raindrops', explain:'The passage states each color "bends at a slightly different angle" as it passes through raindrops.'},
        B:{text:'Wind speed', explain:'Wind isn\'t mentioned in the passage.'},
        C:{text:'Cloud thickness', explain:'Cloud thickness isn\'t discussed in the passage.'},
        D:{text:'Temperature changes', explain:'Temperature isn\'t mentioned as a cause in the passage.'}
      } },
    { id:'r79', passage:'p20', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'suspended' most nearly means:", correct:'B',
      choices:{
        A:{text:'Falling rapidly', explain:'This contradicts the image of raindrops staying in the air to bend light.'},
        B:{text:'Held floating in the air', explain:'The passage describes raindrops "suspended in the air," meaning held or floating there.'},
        C:{text:'Frozen solid', explain:'The passage discusses raindrops, not frozen precipitation.'},
        D:{text:'Evaporating quickly', explain:'Evaporation isn\'t discussed in the passage.'}
      } },
    { id:'r80', passage:'p20', skill:'Inference', prompt:'It can be inferred that two people standing apart see:', correct:'B',
      choices:{
        A:{text:'The exact same rainbow', explain:'This contradicts the passage\'s explanation that position affects what a viewer sees.'},
        B:{text:'Slightly different rainbows, since position affects what\'s visible', explain:'The passage states two people standing apart are "technically looking at two slightly different rainbows at the same time."'},
        C:{text:'No rainbow unless they stand together', explain:'This isn\'t discussed in the passage.'},
        D:{text:'A rainbow only visible to one of them', explain:'The passage indicates both would see a rainbow, just slightly different ones.'}
      } },
    { id:'r81', passage:'p21', skill:'Main idea', prompt:'This passage is primarily about:', correct:'B',
      choices:{
        A:{text:'How butterflies are born', explain:'Butterfly birth isn\'t discussed in the passage.'},
        B:{text:'The mysterious multigenerational migration of monarch butterflies', explain:'The passage explains how the migration spans multiple generations and remains partly unexplained.'},
        C:{text:'The dangers monarchs face in Mexico', explain:'Dangers aren\'t discussed in the passage.'},
        D:{text:'How to track butterfly populations', explain:'Tracking methods aren\'t discussed in the passage.'}
      } },
    { id:'r82', passage:'p21', skill:'Detail', prompt:'According to the passage, how far can monarchs travel during migration?', correct:'D',
      choices:{
        A:{text:'300 miles', explain:'This isn\'t the distance given in the passage.'},
        B:{text:'1,000 miles', explain:'This isn\'t the distance given in the passage.'},
        C:{text:'10,000 miles', explain:'This overstates the distance given in the passage.'},
        D:{text:'3,000 miles', explain:'The passage states monarchs travel "up to 3,000 miles" during migration.'}
      } },
    { id:'r83', passage:'p21', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'cluster' most nearly means:", correct:'B',
      choices:{
        A:{text:'Scatter widely', explain:'This is the opposite of cluster.'},
        B:{text:'Gather closely together', explain:'The passage describes butterflies clustering "by the millions" in the same forests, meaning gathering closely.'},
        C:{text:'Fly rapidly', explain:'Speed isn\'t what cluster describes.'},
        D:{text:'Disappear completely', explain:'This contradicts butterflies being present in large numbers.'}
      } },
    { id:'r84', passage:'p21', skill:'Inference', prompt:'It can be inferred that the monarch migration is remarkable mainly because:', correct:'A',
      choices:{
        A:{text:'No individual butterfly completes the journey it inherited knowledge of', explain:'The passage explains the journey spans three or four generations, with none completing the full round trip individually.'},
        B:{text:'It happens every single day', explain:'The migration is seasonal, not daily.'},
        C:{text:'Monarchs migrate alone', explain:'The passage describes traveling by the millions, not alone.'},
        D:{text:'Scientists fully understand how it works', explain:'The passage states scientists still debate exactly how this works.'}
      } },
    { id:'r85', passage:'p22', skill:'Inference', prompt:"The passage suggests the instructor's teaching approach emphasized:", correct:'B',
      choices:{
        A:{text:'Doing the work for the student', explain:'The instructor never touches the clay for her, contradicting this.'},
        B:{text:'Patience and gradual understanding over quick fixes', explain:'The instructor\'s advice to go slower and let understanding develop reflects patience rather than quick fixes.'},
        C:{text:'Strict rules about technique', explain:'No strict rules are described, just gentle guidance.'},
        D:{text:'Competition between students', explain:'No competition between students is mentioned.'}
      } },
    { id:'r86', passage:'p22', skill:'Main idea', prompt:'This passage is mainly about:', correct:'B',
      choices:{
        A:{text:'A pottery competition', explain:'No competition is mentioned in the passage.'},
        B:{text:'A student learning patience through repeated failure', explain:'The passage traces Naomi\'s crooked attempts leading eventually to understanding.'},
        C:{text:'A broken pottery wheel', explain:'The wheel isn\'t described as broken in the passage.'},
        D:{text:'An argument with an instructor', explain:'No argument occurs in the passage.'}
      } },
    { id:'r87', passage:'p22', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'lopsided' most nearly means:", correct:'B',
      choices:{
        A:{text:'Perfectly balanced', explain:'This is the opposite of lopsided.'},
        B:{text:'Uneven or crooked', explain:'The passage describes pieces collapsing into shapeless lumps, suggesting an uneven, crooked result.'},
        C:{text:'Extremely tall', explain:'Height isn\'t what lopsided describes.'},
        D:{text:'Brightly colored', explain:'Color isn\'t what lopsided describes.'}
      } },
    { id:'r88', passage:'p22', skill:'Detail', prompt:'According to the passage, what did the instructor tell Naomi?', correct:'C',
      choices:{
        A:{text:'Work faster', explain:'This contradicts the instructor\'s actual advice.'},
        B:{text:'Try a different clay', explain:'Changing materials isn\'t mentioned in the passage.'},
        C:{text:'Slower, let it come to you', explain:'The passage directly quotes the instructor: "Slower. Let it come to you."'},
        D:{text:'Give up on the wheel', explain:'The passage shows her continuing at the wheel, not giving up.'}
      } },
    { id:'r89', passage:'p23', skill:'Main idea', prompt:'This passage is primarily about:', correct:'B',
      choices:{
        A:{text:'How shepherds mark sheep', explain:'This is one detail from the passage, not its overall focus.'},
        B:{text:'The historical development of the modern pencil', explain:'The passage traces graphite\'s discovery through to the modern pencil shape.'},
        C:{text:'The dangers of lead poisoning', explain:'Lead poisoning isn\'t discussed in the passage.'},
        D:{text:'How wood is harvested', explain:'Wood harvesting isn\'t discussed in the passage.'}
      } },
    { id:'r90', passage:'p23', skill:'Detail', prompt:'According to the passage, what did shepherds originally use graphite for?', correct:'C',
      choices:{
        A:{text:'Writing letters', explain:'Writing isn\'t mentioned as the original use.'},
        B:{text:'Building tools', explain:'Tool-building isn\'t mentioned as the original use.'},
        C:{text:'Marking their sheep', explain:'The passage states shepherds "initially used [graphite] to mark their sheep."'},
        D:{text:'Trading with merchants', explain:'Trade isn\'t mentioned as the original use.'}
      } },
    { id:'r91', passage:'p23', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'holdover' most nearly means:", correct:'B',
      choices:{
        A:{text:'Something newly invented', explain:'This is the opposite of holdover.'},
        B:{text:'Something that persists from an earlier time', explain:'The passage describes the word "lead" as a holdover from graphite\'s early nickname, meaning something carried over from the past.'},
        C:{text:'A common misconception with no origin', explain:'The passage explains the term does have a specific historical origin.'},
        D:{text:'A scientific discovery', explain:'This isn\'t what holdover describes.'}
      } },
    { id:'r92', passage:'p23', skill:'Inference', prompt:"It can be inferred that calling pencil cores 'lead' is technically:", correct:'D',
      choices:{
        A:{text:'Accurate, since pencils contain lead', explain:'The passage states pencils have never actually contained lead.'},
        B:{text:'A recent marketing term', explain:'The passage describes this as a holdover from an old nickname, not a recent term.'},
        C:{text:'Based on the wood casing', explain:'The wood casing isn\'t related to the naming of "lead."'},
        D:{text:'Inaccurate, since pencils have never contained lead', explain:'The passage explains the material has never actually contained lead, calling the term a holdover from graphite\'s early nickname.'}
      } },
    { id:'r93', passage:'p24', skill:'Inference', prompt:'The passage suggests Malik chose to give the shoebox because:', correct:'C',
      choices:{
        A:{text:"He couldn't find the right words to say goodbye directly", explain:'This is close but the passage emphasizes he found another way to express meaning, not just an absence of words.'},
        B:{text:'He wanted to avoid seeing his friend before the move', explain:'The passage shows him showing up in person, contradicting avoidance.'},
        C:{text:'Words alone felt insufficient, so he found another way to express what their friendship meant', explain:'The passage shows him convinced nothing he could say would sound right, so he brought physical mementos instead.'},
        D:{text:'He was following a family tradition', explain:'No tradition is mentioned in the passage.'}
      } },
    { id:'r94', passage:'p24', skill:'Main idea', prompt:'This passage is mainly about:', correct:'C',
      choices:{
        A:{text:'A disagreement before a move', explain:'No disagreement occurs in the passage.'},
        B:{text:'Packing for a cross-country move', explain:'Packing itself isn\'t the focus of the passage.'},
        C:{text:'A meaningful goodbye between close friends', explain:'The passage centers on Malik\'s thoughtful gesture as a way of saying goodbye to his best friend.'},
        D:{text:'A forgotten movie', explain:'The forgotten movie ticket is a small detail, not the main focus.'}
      } },
    { id:'r95', passage:'p24', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'hollow' most nearly means:", correct:'B',
      choices:{
        A:{text:'Deeply meaningful', explain:'This is the opposite of hollow in this context.'},
        B:{text:'Empty or insincere-sounding', explain:'Malik worries anything he says would "sound hollow," meaning empty or insincere.'},
        C:{text:'Extremely loud', explain:'Volume isn\'t what hollow describes.'},
        D:{text:'Carefully planned', explain:'This contradicts the described anxiety about finding the right words.'}
      } },
    { id:'r96', passage:'p24', skill:'Detail', prompt:'According to the passage, what was inside the shoebox?', correct:'D',
      choices:{
        A:{text:'Money and gifts', explain:'Money isn\'t mentioned as part of the box\'s contents.'},
        B:{text:'A letter only', explain:'The box contained more than just a letter.'},
        C:{text:'Nothing, it was empty', explain:'The box clearly contained items, contradicting this.'},
        D:{text:'Ticket stubs, notes, and photos', explain:'The passage states the box was "full of ticket stubs, notes, and photos."'}
      } },
    { id:'r97', passage:'p25', skill:'Main idea', prompt:'This passage is primarily about:', correct:'B',
      choices:{
        A:{text:'How limestone is mined', explain:'Mining isn\'t discussed in the passage.'},
        B:{text:'How sinkholes form and why they can appear suddenly', explain:'The passage explains the underground erosion process and the sudden surface collapse it causes.'},
        C:{text:'How to build stable roads', explain:'Road construction isn\'t discussed in the passage.'},
        D:{text:'The dangers of underground caves', explain:'Caves specifically aren\'t discussed in the passage.'}
      } },
    { id:'r98', passage:'p25', skill:'Detail', prompt:'According to the passage, what type of rock is commonly dissolved to form sinkholes?', correct:'C',
      choices:{
        A:{text:'Granite', explain:'Granite isn\'t mentioned in the passage.'},
        B:{text:'Marble', explain:'Marble isn\'t mentioned in the passage.'},
        C:{text:'Limestone', explain:'The passage states sinkholes form when water dissolves "soluble rock, such as limestone."'},
        D:{text:'Sandstone', explain:'Sandstone isn\'t mentioned in the passage.'}
      } },
    { id:'r99', passage:'p25', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'abruptly' most nearly means:", correct:'B',
      choices:{
        A:{text:'Gradually and predictably', explain:'This is the opposite of abruptly.'},
        B:{text:'Suddenly and without warning', explain:'The passage describes the surface collapsing "abruptly," contrasted with the slow, invisible erosion beforehand.'},
        C:{text:'Safely and carefully', explain:'Safety isn\'t what abruptly describes.'},
        D:{text:'Rarely and occasionally', explain:'Frequency isn\'t what abruptly describes.'}
      } },
    { id:'r100', passage:'p25', skill:'Inference', prompt:'It can be inferred that regions with large limestone deposits are monitored because:', correct:'C',
      choices:{
        A:{text:'Limestone is valuable and often stolen', explain:'Theft isn\'t mentioned in the passage.'},
        B:{text:'Limestone attracts more rainfall', explain:'Rainfall attraction isn\'t mentioned in the passage.'},
        C:{text:'The underground erosion process makes sudden ground collapse more likely there', explain:'The passage explains the erosion process happens invisibly underground, making monitoring important to catch early signs of instability.'},
        D:{text:'Sinkholes only form in monitored areas', explain:'This reverses cause and effect — monitoring happens because of risk, not the other way around.'}
      } },
    { id:'r101', passage:'p26', skill:'Main idea', prompt:'This passage is primarily about:', correct:'B',
      choices:{
        A:{text:'How owls find food', explain:'Hunting methods beyond silent flight aren\'t the focus of the passage.'},
        B:{text:'How owl feathers enable silent flight, and its use in engineering', explain:'The passage explains the feather structure behind silent flight and how engineers apply the same principles.'},
        C:{text:'The dangers owls face from predators', explain:'Predators of owls aren\'t discussed in the passage.'},
        D:{text:'How birds evolved feathers generally', explain:'General feather evolution isn\'t the focus; the passage is specific to owls\' silent flight.'}
      } },
    { id:'r102', passage:'p26', skill:'Detail', prompt:'According to the passage, what does the comb-like fringe on owl feathers do?', correct:'D',
      choices:{
        A:{text:'Adds color to the feathers', explain:'Color isn\'t mentioned as the fringe\'s purpose.'},
        B:{text:'Helps the owl fly faster', explain:'Speed isn\'t mentioned as the fringe\'s purpose.'},
        C:{text:'Protects feathers from damage', explain:'Protection isn\'t mentioned as the fringe\'s purpose.'},
        D:{text:'Breaks up turbulent air passing over the wing', explain:'The passage states the fringe "breaks up the turbulent air passing over the wing."'}
      } },
    { id:'r103', passage:'p26', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'replicate' most nearly means:", correct:'B',
      choices:{
        A:{text:'Destroy', explain:'This is the opposite of replicate.'},
        B:{text:'Copy or reproduce', explain:'The passage describes engineers hoping to replicate nature\'s solution, meaning copy or reproduce it.'},
        C:{text:'Improve significantly', explain:'Improvement isn\'t specifically what replicate describes.'},
        D:{text:'Ignore', explain:'This contradicts actively trying to reproduce a solution.'}
      } },
    { id:'r104', passage:'p26', skill:'Inference', prompt:'It can be inferred that engineers study owl flight because:', correct:'A',
      choices:{
        A:{text:'Natural solutions to noise reduction could improve human technology', explain:'The passage describes engineers applying owl feather principles to quieter fans, turbines, and aircraft components.'},
        B:{text:'Owls are endangered and need protection', explain:'Conservation isn\'t mentioned in the passage.'},
        C:{text:'Owl feathers are more durable than synthetic materials', explain:'Durability isn\'t discussed in the passage.'},
        D:{text:'Owls fly faster than any aircraft', explain:'Speed comparison isn\'t discussed in the passage.'}
      } },
    { id:'r105', passage:'p27', skill:'Inference', prompt:"The passage suggests the captain's approach helped because:", correct:'B',
      choices:{
        A:{text:'It proved Jasmine was right all along', explain:'Neither original plan actually found the problem, so neither was proven fully right.'},
        B:{text:'It avoided an unproductive argument by testing ideas rather than debating them', explain:'The captain\'s suggestion to test both approaches sidestepped a potential argument and led directly to finding the real problem.'},
        C:{text:'It wasted valuable time before the competition', explain:'The passage shows this approach worked "with time to spare," not wasted time.'},
        D:{text:'It punished Marcus for his idea', explain:'Both teammates\' ideas were tested equally, not punished.'}
      } },
    { id:'r106', passage:'p27', skill:'Main idea', prompt:'This passage is mainly about:', correct:'C',
      choices:{
        A:{text:'A robotics competition loss', explain:'The passage doesn\'t describe the outcome of the competition itself.'},
        B:{text:'A rivalry between two teammates', explain:'Jasmine and Marcus disagree, but the passage doesn\'t frame this as a rivalry.'},
        C:{text:'A team resolving a disagreement through testing rather than argument', explain:'The passage centers on the captain\'s solution to the disagreement between Jasmine and Marcus.'},
        D:{text:"A robot malfunction that couldn't be fixed", explain:'The passage shows the malfunction being fixed successfully.'}
      } },
    { id:'r107', passage:'p27', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'scrap' most nearly means:", correct:'B',
      choices:{
        A:{text:'Improve slightly', explain:'This is nearly the opposite of scrap in context.'},
        B:{text:'Discard or abandon entirely', explain:'Jasmine wants to "scrap the arm design entirely," meaning abandon it completely.'},
        C:{text:'Sell for money', explain:'Selling isn\'t what scrap describes here.'},
        D:{text:'Repair carefully', explain:'This is the opposite of scrapping something.'}
      } },
    { id:'r108', passage:'p27', skill:'Detail', prompt:"According to the passage, what was actually causing the arm's problem?", correct:'C',
      choices:{
        A:{text:'A software bug', explain:'Software isn\'t mentioned as the cause in the passage.'},
        B:{text:'A cracked motor', explain:'A motor issue isn\'t mentioned in the passage.'},
        C:{text:'A loose wire', explain:'The passage states they found "a loose wire neither original plan would have caught."'},
        D:{text:'A dead battery', explain:'A battery issue isn\'t mentioned in the passage.'}
      } },
    { id:'r109', passage:'p28', skill:'Main idea', prompt:'This passage is primarily about:', correct:'B',
      choices:{
        A:{text:'How umbrellas are manufactured today', explain:'Modern manufacturing isn\'t the passage\'s focus.'},
        B:{text:'The historical shift of umbrellas from sun shade to common rain protection', explain:'The passage traces umbrellas from ancient sun-shade status symbols to affordable rain gear.'},
        C:{text:'Ancient Egyptian status symbols generally', explain:'The passage focuses specifically on umbrellas, not status symbols broadly.'},
        D:{text:'The invention of whalebone products', explain:'Whalebone is mentioned only as an early umbrella material.'}
      } },
    { id:'r110', passage:'p28', skill:'Detail', prompt:'According to the passage, what material were early rain umbrella ribs made from?', correct:'C',
      choices:{
        A:{text:'Steel', explain:'Steel is described as the later replacement material, not the early one.'},
        B:{text:'Plastic', explain:'Plastic isn\'t mentioned in the passage.'},
        C:{text:'Whalebone', explain:'The passage states early rain umbrellas were made with canvas "stretched over whalebone ribs."'},
        D:{text:'Bamboo', explain:'Bamboo isn\'t mentioned in the passage.'}
      } },
    { id:'r111', passage:'p28', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'exclusively' most nearly means:", correct:'B',
      choices:{
        A:{text:'Occasionally', explain:'This is nearly the opposite of exclusively.'},
        B:{text:'Only, to the exclusion of anything else', explain:'The passage states umbrellas were used "almost exclusively" for sun protection, meaning primarily or only for that purpose.'},
        C:{text:'Rarely', explain:'This is the opposite of exclusively.'},
        D:{text:'Partially', explain:'This is nearly the opposite of exclusively.'}
      } },
    { id:'r112', passage:'p28', skill:'Inference', prompt:'It can be inferred that umbrellas became widely affordable because:', correct:'D',
      choices:{
        A:{text:'Governments began giving them away for free', explain:'No government programs are mentioned in the passage.'},
        B:{text:'Whalebone became more abundant', explain:'The passage describes whalebone being replaced, not becoming more abundant.'},
        C:{text:'Rain became more common in Europe', explain:'Weather patterns aren\'t discussed as a factor in the passage.'},
        D:{text:'Steel ribs made them lighter and cheaper to produce', explain:'The passage states steel ribs replacing whalebone made umbrellas "light and affordable enough for ordinary people."'}
      } },
    { id:'r113', passage:'p29', skill:'Inference', prompt:"The passage suggests Malik's classmates reacted with:", correct:'B',
      choices:{
        A:{text:'Mockery and laughter', explain:'The passage states directly that "no one laughed."'},
        B:{text:'Quiet patience and respect', explain:'The passage states no one laughed when he paused and restarted, suggesting a respectful, patient reaction.'},
        C:{text:'Confusion about the topic', explain:'The passage focuses on his stutter, not classmates\' understanding of the topic.'},
        D:{text:'Complete indifference', explain:'The passage doesn\'t suggest the class was indifferent, just that they didn\'t laugh.'}
      } },
    { id:'r114', passage:'p29', skill:'Main idea', prompt:'This passage is mainly about:', correct:'A',
      choices:{
        A:{text:'A student overcoming a stutter during a presentation', explain:'The passage follows Malik\'s stutter interrupting him and his recovery to finish the presentation.'},
        B:{text:'A speech therapy session', explain:'Therapy is mentioned only briefly as background, not the main focus.'},
        C:{text:'A classroom argument', explain:'No argument occurs in the passage.'},
        D:{text:'A canceled presentation', explain:'The presentation is not canceled; Malik completes it.'}
      } },
    { id:'r115', passage:'p29', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'dreaded' most nearly means:", correct:'B',
      choices:{
        A:{text:'Looked forward to', explain:'This is the opposite of dreaded.'},
        B:{text:'Feared greatly', explain:'The passage describes Malik fearing his stutter would happen, matching "dreaded."'},
        C:{text:'Forgot completely', explain:'This contradicts him anticipating the exact moment it might happen.'},
        D:{text:'Enjoyed', explain:'This is the opposite of dreaded.'}
      } },
    { id:'r116', passage:'p29', skill:'Detail', prompt:'According to the passage, how many times had Malik rehearsed?', correct:'C',
      choices:{
        A:{text:'Ten', explain:'This isn\'t the number given in the passage.'},
        B:{text:'Twenty', explain:'This isn\'t the number given in the passage.'},
        C:{text:'Forty', explain:'The passage states he "had rehearsed his presentation forty times in the mirror."'},
        D:{text:'One hundred', explain:'This overstates the number given in the passage.'}
      } },
    { id:'r117', passage:'p30', skill:'Main idea', prompt:'This passage is primarily about:', correct:'B',
      choices:{
        A:{text:'How to make ice cream', explain:'Ice cream production isn\'t discussed in the passage.'},
        B:{text:'What causes brain freeze and how to avoid it', explain:'The passage explains the biological cause of brain freeze and offers ways to prevent it.'},
        C:{text:'The dangers of eating too fast', explain:'General eating dangers beyond brain freeze aren\'t discussed.'},
        D:{text:'How blood vessels are structured', explain:'Blood vessel structure in general isn\'t the passage\'s focus, just their reaction to cold.'}
      } },
    { id:'r118', passage:'p30', skill:'Detail', prompt:'According to the passage, what happens to blood vessels during brain freeze?', correct:'C',
      choices:{
        A:{text:'They shrink permanently', explain:'The passage describes a brief, temporary reaction, not a permanent one.'},
        B:{text:'They stop functioning entirely', explain:'This isn\'t described in the passage.'},
        C:{text:'They briefly constrict and then rapidly dilate', explain:'The passage states blood vessels "briefly constrict and then rapidly dilate again."'},
        D:{text:'They swell for several hours', explain:'The passage states the sensation usually fades within a minute or two, not hours.'}
      } },
    { id:'r119', passage:'p30', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'constrict' most nearly means:", correct:'B',
      choices:{
        A:{text:'Expand widely', explain:'This is the opposite of constrict.'},
        B:{text:'Narrow or tighten', explain:'The passage contrasts constricting with rapidly dilating (widening), so constrict means narrowing or tightening.'},
        C:{text:'Disappear completely', explain:'This contradicts blood vessels still being present and reacting.'},
        D:{text:'Strengthen', explain:'Strength isn\'t what constrict describes.'}
      } },
    { id:'r120', passage:'p30', skill:'Inference', prompt:'It can be inferred that brain freeze pain is felt in the head rather than the mouth because:', correct:'C',
      choices:{
        A:{text:'The brain is located near the mouth', explain:'Proximity isn\'t given as the explanation in the passage.'},
        B:{text:'The mouth has no pain receptors', explain:'This isn\'t stated in the passage and is not the given explanation.'},
        C:{text:'The brain misinterprets the source of the sensation', explain:'The passage states the brain "appears to misread" the sensation as coming from the head rather than the mouth.'},
        D:{text:'Cold always causes headaches directly', explain:'The passage explains a specific misreading mechanism, not a general rule about cold and headaches.'}
      } },
    { id:'r121', passage:'p31', skill:'Main idea', prompt:'This passage is primarily about:', correct:'C',
      choices:{
        A:{text:'How satellites are launched into orbit', explain:'Launching satellites isn\'t discussed in the passage.'},
        B:{text:'The history of radio communication', explain:'Radio history in general isn\'t discussed; the focus is GPS specifically.'},
        C:{text:'How GPS calculates location using satellite signals', explain:'The passage explains the timing and trilateration process behind GPS location calculation.'},
        D:{text:'How atomic clocks are built', explain:'Atomic clock construction isn\'t explained, just their role in timing accuracy.'}
      } },
    { id:'r122', passage:'p31', skill:'Detail', prompt:'According to the passage, how many satellites are needed at minimum for GPS to pinpoint location?', correct:'D',
      choices:{
        A:{text:'One', explain:'This isn\'t the number given in the passage.'},
        B:{text:'Two', explain:'This isn\'t the number given in the passage.'},
        C:{text:'Three', explain:'This isn\'t the number given in the passage.'},
        D:{text:'Four', explain:'The passage states location is found by "combining distance measurements from at least four different satellites."'}
      } },
    { id:'r123', passage:'p31', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'pinpoint' most nearly means:", correct:'D',
      choices:{
        A:{text:'Roughly guess', explain:'This is nearly the opposite of pinpoint.'},
        B:{text:'Completely lose', explain:'This is the opposite of pinpoint.'},
        C:{text:'Broadly estimate', explain:'This is nearly the opposite of pinpoint.'},
        D:{text:'Identify precisely', explain:'The passage describes calculating "its exact position," matching the precise meaning of pinpoint.'}
      } },
    { id:'r124', passage:'p31', skill:'Inference', prompt:'It can be inferred that GPS accuracy depends heavily on:', correct:'B',
      choices:{
        A:{text:'The color of the satellites', explain:'Color isn\'t mentioned in the passage.'},
        B:{text:'Extremely precise timing measurements', explain:'The passage states even a tiny timing error can throw off a reading, and satellites carry precise atomic clocks specifically for this reason.'},
        C:{text:"The receiver's physical size", explain:'Receiver size isn\'t discussed in the passage.'},
        D:{text:'The number of clouds in the sky', explain:'Weather conditions aren\'t discussed in the passage.'}
      } },
    { id:'r125', passage:'p32', skill:'Inference', prompt:"The passage suggests the instructor's calm response was meant to:", correct:'C',
      choices:{
        A:{text:'Rush Elena into deciding faster', explain:'The instructor\'s message was that she has time to think, not to rush.'},
        B:{text:'Punish her for hesitating', explain:'Nothing in the passage suggests punishment.'},
        C:{text:'Help her build confidence without panic', explain:'His calm advice that she has time to think, but not forever, reflects encouraging patience without inducing panic.'},
        D:{text:'Take control of difficult situations himself', explain:'The passage states he never took the wheel from her, contradicting this.'}
      } },
    { id:'r126', passage:'p32', skill:'Main idea', prompt:'This passage is mainly about:', correct:'B',
      choices:{
        A:{text:'A driving test failure', explain:'The passage shows her succeeding at the test, not failing.'},
        B:{text:'A student gaining confidence at intersections through patient practice', explain:'The passage follows Elena\'s progress from hesitant driver to confidently navigating a four-way stop.'},
        C:{text:'An argument with an instructor', explain:'No argument occurs in the passage.'},
        D:{text:'A traffic accident', explain:'No accident occurs in the passage.'}
      } },
    { id:'r127', passage:'p32', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'hesitation' most nearly means:", correct:'C',
      choices:{
        A:{text:'Confidence', explain:'This is the opposite of hesitation.'},
        B:{text:'Speed', explain:'Speed isn\'t what hesitation describes.'},
        C:{text:'A pause caused by uncertainty', explain:'The passage describes Elena hesitating "a beat too long" out of uncertainty at the intersection.'},
        D:{text:'Anger', explain:'Anger isn\'t what hesitation describes.'}
      } },
    { id:'r128', passage:'p32', skill:'Detail', prompt:'According to the passage, how long after the lessons did Elena take her road test?', correct:'C',
      choices:{
        A:{text:'One week', explain:'This isn\'t the timeframe given in the passage.'},
        B:{text:'Two weeks', explain:'This isn\'t the timeframe given in the passage.'},
        C:{text:'Three weeks', explain:'The passage states her road test was "three weeks later."'},
        D:{text:'One month', explain:'This overstates the timeframe given in the passage.'}
      } },
    { id:'r129', passage:'p33', skill:'Main idea', prompt:'This passage is primarily about:', correct:'C',
      choices:{
        A:{text:'Modern chocolate bar manufacturing', explain:'Modern manufacturing details aren\'t the focus; the passage covers the historical transformation.'},
        B:{text:'Aztec currency systems generally', explain:'Currency is mentioned only briefly regarding cacao beans specifically.'},
        C:{text:'The historical transformation of chocolate from a bitter drink to a sweet treat', explain:'The passage traces chocolate from a bitter Mesoamerican drink to today\'s sweet chocolate bars.'},
        D:{text:'How cacao beans are grown', explain:'Cacao cultivation methods aren\'t discussed in the passage.'}
      } },
    { id:'r130', passage:'p33', skill:'Detail', prompt:'According to the passage, what did the Maya and Aztec often mix into their cacao drink?', correct:'B',
      choices:{
        A:{text:'Sugar', explain:'The passage states sugar was added later by Europeans, not by the Maya and Aztec.'},
        B:{text:'Chili peppers and spices', explain:'The passage states the drink was "often mixed with chili peppers and spices rather than sugar."'},
        C:{text:'Milk', explain:'Milk isn\'t mentioned in the passage.'},
        D:{text:'Honey', explain:'Honey isn\'t mentioned in the passage.'}
      } },
    { id:'r131', passage:'p33', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'frothy' most nearly means:", correct:'D',
      choices:{
        A:{text:'Completely flat and still', explain:'This is the opposite of frothy.'},
        B:{text:'Extremely sweet', explain:'The passage describes this drink as bitter, not sweet, so this doesn\'t match.'},
        C:{text:'Ice cold', explain:'Temperature isn\'t what frothy describes.'},
        D:{text:'Full of bubbles or foam', explain:'Frothy describes a drink with a foamy, bubbly texture.'}
      } },
    { id:'r132', passage:'p33', skill:'Inference', prompt:'It can be inferred that early European chocolate differed from Mesoamerican chocolate mainly in:', correct:'B',
      choices:{
        A:{text:'Being served hot instead of cold', explain:'Temperature isn\'t discussed as the key difference in the passage.'},
        B:{text:'Being sweetened rather than bitter and spiced', explain:'The passage states sugar was added to suit European tastes, transforming the bitter, spiced drink into something sweeter.'},
        C:{text:'Being sold only to royalty', explain:'Royalty restrictions aren\'t discussed for the European version specifically.'},
        D:{text:'Being solid rather than a beverage originally', explain:'The passage states solid chocolate bars weren\'t developed until the mid-1800s, later than the initial European sweetening.'}
      } },
    { id:'r133', passage:'p34', skill:'Inference', prompt:"The passage suggests Owen's coach's advice about finishing strong was primarily about:", correct:'C',
      choices:{
        A:{text:'Always winning the race', explain:'Owen finishes third, not first, showing the advice wasn\'t specifically about winning.'},
        B:{text:'Ignoring his position entirely', explain:'The passage shows him aware of his position, not ignoring it.'},
        C:{text:'Maintaining good technique under pressure rather than panicking', explain:'The passage shows Owen keeping his stroke rate steady rather than panicking, trusting his practiced technique.'},
        D:{text:'Swimming as fast as physically possible regardless of form', explain:'The passage explicitly shows him avoiding a "sloppier, faster" stroke, contradicting this.'}
      } },
    { id:'r134', passage:'p34', skill:'Main idea', prompt:'This passage is mainly about:', correct:'B',
      choices:{
        A:{text:'Owen winning first place', explain:'The passage states he finished third, not first.'},
        B:{text:'Owen applying practiced discipline under pressure to improve his result', explain:'The passage follows Owen using his trained technique instead of panicking to improve his finishing position.'},
        C:{text:'A disagreement with his coach', explain:'No disagreement occurs in the passage.'},
        D:{text:'Owen quitting the swim team', explain:'The passage shows him competing and finishing the race, not quitting.'}
      } },
    { id:'r135', passage:'p34', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'drilled' most nearly means:", correct:'C',
      choices:{
        A:{text:'Punched a hole in', explain:'This is a literal meaning that doesn\'t fit the context of coaching advice.'},
        B:{text:'Ignored completely', explain:'This is the opposite of drilled in context.'},
        C:{text:'Repeatedly taught or emphasized', explain:'The passage describes the coach drilling one idea into Owen "all season," meaning repeated emphasis.'},
        D:{text:'Forgot quickly', explain:'This contradicts the idea being deeply ingrained through repetition.'}
      } },
    { id:'r136', passage:'p34', skill:'Detail', prompt:'According to the passage, what place did Owen finish in?', correct:'C',
      choices:{
        A:{text:'First', explain:'This contradicts the passage, which states he was not first.'},
        B:{text:'Second', explain:'This isn\'t the placement described in the passage.'},
        C:{text:'Third', explain:'The passage states he finished "not first, but ahead of where panic would have left him," in third place.'},
        D:{text:'Last', explain:'The passage shows him finishing ahead of at least one other swimmer.'}
      } },
    { id:'r137', passage:'p35', skill:'Main idea', prompt:'This passage is primarily about:', correct:'C',
      choices:{
        A:{text:'How thunderstorms are predicted', explain:'Prediction methods aren\'t discussed in the passage.'},
        B:{text:'The dangers of lightning strikes', explain:'Danger from lightning isn\'t the passage\'s focus.'},
        C:{text:'How lightning forms and produces thunder', explain:'The passage explains the charge buildup that creates lightning and the resulting thunder.'},
        D:{text:'How clouds are classified', explain:'Cloud classification isn\'t discussed in the passage.'}
      } },
    { id:'r138', passage:'p35', skill:'Detail', prompt:'According to the passage, where do negative charges typically collect in a storm cloud?', correct:'B',
      choices:{
        A:{text:'Near the top', explain:'The passage states positive charges gather near the top, not negative.'},
        B:{text:'Near the base', explain:'The passage states negative charges typically collect "near the base of the cloud."'},
        C:{text:'Evenly throughout', explain:'The passage describes an uneven distribution, not an even one.'},
        D:{text:'Outside the cloud', explain:'The passage describes charges collecting within the cloud, not outside it.'}
      } },
    { id:'r139', passage:'p35', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'discharge' most nearly means:", correct:'C',
      choices:{
        A:{text:'A gradual buildup', explain:'This is the opposite of discharge, which describes the release after buildup.'},
        B:{text:'A permanent absence', explain:'This contradicts an electrical event actually occurring.'},
        C:{text:'A sudden release of electrical energy', explain:'The passage describes lightning as "a sudden electrical discharge," matching this meaning.'},
        D:{text:'A slow leak', explain:'The passage describes a sudden event, not a slow one.'}
      } },
    { id:'r140', passage:'p35', skill:'Inference', prompt:'It can be inferred that thunder is caused by:', correct:'B',
      choices:{
        A:{text:'The sound of clouds colliding', explain:'Cloud collisions aren\'t mentioned in the passage.'},
        B:{text:'Rapidly expanding, superheated air', explain:'The passage states lightning heats the surrounding air dramatically, "causing the air to expand explosively and produce the sound known as thunder."'},
        C:{text:'Rainfall hitting the ground', explain:'Rainfall isn\'t identified as the cause of thunder in the passage.'},
        D:{text:'Wind moving through the storm', explain:'Wind isn\'t identified as the cause of thunder in the passage.'}
      } },
    { id:'r141', passage:'p36', skill:'Main idea', prompt:'This passage is primarily about:', correct:'C',
      choices:{
        A:{text:'How viruses spread between people', explain:'Transmission methods aren\'t discussed in the passage.'},
        B:{text:'The history of vaccination', explain:'Vaccine history isn\'t discussed; the passage explains the biological mechanism.'},
        C:{text:'How vaccines train the immune system to fight future infections', explain:'The passage explains how vaccines create antibodies and memory cells to prepare for future exposure.'},
        D:{text:'How antibodies are manufactured in labs', explain:'Lab manufacturing isn\'t discussed in the passage.'}
      } },
    { id:'r142', passage:'p36', skill:'Detail', prompt:'According to the passage, what do memory cells allow the immune system to do?', correct:'B',
      choices:{
        A:{text:'Prevent all future illness completely', explain:'The passage doesn\'t claim complete prevention, just a faster, stronger response.'},
        B:{text:'Respond more quickly and effectively to a later infection', explain:'The passage states memory cells allow the immune system "to respond far more quickly and effectively than it would during a first-time infection."'},
        C:{text:'Destroy healthy cells', explain:'This isn\'t mentioned in the passage and contradicts the immune system\'s described purpose.'},
        D:{text:'Create new vaccines', explain:'Vaccine creation isn\'t something memory cells do, according to the passage.'}
      } },
    { id:'r143', passage:'p36', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'pathogen' most nearly means:", correct:'B',
      choices:{
        A:{text:'A healthy cell', explain:'This is the opposite of pathogen.'},
        B:{text:'A disease-causing organism', explain:'The passage describes vaccines training immune systems to recognize a "virus or bacteria," which are pathogens.'},
        C:{text:'A type of medicine', explain:'A pathogen is what causes illness, not medicine used to treat it.'},
        D:{text:'An immune response', explain:'A pathogen is what triggers an immune response, not the response itself.'}
      } },
    { id:'r144', passage:'p36', skill:'Inference', prompt:'It can be inferred that multiple vaccine doses are used because:', correct:'C',
      choices:{
        A:{text:'A single dose is always ineffective', explain:'The passage doesn\'t claim a single dose is always ineffective, just that multiple doses can strengthen the response.'},
        B:{text:'Vaccines expire quickly', explain:'Expiration isn\'t discussed in the passage.'},
        C:{text:'Building a strong memory response can require repeated exposure over time', explain:'The passage states multiple doses help "the immune system build a stronger and longer-lasting memory response."'},
        D:{text:'Doctors want to charge more per treatment', explain:'This isn\'t suggested anywhere in the passage.'}
      } },
    { id:'r145', passage:'p37', skill:'Inference', prompt:"The passage suggests the cousin's approach to teaching was based on:", correct:'D',
      choices:{
        A:{text:"Letting Theo win easily to build his confidence", explain:'The passage shows Theo repeatedly losing, contradicting easy wins.'},
        B:{text:'Explaining the solution before Theo could attempt it', explain:'The cousin demonstrates the losing move but doesn\'t explain how to fix it in advance.'},
        C:{text:'Switching games frequently to keep things interesting', explain:'The passage shows the cousin refusing to switch games, insisting on repetition.'},
        D:{text:'Repeated exposure to the same challenge until it could be recognized independently', explain:'The cousin insists losing to the trap repeatedly is "the only way he\'d stop falling into it," which is exactly what happens.'}
      } },
    { id:'r146', passage:'p37', skill:'Main idea', prompt:'This passage is mainly about:', correct:'C',
      choices:{
        A:{text:'A chess tournament', explain:'No formal tournament is described in the passage.'},
        B:{text:'An argument between cousins', explain:'No argument occurs in the passage.'},
        C:{text:'A boy learning to recognize a pattern through repeated failure', explain:'The passage follows Theo repeatedly falling into the same trap until he finally recognizes and avoids it.'},
        D:{text:'Theo quitting chess', explain:'The passage shows Theo continuing to play, not quitting.'}
      } },
    { id:'r147', passage:'p37', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'doomed' most nearly means:", correct:'B',
      choices:{
        A:{text:'Guaranteed to succeed', explain:'This is the opposite of doomed.'},
        B:{text:'Guaranteed to fail or lose', explain:'The passage describes the move that "doomed him from the start," meaning it guaranteed his loss.'},
        C:{text:'Left undecided', explain:'This contradicts a guaranteed outcome, which is what doomed implies.'},
        D:{text:'Improved significantly', explain:'This is the opposite of doomed.'}
      } },
    { id:'r148', passage:'p37', skill:'Detail', prompt:'According to the passage, what did the cousin say after Theo successfully avoided the trap?', correct:'B',
      choices:{
        A:{text:'He offered a detailed correction', explain:'The passage states he offered no correction at all.'},
        B:{text:'He said "Again, but harder this time."', explain:'The passage directly quotes the cousin saying this after resetting the board.'},
        C:{text:'He ended the game early', explain:'The passage shows him resetting the board to continue, not ending early.'},
        D:{text:'He explained a new strategy', explain:'No new strategy explanation is described in the passage.'}
      } },
    { id:'r149', passage:'p38', skill:'Main idea', prompt:'This passage is primarily about:', correct:'C',
      choices:{
        A:{text:'How lenses are ground today', explain:'Modern lens-grinding isn\'t discussed in the passage.'},
        B:{text:'The anatomy of the human eye', explain:'Eye anatomy isn\'t discussed in the passage.'},
        C:{text:'The historical shift of eyeglasses from a rare luxury to a common tool', explain:'The passage traces eyeglasses from expensive, custom-made items to widely available tools.'},
        D:{text:'Famous scholars who wore glasses', explain:'No specific scholars are named in the passage.'}
      } },
    { id:'r150', passage:'p38', skill:'Detail', prompt:'According to the passage, when were the earliest eyeglasses developed?', correct:'B',
      choices:{
        A:{text:'Late 1100s', explain:'This isn\'t the date given in the passage.'},
        B:{text:'Late 1200s', explain:'The passage states the earliest eyeglasses were "developed in Italy during the late 1200s."'},
        C:{text:'Early 1500s', explain:'This isn\'t the date given for the earliest eyeglasses.'},
        D:{text:'Mid-1800s', explain:'This is when manufacturing improved, not when eyeglasses were first developed.'}
      } },
    { id:'r151', passage:'p38', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'awkwardly' most nearly means:", correct:'B',
      choices:{
        A:{text:'Comfortably', explain:'This is the opposite of awkwardly.'},
        B:{text:'In a clumsy or unsteady way', explain:'The passage describes the glasses being "balanced awkwardly on the bridge of the nose," meaning unsteadily.'},
        C:{text:'Beautifully', explain:'This is unrelated to the clumsy, unsteady quality awkwardly describes.'},
        D:{text:'Securely', explain:'This is nearly the opposite of awkwardly in this context.'}
      } },
    { id:'r152', passage:'p38', skill:'Inference', prompt:'It can be inferred that eyeglasses became widely available because:', correct:'C',
      choices:{
        A:{text:'Scholars demanded better vision', explain:'Demand from scholars isn\'t identified as the cause in the passage.'},
        B:{text:'Clergy required them for reading', explain:'This isn\'t identified as the cause of wider availability in the passage.'},
        C:{text:'Manufacturing improvements during the Industrial Revolution lowered costs', explain:'The passage states manufacturing techniques improved during the Industrial Revolution, making glasses "affordable and widely available."'},
        D:{text:'Nose bridges became more common', explain:'This isn\'t mentioned in the passage.'}
      } },
    { id:'r153', passage:'p39', skill:'Inference', prompt:"The passage suggests the teacher's response was intended to:", correct:'D',
      choices:{
        A:{text:'Blame Mia for the failed audition', explain:'The passage shows no blame, just a shift in focus.'},
        B:{text:'Convince Mia the judges made a mistake', explain:'The passage states the teacher didn\'t offer comforting words about the judges, contradicting this.'},
        C:{text:'End the lessons early', explain:'The passage shows the teacher continuing to work with Mia, not ending lessons.'},
        D:{text:'Identify the real issue rather than dismiss the setback', explain:'The teacher has Mia replay the piece to show the music itself wasn\'t the problem, redirecting focus to the shaking.'}
      } },
    { id:'r154', passage:'p39', skill:'Main idea', prompt:'This passage is mainly about:', correct:'C',
      choices:{
        A:{text:'A failed audition ending a musical career', explain:'The passage shows the teacher continuing to work with Mia, not her career ending.'},
        B:{text:"A disagreement between Mia and her teacher", explain:'No disagreement occurs in the passage.'},
        C:{text:'A teacher helping a student identify the true source of a setback', explain:'The passage follows the teacher redirecting focus from the music itself to Mia\'s nerves.'},
        D:{text:"A judge's unfair scoring", explain:'The fairness of the judges isn\'t addressed in the passage.'}
      } },
    { id:'r155', passage:'p39', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'fumbled' most nearly means:", correct:'B',
      choices:{
        A:{text:'Performed flawlessly', explain:'This is the opposite of fumbled.'},
        B:{text:'Made clumsy mistakes while performing', explain:'The passage describes Mia fumbling through a piece due to her shaking hands, meaning she made mistakes.'},
        C:{text:'Refused to play', explain:'The passage shows her attempting to play, not refusing.'},
        D:{text:'Finished early', explain:'Timing isn\'t what fumbled describes.'}
      } },
    { id:'r156', passage:'p39', skill:'Detail', prompt:'According to the passage, what did the teacher ask Mia to do?', correct:'B',
      choices:{
        A:{text:'Write a letter to the judges', explain:'This isn\'t mentioned in the passage.'},
        B:{text:'Play the same piece again in front of her', explain:'The passage states the teacher "asked Mia to play the same piece, right there, in front of just the two of them."'},
        C:{text:'Choose a new, easier piece', explain:'The passage shows her playing the same piece, not a new one.'},
        D:{text:'Take a break from music entirely', explain:'The passage shows continued engagement with music, not a break.'}
      } },
    { id:'r157', passage:'p40', skill:'Main idea', prompt:'This passage is primarily about:', correct:'C',
      choices:{
        A:{text:'How deserts form', explain:'Desert formation isn\'t discussed in the passage.'},
        B:{text:'The dangers of extreme heat', explain:'Danger from heat isn\'t the passage\'s focus.'},
        C:{text:'How mirages are created by bending light', explain:'The passage explains how temperature differences bend light to create the illusion of a mirage.'},
        D:{text:'How road surfaces are constructed', explain:'Road construction isn\'t discussed in the passage.'}
      } },
    { id:'r158', passage:'p40', skill:'Detail', prompt:'According to the passage, what causes light to bend near a hot road surface?', correct:'B',
      choices:{
        A:{text:'Wind currents', explain:'Wind isn\'t identified as the cause in the passage.'},
        B:{text:'Layers of air with different temperatures', explain:'The passage states light bends "as it passes through layers of air with different temperatures."'},
        C:{text:'Reflections from clouds', explain:'Clouds aren\'t mentioned as the cause in the passage.'},
        D:{text:'The color of the pavement', explain:'Pavement color isn\'t identified as the cause in the passage.'}
      } },
    { id:'r159', passage:'p40', skill:'Vocabulary in context', prompt:"As used in the passage, the word 'illusion' most nearly means:", correct:'B',
      choices:{
        A:{text:'A physical object', explain:'This contradicts an illusion being something that isn\'t actually there.'},
        B:{text:'A false or misleading appearance', explain:'The passage describes a mirage as creating "the illusion of a reflective, water-like surface," meaning a false appearance.'},
        C:{text:'A scientific measurement', explain:'This isn\'t what illusion describes in the passage.'},
        D:{text:'A permanent structure', explain:'This contradicts the temporary, false nature of an illusion.'}
      } },
    { id:'r160', passage:'p40', skill:'Inference', prompt:'It can be inferred that a "puddle" seen on a hot highway is actually:', correct:'C',
      choices:{
        A:{text:'Real water that evaporates quickly', explain:'The passage states no actual liquid is present on the road.'},
        B:{text:'A reflection of nearby cars', explain:'Cars aren\'t mentioned as the source of the reflection in the passage.'},
        C:{text:'A bent reflection of the sky, not actual liquid', explain:'The passage states the "puddle" is "actually a distorted reflection of the sky," not real water.'},
        D:{text:'An optical device used by road engineers', explain:'No device is involved; this is a natural optical effect.'}
      } }
  ]
};
