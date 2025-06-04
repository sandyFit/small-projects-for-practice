import data from './data.js';

const tabs = document.querySelectorAll('[data-role]');
const roleDescription = document.querySelector('#roleDescription');
const responsibilitiesList = document.querySelector('#responsabilitiesList');
const techsList = document.querySelector('#techsList');
const entryLevelQ = document.querySelector('#entryLevel');

tabs.forEach(tab => {
    const roleId = tab.dataset.role;
    const roleData = data.find(role => role.id === roleId);
    if (roleData) {
        tab.textContent = `${roleData.emoji} ${roleData.title}`; 
    }

    tab.addEventListener('click', () => {
        const roleId = tab.dataset.role;
        const roleData = data.find(role => role.id === roleId);
        renderContent(roleData);
        isEntryLevel(roleData);
        setActiveTab(tab);
    });
});

function renderContent(role) {
    
    roleDescription.textContent = role.description;
    responsibilitiesList.innerHTML = '';

    role.responsibilities.forEach(resp => {
        const li = document.createElement('li');
        li.textContent = resp;
        responsibilitiesList.appendChild(li);

    })

    // Clear old tech stack list
    techsList.innerHTML = '';

    // Render new tech stack items
    role.techStacks.forEach(tech => {
        const li = document.createElement('li');
        li.classList.add('list__item');
        li.textContent = tech;
        techsList.appendChild(li);
    });
}

function isEntryLevel(role) {
    entryLevelQ.innerHTML = ''; // clear previous content
    if (!role.entryLevel) {
        const intro = document.createElement('p');
        intro.textContent = "No, you need to follow this roadmap 👇";

        const roadmapList = document.createElement('ul');

        role.pathToRole.forEach(path => {
            const li = document.createElement('li');
            li.textContent = path;
            roadmapList.appendChild(li);
        });

        entryLevelQ.appendChild(intro);
        entryLevelQ.appendChild(roadmapList);
    } else {
        entryLevelQ.textContent = "Yes!!! 🎉";
    }
}


function setActiveTab(activeTab) {
    tabs.forEach(tab => tab.classList.remove('active'));
    activeTab.classList.add('active');
}

// 🔥 Set default to ML Engineer on page load
const defaultRole = data.find(role => role.id === 'ML-01');
const defaultTab = document.querySelector('[data-role="ML-01"]');
renderContent(defaultRole);
isEntryLevel(defaultRole);
setActiveTab(defaultTab);
