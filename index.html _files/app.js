// Store CV file
let uploadedCV = null;

// Company data with realistic details
const companiesData = {
  Maintenance: [
    { name: 'Renault Techcentre', location: 'Guyancourt', email: 'recrutement.maintenance@renault.fr', secteur: 'Automobile' },
    { name: 'Bosch Rexroth', location: 'Cormelles', email: 'jobs@bosch-rexroth.fr', secteur: 'Hydraulique Industrielle' },
    { name: 'Siemens Industry', location: 'Colombes', email: 'careers@siemens.fr', secteur: 'Électromécanique' },
    { name: 'Volvo Penta', location: 'Gonesse', email: 'recruitment@volvo.com', secteur: 'Moteurs Marins' },
    { name: 'Michelin Test Centre', location: 'Ladoux', email: 'emploi@michelin.fr', secteur: 'Pneumatiques' },
    { name: 'Valeo Systèmes Thermiques', location: 'Créteil', email: 'careers@valeo.fr', secteur: 'Systèmes Thermiques Auto' },
    { name: 'Eaton Industries', location: 'Nanterre', email: 'hr.france@eaton.fr', secteur: 'Électrique Industrielle' },
    { name: 'Liebherr-Aerospace', location: 'Toulouse', email: 'jobs@liebherr.com', secteur: 'Aérospatiale' },
    { name: 'Parker Hannifin', location: 'Lyon', email: 'recrutement@parker.fr', secteur: 'Composants Hydrauliques' },
    { name: 'Hydac International', location: 'Villebon', email: 'careers@hydac.fr', secteur: 'Hydraulique' },
    { name: 'Rexnord Industries', location: 'Strasbourg', email: 'jobs@rexnord.fr', secteur: 'Chaînes Industrielles' },
    { name: 'ABB Motion', location: 'Douai', email: 'recruitment@abb.com', secteur: 'Moteurs Électriques' }
  ],
  Électrique: [
    { name: 'Schneider Electric', location: 'Rueil-Malmaison', email: 'careers.fr@schneider-electric.com', secteur: 'Électricité Industrielle' },
    { name: 'Legrand', location: 'Limoges', email: 'recruitment@legrand.fr', secteur: 'Distribution Électrique' },
    { name: 'ABB', location: 'Calais', email: 'jobs@abb.com', secteur: 'Équipements Électriques' },
    { name: 'Eaton', location: 'Nanterre', email: 'hr.france@eaton.fr', secteur: 'Gestion Énergétique' },
    { name: 'Siemens', location: 'Amiens', email: 'careers@siemens.fr', secteur: 'Automatismes' },
    { name: 'Alstom Grid', location: 'Saint-Ouen', email: 'recruitment@alstom.fr', secteur: 'Réseaux Électriques' },
    { name: 'EDF Énergies Nouvelles', location: 'Vélizy', email: 'emploi@edf.fr', secteur: 'Énergies Renouvelables' },
    { name: 'Somfy', location: 'Angers', email: 'careers@somfy.fr', secteur: 'Automatismes Bâtiment' },
    { name: 'Hager', location: 'Obernai', email: 'jobs@hager.fr', secteur: 'Distribution Électrique' },
    { name: 'Gedimat', location: 'Villepinte', email: 'recrutement@gedimat.fr', secteur: 'Négoce Électrique' },
    { name: 'Rexel', location: 'Aubervilliers', email: 'careers@rexel.fr', secteur: 'Matériel Électrique' },
    { name: 'Nexans', location: 'Villepinte', email: 'emploi@nexans.fr', secteur: 'Câbles Électriques' }
  ],
  Informatique: [
    { name: 'OVH Cloud', location: 'Roubaix', email: 'careers@ovh.com', secteur: 'Cloud Computing' },
    { name: 'Eurostar Tech', location: 'Nanterre', email: 'jobs@eurostartech.fr', secteur: 'Technologie' },
    { name: 'Boehringer Ingelheim', location: 'Reims', email: 'recruitment@boehringer.fr', secteur: 'Pharmaceutique Tech' },
    { name: 'Ubisoft Paris', location: 'Montreuil', email: 'careers@ubisoft.fr', secteur: 'Jeux Vidéo' },
    { name: 'Sopra Steria', location: 'Puteaux', email: 'recruitment@soprasteria.com', secteur: 'Conseil IT' },
    { name: 'Capgemini', location: 'Paris La Défense', email: 'careers@capgemini.fr', secteur: 'Services IT' },
    { name: 'Accenture', location: 'Boulogne-Billancourt', email: 'jobs@accenture.fr', secteur: 'Conseil Digital' },
    { name: 'Orange Lab', location: 'Rennes', email: 'recruitment@orange.fr', secteur: 'Télécommunications' },
    { name: 'Dassault Systèmes', location: 'Vélizy', email: 'careers@3ds.com', secteur: 'Logiciels 3D' },
    { name: 'Thales', location: 'Limours', email: 'emploi@thalesgroup.fr', secteur: 'Défense Électronique' },
    { name: 'Airbus Defence', location: 'Toulouse', email: 'recruitment@airbus.fr', secteur: 'Aérospatiale' },
    { name: 'Criteo', location: 'Paris', email: 'careers@criteo.fr', secteur: 'Publicité Digital' }
  ]
};

