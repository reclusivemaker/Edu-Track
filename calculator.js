// Calculate the weighted average, Weighted: Each grade is Multiplied by It's Credits weighted, Formula: Subject grade * Credits / Sum(Credits)

function calculateWeightedAverage(subjectList) {
  if (subjectList.length === 0) return 0;

  const totalWeighted = subjectList.reduce(function (sum, s) {
    return sum + ((s.grade || 0) * s.credits);
  }, 0);

  const totalCredits = subjectList.reduce(function (sum, s) {
    return sum + s.credits;
  }, 0);

  return (totalWeighted / totalCredits).toFixed(2);
}


// Convert percentage to GPA

function calculateGPA(average) {
  const avg = parseFloat(average);
  if (avg >= 90) return 4.0;
  else if (avg >= 85) return 3.7;
  else if (avg >= 80) return 3.3;
  else if (avg >= 75) return 3.0;
  else if (avg >= 70) return 2.0;
  else if (avg >= 60) return 1.0;
  else return 0.0;
}

// Function to render result to DOM
function renderCalculator() {
  const average = calculateWeightedAverage(subjects);
  const gpa = calculateGPA(average);
  const grade = getGradeLetter(parseFloat(average));
  const credits = subjects.reduce((sum, s) => sum + s.credits, 0);

  const avgEl = document.getElementById("avg-display");
  const gpaEl = document.getElementById("gpa-display");
  const grEl = document.getElementById("grade-display");
  const crEl = document.getElementById("credits-display");

  if (avgEl) avgEl.textContent = average + "%";
  if (gpaEl) gpaEl.textContent = gpa.toFixed(1);
  if (grEl) grEl.textContent = grade.letter;
  if (crEl) crEl.textContent = credits;

  const bar = document.getElementById("progress-bar");
  if (bar) {
    setTimeout(function () {
      bar.style.width = average + "%";
    }, 200);
  }

  const tbody = document.getElementById("calculator-body");
  if (tbody) {
    tbody.innerHTML = "";  // Clear old rows
    subjects.forEach(s => {
      const row = document.createElement("tr");
      const sGrade = s.grade || 0;
      row.innerHTML = `
        <td style="padding: 12px;">${s.name}</td>
        <td style="padding: 12px;">${sGrade}%</td>
        <td style="padding: 12px;">${s.credits}</td>
        <td style="padding: 12px;">${(sGrade * s.credits).toFixed(0)}</td>
      `;
      tbody.appendChild(row);
    });
  }
}

document.addEventListener("DOMContentLoaded", renderCalculator);
