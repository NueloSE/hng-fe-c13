# Profile Card — Frontend Wizards Stage 0 Task

A simple, responsive, and accessible **Profile Card** built with **HTML, CSS, and vanilla JavaScript**.
This project fulfills the requirements for **HNG13 — Stage 0: Testable Profile Card**.

---

## Project Overview

The **Profile Card** displays key user information, including:

- Name
- Short biography
- Current time (in milliseconds)
- Avatar image
- Social media links
- Lists of hobbies and dislikes

All elements use semantic HTML and are tagged with the required `data-testid` attributes for automated testing.

---

## Features

✅ **Semantic HTML5** — built using `<article>`, `<header>`, `<section>`, `<nav>`, `<picture>`, etc.

✅ **Accessible Design** — alt text for images, keyboard navigation support, and visible focus styles.

✅ **Responsive Layout** — optimized for mobile, tablet, and desktop using CSS Flexbox.

✅ **Dynamic Time** — current time in milliseconds displayed using `Date.now()`.

✅ **Test-Friendly** — every visible element includes a `data-testid` attribute exactly as specified.

---

## Data TestIDs Used

| Element                     | data-testid                |
| --------------------------- | -------------------------- |
| Profile Card Container      | `test-profile-card`        |
| User Name                   | `test-user-name`           |
| Biography                   | `test-user-bio`            |
| Current Time                | `test-user-time`           |
| Avatar Image                | `test-user-avatar`         |
| Social Links Container      | `test-user-social-links`   |
| Social Link (e.g., Twitter) | `test-user-social-twitter` |
| Hobbies List                | `test-user-hobbies`        |
| Dislikes List               | `test-user-dislikes`       |

---

## Technologies Used

- **HTML5** — for structure and semantics
- **CSS3 (Flexbox & Grid)** — for styling and layout
- **JavaScript (vanilla)** — for dynamic time rendering

---

## Accessibility

- All interactive elements are **keyboard-focusable** (`Tab` key friendly).
- Focus states are clearly **visible** (`:focus` styles).
- Avatar includes a descriptive **alt** attribute.
- Social links open safely in new tabs (`target="_blank"` with `rel="noopener noreferrer"`).

---

## Responsiveness

| Screen Size        | Layout Behavior                               |
| ------------------ | --------------------------------------------- |
| **Mobile**         | Elements stack vertically                     |
| **Tablet/Desktop** | Avatar displayed beside text content          |
| **Flexible**       | Layout adapts to content length automatically |

---

## How to Run Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/nuelose/profile-card.git
   cd profile-card
   ```

2. **Open in browser**

   - Open `index.html` directly in your browser
     _(No build tools required — plain HTML/CSS/JS)_

---

## Live Demo

🔗 [**Live Site:**](https://profile-card-kappa-nine.vercel.app/)
🔗 [**GitHub Repository:**](https://github.com/NueloSE/hng-fe-c13/tree/main/profile-card-t0)

---

## Credits

Task by **HNG13 FrontendTrack**
Built by **[nuelo]**
