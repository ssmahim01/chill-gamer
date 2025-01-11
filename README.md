<div align="center">
  <img width="100%" height="340" src="https://i.ibb.co.com/8jKXc4B/chill-gamer-web.png"  />
</div>

# Website Name

<b>Chill Gamer</b>
<hr>

# Features of Website

<li><b>Interactive User Interface: A clean and intuitive design for easy navigation and usability.</b></li>

<li><b>Fetch: Used Fetch for receive data from the server side and display different data in different routes such as Home, All Reviews, Review Details, My Reviews and Game WatchList etc.</b></li>

<li><b>Authentication: Users login and register through the firebase. If any user login with google, github or register with their info, then an user info will saved in auth state. Then user can easily login by their email and password.</b></li>

<li><b>Sort: Dynamically sorting reviews by Rating or Publish Year in ascending or descending order.</b></li>

<li><b>Filtering: Filter reviews based on genres to find games that match user preferences.</b></li>

<hr>

# Main Technologies

<li><b>Tailwind CSS: Framework of CSS</b></li>
<li><b>Daisy UI: Component library of Tailwind CSS</b></li>
<li><b>React: Library of JavaScript</b></li>
<li><b>Firebase: Authentication</b></li>

<hr>

# Live URL

<li><b>Live Site Link:</b> https://chill-gamer-application.web.app/</li>
<hr>

# Server Repository

<li><b>Link: </b>https://github.com/ssmahim01/chill-gamer-platform-server</li>

<hr>

# Guideline

When anyone will clone this repository then they have to follow some rules. Otherwise, the application is not working well. So, they have to follow these rules: 
<li>Open terminal (Git bash or anything) and run this command: <b>npm install</b></li>
<li>Add <b>.env.local</b> file then add secret keys with values or URLs</li>
<hr>

# Dependencies

"dependencies": {
<br>
    "@emailjs/browser": "^4.4.1",
    <br>
    "firebase": "^11.0.2",
     <br>
    "localforage": "^1.10.0",
     <br>
    "lottie-react": "^2.4.0",
     <br>
    "match-sorter": "^8.0.0",
     <br>
    "react": "^18.3.1",
     <br>
    "react-dom": "^18.3.1",
     <br>
    "react-fast-marquee": "^1.6.5",
     <br>
    "react-icons": "^5.4.0",
     <br>
    "react-rating-stars-component": "^2.2.0",
     <br>
    "react-router-dom": "^7.0.2",
     <br>
    "react-simple-typewriter": "^5.0.1",
     <br>
    "react-toastify": "^10.0.6",
     <br>
    "react-tooltip": "^5.28.0",
     <br>
    "sort-by": "^1.2.0",
     <br>
    "sweetalert2": "^11.14.5",
     <br>
    "swiper": "^11.1.15"
     <br>
  }

<hr>

# Setup

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh