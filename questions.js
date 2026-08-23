// Original, style-matched HSPT practice questions — not reproductions of any real exam.
// Schema: every choice has its own explanation, so review feedback is specific to
// whichever answer the student actually picked, not just the correct one.
// choices: { LETTER: { text, explain } }, correct: 'LETTER'

const PASSAGES = {
  p1: `Honeybees communicate the location of food sources to other members of their hive through a movement known as the waggle dance. By moving in a figure-eight pattern and vibrating its body, a bee can indicate both the direction and distance of a flower patch relative to the sun. Scientists have found that the angle of the dance corresponds to the angle between the sun and the food source, while the duration of the waggle portion indicates how far away the source lies. This remarkable form of communication allows a hive to efficiently direct large numbers of foragers to the most productive locations without any single bee needing to guide the others directly.`,
  p2: `Elena had practiced the same eight measures for nearly an hour, her bow arm aching and her patience thinning. Her teacher, however, showed no sign of ending the lesson. "Again," he said simply, not unkindly, but with the quiet certainty of someone who has taught this passage a hundred times before. Elena set her jaw, lifted the violin, and began once more. This time, on the fifth measure, something shifted — the note rang clear and full, exactly as it was meant to. Her teacher's expression did not change, but he nodded once. It was enough.`,
  p3: `Some of the most remote islands on Earth were never connected to any continent. Instead, they formed directly from the ocean floor as volcanic activity built up layers of cooled lava over thousands of years. As magma rises through a weak point in the earth's crust, it cools upon contact with seawater, gradually forming rock. Repeated eruptions over time can raise this rock above the surface, creating new land. Because these islands rise independently from the sea rather than breaking off a larger landmass, the plants and animals that eventually populate them must arrive by wind, water, or wing, making their ecosystems especially unique.`,
  p4: `Marcus had fallen off his skateboard so many times that the scrape on his elbow had become a familiar sight. His older sister, watching from the porch, called out the same advice she always did: "Bend your knees, look ahead, not down." He rolled his eyes, certain he already knew this. But this time, as he pushed off down the driveway, he tried it anyway — knees bent, eyes fixed on the tree at the end of the path, not on his feet. The board wobbled once, twice, and then, to his own surprise, steadied beneath him. He did not look down at his elbow. He did not look down at all.`,
  p5: `Before the mid-1400s, books in Europe were copied by hand, a process so slow that a single volume could take months to complete. This made books rare and expensive, limiting reading to a small number of wealthy or religious institutions. The introduction of the movable-type printing press changed this dramatically. By arranging individual metal letters that could be reused for different pages, printers could produce dozens of copies of a text in the time it once took to copy a single page by hand. Within decades, printed books spread across Europe, making written knowledge available to a far wider audience than ever before.`
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
      } }
  ]
};
