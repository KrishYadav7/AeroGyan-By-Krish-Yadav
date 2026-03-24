// ==================== SEMESTER DATA ====================
const semesterDetails = {
  1: { 
    name: "Foundations", 
    icon: "fas fa-rocket", 
    courses: [
      "GENDER SENSITIZATION",
      "ADVANCED CALCULUS",
      "BASIC ELECTRONICS",
      "BASIC ELECTRONICS LABORATORY",
      "BASIC ENGINEERING MECHANICS",
      "CHEMISTRY",
      "CHEMISTRY LABORATORY",
      "EXTRA ACADEMIC ACTIVITY-I"
    ], 
    credits: 21, 
    project: "Introduction to Engineering Design — hands-on project integrating basic electronics, mechanics, and chemistry principles." 
  },
  2: { 
    name: "Core Sciences", 
    icon: "fas fa-atom", 
    courses: [
      "LIFE SKILL",
      "PROGRAMMING AND DATA STRUCTURES (CS10003)",
      "LINEAR ALGEBRA, NUMERICAL AND COMPLEX ANALYSIS (MA11004)",
      "PROGRAMMING AND DATA STRUCTURES LABORATORY (CS19003)",
      "PHYSICS OF WAVES (PH11003)",
      "PHYSICS LABORATORY (PH19003)",
      "ENGINEERING DRAWING AND COMPUTER GRAPHICS (CE13003)",
      "ELECTRICAL TECHNOLOGY (EE11003)",
      "EXTRA ACADEMIC ACTIVITY-II (EA10008)"
    ], 
    credits: 24, 
    project: "Integrated Lab Project — programming, circuit design, and engineering graphics based mini-project." 
  },
  3: { 
    name: "Aerodynamics & Propulsion Fundamentals", 
    icon: "fas fa-wind", 
    courses: [
      "INTRODUCTION TO AERODYNAMICS (AE21201)",
      "DYNAMICS FOR AEROSPACE ENGINEERS (AE21203)",
      "THERMODYNAMICS AND AEROSPACE PROPULSION SYSTEMS (AE21205)",
      "EXTRA ACADEMIC ACTIVITY-III (EA10009)",
      "BASIC ELECTRONICS (EC21201)",
      "BASIC ELECTRONICS LABORATORY (EC29201)",
      "NUMERICAL SOLUTION OF ORDINARY AND PDE (MA20201)",
      "BREADTH ELECTIVE I"
    ], 
    credits: 25, 
    project: "Wind Tunnel Demonstration — experimental analysis of basic aerodynamic forces." 
  },
  4: { 
    name: "Aerospace Structures & Flight Controls", 
    icon: "fas fa-cogs", 
    courses: [
      "AERODYNAMICS LABORATORY - I (AE29202)",
      "INTRODUCTION TO FLIGHT VEHICLE CONTROLS (AE20202)",
      "LOW SPEED AERODYNAMICS (AE21202)",
      "INTRODUCTION TO AEROSPACE STRUCTURES (AE21204)",
      "STRUCTURES LABORATORY - I (AE29204)",
      "INTEGRAL TRANSFORMS AND APPLICATIONS (MA30210)",
      "APPLIED COMPUTATIONAL METHODS (MA30208)",
      "EXTRA ACADEMIC ACTIVITY-IV (EA10010)"
    ], 
    credits: 22, 
    project: "Structural Analysis of a Wing Box — finite element modeling and experimental validation." 
  },
  5: { 
    name: "High Speed Aerodynamics & Flight Mechanics", 
    icon: "fas fa-fighter-jet", 
    courses: [
      "HIGH SPEED AERODYNAMICS (AE31103)",
      "MECHANICS OF FLIGHT (AE31007)",
      "VISCOUS FLOW THEORY (AE31010)",
      "AEROSPACE STRUCTURAL ANALYSIS (AE31009)",
      "STRUCTURES LAB -II (AE39003)",
      "AERODYNAMICS LAB-II (AE39001)",
      "DEPTH ELECTIVE I"
    ], 
    credits: 23, 
    project: "Flight Stability & Control Analysis — simulation of aircraft longitudinal dynamics." 
  },
  6: { 
    name: "Advanced Aerospace Systems", 
    icon: "fas fa-cogs", 
    courses: [
      "Aerospace Structural Dynamics",
      "Aircraft Stability and Control",
      "Finite Elements Methods",
      "Theory of Jet Propulsion",
      "System Laboratory",
      "Flight Testing Laboratory",
      "Propulsion Laboratory"
    ], 
    credits: 22, 
    project: "Integrated Lab Project — performance analysis of a jet engine & flight control system validation" 
  },
  7: { 
    name: "Specialization", 
    icon: "fas fa-microchip", 
    courses: [
      "Hypersonic Aerodynamics",
      "Space Mission Design",
      "AI in Aerospace",
      "Finite Element Methods",
      "Technical Elective I"
    ], 
    credits: 16, 
    project: "Mission Design Report — interplanetary trajectory & spacecraft architecture" 
  },
  8: { 
    name: "Advanced Topics", 
    icon: "fas fa-chart-line", 
    courses: [
      "Reusable Launch Vehicles",
      "Guidance & Control",
      "Aerospace System Integration",
      "Technical Elective II",
      "Professional Ethics"
    ], 
    credits: 16, 
    project: "Capstone Proposal — detailed roadmap for final year project" 
  },
  9: { 
    name: "Capstone I", 
    icon: "fas fa-users", 
    courses: [
      "Capstone Design Project I",
      "Spacecraft Thermal Control",
      "Risk & Reliability",
      "Elective III"
    ], 
    credits: 15, 
    project: "Preliminary Capstone Review — design verification and prototype" 
  },
  10: { 
    name: "Capstone II & Launch", 
    icon: "fas fa-check-double", 
    courses: [
      "Capstone Design Project II",
      "Entrepreneurship in Aerospace",
      "Seminar & Portfolio"
    ], 
    credits: 14, 
    project: "Full-Scale Rocket/System Launch & Final Presentation" 
  }
};

