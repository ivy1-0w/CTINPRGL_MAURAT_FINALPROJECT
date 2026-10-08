class Project {

    constructor(title, description, category, icon) {
        this.title = title;
        this.description = description;
        this.category = category;
        this.icon = icon;
    }

    createCard() {

        return `
            <div class="project-card">

                <div class="project-image">
                    <div class="project-icon">
                        ${this.icon}
                    </div>
                </div>

                <h3>${this.title}</h3>

                <p>${this.description}</p>

                <span class="project-category">
                    ${this.category}
                </span>

            </div>
        `;
    }
}


class AcademicProject extends Project {

    constructor(
        title,
        description,
        category,
        icon,
        course
    ) {

        super(
            title,
            description,
            category,
            icon
        );

        this.course = course;
    }

    createCard() {

        return `
            <div class="project-card">

                <div class="project-image">
                    <div class="project-icon">
                        ${this.icon}
                    </div>
                </div>

                <h3>${this.title}</h3>

                <p>${this.description}</p>

                <span class="project-category">
                    ${this.category}
                </span>

                <p>
                    <strong>Course:</strong>
                    ${this.course}
                </p>

            </div>
        `;
    }
}


class Portfolio {

    constructor(projects) {
        this.projects = projects;
    }

    display(containerId) {

        const container =
            document.getElementById(containerId);

        container.innerHTML = "";

        this.projects.forEach((project) => {

            container.innerHTML +=
                project.createCard();

        });
    }
}


class FormValidator {

    constructor(formId, messageId) {

        this.form =
            document.getElementById(formId);

        this.message =
            document.getElementById(messageId);

        this.form.addEventListener(
            "submit",
            (event) => this.validate(event)
        );
    }

    validate(event) {

        event.preventDefault();

        const name =
            document.getElementById("name")
                .value.trim();

        const email =
            document.getElementById("email")
                .value.trim();

        const message =
            document.getElementById("message")
                .value.trim();


        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            this.showMessage(
                "Please complete all fields.",
                "error"
            );

            return;
        }


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            this.showMessage(
                "Please enter a valid email address.",
                "error"
            );

            return;
        }


        if (message.length < 10) {

            this.showMessage(
                "Your message must be at least 10 characters.",
                "error"
            );

            return;
        }


        this.showMessage(
            "Message sent successfully! Thank you.",
            "success"
        );

        this.form.reset();
    }


    showMessage(text, type) {

        this.message.textContent = text;

        this.message.className =
            "form-message " + type;
    }
}


const projects = [

    new AcademicProject(
        "ORALYNK",
        "A web- and mobile-based appointment management and patient adherence prediction system for a dental clinic.",
        "Capstone Proposal",
        "🦷",
        "Information Technology"
    ),

    new AcademicProject(
        "Library Management System",
        "A Java-based project using Stack, Queue, Priority Queue, and Bubble Sort to organize and manage library information.",
        "Data Structures",
        "📚",
        "Data Structures and Algorithms"
    ),

    new AcademicProject(
        "Enterprise Network Configuration",
        "A Cisco Packet Tracer activity involving network device discovery and management using networking concepts.",
        "Networking",
        "🌐",
        "Computer Networking"
    )

];


const portfolio =
    new Portfolio(projects);

portfolio.display(
    "project-container"
);


const contactForm =
    new FormValidator(
        "contact-form",
        "form-message"
    );