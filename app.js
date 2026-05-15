
// Utilities - get time based greeting

function getGreeting() {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) {
        return "Good Morning";
    } else if (hour >= 12 && hour < 18) {
        return "Good Afternoon";
    } else {
        return "Good Evening";
    }
}
// console.log(getGreeting());



// Utilities convert numeric grade to letter grade

function getGradeLetter(grade) {
    if (grade >= 90) {
        return { letter: "A", css: "grade-a" };
    } else if (grade >= 80) {
        return { letter: "B", css: "grade-b" };
    } else if (grade >= 70) {
        return { letter: "C", css: "grade-c" };
    } else if (grade >= 60) {
        return { letter: "D", css: "grade-d" };
    } else {
        return { letter: "F", css: "grade-f" };
    }
}

// Student data Object

const student = {
    name:"student",
    class: "Level 3 Software Development",
    year: 2026
}


// Updating The DOM's With Student

function initHomePage() {
    // Update name In Hero Page
    const nameEl = document.getElementById("student-name")
    if (nameEl) {
        nameEl.textContent = `${student.name}`;
    }

    // Update greeting If Element exist
    const greetEl = document.getElementById("greeting");
    if (greetEl) {
        greetEl.textContent = `${getGreeting()}, ${student.name}!`;
    }

}

document.addEventListener("DOMContentLoaded", initHomePage);

// Methods

// Regular function
function greet() {
    console.log("Hello");
}

// Method — function inside an object
const person = {
    name: "Ketty",
    greet: function () {
        console.log("Hello, I'm " + this.name);
    }
};

person.greet();  // "Hello, I'm Ketty"