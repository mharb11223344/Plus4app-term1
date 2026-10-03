export type Definition = readonly [word: string, definition: string];
export type Check = readonly [statement: string, answer: boolean];
export type LessonContent = {
  title: string;
  bookPages?: number[];
  passage?: string[];
  extraVocabulary?: Definition[];
  extensions?: { heading: string; text: string }[];
  practice?: { prompt: string; options: string[]; answer: string; explanation: string }[];
  strapline: string;
  objectives: string[];
  definitions: Definition[];
  languageTitle: string;
  languageNotes: string[];
  readingTitle: string;
  summary: string;
  keyIdeas: string[];
  checks: Check[];
  sentences: string[];
  tips: string[];
};
export type ProjectContent = {
  bookPages?: number[];
  title: string;
  strapline: string;
  overview: string;
  usefulLanguage: string[];
  steps: string[];
  finalProduct: string;
};

export const lessonContent: Record<string, LessonContent> = {
  "u1l1": {
    "title": "Our Amazing Bodies",
    "strapline": "Meet the amazing systems that keep your body working.",
    "objectives": [
      "Name important body organs and systems.",
      "Explain what each body system does.",
      "Use the present simple to describe facts."
    ],
    "definitions": [
      [
        "digestive system",
        "the body system that changes food into energy and nutrients"
      ],
      [
        "respiratory system",
        "the body system that helps us breathe"
      ],
      [
        "skeleton",
        "all the bones that support and protect the body"
      ],
      [
        "muscle",
        "body tissue that moves bones and body parts"
      ],
      [
        "heart",
        "the organ that pumps blood around the body"
      ],
      [
        "lungs",
        "the organs that take oxygen from the air"
      ],
      [
        "stomach",
        "the organ where food is mixed and broken down"
      ],
      [
        "blood",
        "the red liquid that carries oxygen and nutrients"
      ],
      [
        "nutrients",
        "useful substances in food that help the body grow"
      ],
      [
        "oxygen",
        "a gas in the air that our bodies need"
      ]
    ],
    "languageTitle": "Present simple for scientific facts",
    "languageNotes": [
      "Use the base verb with I, you, we and they: We breathe through our noses.",
      "Add -s or -es with he, she and it: The heart pumps blood.",
      "Use does not or doesn't for negative facts."
    ],
    "readingTitle": "Three Important Body Systems",
    "summary": "The digestive system processes food, the respiratory system brings oxygen into the body, and the skeleton and muscles support, protect and move us. These systems work together every day.",
    "keyIdeas": [
      "Food travels to the stomach after we swallow it.",
      "Oxygen passes from the lungs into the blood.",
      "Bones protect organs and muscles help bones move."
    ],
    "checks": [
      [
        "The heart pumps blood around the body.",
        true
      ],
      [
        "We use our digestive system when we breathe.",
        false
      ],
      [
        "The lungs help oxygen enter the blood.",
        true
      ],
      [
        "Muscles are not connected to bones.",
        false
      ],
      [
        "The skeleton protects important organs.",
        true
      ],
      [
        "Food is changed into useful energy and nutrients.",
        true
      ]
    ],
    "sentences": [
      "The heart pumps blood around the body.",
      "We breathe air through our noses.",
      "Food travels to the stomach after we swallow it.",
      "Our skeleton is made of bones.",
      "Muscles help us move.",
      "The lungs pass oxygen to the blood.",
      "Body systems work together every day."
    ],
    "tips": [
      "Breathe is a verb; breath is a noun.",
      "The plural of lung is lungs, but heart is usually singular when we mean the organ."
    ],
    "passage": [
      "When we eat, breathe or move, body systems work together. Our digestive system breaks down food into smaller parts. It provides energy and nutrients that help us grow.",
      "Our respiratory system takes in air through the nose and into the lungs. Oxygen enters the blood, and the heart pumps blood around the body. Our skeleton supports us and protects organs. Muscles help our bones move."
    ],
    "bookPages": [
      8,
      9
    ]
  },
  "u1l2": {
    "title": "Our Senses",
    "strapline": "Discover how sight, hearing, smell, taste and touch help us learn.",
    "objectives": [
      "Match the five senses to body parts.",
      "Understand Braille and sign language.",
      "Use capital letters correctly."
    ],
    "definitions": [
      [
        "sight",
        "the ability to see with the eyes"
      ],
      [
        "hearing",
        "the ability to hear with the ears"
      ],
      [
        "smell",
        "the ability to notice scents with the nose"
      ],
      [
        "taste",
        "the ability to notice flavours with the tongue"
      ],
      [
        "touch",
        "the ability to feel through the skin"
      ],
      [
        "tongue",
        "the part of the mouth used for tasting and speaking"
      ],
      [
        "skin",
        "the outer covering of the body that can feel"
      ],
      [
        "Braille",
        "a reading code made from raised dots"
      ],
      [
        "sign language",
        "a complete language that uses hands, face and movement"
      ],
      [
        "combination",
        "a group of things joined or used together"
      ]
    ],
    "languageTitle": "Capital letters",
    "languageNotes": [
      "Begin every sentence with a capital letter.",
      "Use capitals for names, countries, languages and nationalities.",
      "Write Egypt, English, Arabic, Spanish and Louis Braille with capitals.",
      "Use capitals for the first word of a sentence, people’s names, places, languages, days and months."
    ],
    "readingTitle": "Different Ways to Understand the World",
    "summary": "Our senses collect information all day. People who cannot hear may communicate through sign language, while people who cannot see may read Braille by touching patterns of raised dots.",
    "keyIdeas": [
      "Each sense is connected to a body part.",
      "Sign languages can be different around the world.",
      "Braille dots can represent letters, numbers and punctuation."
    ],
    "checks": [
      [
        "We taste with our tongue.",
        true
      ],
      [
        "Braille is read only with the eyes.",
        false
      ],
      [
        "Sign language is a complete language.",
        true
      ],
      [
        "We hear with our nose.",
        false
      ],
      [
        "Names of countries begin with capital letters.",
        true
      ],
      [
        "The word english should begin with a small letter.",
        false
      ]
    ],
    "sentences": [
      "We use our eyes to see.",
      "Our ears help us hear.",
      "Braille uses combinations of raised dots.",
      "Sign language helps people communicate.",
      "Louis Braille invented the Braille code.",
      "Mariam speaks Arabic and English.",
      "Our senses collect information all day."
    ],
    "tips": [
      "Savory describes food that is salty or spicy rather than sweet.",
      "Blind and deaf describe conditions; always speak respectfully about people."
    ],
    "passage": [
      "We collect information through sight, hearing, smell, taste and touch. Eyes help us see; ears help us hear; the nose helps us smell; the tongue helps us taste; and skin helps us feel.",
      "People can use different ways to communicate. Sign languages use hands, faces and movements. Braille uses patterns of raised dots that a reader feels with their fingers. Louis Braille developed the code, and its dots can represent letters, numbers and punctuation."
    ],
    "bookPages": [
      10,
      11
    ]
  },
  "u1l3": {
    "title": "Language: Present Simple",
    "strapline": "Talk about choices, routines and things you would like to do.",
    "objectives": [
      "Use want to and would like to.",
      "Recognise regular and irregular present verbs.",
      "Read a family conversation for detail."
    ],
    "definitions": [
      [
        "tidy",
        "to make a place clean and organised"
      ],
      [
        "lounge",
        "a comfortable room where a family sits together"
      ],
      [
        "creative",
        "good at making or imagining new things"
      ],
      [
        "disappointed",
        "sad because something did not happen as hoped"
      ],
      [
        "choose",
        "to decide which thing you want"
      ],
      [
        "weekend",
        "Saturday and Sunday or the days away from school"
      ],
      [
        "activity",
        "something that a person does"
      ],
      [
        "routine",
        "something done regularly in the same way"
      ],
      [
        "would like",
        "a polite way to say what someone wants"
      ],
      [
        "matter",
        "a problem or situation that needs attention"
      ]
    ],
    "languageTitle": "Present simple: facts, routines and negative forms",
    "languageNotes": [
      "Use the present simple for facts and things that happen regularly.",
      "Use the base verb with I, you, we and they; add -s or -es with he, she and it.",
      "Use don’t + base verb with I, you, we and they. Use doesn’t + base verb with he, she and it.",
      "The verb be is irregular: I am; he/she/it is; you/we/they are.",
      "In the conversation, want to and would like to are followed by a base verb."
    ],
    "readingTitle": "A Saturday Choice",
    "summary": "Kareema wants to do something creative while Adam wants to play in the park. Their mother finds a fair solution: the family will tidy first, then the children can play and draw outdoors.",
    "keyIdeas": [
      "Family members can want different things.",
      "A good solution can include everyone's ideas.",
      "Responsibilities come before free-time activities."
    ],
    "checks": [
      [
        "Kareema wants to do something creative.",
        true
      ],
      [
        "Adam wants to stay in the lounge all day.",
        false
      ],
      [
        "The family needs to tidy before going out.",
        true
      ],
      [
        "Would like to is followed by a past-tense verb.",
        false
      ],
      [
        "Choose means decide between options.",
        true
      ],
      [
        "Always can describe a repeated routine.",
        true
      ]
    ],
    "sentences": [
      "Mom wants to tidy the lounge.",
      "Kareema would like to draw a picture.",
      "Adam wants to run in the park.",
      "The family tidies the lounge first.",
      "We choose an activity together.",
      "I always help at the weekend.",
      "A fair plan can make everyone happy."
    ],
    "tips": [
      "Do not say I want drawing; say I want to draw.",
      "Would like is more polite than want in requests."
    ],
    "practice": [
      {
        "prompt": "Adam usually ___ in the park.",
        "options": [
          "plays",
          "play",
          "playing",
          "played"
        ],
        "answer": "plays",
        "explanation": "Add -s with he, she or it in the present simple."
      },
      {
        "prompt": "Kareema ___ want to stay in the lounge.",
        "options": [
          "doesn’t",
          "don’t",
          "isn’t",
          "aren’t"
        ],
        "answer": "doesn’t",
        "explanation": "Use doesn’t + base verb with Kareema."
      },
      {
        "prompt": "We ___ our homework after school.",
        "options": [
          "do",
          "does",
          "doing",
          "did"
        ],
        "answer": "do",
        "explanation": "Use the base verb with we."
      },
      {
        "prompt": "The children ___ tired today.",
        "options": [
          "are",
          "is",
          "am",
          "be"
        ],
        "answer": "are",
        "explanation": "Children is plural, so use are."
      }
    ],
    "passage": [
      "It is Saturday and there is no school. Kareema wants to do something creative, but Adam wants to run and play. Their mother wants the family to tidy the lounge first.",
      "They decide to take their activities to the park after tidying. Kareema can draw while Adam plays. The conversation uses present forms to describe what the family wants and what each person usually does."
    ],
    "bookPages": [
      12,
      13
    ]
  },
  "u1l5": {
    "title": "Writing Paragraphs",
    "strapline": "Choose strong titles and build clear healthy-living paragraphs.",
    "objectives": [
      "Choose a title that matches a paragraph.",
      "Identify main and supporting ideas.",
      "Plan and write a short healthy-living paragraph."
    ],
    "definitions": [
      [
        "paragraph",
        "a group of sentences about one main idea"
      ],
      [
        "title",
        "a short name that tells what a text is about"
      ],
      [
        "summarise",
        "to give the main idea in a few words"
      ],
      [
        "routine",
        "a regular way of doing something"
      ],
      [
        "healthy",
        "good for the body or mind"
      ],
      [
        "unhealthy",
        "not good for the body or mind"
      ],
      [
        "habit",
        "something a person does often"
      ],
      [
        "vitamin",
        "a substance in food that helps the body stay healthy"
      ],
      [
        "mineral",
        "a natural substance the body needs in small amounts"
      ],
      [
        "range",
        "a number of different types or choices"
      ]
    ],
    "languageTitle": "A clear paragraph",
    "languageNotes": [
      "Start with a topic sentence that introduces the main idea.",
      "Add supporting details and examples.",
      "Choose a short title that summarises the whole paragraph.",
      "A paragraph usually has 3–8 sentences: an introduction or topic sentence, a main body of supporting sentences and a conclusion."
    ],
    "readingTitle": "Healthy Choices",
    "summary": "Short paragraphs explain how exercise, balanced food and active habits support a healthy life. Each paragraph needs a title that captures its main idea without adding unnecessary detail.",
    "keyIdeas": [
      "Exercise is easier when it is enjoyable.",
      "A balanced diet includes different kinds of food.",
      "Long periods of sitting should be balanced with activity."
    ],
    "checks": [
      [
        "A paragraph should focus on one main idea.",
        true
      ],
      [
        "A title should include every detail in the text.",
        false
      ],
      [
        "Fruit and vegetables can be healthy choices.",
        true
      ],
      [
        "A topic sentence introduces the main idea.",
        true
      ],
      [
        "Supporting sentences are never needed.",
        false
      ],
      [
        "A good title can be interesting and clear.",
        true
      ]
    ],
    "sentences": [
      "Exercise is important for a healthy body.",
      "Choose an activity that you enjoy.",
      "A balanced diet includes many kinds of food.",
      "Fruit and vegetables provide useful vitamins.",
      "Healthy habits grow through regular practice.",
      "A clear title shows the main idea.",
      "Supporting details make a paragraph stronger."
    ],
    "tips": [
      "The title is not usually a complete sentence.",
      "Use a capital letter for the important words in a title style, or follow your teacher's chosen style."
    ],
    "passage": [
      "A useful title describes the main idea of a whole paragraph. It should not describe just one detail or include information that is not in the paragraph.",
      "A paragraph about exercise may explain how to start a routine and keep doing an activity you enjoy. A paragraph about healthy food may describe different fruits, vegetables and other foods that provide nutrients. A paragraph about unhealthy habits may explain why sitting and playing video games all day is not a balanced routine."
    ],
    "bookPages": [
      16,
      17
    ]
  },
  "u2l1": {
    "title": "Vertebrates",
    "strapline": "Classify animals with backbones into five important groups.",
    "objectives": [
      "Define vertebrate and backbone.",
      "Compare mammals, reptiles, amphibians, fish and birds.",
      "Describe animal features and habitats."
    ],
    "definitions": [
      [
        "vertebrate",
        "an animal with a backbone"
      ],
      [
        "backbone",
        "the line of connected bones along the back"
      ],
      [
        "mammal",
        "a warm-blooded vertebrate with hair or fur"
      ],
      [
        "reptile",
        "a cold-blooded vertebrate with scales"
      ],
      [
        "amphibian",
        "a vertebrate that can live on land and in water"
      ],
      [
        "fish",
        "a water vertebrate that breathes through gills"
      ],
      [
        "bird",
        "a warm-blooded vertebrate with feathers and wings"
      ],
      [
        "scales",
        "small hard plates that cover some animals"
      ],
      [
        "gills",
        "body parts that take oxygen from water"
      ],
      [
        "beak",
        "the hard mouth part of a bird"
      ]
    ],
    "languageTitle": "Describing and classifying animals",
    "languageNotes": [
      "Use have or has for features: Birds have feathers.",
      "Use can and cannot for abilities: Most birds can fly.",
      "Use such as to introduce examples."
    ],
    "readingTitle": "The Five Vertebrate Groups",
    "summary": "Vertebrates include mammals, reptiles, amphibians, fish and birds. Scientists classify them by features such as body covering, temperature, habitat, breathing and the way their young are born.",
    "keyIdeas": [
      "Mammals usually give birth to live young.",
      "Fish use gills to take oxygen from water.",
      "Birds have feathers, wings and beaks."
    ],
    "checks": [
      [
        "Vertebrates have backbones.",
        true
      ],
      [
        "All mammals lay eggs.",
        false
      ],
      [
        "Reptiles are cold-blooded.",
        true
      ],
      [
        "Fish breathe through gills.",
        true
      ],
      [
        "Birds have fur instead of feathers.",
        false
      ],
      [
        "Amphibians need water or a moist habitat.",
        true
      ]
    ],
    "sentences": [
      "Vertebrates are animals with backbones.",
      "Mammals have hair or fur.",
      "Reptiles usually have scales.",
      "Amphibians can live on land and in water.",
      "Fish take oxygen through their gills.",
      "Birds have feathers and wings.",
      "Scientists classify animals by their features."
    ],
    "tips": [
      "Warm-blooded does not mean the blood feels hot.",
      "The plural of fish is often fish when we mean several fish of the same kind."
    ],
    "passage": [
      "A vertebrate is an animal with a backbone. Mammals, reptiles, amphibians, fish and birds are vertebrate groups. Each group has features that help us classify its animals.",
      "Mammals are warm-blooded and usually have fur or hair and give birth to live young. Reptiles are cold-blooded and have scales. Amphibians can live on land and in water. Fish live in water and breathe through gills. Birds have feathers, wings and beaks, though not all birds can fly."
    ],
    "bookPages": [
      22,
      23
    ]
  },
  "u2l2": {
    "title": "Language: Comparatives and Superlatives",
    "strapline": "Compare the biggest, smallest, fastest and strongest animals.",
    "objectives": [
      "Form comparative adjectives.",
      "Form superlative adjectives.",
      "Use than and the correctly."
    ],
    "definitions": [
      [
        "comparative",
        "a form used to compare two people, animals or things"
      ],
      [
        "superlative",
        "a form used to compare one with a whole group"
      ],
      [
        "enormous",
        "extremely large"
      ],
      [
        "tiny",
        "extremely small"
      ],
      [
        "strong",
        "having a lot of power"
      ],
      [
        "fast",
        "moving quickly"
      ],
      [
        "long",
        "measuring a great distance from end to end"
      ],
      [
        "tall",
        "having a great height"
      ],
      [
        "discover",
        "to find something for the first time"
      ],
      [
        "natural world",
        "plants, animals and other things found in nature"
      ]
    ],
    "languageTitle": "Comparatives and superlatives",
    "languageNotes": [
      "Add -er for many short adjectives: small → smaller.",
      "Add -est for the superlative: small → the smallest.",
      "Use more and most with many long adjectives. Learn irregular forms: good, better, the best."
    ],
    "readingTitle": "Big and Small in the Animal World",
    "summary": "Animals come in extraordinary sizes. Elephants, blue whales, whale sharks, ostriches, hummingbirds and tiny frogs show how comparatives and superlatives help us describe the natural world.",
    "keyIdeas": [
      "The blue whale is the biggest animal.",
      "An African elephant is bigger than an Asian elephant.",
      "An ostrich is fast but cannot fly."
    ],
    "checks": [
      [
        "We use than after many comparative forms.",
        true
      ],
      [
        "Bigger is the superlative form of big.",
        false
      ],
      [
        "The blue whale is bigger than the whale shark.",
        true
      ],
      [
        "Smallest compares only two things.",
        false
      ],
      [
        "Good changes to better in the comparative.",
        true
      ],
      [
        "The word tiny means very large.",
        false
      ]
    ],
    "sentences": [
      "An African elephant is bigger than an Asian elephant.",
      "The blue whale is the biggest animal in the world.",
      "A whale shark is smaller than a blue whale.",
      "The hummingbird is one of the smallest birds.",
      "An ostrich is faster than many other birds.",
      "This frog is the tiniest vertebrate in the group.",
      "Ants are stronger than they look."
    ],
    "tips": [
      "Double the final consonant in big → bigger → biggest.",
      "Do not use more bigger; use bigger."
    ],
    "passage": [
      "Animals can be enormous or tiny. We use comparatives to compare two animals and superlatives to compare an animal with a whole group.",
      "An African elephant is bigger than an Asian elephant. The blue whale is the biggest animal described in the lesson. Hummingbirds are tiny birds, and chameleons can be very small reptiles. We can compare size, strength and speed with bigger, stronger, faster, the biggest, the strongest and the fastest."
    ],
    "bookPages": [
      24,
      25
    ]
  },
  "u2l4": {
    "title": "CLIL: Art",
    "strapline": "Mix science and art to understand flowers and colour.",
    "objectives": [
      "Identify primary and secondary colours.",
      "Explain how flowers use colour.",
      "Describe lighter and darker shades."
    ],
    "definitions": [
      [
        "primary colour",
        "a basic colour that cannot be made by mixing other colours"
      ],
      [
        "secondary colour",
        "a colour made by mixing two primary colours"
      ],
      [
        "pollen",
        "fine powder that flowers need to make seeds"
      ],
      [
        "reproduce",
        "to make new plants or animals of the same kind"
      ],
      [
        "attract",
        "to make something come closer"
      ],
      [
        "shade",
        "a lighter or darker form of a colour"
      ],
      [
        "colour wheel",
        "a circle that shows relationships between colours"
      ],
      [
        "mix",
        "to combine two or more things"
      ],
      [
        "lighter",
        "closer to white or less dark"
      ],
      [
        "darker",
        "closer to black or less light"
      ]
    ],
    "languageTitle": "Explaining a process",
    "languageNotes": [
      "Use by + -ing to explain how: We make orange by mixing red and yellow.",
      "Use because to give a reason.",
      "Use adding to describe an extra step."
    ],
    "readingTitle": "Why Flowers Have Bright Colours",
    "summary": "Bright flowers attract insects that carry pollen. In art, red, yellow and blue are primary colours. Mixing them creates secondary colours and adding white or black changes the shade.",
    "keyIdeas": [
      "Primary colours are red, yellow and blue.",
      "Red and yellow make orange.",
      "White makes a colour lighter and black makes it darker."
    ],
    "checks": [
      [
        "Purple can be made from red and blue.",
        true
      ],
      [
        "Green is a primary colour.",
        false
      ],
      [
        "Bright flowers can attract insects.",
        true
      ],
      [
        "Adding white makes a colour darker.",
        false
      ],
      [
        "A colour wheel shows colour relationships.",
        true
      ],
      [
        "Pollen helps flowers reproduce.",
        true
      ]
    ],
    "sentences": [
      "Primary colours cannot be made by mixing other colours.",
      "Red and yellow make orange.",
      "Blue and yellow make green.",
      "Red and blue make purple.",
      "Bright flowers attract insects.",
      "Adding white makes a colour lighter.",
      "Adding black makes a colour darker."
    ],
    "tips": [
      "Colour is British spelling; color is American spelling.",
      "Use make, not do, when talking about creating a colour."
    ],
    "passage": [
      "Flowers are different colours. Their bright colours help attract animals that move pollen between flowers. Colour also helps artists create different effects.",
      "Red, yellow and blue are primary colours. Mixing two primary colours gives a secondary colour: red and yellow make orange; yellow and blue make green; blue and red make purple. White can make a colour lighter, while black can make it darker. Artists also describe warm and cool colours."
    ],
    "bookPages": [
      26,
      27
    ]
  },
  "u2l5": {
    "title": "Writing: Linking Words and Phrases",
    "strapline": "Connect facts and viewpoints to create strong paragraphs.",
    "objectives": [
      "Use linking words accurately.",
      "Describe how a water lily adapts.",
      "Present two different viewpoints."
    ],
    "definitions": [
      [
        "linking phrase",
        "a group of words that connects ideas"
      ],
      [
        "in addition to",
        "a phrase used to add a related idea"
      ],
      [
        "however",
        "a word used to introduce a contrast"
      ],
      [
        "on one hand",
        "a phrase introducing one side of an idea"
      ],
      [
        "on the other hand",
        "a phrase introducing another side of an idea"
      ],
      [
        "adapt",
        "to change or have features that suit a place"
      ],
      [
        "flexible",
        "able to bend easily"
      ],
      [
        "surface",
        "the outside or top of something"
      ],
      [
        "nutrient",
        "a useful substance that helps living things grow"
      ],
      [
        "water lily",
        "a water plant with floating leaves and flowers"
      ]
    ],
    "languageTitle": "However, in addition and two-sided views",
    "languageNotes": [
      "In addition to introduces another related idea.",
      "However introduces a change or contrast.",
      "On one hand … on the other hand introduces two different sides of an idea.",
      "Use linking phrases to connect facts about how an animal or plant adapts."
    ],
    "readingTitle": "Water Lilies and Connected Ideas",
    "summary": "Water lilies have floating leaves, flexible stems and roots that take in nutrients. Linking phrases connect facts about how they grow and introduce different sides of an idea.",
    "keyIdeas": [
      "In addition to adds another related idea.",
      "However introduces a contrast.",
      "On one hand and on the other hand present two sides of an idea."
    ],
    "checks": [
      [
        "In addition to can add another related idea.",
        true
      ],
      [
        "However introduces exactly the same idea with no contrast.",
        false
      ],
      [
        "Water lilies have leaves that float on the surface.",
        true
      ],
      [
        "Flexible means impossible to bend.",
        false
      ],
      [
        "On the other hand can introduce a different side of an idea.",
        true
      ],
      [
        "Linking phrases help connect ideas in writing.",
        true
      ]
    ],
    "sentences": [
      "Water lilies grow in wet places.",
      "Their flexible stems bend easily.",
      "Flat leaves float on the water.",
      "The roots take in nutrients.",
      "In addition to leaves, some lilies have flowers.",
      "However, other plants may find less light.",
      "Linking phrases connect different ideas."
    ],
    "tips": [
      "Put a comma after However when it starts a sentence.",
      "Read both ideas before choosing a linking phrase."
    ],
    "passage": [
      "Water lilies grow in wet places such as rivers. Long, flexible stems join the leaves to the roots, which take in nutrients. Flat leaves float on the water’s surface.",
      "In addition to floating leaves, some lilies have flowers that rise above the water and attract insects. On one hand, their roots take in nutrients. On the other hand, it can be difficult for other animals and plants to live beneath the leaves. Linking phrases connect these different ideas."
    ],
    "extensions": [
      {
        "heading": "Write about a pet",
        "text": "Make two lists: advantages and disadvantages of having a pet. Then use phrases such as on one hand, on the other hand and however to connect the ideas. Explain how the pet adapts to its environment, and choose details that fit your main idea."
      }
    ],
    "bookPages": [
      30,
      31
    ]
  },
  "u3l1": {
    "title": "My Community",
    "strapline": "Understand belonging, shared places and good citizenship.",
    "objectives": [
      "Define community and neighbourhood.",
      "Identify examples of good citizenship.",
      "Use possessive words to talk about belonging."
    ],
    "definitions": [
      [
        "community",
        "people who live, work or share activities in the same area"
      ],
      [
        "neighbourhood",
        "the streets and places close to a person's home"
      ],
      [
        "citizenship",
        "responsible and helpful behaviour in a community"
      ],
      [
        "society",
        "people living together in an organised group"
      ],
      [
        "belong",
        "to be part of a group or place"
      ],
      [
        "polite",
        "showing respect and good manners"
      ],
      [
        "helpful",
        "ready to give help"
      ],
      [
        "fair",
        "treating people equally and reasonably"
      ],
      [
        "activity",
        "something people do"
      ],
      [
        "local",
        "connected to the nearby area"
      ]
    ],
    "languageTitle": "Possession: my, your, mine and yours",
    "languageNotes": [
      "Use my or your before a noun: This is my neighbourhood.",
      "Use mine or yours without a noun: The blue bike is mine.",
      "Use this for something near and that for something farther away.",
      "Possessive pronouns stand without a following noun: mine, yours, his, hers, ours and theirs. Compare This is my book with This book is mine."
    ],
    "readingTitle": "A Community Is More Than a Place",
    "summary": "A community includes people, places, ideas and shared activities. Good citizens work hard, help others and behave kindly and fairly at home, school and local clubs.",
    "keyIdeas": [
      "One person can belong to several communities.",
      "Communities include shared ideas and activities.",
      "Good citizenship supports everyone."
    ],
    "checks": [
      [
        "A community can include people and shared activities.",
        true
      ],
      [
        "Citizenship means ignoring other people.",
        false
      ],
      [
        "Mine can stand without a noun.",
        true
      ],
      [
        "A neighbourhood is always a whole country.",
        false
      ],
      [
        "Helpful and fair behaviour supports a community.",
        true
      ],
      [
        "People can belong to more than one community.",
        true
      ]
    ],
    "sentences": [
      "My community includes my family and school.",
      "This neighbourhood is ours.",
      "That blue bicycle is yours.",
      "Good citizens help other people.",
      "We behave in a kind and fair way.",
      "A sports club can be a community.",
      "Local places bring people together."
    ],
    "tips": [
      "Do not write mine neighbourhood; write my neighbourhood.",
      "Neighbourhood is British spelling; neighborhood is American spelling."
    ],
    "passage": [
      "A community is a group of people who live and work together, but it is also more than a place. A family, neighbourhood, school or club can form a community. People share ideas and activities as well as streets and buildings.",
      "Good citizens contribute to their community. They behave politely and fairly, help people in need, work hard and show respect for others. Citizenship is shown through everyday actions."
    ],
    "bookPages": [
      36,
      37
    ]
  },
  "u3l2": {
    "title": "Language: Past Simple",
    "strapline": "Travel through the great periods of ancient Egyptian history.",
    "objectives": [
      "Sequence key events in ancient Egypt.",
      "Use historical vocabulary.",
      "Use the past simple for completed events."
    ],
    "definitions": [
      [
        "ancient",
        "from a very long time ago"
      ],
      [
        "pharaoh",
        "a ruler of ancient Egypt"
      ],
      [
        "dynasty",
        "a family of rulers over several generations"
      ],
      [
        "unite",
        "to join separate parts into one"
      ],
      [
        "Lower Egypt",
        "the northern part of ancient Egypt near the Nile Delta"
      ],
      [
        "Upper Egypt",
        "the southern part of ancient Egypt along the Nile"
      ],
      [
        "kingdom",
        "a land ruled by a king or queen"
      ],
      [
        "control",
        "to have power over something"
      ],
      [
        "BCE",
        "a label for years before the Common Era"
      ],
      [
        "Nile",
        "the great river that runs through Egypt"
      ]
    ],
    "languageTitle": "Past simple for history",
    "languageNotes": [
      "Use the past simple for events that started and finished in the past.",
      "For most regular verbs, add -ed: join → joined, control → controlled.",
      "If a verb ends in -e, add -d: unite → united.",
      "Irregular verbs change form: build → built, become → became, are → were, is → was.",
      "People settled near the Nile. The kings built pyramids."
    ],
    "readingTitle": "From Two Lands to One Egypt",
    "summary": "People settled near the Nile thousands of years ago. Upper and Lower Egypt were once separate, then Pharaoh Mena united them. Ancient Egyptian history includes the Old, Middle and New Kingdoms.",
    "keyIdeas": [
      "The Nile supported settlement and travel.",
      "Lower Egypt was in the north and Upper Egypt in the south.",
      "Important dynasties ruled during three major kingdoms."
    ],
    "checks": [
      [
        "Lower Egypt was in the north.",
        true
      ],
      [
        "Upper Egypt was beside the Mediterranean Sea.",
        false
      ],
      [
        "Mena united the two parts of Egypt.",
        true
      ],
      [
        "A dynasty is a family of rulers.",
        true
      ],
      [
        "The New Kingdom came before the Old Kingdom.",
        false
      ],
      [
        "The Nile helped Egypt become powerful.",
        true
      ]
    ],
    "sentences": [
      "People settled near the Nile thousands of years ago.",
      "Lower Egypt was in the north.",
      "Upper Egypt was in the south.",
      "Pharaoh Mena united the two lands.",
      "Egypt controlled travel on the Nile.",
      "Important dynasties ruled for many years.",
      "The New Kingdom followed the Middle Kingdom."
    ],
    "tips": [
      "BCE dates move towards smaller numbers as time moves forward.",
      "The Nile flows north, even though Upper Egypt is in the south."
    ],
    "practice": [
      {
        "prompt": "The ancient Egyptians ___ pyramids.",
        "options": [
          "built",
          "build",
          "building",
          "builds"
        ],
        "answer": "built",
        "explanation": "Built is the irregular past form of build."
      },
      {
        "prompt": "Mena ___ the two parts of Egypt.",
        "options": [
          "united",
          "unite",
          "uniting",
          "unites"
        ],
        "answer": "united",
        "explanation": "Add -d to unite for the past simple."
      },
      {
        "prompt": "Upper and Lower Egypt ___ separate areas.",
        "options": [
          "were",
          "was",
          "is",
          "be"
        ],
        "answer": "were",
        "explanation": "Use were with a plural subject in the past."
      },
      {
        "prompt": "Egypt ___ powerful.",
        "options": [
          "became",
          "become",
          "becomes",
          "becoming"
        ],
        "answer": "became",
        "explanation": "Became is the past form of become."
      }
    ],
    "passage": [
      "People settled near the Nile thousands of years ago. Upper Egypt was in the south and Lower Egypt was in the north. Pharaoh Mena united the two parts, and control of travel on the Nile helped Egypt become powerful.",
      "Important dynasties ruled during the Old, Middle and New Kingdoms. People built pyramids, worked together and developed writing. When we describe finished historical events, we use the past simple: settled, united, built, became and were."
    ],
    "bookPages": [
      38,
      39
    ]
  },
  "u3l4": {
    "title": "CLIL: Music",
    "strapline": "Listen to the traditional sounds of different Egyptian regions.",
    "objectives": [
      "Name traditional instruments.",
      "Compare regional folk music.",
      "Classify string, wind and percussion sounds."
    ],
    "definitions": [
      [
        "folk music",
        "traditional music passed through a community"
      ],
      [
        "instrument",
        "an object used to make music"
      ],
      [
        "string instrument",
        "an instrument that makes sound from vibrating strings"
      ],
      [
        "wind instrument",
        "an instrument played by blowing air"
      ],
      [
        "percussion",
        "instruments played by hitting or shaking"
      ],
      [
        "oud",
        "a pear-shaped Middle Eastern string instrument"
      ],
      [
        "ney",
        "a traditional flute played by blowing"
      ],
      [
        "rhythm",
        "the pattern of beats in music"
      ],
      [
        "clapping",
        "making a sound by striking the hands together"
      ],
      [
        "drumming",
        "playing rhythm on a drum"
      ]
    ],
    "languageTitle": "Talking about musical traditions",
    "languageNotes": [
      "Use from to connect music to a region.",
      "Use such as to give examples of instruments.",
      "Use includes to add parts of a musical style."
    ],
    "readingTitle": "Music Across Egypt",
    "summary": "Egyptian folk music changes from one region to another. Saidi, Nubian and Bedouin traditions use different instruments, rhythms, clapping, drumming and singing.",
    "keyIdeas": [
      "Saidi music uses string and wind instruments.",
      "Clapping and drumming are important in Nubian music.",
      "Bedouin songs often describe special events."
    ],
    "checks": [
      [
        "The oud is a string instrument.",
        true
      ],
      [
        "The ney is played by hitting it.",
        false
      ],
      [
        "Nubian music often uses clapping and drumming.",
        true
      ],
      [
        "All Egyptian folk music is exactly the same.",
        false
      ],
      [
        "Rhythm is a pattern of beats.",
        true
      ],
      [
        "Folk music can show regional traditions.",
        true
      ]
    ],
    "sentences": [
      "Egypt has many styles of folk music.",
      "The oud is a string instrument.",
      "The ney is a wind instrument.",
      "Saidi musicians use several traditional instruments.",
      "Nubian music often includes clapping and drumming.",
      "Bedouin music includes singing.",
      "Rhythm helps people move together."
    ],
    "tips": [
      "Music is usually uncountable; say some music, not a music.",
      "Musician is a person; musical is an adjective."
    ],
    "passage": [
      "Egypt has folk music from many regions. Saidi music uses string and wind instruments, and performers may use an oboe. Nubian music uses clapping, drumming and singing, sometimes mixed with other styles.",
      "Bedouin music can use the shabbaba and the rebaba and includes singing about special events. Instruments such as the ney, oud, rebaba, qanun and oboe produce different sounds. Music is part of Egypt’s history and traditions."
    ],
    "bookPages": [
      40,
      41
    ]
  },
  "u3l5": {
    "title": "Writing: Using Topic Sentences",
    "strapline": "Describe Egyptian folk dancing with vivid and organised details.",
    "objectives": [
      "Identify useful descriptive details.",
      "Organise a paragraph by topic.",
      "Write about music, movement and costume."
    ],
    "definitions": [
      [
        "folk dancing",
        "traditional dancing connected to a community"
      ],
      [
        "lively",
        "full of energy and excitement"
      ],
      [
        "colourful",
        "having many bright colours"
      ],
      [
        "costume",
        "special clothing worn for a performance"
      ],
      [
        "pattern",
        "a repeated decorative design or movement"
      ],
      [
        "perform",
        "to present music, dance or drama to people"
      ],
      [
        "tradition",
        "a custom passed from one generation to another"
      ],
      [
        "stick",
        "a long thin piece of wood used in some dances"
      ],
      [
        "plain",
        "simple and without decoration"
      ],
      [
        "famous",
        "known by many people"
      ]
    ],
    "languageTitle": "Topic sentences and supporting details",
    "languageNotes": [
      "A topic sentence introduces the main idea of a paragraph.",
      "Read a paragraph about folk dancing and choose the sentence that covers all its details.",
      "Supporting details explain music, costumes, movement and instruments.",
      "Do not choose a topic sentence that describes only one small detail."
    ],
    "readingTitle": "Folk Dancing in Egypt",
    "summary": "Egyptian folk dances reflect regional music and traditions. Dancers may use rhythmic steps, sticks and special costumes. Each region adds its own instruments and performance style.",
    "keyIdeas": [
      "Dance and folk music are closely linked.",
      "Costumes can be plain, patterned or brightly coloured.",
      "Strong verbs and adjectives make descriptions lively."
    ],
    "checks": [
      [
        "A costume is special clothing for a performance.",
        true
      ],
      [
        "Plain means covered in many patterns.",
        false
      ],
      [
        "Folk dance can reflect regional traditions.",
        true
      ],
      [
        "Descriptive writing should avoid all adjectives.",
        false
      ],
      [
        "Perform is a verb.",
        true
      ],
      [
        "A paragraph is clearer when related details stay together.",
        true
      ]
    ],
    "sentences": [
      "Folk dancing has a long history in Egypt.",
      "Nubian dancing is lively and colourful.",
      "Dancers move to the rhythm of the music.",
      "Some performers use sticks in careful patterns.",
      "Special costumes may be dark or brightly coloured.",
      "Musicians play traditional instruments.",
      "A clear paragraph groups related details."
    ],
    "tips": [
      "Use -ly adverbs to describe actions: carefully, quickly, proudly.",
      "Avoid repeating nice; choose precise adjectives such as lively or colourful."
    ],
    "practice": [
      {
        "prompt": "Which topic sentence fits a paragraph about costumes, steps and music?",
        "options": [
          "Folk dances show different Egyptian traditions.",
          "A stick is made of wood.",
          "One dancer has a blue shirt.",
          "I lost my shoes."
        ],
        "answer": "Folk dances show different Egyptian traditions.",
        "explanation": "A topic sentence covers the whole paragraph."
      },
      {
        "prompt": "What do supporting sentences do?",
        "options": [
          "Give details about the main idea.",
          "Change to a new topic every time.",
          "Replace all the verbs.",
          "Always repeat the title."
        ],
        "answer": "Give details about the main idea.",
        "explanation": "Supporting details explain and develop the topic sentence."
      }
    ],
    "passage": [
      "Folk dancing is linked to the music of different Egyptian regions. Nubian dancing can be lively and colourful. Saidi performers use steps and sticks with music, and some dancers wear plain dark clothing.",
      "On the Suez Canal, the music and movements of the Simsimiyya dance reflect another tradition. A clear paragraph introduces its dance with a topic sentence and adds details about costumes, instruments and movements."
    ],
    "bookPages": [
      44,
      45
    ]
  },
  "u5l1": {
    "title": "Natural Resources",
    "strapline": "Discover the materials we receive from nature and use every day.",
    "objectives": [
      "Define natural resource.",
      "Classify renewable and non-renewable resources.",
      "Connect resources to everyday products."
    ],
    "definitions": [
      [
        "natural resource",
        "a useful material or source that comes from nature"
      ],
      [
        "renewable",
        "able to be replaced naturally in a useful time"
      ],
      [
        "non-renewable",
        "limited and not quickly replaced after use"
      ],
      [
        "petroleum",
        "a natural liquid used to make fuel and plastic"
      ],
      [
        "mineral",
        "a natural solid substance found in the Earth"
      ],
      [
        "metal",
        "a strong material such as iron, gold or silver"
      ],
      [
        "soil",
        "the upper layer of earth where plants can grow"
      ],
      [
        "timber",
        "wood prepared for building"
      ],
      [
        "purpose",
        "the reason something is used or made"
      ],
      [
        "replace",
        "to provide a new thing instead of one that is used"
      ]
    ],
    "languageTitle": "Defining and classifying",
    "languageNotes": [
      "Use is a or are materials to define a resource.",
      "Use can be to describe possibility.",
      "Use whereas to compare renewable and non-renewable resources."
    ],
    "readingTitle": "Resources All Around Us",
    "summary": "Classrooms, homes and food depend on wood, stone, metal, petroleum, water and soil. Some resources can be renewed, while others may run out and must be used carefully.",
    "keyIdeas": [
      "Many manufactured products begin as natural resources.",
      "Sun, wind and flowing water are renewable.",
      "Metal and petroleum are non-renewable."
    ],
    "checks": [
      [
        "Petroleum is a natural resource.",
        true
      ],
      [
        "Renewable means a resource can never be used.",
        false
      ],
      [
        "Soil supports plant growth.",
        true
      ],
      [
        "Metal can be replaced immediately by nature.",
        false
      ],
      [
        "Wood comes from trees.",
        true
      ],
      [
        "Natural resources have many purposes.",
        true
      ]
    ],
    "sentences": [
      "Natural resources come from nature.",
      "Wood is used to make furniture.",
      "Stone can be used to construct buildings.",
      "Plastic is made from petroleum.",
      "Plants grow in soil.",
      "Sunlight is a renewable resource.",
      "Non-renewable resources can run out."
    ],
    "tips": [
      "Resource is countable: one resource, many resources.",
      "Natural does not always mean renewable."
    ],
    "passage": [
      "Natural resources are materials we get from the world around us. Wood can become furniture; stone can be used in buildings; petroleum can be made into plastic. Metal, soil and water are also resources.",
      "Renewable resources can be replaced naturally in a useful time. Non-renewable resources, such as metals and fossil fuels, take much longer to form. We should use resources carefully and understand where the products in our lives come from."
    ],
    "bookPages": [
      62,
      63
    ]
  },
  "u5l3": {
    "title": "Renewable Energy",
    "strapline": "Turn sunlight, wind, waves and tides into cleaner power.",
    "objectives": [
      "Identify four renewable energy types.",
      "Explain how solar panels work.",
      "Describe a school visit to a solar farm."
    ],
    "definitions": [
      [
        "solar power",
        "energy collected from sunlight"
      ],
      [
        "wind power",
        "energy produced from moving air"
      ],
      [
        "wave power",
        "energy produced from the movement of sea waves"
      ],
      [
        "tidal power",
        "energy produced from the regular movement of tides"
      ],
      [
        "solar panel",
        "a device that collects energy from sunlight"
      ],
      [
        "solar farm",
        "a large area containing many solar panels"
      ],
      [
        "electricity",
        "a form of energy used to power machines and lights"
      ],
      [
        "engineer",
        "a person who designs or builds useful systems"
      ],
      [
        "collect",
        "to gather things together"
      ],
      [
        "run out",
        "to be completely used so none remains"
      ]
    ],
    "languageTitle": "Talking about energy and future results",
    "languageNotes": [
      "Use comes from to name an energy source.",
      "Use will for a future result or prediction.",
      "Use so to explain why one place is suitable."
    ],
    "readingTitle": "Solar Panels in the Desert",
    "summary": "A class watches a solar farm being built near the desert. Engineers explain that the area's strong sunshine makes it an excellent place to collect solar energy and produce electricity.",
    "keyIdeas": [
      "Renewable resources do not run out quickly.",
      "Deserts receive strong sunshine for solar power.",
      "Engineers and workers build energy systems together."
    ],
    "checks": [
      [
        "Solar panels collect energy from the sun.",
        true
      ],
      [
        "Wind power depends on moving water.",
        false
      ],
      [
        "A solar farm contains many panels.",
        true
      ],
      [
        "Renewable resources always run out immediately.",
        false
      ],
      [
        "Engineers can help design energy systems.",
        true
      ],
      [
        "The desert can be a good place for solar power.",
        true
      ]
    ],
    "sentences": [
      "Renewable energy comes from resources that will not quickly run out.",
      "Solar panels collect energy from sunlight.",
      "Wind turbines use moving air.",
      "Wave power uses the movement of sea waves.",
      "Tidal power uses the movement of tides.",
      "Workers are building a solar farm.",
      "The new panels will produce electricity."
    ],
    "tips": [
      "Electric is an adjective; electricity is a noun.",
      "Use energy for the general power and power for a particular source or supply."
    ],
    "passage": [
      "Saleem walks to school through a hot, sunny desert area. He sees engineers and workers building a solar farm. An engineer explains that solar panels collect energy from the sun.",
      "The area receives sunshine for much of the year, so it is suitable for solar power. Other renewable energy sources include wind, waves and tides. Engineers connect the panels and the systems that supply electricity."
    ],
    "extensions": [
      {
        "heading": "Solar energy: advantages and disadvantages",
        "text": "Sunlight is a renewable source, and solar panels can provide electricity without burning fossil fuels during use. Panels can be fitted on roofs. However, panels cost money, large solar farms need space, and electricity production depends on available sunlight. A balanced description explains both benefits and limits."
      }
    ],
    "bookPages": [
      64,
      65
    ]
  },
  "u5l5": {
    "title": "Teamwork",
    "strapline": "Build a positive team where every idea and person matters.",
    "objectives": [
      "Identify strong teamwork habits.",
      "Discuss responsibility and respect.",
      "Rank and justify team values."
    ],
    "definitions": [
      [
        "collaborate",
        "to work actively with other people"
      ],
      [
        "communicate",
        "to share information, ideas or feelings"
      ],
      [
        "responsible",
        "trusted to complete duties carefully"
      ],
      [
        "positive attitude",
        "a hopeful way of thinking and behaving"
      ],
      [
        "solve",
        "to find an answer to a problem"
      ],
      [
        "supportive",
        "giving help and encouragement"
      ],
      [
        "flexible",
        "willing to change when needed"
      ],
      [
        "reliable",
        "able to be trusted to do what was promised"
      ],
      [
        "respect",
        "care for other people's ideas and feelings"
      ],
      [
        "brainstorm",
        "to produce many ideas before choosing one"
      ]
    ],
    "languageTitle": "Advice for a good team",
    "languageNotes": [
      "Use should to give helpful advice.",
      "Use imperatives for clear team rules: Listen carefully.",
      "Use instead of to suggest a better action."
    ],
    "readingTitle": "How to Be a Good Team Member",
    "summary": "Successful teams communicate, collaborate, act responsibly, solve problems and stay positive. Team members listen to different ideas, complete their tasks and ask for help when needed.",
    "keyIdeas": [
      "Good communication includes listening.",
      "Responsibility means completing your part.",
      "A positive team focuses on solutions rather than blame."
    ],
    "checks": [
      [
        "Collaborate means work together.",
        true
      ],
      [
        "A reliable person often forgets promises.",
        false
      ],
      [
        "Respect includes listening to other ideas.",
        true
      ],
      [
        "Teams should hide problems from one another.",
        false
      ],
      [
        "Brainstorming creates several possible ideas.",
        true
      ],
      [
        "A positive attitude can help a team succeed.",
        true
      ]
    ],
    "sentences": [
      "Share your ideas with the team.",
      "Listen carefully to other members.",
      "Complete your part of the project.",
      "Ask for help when a task is difficult.",
      "Brainstorm several possible solutions.",
      "Stay calm during challenging moments.",
      "Show respect for every team member."
    ],
    "tips": [
      "Teamwork is usually uncountable.",
      "Advice is a noun; advise is a verb."
    ],
    "passage": [
      "A successful team shares ideas and listens carefully. Team members communicate, collaborate and act responsibly. Each person completes their part and asks for help when a task is difficult.",
      "Teams solve problems together and keep a positive attitude. A job application email introduces its writer, explains relevant skills and experience, and asks politely about the job. Read the renewable-energy job advertisement before choosing what information to include."
    ],
    "extensions": [
      {
        "heading": "Write a job application email",
        "text": "Read the advertisement carefully. Start your email with a suitable greeting. Introduce yourself and explain why you are interested in the job. In the main part, describe relevant skills, experience and training. Finish politely and include your name. Match your information to the employer’s needs."
      }
    ],
    "bookPages": [
      68,
      69
    ]
  },
  "u6l1": {
    "title": "Transportation",
    "strapline": "Travel by air, road, rail, water and even through pipes.",
    "objectives": [
      "Classify types of transportation.",
      "Listen for transport details.",
      "Discuss how people and goods move."
    ],
    "definitions": [
      [
        "transportation",
        "the movement of people or goods from one place to another"
      ],
      [
        "air transport",
        "travel using aircraft"
      ],
      [
        "road transport",
        "travel using roads"
      ],
      [
        "rail transport",
        "travel using trains and railways"
      ],
      [
        "water transport",
        "travel using boats or ships"
      ],
      [
        "pipeline",
        "a long pipe that carries water, oil or gas"
      ],
      [
        "route",
        "the path used to travel between places"
      ],
      [
        "cargo",
        "goods carried by a ship, plane or vehicle"
      ],
      [
        "electric",
        "powered by electricity"
      ],
      [
        "government",
        "the group that manages a country or region"
      ]
    ],
    "languageTitle": "Talking about transport systems",
    "languageNotes": [
      "Use by + transport without an article: by train, by ship.",
      "Use on for public transport and in for most private vehicles.",
      "Use will to discuss future transport plans.",
      "Use Have you ever + past participle to ask about travel experiences: Have you ever travelled on a train? Answer Yes, I have or No, I haven’t.",
      "To give a finished time and place, use the past simple: I went to Cairo last year."
    ],
    "readingTitle": "Five Ways to Move",
    "summary": "People and goods move by aircraft, roads, railways, waterways and pipelines. Each system has a different purpose, route and effect on communities and the environment.",
    "keyIdeas": [
      "Pipelines can carry water to new towns.",
      "Rail can move many passengers or goods.",
      "Ancient and modern Egyptians have used boats on the Nile."
    ],
    "checks": [
      [
        "A pipeline can carry water.",
        true
      ],
      [
        "Rail transport uses airplanes.",
        false
      ],
      [
        "Cargo means goods being carried.",
        true
      ],
      [
        "Ships are part of water transport.",
        true
      ],
      [
        "A route is a type of fuel.",
        false
      ],
      [
        "Electric trains use electricity.",
        true
      ]
    ],
    "sentences": [
      "People travel by air, road, rail and water.",
      "Pipelines carry water over long distances.",
      "A train follows a railway route.",
      "Ships carry cargo through the Suez Canal.",
      "Aircraft connect distant cities.",
      "The government will build new transport systems.",
      "Electric transport can reduce some pollution."
    ],
    "tips": [
      "Transport is common in British English; transportation is common in American English.",
      "Say by train but on the train."
    ],
    "passage": [
      "People and goods travel by air, rail, road and water. Planes, trains, cars, boats and ships have different uses. Families may choose a car or train for a journey, while businesses move products between towns and countries.",
      "Transportation also helps communities. Boats can carry people and goods between places near water. Discuss which kind of transport is suitable for a journey and explain your reason."
    ],
    "bookPages": [
      76,
      77
    ]
  },
  "u6l2": {
    "title": "Language: Predictions with Will",
    "strapline": "Make exciting predictions about travel and life in the future.",
    "objectives": [
      "Form positive and negative future sentences.",
      "Ask and answer will questions.",
      "Use future time expressions."
    ],
    "definitions": [
      [
        "prediction",
        "a statement about what someone thinks will happen"
      ],
      [
        "future",
        "the time after the present"
      ],
      [
        "will",
        "a modal verb used for predictions and future decisions"
      ],
      [
        "won't",
        "the short form of will not"
      ],
      [
        "self-driving",
        "able to move safely without a human driver"
      ],
      [
        "flying taxi",
        "a proposed aircraft used for short passenger trips"
      ],
      [
        "robot",
        "a machine that can perform tasks automatically"
      ],
      [
        "solar energy",
        "energy that comes from sunlight"
      ],
      [
        "Mars",
        "the fourth planet from the Sun"
      ],
      [
        "vacation",
        "a period of time for rest or travel"
      ]
    ],
    "languageTitle": "Will and won't",
    "languageNotes": [
      "Use will + base verb: People will travel.",
      "Use won't + base verb for negatives.",
      "Move will before the subject in questions: Will people live on Mars?",
      "Use a full stop at the end of a statement, a question mark at the end of a question and an exclamation mark for strong feeling.",
      "Commas separate parts of a sentence. An apostrophe can mark a contraction: will not → won’t.",
      "The prefix pre- means before, as in preschool or preview. Predict means say what may happen before it happens."
    ],
    "readingTitle": "Tomorrow's Transportation",
    "summary": "Future predictions imagine solar aircraft, flying taxis, robots, self-driving cars and space travel. Will helps us express these ideas even when we are not certain they will happen.",
    "keyIdeas": [
      "The verb after will stays in the base form.",
      "Questions begin with will.",
      "Short answers repeat will or won't."
    ],
    "checks": [
      [
        "Will is followed by the base verb.",
        true
      ],
      [
        "Won't means will not.",
        true
      ],
      [
        "We add -s to the verb after will with he.",
        false
      ],
      [
        "Will people travel? is a future question.",
        true
      ],
      [
        "A prediction is always a certain fact.",
        false
      ],
      [
        "No, they won't is a correct short answer.",
        true
      ]
    ],
    "sentences": [
      "People will travel in cleaner vehicles.",
      "Airplanes will use more renewable energy.",
      "Robots will not drive every train next year.",
      "Will people use flying taxis in the future?",
      "Yes, they will.",
      "My family won't buy a self-driving car soon.",
      "Perhaps humans will travel to Mars one day."
    ],
    "tips": [
      "Never write will to travel; write will travel.",
      "The contraction 'll joins to the subject: she'll, we'll, they'll."
    ],
    "passage": [
      "Predictions describe things we think will happen in the future. Use will with a base verb: People will travel to Mars. Use won’t for a negative prediction: My parents won’t buy a self-driving car next year.",
      "To make a question, put will before the subject: Will you go next year? Answer with Yes, I will or No, I won’t. Our predictions are ideas about the future; they are not promises that every event will happen."
    ],
    "extraVocabulary": [
      [
        "full stop",
        "the mark at the end of a statement"
      ],
      [
        "comma",
        "a mark separating parts of a sentence"
      ],
      [
        "question mark",
        "the mark at the end of a question"
      ],
      [
        "exclamation mark",
        "a mark showing strong feeling"
      ],
      [
        "apostrophe",
        "a mark used in contractions and possession"
      ],
      [
        "prefix",
        "letters added to the beginning of a word"
      ]
    ],
    "bookPages": [
      78,
      79
    ]
  },
  "u6l3": {
    "title": "Tech Jobs",
    "strapline": "Meet the designers and engineers creating tomorrow's technology.",
    "objectives": [
      "Understand modern technology jobs.",
      "Listen to a simple careers podcast.",
      "Discuss skills needed for future work."
    ],
    "definitions": [
      [
        "technology",
        "tools and systems created using scientific knowledge"
      ],
      [
        "UX designer",
        "a person who improves how people experience a product"
      ],
      [
        "VR",
        "virtual reality, a computer-created environment that feels immersive"
      ],
      [
        "robotics engineer",
        "a person who designs or builds robots"
      ],
      [
        "autonomous",
        "able to operate without direct human control"
      ],
      [
        "podcast",
        "an audio programme available online"
      ],
      [
        "search engine",
        "an online tool used to find information"
      ],
      [
        "career",
        "a long-term path of work and learning"
      ],
      [
        "skill",
        "an ability developed through learning and practice"
      ],
      [
        "creative",
        "able to develop original and useful ideas"
      ]
    ],
    "languageTitle": "Describing jobs and skills",
    "languageNotes": [
      "Use a or an before a singular job title.",
      "Use someone who to explain a job.",
      "Use need to + base verb to describe required skills."
    ],
    "readingTitle": "Jobs in Technology",
    "summary": "Technology careers include user-experience design, virtual-reality development and robotics engineering. These jobs combine creativity, problem-solving, communication and technical knowledge.",
    "keyIdeas": [
      "UX means user experience.",
      "VR can be used for learning as well as games.",
      "Robots can work on farms, in factories and in schools."
    ],
    "checks": [
      [
        "UX stands for user experience.",
        true
      ],
      [
        "VR is only used for games.",
        false
      ],
      [
        "An autonomous machine can operate with less direct control.",
        true
      ],
      [
        "A podcast is always a printed book.",
        false
      ],
      [
        "Tech jobs can need creativity.",
        true
      ],
      [
        "Robotics engineers work with robots.",
        true
      ]
    ],
    "sentences": [
      "A UX designer improves user experiences.",
      "Virtual reality creates an immersive digital environment.",
      "A robotics engineer designs useful machines.",
      "Autonomous machines can perform some tasks independently.",
      "A podcast shares information through audio.",
      "Future workers will need creative skills.",
      "Good communication is important in technology careers."
    ],
    "tips": [
      "Tech is an informal short form of technology.",
      "Use an before autonomous because it begins with a vowel sound."
    ],
    "passage": [
      "Technology creates many possible careers. Tech jobs can involve robotics, artificial intelligence, medical applications, special effects and space travel. A worker’s interests and skills can help them choose a career.",
      "Some designers make positive experiences in entertainment or education. Engineers build systems, and researchers use technology to solve problems. Discuss a job you would like to do and give reasons for your choice."
    ],
    "extraVocabulary": [
      [
        "look up",
        "to search for information"
      ],
      [
        "link",
        "a connection to another web page"
      ],
      [
        "browser",
        "a program used to open websites"
      ],
      [
        "ad",
        "a short form of advertisement"
      ],
      [
        "specific",
        "exact and clearly named"
      ]
    ],
    "extensions": [
      {
        "heading": "Using search engines",
        "text": "A search engine helps you find information online. Choose safe search tools and enter specific words in the search box. Read the results, compare information and choose a suitable link. Use a browser to open websites. Avoid clicking advertisements when you are trying to choose an information source."
      }
    ],
    "bookPages": [
      80,
      81
    ]
  },
  "u6l4": {
    "title": "CLIL: ICT — Passwords and Passphrases",
    "strapline": "Protect your accounts with smart, memorable security habits.",
    "objectives": [
      "Recognise strong and weak passwords.",
      "Create a safe passphrase.",
      "Follow clear online-safety instructions."
    ],
    "definitions": [
      [
        "password",
        "a secret set of characters used to enter an account"
      ],
      [
        "passphrase",
        "a longer password made from several memorable words"
      ],
      [
        "account",
        "a personal space or record on a digital service"
      ],
      [
        "personal information",
        "private facts such as a name, birthday or address"
      ],
      [
        "character",
        "a letter, number, space or symbol in digital text"
      ],
      [
        "obvious",
        "easy to notice or guess"
      ],
      [
        "secure",
        "protected from danger or unwanted access"
      ],
      [
        "private",
        "not meant to be shared with everyone"
      ],
      [
        "capital letter",
        "a large form of a letter such as A or B"
      ],
      [
        "cyber safety",
        "safe and responsible behaviour online"
      ]
    ],
    "languageTitle": "Imperatives and sequencing",
    "languageNotes": [
      "Use the base verb for instructions: Choose four words.",
      "Use don't + base verb for warnings.",
      "Use first, next, then and finally to order steps."
    ],
    "readingTitle": "Create a Strong Passphrase",
    "summary": "Strong passwords avoid personal information, obvious words and short patterns. A memorable passphrase combines several unrelated words, spaces and capital letters and should be different for every account.",
    "keyIdeas": [
      "Long passphrases are usually harder to guess.",
      "Personal information should not appear in passwords.",
      "Passwords must remain private."
    ],
    "checks": [
      [
        "A passphrase can contain several words.",
        true
      ],
      [
        "A birthday is always safe to use as a password.",
        false
      ],
      [
        "Different accounts should use different passwords.",
        true
      ],
      [
        "Passwords should be shared with friends.",
        false
      ],
      [
        "Capital letters can make a passphrase stronger.",
        true
      ],
      [
        "1234 is an obvious pattern.",
        true
      ]
    ],
    "sentences": [
      "Choose several words that you can remember.",
      "Add spaces between the words.",
      "Use some capital letters.",
      "Do not include your birthday.",
      "Avoid easy words and number patterns.",
      "Use a different password for each account.",
      "Keep every password private."
    ],
    "tips": [
      "This lesson teaches safe habits, but never type a real password into a classroom activity.",
      "Phrase means a small group of words; passphrase combines pass and phrase."
    ],
    "passage": [
      "Strong passwords help protect personal information. Do not use names, birthdays, phone numbers or common word lists. Do not share passwords or use one password for every account.",
      "A passphrase is a longer group of words. A memorable combination can be stronger than a short password, especially when it is unique. Use the lesson’s steps to practise constructing an example; never post your real password in a class activity."
    ],
    "bookPages": [
      82,
      83
    ]
  },
  "u6l5": {
    "title": "Writing: Structuring a Paragraph",
    "strapline": "Follow a container ship through the Suez Canal and meet its captain.",
    "objectives": [
      "Understand shipping vocabulary.",
      "Sequence events in a short story.",
      "Ask and answer interview questions."
    ],
    "definitions": [
      [
        "container ship",
        "a large ship that carries goods inside metal containers"
      ],
      [
        "captain",
        "the person in command of a ship"
      ],
      [
        "Suez Canal",
        "the waterway in Egypt connecting the Mediterranean and Red Seas"
      ],
      [
        "container",
        "a large strong box used to transport goods"
      ],
      [
        "cargo",
        "goods carried by a ship"
      ],
      [
        "straight",
        "not curved or bent"
      ],
      [
        "windy",
        "having a lot of moving air"
      ],
      [
        "interview",
        "a conversation in which one person asks questions"
      ],
      [
        "wave",
        "to move a hand as a greeting"
      ],
      [
        "transport",
        "to carry people or goods between places"
      ]
    ],
    "languageTitle": "Story sequence and reported facts",
    "languageNotes": [
      "Use first, later and finally to sequence events.",
      "Use asked and answered when reporting a conversation.",
      "Use must or has to for an important job requirement."
    ],
    "readingTitle": "A Ship Captain Visits",
    "summary": "Heba watches a friend's container ship pass through the Suez Canal. Later she interviews the captain and learns where the ship has travelled, what it carries and why steering a huge ship is difficult work.",
    "keyIdeas": [
      "Container ships carry goods between countries.",
      "The captain must guide a very large ship carefully.",
      "Wind can make steering more difficult."
    ],
    "checks": [
      [
        "A container ship carries goods.",
        true
      ],
      [
        "The Suez Canal is a railway.",
        false
      ],
      [
        "A captain is responsible for a ship.",
        true
      ],
      [
        "Wind can make a ship harder to control.",
        true
      ],
      [
        "An interview contains no questions.",
        false
      ],
      [
        "Cargo can include toys and clothes.",
        true
      ]
    ],
    "sentences": [
      "Heba watched the ships in the Suez Canal.",
      "A large container ship passed her house.",
      "Her family waved to the captain.",
      "Later, Heba prepared interview questions.",
      "The ship carried cargo from another country.",
      "A captain has to guide the ship carefully.",
      "Strong wind can make the job difficult."
    ],
    "tips": [
      "Ship can be a noun or a verb meaning send goods.",
      "Captain has stress on the first syllable."
    ],
    "practice": [
      {
        "prompt": "Which part introduces a paragraph’s main subject?",
        "options": [
          "Opening",
          "Main part",
          "Conclusion",
          "Picture"
        ],
        "answer": "Opening",
        "explanation": "The opening introduces the subject."
      },
      {
        "prompt": "Where should most supporting details go?",
        "options": [
          "Main part",
          "Title only",
          "Opening word",
          "Author’s name"
        ],
        "answer": "Main part",
        "explanation": "The main part develops the subject with details."
      },
      {
        "prompt": "What should a conclusion do?",
        "options": [
          "Bring the main ideas together.",
          "Introduce an unrelated topic.",
          "Remove all the details.",
          "Replace the opening."
        ],
        "answer": "Bring the main ideas together.",
        "explanation": "A conclusion closes the paragraph clearly."
      }
    ],
    "passage": [
      "Heba visits her father, who works on a ship travelling through the Suez Canal. She asks about the ship, its work and the captain’s responsibilities. They discuss engines, transporting goods and the people who live and work on board.",
      "A paragraph has an opening, a main part and a conclusion. The opening introduces the subject; the main part gives details; and the conclusion brings the ideas together. Use the ship conversation to plan a clear paragraph about a job."
    ],
    "bookPages": [
      84,
      85
    ]
  },
  "u1l4-2026": {
    "title": "Literature Corner: Alice",
    "strapline": "Follow Alice into a surprising world and read for story details.",
    "objectives": [
      "Sequence the events in a short story.",
      "Describe changes in Alice’s size and feelings.",
      "Find evidence for your answers."
    ],
    "definitions": [
      [
        "rabbit",
        "a small animal with long ears"
      ],
      [
        "follow",
        "to go after someone or something"
      ],
      [
        "hole",
        "an opening in the ground"
      ],
      [
        "strange",
        "unusual or surprising"
      ],
      [
        "shrink",
        "to become smaller"
      ],
      [
        "grow",
        "to become bigger"
      ],
      [
        "confused",
        "unable to understand what is happening"
      ],
      [
        "wonderful",
        "very good or amazing"
      ],
      [
        "angry",
        "feeling upset about something"
      ],
      [
        "breathe",
        "to move air into and out of the lungs"
      ]
    ],
    "languageTitle": "Retelling events in order",
    "languageNotes": [
      "Use first, then and finally to put story events in order.",
      "Past verbs tell what happened: Alice followed the rabbit.",
      "Describe feelings with adjectives: confused, angry and happy."
    ],
    "readingTitle": "Alice and the White Rabbit",
    "summary": "Alice follows a white rabbit into Wonderland. After eating cake, she grows very tall. A strange caterpillar explains how parts of a mushroom can change her size. Alice learns to use it and feels happier.",
    "keyIdeas": [
      "The rabbit leads Alice into an unfamiliar place.",
      "The cake makes Alice grow.",
      "Different sides of the mushroom change her size."
    ],
    "checks": [
      [
        "Alice follows a white rabbit.",
        true
      ],
      [
        "The cake makes Alice smaller.",
        false
      ],
      [
        "Alice feels confused by the strange changes.",
        true
      ],
      [
        "The caterpillar has advice about a mushroom.",
        true
      ],
      [
        "Both sides of the mushroom have exactly the same effect.",
        false
      ],
      [
        "Alice feels happy at the end of this extract.",
        true
      ]
    ],
    "sentences": [
      "Alice followed the white rabbit.",
      "She arrived in a strange place.",
      "The cake made Alice grow.",
      "Alice felt confused and angry.",
      "A caterpillar spoke to Alice.",
      "The mushroom changed her size.",
      "Alice felt happy at the end."
    ],
    "tips": [
      "Look back at the story before answering a detail question.",
      "A character’s feelings can change during a story."
    ],
    "passage": [
      "Alice was enjoying a quiet day outside when a white rabbit appeared. She followed it and found herself in a strange world. After she ate some cake, she became so tall that she could hardly recognise her surroundings.",
      "Alice felt confused and angry. She met a caterpillar resting on a mushroom. It told her that one side of the mushroom would make her grow and the other side would make her shrink. Alice tried a small piece and watched what happened.",
      "The changes surprised her, but she began to understand how the mushroom worked. She used it carefully until she was a comfortable size again. At the end of the extract, Alice felt happier."
    ],
    "bookPages": [
      14,
      15
    ]
  },
  "u2l4-2026": {
    "title": "Literature Corner: Learning from the Jungle",
    "strapline": "Learn with Mowgli, Baloo and Bagheera about different abilities.",
    "objectives": [
      "Identify the characters and setting.",
      "Compare the abilities of jungle animals.",
      "Explain why every animal matters."
    ],
    "definitions": [
      [
        "jungle",
        "a warm forest with many plants and animals"
      ],
      [
        "bear",
        "a large animal with thick fur"
      ],
      [
        "panther",
        "a large wild cat"
      ],
      [
        "dragonfly",
        "an insect with a long body and two pairs of wings"
      ],
      [
        "glitter",
        "to shine with small flashes of light"
      ],
      [
        "climb",
        "to move upwards using the hands or feet"
      ],
      [
        "swim",
        "to move through water"
      ],
      [
        "special",
        "different and important in a good way"
      ],
      [
        "ability",
        "something a person or animal can do"
      ],
      [
        "important",
        "having value or meaning"
      ]
    ],
    "languageTitle": "Comparing animal abilities",
    "languageNotes": [
      "Use faster than to compare two animals.",
      "Use the slowest to compare one animal with a group.",
      "Use can + base verb for an ability: Monkeys can climb."
    ],
    "readingTitle": "Learning from the Jungle",
    "summary": "Mowgli lives in the jungle with his friends Baloo the bear and Bagheera the panther. At a river, he notices a beautiful dragonfly. His friends explain that every animal has a special ability. Being slower at one activity does not make an animal less important.",
    "keyIdeas": [
      "Mowgli learns from his animal friends.",
      "Different animals are good at different activities.",
      "Every animal is important."
    ],
    "checks": [
      [
        "Mowgli lives in the jungle.",
        true
      ],
      [
        "Baloo is a panther.",
        false
      ],
      [
        "Bagheera is a panther.",
        true
      ],
      [
        "The dragonfly has glittering wings.",
        true
      ],
      [
        "Only the fastest animals are important.",
        false
      ],
      [
        "The story values different animal abilities.",
        true
      ]
    ],
    "sentences": [
      "Mowgli lived in the jungle.",
      "Baloo was Mowgli’s friend.",
      "Bagheera was a black panther.",
      "The dragonfly had glittering wings.",
      "Different animals have different abilities.",
      "Monkeys can climb trees.",
      "Every animal is important."
    ],
    "tips": [
      "Compare abilities without deciding that one animal has no value.",
      "Good at is followed by an -ing form: good at climbing."
    ],
    "passage": [
      "Mowgli lived among the animals of the jungle. Baloo, a big bear, and Bagheera, a black panther, were his friends. One morning, they walked together to the river.",
      "A beautiful green dragonfly flew past with blue, glittering wings. Mowgli admired how quickly it moved. His friends reminded him that other animals had different talents: some could swim well and others could climb quickly.",
      "Mowgli thought about monkeys climbing trees and about his friends’ different abilities. He learnt that the jungle needed all its animals. The fastest animal was not the only important one. Each animal had a place in the natural world."
    ],
    "bookPages": [
      28,
      29
    ]
  },
  "u3l4-2026": {
    "title": "Literature Corner: The Kind Prince and the Bird",
    "strapline": "Discover how small acts of kindness can help a community.",
    "objectives": [
      "Identify the setting and characters.",
      "Put the prince’s and bird’s actions in order.",
      "Explain the lesson about kindness."
    ],
    "definitions": [
      [
        "prince",
        "the son of a king or queen"
      ],
      [
        "statue",
        "a solid model of a person or animal"
      ],
      [
        "gold",
        "a valuable yellow metal"
      ],
      [
        "roof",
        "the top covering of a building"
      ],
      [
        "feather",
        "one of the light parts covering a bird"
      ],
      [
        "poor",
        "having little money for basic needs"
      ],
      [
        "kindness",
        "friendly and helpful behaviour"
      ],
      [
        "jewel",
        "a valuable stone used as decoration"
      ],
      [
        "watch",
        "to look at something carefully"
      ],
      [
        "difference",
        "a change or effect that someone makes"
      ]
    ],
    "languageTitle": "Story sequence and kindness",
    "languageNotes": [
      "Use past verbs to retell a story: The bird flew over the city.",
      "Use because to explain a character’s reason for acting.",
      "A story’s message is an idea we can use in our own lives."
    ],
    "readingTitle": "The Kind Prince and the Bird",
    "summary": "A small bird rests beside a beautiful golden statue of the Happy Prince. The prince can see poor people in the city and wants to help them. The bird carries gold from the statue to families in need. Their kindness improves people’s lives.",
    "keyIdeas": [
      "The prince sees that some families need help.",
      "The bird carries gold to the people.",
      "Small acts of kindness can make a big difference."
    ],
    "checks": [
      [
        "The Happy Prince is a statue.",
        true
      ],
      [
        "The bird rests on a golden statue.",
        true
      ],
      [
        "The prince wants to keep all the gold for himself.",
        false
      ],
      [
        "The bird carries gold to families in need.",
        true
      ],
      [
        "The bird ignores the prince’s request.",
        false
      ],
      [
        "Kindness helps the community in the story.",
        true
      ]
    ],
    "sentences": [
      "The Happy Prince was a golden statue.",
      "A small bird rested near the prince.",
      "The prince watched the city.",
      "Some families needed food and clothes.",
      "The bird carried gold to the people.",
      "The families felt happier.",
      "Small acts of kindness make a difference."
    ],
    "tips": [
      "Find a character’s reason by asking: Why did they do that?",
      "Retell events in their story order before explaining the message."
    ],
    "passage": [
      "The Happy Prince was a beautiful statue above the city. Gold covered him and jewels decorated his eyes. From his high place, he could see people’s homes and streets.",
      "A little bird flew into the city and rested beside the statue. The prince explained that seeing people without enough food or warm clothes made him sad. He asked the bird to carry small pieces of his gold to the families who needed them.",
      "The bird flew across the city and shared the gold. Families used the help to get food and clothes, and their lives improved. The prince and the bird showed that even small acts of kindness could make a real difference."
    ],
    "bookPages": [
      42,
      43
    ]
  },
  "u5l3-2026": {
    "title": "Language: Possessive Adjectives",
    "strapline": "Use clear subject pronouns and possessive adjectives in science presentations.",
    "objectives": [
      "Match he, she and they to his, her and their.",
      "Use possessive adjectives before nouns.",
      "Read a job interview for information."
    ],
    "definitions": [
      [
        "subject pronoun",
        "a word such as he, she or they used as the subject"
      ],
      [
        "possessive adjective",
        "a word such as my or their that shows belonging before a noun"
      ],
      [
        "presentation",
        "a talk that explains information to an audience"
      ],
      [
        "practise",
        "to repeat an activity to improve"
      ],
      [
        "neither",
        "not one and not the other of two"
      ],
      [
        "both",
        "the two people or things together"
      ],
      [
        "experience",
        "knowledge or skill gained by doing something"
      ],
      [
        "talent",
        "a natural ability to do something well"
      ],
      [
        "train",
        "to teach someone skills for an activity or job"
      ],
      [
        "promotion",
        "a move to a more important job"
      ]
    ],
    "languageTitle": "Subject pronouns and possessive adjectives",
    "languageNotes": [
      "I → my; you → your; he → his; she → her; it → its; we → our; they → their.",
      "Put a possessive adjective before a noun: Lara presented her project.",
      "Use a subject pronoun before the verb: She presented her project.",
      "Their can refer to several people or one person whose gender is unknown.",
      "Do not confuse its, which shows belonging, with it’s, which means it is."
    ],
    "readingTitle": "Science Projects and a Job Interview",
    "summary": "Lara and Wael present science projects about global warming and tidal power. Subject pronouns replace their names, and possessive adjectives show whose project or notes we mean. A job interview introduces experience, skills, training and promotion.",
    "keyIdeas": [
      "A possessive adjective needs a following noun.",
      "The pronoun and possessive adjective must refer clearly to the same person.",
      "Interview answers describe a candidate’s skills and experience."
    ],
    "checks": [
      [
        "Her can be a possessive adjective before project.",
        true
      ],
      [
        "They usually matches the possessive adjective his.",
        false
      ],
      [
        "Both refers to two people or things.",
        true
      ],
      [
        "Neither means both of the two.",
        false
      ],
      [
        "Their can refer to one person of unknown gender.",
        true
      ],
      [
        "A promotion can mean a more important job.",
        true
      ]
    ],
    "sentences": [
      "Lara presented her science project.",
      "Wael finished his project on tidal power.",
      "Both children practised their presentations.",
      "Neither child forgot their notes.",
      "Someone raised their hand.",
      "Experience helps people do their jobs.",
      "A trainer teaches people new skills."
    ],
    "tips": [
      "Possessive adjectives come before nouns; possessive pronouns stand alone.",
      "Read the noun and its owner before choosing his, her or their."
    ],
    "passage": [
      "Lara completed a science project about global warming. She presented her project to the class. Wael did his project on tidal power. He presented his project, too.",
      "Both children practised their presentations. Neither of them forgot their notes. When the talk ended, someone raised their hand to ask a question. Here, their refers to a person whose gender is not given.",
      "In a job interview, a candidate explains their experience and talents. Employers may also ask about training and skills. Learning new skills can help an employee prepare for a promotion."
    ],
    "practice": [
      {
        "prompt": "Lara presented ___ science project.",
        "options": [
          "her",
          "his",
          "our",
          "its"
        ],
        "answer": "her",
        "explanation": "Lara is a girl; her comes before the noun phrase science project."
      },
      {
        "prompt": "Wael practised ___ presentation.",
        "options": [
          "their",
          "his",
          "my",
          "her"
        ],
        "answer": "his",
        "explanation": "Use his for a presentation belonging to Wael."
      },
      {
        "prompt": "Both children remembered ___ notes.",
        "options": [
          "its",
          "his",
          "their",
          "my"
        ],
        "answer": "their",
        "explanation": "Both children is plural, so use their."
      },
      {
        "prompt": "Someone raised ___ hand to ask a question.",
        "options": [
          "our",
          "their",
          "its",
          "my"
        ],
        "answer": "their",
        "explanation": "Their can refer to one person whose gender is not given."
      }
    ],
    "bookPages": [
      66,
      67
    ]
  },
  "u5l5-2026": {
    "title": "Literature Corner: Journey to a New Earth",
    "strapline": "Join an underground adventure inspired by Jules Verne.",
    "objectives": [
      "Identify the professor’s discovery.",
      "Sequence the journey underground.",
      "Explain the characters’ surprising findings."
    ],
    "definitions": [
      [
        "professor",
        "a teacher and researcher at a university"
      ],
      [
        "discover",
        "to find something not known before"
      ],
      [
        "volcano",
        "a mountain with an opening through which hot material can escape"
      ],
      [
        "cave",
        "a large natural hole in rock"
      ],
      [
        "underground",
        "below the surface of the ground"
      ],
      [
        "storm",
        "very bad weather with strong wind or heavy rain"
      ],
      [
        "forest",
        "a large area covered with trees"
      ],
      [
        "mushroom",
        "a fungus with a stem and a rounded top"
      ],
      [
        "journey",
        "travel from one place to another"
      ],
      [
        "believe",
        "to think that something is true"
      ]
    ],
    "languageTitle": "Following an adventure",
    "languageNotes": [
      "Retell completed events with past verbs: They found a cave.",
      "Sequence a journey with first, then, after that and finally.",
      "Distinguish the imaginary story setting from scientific facts."
    ],
    "readingTitle": "Journey to a New Earth",
    "summary": "Professor Lidenbrock finds an old message about a journey underground through an Icelandic volcano. He travels with Axel and Hans. Far below the surface, they discover huge mushrooms, a sea and unusual creatures. A storm carries their raft onwards in this imaginary adventure.",
    "keyIdeas": [
      "An old message starts the journey.",
      "The characters enter through a volcano.",
      "The underground world belongs to a fictional adventure."
    ],
    "checks": [
      [
        "Professor Lidenbrock is interested in science.",
        true
      ],
      [
        "The message says the journey begins through a volcano.",
        true
      ],
      [
        "The characters travel to a volcano in Egypt.",
        false
      ],
      [
        "They find large mushrooms underground.",
        true
      ],
      [
        "The story is a report proving that oceans exist inside every volcano.",
        false
      ],
      [
        "The characters sail on a raft.",
        true
      ]
    ],
    "sentences": [
      "The professor found an old message.",
      "The travellers went to Iceland.",
      "They entered a cave in a volcano.",
      "Their journey took them underground.",
      "They discovered enormous mushrooms.",
      "The travellers sailed on a raft.",
      "A storm carried the raft onwards."
    ],
    "tips": [
      "Fiction can imagine places that are different from the real world.",
      "Use details from this extract rather than from another version of the novel."
    ],
    "passage": [
      "Professor Lidenbrock loved science and old books. One day, he found a very old message. It described a way to travel deep below the Earth through a volcano in Iceland. The professor wanted to investigate, so Axel and Hans joined him.",
      "They found a cave and travelled underground. As they went deeper, their surroundings became stranger. They saw a forest of enormous mushrooms and came to a great sea. They built a raft to cross it.",
      "The underground world contained surprising creatures. A storm blew their raft onwards. Later, they found more land, plants and unusual animals. This extract is an imaginative adventure, rather than a scientific account of the inside of the Earth."
    ],
    "bookPages": [
      70,
      71
    ]
  }
};

