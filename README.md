# Sunnyside Agency Landing Page

This is a responsive landing page for the Sunnyside creative agency, designed to showcase their services and client testimonials. The page is built using HTML and CSS, with a mobile-friendly navigation menu.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [License](#license)

## Overview

The Sunnyside Agency Landing Page is a single-page website that effectively communicates the agency's services, highlights their expertise, and showcases client testimonials. It is designed to be visually appealing and responsive, ensuring a great user experience across different devices.

## Features

- *Responsive Design*: Adapts to different screen sizes, ensuring a seamless experience on both desktop and mobile devices.
- *Header Section*: Includes a navigation menu and a prominent heading.
- *Service Sections*: Detailed descriptions of services offered by the agency.
- *Client Testimonials*: Displays feedback from satisfied clients.
- *Gallery*: A visual showcase of the agency's work.
- *Footer*: Contains additional navigation links and social media icons.

## Getting Started

To get a local copy of the project up and running, follow these steps:

### Prerequisites

- A web browser (Chrome, Firefox, Safari, etc.)
- A code editor (VS Code, Sublime Text, etc.)
- Basic understanding of HTML and CSS

### Installation

1. Clone the repository:
   sh
   git clone https://github.com/your-username/sunnyside-agency-landing-page.git
   

2. Navigate to the project directory:
   sh
   cd sunnyside-agency-landing-page
   

3. Open the index.html file in your web browser to view the landing page.

## Usage

To customize the landing page, you can modify the following files:

- index.html: Contains the structure of the webpage.
- styles.css: Contains the styles for the webpage.
- script.js: Contains the JavaScript for the mobile menu functionality.
- images/: Contains all the images used in the project.

### JavaScript for Mobile Menu

To make the mobile menu functional, the following JavaScript code is used:

javascript
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.none');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
});


## License

This project is licensed under the MIT License. See the LICENSE file for more information.

---

Save this as README.md in your project directory.

And here is the LICENSE file content:

plaintext
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
