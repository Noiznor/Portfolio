import type { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: 1,
    title: "Network Vulnerability Scanner",
    shortDescription: "Automated network security assessment tool with real-time vulnerability detection",
    fullDescription: "A comprehensive network vulnerability scanner built with Python that performs automated security assessments on network infrastructures. The tool features real-time scanning capabilities, detailed vulnerability reporting, and integration with popular security frameworks. It includes modules for port scanning, service detection, vulnerability assessment, and generates detailed HTML reports with remediation recommendations.",
    technologies: ["Python", "Nmap", "Scapy", "SQLite", "Flask", "HTML/CSS"],
    githubUrl: "https://github.com/username/vuln-scanner",
    demoUrl: "https://demo.vulnscanner.com",
    images: [
      "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
      "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg"
    ],
    category: "security"
  },
  {
    id: 2,
    title: "Encrypted Chat Application",
    shortDescription: "End-to-end encrypted messaging platform with perfect forward secrecy",
    fullDescription: "A secure messaging application implementing end-to-end encryption using Signal Protocol. Features include perfect forward secrecy, message authentication, secure group chats, and file sharing capabilities. Built with modern web technologies and includes features like message expiration, secure voice calls, and advanced privacy settings. The application has been audited for security vulnerabilities and follows industry best practices for cryptographic implementations.",
    technologies: ["React", "Node.js", "Signal Protocol", "WebRTC", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/username/encrypted-chat",
    images: [
      "https://images.pexels.com/photos/5380663/pexels-photo-5380663.jpeg",
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
    ],
    category: "security"
  },
  {
    id: 3,
    title: "Network Traffic Analyzer",
    shortDescription: "Real-time network packet analysis and monitoring system",
    fullDescription: "Advanced network traffic analyzer capable of capturing, analyzing, and visualizing network packets in real-time. The system provides deep packet inspection, protocol analysis, and anomaly detection capabilities. Features include custom filter creation, bandwidth monitoring, security event detection, and comprehensive reporting dashboards. Built to handle high-throughput networks and provides both CLI and web-based interfaces.",
    technologies: ["C++", "Wireshark", "Python", "React", "InfluxDB", "Grafana"],
    githubUrl: "https://github.com/username/traffic-analyzer",
    demoUrl: "https://analyzer-demo.com",
    images: [
      "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg",
      "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg"
    ],
    category: "networking"
  },
  {
    id: 4,
    title: "Penetration Testing Framework",
    shortDescription: "Comprehensive automated penetration testing suite for web applications",
    fullDescription: "A sophisticated penetration testing framework designed for comprehensive security assessments of web applications. The framework includes modules for SQL injection testing, XSS detection, authentication bypass attempts, and infrastructure enumeration. Features automated report generation, integration with popular security tools, and customizable testing modules. Supports both authenticated and unauthenticated testing scenarios with detailed remediation guidance.",
    technologies: ["Python", "Selenium", "BeautifulSoup", "SQLMap", "Burp Suite API", "Django"],
    githubUrl: "https://github.com/username/pentest-framework",
    images: [
      "https://images.pexels.com/photos/5380665/pexels-photo-5380665.jpeg",
      "https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg"
    ],
    category: "security"
  },
  {
    id: 5,
    title: "Firewall Configuration Manager",
    shortDescription: "Centralized firewall rule management and monitoring system",
    fullDescription: "Enterprise-grade firewall management system that provides centralized configuration, monitoring, and compliance reporting across multiple firewall vendors. The system supports automated rule deployment, conflict detection, and policy optimization recommendations. Features include change tracking, approval workflows, and integration with SIEM systems. Supports major firewall vendors including Cisco ASA, Palo Alto, and pfSense.",
    technologies: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Docker", "Kubernetes"],
    githubUrl: "https://github.com/username/firewall-manager",
    images: [
      "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
      "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg"
    ],
    category: "networking"
  },
  {
    id: 6,
    title: "Malware Analysis Sandbox",
    shortDescription: "Automated malware analysis and behavior monitoring environment",
    fullDescription: "Isolated sandbox environment for safe malware analysis and behavioral monitoring. The system provides automated static and dynamic analysis capabilities, including file signature analysis, runtime behavior monitoring, and network traffic inspection. Features include VM orchestration, automated report generation, and integration with threat intelligence feeds. Supports analysis of various malware types including executables, documents, and mobile applications.",
    technologies: ["Python", "VirtualBox API", "YARA", "Cuckoo Sandbox", "Redis", "ElasticSearch"],
    githubUrl: "https://github.com/username/malware-sandbox",
    images: [
      "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg",
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
    ],
    category: "security"
  }
];