// Skills by field
const skillsByField = {
  Maintenance: [
    'Maintenance préventive et curative',
    'Diagnostic et dépannage moteur',
    'Hydraulique et pneumatique',
    'Utilisation multimètre et oscilloscope',
    'Soudure TIG/MIG',
    'Lecture de plans techniques',
    'Sécurité en atelier (EPI)'
  ],
  Électrique: [
    'Installation électrique industrielle',
    'Normes électriques (NFC 15-100)',
    'Sécurité électrique (habilitation)',
    'Lecture de schémas électriques',
    'Utilisation testeur électrique',
    'Câblage BT/MT',
    'Prévention des risques électriques'
  ],
  Informatique: [
    'Programmation (Python, Java, C++)',
    'Développement web (HTML, CSS, JavaScript)',
    'Bases de données (SQL)',
    'Git et version control',
    'Linux/Windows',
    'Résolution de problèmes techniques',
    'Anglais technique'
  ]
};

// Store form data
let formData = {};
let generatedApplications = [];

// Navigation functions
function goToForm() {
  document.getElementById('landing').classList.remove('active');
  document.getElementById('form-section').classList.add('active');
  document.getElementById('progress-indicator').classList.add('active');
  updateProgress(1);
}

function goToLanding() {
  document.getElementById('form-section').classList.remove('active');
  document.getElementById('landing').classList.add('active');
  document.getElementById('progress-indicator').classList.remove('active');
}

function newApplication() {
  document.getElementById('results').classList.remove('active');
  document.getElementById('landing').classList.add('active');
  document.getElementById('progress-indicator').classList.remove('active');
  document.getElementById('candidate-form').reset();
  uploadedCV = null;
  generatedApplications = [];
}

// Progress tracking
function updateProgress(step) {
  const steps = document.querySelectorAll('.progress-step');
  steps.forEach((el, index) => {
    el.classList.remove('active', 'completed');
    if (index + 1 < step) {
      el.classList.add('completed');
    } else if (index + 1 === step) {
      el.classList.add('active');
    }
  });
}

// CV file handling
function handleFileSelect(event) {
  const file = event.target.files[0];
  if (file) {
    uploadedCV = file;
    displayUploadedFile(file);
  }
}

function displayUploadedFile(file) {
  const uploadArea = document.querySelector('.cv-upload-content');
  const uploadedInfo = document.getElementById('cv-uploaded-info');
  const fileName = document.getElementById('cv-uploaded-name');
  const fileSize = document.getElementById('cv-uploaded-size');
  
  uploadArea.style.display = 'none';
  uploadedInfo.style.display = 'flex';
  fileName.textContent = file.name;
  fileSize.textContent = `${(file.size / 1024).toFixed(1)} KB`;
}

function removeFile(event) {
  event.stopPropagation();
  uploadedCV = null;
  const uploadArea = document.querySelector('.cv-upload-content');
  const uploadedInfo = document.getElementById('cv-uploaded-info');
  document.getElementById('cv-upload').value = '';
  uploadArea.style.display = 'block';
  uploadedInfo.style.display = 'none';
}

