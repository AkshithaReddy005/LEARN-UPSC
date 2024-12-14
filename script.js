// Tips Data
const tips = [
    "Start preparation at least a year before Prelims",
    "Study both Prelims and Mains syllabus thoroughly",
    "Analyze past years' question papers",
    "Read newspapers regularly and make notes",
    "Master NCERT books before advanced texts",
    "Create and maintain organized study notes",
    "Set clear timeline and objectives",
    "Attend coaching classes regularly if enrolled",
    "Use internet resources wisely",
    "Practice answer writing",
    "Join test series for both exams",
    "Form study groups",
    "Review and revise regularly"
];

// Resources Data
const resources = [
    {
        name: "UPSC Syllabus",
        url: "https://byjus.com/ias/upsc-syllabus/",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>`
    },
    {
        name: "Question Papers",
        url: "https://byjus.com/free-ias-prep/upsc-question-paper/",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>`
    },
    {
        name: "Study Material",
        url: "https://byjus.com/free-ias-prep/upsc-study-material/",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`
    },
    {
        name: "NCERT Notes",
        url: "https://byjus.com/free-ias-prep/upsc-exam-online-preparation/ncert-notes/",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`
    },
    {
        name: "Exam Strategy",
        url: "https://byjus.com/free-ias-prep/upsc-exam-strategy/",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="M15 3v18"/><path d="M3 9h18"/><path d="M3 15h18"/></svg>`
    }
];

// Populate Tips
const tipsGrid = document.querySelector('.tips-grid');
tips.forEach(tip => {
    const tipCard = document.createElement('div');
    tipCard.className = 'tip-card';
    tipCard.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tip-icon">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
        <p>${tip}</p>
    `;
    tipsGrid.appendChild(tipCard);
});

// Populate Resources
const resourcesGrid = document.querySelector('.resources-grid');
resources.forEach(resource => {
    const resourceCard = document.createElement('a');
    resourceCard.className = 'resource-card';
    resourceCard.href = resource.url;
    resourceCard.target = '_blank';
    resourceCard.rel = 'noopener noreferrer';
    resourceCard.innerHTML = `
        <div class="resource-icon">${resource.icon}</div>
        <h3>${resource.name}</h3>
    `;
    resourcesGrid.appendChild(resourceCard);
});

// Handle Feedback Form
const feedbackForm = document.getElementById('feedback-form');
feedbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const feedback = document.getElementById('feedback').value;
    console.log('Feedback submitted:', feedback);
    feedbackForm.reset();
    alert('Thank you for your feedback!');
});

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});
