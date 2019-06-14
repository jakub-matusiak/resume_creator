const form = document.getElementById("form");

let countEmployment = 1;
let countEducation = 1;
let countSkills = 1;
let countLinks = 1;

form.addEventListener("submit", event => {
    const data = new FormData(event.target);
    const template = document.getElementById("template");

    const personalDetails = [data.get(`job-title`), data.get(`first-name`), data.get(`last-name`), data.get(`email`), data.get(`phone`)];
    const professionalSummary = [data.get(`professional-summary`)];
    const employment = [];
    const education = [];
    const skills = [];
    const links = [];

    event.preventDefault();
    template.textContent = "";
    
    i = 1;

/* Personal Details section start */

    if (personalDetails[1] && personalDetails[2]) {
        const row = document.createElement("div");
        const paragraph = document.createElement("p");
        template.appendChild(row);
        row.classList.add("resume-preview__row");
        paragraph.classList.add("resume-preview__heading--name");
        paragraph.textContent = `${personalDetails[1]} ${personalDetails[2]}`;
        row.appendChild(paragraph);
    }

    if (personalDetails[0]) {
        const row = document.createElement("div");
        const paragraph = document.createElement("p");
        template.appendChild(row);
        row.classList.add("resume-preview__row");
        paragraph.classList.add("resume-preview__heading--job-title");
        paragraph.textContent = personalDetails[0];
        row.appendChild(paragraph);
    }

    if (personalDetails[3]) {
        const row = document.createElement("div");
        const cap = document.createElement("div");
        const desc = document.createElement("div");
        template.appendChild(row);
        row.classList.add("resume-preview__row");
        cap.classList.add("resume-preview__cap");
        cap.textContent = "E-mail:";
        desc.classList.add("resume-preview__desc");
        desc.textContent = personalDetails[3];
        row.appendChild(cap);
        row.appendChild(desc);
    }

    if (personalDetails[4]) {
        const row = document.createElement("div");
        const cap = document.createElement("div");
        const desc = document.createElement("div");
        template.appendChild(row);
        row.classList.add("resume-preview__row");
        cap.classList.add("resume-preview__cap");
        cap.textContent = "Phone:";
        desc.classList.add("resume-preview__desc");
        desc.textContent = personalDetails[4];
        row.appendChild(cap);
        row.appendChild(desc);
    }

/* Personal Details section end */

/* Professional Summary section start */

    if (professionalSummary[0]) {
        const row = document.createElement("div");
        const cap = document.createElement("div");
        const desc = document.createElement("div");
        template.appendChild(row);
        row.classList.add("resume-preview__row");
        cap.classList.add("resume-preview__cap");
        cap.textContent = "Professional Summary:";
        desc.classList.add("resume-preview__desc");
        desc.textContent = professionalSummary[0];
        row.appendChild(cap);
        row.appendChild(desc);
    }

/* Professional Summary section end */

/* Employment section start */

    for (let i = 1; i <= countEmployment; i++) {
        employment.push(data.get(`workplace-${i}`), data.get(`employer-${i}`), data.get(`job-start-${i}`), data.get(`job-end-${i}`), data.get(`job-city-${i}`), data.get(`job-description-${i}`));
    }

    if (employment[0] && employment[1] && employment[2] && employment[3] && employment[4] && employment[5]) {
        for (let i = 0; i < employment.length; i += 6) {
            const row = document.createElement("div");
            const cap = document.createElement("div");
            const desc = document.createElement("div");
            const heading = document.createElement("div");
            if (i == 0) {
                template.appendChild(heading);
                heading.classList.add("resume-preview__heading");
                heading.textContent = "Employment history:";
            }
            template.appendChild(row);
            row.classList.add("resume-preview__row");
            cap.classList.add("resume-preview__cap");
            cap.textContent = `${employment[i+2]} - ${employment[i+3]}`;
            desc.classList.add("resume-preview__desc");
            desc.textContent = `${employment[i]} at ${employment[i+1]}, ${employment[i+4]} - ${employment[i+5]}`;
            row.appendChild(cap);
            row.appendChild(desc);
        }
    }

/* Employment section end */

/* Education section start */

    for (let i = 1; i <= countEducation; i++) {
        education.push(data.get(`school-${i}`), data.get(`school-start-${i}`), data.get(`school-end-${i}`), data.get(`school-city-${i}`), data.get(`school-description-${i}`));
    }

    if (education[0] && education[1] && education[2] && education[3] && education[4]) {
        for (let i = 0; i < education.length; i += 5) {
            const row = document.createElement("div");
            const cap = document.createElement("div");
            const desc = document.createElement("div");
            const heading = document.createElement("div");
            if (i == 0) {
                template.appendChild(heading);
                heading.classList.add("resume-preview__heading");
                heading.textContent = "Education:";
            }
            template.appendChild(row);
            row.classList.add("resume-preview__row");
            cap.classList.add("resume-preview__cap");
            cap.textContent = `${education[i+1]} - ${education[i+2]}`;
            desc.classList.add("resume-preview__desc");
            desc.textContent = `${education[i]}, ${education[i+3]} - ${education[i+4]}`;
            row.appendChild(cap);
            row.appendChild(desc);
        }
    }

/* Education section end */

/* Skills section start */

    for (let i = 1; i <= countSkills; i++) {
        skills.push(data.get(`skill-${i}`), data.get(`skill-description-${i}`));
    }

    if (skills[0] && skills[1]) {
        for (let i = 0; i < skills.length; i += 2) {
            const row = document.createElement("div");
            const cap = document.createElement("div");
            const desc = document.createElement("div");
            const heading = document.createElement("div");
            if (i == 0) {
                template.appendChild(heading);
                heading.classList.add("resume-preview__heading");
                heading.textContent = "Skills:";
            }
            template.appendChild(row);
            row.classList.add("resume-preview__row");
            cap.classList.add("resume-preview__cap");
            cap.textContent = skills[i];
            desc.classList.add("resume-preview__desc");
            desc.textContent = skills[i+1];
            row.appendChild(cap);
            row.appendChild(desc);
        }
    }

/* Skills section end */

/* Links section start */

    for (let i = 1; i <= countLinks; i++) {
        links.push(data.get(`link-label-${i}`), data.get(`link-${i}`));
    }    

    if (links[0] && links[1]) {
        for (let i = 0; i < links.length; i += 2) {
            const row = document.createElement("div");
            const cap = document.createElement("div");
            const desc = document.createElement("div");
            const heading = document.createElement("div");
            if (i == 0) {
                template.appendChild(heading);
                heading.classList.add("resume-preview__heading");
                heading.textContent = "Links:";
            }
            template.appendChild(row);
            row.classList.add("resume-preview__row");
            cap.classList.add("resume-preview__cap");
            cap.textContent = links[i];
            desc.classList.add("resume-preview__desc");
            desc.textContent = links[i+1];
            row.appendChild(cap);
            row.appendChild(desc);
        }
    }
    
/* Links section end */

});

