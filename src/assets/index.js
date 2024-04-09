import airflowProject from "../assets/projects/airflow.jpg";
import demandForecasting from "../assets/projects/demand_forecasting.jpg";
import flightDelay from "../assets/projects/flightDelay.jpg";
import snowflakeETL from "../assets/projects/Snowflake_ETL.jpg";
// import personalIncomeTracker from "../assets/projects/personalTrackerIncomeExpense.jpg";
import personalIncomeTracker from "../assets/IncomeExpenseTracker.jpg";

// import iulogo from "../assets/IU-logo.png";
import iulogo from "../assets/IndianaUniversity_logo.jpg";
import cicplogo from "../assets/CICP.png";
import accenturelogo from "../assets/accenture.png";

import dataAnalyst from "../assets/data-analyst.png";
import dataEngineer from "../assets/data-engineer.png";
import dataScientist from "../assets/data-scientist.png";

import airflow from "../assets/tech/airflow.png";
import python from "../assets/tech/python.png";
import r from "../assets/tech/r.png";
import sql from "../assets/tech/sql.png";
import postgres from "../assets/tech/postgres.png";
import mongodb from "../assets/tech/mongodb.png";
import gcp from "../assets/tech/gcp.png";
import aws from "../assets/tech/aws.png";
import ibm from "../assets/tech/IBM.png";
import git from "../assets/tech/git.png";
import snowflake from "../assets/tech/snowflake.png";
import docker from "../assets/tech/docker.png";
import neo4j from "../assets/tech/neo4j.png";
import tableau from "../assets/tech/tableau.png";
import powerbi from "../assets/tech/power-bi.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Engineer",
    // icon: mobile,
  },
  {
    title: "Data Scientist",
    // icon: backend1,
  },
  {
    title: "Data Analyst",
    // icon: web,
  },
  {
    title: "Database Administrator",
    // icon: creator,
  },
  {
    title: "Business Intelligence Analyst",
    // icon: creator,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "R",
    icon: r,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "GCP",
    icon: gcp,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Postgres",
    icon: postgres,
  },
  {
    name: "Neo4j",
    icon: neo4j,
  },
  {
    name: "IBM DataStage",
    icon: ibm,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Airflow",
    icon: airflow,
  },
  {
    name: "Snowflake",
    icon: snowflake,
  },
  {
    name: "Tableau",
    icon: tableau,
  },
  {
    name: "PowerBI",
    icon: powerbi,
  },
];

const experiences = [
  {
    title: "Data Analyst",
    company_name: "Central Indiana Corporate Partnership",
    icon: cicplogo,
    iconBg: "#ffffff",
    date: "Aug 2023 - Dec 2023",
    points: [
      " Integrated and evaluated large complex datasets from disparate data sources, to perform data analysis on Indiana state’s clinical trials utilizing Python, Tableau and Plotly.",
      "Conducted data mapping and feature engineering, uncovering a notable gap in urban-rural participation and its corresponding funder types within the healthcare sector. Conveyed complex analytical findings to key stakeholders, contributing to the enhancement of regional distribution strategies, as recommended to the commissioner.",
    ],
  },
  {
    title: "Research Assistant",
    company_name: "Indiana University Bloomington",
    icon: iulogo,
    iconBg: "#9242d8",
    date: "Aug 2023 - Dec 2023",
    points: [
      " Leveraged Python and Cypher query language to conduct EDA on 5M IRS tax records (Forms 990/990PF),generating Neo4j network graphs for grantees and foundations, revealing intricate funding networks in philanthropy.",
      " Built community detection and recommender models that can identify optimal funding opportunities for 40k+ foundations and high probability grant-seeking opportunities for 150k+ grantees.",
    ],
  },
  {
    title: "Data Engineer Associate",
    company_name: "Accenture",
    icon: accenturelogo,
    iconBg: "#fcfcfc",
    date: "Jan 2021 - Jul 2022",
    points: [
      "Architected scalable data pipelines workflows in DataStage to automate the ingestion of 10GB+ data from OLTP system into data marts, resulting in a significant reduction in manual processing time.",
      "Achieved performance optimization of 60% on the pipeline by leveraging parallel ingestion of data and reduced query execution time by 40% using partitioning.",
      "Performed root cause analysis to mitigate discrepancies between the Master Data Repository and system dashboard using SQL, bolstering data accuracy by 25% for a utility services client by working in an agile delivery.",
      "Engaged in stakeholder meetings to manage business requirements in the Scrum process by using Azure DevOps, collaborated with five cross-functional teams to conduct data analysis for delivering reporting dashboards.",
      // "Streamlined quality control measures through data validations in Python to ensure 99% data completeness",
    ],
  },
];

