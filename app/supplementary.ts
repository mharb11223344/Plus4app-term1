export type SupplementarySection = { heading: string; text: string; points?: string[] };
export type SupplementaryContent = { id: string; kind: 'review' | 'non-fiction' | 'story' | 'poetry' | 'project'; title: string; subtitle: string; intro: string; vocabulary: [string,string][]; sections: SupplementarySection[]; takeaway: string; cover: string; color: string; soft: string; bookPages?: number[] };

export const supplementaryContent: Record<string, SupplementaryContent> = {
  "review1": {
    "id": "review1",
    "kind": "review",
    "title": "Review 1",
    "subtitle": "Units 1–3 · I Discover Myself",
    "intro": "Refresh the most important vocabulary, facts and language skills from the first three units.",
    "color": "#6e5bd2",
    "soft": "#f0edff",
    "cover": "/assets/review-1-cover.webp",
    "vocabulary": [
      [
        "body systems",
        "groups of organs that work together"
      ],
      [
        "sense",
        "a way the body collects information"
      ],
      [
        "vertebrate",
        "an animal with a backbone"
      ],
      [
        "comparative",
        "a form used to compare two things"
      ],
      [
        "community",
        "people and activities connected in a group"
      ],
      [
        "dynasty",
        "a family of rulers over generations"
      ]
    ],
    "sections": [
      {
        "heading": "Unit 1 · What Can I Do?",
        "text": "Explain body systems and senses, use the present simple, follow Alice’s adventure and choose good paragraph titles.",
        "points": [
          "Facts, routines and negatives with do not and does not",
          "Capital letters and story details",
          "Healthy habits and a summer-camp project"
        ]
      },
      {
        "heading": "Unit 2 · Plants and Animals",
        "text": "Classify vertebrates, compare animals, explore colours and learn with Mowgli, Baloo and Bagheera.",
        "points": [
          "Comparatives and superlatives",
          "Primary and secondary colours",
          "In addition to, however, on one hand and on the other hand"
        ]
      },
      {
        "heading": "Unit 3 · My World",
        "text": "Describe communities, read about ancient Egypt, identify folk instruments and explain the kindness of the prince and the bird.",
        "points": [
          "Regular and irregular past verbs",
          "Folk music and dancing",
          "Topic sentences and a tourist guide"
        ]
      }
    ],
    "takeaway": "Strong learners connect vocabulary, grammar and reading ideas instead of studying each skill alone.",
    "bookPages": [
      48,
      49,
      50,
      51,
      52,
      53
    ]
  },
  "coral": {
    "id": "coral",
    "kind": "non-fiction",
    "title": "Coral Reefs",
    "subtitle": "Non-fiction Reader",
    "intro": "Dive beneath the sea to discover what coral really is, why reefs are full of colour and how Red Sea coral may help scientists.",
    "color": "#087fae",
    "soft": "#e7faff",
    "cover": "/assets/coral-reefs-cover.webp",
    "vocabulary": [
      [
        "polyp",
        "a tiny, simple sea invertebrate"
      ],
      [
        "exoskeleton",
        "a hard skeleton on the outside of an animal"
      ],
      [
        "algae",
        "simple organisms that live in water"
      ],
      [
        "organism",
        "a living animal or plant"
      ],
      [
        "shallow",
        "not deep"
      ],
      [
        "coral bleaching",
        "the loss of colour when algae leave coral"
      ]
    ],
    "sections": [
      {
        "heading": "A reef is made by animals",
        "text": "Coral reefs may look like plants, but thousands of tiny invertebrates called polyps build them. Polyps have hard outer skeletons, stay in one place and grow very slowly. Some reefs develop for thousands of years."
      },
      {
        "heading": "Where the bright colours come from",
        "text": "Most polyps have clear bodies and white skeletons. Their colour comes from tiny algae living inside them. Warm, shallow water gives these algae the sunlight they need."
      },
      {
        "heading": "A busy sea habitat",
        "text": "The shapes of a reef create hiding places for tropical fish and many other animals. The Red Sea reef system is the largest in Africa and one of the largest in the world."
      },
      {
        "heading": "Coral bleaching",
        "text": "Warmer water, pollution, too much sunlight or too little water can make algae leave the polyps. The reef then turns pale and may die, so animals lose their home."
      },
      {
        "heading": "Hope in the Red Sea",
        "text": "Some Red Sea coral can survive warmer water better than coral in other seas. Scientists study it to learn how other reefs might be protected. Reducing pollution and global warming is still essential."
      }
    ],
    "takeaway": "A coral reef is a living community. Protecting clean oceans protects both coral and the animals that depend on it.",
    "bookPages": [
      54,
      55,
      56,
      57
    ]
  },
  "review2": {
    "id": "review2",
    "kind": "review",
    "title": "Review 2",
    "subtitle": "Units 4–5 · Myself and Others",
    "intro": "Connect resource, energy, technology and career language from the final two units.",
    "color": "#d56b38",
    "soft": "#fff1e9",
    "cover": "/assets/review-2-cover.webp",
    "vocabulary": [
      [
        "renewable",
        "able to be replaced naturally"
      ],
      [
        "resource",
        "a useful material or source"
      ],
      [
        "possessive adjective",
        "a word that shows belonging before a noun"
      ],
      [
        "collaborate",
        "work together"
      ],
      [
        "transportation",
        "ways of moving people or goods"
      ],
      [
        "passphrase",
        "a longer group of words used for online security"
      ]
    ],
    "sections": [
      {
        "heading": "Unit 4 · Resources in Our World",
        "text": "Classify resources, explain renewable energy, choose possessive adjectives, practise teamwork and follow a fictional journey underground.",
        "points": [
          "Solar, wind, wave and tidal power",
          "His, her, their and clear reference",
          "A job interview and a job application email"
        ]
      },
      {
        "heading": "Unit 5 · Let’s Work",
        "text": "Compare transport, predict with will, explore tech jobs, create example passphrases and organise a paragraph about a job.",
        "points": [
          "Will, won’t and question forms",
          "Passwords and passphrases",
          "An opening, main part and conclusion"
        ]
      }
    ],
    "takeaway": "Use English to understand your world, solve problems with others and imagine a positive future.",
    "bookPages": [
      88,
      89,
      90,
      91
    ]
  },
  "khayameya": {
    "id": "khayameya",
    "kind": "story",
    "title": "Khayameya Summer",
    "subtitle": "Fiction Reader",
    "intro": "Zeinab turns a quiet summer visit into a joyful plan that protects a treasured Egyptian craft and brings generations together.",
    "color": "#b84e8c",
    "soft": "#fff0f7",
    "cover": "/assets/khayameya-summer-cover.webp",
    "vocabulary": [
      [
        "artisan",
        "a skilled person who makes things by hand"
      ],
      [
        "geometric pattern",
        "a design made with repeated shapes"
      ],
      [
        "lotus flower",
        "a water flower used in Egyptian art"
      ],
      [
        "sew",
        "to join or decorate cloth with thread"
      ],
      [
        "stitch",
        "one small loop of thread made by a needle"
      ],
      [
        "layer",
        "one level of material over another"
      ]
    ],
    "sections": [
      {
        "heading": "A worried grandfather",
        "text": "During the second week of the summer holiday, Zeinab visits her grandparents. Her grandfather, a respected tentmaker in Khayameya Street, worries that poor eyesight may force him to stop creating his beautiful work."
      },
      {
        "heading": "Thousands of careful stitches",
        "text": "At the workshop, Zeinab admires a huge flower design that took nearly four months to make. Her grandfather explains that Khayameya uses many tiny cloth pieces, careful measuring, colour choices and thousands of stitches."
      },
      {
        "heading": "Zeinab learns",
        "text": "Grandpa loves lotus flowers, geometric patterns and birds. Although his own father once hoped he would become an engineer or teacher, he became an artisan. Now he begins teaching Zeinab how to sew."
      },
      {
        "heading": "Friends combine their talents",
        "text": "Zeinab invites her clever friends. Rasha is strong at maths, Lobna invents things, Doha creates art and Engy knows sewing. Together they learn how design, measurement, colour and stitching all belong in the craft."
      },
      {
        "heading": "A travelling summer school",
        "text": "More visitors ask to join, and the little lesson grows into the Khayameya Summer School. The group plans to travel to Ismailia, Tanta and Marsa Matrouh so more people can learn. Grandpa thanks Zeinab for giving the craft a bright future."
      }
    ],
    "takeaway": "Traditions stay alive when people share knowledge, welcome new ideas and use their different talents as one team.",
    "bookPages": [
      96,
      97,
      98,
      99,
      100,
      101,
      102,
      103,
      104,
      105,
      106,
      107,
      108,
      109
    ]
  },
  "rain": {
    "id": "rain",
    "kind": "poetry",
    "title": "Rain",
    "subtitle": "Poetry Corner 1",
    "intro": "Explore rhyme, repetition and images in a short poem by Robert Louis Stevenson.",
    "vocabulary": [
      [
        "rain",
        "water drops that fall from clouds"
      ],
      [
        "field",
        "an open area of land"
      ],
      [
        "umbrella",
        "a cover used to keep rain off someone"
      ],
      [
        "ship",
        "a large boat"
      ],
      [
        "rhyme",
        "a similar sound at the ends of words"
      ],
      [
        "repetition",
        "using a word or phrase more than once"
      ]
    ],
    "sections": [
      {
        "heading": "Rain · Robert Louis Stevenson",
        "text": "The rain is raining all around,\nIt falls on field and tree,\nIt rains on the umbrellas here,\nAnd on the ships at sea."
      },
      {
        "heading": "Read and understand",
        "text": "The rain falls across the land and the sea. The speaker notices fields, trees, umbrellas and ships. The poem makes us imagine a wide scene rather than one small place.",
        "points": [
          "What places receive the rain?",
          "Which objects can you picture?",
          "How would the poem make you feel?"
        ]
      },
      {
        "heading": "Rhyme, repetition and imagery",
        "text": "Tree and sea rhyme. The pattern is ABCB. Rain and rains are repeated. Imagery uses words to help a reader picture a scene.",
        "points": [
          "Find the repeated words.",
          "Say tree and sea aloud.",
          "Describe a rainy scene using your own words."
        ]
      },
      {
        "heading": "A second nature verse",
        "text": "The follow-up page describes wind blowing through trees and flowers growing on the ground. Practise identifying a different rhyme pattern, AABB, and words that rhyme with sun, game, friend and leaves."
      }
    ],
    "takeaway": "Listen for the sounds and picture the scene as you read.",
    "bookPages": [
      58,
      59
    ],
    "cover": "/assets/unit-2-cover.webp",
    "color": "#6d58d9",
    "soft": "#f1efff"
  },
  "caterpillar": {
    "id": "caterpillar",
    "kind": "poetry",
    "title": "The Caterpillar",
    "subtitle": "Poetry Corner 2",
    "intro": "Read Christina Rossetti’s poem and discover how a caterpillar becomes a butterfly.",
    "vocabulary": [
      [
        "caterpillar",
        "a young insect that later becomes a butterfly or moth"
      ],
      [
        "stalk",
        "the main stem of a plant"
      ],
      [
        "stroll",
        "to walk slowly for pleasure"
      ],
      [
        "toad",
        "an animal like a frog with a rougher skin"
      ],
      [
        "prey",
        "an animal hunted for food"
      ],
      [
        "flutter",
        "to move the wings quickly and lightly"
      ]
    ],
    "sections": [
      {
        "heading": "The Caterpillar · Christina Rossetti",
        "text": "Brown and furry\nCaterpillar in a hurry,\nTake your walk\nTo the shady leaf, or stalk.\nMay no toad spy you,\nMay the little birds pass by you;\nSpin and die,\nTo live again a butterfly."
      },
      {
        "heading": "Follow the poem",
        "text": "The speaker watches a furry caterpillar and hopes it will reach a safe, shady place. Toads and birds could eat it. The ending looks ahead to its change into a butterfly.",
        "points": [
          "Which words describe the caterpillar?",
          "Which animals may hunt it?",
          "What will it become?"
        ]
      },
      {
        "heading": "Rhyme and imagery",
        "text": "The lines rhyme in pairs: furry/hurry, walk/stalk, you/you and die/butterfly. This gives the pattern AABBCCDD. Imagery helps us picture its slow movement and the shady leaf.",
        "points": [
          "Say each pair of rhyming words.",
          "The transformation is a change of life stage; the poem uses imaginative language.",
          "Put the pictures from the follow-up activity in poem order."
        ]
      }
    ],
    "takeaway": "Poetry can help us notice small creatures and changes in nature.",
    "bookPages": [
      110,
      111
    ],
    "cover": "/assets/unit-2-cover.webp",
    "color": "#6d58d9",
    "soft": "#f1efff"
  },
  "presentation": {
    "id": "presentation",
    "kind": "project",
    "title": "Presentation: Weave a Carpet",
    "subtitle": "Review 2 · Creative presentation",
    "intro": "Make a small woven design and explain your materials, colours and choices.",
    "color": "#34a995",
    "soft": "#eafffa",
    "cover": "/assets/khayameya-summer-cover.webp",
    "bookPages": [
      92,
      93
    ],
    "vocabulary": [
      [
        "string",
        "a thin cord used to tie or weave"
      ],
      [
        "cardboard",
        "thick stiff paper"
      ],
      [
        "scissors",
        "a tool used to cut"
      ],
      [
        "yarn",
        "thread used to weave or knit"
      ],
      [
        "weave",
        "to pass threads over and under each other"
      ],
      [
        "design",
        "a planned pattern or arrangement"
      ]
    ],
    "sections": [
      {
        "heading": "Materials and safety",
        "text": "Prepare cardboard, string, colourful yarn, tape and scissors. Ask an adult for help with cutting. Cut and space the cardboard edges to hold the vertical strings."
      },
      {
        "heading": "Make your woven pattern",
        "text": "Fix string across the cardboard, then pass yarn over one string and under the next. Reverse the order for the next row. Change colours to create a pattern. Secure the ends when you finish."
      },
      {
        "heading": "Present your work",
        "text": "Show your finished design and explain what you used, how you made it and why you chose its colours.",
        "points": [
          "I made a small carpet.",
          "I used string, cardboard and colourful yarn.",
          "I chose these colours because …"
        ]
      }
    ],
    "takeaway": "A clear presentation explains your process as well as your final product."
  },
  "term-project": {
    "id": "term-project",
    "kind": "project",
    "title": "Term 1 Project: Jobs",
    "subtitle": "Research · Plan · Present",
    "intro": "Research an interesting job and prepare a clear group presentation.",
    "color": "#438ad9",
    "soft": "#eaf5ff",
    "cover": "/assets/unit-6-cover.webp",
    "bookPages": [
      94,
      95
    ],
    "vocabulary": [
      [
        "research",
        "careful work to find information"
      ],
      [
        "industry",
        "a group of businesses doing similar work"
      ],
      [
        "skill",
        "an ability developed through practice"
      ],
      [
        "interview",
        "a conversation used to ask questions"
      ],
      [
        "source",
        "a place where information comes from"
      ],
      [
        "presentation",
        "a talk that shares information with an audience"
      ]
    ],
    "sections": [
      {
        "heading": "Choose your job",
        "text": "Choose a job that interests your group. Find out what the person does, what industry they work in, how the job helps people and what skills it needs."
      },
      {
        "heading": "Record your research",
        "text": "Use books, reliable information and interviews with people. Write what you already know, what you want to find out and what you learnt.",
        "points": [
          "What does someone in this job do?",
          "What special skills do they need?",
          "How might the job be different in the future?"
        ]
      },
      {
        "heading": "Plan your presentation",
        "text": "Organise an opening, useful facts and a conclusion. Decide who will say each part. Show where your information came from and practise speaking clearly as a team."
      }
    ],
    "takeaway": "Good research and teamwork help you explain a job with confidence."
  }
};
