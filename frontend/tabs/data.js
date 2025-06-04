const data = [
    {
        id: "ML-01",
        title: "ML Engineer",
        emoji: "📊",
        description:
            "Responsible for designing, developing, and deploying machine learning models. Works with large datasets and builds scalable data pipelines to support model training and inference.",
        responsibilities: [
            "Build and deploy ML models",
            "Develop and manage data pipelines",
            "Experiment with algorithms and tune hyperparameters",
            "Monitor model performance and retrain as needed"
        ],
        techStacks: [
            "Python",
            "TensorFlow",
            "PyTorch",
            "Scikit-learn",
            "API Frameworks",
            "data pipelines",
            "data streaming (Kafka)",
            "containerization (Docker, Kubernetes)",
            "databases (SQL, NoSQL)",
            "caching (Redis)",
            "ML versioning (MLflow, DVC)",
            "cloud platforms (AWS, GCP, Azure)"
        ],
        entryLevel: false,
        pathToRole: [
            "Start as Data Analyst or Junior Data Scientist",
            "Get familiar with ML frameworks (e.g., scikit-learn, TensorFlow)",
            "Work on end-to-end ML projects",
            "Understand deployment and MLOps tools"
        ]
    },
    {
        id: "SWE-01",
        title: "SWE Engineer",
        emoji: "💻",
        description:
            "Builds robust, scalable, and maintainable software applications. Collaborates across teams to write clean code and optimize application performance.",
        responsibilities: [
            "Develop frontend and/or backend features",
            "Write unit and integration tests",
            "Participate in code reviews",
            "Maintain documentation and follow coding standards"
        ],
        techStacks: [
            "JavaScript",
            "TypeScript",
            "Python",
            "Java",
            "Node.js",
            "React",
            "Angular",
            "RESTful APIs",
            "GraphQL",
            "Git",
            "CI/CD tools",
            "Docker",
            "Kubernetes",
            "SQL/NoSQL databases"
        ],
        entryLevel: true
    },
    {
        id: "AI-01",
        title: "AI Engineer",
        emoji: "🧠",
        description:
            "Develops intelligent systems using artificial intelligence techniques such as deep learning, computer vision, and natural language processing. Works on model integration and deployment.",
        responsibilities: [
            "Design and train deep learning models",
            "Apply computer vision and NLP techniques",
            "Use pre-trained models and fine-tune them",
            "Deploy and scale AI solutions"
        ],
        techStacks: [
            "Python",
            "PyTorch",
            "TensorFlow",
            "Keras",
            "OpenCV",
            "Transformers (Hugging Face)",
            "NLP libraries (spaCy, NLTK)",
            "cloud AI services (AWS SageMaker, Google Vertex AI)",
            "ONNX",
            "CUDA",
            "FastAPI"
        ],
        entryLevel: false,
        pathToRole: [
            "Study ML/AI fundamentals",
            "Take specialized courses in NLP or computer vision",
            "Build AI apps using frameworks like Hugging Face or OpenCV",
            "Gain experience deploying models in production"
        ]
    },
    {
        id: "DE-01",
        title: "Data Engineer",
        emoji: "🛠️",
        description:
            "Designs, builds, and maintains systems for collecting, storing, and analyzing data. Ensures that data is clean, reliable, and available for downstream use.",
        responsibilities: [
            "Develop ETL pipelines",
            "Optimize database queries and storage",
            "Integrate APIs and streaming sources",
            "Ensure data quality and reliability"
        ],
        techStacks: [
            "SQL",
            "Python",
            "Spark",
            "Airflow",
            "Kafka",
            "Snowflake",
            "Redshift",
            "ETL Tools",
            "AWS/GCP Data Services",
            "dbt"
        ],
        entryLevel: false,
        pathToRole: [
            "Start with SQL and basic Python scripting",
            "Learn data modeling and pipelines (ETL/ELT)",
            "Understand cloud-based storage systems",
            "Get experience with tools like Airflow, Kafka"
        ]
    },
    {
        id: "QA-01",
        title: "QA Engineer",
        emoji: "🧪",
        description:
            "Ensures the quality and stability of software products through manual and automated testing. Prevents bugs before release and works closely with developers.",
        responsibilities: [
            "Write and execute test cases",
            "Automate testing workflows",
            "Report and track bugs",
            "Ensure performance and usability standards"
        ],
        techStacks: [
            "Selenium",
            "Cypress",
            "Playwright",
            "Postman",
            "JavaScript",
            "Java",
            "TestRail",
            "Jest",
            "Mocha",
            "CI/CD tools"
        ],
        entryLevel: true
    }
];

export default data;
  