const academia = [
  {
    title: "Graduate Teaching Assistant - Big Data and Cloud",
    company_name: "Indiana University Bloomington",
    icon: iulogo,
    iconBg: "#fcfcfc",
    date: "Aug 2023 - Present",
    points: [
      " Curriculum Development: Collaborated with the professor to design a robust Big Data and Cloud Computing curriculum tailored to meet the needs of a 150-student section. Incorporated hands-on labs, projects, and lectures to provide a holistic learning experience. Leveraged expertise in NoSQL, GCP, distributed systems, and data pipelines to ensure students gain practical skills relevant to industry demands.",
      "Assessment and Feedback: Evaluated student performance through graded discussions, assignments, and projects, offering constructive feedback to enhance learning outcomes. By providing detailed assessments, ensured students understand their strengths and areas for improvement, fostering a culture of continuous learning and growth.",
      "Student Support: Conducted office hours to address student queries and troubleshoot issues, offering personalized assistance to enhance comprehension and application of course material. By fostering a supportive learning environment, empowered students to overcome challenges and succeed in mastering Big Data and Cloud Computing concepts.",
    ],
  },
  {
    title: "Graduate Teaching Assistant - Applied Machine Learning",
    company_name: "Indiana University Bloomington",
    icon: iulogo,
    iconBg: "#9242d8",
    date: "Aug 2023 - Dec 2023",
    points: [
      " Facilitating Learning: Engage students in comprehensive discussions on model evaluation metrics, NLP, and ML algorithms, assisting them in grasping the intricacies of selecting appropriate metrics and models tailored to their tasks. Encouraging critical thinking and understanding of trade-offs inherent in machine learning decisions.",
      " Assessment and Feedback: Responsible for grading assignments and projects, offering constructive feedback to students. This ensures students not only complete tasks but also comprehend the underlying concepts, fostering a deeper understanding of applied machine learning principles.",
      "Skill Enhancement: Through Python and deep learning, empower students with practical skills essential for real-world applications. Encourage experimentation and exploration, nurturing a mindset geared towards continual improvement and innovation in the field of machine learning.",
    ],
  },
];

