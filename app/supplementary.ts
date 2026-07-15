export type SupplementarySection = {
  heading: string;
  text: string;
  points?: string[];
};

export type SupplementaryContent = {
  id: string;
  kind: "review" | "non-fiction" | "story";
  title: string;
  subtitle: string;
  intro: string;
  vocabulary: [string, string][];
  sections: SupplementarySection[];
  takeaway: string;
  cover: string;
  color: string;
  soft: string;
};

export const supplementaryContent: Record<string, SupplementaryContent> = {
  review1: {
    id: "review1",
    kind: "review",
    title: "Review 1",
    subtitle: "Units 1–3 · I Discover Myself",
    intro: "Refresh the most important vocabulary, facts and language skills from the first three units.",
    color: "#6e5bd2",
    soft: "#f0edff",
    cover: "/assets/review-1-cover.webp",
    vocabulary: [["body systems", "groups of organs that work together"], ["sense", "a way the body collects information"], ["vertebrate", "an animal with a backbone"], ["invertebrate", "an animal without a backbone"], ["community", "people and places in one area"], ["governorate", "a large administrative area in Egypt"]],
    sections: [
      { heading: "Unit 1 · What Can I Do?", text: "Explain how body systems work, connect the five senses to body parts, use capital letters, discuss choices and celebrate parasport champions.", points: ["Present simple for facts and routines", "want to and would like to", "Healthy paragraph structure"] },
      { heading: "Unit 2 · Plants and Animals", text: "Classify vertebrates and invertebrates, describe animal features, compare living things and explain how primary colours make secondary colours.", points: ["Comparatives with -er and more", "Superlatives with -est and most", "Link ideas with and, but, because and so"] },
      { heading: "Unit 3 · My World", text: "Describe helpful community members, retell key moments in Egyptian history, locate governorates and appreciate traditional Egyptian music and dance.", points: ["Past-time sequence words", "Location and direction language", "Clear descriptive writing"] },
    ],
    takeaway: "Strong learners connect vocabulary, grammar and reading ideas instead of studying each skill alone.",
  },
  coral: {
    id: "coral",
    kind: "non-fiction",
    title: "Coral Reefs",
    subtitle: "Non-fiction Reader",
    intro: "Dive beneath the sea to discover what coral really is, why reefs are full of colour and how Red Sea coral may help scientists.",
    color: "#087fae",
    soft: "#e7faff",
    cover: "/assets/coral-reefs-cover.webp",
    vocabulary: [["polyp", "a tiny, simple sea invertebrate"], ["exoskeleton", "a hard skeleton on the outside of an animal"], ["algae", "simple organisms that live in water"], ["organism", "a living animal or plant"], ["shallow", "not deep"], ["coral bleaching", "the loss of colour when algae leave coral"]],
    sections: [
      { heading: "A reef is made by animals", text: "Coral reefs may look like plants, but thousands of tiny invertebrates called polyps build them. Polyps have hard outer skeletons, stay in one place and grow very slowly. Some reefs develop for thousands of years." },
      { heading: "Where the bright colours come from", text: "Most polyps have clear bodies and white skeletons. Their colour comes from tiny algae living inside them. Warm, shallow water gives these algae the sunlight they need." },
      { heading: "A busy sea habitat", text: "The shapes of a reef create hiding places for tropical fish and many other animals. The Red Sea reef system is the largest in Africa and one of the largest in the world." },
      { heading: "Coral bleaching", text: "Warmer water, pollution, too much sunlight or too little water can make algae leave the polyps. The reef then turns pale and may die, so animals lose their home." },
      { heading: "Hope in the Red Sea", text: "Some Red Sea coral can survive warmer water better than coral in other seas. Scientists study it to learn how other reefs might be protected. Reducing pollution and global warming is still essential." },
    ],
    takeaway: "A coral reef is a living community. Protecting clean oceans protects both coral and the animals that depend on it.",
  },
  review2: {
    id: "review2",
    kind: "review",
    title: "Review 2",
    subtitle: "Units 4–6 · Myself and Others",
    intro: "Bring together place, resource, technology and career language from the final three units.",
    color: "#d56b38",
    soft: "#fff1e9",
    cover: "/assets/review-2-cover.webp",
    vocabulary: [["rural", "connected with the countryside"], ["urban", "connected with a city"], ["renewable", "able to be replaced naturally"], ["fossil fuel", "coal, oil or gas formed long ago"], ["transportation", "ways of moving people or goods"], ["passphrase", "a long group of words used for online security"]],
    sections: [
      { heading: "Unit 4 · City and Country", text: "Compare rural and urban places, use regular and irregular plurals, explore carpet making, work with large numbers and plan smart growth.", points: ["There is and there are", "Plural spelling patterns", "Clear place descriptions"] },
      { heading: "Unit 5 · Resources in Our World", text: "Sort renewable and non-renewable resources, understand fossil fuels, compare clean energy sources, use pronouns clearly and practise teamwork.", points: ["Subject and object pronouns", "Cause-and-effect language", "Team roles and respectful discussion"] },
      { heading: "Unit 6 · Let’s Work", text: "Compare kinds of transportation, make predictions with will, explore technology careers, create strong passphrases and learn about ship captains.", points: ["will and won’t for predictions", "Career skills and responsibilities", "Online safety rules"] },
    ],
    takeaway: "Use English to understand your world, solve problems with others and imagine a positive future.",
  },
  khayameya: {
    id: "khayameya",
    kind: "story",
    title: "Khayameya Summer",
    subtitle: "Fiction Reader",
    intro: "Zeinab turns a quiet summer visit into a joyful plan that protects a treasured Egyptian craft and brings generations together.",
    color: "#b84e8c",
    soft: "#fff0f7",
    cover: "/assets/khayameya-summer-cover.webp",
    vocabulary: [["artisan", "a skilled person who makes things by hand"], ["geometric pattern", "a design made with repeated shapes"], ["lotus flower", "a water flower used in Egyptian art"], ["sew", "to join or decorate cloth with thread"], ["stitch", "one small loop of thread made by a needle"], ["layer", "one level of material over another"]],
    sections: [
      { heading: "A worried grandfather", text: "During the second week of the summer holiday, Zeinab visits her grandparents. Her grandfather, a respected tentmaker in Khayameya Street, worries that poor eyesight may force him to stop creating his beautiful work." },
      { heading: "Thousands of careful stitches", text: "At the workshop, Zeinab admires a huge flower design that took nearly four months to make. Her grandfather explains that Khayameya uses many tiny cloth pieces, careful measuring, colour choices and thousands of stitches." },
      { heading: "Zeinab learns", text: "Grandpa loves lotus flowers, geometric patterns and birds. Although his own father once hoped he would become an engineer or teacher, he became an artisan. Now he begins teaching Zeinab how to sew." },
      { heading: "Friends combine their talents", text: "Zeinab invites her clever friends. Rasha is strong at maths, Lobna invents things, Doha creates art and Engy knows sewing. Together they learn how design, measurement, colour and stitching all belong in the craft." },
      { heading: "A travelling summer school", text: "More visitors ask to join, and the little lesson grows into the Khayameya Summer School. The group plans to travel to Ismailia, Tanta and Marsa Matrouh so more people can learn. Grandpa thanks Zeinab for giving the craft a bright future." },
    ],
    takeaway: "Traditions stay alive when people share knowledge, welcome new ideas and use their different talents as one team.",
  },
};
