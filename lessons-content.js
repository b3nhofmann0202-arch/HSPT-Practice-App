// Lessons content — a starter set covering the skills tested in the practice bank.
// Each lesson: teaching content + a 2-question comprehension check.
// skillTags map to the "skill" field used in questions.js, so missed practice-test
// questions can link straight to the matching lesson.

const LESSONS = [

  // ---------------- VERBAL ----------------
  { id:'lv1', section:'verbal', title:'Synonyms & Antonyms', skillTags:['Synonyms','Antonyms'],
    content:`<p>Verbal skills questions often ask you to identify a word's <strong>synonym</strong> (a word with the same meaning) or <strong>antonym</strong> (a word with the opposite meaning).</p>
      <p><strong>Key strategy:</strong> think of your own definition of the word first, then look for the choice that matches it — don't just scan for a word that "sounds similar," since test writers often include a decoy that sounds related but means something different.</p>
      <p>For antonym questions, watch for choices that are actually <em>synonyms</em> of the original word — that's the most common trap.</p>
      <p><strong>Example:</strong> DILIGENT (synonym) &rarr; hardworking. FRUGAL (antonym) &rarr; wasteful, not "thrifty," which is a synonym trap.</p>`,
    quiz:[
      { prompt:'Which word means the same as VERBOSE?', correct:'A',
        choices:{ A:{text:'Wordy', explain:'Verbose means using more words than necessary, matching wordy.'}, B:{text:'Silent', explain:'Silent describes no speech at all, not excessive speech.'}, C:{text:'Brief', explain:'Brief is nearly the opposite of verbose.'}, D:{text:'Clear', explain:'Clear describes understandability, not word count.'} } },
      { prompt:'Which word is most nearly opposite to GENEROUS?', correct:'B',
        choices:{ A:{text:'Kind', explain:'Kind is related to generous, not its opposite.'}, B:{text:'Stingy', explain:'Generous means willing to give, so stingy, unwilling to give, is the opposite.'}, C:{text:'Wealthy', explain:'Wealth describes money owned, not willingness to share it.'}, D:{text:'Charitable', explain:'Charitable is closely related to generous, not its opposite.'} } }
    ] },
  { id:'lv2', section:'verbal', title:'Verbal Classification', skillTags:['Verbal classification'],
    content:`<p>These questions give you four words and ask which one does not belong. The trick is figuring out the specific category the other three share — it's often narrower than it first appears.</p>
      <p><strong>Strategy:</strong> identify what three of the four have in common first, rather than trying to spot the "odd" one directly. Common categories include type of animal, type of object, or level of intensity (quiet vs. loud).</p>
      <p><strong>Example:</strong> Whisper, Shout, Murmur, Mutter &rarr; three describe quiet speech; Shout is the loud outlier.</p>`,
    quiz:[
      { prompt:'Which does NOT belong: Sparrow, Robin, Eagle, Butterfly?', correct:'D',
        choices:{ A:{text:'Sparrow', explain:'A bird, fitting the shared category.'}, B:{text:'Robin', explain:'Also a bird.'}, C:{text:'Eagle', explain:'Also a bird.'}, D:{text:'Butterfly', explain:'Unlike the others, a butterfly is an insect, not a bird.'} } },
      { prompt:'Which does NOT belong: Joy, Sorrow, Anger, Chair?', correct:'D',
        choices:{ A:{text:'Joy', explain:'An emotion, fitting the shared category.'}, B:{text:'Sorrow', explain:'Also an emotion.'}, C:{text:'Anger', explain:'Also an emotion.'}, D:{text:'Chair', explain:'Unlike the others, a chair is an object, not an emotion.'} } }
    ] },
  { id:'lv3', section:'verbal', title:'Analogies', skillTags:['Analogies'],
    content:`<p>Analogy questions test whether you can identify the relationship between a pair of words and apply that same relationship to a new pair.</p>
      <p><strong>Strategy:</strong> turn the first pair into a sentence, like "A ___ is a young ___" or "A ___ is used to ___," then apply that same sentence structure to the answer choices.</p>
      <p><strong>Example:</strong> Puppy is to Dog as Cub is to ___. Sentence: "A puppy is a young dog." Applying the pattern: "A cub is a young ___" &rarr; Bear.</p>`,
    quiz:[
      { prompt:'Glove is to hand as sock is to ___.', correct:'A',
        choices:{ A:{text:'Foot', explain:'A glove covers a hand; a sock covers a foot, following the same pattern.'}, B:{text:'Shoe', explain:'A shoe is worn over a sock, not the body part it covers.'}, C:{text:'Cold', explain:'A quality, not a body part.'}, D:{text:'Winter', explain:'A season, not a body part.'} } },
      { prompt:'Teacher is to classroom as pilot is to ___.', correct:'B',
        choices:{ A:{text:'Airport', explain:'An airport is a larger location, not the specific workspace, unlike the specific "classroom."'}, B:{text:'Airplane', explain:'A teacher works in a classroom; a pilot works in an airplane, following the same pattern.'}, C:{text:'Passenger', explain:'A passenger is who a pilot transports, not the workspace.'}, D:{text:'Sky', explain:'Too broad — the pattern calls for the specific vehicle, like classroom is specific.'} } }
    ] },
  { id:'lv4', section:'verbal', title:'Syllogisms', skillTags:['Syllogisms'],
    content:`<p>Syllogism questions give you two statements (premises) and ask what must logically follow. The key is to rely only on what is directly stated — not outside knowledge or assumptions.</p>
      <p>Common traps:</p>
      <ul>
        <li>Reversing a statement ("All A are B" does NOT mean "All B are A")</li>
        <li>Assuming full overlap when only "some" is stated</li>
        <li>Concluding something the premises don't actually guarantee</li>
      </ul>
      <p><strong>Strategy:</strong> if the premises don't force one specific conclusion, the answer is usually "no valid conclusion can be drawn."</p>`,
    quiz:[
      { prompt:'All cats are felines. All felines are mammals. Therefore:', correct:'A',
        choices:{ A:{text:'All cats are mammals', explain:'Since all cats are felines, and all felines are mammals, all cats must be mammals.'}, B:{text:'All mammals are cats', explain:'This reverses the logic without support.'}, C:{text:'All felines are cats', explain:'This reverses the first statement without support.'}, D:{text:'No conclusion can be drawn', explain:'A conclusion can actually be drawn here.'} } },
      { prompt:'Some students play soccer. All soccer players wear cleats. Therefore:', correct:'B',
        choices:{ A:{text:'All students wear cleats', explain:'Only "some" students play soccer, so this overstates the conclusion.'}, B:{text:'Some students wear cleats', explain:'Since some students play soccer, and all soccer players wear cleats, at least those students wear cleats.'}, C:{text:'No students wear cleats', explain:'This contradicts the given information directly.'}, D:{text:'All cleat-wearers are students', explain:'This reverses the logic — plenty of non-students could wear cleats too.'} } }
    ] },

  // ---------------- QUANTITATIVE ----------------
  { id:'lq1', section:'quant', title:'Number Series', skillTags:['Number series'],
    content:`<p>Number series questions ask you to find the pattern in a sequence and predict the next term. Common pattern types:</p>
      <ul>
        <li>Constant addition or subtraction</li>
        <li>Constant multiplication or division</li>
        <li>Changing gaps (the amount added/subtracted itself increases or decreases)</li>
        <li>Alternating operations (the pattern switches between two operations)</li>
        <li>Special sequences (perfect squares, or each term being the sum of the two before it)</li>
      </ul>
      <p><strong>Strategy:</strong> write out the differences (or ratios) between consecutive terms first — that usually reveals the pattern immediately.</p>`,
    quiz:[
      { prompt:'6, 12, 24, 48, ___', correct:'B',
        choices:{ A:{text:'56', explain:'Doesn\u2019t match doubling.'}, B:{text:'96', explain:'Each term doubles: 48x2=96.'}, C:{text:'72', explain:'Doesn\u2019t match doubling correctly.'}, D:{text:'60', explain:'Doesn\u2019t match doubling.'} } },
      { prompt:'20, 17, 14, 11, ___', correct:'B',
        choices:{ A:{text:'9', explain:'Doesn\u2019t match subtracting 3 each time.'}, B:{text:'8', explain:'Each term subtracts 3: 11-3=8.'}, C:{text:'7', explain:'Overshoots the -3 pattern.'}, D:{text:'10', explain:'Doesn\u2019t match subtracting 3.'} } }
    ] },
  { id:'lq2', section:'quant', title:'Quantitative Comparison', skillTags:['Quantitative comparison'],
    content:`<p>These questions ask you to compare two values (Column A and Column B) and decide which is greater, whether they're equal, or whether it can't be determined.</p>
      <p><strong>Strategy:</strong> convert both values to the same form (both decimals, or both fractions) before comparing. For exponents, a bigger base doesn't always mean a bigger result — a bigger exponent often matters more.</p>
      <p>Only choose "cannot be determined" when the values actually depend on an unknown variable. If both sides are fixed numbers, a comparison is always possible.</p>`,
    quiz:[
      { prompt:'Compare: Column A = 2/3   Column B = 0.65', correct:'A',
        choices:{ A:{text:'Column A is greater', explain:'2/3 is approximately 0.667, which is greater than 0.65.'}, B:{text:'Column B is greater', explain:'0.65 is actually less than 2/3.'}, C:{text:'Equal', explain:'0.667 and 0.65 are not equal.'}, D:{text:'Cannot be determined', explain:'Both are fixed values, so a comparison is possible.'} } },
      { prompt:'Compare: Column A = 4 cubed   Column B = 8 squared', correct:'C',
        choices:{ A:{text:'Column A is greater', explain:'4 cubed is 64, which is not greater than Column B.'}, B:{text:'Column B is greater', explain:'8 squared is also 64, not greater than Column A.'}, C:{text:'Equal', explain:'4 cubed = 64 and 8 squared = 64, so they are equal.'}, D:{text:'Cannot be determined', explain:'Both evaluate to fixed numbers, so a comparison is possible.'} } }
    ] },

  // ---------------- MATHEMATICS ----------------
  { id:'lm1', section:'math', title:'Algebra Basics', skillTags:['Algebra'],
    content:`<p>Algebra questions ask you to solve for an unknown variable, usually x. The core strategy is to isolate the variable by undoing operations in reverse order: first undo addition/subtraction, then multiplication/division, distributing parentheses first if needed.</p>
      <p>Whatever you do to one side of the equation, you must do to the other side too, to keep it balanced.</p>
      <p><strong>Example:</strong> 3x + 5 = 20 &rarr; subtract 5 from both sides (3x = 15) &rarr; divide both sides by 3 (x = 5).</p>`,
    quiz:[
      { prompt:'Solve for x: 5x - 3 = 17', correct:'B',
        choices:{ A:{text:'3', explain:'Doesn\u2019t match the correct steps.'}, B:{text:'4', explain:'Add 3 to both sides (5x=20), then divide by 5 (x=4).'}, C:{text:'5', explain:'Close, but doesn\u2019t match dividing 20 by 5 correctly.'}, D:{text:'7', explain:'Overshoots the correct value.'} } },
      { prompt:'Simplify: 3(x - 4) + 2x', correct:'A',
        choices:{ A:{text:'5x - 12', explain:'Distribute first: 3x-12+2x, then combine like terms: 5x-12.'}, B:{text:'5x - 4', explain:'This drops part of the distributed constant.'}, C:{text:'3x - 12', explain:'This misses adding the 2x term.'}, D:{text:'5x + 12', explain:'This changes the sign of the constant incorrectly.'} } }
    ] },
  { id:'lm2', section:'math', title:'Percentages & Fractions', skillTags:['Percentages','Fractions'],
    content:`<p>Percentage problems usually ask you to find a portion of a number, or find the original number given a percentage. Convert the percent to a decimal (divide by 100) before multiplying.</p>
      <p>For fraction addition or subtraction, find a common denominator first — you can't combine fractions with different denominators directly.</p>
      <p><strong>Example:</strong> 15% of 200 &rarr; 0.15 x 200 = 30. To reverse a discount (like $80 after a 20% discount), divide by the remaining percentage as a decimal: 80 / 0.8 = $100 original price.</p>`,
    quiz:[
      { prompt:'What is 40% of 90?', correct:'B',
        choices:{ A:{text:'32', explain:'Doesn\u2019t match 0.4x90.'}, B:{text:'36', explain:'0.4 x 90 = 36.'}, C:{text:'40', explain:'Doesn\u2019t match the correct product.'}, D:{text:'45', explain:'Overshoots the correct product.'} } },
      { prompt:'What is 2/5 + 1/4?', correct:'B',
        choices:{ A:{text:'3/9', explain:'Adding numerators and denominators directly isn\u2019t how fractions are added.'}, B:{text:'13/20', explain:'Using a common denominator of 20: 2/5=8/20 and 1/4=5/20, so 8/20+5/20=13/20.'}, C:{text:'3/20', explain:'Doesn\u2019t match the correct sum with a common denominator.'}, D:{text:'1/2', explain:'Close, but doesn\u2019t match the exact fraction sum.'} } }
    ] },
  { id:'lm3', section:'math', title:'Geometry Formulas', skillTags:['Geometry'],
    content:`<p>A handful of formulas cover most HSPT geometry questions:</p>
      <ul>
        <li>Rectangle: Area = length x width, Perimeter = 2(length + width)</li>
        <li>Square: Area = side<sup>2</sup>, Perimeter = 4 x side</li>
        <li>Triangle: Area = 1/2 x base x height</li>
        <li>Circle: Circumference = 2 x pi x radius, Area = pi x radius<sup>2</sup></li>
        <li>Cube: Volume = side<sup>3</sup></li>
      </ul>
      <p><strong>Strategy:</strong> identify which formula the question is actually asking for (area vs. perimeter vs. volume) before plugging in numbers — mixing these up is the most common mistake.</p>`,
    quiz:[
      { prompt:'What is the area of a triangle with base 8 and height 5?', correct:'B',
        choices:{ A:{text:'13', explain:'That\u2019s the sum of base and height, not area.'}, B:{text:'20', explain:'Area = 0.5 x 8 x 5 = 20.'}, C:{text:'40', explain:'That\u2019s the area of a rectangle with the same dimensions, not a triangle, which is half that.'}, D:{text:'26', explain:'Doesn\u2019t match the triangle area formula.'} } },
      { prompt:'What is the circumference of a circle with radius 10? (use pi \u2248 3.14)', correct:'B',
        choices:{ A:{text:'31.4', explain:'That\u2019s pi x radius, missing the factor of 2.'}, B:{text:'62.8', explain:'Circumference = 2 x pi x radius = 2 x 3.14 x 10 = 62.8.'}, C:{text:'314', explain:'That\u2019s actually the area (pi x radius squared), not circumference.'}, D:{text:'15.7', explain:'That\u2019s half of pi x radius, far short of the full circumference.'} } }
    ] },
  { id:'lm4', section:'math', title:'Word Problems', skillTags:['Word problems'],
    content:`<p>Word problems test whether you can translate a real-world scenario into a math expression.</p>
      <ol>
        <li>Identify what the question is actually asking for (the unknown).</li>
        <li>Translate key phrases into operations: "sum" = add, "difference" = subtract, "product" = multiply, "per" = divide.</li>
        <li>Write an equation using a variable for the unknown, then solve.</li>
      </ol>
      <p>For consecutive integer problems, represent them as n, n+1, n+2. For rate problems, remember rate = amount &divide; time.</p>`,
    quiz:[
      { prompt:'The sum of two consecutive even integers is 34. What is the larger integer?', correct:'C',
        choices:{ A:{text:'16', explain:'That\u2019s the smaller integer, not the larger one.'}, B:{text:'17', explain:'34/2=17, but consecutive even integers can\u2019t include an odd number like 17.'}, C:{text:'18', explain:'Let n and n+2 be the integers: 2n+2=34, so n=16, meaning the larger integer is 18.'}, D:{text:'19', explain:'Overshoots the correct larger integer.'} } },
      { prompt:'A car travels 150 miles in 3 hours. At the same rate, how long would it take to travel 250 miles?', correct:'B',
        choices:{ A:{text:'4 hours', explain:'Doesn\u2019t match the correct proportional scaling.'}, B:{text:'5 hours', explain:'Rate = 150/3 = 50 mph. Time = 250/50 = 5 hours.'}, C:{text:'6 hours', explain:'Overshoots the correct time.'}, D:{text:'7 hours', explain:'Overshoots the correct time by even more.'} } }
    ] },
  { id:'lm5', section:'math', title:'Exponents & Number Properties', skillTags:['Exponents','Number properties'],
    content:`<p>Exponent expressions like x<sup>2</sup> mean multiplying the base by itself the number of times shown by the exponent — not multiplying the base by the exponent.</p>
      <p>Number properties questions often ask about the <strong>least common multiple</strong> (LCM, the smallest number divisible by both) or the <strong>greatest common factor</strong> (GCF, the largest number that divides both evenly).</p>
      <p><strong>Example:</strong> 3<sup>2</sup> means 3 x 3 = 9, not 3 x 2 = 6. LCM of 4 and 6: list multiples (4, 8, 12...) and (6, 12, 18...) — the smallest shared one is 12.</p>`,
    quiz:[
      { prompt:'What is 4 cubed?', correct:'C',
        choices:{ A:{text:'12', explain:'That treats the exponent as multiplication (4x3), not repeated multiplication.'}, B:{text:'16', explain:'That\u2019s 4 squared, not 4 cubed.'}, C:{text:'64', explain:'4 x 4 x 4 = 64.'}, D:{text:'48', explain:'Doesn\u2019t match the correct repeated multiplication.'} } },
      { prompt:'What is the greatest common factor of 18 and 24?', correct:'B',
        choices:{ A:{text:'3', explain:'3 divides both, but it isn\u2019t the greatest common factor.'}, B:{text:'6', explain:'6 is the largest number that divides both 18 and 24 evenly.'}, C:{text:'9', explain:'9 doesn\u2019t divide 24 evenly.'}, D:{text:'12', explain:'12 doesn\u2019t divide 18 evenly.'} } }
    ] },

  // ---------------- LANGUAGE ----------------
  { id:'ll1', section:'language', title:'Subject-Verb Agreement', skillTags:['Subject-verb agreement'],
    content:`<p>The subject and verb in a sentence must agree in number: singular subjects take singular verbs, plural subjects take plural verbs.</p>
      <p>Watch for tricky singular subjects that seem plural: words like "everyone," "neither," "each," and "either" are grammatically singular, even though they refer to groups of people.</p>
      <p><strong>Example:</strong> "Neither of the boys were ready" is incorrect — it should be "Neither of the boys was ready," since "neither" is singular.</p>`,
    quiz:[
      { prompt:'Which sentence is correct?', correct:'B',
        choices:{ A:{text:'Each of the students have a locker.', explain:'Each is singular, so it needs "has," not "have."'}, B:{text:'Each of the students has a locker.', explain:'Each is singular and correctly pairs with the singular verb "has."'}, C:{text:'Each of the student have a locker.', explain:'This is missing the plural "students" and uses an incorrect verb form.'}, D:{text:'Each of the students having a locker.', explain:'This isn\u2019t a complete sentence.'} } },
      { prompt:'Which sentence contains an error?', correct:'B',
        choices:{ A:{text:'The team is practicing today.', explain:'Team is treated as a singular unit here, correctly paired with "is."'}, B:{text:'Everybody needs their own pencil.', explain:'Everybody is grammatically singular, so traditional agreement calls for "his or her" rather than "their."'}, C:{text:'She walks to school every day.', explain:'This correctly uses a singular verb with the singular subject "she."'}, D:{text:'No mistake', explain:'Choice B contains an error under traditional agreement rules.'} } }
    ] },
  { id:'ll2', section:'language', title:'Pronouns: Case & Agreement', skillTags:['Pronoun case','Pronoun agreement'],
    content:`<p>Pronoun questions test two things: <strong>case</strong> (subject pronouns like "I/he/she" vs. object pronouns like "me/him/her") and <strong>agreement</strong> (whether a pronoun matches the number of what it refers to).</p>
      <p>For case, try removing the other person from the sentence: "Give the book to (Sarah and) I" &rarr; "Give the book to I" sounds wrong, confirming it should be "me."</p>
      <p>For agreement, match singular pronouns to singular nouns (each, everyone, a person), even when "they/their" feels more natural in casual speech.</p>`,
    quiz:[
      { prompt:'Which sentence is correct?', correct:'B',
        choices:{ A:{text:'Him and me went to the movies.', explain:'Both pronouns should be subject pronouns here (he, I), not object pronouns.'}, B:{text:'He and I went to the movies.', explain:'Both "he" and "I" are correctly used as subject pronouns.'}, C:{text:'Him and I went to the movies.', explain:'"Him" should be "he," since it\u2019s part of the subject.'}, D:{text:'He and me went to the movies.', explain:'"Me" should be "I," since it\u2019s part of the subject.'} } },
      { prompt:'Which sentence contains an error?', correct:'A',
        choices:{ A:{text:'Someone left their umbrella.', explain:'Someone is grammatically singular, so traditional agreement calls for "his or her" rather than "their."'}, B:{text:'The dog wagged its tail.', explain:'This correctly uses the singular possessive "its" for the dog.'}, C:{text:'Both of the sisters brought their books.', explain:'"Both" is plural, correctly matching the plural "their."'}, D:{text:'No mistake', explain:'Choice A contains an error under traditional agreement rules.'} } }
    ] },
  { id:'ll3', section:'language', title:'Apostrophes: Contractions vs. Possessives', skillTags:['Contractions vs. possessives','Contractions','Plurals vs. possessives'],
    content:`<p>Apostrophes serve two very different jobs, and mixing them up is one of the most common grammar mistakes:</p>
      <ul>
        <li><strong>Contractions</strong> use an apostrophe to replace missing letters: it's = it is, they're = they are, who's = who is.</li>
        <li><strong>Possessives</strong> show ownership: its, their, whose — notice these possessive forms do NOT use an apostrophe.</li>
      </ul>
      <p><strong>Quick test:</strong> if you can replace the word with the two-word version ("it is," "they are," "who is") and it still makes sense, use the apostrophe version. If not, use the possessive form without one.</p>`,
    quiz:[
      { prompt:'Which sentence is correct?', correct:'B',
        choices:{ A:{text:"The bird built it's nest in the tree.", explain:'This should be the possessive "its" (no apostrophe), not the contraction "it\u2019s" (it is).'}, B:{text:'The bird built its nest in the tree.', explain:'"Its" correctly shows possession here without an apostrophe.'}, C:{text:"The bird built its' nest in the tree.", explain:'This misplaces the apostrophe after the s, which isn\u2019t a standard form.'}, D:{text:'The bird built it nest in the tree.', explain:'This is missing the possessive \u2019s entirely.'} } },
      { prompt:'Which sentence contains an error?', correct:'A',
        choices:{ A:{text:"Who's backpack is this?", explain:'This should use the possessive "whose," not the contraction "who\u2019s" (who is).'}, B:{text:'Whose backpack is this?', explain:'This correctly uses the possessive "whose" to ask about ownership.'}, C:{text:'I wonder whose turn it is.', explain:'This also correctly uses the possessive "whose."'}, D:{text:'No mistake', explain:'Choice A contains an error, so this option is incorrect.'} } }
    ] },
  { id:'ll4', section:'language', title:'Punctuation Essentials', skillTags:['Punctuation'],
    content:`<p>A few punctuation rules come up again and again on the HSPT:</p>
      <ul>
        <li>Commas separate three or more items in a list, and set off introductory phrases.</li>
        <li>Semicolons join two closely related complete sentences without a conjunction.</li>
        <li>Colons introduce a list or explanation after a complete sentence.</li>
        <li>Comma splices (joining two complete sentences with only a comma) are a common error — fix them with a conjunction, semicolon, or period.</li>
      </ul>
      <p><strong>Example:</strong> "The rain stopped, we went outside" is a comma splice. Fix: "The rain stopped, so we went outside" or "The rain stopped; we went outside."</p>`,
    quiz:[
      { prompt:'Which sentence is punctuated correctly?', correct:'B',
        choices:{ A:{text:'I bought apples oranges and bananas.', explain:'This is missing the commas needed to separate the list items.'}, B:{text:'I bought apples, oranges, and bananas.', explain:'Commas correctly separate each item in the list.'}, C:{text:'I bought apples, oranges and bananas,', explain:'This sentence incorrectly ends with a comma instead of a period.'}, D:{text:'I bought, apples oranges and bananas.', explain:'The comma right after "bought" is misplaced.'} } },
      { prompt:"Which sentence fixes this comma splice correctly? Original: \"The lights went out, the whole street went dark.\"", correct:'B',
        choices:{ A:{text:'The lights went out, the whole street went dark.', explain:'This is the original comma splice, still uncorrected.'}, B:{text:'The lights went out; the whole street went dark.', explain:'A semicolon correctly joins these two related complete sentences.'}, C:{text:'The lights went out the whole street went dark.', explain:'This removes the comma but creates a run-on sentence instead.'}, D:{text:'The lights went out. and the whole street went dark.', explain:'A period followed by a lowercase conjunction doesn\u2019t form a proper sentence structure.'} } }
    ] },
  { id:'ll5', section:'language', title:'Sentence Combining', skillTags:['Sentence combining'],
    content:`<p>Sentence combining questions ask you to merge two short sentences into one smooth, grammatically correct sentence. Good combined sentences avoid two problems: run-ons (mashing sentences together with no punctuation) and choppy repetition of the subject.</p>
      <p><strong>Strategy:</strong> look for the logical relationship between the two ideas — cause and effect, sequence, contrast — and choose a connector that reflects it (because, after, but, and, although).</p>
      <p><strong>Example:</strong> "It started to rain. We packed up the picnic." &rarr; "Because it started to rain, we packed up the picnic" shows cause and effect clearly.</p>`,
    quiz:[
      { prompt:"What is the best way to combine: \"Jake finished his chores. Jake went to the park.\"?", correct:'B',
        choices:{ A:{text:'Jake finished his chores, went to the park.', explain:'This drops the second subject, leaving an incomplete second half.'}, B:{text:'Jake finished his chores and went to the park.', explain:'This smoothly joins the two related actions using "and," avoiding repetition of the subject.'}, C:{text:'Jake finished his chores he went to the park.', explain:'This runs the two sentences together with no connecting word or punctuation.'}, D:{text:'Jake finished his chores; the park.', explain:'The second half after the semicolon isn\u2019t a complete sentence.'} } },
      { prompt:'What is the best way to combine: "The bell rang. Class was over."?', correct:'B',
        choices:{ A:{text:'The bell rang, class was over.', explain:'This joins two complete sentences with only a comma, creating a comma splice.'}, B:{text:'When the bell rang, class was over.', explain:'This correctly uses "when" to show the timing relationship between the two events.'}, C:{text:'The bell rang class was over.', explain:'This runs the two ideas together with no punctuation or connector.'}, D:{text:'The bell rang; over, class was.', explain:'This awkwardly reorders the words in a way that doesn\u2019t read naturally.'} } }
    ] },
  { id:'ll6', section:'language', title:'Capitalization Rules', skillTags:['Capitalization'],
    content:`<p>Capitalize proper nouns (specific names of people, places, organizations) and the first word of every sentence. Do NOT capitalize common nouns used generally, including most seasons (summer, winter) and general relation words (my uncle, her mom) when used generally rather than as part of a name.</p>
      <p><strong>Example:</strong> "I visited Paris last summer" — Paris is capitalized (a specific place), summer is not (a season, not a proper noun). "My uncle Joe" — uncle is lowercase (a general relation word), Joe is capitalized (a specific name).</p>`,
    quiz:[
      { prompt:'Which sentence is capitalized correctly?', correct:'C',
        choices:{ A:{text:'We drove through Texas in the Spring.', explain:'Spring is a season and shouldn\u2019t be capitalized here.'}, B:{text:'We drove through texas in the spring.', explain:'Texas is a proper noun (a state) and should be capitalized.'}, C:{text:'We drove through Texas in the spring.', explain:'Texas is correctly capitalized as a proper noun, and spring is correctly lowercase as a season.'}, D:{text:'we drove through Texas in the Spring.', explain:'The sentence-starting word should be capitalized.'} } },
      { prompt:'Which sentence is capitalized correctly?', correct:'B',
        choices:{ A:{text:'She studies History and Math at Lincoln High School.', explain:'History and math are general subjects and shouldn\u2019t be capitalized here.'}, B:{text:'She studies history and math at Lincoln High School.', explain:'Lincoln High School is a proper noun and correctly capitalized, while the general subjects history and math are correctly lowercase.'}, C:{text:'She studies history and math at lincoln high school.', explain:'Lincoln High School is a proper noun and should be capitalized.'}, D:{text:'she studies History and Math at Lincoln High School.', explain:'The sentence-starting word should be capitalized.'} } }
    ] },

  // ---------------- READING ----------------
  { id:'lr1', section:'reading', title:'Finding the Main Idea', skillTags:['Main idea'],
    content:`<p>Main idea questions ask what a passage is "primarily about" or ask for the "best summary." The main idea is usually broader than any single detail, but narrower than an overly broad generalization.</p>
      <p><strong>Strategy:</strong> after reading, ask "what is every paragraph working together to explain or show?" Eliminate choices that describe only one small detail (too narrow) or bring in outside information the passage never discusses (too broad or off-topic).</p>`,
    quiz:[
      { prompt:'A passage describes three different ways plants adapt to survive in the desert. What is the passage primarily about?', correct:'B',
        choices:{ A:{text:"A specific desert plant's history", explain:'Too narrow — the passage discusses multiple adaptations generally, not one plant\u2019s history.'}, B:{text:'How plants adapt to desert conditions', explain:'This matches the passage\u2019s focus on multiple survival adaptations.'}, C:{text:'The dangers of desert travel', explain:'Danger isn\u2019t mentioned in this description.'}, D:{text:'How to grow desert plants at home', explain:'Growing plants at home isn\u2019t what the passage discusses.'} } },
      { prompt:'A passage opens by describing a rainstorm, then follows a family as they evacuate and later rebuild their home. What is the best summary?', correct:'B',
        choices:{ A:{text:'A story about a rainstorm', explain:'Too narrow — this ignores most of the passage\u2019s content about the family\u2019s experience.'}, B:{text:'A family responds to a disaster and rebuilds', explain:'This captures the full arc of the passage: the storm, the response, and the rebuilding.'}, C:{text:'A guide to storm safety', explain:'The passage tells a story, not a safety guide.'}, D:{text:'A history of flooding in the region', explain:'No broader regional history is mentioned.'} } }
    ] },
  { id:'lr2', section:'reading', title:'Understanding Detail Questions', skillTags:['Detail'],
    content:`<p>Detail questions ask about specific facts stated directly in the passage — "according to the passage..." Unlike inference questions, the answer is usually stated word-for-word or very close to it in the text.</p>
      <p><strong>Strategy:</strong> go back and skim for the specific detail rather than relying on memory — detail questions often include a trap answer that mixes up two different facts mentioned nearby in the passage.</p>`,
    quiz:[
      { prompt:'A passage states: "The bridge, completed in 1932, spans nearly two miles across the bay." According to the passage, when was the bridge completed?', correct:'B',
        choices:{ A:{text:'1923', explain:'This transposes the digits of the correct year.'}, B:{text:'1932', explain:'The passage states directly that the bridge was completed in 1932.'}, C:{text:'1942', explain:'This isn\u2019t the year given in the passage.'}, D:{text:'Two miles', explain:'This is the length of the bridge, not the year it was completed.'} } },
      { prompt:'A passage states: "Unlike her older brother, who preferred quiet reading, Mia loved loud, energetic games." According to the passage, what did Mia\u2019s brother prefer?', correct:'B',
        choices:{ A:{text:'Loud games', explain:'This describes Mia\u2019s preference, not her brother\u2019s.'}, B:{text:'Quiet reading', explain:'The passage states directly that the brother preferred quiet reading.'}, C:{text:'Energetic activities', explain:'This describes Mia, not her brother.'}, D:{text:'Neither reading nor games', explain:'The passage does state a clear preference for the brother — quiet reading.'} } }
    ] },
  { id:'lr3', section:'reading', title:'Vocabulary in Context', skillTags:['Vocabulary in context'],
    content:`<p>These questions ask what a word "most nearly means" as it's used in the passage — not necessarily the word's most common dictionary definition. Context matters more than familiarity with the word.</p>
      <p><strong>Strategy:</strong> cover up the word and reread the sentence, then ask "what word would make sense here?" Compare your own guess to the answer choices, and watch for choices that define the word correctly in a different context, but don't fit this one.</p>`,
    quiz:[
      { prompt:'In the sentence "The old bridge was so decrepit that engineers closed it to traffic," the word "decrepit" most nearly means:', correct:'B',
        choices:{ A:{text:'Beautiful', explain:'This contradicts the context — the bridge was closed, suggesting a problem, not beauty.'}, B:{text:'Worn down and unsafe', explain:'The context (closed to traffic) suggests the bridge was in poor, unsafe condition.'}, C:{text:'Newly built', explain:'This contradicts being old and needing closure.'}, D:{text:'Extremely long', explain:'Length isn\u2019t suggested anywhere in the sentence.'} } },
      { prompt:'In the sentence "Her buoyant mood lifted everyone else in the room," the word "buoyant" most nearly means:', correct:'A',
        choices:{ A:{text:'Cheerful', explain:'The context (lifting others\u2019 spirits) suggests a cheerful, upbeat mood.'}, B:{text:'Heavy', explain:'This contradicts the light, uplifting quality suggested by the sentence.'}, C:{text:'Silent', explain:'Silence isn\u2019t related to affecting others\u2019 mood positively.'}, D:{text:'Confused', explain:'Confusion doesn\u2019t match the positive effect described.'} } }
    ] },
  { id:'lr4', section:'reading', title:'Making Inferences', skillTags:['Inference'],
    content:`<p>Inference questions ask what can be reasonably concluded from the passage, even though it isn't stated directly. The correct answer must be strongly supported by details in the passage — not just a guess or outside assumption.</p>
      <p><strong>Strategy:</strong> look for the answer choice that follows logically from what IS stated, without adding new information the passage never mentions. If a choice requires assuming something the passage doesn't support, it's likely a trap.</p>`,
    quiz:[
      { prompt:'A passage describes a scientist checking her data three times before publishing her results. It can be inferred that the scientist is:', correct:'B',
        choices:{ A:{text:'Careless', explain:'This contradicts the behavior described — checking data multiple times suggests the opposite of carelessness.'}, B:{text:'Careful and thorough', explain:'Checking her work three times suggests a careful, thorough approach.'}, C:{text:'Uncertain about her career', explain:'Career uncertainty isn\u2019t suggested by this behavior.'}, D:{text:'New to research', explain:'Experience level isn\u2019t indicated by this detail alone.'} } },
      { prompt:'A passage describes a boy who packs an umbrella, boots, and a raincoat before leaving for school, even though the sky looks clear. It can be inferred that the boy:', correct:'B',
        choices:{ A:{text:'Dislikes rain', explain:'Disliking rain doesn\u2019t explain why he specifically prepared for it today.'}, B:{text:'Checked a weather forecast predicting rain', explain:'Packing rain gear despite a clear sky suggests he has outside information, like a forecast, predicting rain later.'}, C:{text:'Is forgetful', explain:'Forgetfulness doesn\u2019t explain deliberately packing multiple rain items.'}, D:{text:'Enjoys wearing raincoats', explain:'Nothing suggests he simply enjoys wearing raincoats for their own sake.'} } }
    ] }
];
