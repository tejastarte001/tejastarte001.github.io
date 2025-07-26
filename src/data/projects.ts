// src/data/projects.ts
import type { Project } from "../types/project";

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    fullDescription: "Complete shopping platform with customer/admin interfaces, order management, payments, and real-time updates",
    categoryDetails: {
      "Full-Stack": {
        description: "Full solution with Flutter mobile app + Angular web dashboard + Node.js backend",
        highlights: [
          "Flutter mobile app for customers",
          "Angular admin dashboard",
          "Node.js API with MySQL"
        ]
      },
      "Backend": {
        description: "REST API with Node.js and MySQL database",
        highlights: [
          "Product inventory management",
          "Order processing system",
          "JWT authentication"
        ]
      }
    },
    tags: ["Flutter", "Angular", "Node.js", "MySQL", "REST API"],
    link: "#",
    image: "/ecommerce-project.jpg",
    categories: ["Full-Stack", "Backend"],
    githubUrl: "https://github.com/example/ecommerce"
  },
  {
    id: "2",
    title: "Emergency Alert App",
    fullDescription: "Cross-platform emergency app with real-time alerts",
    categoryDetails: {
      "Mobile": {
        description: "Flutter mobile application with emergency features",
        highlights: [
          "Panic button with one-tap activation",
          "Real-time location sharing",
          "Emergency contact notifications"
        ]
      },
      "Backend": {
        description: "Firebase-powered backend services",
        highlights: [
          "Firebase Authentication",
          "Firestore real-time database",
          "Cloud Functions for alerts"
        ]
      }
    },
    tags: ["Flutter", "Firebase", "Google Maps API", "Firestore"],
    link: "#",
    image: "/emergency-app.jpg",
    categories: ["Mobile", "Backend"],
    githubUrl: "https://github.com/example/emergency-app"
  },
  {
    id: "3",
    title: "Weather Forecast App",
    fullDescription: "Mobile weather application with real-time forecasts",
    categoryDetails: {
      "Mobile": {
        description: "Flutter weather application with OpenWeather API",
        highlights: [
          "Current weather conditions",
          "7-day forecast",
          "Location-based weather"
        ]
      }
    },
    tags: ["Flutter", "OpenWeather API", "Geolocation"],
    link: "#",
    image: "/weather-app.jpg",
    categories: ["Mobile"],
    githubUrl: "https://github.com/example/weather-app"
  }
];

export default projects;