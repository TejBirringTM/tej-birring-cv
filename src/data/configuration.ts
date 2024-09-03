import type React from "react"
import ProductDevIcon from '@/icons/product-development.svg?react';
import CodingIcon from '@/icons/coding-3.svg?react';

export interface Skill {
    label: string,
    children?: Skill[]
}

interface Configuration {
    headlines: string[],
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
    },
    branches: Array<{
        name: string,
        title: string,
        description?: string,
        icon?: React.FunctionComponent,
        url: string,
    }>
}

export default {
    url: "https://cv.tejbirring.com",
    headlines: [
        "Full-Stack Product Engineer 🛠",
        "Web Tech Innovator 🌐",
        "Startup-Savvy Developer 🚀",
        "Full-Stack Product Engineer 🛠",
        "Web Tech Innovator 🌐",
        "Startup-Savvy Developer 🚀"
    ],
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
    branches: [
        {
            name: "product-engineer",
            title: "Product Engineer",
            url: "https://product-engineering.cv.tejbirring.com",
            icon: ProductDevIcon
        },
        {
            name: "software-engineering",
            title: "Software Engineer",
            url: "https://software-engineering.cv.tejbirring.com",
            icon: CodingIcon
        },        
    ]
} satisfies Configuration;
