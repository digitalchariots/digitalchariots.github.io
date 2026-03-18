// candidates.js

// --- 1. DATA SOURCES FOR GENERATION ---

// Define Location Data (Required for generation and HTML dropdowns)
const locationData = {
  "United States": ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Seattle", "Denver", "Washington"],
  "United Kingdom": ["London", "Birmingham", "Liverpool", "Glasgow", "Sheffield", "Manchester", "Edinburgh", "Leeds", "Bristol"],
  "Canada": ["Toronto", "Montreal", "Vancouver", "Calgary", "Ottawa", "Edmonton", "Winnipeg"],
  "Germany": ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart", "Düsseldorf"],
  "France": ["Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes"],
  "Australia": ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Canberra"],
  "India": ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune"],
  "Japan": ["Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Kyoto"],
  "Brazil": ["Sao Paulo", "Rio de Janeiro", "Brasilia", "Salvador", "Fortaleza"],
  "Singapore": ["Singapore"],
  "China": ["Shanghai", "Beijing", "Guangzhou", "Shenzhen", "Chengdu"]
};

// Define Skill Categories (Required for the UI aesthetic)
const skillCategories = [
  {
    name: "Management & Leadership",
    icon: "fa-briefcase",
    skills: ["Leadership", "Problem Solving", "Project Management", "Negotiation", "Strategic Planning", "Conflict Resolution"]
  },
  {
    name: "Technology & Data",
    icon: "fa-laptop-code",
    skills: ["Python", "SQL", "React", "Excel", "Data Analysis", "Cloud", "Java", "Cyber Security", "Machine Learning", "AI"]
  },
  {
    name: "Communication & Sales",
    icon: "fa-comments",
    skills: ["Communication", "Sales", "Marketing", "Public Speaking", "Writing", "Customer Service", "Social Media"]
  },
  {
    name: "Design & Creative",
    icon: "fa-palette",
    skills: ["Figma", "UI/UX", "Video Editing", "Photography", "Photoshop", "Illustrator", "Graphic Design"]
  }
];

// Flatten skills for random generation
const skillPool = skillCategories.flatMap(cat => cat.skills);

const firstNames = ["James", "Mary", "John", "Patricia", "Robert", "Jennifer", "Michael", "Linda", "William", "Elizabeth", "David", "Barbara", "Richard", "Susan", "Joseph", "Jessica", "Thomas", "Sarah", "Charles", "Karen", "Christopher", "Nancy", "Daniel", "Lisa", "Matthew", "Betty", "Anthony", "Margaret", "Mark", "Sandra", "Donald", "Ashley", "Steven", "Kimberly", "Paul", "Emily", "Andrew", "Donna", "Joshua", "Michelle", "Kenneth", "Dorothy", "Kevin", "Carol", "Brian", "Amanda", "George", "Melissa", "Timothy", "Deborah", "Ronald", "Stephanie", "Edward", "Rebecca", "Jason", "Sharon", "Jeffrey", "Laura", "Ryan", "Cynthia", "Jacob", "Kathleen", "Gary", "Amy", "Nicholas", "Angela", "Eric", "Shirley", "Jonathan", "Anna", "Stephen", "Brenda", "Larry", "Pamela", "Justin", "Emma", "Scott", "Nicole", "Brandon", "Helen", "Benjamin", "Samantha", "Samuel", "Katherine", "Raymond", "Christine", "Gregory", "Debra", "Frank", "Rachel", "Alexander", "Carolyn", "Patrick", "Janet", "Jack", "Catherine", "Dennis", "Maria", "Jerry", "Heather", "Tyler", "Diane", "Aaron", "Ruth", "Jose", "Julie", "Adam", "Olivia", "Nathan", "Joyce", "Henry", "Virginia", "Douglas", "Victoria", "Zhang", "Wei", "Li", "Wang", "Singh", "Patel", "Kim", "Lee", "Park", "Tanaka", "Sato", "Suzuki", "Muller", "Schmidt", "Schneider", "Fischer", "Weber", "Meyer", "Wagner", "Becker", "Schulz", "Hoffmann", "Koch", "Richter", "Klein", "Wolf", "Schroder", "Neumann", "Schwarz", "Braun", "Zimmermann", "Kruger", "Hofmann", "Hartmann", "Lange", "Schmitt", "Werner", "Krause", "Meier", "Lehmann", "Schmid", "Schulze", "Maier", "Kohler", "Herrmann", "Konig", "Walter", "Mayer", "Huber", "Kaiser", "Fuchs", "Peters", "Lang", "Scholz", "Muller", "Weiss", "Jung", "Hahn", "Schubert", "Vogel", "Friedrich", "Keller", "Gunter", "Frank", "Berger", "Winkler", "Roth", "Beck", "Lorenz", "Baumann", "Franke", "Albrecht", "Schuter", "Simon", "Ludwig", "Bauer", "Kramer", "Hoffman", "Schmitz", "Klein", "Wolf"];

