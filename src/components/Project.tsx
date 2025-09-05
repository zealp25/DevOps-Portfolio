import React from "react";
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/zealp25/Multiple-VM-Deployment" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/zealp25/Multiple-VM-Deployment" target="_blank" rel="noreferrer"><h2>Multiple VM Deployment</h2></a>
                <p>Automated the Creation and Deployment of a Windows Virtual Machine on Microsoft Azure using Powershell script and ARM template</p>
            </div>
            <div className="project">
                <a href="https://github.com/zealp25/Security-Threat-Project" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/zealp25/Security-Threat-Project" target="_blank" rel="noreferrer"><h2>Security Threat Analysis</h2></a>
                <p>Set up a secure GitHub repository with branch protections, code scanning, and email notifications to monitor and alert on potential security threats.</p>
            </div>
            <div className="project">
                <a href="https://github.com/zealp25/Micro-VMM" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/zealp25/Micro-VMM" target="_blank" rel="noreferrer"><h2>Micro VMM</h2></a>
                <p>Developed a lightweight hypervisor using the KVM API with low-level virtualization support, leveraging system-level programming and nested virtualization capabilities.</p>
            </div>
            <div className="project">
                <a href="https://github.com/zealp25/API-Monitoring-Tool" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/zealp25/API-Monitoring-Tool" target="_blank" rel="noreferrer"><h2>API Monitoring Tool</h2></a>
                <p>Built a Python script to monitor HTTP endpoints from a YAML config, evaluating availability based on status codes and response times, and logging domain-level metrics every 15 seconds.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;