/* Employment buttons start */

const employmentFieldset = document.getElementById("employment");
const addEmploymentBtn = document.getElementById("add-employment");
const removeEmploymentBtn = document.getElementById("remove-employment");

addEmploymentBtn.addEventListener("click", () => {
    const add = [];
    
    countEmployment++;

    for (let i = 0; i <= 15; i += 3) {
        for (let j = 0; j <= 2; j++) {
            add[j] = document.createElement("div");
            add[j].classList.add("resume-creator__row");
            add[j].classList.add(`employment-${countEmployment}`);
        }
        add[i+3] = document.createElement("label");
        add[i+4] = document.createElement("span");
        if (i <= 12) {
            add[i+5] = document.createElement("input");
        } else {
            add[i+5] = document.createElement("textarea");
        }
        add[i+3].classList.add("resume-creator__label");
        add[i+4].classList.add("resume-creator__span");
        if (i <= 12) {
            add[i+5].classList.add("resume-creator__input");
        } else {
            add[i+5].classList.add("resume-creator__textarea");
        }
    }

    employmentFieldset.appendChild(add[0]);
    add[0].appendChild(add[3]);
    add[3].appendChild(add[4]);
    add[3].appendChild(add[5]);
    add[4].textContent = "Workplace:";
    add[5].setAttribute(`name`, `workplace-${countEmployment}`);
    add[5].setAttribute(`type`, `text`);
    add[0].appendChild(add[6]);
    add[6].appendChild(add[7]);
    add[6].appendChild(add[8]);
    add[7].textContent = "Employer:";
    add[8].setAttribute(`name`, `employer-${countEmployment}`);
    add[8].setAttribute(`type`, `text`);

    employmentFieldset.appendChild(add[1]);
    add[1].appendChild(add[9]);
    add[9].appendChild(add[10]);
    add[9].appendChild(add[11]);
    add[10].textContent = "Start date:";
    add[11].setAttribute(`name`, `job-start-${countEmployment}`);
    add[11].setAttribute(`type`, `date`);
    add[1].appendChild(add[12]);
    add[12].appendChild(add[13]);
    add[12].appendChild(add[14]);
    add[13].textContent = "End date:";
    add[14].setAttribute(`name`, `job-end-${countEmployment}`);
    add[14].setAttribute(`type`, `date`);

    employmentFieldset.appendChild(add[2]);
    add[2].appendChild(add[15]);
    add[15].appendChild(add[16]);
    add[15].appendChild(add[17]);
    add[16].textContent = "City:";
    add[17].setAttribute(`name`, `job-city-${countEmployment}`);
    add[17].setAttribute(`type`, `text`);
    add[2].appendChild(add[18]);
    add[18].appendChild(add[19]);
    add[18].appendChild(add[20]);
    add[19].textContent = "Description:";
    add[20].setAttribute(`name`, `job-description-${countEmployment}`);
});

