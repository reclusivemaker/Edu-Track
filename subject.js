// Render all Subject Cards Into Subject Container
function renderSubject(list) {
    const subjectContainer = document.getElementById("subject-container");
    subjectContainer.innerHTML = "";   //Clear All Existing Cards

    if (list.length === 0) {
        subjectContainer.innerHTML = `
            <p class="empty-msg">
                  No Subject Found!!!!
            </p>
        `
        return;
    }


    list.forEach(function (subject) {
        const getGradeInfo = getGradeLetter(subject.grade);   //From app.js
        const subjectCard = document.createElement("article");
        subjectCard.className = "subject-card";
        subjectCard.classList.add("subject-card");
        subjectCard.innerHTML = `
            <div class="card-header">
                <h3>${subject.name}</h3>
                <span class="badge">${subject.code}</span>
            </div>
            <div class="card-body">
                <div class="grade-badge grade-${getGradeInfo.css}">${getGradeInfo.grade}% - ${getGradeInfo.letter}</div>
                <p class="credits">Credits:${subject.credits}</p>
            </div>
        `;
        subjectContainer.appendChild(subjectCard);
    })
}

document.addEventListener("DOMContentLoaded", function () {
    renderSubject(subjects);
});