export const projectContent: Record<string, ProjectContent> = {
  "u1l6": {
    "title": "Summer Camp Project",
    "strapline": "Plan a healthy and creative three-day camp.",
    "overview": "Design a camp for children aged nine and ten. Balance physical and mental activities, food, rest and fun.",
    "usefulLanguage": [
      "In the morning, we will…",
      "This activity is important because…",
      "For lunch, we can have…"
    ],
    "steps": [
      "Choose a mixture of physical and mental activities.",
      "Plan a morning and afternoon timetable.",
      "Choose healthy lunches and snacks.",
      "Explain why your choices are good for children."
    ],
    "finalProduct": "A colourful three-day camp plan with short explanations.",
    "bookPages": [
      18
    ]
  },
  "u2l6": {
    "title": "Micro-habitat Project",
    "strapline": "Investigate the small living world near you.",
    "overview": "Choose a small habitat and report on the vertebrates, invertebrates and plants that live there.",
    "usefulLanguage": [
      "This habitat is…",
      "We found…",
      "These organisms survive because…"
    ],
    "steps": [
      "Choose a safe micro-habitat.",
      "Observe without disturbing living things.",
      "Group your findings into vertebrates, invertebrates and plants.",
      "Draw and label the habitat."
    ],
    "finalProduct": "A labelled habitat picture and a short scientific report.",
    "bookPages": [
      32
    ]
  },
  "u3l6": {
    "title": "Tourist Guide Project",
    "strapline": "Create a friendly guide to a special Egyptian place.",
    "overview": "Research a place and organise information about its location, geography, attractions, history and culture.",
    "usefulLanguage": [
      "It is located in…",
      "Visitors can…",
      "This place is famous for…"
    ],
    "steps": [
      "Choose a place.",
      "Divide research into five guide sections.",
      "Write short, accurate facts.",
      "Combine the sections into a brochure."
    ],
    "finalProduct": "A clear illustrated tourist brochure.",
    "bookPages": [
      46
    ]
  },
  "u5l6": {
    "title": "Eco-vehicle Project",
    "strapline": "Invent a vehicle powered by renewable energy.",
    "overview": "Design an imaginative vehicle for personal or public transport and explain why it is eco-friendly.",
    "usefulLanguage": [
      "It runs on…",
      "This part collects…",
      "It is eco-friendly because…"
    ],
    "steps": [
      "Choose the vehicle type.",
      "Choose at least one renewable energy source.",
      "Draw and label the main parts.",
      "Explain how the design helps the environment."
    ],
    "finalProduct": "A labelled eco-vehicle design and explanation.",
    "bookPages": [
      72
    ]
  },
  "u6l6": {
    "title": "Young Entrepreneurs",
    "strapline": "Create a simple business idea with your team.",
    "overview": "Choose a product or service, decide who needs it and plan how it will be offered and transported.",
    "usefulLanguage": [
      "Our business is called…",
      "We will offer…",
      "People need it because…"
    ],
    "steps": [
      "Choose a useful product or service.",
      "Name the business.",
      "Plan where and how you will offer it.",
      "Prepare a poster and practise your presentation."
    ],
    "finalProduct": "A simple business plan and presentation poster.",
    "bookPages": [
      86
    ]
  }
};

// Display order follows the 2026–2027 textbook; persisted IDs remain stable.
export const lessonKeys: readonly (readonly string[])[] = [
  [
    "u1l1",
    "u1l2",
    "u1l3",
    "u1l4-2026",
    "u1l5",
    "u1l6"
  ],
  [
    "u2l1",
    "u2l2",
    "u2l4",
    "u2l4-2026",
    "u2l5",
    "u2l6"
  ],
  [
    "u3l1",
    "u3l2",
    "u3l4",
    "u3l4-2026",
    "u3l5",
    "u3l6"
  ],
  [
    "u5l1",
    "u5l3",
    "u5l3-2026",
    "u5l5",
    "u5l5-2026",
    "u5l6"
  ],
  [
    "u6l1",
    "u6l2",
    "u6l3",
    "u6l4",
    "u6l5",
    "u6l6"
  ]
];
export const getLessonKey = (unitId: number, lessonIndex: number) => lessonKeys[unitId - 1]?.[lessonIndex] ?? "";
export const getBankKey = (unitId: number) => `u${unitId === 5 ? 6 : unitId}-bank-2026`;