removeEmploymentBtn.addEventListener("click", () => {
    const row = employmentFieldset.querySelectorAll(`.employment-${countEmployment}`);

    if (countEmployment > 1) {
        employmentFieldset.removeChild(row[0]);
        employmentFieldset.removeChild(row[1]);
        employmentFieldset.removeChild(row[2]);
        countEmployment--;
    }
});

/* Employment buttons end */

/* Education buttons start */

const educationFieldset = document.getElementById("education");
const addEducationBtn = document.getElementById("add-education");
const removeEducationBtn = document.getElementById("remove-education");

addEducationBtn.addEventListener("click", () => {
    const add = [];
    
    countEducation++;

    for (let i = 0; i <= 12; i += 3) {
        for (let j = 0; j <= 2; j++) {
            add[j] = document.createElement("div");
            add[j].classList.add("resume-creator__row");
            add[j].classList.add(`education-${countEducation}`);
        }
        add[i+3] = document.createElement("label");
        add[i+4] = document.createElement("span");
        if (i <= 9) {
            add[i+5] = document.createElement("input");
        } else {
            add[i+5] = document.createElement("textarea");
        }
        add[i+3].classList.add("resume-creator__label");
        add[i+4].classList.add("resume-creator__span");
        if (i <= 9) {
            add[i+5].classList.add("resume-creator__input");
        } else {
            add[i+5].classList.add("resume-creator__textarea");
        }
    }

    educationFieldset.appendChild(add[0]);
    add[0].appendChild(add[3]);
    add[3].appendChild(add[4]);
    add[3].appendChild(add[5]);
    add[3].classList.add("resume-creator__label--oneline");
    add[4].textContent = "School:";
    add[5].setAttribute(`name`, `school-${countEducation}`);
    add[5].setAttribute(`type`, `text`);

    educationFieldset.appendChild(add[1]);
    add[1].appendChild(add[6]);
    add[6].appendChild(add[7]);
    add[6].appendChild(add[8]);
    add[7].textContent = "Start date:";
    add[8].setAttribute(`name`, `school-start-${countEducation}`);
    add[8].setAttribute(`type`, `date`);
    add[1].appendChild(add[9]);
    add[9].appendChild(add[10]);
    add[9].appendChild(add[11]);
    add[10].textContent = "End date:";
    add[11].setAttribute(`name`, `school-end-${countEducation}`);
    add[11].setAttribute(`type`, `date`);

    educationFieldset.appendChild(add[2]);
    add[2].appendChild(add[12]);
    add[12].appendChild(add[13]);
    add[12].appendChild(add[14]);
    add[13].textContent = "City:";
    add[14].setAttribute(`name`, `school-city-${countEducation}`);
    add[14].setAttribute(`type`, `text`);
    add[2].appendChild(add[15]);
    add[15].appendChild(add[16]);
    add[15].appendChild(add[17]);
    add[16].textContent = "Description:";
    add[17].setAttribute(`name`, `school-description-${countEducation}`);
});