// ==================== RESOURCE FOLDERS ====================
// Default folders (used when a subject doesn't have its own)
const DEFAULT_FOLDERS = {
  books: "https://drive.google.com/drive/folders/1mjfdzM67UBHLnHT2rPHA-8CirH_CXJ9H?usp=sharing",
  notes: "https://drive.google.com/drive/folders/1OdJZZl9IiFGMNT4B4ZkE61aIG_lwJiev?usp=sharing",
  slides: "https://drive.google.com/drive/folders/1Y9cweOT4dVGOnOyBmKwlaxC_-rNYmfRQ?usp=sharing",
  tutorials: "https://drive.google.com/drive/folders/1aEfAKlxx5k4KbvfaktQPGKT_-nXyrSZO?usp=sharing",
  pyqs: "https://drive.google.com/drive/folders/1HGjbd1kGkm0JokbjuqTHP345SMJz3frO?usp=sharing"
};

// Subject‑specific folders (add more as needed)
const SUBJECT_FOLDERS = {
  "Aircraft Stability and Control": {
    books: "https://drive.google.com/drive/folders/12cSzlni0okbJkSo6LUIjQPM6Oms2HzHa?usp=sharing",
    notes: "https://drive.google.com/drive/folders/1NF92Vlf8iv3NdbUR8pbEgO0KdRDL4bH6?usp=sharing",
    slides: "https://drive.google.com/drive/folders/1Iw58sL3R-qclkThvh7EIBzDgPfHH90rE?usp=sharing",
    tutorials: "https://drive.google.com/drive/folders/1aEfAKlxx5k4KbvfaktQPGKT_-nXyrSZO?usp=sharing",
    pyqs: "https://drive.google.com/drive/folders/1hI_uG5-kIRalaY2oBblKDoH2HSf3XwDw?usp=sharing"
  }
};

// Helper to get folder URL for a resource type and subject
function getFolderURL(subjectName, resourceType) {
  // If the subject has custom folders, use them; otherwise use default
  if (SUBJECT_FOLDERS[subjectName] && SUBJECT_FOLDERS[subjectName][resourceType]) {
    return SUBJECT_FOLDERS[subjectName][resourceType];
  }
  return DEFAULT_FOLDERS[resourceType];
}