// Form submission
function handleSubmit(event) {
  event.preventDefault();
  
  const errorMessage = document.getElementById('error-message');
  errorMessage.style.display = 'none';
  
  const email = document.getElementById('email').value.trim();
  const prenom = document.getElementById('prenom').value.trim();
  const ville = document.getElementById('ville').value.trim();
  const telephone = document.getElementById('telephone').value.trim();
  const filiere = document.getElementById('filiere').value;
  
  if (!email || !prenom || !ville || !telephone || !filiere) {
    errorMessage.textContent = 'Veuillez remplir tous les champs requis.';
    errorMessage.style.display = 'block';
    return;
  }
  
  if (!uploadedCV) {
    errorMessage.textContent = 'Veuillez uploader votre CV.';
    errorMessage.style.display = 'block';
    return;
  }
  
  formData = { email, prenom, ville, telephone, filiere, cvName: uploadedCV.name };
  
  showLoading();
  document.getElementById('loading-progress').textContent = 'Extraction des compétences...';
  
  setTimeout(() => {
    hideLoading();
    showCVAnalysis();
  }, 3000);
}

function showLoading() {
  document.getElementById('loading-overlay').classList.add('active');
}

function hideLoading() {
  document.getElementById('loading-overlay').classList.remove('active');
}

function showCVAnalysis() {
  document.getElementById('form-section').classList.remove('active');
  document.getElementById('cv-analysis').classList.add('active');
  updateProgress(2);
  
  const skillsList = document.getElementById('skills-list');
  const skills = skillsByField[formData.filiere] || [];
  skillsList.innerHTML = '';
  
  skills.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    skillItem.innerHTML = `<div class="skill-badge">${skill}</div>`;
    skillsList.appendChild(skillItem);
  });
}

function startScraping() {
  document.getElementById('cv-analysis').classList.remove('active');
  document.getElementById('scraping-section').classList.add('active');
  updateProgress(3);
  
  let progress = 0;
  const progressBar = document.getElementById('progress-bar');
  const progressText = document.getElementById('progress-text');
  const interval = setInterval(() => {
    progress += Math.random() * 30;
    if (progress > 100) progress = 100;
    progressBar.style.width = progress + '%';
    progressText.textContent = Math.floor(progress) + '%';
    
    if (progress === 100) {
      clearInterval(interval);
      setTimeout(displayResults, 1500);
    }
  }, 300);
}

function displayResults() {
  document.getElementById('scraping-section').classList.remove('active');
  document.getElementById('results').classList.add('active');
  updateProgress(4);
  
  const filiere = formData.filiere;
  const companies = companiesData[filiere] || [];
  const successMessage = document.getElementById('success-message');
  
  successMessage.innerHTML = `✅ ${companies.length} demandes de stage générées`;
  
  generatedApplications = companies.map((company, index) => ({
    ...company,
    id: index,
    message: generateMessage(company, filiere)
  }));
  
  populateTable();
}

