# 📚 AuraLib — Online Book Library System

A sleek, responsive, web-based personal book management system built with vanilla HTML, CSS (Glassmorphism), and JavaScript.

---

Deployment : https://akshithaanagireddy.github.io/Online_Book_library/

---

## 📌 Project Overview
- **Task**: Task 11 — Online Book Library
- **Architecture**: Client-side single-page application (SPA)
- **Tech Stack**: HTML5, CSS3 (Modern Glassmorphism & Flexbox/Grid), Vanilla JavaScript (ES6+), Font Awesome 6, Google Fonts

---

## ✨ Features
- **Glassmorphic UI**: Deep blur backdrops, ambient glowing light orbs, and translucent cards.
- **Dynamic Book Catalog**: Preloaded with 25 curated titles across multiple genres.
- **Real-Time Search & Multi-Filters**: Instant search by title/author, category dropdown, status filtering, and sorting (ratings/alphabetical).
- **Interactive Shelf Management**:
  - Add custom books with instant UI updates
  - Status switcher (*Want to Read*, *Reading*, *Completed*)
  - Toggle favorites (❤️)
  - Remove/Delete books from the shelf
- **Live KPI Dashboard**: Real-time counters for Total Books, Completed, Favorites, and In Progress.
- **Authentication Flow**: Modal-based Sign In / Sign Up switcher with user session persistence.
- **Data Persistence**: All changes, new books, and user login states are saved automatically in `localStorage`.

---

## 📂 Project Structure
```text
├── index.html        # Semantic HTML layout and modal structures
├── style.css         # Custom Glassmorphism styles, animations, and responsive breakpoints
└── script.js         # State management, data persistence, filtering, and DOM manipulation