// ==================== ICON MAPPING ====================
function getIconForCourse(courseName) {
  const name = courseName.toUpperCase();
  if (name.includes("GENDER SENSITIZATION")) return "fa-venus-mars";
  if (name.includes("ADVANCED CALCULUS")) return "fa-calculator";
  if (name.includes("BASIC ELECTRONICS") && !name.includes("LABORATORY")) return "fa-microchip";
  if (name.includes("ELECTRONICS LABORATORY")) return "fa-flask";
  if (name.includes("BASIC ENGINEERING MECHANICS")) return "fa-cogs";
  if (name.includes("CHEMISTRY") && !name.includes("LABORATORY")) return "fa-flask";
  if (name.includes("CHEMISTRY LABORATORY")) return "fa-vial";
  if (name.includes("EXTRA ACADEMIC ACTIVITY")) return "fa-users";
  if (name.includes("LIFE SKILL")) return "fa-heart";
  if (name.includes("PROGRAMMING AND DATA STRUCTURES") && !name.includes("LABORATORY")) return "fa-code";
  if (name.includes("LINEAR ALGEBRA")) return "fa-calculator";
  if (name.includes("PROGRAMMING AND DATA STRUCTURES LABORATORY")) return "fa-laptop-code";
  if (name.includes("PHYSICS OF WAVES")) return "fa-waveform";
  if (name.includes("PHYSICS LABORATORY")) return "fa-microscope";
  if (name.includes("ENGINEERING DRAWING")) return "fa-drafting-compass";
  if (name.includes("ELECTRICAL TECHNOLOGY")) return "fa-bolt";
  if (name.includes("INTRODUCTION TO AERODYNAMICS")) return "fa-wind";
  if (name.includes("DYNAMICS FOR AEROSPACE ENGINEERS")) return "fa-chart-line";
  if (name.includes("THERMODYNAMICS AND AEROSPACE PROPULSION SYSTEMS")) return "fa-fire";
  if (name.includes("NUMERICAL SOLUTION OF ORDINARY AND PDE")) return "fa-calculator";
  if (name.includes("BREADTH ELECTIVE")) return "fa-book-open";
  if (name.includes("AERODYNAMICS LABORATORY - I")) return "fa-flask";
  if (name.includes("INTRODUCTION TO FLIGHT VEHICLE CONTROLS")) return "fa-sliders-h";
  if (name.includes("LOW SPEED AERODYNAMICS")) return "fa-wind";
  if (name.includes("INTRODUCTION TO AEROSPACE STRUCTURES")) return "fa-cubes";
  if (name.includes("STRUCTURES LABORATORY - I")) return "fa-flask";
  if (name.includes("INTEGRAL TRANSFORMS AND APPLICATIONS")) return "fa-calculator";
  if (name.includes("APPLIED COMPUTATIONAL METHODS")) return "fa-laptop-code";
  if (name.includes("HIGH SPEED AERODYNAMICS")) return "fa-rocket";
  if (name.includes("MECHANICS OF FLIGHT")) return "fa-fighter-jet";
  if (name.includes("VISCOUS FLOW THEORY")) return "fa-tachometer-alt";
  if (name.includes("AEROSPACE STRUCTURAL ANALYSIS")) return "fa-chart-line";
  if (name.includes("STRUCTURES LAB -II")) return "fa-flask";
  if (name.includes("AERODYNAMICS LAB-II")) return "fa-flask";
  if (name.includes("DEPTH ELECTIVE")) return "fa-book-open";
  if (name.includes("AEROSPACE STRUCTURAL DYNAMICS")) return "fa-chart-line";
  if (name.includes("AIRCRAFT STABILITY AND CONTROL")) return "fa-fighter-jet";
  if (name.includes("FINITE ELEMENTS METHODS")) return "fa-cube";
  if (name.includes("THEORY OF JET PROPULSION")) return "fa-fire";
  if (name.includes("SYSTEM LABORATORY")) return "fa-microchip";
  if (name.includes("FLIGHT TESTING LABORATORY")) return "fa-plane";
  if (name.includes("PROPULSION LABORATORY")) return "fa-rocket";
  if (name.includes("HYPERSONIC AERODYNAMICS")) return "fa-rocket";
  if (name.includes("SPACE MISSION DESIGN")) return "fa-satellite";
  if (name.includes("AI IN AEROSPACE")) return "fa-robot";
  if (name.includes("FINITE ELEMENT METHODS")) return "fa-cube";
  if (name.includes("TECHNICAL ELECTIVE")) return "fa-book-open";
  if (name.includes("REUSABLE LAUNCH VEHICLES")) return "fa-space-shuttle";
  if (name.includes("GUIDANCE & CONTROL")) return "fa-sliders-h";
  if (name.includes("AEROSPACE SYSTEM INTEGRATION")) return "fa-cogs";
  if (name.includes("PROFESSIONAL ETHICS")) return "fa-balance-scale";
  if (name.includes("CAPSTONE DESIGN PROJECT")) return "fa-tasks";
  if (name.includes("SPACECRAFT THERMAL CONTROL")) return "fa-thermometer-half";
  if (name.includes("RISK & RELIABILITY")) return "fa-chart-line";
  if (name.includes("ELECTIVE III")) return "fa-book-open";
  if (name.includes("ENTREPRENEURSHIP IN AEROSPACE")) return "fa-chalkboard-user";
  if (name.includes("SEMINAR & PORTFOLIO")) return "fa-file-alt";
  return "fa-book-open";
}