function generateMessage(company, filiere) {
  const templates = {
    Maintenance: [
      `Bonjour,\n\nJe m'appelle ${formData.prenom} et je suis actuellement élève en lycée professionnel, spécialisé en maintenance industrielle. Je suis en recherche d'un stage et votre entreprise ${company.name} à ${company.location} m'intéresse beaucoup.\n\nAu lycée, j'ai appris les bases de la maintenance préventive et curative, ainsi que le diagnostic moteur. J'ai également développé des connaissances en hydraulique, pneumatique et j'ai manipulé des outils comme le multimètre et l'oscilloscope. J'ai aussi des notions en soudure TIG/MIG.\n\nCe qui m'attire chez ${company.name}, c'est la qualité de vos installations et votre réputation en maintenance préventive. Je suis convaincu que ce stage me permettrait d'apprendre auprès de vrais professionnels et de mettre en pratique ce que j'ai appris en classe.\n\nSerait-il possible de discuter d'une opportunité de stage ? Je suis vraiment motivé et disponible pour cette expérience.\n\nCordialement,\n${formData.prenom}\n${formData.email}\n${formData.telephone}\n\nP.S. : Mon CV est joint à cet email.`
    ],
    Électrique: [
      `Bonjour,\n\nJe m'appelle ${formData.prenom} et je suis élève en lycée professionnel, spécialisé en électricité industrielle. Je cherche actuellement un stage et j'aimerais vraiment le faire chez ${company.name} à ${company.location}.\n\nAu lycée, j'ai étudié l'installation électrique industrielle et j'ai appris les normes de sécurité importantes (NFC 15-100). J'ai aussi obtenu mon habilitation électrique BR. Je sais lire les schémas électriques et j'ai utilisé des testeurs électriques en cours pratique.\n\nCe qui m'intéresse chez vous, c'est que vous êtes leaders dans l'innovation énergétique. Je pense que faire un stage chez ${company.name} serait une super opportunité pour moi d'apprendre dans un environnement professionnel de qualité.\n\nSeriez-vous intéressés pour m'accueillir en stage ? Je suis très motivé et prêt à donner mon maximum.\n\nCordialement,\n${formData.prenom}\n${formData.email}\n${formData.telephone}\n\nP.S. : Mon CV est joint.`
    ],
    Informatique: [
      `Bonjour,\n\nJe m'appelle ${formData.prenom} et je suis élève en lycée professionnel en informatique. Je suis à la recherche d'un stage et ${company.name} à ${company.location} m'intéresse beaucoup.\n\nAu lycée, j'ai appris la programmation (Python, Java), le développement web (HTML, CSS, JavaScript) et les bases de données SQL. Je connais aussi Git et je suis à l'aise avec Linux et Windows. J'ai encore beaucoup à apprendre mais j'aime vraiment la programmation.\n\nJ'aimerais faire un stage chez vous parce que j'admire votre approche du cloud computing et je pense que ça me permettrait d'apprendre beaucoup de choses en conditions réelles. Je suis vraiment motivé.\n\nPensez-vous qu'il serait possible de m'accueillir en stage ? Je suis disponible et prêt à travailler dur.\n\nCordialement,\n${formData.prenom}\n${formData.email}\n${formData.telephone}\n\nP.S. : Mon CV est en pièce jointe.`
    ]
  };
  
  const messages = templates[filiere] || templates.Informatique;
  return messages[0];
}

function populateTable() {
  const tbody = document.getElementById('results-tbody');
  tbody.innerHTML = '';
  
  generatedApplications.forEach((app, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><strong>${app.name}</strong></td>
      <td>${app.location}</td>
      <td>${app.email}</td>
      <td>${app.secteur}</td>
      <td><span class="status-badge">Prêt</span></td>
      <td><button class="btn btn--sm" onclick="showMessage(${index})">Voir</button></td>
    `;
    tbody.appendChild(row);
  });
}

function showMessage(index) {
  const app = generatedApplications[index];
  document.getElementById('message-modal').classList.add('active');
  document.getElementById('modal-company-name').textContent = app.name;
  document.getElementById('modal-email').textContent = app.email;
  document.getElementById('modal-subject').textContent = `Candidature - ${formData.prenom} ${formData.filiere} - ${app.name}`;
  document.getElementById('modal-full-message').textContent = app.message;
  document.getElementById('modal-cv-name').textContent = formData.cvName;
}

function closeModal(event) {
  if (event.target.id === 'message-modal' || event.target.className === 'modal-close') {
    document.getElementById('message-modal').classList.remove('active');
  }
}

function sendAllApplications() {
  showLoading();
  document.getElementById('loading-progress').textContent = 'Envoi des candidatures...';
  
  setTimeout(() => {
    hideLoading();
    const tbody = document.getElementById('results-tbody');
    tbody.innerHTML = '';
    
    generatedApplications.forEach((app) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><strong>${app.name}</strong></td>
        <td>${app.location}</td>
        <td>${app.email}</td>
        <td>${app.secteur}</td>
        <td><span class="status-badge sent">Envoyé</span></td>
        <td><button class="btn btn--sm" onclick="showMessage(${generatedApplications.indexOf(app)})">Voir</button></td>
      `;
      tbody.appendChild(row);
    });
    
    const successMessage = document.getElementById('success-message');
    const today = new Date().toLocaleDateString('fr-FR');
    successMessage.innerHTML = `✅ ${generatedApplications.length} candidatures envoyées avec succès ! (${today})`;
  }, 2000);
}

function downloadTracking() {
  alert('Fonction de téléchargement Google Sheet - À implémenter avec backend réel');
}
