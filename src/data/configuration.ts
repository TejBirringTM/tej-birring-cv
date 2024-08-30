export interface Skill {
    label: string,
    children?: Skill[]
}

interface Configuration {
    url?: string,
    name: string,
    email?: string,
    phone?: string,
    location?: string,
    onlinePresence?: {
        linkedInURL?: string,
        githubURLs?: Array<{
            username: string,
            url: string
        }>,
        website?: Array<{
            name: string,
            url: string
        }>
    }
    education?: Array<{
        institution: string,
        location: string,
        course: string,
        details?: Array<string>,
        grade: string,
        startDate: Date,
        graduationDate: Date,
    }>,
    publications?: Array<{
        name: string,
        publicationDate: Date,
        publisher: string,
        location?: string,
    }>,
    presentations?: Array<{

    }>,
    skills?: Array<Skill>,
    otherInformation?: Array<string>,
}

export default {
    url: "https://product-engineering.cv.tejbirring.com",
    name: "Tej Birring",
    email: "tejbirring@gmail.com",
    phone: "+44 (0) 7424 680 750",
    onlinePresence: {
        linkedInURL: "https://www.linkedin.com/in/tej-birring",
        githubURLs: [
            {
                 username: "TejBirringTM",
                 url: "https://github.com/TejBirringTM/"
            },
            {
                username: "TejBirring8",
                url: "https://github.com/TejBirring8/"
            },
            {
                username: "TejAtParkourOps",
                url: "https://github.com/TejAtParkourOps/"
            }
        ],
    },
    location: "Birmingham, UK",
    education: [
        {
            institution: "University of Kent",
            location: "Canterbury, UK",
            course: "MEng Computer Systems Engineering",
            grade: "First Class with Honours",
            startDate: new Date(2011, 8),
            graduationDate: new Date(2016, 6),
            details: [
                "Undergraduate course with integrated Masters; 27 modules",
                "Accredited by the Institute of Engineering (UK) and the Engineering Council (UK)",
                "Degree transcript available upon request"
            ]
        }
    ],
    publications: [
        {
            name: "An Ethernet-Based Fronthaul Implementation with MAC/PHY Split LTE Processing",
            publisher: "IEEE Global Communications Conference (GLOBECOM)",
            location: "Singapore",
            publicationDate: new Date(2017, 11)
        },
        {
            name: "Effects of Contention and Delay in a Switched Ethernet Evolved Fronthaul for Future Cloud-RAN Applications",
            publisher: "IEEE European Conference on Optical Communication (ECOC)",
            location: "Gothenburg, Sweden",
            publicationDate: new Date(2017, 8)
        },
        {
            name: "Ethernet-Based Fronthauling for Cloud-Radio Access Networks",
            publisher: "IEEE International Conference on Transparent Optical Networks (ICTON)",
            location: "Girona, Spain",
            publicationDate: new Date(2017, 6)
        },
    ],
    skills: [
        {
            label: "General",
            children: [
                {
                    label: "Business analysis"
                },
                {
                    label: "Writing product & technical requirements"
                },
                {
                    label: "Data modelling"
                },
                {
                    label: "User experience prototyping"
                },
                {
                    label: "Database (DB) analysis & design"
                },
                {
                    label: "Object-orientated (OO) analysis & design"
                },
                {
                    label: "Application programming interface (API) design"
                },
                {
                    label: "Full-stack development"
                },
                {
                    label: "High-performance computing"
                },
                {
                    label: "Low-level development"
                },
                {
                    label: "Cross-platform development"
                },
                {
                    label: "Continuous integration & delivery (CI/CD) infrastructure"
                },
                {
                    label: "Computer networking"
                },
                {
                    label: "Software-defined radio (SDR)"
                },
                {
                    label: "Technical documentation"
                },
                {
                    label: "Technical presentation"
                }
            ]
        },
        {
            label: "Programming Languages – by Runtime (RT) Environment",
            children: [
                {
                    label: "Web Browser & Node.js®/Deno/Bun",
                    children: [
                        {
                            label: 'JavaScript/ECMAScript'
                        },
                        {
                            label: 'TypeScript'
                        }
                    ]
                },
                {
                    label: "Machine Native",
                    children: [
                        {
                            label: "C"
                        },
                        {
                            label: "C++"
                        },
                        {
                            label: "Go"
                        },
                        {
                            label: "Rust"
                        }
                    ]
                },
                {
                    label: "Python"
                },       
                {
                    label: "MATLAB"
                },                
                {
                    label: ".NET Common Language Runtime (CLR)",
                    children: [
                        {
                            label: "C#"
                        },
                        {
                            label: "Visual Basic"
                        }
                    ]
                },                
            ]
        },
        {
            label: "Markup & Styling Languages",
            children: [
                {
                    label: "HTML"
                },
                {
                    label: "CSS"
                },
                {
                    label: "SASS/SCSS"
                },
                {
                    label: "Markdown (md & mdx)"
                }
            ]
        },
        {
            label: "Database Management Systems (DBMS)",
            children: [
                {
                    label: "MySQL, PostgreSQL",
                    children: [
                        {
                            label: "SQL (query language)"
                        }
                    ]
                },
                {
                    label: "MongoDB"
                },
                {
                    label: "Neo4j",
                    children: [
                        {
                            label: "Cypher (query language)"
                        }
                    ]
                },
                {
                    label: "Redis"
                }                
            ]
        },
        {
            label: "Tools",
            children: [
                {
                    label: "Docker"
                },
                {
                    label: "Bash & Zsh"
                },
                {
                    label: "Jira"
                },
                {
                    label: "Version Control Software",
                    children: [
                        {
                            label: "GitHub"
                        },
                        {
                            label: "GitLab"
                        },
                        {
                            label: "BitBucket"
                        },
                    ]
                },
                {
                    label: "CI/CD Software",
                    children: [
                        {
                            label: "Jenkins"
                        },
                        {
                            label: "CircleCI"
                        }
                    ]
                },                
                {
                    label: "Design Software",
                    children: [
                        {
                            label: "Adobe Suite"
                        },
                        {
                            label: "Affinity Suite"
                        },
                        {
                            label: "Figma"
                        },
                        {
                            label: "Sketch"
                        },
                    ]
                },
                {
                    label: "Maths & Analysis Software",
                    children: [
                        {
                            label: "Jupyter Notebook"
                        },
                        {
                            label: "Maple"
                        },
                        {
                            label: "Tableau"
                        },
                    ]
                },                
                {
                    label: "Productivity Software",
                    children: [
                        {
                            label: "Google Workspace"
                        },
                        {
                            label: "Microsoft 365"
                        }
                    ]
                },
            ]
        },
        {
            label: "Cloud Vendors",
            children: [
                {
                    label: "Google Cloud Platform (GCP)"
                },
                {
                    label: "Microsoft Azure"
                },
                {
                    label: "Amazon Web Services (AWS)"
                },
                {
                    label: "DigitalOcean"
                },
                {
                    label: "Heroku"
                }
            ]
        }
    ],
    otherInformation: [
        "Full clean UK driving license",
        "British citizen",
        "Native English speaker"
    ]
} satisfies Configuration;
