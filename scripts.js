// Store DOM elements
const DOM = {
    form: null,
    projectsContainer: null,
    skillsContainer: null,
    personalProjectsContainer: null,
    certificationsContainer: null,
    internshipsContainer: null,
    educationContainer: null,
    achievementsContainer: null,
    extraCurricularContainer: null,
    downloadBtn: null
};

// Initialize the application
function initializeApp() {
    cacheDOMElements();
    setupEventListeners();
    loadInitialEntries();
}

// Cache DOM elements
function cacheDOMElements() {
    DOM.form = document.getElementById('portfolioForm');
    DOM.projectsContainer = document.getElementById('projectsContainer');
    DOM.skillsContainer = document.getElementById('skillsContainer');
    DOM.personalProjectsContainer = document.getElementById('personalProjectsContainer');
    DOM.certificationsContainer = document.getElementById('certificationsContainer');
    DOM.internshipsContainer = document.getElementById('internshipsContainer');
    DOM.educationContainer = document.getElementById('educationContainer');
    DOM.achievementsContainer = document.getElementById('achievementsContainer');
    DOM.extraCurricularContainer = document.getElementById('extraCurricularContainer');
}

// Setup event listeners
function setupEventListeners() {
    if (DOM.form) {
        DOM.form.addEventListener('submit', updatePortfolio);
    }
}



// Project entry creation
function addProject() {
    const projectEntry = document.createElement('div');
    projectEntry.className = 'project-entry';
    projectEntry.innerHTML = `
        <div class="input-group">
            <label>Project Title</label>
            <input type="text" class="project-title" required>
        </div>
        <div class="input-group">
            <label>Project Description</label>
            <textarea class="project-description" required></textarea>
        </div>
        <div class="input-group">
            <label>GitHub Link</label>
            <input type="url" class="project-github">
        </div>
        <button type="button" class="button remove-btn" onclick="removeEntry(this)">Remove Project</button>
    `;
    DOM.projectsContainer.appendChild(projectEntry);
}



// Skill entry creation
function addSkill() {
    const skillEntry = document.createElement('div');
    skillEntry.className = 'skill-entry';
    skillEntry.innerHTML = `
        <div class="input-group">
            <label>Skill Category</label>
            <input type="text" class="skill-category" required>
        </div>
        <div class="input-group">
            <label>Skills (comma-separated)</label>
            <input type="text" class="skill-list" required>
        </div>
        <button type="button" class="button remove-btn" onclick="removeEntry(this)">Remove Skill</button>
    `;
    DOM.skillsContainer.appendChild(skillEntry);
}

// Personal Project entry creation
function addPersonalProject() {
    const personalProjectEntry = document.createElement('div');
    personalProjectEntry.className = 'personal-project-entry';
    personalProjectEntry.innerHTML = `
        <div class="input-group">
            <label>Project Title</label>
            <input type="text" class="personal-project-title" required>
        </div>
        <div class="input-group">
            <label>Project Description</label>
            <textarea class="personal-project-description" required></textarea>
        </div>
        <button type="button" class="button remove-btn" onclick="removeEntry(this)">Remove Project</button>
    `;
    DOM.personalProjectsContainer.appendChild(personalProjectEntry);
}

// Certification entry creation
function addCertification() {
    const certificationEntry = document.createElement('div');
    certificationEntry.className = 'certification-entry';
    certificationEntry.innerHTML = `
        <div class="input-group">
            <label>Certification/Course Title</label>
            <input type="text" class="certification-title" required>
        </div>
        <div class="input-group">
            <label>Institution</label>
            <input type="text" class="certification-institution" required>
        </div>
        <div class="input-group">
            <label>Date Completed</label>
            <input type="date" class="certification-date" required>
        </div>
        <button type="button" class="button remove-btn" onclick="removeEntry(this)">Remove Certification</button>
    `;
    DOM.certificationsContainer.appendChild(certificationEntry);
}

// Internship entry creation
function addInternship() {
    const internshipEntry = document.createElement('div');
    internshipEntry.className = 'internship-entry';
    internshipEntry.innerHTML = `
        <div class="input-group">
            <label>Company Name</label>
            <input type="text" class="internship-company" required>
        </div>
        <div class="input-group">
            <label>Role</label>
            <input type="text" class="internship-role" required>
        </div>
        <div class="input-group">
            <label>Duration</label>
            <input type="text" class="internship-duration" required>
        </div>
        <button type="button" class="button remove-btn" onclick="removeEntry(this)">Remove Internship</button>
    `;
    DOM.internshipsContainer.appendChild(internshipEntry);
}

