import React, { useState } from 'react';
import '../styles/profile.css'

const Profile = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: 'Aditya Rajpoot',
    email: 'aditya@example.com',
    phone: '+1 234 567 890',
    location: 'San Francisco, CA',
    bio: 'Passionate software developer with 5+ years of experience in full-stack development.',
  });

  const [education, setEducation] = useState([
    {
      id: 1,
      institution: 'University of California, Berkeley',
      degree: 'B.Sc. Computer Science',
      startYear: '2015',
      endYear: '2019',
    },
  ]);

  const [skills, setSkills] = useState([
    'JavaScript',
    'React',
    'Node.js',
    'Python',
    'Machine Learning',
  ]);

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Job Application Tracker',
      description: 'A web app to track job applications and statuses.',
      link: 'https://github.com/aditya/job-tracker',
    },
  ]);

  const [links, setLinks] = useState({
    linkedin: 'https://linkedin.com/in/aditya',
    github: 'https://github.com/aditya',
    portfolio: 'https://aditya.dev',
  });

  // Handlers for form inputs can be added here for editing functionality

  return (
    <div className="page-content profile-page">
      <h1>My Profile</h1>

      {/* Personal Information */}
      <section className="profile-section personal-info">
        <h2>Personal Information</h2>
        <div className="info-group">
          <label>Full Name</label>
          <p>{personalInfo.fullName}</p>
        </div>
        <div className="info-group">
          <label>Email</label>
          <p>{personalInfo.email}</p>
        </div>
        <div className="info-group">
          <label>Phone</label>
          <p>{personalInfo.phone}</p>
        </div>
        <div className="info-group">
          <label>Location</label>
          <p>{personalInfo.location}</p>
        </div>
        <div className="info-group">
          <label>Bio</label>
          <p>{personalInfo.bio}</p>
        </div>
      </section>

      {/* Education */}
      <section className="profile-section education-info">
        <h2>Education</h2>
        {education.map((edu) => (
          <div key={edu.id} className="education-item">
            <h3>{edu.institution}</h3>
            <p>{edu.degree}</p>
            <p>
              {edu.startYear} - {edu.endYear}
            </p>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="profile-section skills-info">
        <h2>Skills</h2>
        <ul className="skills-list">
          {skills.map((skill, idx) => (
            <li key={idx} className="skill-item">{skill}</li>
          ))}
        </ul>
      </section>

      {/* Resume Upload */}
      <section className="profile-section resume-upload">
        <h2>Resume</h2>
        <input type="file" accept=".pdf,.doc,.docx" />
        <p className="note">Upload your latest resume (PDF or Word format)</p>
      </section>

      {/* Projects */}
      <section className="profile-section projects-info">
        <h2>Projects</h2>
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </section>

      {/* Links */}
      <section className="profile-section links-info">
        <h2>Links</h2>
        <ul className="links-list">
          <li>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
          <li>
            <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </li>
          <li>
            <a href={links.portfolio} target="_blank" rel="noopener noreferrer">Portfolio</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Profile;