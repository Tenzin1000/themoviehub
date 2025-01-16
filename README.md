# MovieHub 🎥

**MovieHub** is a **React-based movie application** that allows users to search for movies, view details, and paginate through results using the **OMDB API**.

---

### Challenges 🚀

1.  Loading logo while fetching data.
2.  Search functionality that updates as the user's types for a movie.
3.  About more for individual sets of movies so that the users and go to single movie list for more information.
4.  Pagination for nativating through search results.
5.  Responsive design by using Bootstrap CDN and media quries.

---

#### To Run The Movie Hub app locally. You will need to follow the following steps.

##### Ensure you have the following installed:

1.  Node.js (LTS version recommended)
2.  npm or yarn for managing dependencies.

---

### Steps Instructions 🛠️

##### 1. Clone the repository:

```bash
git clone https://github.com/Tenzin1000/themoviehub.git
cd moviehub
```

##### 2. Install dependencies:

```bash
npm install
# or
yarn install
```

##### 3. Get an OMDB API Key:

1.  Visit the OMDB API website and sign up for a free account.
2.  After signing up, you'll receive an API key. Keep it handy for the next step.

##### 4. Create a .env file in the root directory:

1.  Add the following line to your .env file, replacing YOUR_API_KEY with your actual OMDB API key:
    REACT_APP_API=YOUR_API_KEY

##### 5. Start the development server:

```bash
npm start

# or

yarn start
```

Open your browser and navigate to http://localhost:3000.

---

### Folder Structure 📂

```plaintext
moviehub/
├── public/
├── src/
│ ├── components/
│ ├── context/
| ├── css/
| ├── img/
│ ├── pages/
│ ├── App.js
│ ├── index.js
├── .env
├── package.json
└── README.md
```

---

### Scripts 📜

##### 1. Start Development Server:

```bash
npm start
```

##### 2. Build for Production:

```bash
npm run build
```

##### 3. Run Tests:

```bash
npm test
```

---

### Notes 📝

1.  Use the correct API_key from OMDB.
2.  Before running the app make sure you add **.env ** with REACT_APP_API=YOUR_API_KEY.

---

### License 📄

This project is licensed under the MIT License. Feel free to use and modify it as you like

---