// ==================== GENERATE SEMESTER ICON GRID ====================
function generateIconGrid(semNum, courses, credits, project, semesterName) {
  const iconsHtml = courses.map(course => {
    const iconClass = getIconForCourse(course);
    const escapedCourse = course.replace(/'/g, "\\'");
    return `
      <div class="course-icon-card" data-course="${escapedCourse.replace(/"/g, '&quot;')}">
        <i class="fas ${iconClass}"></i>
        <span>${course}</span>
      </div>
    `;
  }).join('');

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Semester ${semNum} | AeroGyan Curriculum</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
      <style>
        * { margin:0; padding:0; box-sizing:border-box; }
        body {
          background: linear-gradient(135deg, #0a1922 0%, #07131c 100%);
          font-family: 'Inter', system-ui, sans-serif;
          color: #eef5ff;
          padding: 2rem;
          min-height: 100vh;
        }
        .container {
          max-width: 1100px;
          margin: 0 auto;
          background: rgba(10, 30, 45, 0.65);
          backdrop-filter: blur(12px);
          border-radius: 2rem;
          border: 1px solid rgba(230,126,34,0.4);
          overflow: hidden;
          box-shadow: 0 25px 45px -12px black;
        }
        .visual-header {
          background: linear-gradient(115deg, #0f2b3f, #1c4e70);
          padding: 2rem;
          text-align: center;
        }
        .visual-header h2 {
          font-size: 1.8rem;
          font-family: 'Space Grotesk', monospace;
          margin-bottom: 1rem;
        }
        .badge {
          background: #e67e22;
          display: inline-block;
          padding: 0.2rem 1rem;
          border-radius: 30px;
          font-size: 0.8rem;
          font-weight: bold;
        }
        .icon-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.8rem;
          padding: 2rem;
        }
        .course-icon-card {
          background: rgba(255,255,255,0.08);
          border-radius: 1.5rem;
          padding: 1.5rem 1rem;
          text-align: center;
          transition: 0.3s;
          border: 1px solid rgba(230,126,34,0.3);
          cursor: pointer;
        }
        .course-icon-card:hover {
          transform: translateY(-6px);
          background: rgba(230,126,34,0.2);
          border-color: #e67e22;
        }
        .course-icon-card i {
          font-size: 3rem;
          color: #e67e22;
          margin-bottom: 0.8rem;
          display: block;
        }
        .course-icon-card span {
          font-size: 0.95rem;
          font-weight: 500;
        }
        .project-card {
          background: rgba(0,0,0,0.3);
          border-radius: 1.5rem;
          padding: 1.5rem;
          margin: 0 2rem 2rem 2rem;
          border: 1px solid rgba(230,126,34,0.4);
        }
        .close-btn {
          display: inline-block;
          background: #e67e22;
          color: white;
          text-decoration: none;
          padding: 0.7rem 1.6rem;
          border-radius: 3rem;
          margin: 1rem 0 2rem;
          font-weight: bold;
          transition: 0.2s;
          border: none;
          cursor: pointer;
        }
        .close-btn:hover {
          background: #bf6a1a;
          transform: scale(0.98);
        }
        footer {
          text-align: center;
          padding: 1rem;
          font-size: 0.8rem;
          border-top: 1px solid rgba(230,126,34,0.3);
          background: rgba(0,0,0,0.2);
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="visual-header">
          <h2><i class="fas fa-calendar-alt"></i> Semester ${semNum}${semesterName ? `: ${semesterName}` : ''}</h2>
          <div class="badge"><i class="fas fa-graduation-cap"></i> Total Credits: ${credits}</div>
        </div>
        <div class="icon-grid">
          ${iconsHtml}
        </div>
        <div class="project-card">
          <i class="fas fa-rocket"></i> <strong>🏆 Capstone / Key Project</strong><br>
          ${project}
        </div>
        <div style="text-align: center;">
          <button class="close-btn" onclick="window.close()"><i class="fas fa-times-circle"></i> Close Window</button>
        </div>
        <footer>
          AeroGyan — Empowering Aerospace Minds | Click any subject for detailed resources
        </footer>
      </div>
      <script>
        const cards = document.querySelectorAll('.course-icon-card');
        cards.forEach(card => {
          card.addEventListener('click', () => {
            const courseName = card.getAttribute('data-course');
            if (courseName && window.opener && window.opener.openSubjectPage) {
              window.opener.openSubjectPage(courseName);
            } else {
              alert('Unable to open subject page. Please ensure pop-ups are allowed.');
            }
          });
        });
      <\/script>
    </body>
    </html>
  `;
}

// ==================== RESOURCE PAGE ====================
function openSubjectPage(subjectName) {
  const resourceButtons = `
    <div class="resource-buttons">
      <button class="resource-btn" data-type="slides"><i class="fas fa-chalkboard-teacher"></i> Lecture Slides</button>
      <button class="resource-btn" data-type="notes"><i class="fas fa-file-alt"></i> Notes</button>
      <button class="resource-btn" data-type="videos"><i class="fas fa-video"></i> Video Lectures</button>
      <button class="resource-btn" data-type="books"><i class="fas fa-book"></i> Books</button>
      <button class="resource-btn" data-type="tutorials"><i class="fas fa-graduation-cap"></i> Tutorials</button>
      <button class="resource-btn" data-type="pyqs"><i class="fas fa-question-circle"></i> PYQs</button>
      <button class="resource-btn" data-type="instructor"><i class="fas fa-user-tie"></i> About Instructor</button>
    </div>
  `;

  const pageHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${subjectName} | Resources</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
      <style>
        * { margin:0; padding:0; box-sizing:border-box; }
        body {
          background: linear-gradient(135deg, #0a1922 0%, #07131c 100%);
          font-family: 'Inter', system-ui, sans-serif;
          color: #eef5ff;
          padding: 2rem;
          min-height: 100vh;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
          background: rgba(10, 30, 45, 0.65);
          backdrop-filter: blur(12px);
          border-radius: 2rem;
          border: 1px solid rgba(230,126,34,0.4);
          overflow: hidden;
          box-shadow: 0 25px 45px -12px black;
        }
        .header {
          background: linear-gradient(115deg, #0f2b3f, #1c4e70);
          padding: 2rem;
          text-align: center;
        }
        .header i {
          font-size: 3rem;
          color: #e67e22;
          margin-bottom: 1rem;
        }
        .header h1 {
          font-size: 1.8rem;
          font-family: 'Space Grotesk', monospace;
        }
        .resource-buttons {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.2rem;
          padding: 2rem;
        }
        .resource-btn {
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(230,126,34,0.5);
          border-radius: 1rem;
          padding: 1rem;
          font-size: 1rem;
          font-weight: 600;
          color: white;
          cursor: pointer;
          transition: 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }
        .resource-btn:hover {
          background: #e67e22;
          border-color: #e67e22;
          transform: translateY(-3px);
        }
        .close-btn {
          display: block;
          background: #e67e22;
          color: white;
          border: none;
          padding: 0.7rem 1.6rem;
          border-radius: 3rem;
          margin: 0 auto 2rem;
          font-weight: bold;
          cursor: pointer;
          transition: 0.2s;
        }
        .close-btn:hover {
          background: #bf6a1a;
          transform: scale(0.98);
        }
        footer {
          text-align: center;
          padding: 1rem;
          font-size: 0.8rem;
          border-top: 1px solid rgba(230,126,34,0.3);
          background: rgba(0,0,0,0.2);
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <i class="fas fa-book-open"></i>
          <h1>${subjectName}</h1>
          <p style="margin-top: 0.5rem;">Learning Resources</p>
        </div>
        ${resourceButtons}
        <div style="text-align: center;">
          <button class="close-btn" onclick="window.close()"><i class="fas fa-times-circle"></i> Close Window</button>
        </div>
        <footer>
          AeroGyan — Empowering Aerospace Minds
        </footer>
      </div>
      <script>
        // Get folder URLs using the helper function from parent window
        function getFolder(resourceType) {
          if (window.opener && window.opener.getFolderURL) {
            return window.opener.getFolderURL('${subjectName}', resourceType);
          } else {
            // Fallback (should not happen if parent exposes the function)
            return '#';
          }
        }
        
        document.querySelectorAll('.resource-btn').forEach(btn => {
          btn.addEventListener('click', (e) => {
            const type = btn.getAttribute('data-type');
            let message = '';
            switch(type) {
              case 'slides':
                window.open(getFolder('slides'), '_blank');
                return;
              case 'notes':
                window.open(getFolder('notes'), '_blank');
                return;
              case 'books':
                window.open(getFolder('books'), '_blank');
                return;
              case 'tutorials':
                window.open(getFolder('tutorials'), '_blank');
                return;
              case 'pyqs':
                window.open(getFolder('pyqs'), '_blank');
                return;
              case 'videos':
                message = '🎥 Video lectures will be available soon.';
                break;
              case 'instructor':
                message = '👨‍🏫 Dr. [Instructor Name] – expert in ${subjectName} with 12+ years of experience.';
                break;
              default:
                message = 'Content coming soon.';
            }
            alert(message);
          });
        });
      <\/script>
    </body>
    </html>
  `;

  const win = window.open();
  if (win) {
    win.document.write(pageHtml);
    win.document.close();
  } else {
    alert("Please allow pop-ups to view subject resources.");
  }
}

// ==================== MAIN ====================
function openSemesterPage(semNum) {
  const data = semesterDetails[semNum];
  if (!data) return;
  const iconGridHtml = generateIconGrid(semNum, data.courses, data.credits, data.project, data.name);
  const win = window.open();
  if (win) {
    win.document.write(iconGridHtml);
    win.document.close();
    if (win.opener) {
      // Expose helper function to the popup
      win.opener.getFolderURL = getFolderURL;
      win.opener.openSubjectPage = openSubjectPage;
    }
  } else {
    alert("Please allow pop-ups to view semester details.");
  }
}

// Generate 10 semester buttons
const grid = document.getElementById('semesterGrid');
for (let i = 1; i <= 10; i++) {
  const btn = document.createElement('div');
  btn.className = 'semester-btn';
  btn.innerHTML = `
    <i class="fas fa-calendar-alt"></i>
    <span class="sem-number">${i}</span>
    <span class="sem-label">Semester</span>
  `;
  btn.addEventListener('click', (function(num) { return function() { openSemesterPage(num); }; })(i));
  grid.appendChild(btn);
}

// Expose globally for popup windows
window.getFolderURL = getFolderURL;
window.openSubjectPage = openSubjectPage;

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if (menuToggle) {
  menuToggle.addEventListener('click', () => navLinks.classList.toggle('show'));
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 800) navLinks.classList.remove('show');
    });
  });
}

// Contact form
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✨ Message launched! Krishana will reply within 24 hours.');
    form.reset();
  });
}