const expertise = [
  {
    name: "Data Engineering",
    icon: dataEngineer,
    description:
      "As a data engineer, I've made significant impact in optimizing data infrastructure and ensuring seamless data flow using tools like IBM DataStage for ETL architecture, resulting in an 80% reduction in manual workload. Leveraging cloud services such as GCP, AWS, and Azure, I orchestrated Airflow DAGs and automated ETL pipelines using Docker, enabling efficient task monitoring and management at scale. By implementing PySpark for big data processing, I've ensured scalability and performance in handling large volumes of data. Additionally, my expertise in database management across platforms including Microsoft SQL Server, Oracle Database, PostgreSQL, NoSQL databases like MongoDB, and Neo4j Graph Database has led to optimal data storage and retrieval mechanisms. Through strategic partitioning and parallel ingestion techniques, I've optimized data processing performance, reducing query execution time by 40% and boosting accuracy by 70%. My collaborative development approach, utilizing tools like Azure Boards and ServiceNow for tracking work items, has fostered transparency and accountability within cross-functional teams, ensuring successful project outcomes.",
  },
  {
    name: "Data Analyst",
    icon: dataAnalyst,
    description:
      "As a data analyst, I've leveraged a diverse array of tools to drive impactful insights and decision-making processes. Utilizing Python for data manipulation, statistical analysis, and exploratory data analysis (EDA), I've uncovered actionable insights from large, complex datasets. Employing Tableau and Power BI for interactive dashboard creation, I've effectively communicated analytical findings to stakeholders. Additionally, my proficiency in SQL and data warehousing tools such as Snowflake and BigQuery has facilitated efficient data transformation and modeling for analytics consumption, enabling key insights in areas like VR gaming data and YouTube video analytics. Overall, my expertise in Python, Tableau, SQL and Power BI, BigQuery and Snowflake has enabled me to drive impactful insights and decision-making processes across diverse domains.",
  },
  {
    name: "Data Scientist",
    icon: dataScientist,
    description:
      "As a data scientist, I've utilized Python and libraries such as numpy, pandas, scikit-learn, TensorFlow and NLP to develop advanced machine learning models across diverse domains. For instance, I've engineered demand forecasting models in the supply chain, predicting flight delays in transportation using PySpark ML pipelines, and developed predictive models for customer churn in telecom. Additionally, I led a project in hospitality management, predicting room reservations within a hotel booking system. Furthermore, I've worked on object classification using Convolutional Neural Networks (CNN), aiming to correctly identify the category of each image among 100 different types. The main objective of this project was to improve the accuracy of classifying objects based on their respective categories. These projects showcase my ability to deliver impactful insights and solutions tailored to specific business needs, driving operational efficiency, revenue growth, and customer satisfaction. Moreover, my experience as a teaching assistant for an applied machine learning course has further deepened my understanding of machine learning concepts and methodologies.",
  },
];
const projects = [
  {
    name: "ETL Automation in the Retail Analytics Domain",
    description:
      "Orchestrated Apache Airflow DAG to ingest raw retail data of over 5M+ rows into a star schema data model in BigQuery, leveraging Docker containerization, enforcing data quality with integrated Soda and Astro CLI.Built reporting models on top of fact and dimension tables with DBT on Airflow to facilitate efficient querying, providing a structured and optimized layer for business intelligence tools. Dockerized and scheduled DAG to manage end-to-end data tasks by incorporating CI/CD processes.",
    tags: [
      {
        name: "airflow",
        color: "blue-text-gradient",
      },
      {
        name: "bigquery",
        color: "green-text-gradient",
      },
      {
        name: "docker",
        color: "white-text-gradient",
      },
      {
        name: "dbt",
        color: "orange-text-gradient",
      },
      {
        name: "python",
        color: "orange-text-gradient",
      },
    ],
    image: airflowProject,
    source_code_link:
      "https://github.com/kashmira92/ETL-Automation-using-Airflow",
  },
  {
    name: " Demand Forecasting and Optimization in the Supply Chain Domain",
    description:
      " Engineered 200+ features for store item’s sales forecast using LightGBM model, incorporating lagged variables, moving averages, and similarity metrics derived from T-test to compare sales between different stores. Optimized LGBM hyperparameters with Randomized Search CV, fine-tuned using early stopping, and reduced feature set to 89 variables, achieving a 12% error rate as measured by SMAPE",
    tags: [
      {
        name: "statistical analysis",
        color: "blue-text-gradient",
      },
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "machine learning",
        color: "white-text-gradient",
      },
    ],
    image: demandForecasting,
    source_code_link:
      "https://github.com/kashmira92/Demand-Forecasting-and-Optimization-in-the-Supply-Chain-Domain",
  },
  {
    name: "Predictive Modeling for anticipating Flight Delays",
    description:
      "Built PySpark Machine Learning ETL pipeline on cloud based infrastructure- JetStream and Docker for fast computation on 4M+ flight records and 60 features. Utilized Pandas, Python and NumPy by accurately identifying correlations between factors impacting flight delays and applied optimized Random Forest Classifier using Grid-Search CV with accuracy rate of 85% and presented the results with statistical graphs and data visualization plots.",
    tags: [
      {
        name: "PySpark",
        color: "blue-text-gradient",
      },
      {
        name: "JetStream2",
        color: "orange-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
      {
        name: "EDA",
        color: "pink-text-gradient",
      },
    ],
    image: flightDelay,
    source_code_link:
      "https://github.com/kashmira92/Predictive_Analysis_for_forecasting_Flight_Delays",
  },
  {
    name: "Data Transformation and Enhancement using Snowflake",
    description:
      "Consolidated semi-structured user data from AWS S3, extracting time zone information using APIs. Performed data transformations using MERGE, JOINS, and CTAS for advanced analytics readiness. Implemented automated data workflows using Snowflake TASKS, STREAMS, and PIPES. Curated and optimized an analytics dashboard to capture KPIs related to usage patterns, engagement levels, and churn risk factors.",
    tags: [
      {
        name: "Snowflake",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "white-text-gradient",
      },
      {
        name: "API",
        color: "orange-text-gradient",
      },
      {
        name: "Python",
        color: "orange-text-gradient",
      },
    ],
    image: snowflakeETL,
    source_code_link:
      "https://github.com/kashmira92/Data_Transformation_and_Analytics_Enhancement_using_Snowflake",
  },
  {
    name: "Personal Income and Expense Tracker Application",
    description:
      "Implemented a personal income and expense tracker application by leveraging MongoDB as the backend database, resulting in a 60% improvement in the retrieval speed of the CRUD operations. Deployed the web application on Streamlit, providing an intuitive platform for financial insights, budget planning and expense trends through visualizations and a seamless user experience in finance tracking.",
    tags: [
      {
        name: "NoSQL",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "white-text-gradient",
      },
      {
        name: "Python",
        color: "orange-text-gradient",
      },
      {
        name: "Streamlit",
        color: "orange-text-gradient",
      },
    ],
    image: personalIncomeTracker,
    source_code_link:
      "https://github.com/kashmira92/Perosnal-Income-and-Expense-Tracker-Application-using-MongoDB",
  },
];

export { services, technologies, experiences, projects, expertise, academia };