// Education entry creation
function addEducation() {
    const educationEntry = document.createElement('div');
    educationEntry.className = 'education-entry';
    educationEntry.innerHTML = `
        <div class="input-group">
            <label>School/University</label>
            <input type="text" class="education-school" required>
        </div>
        <div class="input-group">
            <label>Degree</label>
            <input type="text" class="education-degree" required>
        </div>
        <div class="input-group">
            <label>Year Completed</label>
            <input type="text" class="education-year" required>
        </div>
        <button type="button" class="button remove-btn" onclick="removeEntry(this)">Remove Education</button>
    `;
    DOM.educationContainer.appendChild(educationEntry);
}

// Achievement entry creation
function addAchievement() {
    const achievementEntry = document.createElement('div');
    achievementEntry.className = 'achievement-entry';
    achievementEntry.innerHTML = `
        <div class="input-group">
            <label>Achievement Title</label>
            <input type="text" class="achievement-title" required>
        </div>
        <div class="input-group">
            <label>Description</label>
            <textarea class="achievement-description" required></textarea>
        </div>
        <button type="button" class="button remove-btn" onclick="removeEntry(this)">Remove Achievement</button>
    `;
    DOM.achievementsContainer.appendChild(achievementEntry);
}

// Extra-curricular activity creation
function addExtraCurricular() {
    const extraCurricularEntry = document.createElement('div');
    extraCurricularEntry.className = 'extra-curricular-entry';
    extraCurricularEntry.innerHTML = `
        <div class="input-group">
            <label>Activity Title</label>
            <input type="text" class="extra-curricular-title" required>
        </div>
        <div class="input-group">
            <label>Description</label>
            <textarea class="extra-curricular-description" required></textarea>
        </div>
        <button type="button" class="button remove-btn" onclick="removeEntry(this)">Remove Activity</button>
    `;
    DOM.extraCurricularContainer.appendChild(extraCurricularEntry);
}

// Remove entry
function removeEntry(button) {
    button.parentElement.remove();
}

// Collect form data
function collectFormData() {
    return {
        fullName: document.getElementById('name').value,
        title: document.getElementById('title').value,
        about: document.getElementById('about').value,
        projects: Array.from(document.querySelectorAll('.project-entry')).map(project => ({
            title: project.querySelector('.project-title').value,
            description: project.querySelector('.project-description').value,
            github: project.querySelector('.project-github').value
        })),
        skills: Array.from(document.querySelectorAll('.skill-entry')).map(skill => ({
            category: skill.querySelector('.skill-category').value,
            skills: skill.querySelector('.skill-list').value.split(',').map(s => s.trim())
        })),
        personalProjects: Array.from(document.querySelectorAll('.personal-project-entry')).map(project => ({
            title: project.querySelector('.personal-project-title').value,
            description: project.querySelector('.personal-project-description').value
        })),
        certifications: Array.from(document.querySelectorAll('.certification-entry')).map(cert => ({
            title: cert.querySelector('.certification-title').value,
            institution: cert.querySelector('.certification-institution').value,
            date: cert.querySelector('.certification-date').value
        })),
        internships: Array.from(document.querySelectorAll('.internship-entry')).map(intern => ({
            company: intern.querySelector('.internship-company').value,
            role: intern.querySelector('.internship-role').value,
            duration: intern.querySelector('.internship-duration').value
        })),
        education: Array.from(document.querySelectorAll('.education-entry')).map(edu => ({
            school: edu.querySelector('.education-school').value,
            degree: edu.querySelector('.education-degree').value,
            year: edu.querySelector('.education-year').value
        })),
        achievements: Array.from(document.querySelectorAll('.achievement-entry')).map(achieve => ({
            title: achieve.querySelector('.achievement-title').value,
            description: achieve.querySelector('.achievement-description').value
        })),
        extraCurricular: Array.from(document.querySelectorAll('.extra-curricular-entry')).map(activity => ({
            title: activity.querySelector('.extra-curricular-title').value,
            description: activity.querySelector('.extra-curricular-description').value
        })),
        contact: {
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            linkedin: document.getElementById('linkedin').value,
            github: document.getElementById('github').value
        }
    };
}

// Update portfolio
function updatePortfolio(event) {
    event.preventDefault();
    const formData = collectFormData();
    localStorage.setItem('portfolioData', JSON.stringify(formData));
    generatePortfolio(formData);
}

// Generate navigation HTML
function generateNav(data) {
    return `
    <div class="nav-content">
        <div class="logo">
            <span class="logo-text">${data.fullName}</span>
        </div>
        <div class="nav-links">
            <a href="#about"><i class="fas fa-user"></i>About</a>
            <a href="#projects"><i class="fas fa-code"></i>Projects</a>
            <a href="#skills"><i class="fas fa-tools"></i>Skills</a>
            <a href="#contact"><i class="fas fa-envelope"></i>Contact</a>
            <a href="#" onclick="downloadPortfolio()"><i class="fas fa-download"></i>Download</a>
        </div>
    </div>`;
}

