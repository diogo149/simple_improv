// https://www.thejuntoinstitute.com/blog-posts/the-junto-emotion-wheel-why-and-how-we-use-it

const emotions = {
  "Love": {
    "Peaceful": ["Satisfied", "Tranquil"],
    "Tender": ["Compassionate", "Caring"],
    "Longing": ["Affectionate", "Sentimental"],
    "Romantic": ["Enamored", "Attractive"],
    "Desirous": ["Infatuated", "Passionate"]
  },
  "Joy": {
    "Enthralled": ["Rapturous", "Enchanted"],
    "Elated": ["Jubilant", "Euphoric"],
    "Enthusiastic": ["Zealous", "Excited"],
    "Optimistic": ["Hopeful", "Eager"],
    "Proud": ["Illustrious", "Triumphant"],
    "Cheerful": ["Playful", "Jovial"],
    "Happy": ["Delighted", "Amused"],
    "Content": ["Pleased", "Thankful"]
  },
  "Surprise": {
    "Moved": ["Touched", "Stimulated"],
    "Overcome": ["Astounded", "Speechless"],
    "Amazed": ["Awe-Struck", "Astonished"],
    "Confused": ["Disillusioned", "Perplexed"],
    "Stunned": ["Shocked", "Dismayed"]
  },
  "Sadness": {
    "Hopeless": ["Anguised", "Powerless"],
    "Neglected": ["Isolated", "Lonely"],
    "Shameful": ["Regretful", "Guilty"],
    "Disappointed": ["Dismayed", "Displeased"],
    "Melancholic": ["Depressed", "Sorrowful"],
    "Distressed": ["Agonized", "Hurt"]
  },
  "Anger": {
    "Disgusted": ["Contemptuous", "Revolted"],
    "Envious": ["Resentful", "Jealous"],
    "Irritable": ["Annoyed", "Aggravated"],
    "Exasperated": ["Agitated", "Frustrated"],
    "Enraged": ["Hateful", "Hostile"]
  },
  "Fear": {
    "Horrified": ["Mortified", "Dreadful"],
    "Nervous": ["Worried", "Anxious"],
    "Insecure": ["Inferior", "Inadequate"],
    "Terrified": ["Panic", "Hysterical"],
    "Scared": ["Helpless", "Frightened"]
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
