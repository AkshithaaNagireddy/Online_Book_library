// Dataset of 25 Books
const catalogSeed = [
  { id: 1, title: "Atomic Habits", author: "James Clear", category: "Productivity", rating: 4.9, status: "Completed", isFav: true, cover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80" },
  { id: 2, title: "Clean Architecture", author: "Robert C. Martin", category: "Engineering", rating: 4.8, status: "Reading", isFav: true, cover: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80" },
  { id: 3, title: "The Psychology of Money", author: "Morgan Housel", category: "Finance", rating: 4.8, status: "Completed", isFav: true, cover: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&q=80" },
  { id: 4, title: "Meditations", author: "Marcus Aurelius", category: "Philosophy", rating: 4.9, status: "Completed", isFav: false, cover: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&q=80" },
  { id: 5, title: "1984", author: "George Orwell", category: "Literature", rating: 4.7, status: "Completed", isFav: false, cover: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=500&q=80" },
  { id: 6, title: "Designing Data-Intensive Apps", author: "Martin Kleppmann", category: "Engineering", rating: 4.9, status: "Reading", isFav: true, cover: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=80" },
  { id: 7, title: "Deep Work", author: "Cal Newport", category: "Productivity", rating: 4.7, status: "Completed", isFav: false, cover: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&q=80" },
  { id: 8, title: "The Intelligent Investor", author: "Benjamin Graham", category: "Finance", rating: 4.6, status: "Wishlist", isFav: false, cover: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=80" },
  { id: 9, title: "Dune", author: "Frank Herbert", category: "Literature", rating: 4.8, status: "Completed", isFav: true, cover: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&q=80" },
  { id: 10, title: "Beyond Good and Evil", author: "Friedrich Nietzsche", category: "Philosophy", rating: 4.5, status: "Wishlist", isFav: false, cover: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&q=80" },
  { id: 11, title: "Refactoring UI", author: "Adam Wathan", category: "Engineering", rating: 4.9, status: "Completed", isFav: true, cover: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&q=80" },
  { id: 12, title: "Zero to One", author: "Peter Thiel", category: "Finance", rating: 4.6, status: "Completed", isFav: false, cover: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&q=80" },
  { id: 13, title: "Essentialism", author: "Greg McKeown", category: "Productivity", rating: 4.6, status: "Wishlist", isFav: false, cover: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=500&q=80" },
  { id: 14, title: "Crime and Punishment", author: "Fyodor Dostoevsky", category: "Literature", rating: 4.8, status: "Reading", isFav: true, cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&q=80" },
  { id: 15, title: "The Pragmatic Programmer", author: "David Thomas", category: "Engineering", rating: 4.8, status: "Completed", isFav: false, cover: "https://images.unsplash.com/photo-1532012164546-f432f2e3edd3?w=500&q=80" },
  { id: 16, title: "Show Your Work!", author: "Austin Kleon", category: "Productivity", rating: 4.7, status: "Completed", isFav: true, cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80" },
  { id: 17, title: "The Millionaire Next Door", author: "Thomas J. Stanley", category: "Finance", rating: 4.5, status: "Wishlist", isFav: false, cover: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&q=80" },
  { id: 18, title: "The Daily Stoic", author: "Ryan Holiday", category: "Philosophy", rating: 4.8, status: "Reading", isFav: true, cover: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&q=80" },
  { id: 19, title: "Fahrenheit 451", author: "Ray Bradbury", category: "Literature", rating: 4.6, status: "Wishlist", isFav: false, cover: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=500&q=80" },
  { id: 20, title: "Staff Engineer", author: "Will Larson", category: "Engineering", rating: 4.7, status: "Reading", isFav: false, cover: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&q=80" },
  { id: 21, title: "Can't Hurt Me", author: "David Goggins", category: "Productivity", rating: 4.9, status: "Completed", isFav: true, cover: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=500&q=80" },
  { id: 22, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", category: "Finance", rating: 4.6, status: "Completed", isFav: false, cover: "https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=500&q=80" },
  { id: 23, title: "Man's Search for Meaning", author: "Viktor E. Frankl", category: "Philosophy", rating: 4.9, status: "Completed", isFav: true, cover: "https://images.unsplash.com/photo-1474932430478-367dbb6832c1?w=500&q=80" },
  { id: 24, title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Literature", rating: 4.4, status: "Completed", isFav: false, cover: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&q=80" },
  { id: 25, title: "You Don't Know JS Yet", author: "Kyle Simpson", category: "Engineering", rating: 4.8, status: "Wishlist", isFav: false, cover: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&q=80" }
];

// App State Management
let shelf = JSON.parse(localStorage.getItem("auralib_books"));
if (!shelf || shelf.length < 20) {
  shelf = catalogSeed;
  localStorage.setItem("auralib_books", JSON.stringify(shelf));
}

let activeUser = JSON.parse(localStorage.getItem("auralib_user")) || null;

document.addEventListener("DOMContentLoaded", () => {
  renderShelf();
  refreshAuthStatus();
});

function persistChanges() {
  localStorage.setItem("auralib_books", JSON.stringify(shelf));
  localStorage.setItem("auralib_user", JSON.stringify(activeUser));
  computeMetrics();
}

function computeMetrics() {
  document.getElementById("stat-total").innerText = shelf.length;
  document.getElementById("stat-read").innerText = shelf.filter(b => b.status === "Completed").length;
  document.getElementById("stat-favs").innerText = shelf.filter(b => b.isFav).length;
  document.getElementById("stat-reading").innerText = shelf.filter(b => b.status === "Reading").length;
}

function renderShelf() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const genre = document.getElementById("genre-select").value;
  const status = document.getElementById("status-select").value;
  const sort = document.getElementById("sort-select").value;
  const grid = document.getElementById("shelf-grid");

  let filtered = shelf.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(query) || item.author.toLowerCase().includes(query);
    const matchesGenre = (genre === "All") || (item.category === genre);
    const matchesStatus = (status === "All") || (item.status === status);
    return matchesSearch && matchesGenre && matchesStatus;
  });

  if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sort === "title") {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  }

  computeMetrics();

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-dim); padding: 50px 0;">No matching books found in your library.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(book => `
    <div class="shelf-item">
      <div class="cover-wrapper">
        <img src="${book.cover}" alt="${book.title}" class="cover-img" onerror="this.src='https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80'" />
        <span class="genre-tag">${book.category}</span>
        <button class="fav-toggle-btn ${book.isFav ? 'liked' : ''}" onclick="toggleFav(${book.id})">
          <i class="fa-${book.isFav ? 'solid' : 'regular'} fa-heart"></i>
        </button>
      </div>

      <div class="item-body">
        <h4 class="item-title">${book.title}</h4>
        <span class="item-author">by ${book.author}</span>

        <div class="meta-stats-row">
          <span class="rating-indicator">★ ${book.rating}</span>
          <span class="status-indicator ${book.status}">${book.status}</span>
        </div>

        <div class="card-bottom-actions">
          <select class="status-select-btn" onchange="updateStatus(${book.id}, this.value)">
            <option value="Wishlist" ${book.status === 'Wishlist' ? 'selected' : ''}>Want to Read</option>
            <option value="Reading" ${book.status === 'Reading' ? 'selected' : ''}>Reading</option>
            <option value="Completed" ${book.status === 'Completed' ? 'selected' : ''}>Completed</option>
          </select>

          <button class="delete-action-btn" onclick="removeBook(${book.id})" title="Delete Book">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

function updateStatus(id, newStatus) {
  const target = shelf.find(b => b.id === id);
  if (target) {
    target.status = newStatus;
    persistChanges();
    renderShelf();
  }
}

function toggleFav(id) {
  const target = shelf.find(b => b.id === id);
  if (target) {
    target.isFav = !target.isFav;
    persistChanges();
    renderShelf();
  }
}

function removeBook(id) {
  if (confirm("Remove this book from your collection?")) {
    shelf = shelf.filter(b => b.id !== id);
    persistChanges();
    renderShelf();
  }
}

function handleCreateBook(e) {
  e.preventDefault();
  const book = {
    id: Date.now(),
    title: document.getElementById("form-title").value,
    author: document.getElementById("form-author").value,
    category: document.getElementById("form-category").value,
    status: document.getElementById("form-status").value,
    rating: parseFloat(document.getElementById("form-rating").value) || 4.5,
    cover: document.getElementById("form-cover").value || "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80",
    isFav: false
  };

  shelf.unshift(book);
  persistChanges();
  renderShelf();
  closeModal("add-modal");
  document.getElementById("new-book-form").reset();
}

// Modal Controllers
function openAddBookModal() {
  document.getElementById("add-modal").classList.add("open");
}

function openAuthModal(mode = 'signin') {
  document.getElementById("auth-modal").classList.add("open");
  switchAuthView(mode);
}

function closeModal(id) {
  document.getElementById(id).classList.remove("open");
}

function switchAuthView(mode) {
  const inTab = document.getElementById("auth-tab-in");
  const upTab = document.getElementById("auth-tab-up");
  const inForm = document.getElementById("form-signin");
  const upForm = document.getElementById("form-signup");

  if (mode === 'signin') {
    inTab.classList.add("active");
    upTab.classList.remove("active");
    inForm.classList.add("active");
    upForm.classList.remove("active");
  } else {
    upTab.classList.add("active");
    inTab.classList.remove("active");
    upForm.classList.add("active");
    inForm.classList.remove("active");
  }
}

function executeSignIn(e) {
  e.preventDefault();
  const email = document.getElementById("in-email").value;
  activeUser = { name: email.split("@")[0] };
  persistChanges();
  refreshAuthStatus();
  closeModal("auth-modal");
}

function executeSignUp(e) {
  e.preventDefault();
  const name = document.getElementById("up-name").value;
  activeUser = { name };
  persistChanges();
  refreshAuthStatus();
  closeModal("auth-modal");
}

function logOut() {
  activeUser = null;
  persistChanges();
  refreshAuthStatus();
}

function refreshAuthStatus() {
  const slot = document.getElementById("auth-slot");
  if (activeUser) {
    slot.innerHTML = `
      <div style="display:flex; align-items:center; gap:10px;">
        <span style="font-size:0.85rem; color: #38bdf8; font-weight:600;"><i class="fa-solid fa-user-astronaut"></i> ${activeUser.name}</span>
        <button class="action-pill-btn outline-btn" onclick="logOut()">Exit</button>
      </div>
    `;
  } else {
    slot.innerHTML = `
      <button class="action-pill-btn outline-btn" onclick="openAuthModal('signin')">
        <i class="fa-regular fa-user"></i>
        <span>Account</span>
      </button>
    `;
  }
}