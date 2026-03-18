// candidates.js

// --- DATA SOURCES FOR GENERATION ---
const firstNames = ["James", "Mary", "John", "Patricia", "Robert", "Jennifer", "Michael", "Linda", "William", "Elizabeth", "David", "Barbara", "Richard", "Susan", "Joseph", "Jessica", "Thomas", "Sarah", "Charles", "Karen", "Christopher", "Nancy", "Daniel", "Lisa", "Matthew", "Betty", "Anthony", "Margaret", "Mark", "Sandra", "Donald", "Ashley", "Steven", "Kimberly", "Paul", "Emily", "Andrew", "Donna", "Joshua", "Michelle", "Kenneth", "Dorothy", "Kevin", "Carol", "Brian", "Amanda", "George", "Melissa", "Timothy", "Deborah", "Ronald", "Stephanie", "Edward", "Rebecca", "Jason", "Sharon", "Jeffrey", "Laura", "Ryan", "Cynthia", "Jacob", "Kathleen", "Gary", "Amy", "Nicholas", "Angela", "Eric", "Shirley", "Jonathan", "Anna", "Stephen", "Brenda", "Larry", "Pamela", "Justin", "Emma", "Scott", "Nicole", "Brandon", "Helen", "Benjamin", "Samantha", "Samuel", "Katherine", "Raymond", "Christine", "Gregory", "Debra", "Frank", "Rachel", "Alexander", "Carolyn", "Patrick", "Janet", "Jack", "Catherine", "Dennis", "Maria", "Jerry", "Heather", "Tyler", "Diane", "Aaron", "Ruth", "Jose", "Julie", "Adam", "Olivia", "Nathan", "Joyce", "Henry", "Virginia", "Douglas", "Victoria", "Zhang", "Wei", "Li", "Wang", "Singh", "Patel", "Kim", "Lee", "Park", "Tanaka", "Sato", "Suzuki", "Muller", "Schmidt", "Schneider", "Fischer", "Weber", "Meyer", "Wagner", "Becker", "Schulz", "Hoffmann", "Koch", "Richter", "Klein", "Wolf", "Schroder", "Neumann", "Schwarz", "Braun", "Zimmermann", "Kruger", "Hofmann", "Hartmann", "Lange", "Schmitt", "Werner", "Krause", "Meier", "Lehmann", "Schmid", "Schulze", "Maier", "Kohler", "Herrmann", "Konig", "Walter", "Mayer", "Huber", "Kaiser", "Fuchs", "Peters", "Lang", "Scholz", "Muller", "Weiss", "Jung", "Hahn", "Schubert", "Vogel", "Friedrich", "Keller", "Gunter", "Frank", "Berger", "Winkler", "Roth", "Beck", "Lorenz", "Baumann", "Franke", "Albrecht", "Schuter", "Simon", "Ludwig", "Bauer", "Kramer", "Hoffman", "Schmitz", "Klein", "Wolf"];

const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts", "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes", "Stewart", "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper", "Peterson", "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson", "Watson", "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes", "Price", "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster", "Jimenez", "Powell", "Jenkins", "Perry", "Russell", "Sullivan", "Bell", "Coleman", "Butler", "Henderson", "Barnes", "Gonzales", "Fisher", "Vasquez", "Simmons", "Romero", "Jordan", "Patterson", "Alexander", "Hamilton", "Graham", "Reynolds", "Griffin", "Wallace", "Moreno", "West", "Dean", "Pham", "Nguyen", "Wang", "Li", "Zhang", "Liu", "Chen", "Yang", "Huang", "Zhao", "Wu", "Zhou", "Xu", "Sun", "Ma", "Zhu", "Hu", "Guo", "He", "Gao", "Lin", "Luo", "Zheng", "Liang", "Song", "Tan", "Xie", "Tang", "Feng", "Dong", "Yu", "Shen", "Cao", "Yuan", "Jiang", "Pak", "Tanaka", "Sato", "Suzuki", "Takahashi", "Watanabe", "Ito", "Yamamoto", "Nakamura", "Kobayashi", "Kato", "Yoshida", "Yamada", "Sasaki", "Yamashita", "Yamaguchi", "Muller", "Schmidt", "Schneider", "Fischer", "Weber", "Meyer", "Wagner", "Becker", "Schulz", "Hoffmann"];

