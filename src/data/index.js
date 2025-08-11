import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUpRight, Cloud, Code, Menu, X, Download } from 'lucide-react';

export const portfolioData = {
  name: "Juan Manuel Díaz",
  headline: "DevOps & Cloud Engineer",
  contact: {
    email: "jdiazmoreno271@gmail.com",
    github: "https://github.com/juanmadiaz45",
    linkedin: "https://www.linkedin.com/in/juan-manuel-diaz-moreno",
    cvPath: "/path/to/your/cv.pdf"
  },
  about: "As a final-year Software and Telematics Engineering student, I specialize in bridging software development and IT operations through automation and cloud-native solutions. With a dual-degree background, I combine software architecture expertise with network infrastructure skills to design scalable and fault-tolerant systems. Passionate about CI/CD, containerization, and cloud platforms, I’m eager to learn, build and optimize infrastructures that empower high-performance applications.",
  skills: {
    devops: {
      id: 'devops',
      label: 'DevOps & Cloud',
      icon: Cloud,
      description: "I specialize in building robust CI/CD pipelines, automating infrastructure with Infrastructure as Code (IaC), and orchestrating containerized applications to ensure scalable, resilient, and efficient software delivery.",
      tools: [
        // Containers & Orchestration
        "Docker", "Kubernetes (Learning)", 
        // CI/CD
        "Jenkins", "GitHub Actions", "CI/CD", 
        // IaC & Automation
        "Terraform", "Ansible", "Vagrant", "Bash/Shell Scripting",
        // Monitoring & Observability
        "Prometheus", "Grafana", "SonarQube",
        // Cloud Platforms
        "AWS", "Azure", "GCP",
        // Networking & Infra
        "Linux", "VirtualBox", "VMware"
      ]
    },
  fullstack: {
    id: 'fullstack',
    label: 'Full-Stack Development',
    icon: Code,
    description: "I build responsive frontends and robust backends, with experience across the full application lifecycle—from API design to deployment—following clean architecture and testing best practices.",
    tools: [
      // Languages & Backend
      "Python", "Java", "Node.js", "Bash", 
      "Spring Boot", "Spring Framework", "Django", 
      // "Express.js", 
      // "NestJS",
      // Frontend
      "HTML/CSS", "JavaScript", "TypeScript (Learning)", "React", //"Next.js", 
      "Tailwind CSS",
      // Databases
      "PostgreSQL", "MySQL", "MongoDB", // "Redis", 
      "SQLite",
      // Testing
      "JUnit", "PyTest", "unittest", "Postman", "Selenium"
    ]
  }
},
  projects: [
    {
      title: "Azure DevOps & IaC for Microservices",
      description: "An end-to-end project to deploy and manage a resilient microservices architecture on Azure, featuring a full CI/CD pipeline, infrastructure provisioned with Terraform, and configuration managed by Ansible.",
      tags: ["Azure", "Terraform", "Ansible", "Docker", "Jenkins", "CI/CD"],
      imageUrl: "/azure.png",
      link: "https://github.com/Juanmadiaz45/microservices-deployment"
    },
    {
      title: "Cloud-Native eCommerce Platform on GCP",
      description: "Architected a complete, production-ready environment on Google Cloud Platform, orchestrating Spring Boot microservices with Kubernetes (GKE) and automating infrastructure with a modular Terraform setup.",
      tags: ["GCP", "Kubernetes", "Terraform", "Jenkins", "Docker", "SonarQube"],
      imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
      link: "https://github.com/ecommerce-devops-lab"
    },
    {
      title: "HabitFlow - Habit Tracking Mobile App",
      description: "Developed an Android application in Kotlin to help users build and maintain habits through gamification and social engagement. Implemented habit creation, editing, and deletion, daily streak tracking, personal and global statistics, and a community articles section. The app follows MVVM and Clean Architecture principles, integrates Supabase for real-time data, and uses a containerized Directus backend with Docker.",
      tags: ["Kotlin", "Clean Architecture", "Supabase", "Directus", "Docker", "Retrofit", "Hilt"],
      imageUrl: "/habitflow.png",
      link: "https://github.com/HabitFlowTeam/habitflow-app"
    },
    {
      title: "OncoLogic Clinic Management - Backend",
      description: "Developed the backend service for an oncology clinic management platform using Java 23 and Spring Boot. The API supports patient record management, appointment scheduling, laboratory integration, and secure role-based access control. Includes PostgreSQL integration, Dockerized environments for development and testing, and unit testing with JUnit and JaCoCo.",
      tags: ["Java", "Spring Boot", "PostgreSQL", "Docker", "JUnit", "JaCoCo", "Spring Security"],
      imageUrl: "backend.png",
      link: "https://github.com/Juanmadiaz45/oncologic-clinic-backend"
    },
    {
      title: "OncoLogic Clinic Management - Frontend",
      description: "Implemented the frontend of an oncology clinic management platform using React and TypeScript. Features include patient and staff dashboards, appointment scheduling, laboratory result visualization, and authentication with role-based access. Integrated the backend API and optimized UI responsiveness.",
      tags: ["React", "TypeScript", "Vite", "Docker", "Axios", "React Router"],
      imageUrl: "frontend.png",
      link: "https://github.com/Juanmadiaz45/oncologic-clinic-frontend"
    }
  ]
};