const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts", "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes", "Stewart", "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper", "Peterson", "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson", "Watson", "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes", "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster", "Jimenez", "Powell", "Jenkins", "Perry", "Russell", "Sullivan", "Bell", "Coleman", "Butler", "Henderson", "Barnes", "Gonzales", "Fisher", "Vasquez", "Simmons", "Romero", "Jordan", "Patterson", "Alexander", "Hamilton", "Graham", "Reynolds", "Griffin", "Wallace", "Moreno", "West", "Dean", "Pham", "Nguyen", "Wang", "Li", "Zhang", "Liu", "Chen", "Yang", "Huang", "Zhao", "Wu", "Zhou", "Xu", "Sun", "Ma", "Zhu", "Hu", "Guo", "He", "Gao", "Lin", "Luo", "Zheng", "Liang", "Song", "Tan", "Xie", "Tang", "Feng", "Dong", "Yu", "Shen", "Cao", "Yuan", "Jiang", "Pak", "Tanaka", "Sato", "Suzuki", "Takahashi", "Watanabe", "Ito", "Yamamoto", "Nakamura", "Kobayashi", "Kato", "Yoshida", "Yamada", "Sasaki", "Yamashita", "Yamaguchi", "Muller", "Schmidt", "Schneider", "Fischer", "Weber", "Meyer", "Wagner", "Becker", "Schulz", "Hoffmann"];

const jobTitles = [
  "Software Engineer", "Project Manager", "Data Analyst", "Marketing Manager", "Sales Representative",
  "Graphic Designer", "HR Specialist", "Financial Analyst", "Operations Manager", "Customer Service Rep",
  "Registered Nurse", "Civil Engineer", "Mechanical Engineer", "Electrician", "Plumber",
  "Chef", "Teacher", "Accountant", "Lawyer", "Administrative Assistant",
  "CEO", "CFO", "CTO", "Product Manager", "Scrum Master",
  "UX Designer", "UI Developer", "DevOps Engineer", "Data Scientist", "Cyber Security Analyst",
  "Store Manager", "Barista", "Bartender", "Driver", "Logistics Coordinator",
  "Real Estate Agent", "Insurance Broker", "Bank Teller", "Personal Trainer", "Yoga Instructor",
  "Event Planner", "Social Media Manager", "SEO Specialist", "Content Strategist", "Public Relations Officer",
  "Architect", "Interior Designer", "Veterinarian", "Pharmacist", "Pilot"
];

const locationKeys = Object.keys(locationData);

// --- GENERATOR FUNCTION ---
function generateCandidates(count) {
  const generatedList = [];

  for (let i = 1; i <= count; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const name = `${firstName} ${lastName}`;
    const initials = firstName[0] + lastName[0];
    
    const role = jobTitles[Math.floor(Math.random() * jobTitles.length)];
    
    // Location logic using locationData
    const country = locationKeys[Math.floor(Math.random() * locationKeys.length)];
    const cities = locationData[country];
    const city = cities[Math.floor(Math.random() * cities.length)];

    // Skills logic (pick 3-5 random skills)
    const numSkills = Math.floor(Math.random() * 3) + 3;
    const skills = [];
    const usedIndices = new Set();
    
    for (let k = 0; k < numSkills; k++) {
      let idx = Math.floor(Math.random() * skillPool.length);
      while (usedIndices.has(idx)) {
        idx = Math.floor(Math.random() * skillPool.length);
      }
      usedIndices.add(idx);
      skills.push({
        name: skillPool[idx],
        score: Math.floor(Math.random() * 40) + 60
      });
    }

    const verified = skills.map(s => s.name);

    generatedList.push({
      id: i,
      name: name,
      initials: initials,
      role: role,
      city: city,
      country: country,
      match: Math.floor(Math.random() * 20) + 80, 
      skills: skills,
      verified: verified
    });
  }

  return generatedList;
}

// --- EXPOSE DATA GLOBALLY ---
window.locationData = locationData; // Needed for HTML dropdowns
window.skillCategories = skillCategories; // Needed for HTML sidebar filter UI
window.candidatesDatabase = generateCandidates(10000);

console.log("Database loaded: " + window.candidatesDatabase.length + " candidates ready.");
