// https://www.thejuntoinstitute.com/blog-posts/the-junto-emotion-wheel-why-and-how-we-use-it

const emotions = {
  "love": {
    "peaceful": ["satisfied", "tranquil"],
    "tender": ["compassionate", "caring"],
    "longing": ["affectionate", "sentimental"],
    "romantic": ["enamored", "attractive"],
    "desirous": ["infatuated", "passionate"]
  },
  "joy": {
    "enthralled": ["rapturous", "enchanted"],
    "elated": ["jubilant", "euphoric"],
    "enthusiastic": ["zealous", "excited"],
    "optimistic": ["hopeful", "eager"],
    "proud": ["illustrious", "triumphant"],
    "cheerful": ["playful", "jovial"],
    "happy": ["delighted", "amused"],
    "content": ["pleased", "thankful"]
  },
  "surprise": {
    "moved": ["touched", "stimulated"],
    "overcome": ["astounded", "speechless"],
    "amazed": ["awe-struck", "astonished"],
    "confused": ["disillusioned", "perplexed"],
    "stunned": ["shocked", "dismayed"]
  },
  "sadness": {
    "hopeless": ["anguised", "powerless"],
    "neglected": ["isolated", "lonely"],
    "shameful": ["regretful", "guilty"],
    "disappointed": ["dismayed", "displeased"],
    "melancholic": ["depressed", "sorrowful"],
    "distressed": ["agonized", "hurt"]
  },
  "anger": {
    "disgusted": ["contemptuous", "revolted"],
    "envious": ["resentful", "jealous"],
    "irritable": ["annoyed", "aggravated"],
    "exasperated": ["agitated", "frustrated"],
    "enraged": ["hateful", "hostile"]
  },
  "fear": {
    "horrified": ["mortified", "dreadful"],
    "nervous": ["worried", "anxious"],
    "insecure": ["inferior", "inadequate"],
    "terrified": ["panic", "hysterical"],
    "scared": ["helpless", "frightened"]
  }
};

const level1 = Object.keys(emotions);

const level2 = Object.values(emotions).flatMap(x => Object.keys(x));

const level3 = Object.values(emotions).flatMap(x => Object.values(x).flatMap(x => x));

const combined = Object.entries(emotions).flatMap(([e1, x]) => Object.entries(x).flatMap(([e2, x]) => x.map(e3 => e1 + " | " + e2 + " | " + e3)));

export default {
  emotions,
  level1,
  level2,
  level3,
  combined
};
