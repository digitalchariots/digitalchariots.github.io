// candidates.js

// --- 1. DEFINE LOCATIONS & SKILLS (Must be at the top) ---

// Define Location Data so the script knows it exists
const locationData = {
  "United States": ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Seattle"],
  "United Kingdom": ["London", "Birmingham", "Liverpool", "Glasgow", "Sheffield", "Manchester", "Edinburgh", "Leeds"],
  "Canada": ["Toronto", "Montreal", "Vancouver", "Calgary", "Ottawa", "Edmonton"],
  "Germany": ["Berlin", "Hamburg", "Munich", "Cologne", "Frankfurt", "Stuttgart"],
  "France": ["Paris", "Marseille", "Lyon", "Toulouse", "Nice"],
  "Australia": ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
  "India": ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Kolkata"],
  "Japan": ["Tokyo", "Yokohama", "Osaka", "Nagoya", "Sapporo", "Kyoto"],
  "Brazil": ["Sao Paulo", "Rio de Janeiro", "Brasilia", "Salvador"],
  "Singapore": ["Singapore"],
  "China": ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"]
};

// Define Categories for the UI (Must be defined before skillPool)
const skillCategories = [
  {
    name: "Management & Leadership",
    icon: "fa-briefcase",
    skills: ["Leadership", "Problem Solving", "Project Management", "Negotiation", "Strategic Planning"]
  },
  {
    name: "Technology & Data",
    icon: "fa-laptop-code",
    skills: ["Python", "SQL", "React", "Excel", "Data Analysis", "Cloud", "Java", "Cyber Security"]
  },
  {
    name: "Communication & Sales",
    icon: "fa-comments",
    skills: ["Communication", "Sales", "Marketing", "Public Speaking", "Writing", "Customer Service"]
  },
  {
    name: "Design & Creative",
    icon: "fa-palette",
    skills: ["Figma", "UI/UX", "Video Editing", "Photography", "Photoshop", "Illustrator"]
  }
];

// --- 2. DATA SOURCE ARRAYS ---

const firstNames = ["James", "Mary", "John", "Patricia", "Robert", "Jennifer", "Michael", "Linda", "William", "Elizabeth", "David", "Barbara", "Richard", "Susan", "Joseph", "Jessica", "Thomas", "Sarah", "Charles", "Karen", "Christopher", "Nancy", "Daniel", "Lisa", "Matthew", "Betty", "Anthony", "Margaret", "Mark", "Sandra", "Donald", "Ashley", "Steven", "Kimberly", "Paul", "Emily", "Andrew", "Donna", "Joshua", "Michelle", "Kenneth", "Dorothy", "Kevin", "Carol", "Brian", "Amanda", "George", "Melissa", "Timothy", "Deborah", "Zhang", "Wei", "Li", "Wang", "Singh", "Patel", "Kim", "Lee", "Park", "Tanaka", "Sato", "Suzuki", "Muller", "Schmidt"];

const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts", "Kim", "Cox", "Ward", "Richardson", "Watson", "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes", "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster"];

const jobTitles = [
  "Software Engineer", "Project Manager", "Data Analyst", "Marketing Manager", "Sales Representative",
  "Graphic Designer", "HR Specialist", "Financial Analyst", "Operations Manager", "Customer Service Rep",
  "Registered Nurse", "Civil Engineer", "Mechanical Engineer", "Electrician", "Plumber",
  "Chef", "Teacher", "Accountant", "Lawyer", "Administrative Assistant",
  "CEO", "CFO", "CTO", "Product Manager", "Scrum Master",
  "UX Designer", "UI Developer", "DevOps Engineer", "Data Scientist", "Cyber Security Analyst",
  "Store Manager", "Barista", "Bartender", "Driver", "Logistics Coordinator",
  "Real Estate Agent", "Insurance Broker", "Bank Teller", "Personal Trainer", "Yoga Instructor",
  "Architect", "Interior Designer", "Veterinarian", "Pharmacist", "Pilot"
];

// Flatten skills from categories for random generation
const skillPool = skillCategories.flatMap(cat => cat.skills);

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
    
    // Location logic
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
window.locationData = locationData;     // CRITICAL: HTML needs this for dropdowns
window.skillCategories = skillCategories; // CRITICAL: HTML needs this for the sidebar UI
window.candidatesDatabase = generateCandidates(10000);

console.log("Database loaded: " + window.candidatesDatabase.length + " candidates ready.");