const jobTitles = [
  "Software Engineer", "Project Manager", "Data Analyst", "Marketing Manager", "Sales Representative",
  "Graphic Designer", "HR Specialist", "Financial Analyst", "Operations Manager", "Customer Service Rep",
  "Registered Nurse", "Civil Engineer", "Mechanical Engineer", "Electrician", "Plumber",
  "Chef", "Teacher", "Accountant", "Lawyer", "Administrative Assistant",
  "CEO", "CFO", "CTO", "Product Manager", "Scrum Master",
  "UX Designer", "UI Developer", "DevOps Engineer", "Data Scientist", "Cyber Security Analyst",
  "Walmart Clerk", "Store Manager", "Barista", "Bartender", "Uber Driver",
  "Truck Driver", "Logistics Coordinator", "Warehouse Associate", "Receptionist", "Office Manager",
  "Real Estate Agent", "Insurance Broker", "Bank Teller", "Personal Trainer", "Yoga Instructor",
  "Scuba Diving Instructor", "Tour Guide", "Interpreter", "Copywriter", "Journalist",
  "Event Planner", "Social Media Manager", "SEO Specialist", "Content Strategist", "Public Relations Officer",
  "Architect", "Interior Designer", "Landscape Architect", "Surveyor", "Urban Planner",
  "Veterinarian", "Pharmacist", "Physical Therapist", "Occupational Therapist", "Speech Pathologist",
  "Police Officer", "Firefighter", "Security Guard", "Detective", "Military Officer",
  "Pilot", "Flight Attendant", "Air Traffic Controller", "Ship Captain", "Sailor"
];

const skillPool = [
  "Leadership", "Communication", "Problem Solving", "Python", "SQL", "Java", "JavaScript", "React", 
  "Angular", "Node.js", "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Agile", "Scrum", 
  "Project Management", "PMP", "Excel", "Data Analysis", "Machine Learning", "AI", "Deep Learning", 
  "Sales", "Negotiation", "Public Speaking", "Writing", "Editing", "SEO", "SEM", "Content Marketing", 
  "Social Media", "Email Marketing", "CRM", "Salesforce", "HubSpot", "Graphic Design", "Photoshop", 
  "Illustrator", "Figma", "Sketch", "UI/UX", "HTML", "CSS", "SASS", "Git", "CI/CD", "Linux", 
  "Windows Server", "Networking", "Cyber Security", "Risk Management", "Financial Modeling", 
  "Accounting", "QuickBooks", "SAP", "ERP", "Team Building", "Mentoring", "Conflict Resolution", 
  "Time Management", "Critical Thinking", "Creativity", "Innovation", "Strategic Planning", 
  "Business Development", "Partnership Development", "Customer Service", "Client Relations"
];

const locationKeys = Object.keys(locationData);

// --- GENERATOR FUNCTION ---
function generateCandidates(count) {
  const generatedList = [];

  for (let i = 1; i <= count; i++) {
    // Pick random attributes
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
        score: Math.floor(Math.random() * 40) + 60 // Score between 60-100
      });
    }

    // Verified skills (just names)
    const verified = skills.map(s => s.name);

    // Create candidate object
    generatedList.push({
      id: i,
      name: name,
      initials: initials,
      role: role,
      city: city,
      country: country,
      // Match score is calculated dynamically during search, but we can put a placeholder
      match: Math.floor(Math.random() * 20) + 80, 
      skills: skills,
      verified: verified
    });
  }

  return generatedList;
}

// Generate 10,000 candidates and expose globally
window.candidatesDatabase = generateCandidates(10000);
window.availableSkills = skillPool; 
console.log("Database loaded: " + window.candidatesDatabase.length + " candidates ready.");