// Generate portfolio HTML
function generatePortfolio(data) {
    const portfolioHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.fullName} - Portfolio</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    </head>
    <body>
        <nav>${generateNav(data)}</nav>

        <section class="hero">
            <div class="hero-content">
                <div class="hero-intro">
                    <span class="greeting">Hello, I'm</span>
                    <h1 class="name">${data.fullName}</h1>
                    <p class="title">${data.title}</p>
                    <div class="hero-buttons">
                        <a href="#contact" class="button primary-button">Contact Me</a>
                        <a href="#projects" class="button secondary-button">View Projects</a>
                    </div>
                </div>
            </div>
        </section>

        ${generateSections(data)}

        <footer class="footer">
            <div class="footer-content">
                <p>&copy; ${new Date().getFullYear()} ${data.fullName}. All rights reserved.</p>
            </div>
        </footer>
    </body>
    </html>`;

    document.body.innerHTML = portfolioHTML;
}

// Generate all sections
function generateSections(data) {
    return `
        <section id="about" class="section">
            <div class="section-container">
                <div class="section-header">
                    <h2>About Me</h2>
                    <div class="section-divider"></div>
                </div>
                <div class="about-content">
                    <p>${data.about}</p>
                </div>
            </div>
        </section>

        ${data.projects.length > 0 ? `
        <section id="projects" class="section">
            <div class="section-container">
                <div class="section-header">
                    <h2>My Projects</h2>
                    <div class="section-divider"></div>
                </div>
                <div class="project-grid">
                    ${generateProjectCards(data.projects)}
                </div>
            </div>
        </section>` : ''}

        ${data.skills.length > 0 ? `
        <section id="skills" class="section">
            <div class="section-container">
                <div class="section-header">
                    <h2>My Skills</h2>
                    <div class="section-divider"></div>
                </div>
                <div class="skill-grid">
                    ${generateSkillCards(data.skills)}
                </div>
            </div>
        </section>` : ''}

        ${data.personalProjects.length > 0 ? `
        <section id="personal-projects" class="section">
            <div class="section-container">
                <div class="section-header">
                    <h2>Personal Projects</h2>
                    <div class="section-divider"></div>
                </div>
                <div class="project-grid">
                    ${data.personalProjects.map(project => `
                        <div class="project-card">
                            <h3>${project.title}</h3>
                            <p>${project.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>` : ''}

        ${data.certifications.length > 0 ? `
        <section id="certifications" class="section">
            <div class="section-container">
                <div class="section-header">
                    <h2>Certifications & Courses</h2>
                    <div class="section-divider"></div>
                </div>
                <div class="certification-grid">
                    ${generateCertificationCards(data.certifications)}
                </div>
            </div>
        </section>` : ''}

        ${data.internships.length > 0 ? `
        <section id="internships" class="section">
            <div class="section-container">
                <div class="section-header">
                    <h2>Internships</h2>
                    <div class="section-divider"></div>
                </div>
                <div class="internship-grid">
                    ${generateInternshipCards(data.internships)}
                </div>
            </div>
        </section>` : ''}

        ${data.education.length > 0 ? `
        <section id="education" class="section">
            <div class="section-container">
                <div class="section-header">
                    <h2>Education</h2>
                    <div class="section-divider"></div>
                </div>
                <div class="education-grid">
                    ${generateEducationCards(data.education)}
                </div>
            </div>
        </section>` : ''}

        ${data.achievements.length > 0 ? `
        <section id="achievements" class="section">
            <div class="section-container">
                <div class="section-header">
                    <h2>Achievements</h2>
                    <div class="section-divider"></div>
                </div>
                <div class="achievement-grid">
                    ${generateAchievementCards(data.achievements)}
                </div>
            </div>
        </section>` : ''}

        ${data.extraCurricular.length > 0 ? `
        <section id="extra-curricular" class="section">
            <div class="section-container">
                <div class="section-header">
                    <h2>Extra-Curricular Activities</h2>
                    <div class="section-divider"></div>
                </div>
                <div class="extra-curricular-grid">
                    ${generateExtraCurricularCards(data.extraCurricular)}
                </div>
            </div>
        </section>` : ''}

        <section id="contact" class="section">
            <div class="section-container">
                <div class="section-header">
                    <h2>Contact Me</h2>
                    <div class="section-divider"></div>
                </div>
                <div class="contact-content">
                    <div class="contact-info">
                        ${generateContactInfo(data.contact)}
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Generate projects
function generateProjectCards(projects) {
    return projects.map(project => `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            ${project.github ? `<a href="${project.github}" class="button primary-button" target="_blank">View on GitHub</a>` : ''}
        </div>
    `).join('');
}

// Generate skills
function generateSkillCards(skills) {
    return skills.map(skill => `
        <div class="skill-card">
            <h3>${skill.category}</h3>
            <p>${skill.skills.join(', ')}</p>
        </div>
    `).join('');
}

// Generate education
function generateEducationCards(education) {
    return education.map(edu => `
        <div class="education-card">
            <h3>${edu.school}</h3>
            <p>${edu.degree} - ${edu.year}</p>
        </div>
    `).join('');
}

// Generate internships
function generateInternshipCards(internships) {
    return internships.map(intern => `
        <div class="internship-card">
            <h3>${intern.company}</h3>
            <p>${intern.role} (${intern.duration})</p>
        </div>
    `).join('');
}

// Generate achievements
function generateAchievementCards(achievements) {
    return achievements.map(achieve => `
        <div class="achievement-card">
            <h3>${achieve.title}</h3>
            <p>${achieve.description}</p>
        </div>
    `).join('');
}

// Generate extra-curricular
function generateExtraCurricularCards(extraCurricular) {
    return extraCurricular.map(activity => `
        <div class="extra-curricular-card">
            <h3>${activity.title}</h3>
            <p>${activity.description}</p>
        </div>
    `).join('');
}

// Generate certifications
function generateCertificationCards(certifications) {
    return certifications.map(cert => `
        <div class="certification-card">
            <h3>${cert.title}</h3>
            <p>${cert.institution} - ${cert.date}</p>
        </div>
    `).join('');
}

// Generate contact information
function generateContactInfo(contact) {
    return `
        ${contact.email ? `
        <div class="contact-card">
            <a href="mailto:${contact.email}" class="contact-item">
                <i class="fas fa-envelope"></i>
                <span>${contact.email}</span>
            </a>
        </div>` : ''}

        ${contact.phone ? `
        <div class="contact-card">
            <a href="tel:${contact.phone}" class="contact-item">
                <i class="fas fa-phone"></i>
                <span>${contact.phone}</span>
            </a>
        </div>` : ''}

        ${contact.linkedin ? `
        <div class="contact-card">
            <a href="${contact.linkedin}" class="contact-item" target="_blank">
                <i class="fab fa-linkedin"></i>
                <span>LinkedIn</span>
            </a>
        </div>` : ''}

        ${contact.github ? `
        <div class="contact-card">
            <a href="${contact.github}" class="contact-item" target="_blank">
                <i class="fab fa-github"></i>
                <span>GitHub</span>
            </a>
        </div>` : ''}
    `;
}

// Download portfolio as an HTML file
function downloadPortfolio() {
    // Get the current HTML content
    const htmlContent = document.documentElement.outerHTML;

    // Fetch the CSS content linked in the <head> (style.css)
    const cssLink = document.querySelector('link[href="style.css"]');
    
    fetch(cssLink.href)
        .then(response => response.text())
        .then(css => {
            // Replace the external CSS link with an inline <style> tag containing the CSS
            const htmlWithCSS = htmlContent.replace(
                '<link rel="stylesheet" href="style.css">',
                `<style>${css}</style>`
            );
            
            // Call the function to download the final HTML content
            downloadFile(htmlWithCSS, 'portfolio.html');
        })
        .catch(error => {
            console.error('Error fetching the CSS file:', error);
        });
}

// Helper function to download files
function downloadFile(content, fileName) {
    const blob = new Blob([content], { type: 'text/html' });
    const url = window.URL.createObjectURL(blob);
    
    // Create a temporary anchor tag for triggering the download
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    
    // Clean up the URL object
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

function generatePortfolio(data) {
    const portfolioHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.fullName} - Portfolio</title>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    </head>
    <body>
        <nav>${generateNav(data)}</nav>

        <section class="hero">
            <div class="hero-content">
                <div class="hero-intro">
                    <span class="greeting">Hello, I'm</span>
                    <h1 class="name">${data.fullName}</h1>
                    <p class="title">${data.title}</p>
                    <div class="hero-buttons">
                        <a href="#contact" class="button primary-button">Contact Me</a>
                        <a href="#projects" class="button secondary-button">View Projects</a>
                    </div>
                </div>
                <div class="hero-image">
                    <div class="hero-shape"></div> <!-- 3D animated circle -->
                </div>
            </div>
        </section>

        ${generateSections(data)}
        <footer class="footer">
            <div class="footer-content">
                <p>&copy; ${new Date().getFullYear()} ${data.fullName}. All rights reserved.</p>
            </div>
        </footer>
    </body>
    </html>`;

    document.body.innerHTML = portfolioHTML;
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp);
