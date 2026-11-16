/* Edit this file to personalize the portfolio. Keep links blank to hide them. */
window.PORTFOLIO = {
  name: "Nakul",
  role: "STUDENT DEVELOPER & CREATIVE MAKER",
  location: "Your city",
  openTo: "Learning and new projects",
  bio: "I’m a student who enjoys building with code and creating by hand. I make small web projects, explore ideas like a personal Jarvis assistant, and bring the same curiosity to art and craft.",
  aboutLead: "I like turning ideas into things people can try, whether that means writing code or making something by hand.",
  aboutDetail: "I have experience with HTML, CSS, JavaScript, and Python. My projects include games, a calculator, an Amazon-inspired storefront, a portfolio, and a personal Jarvis assistant. I’m always learning, experimenting, and looking for new ideas to build.",
  contactCopy: "Have an idea, question, or project to share? I’d love to hear from you.",
  email: "hello@example.com",
  socials: [
    { label: "GitHub", url: "" },
    { label: "LinkedIn", url: "" },
    { label: "Instagram", url: "" }
  ],
  skills: [
    { icon: "〈〉", name: "HTML & CSS", detail: "Web page structure and styling" },
    { icon: "JS", name: "JavaScript", detail: "Interactive web experiences" },
    { icon: "Py", name: "Python", detail: "Programming and project building" },
    { icon: "✳", name: "Art & Craft", detail: "Creative ideas made by hand" }
  ],
  projects: [
    { name: "Tic Tac Toe", description: "A classic two-player game built as a coding project.", tag: "GAME / JAVASCRIPT", url: "" },
    { name: "Stone Paper Game", description: "A digital take on the familiar hand game.", tag: "GAME / INTERACTIVE", url: "" },
    { name: "Amazon Clone", description: "A storefront interface inspired by a popular online shopping experience.", tag: "WEB / FRONTEND", url: "" },
    { name: "Calculator", description: "A simple calculator for everyday arithmetic.", tag: "WEB / JAVASCRIPT", url: "" },
    { name: "Personal Portfolio", description: "A home for my projects, interests, and creative work.", tag: "WEB / PERSONAL", url: "" },
    { name: "Personal Jarvis", description: "A personal assistant project inspired by helpful voice-driven technology.", tag: "PYTHON / ASSISTANT", url: "" }
  ]
};

(() => {
  const data = window.PORTFOLIO;
  const setText = (selector, value) => document.querySelectorAll(selector).forEach(el => el.textContent = value);
  document.title = `${data.name} — Portfolio`;
  document.querySelector('meta[name="description"]').content = `A personal portfolio by ${data.name}.`;
  setText('[data-name]', data.name);
  setText('[data-role]', data.role);
  setText('[data-location]', data.location);
  setText('[data-open]', data.openTo);
  setText('[data-bio]', data.bio);
  setText('[data-about-lead]', data.aboutLead);
  setText('[data-about-detail]', data.aboutDetail);
  setText('[data-contact-copy]', data.contactCopy);
  setText('[data-year]', new Date().getFullYear());
  const emailLink = document.getElementById('email-link');
  if (data.email && data.email !== 'hello@example.com') emailLink.href = `mailto:${data.email}`;
  else emailLink.href = '#contact';
  document.getElementById('skills-list').innerHTML = data.skills.map(skill => `<article class="skill-card"><span class="skill-icon" aria-hidden="true">${skill.icon}</span><h3>${skill.name}</h3><p>${skill.detail}</p></article>`).join('');
  document.getElementById('work-count').textContent = `${String(data.projects.length).padStart(2, '0')} PROJECTS`;
  document.getElementById('project-list').innerHTML = data.projects.map((project, index) => {
    const card = `<span class="project-number">${String(index + 1).padStart(2, '0')}</span><div><h3>${project.name}</h3><span class="project-tag">${project.tag}</span></div><p>${project.description}</p><span class="project-arrow" aria-hidden="true">↗</span>`;
    return project.url ? `<a class="project-card" href="${project.url}" target="_blank" rel="noreferrer">${card}</a>` : `<article class="project-card">${card}</article>`;
  }).join('');
  document.getElementById('social-links').innerHTML = data.socials.filter(item => item.url).map(item => `<a href="${item.url}" target="_blank" rel="noreferrer">${item.label} ↗</a>`).join('');
})();