removeEducationBtn.addEventListener("click", () => {
    const row = educationFieldset.querySelectorAll(`.education-${countEducation}`);

    if (countEducation > 1) {
        educationFieldset.removeChild(row[0]);
        educationFieldset.removeChild(row[1]);
        educationFieldset.removeChild(row[2]);
        countEducation--;
    }
});

/* Education buttons end */

/* Skills buttons start */

const skillsFieldset = document.getElementById("skills");
const addSkillBtn = document.getElementById("add-skill");
const removeSkillBtn = document.getElementById("remove-skill");

addSkillBtn.addEventListener("click", () => {
    const row = document.createElement("div");
    const add = [];
    
    countSkills++;

    for (let i = 0; i <= 3; i += 3) {
        add[i] = document.createElement("label");
        add[i+1] = document.createElement("span");
        if (i == 0) {
            add[i+2] = document.createElement("input");
        } else {
            add[i+2] = document.createElement("textarea");
        }
        add[i].classList.add("resume-creator__label");
        add[i+1].classList.add("resume-creator__span");
        if (i == 0) {
            add[i+2].classList.add("resume-creator__input");
        } else {
            add[i+2].classList.add("resume-creator__textarea");
        }
    }

    row.classList.add("resume-creator__row");
    row.classList.add(`skills-${countSkills}`);
    add[0].appendChild(add[1]);
    add[0].appendChild(add[2]);
    add[3].appendChild(add[4]);
    add[3].appendChild(add[5]);
    
    add[1].textContent = "Skill:";
    add[2].setAttribute(`name`, `skill-${countSkills}`);
    add[2].setAttribute(`type`, `text`);
    add[4].textContent = "Description:";
    add[5].setAttribute(`name`, `skill-description-${countSkills}`);

    skillsFieldset.appendChild(row);
    row.appendChild(add[0]);
    row.appendChild(add[3]);
});

removeSkillBtn.addEventListener("click", () => {
    const row = skillsFieldset.querySelector(`.skills-${countSkills}`);

    if (countSkills > 1) {
        skillsFieldset.removeChild(row);
        countSkills--;
    }
});

/* Skills buttons end */

/* Links buttons start */

const linksFieldset = document.getElementById("links");
const addLinkBtn = document.getElementById("add-link");
const removeLinkBtn = document.getElementById("remove-link");

addLinkBtn.addEventListener("click", () => {
    const row = document.createElement("div");
    const add = [];
    
    countLinks++;

    for (let i = 0; i <= 3; i += 3) {
        add[i] = document.createElement("label");
        add[i+1] = document.createElement("span");
        add[i+2] = document.createElement("input");
        add[i].classList.add("resume-creator__label");
        add[i+1].classList.add("resume-creator__span");
        add[i+2].classList.add("resume-creator__input");
    }

    row.classList.add("resume-creator__row");
    row.classList.add(`links-${countLinks}`);
    add[0].appendChild(add[1]);
    add[0].appendChild(add[2]);
    add[3].appendChild(add[4]);
    add[3].appendChild(add[5]);
    
    add[1].textContent = "Label:";
    add[2].setAttribute(`name`, `link-label-${countLinks}`);
    add[2].setAttribute(`type`, `text`);
    add[4].textContent = "Link:";
    add[5].setAttribute(`name`, `link-${countLinks}`);
    add[5].setAttribute(`type`, `text`);

    linksFieldset.appendChild(row);
    row.appendChild(add[0]);
    row.appendChild(add[3]);
});

removeLinkBtn.addEventListener("click", () => {
    const row = linksFieldset.querySelector(`.links-${countLinks}`);

    if (countLinks > 1) {
        linksFieldset.removeChild(row);
        countLinks--;
    }
});

/* Links buttons end */

/* Printing start */

const printBtn = document.getElementById("print");

printBtn.addEventListener("click", () => {
    window.print();
});

/* Printing end */