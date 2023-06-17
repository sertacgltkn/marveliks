<template>
    <header :class="{'navbar-fixed': fixedNavbar}">
      <nav class="navbar">
        <div class="logo">
          MARVELIX
        </div>
        <ul class="nav-links">
          <li class="nav-link"><router-link to="/">Home</router-link></li>
           <li class="nav-link">
          <router-link to="/favoriler">
            Favorites
            <span class="badge">{{ favoriteCount }}</span>
          </router-link>
        </li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
  name: 'AppNavbar',
  data() {
    return {
      fixedNavbar: false,
    };
  },
  computed: {
    favoriteCount() {
      return this.$store.state.favorites.length;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      this.fixedNavbar = scrollTop > 0;
    },
  },
};
  </script>
  
  <style lang="scss" scoped>
  .navbar {
    background-color: black;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: top 0.8s ease; 
  }

  .navbar.scrolled {
  background-color: transparent;
}
  
  .logo {
    font-size: 30px;
    font-weight: bold;
    color: red;
    font-family:"Montserrat"
  }
  
  .nav-links {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  .nav-link {
    margin-left: 20px;
  }
  
  .nav-link a {
    color: white;
    text-decoration: none;
  }
  
  .nav-link a:hover {
    text-decoration: underline;
  }
  
  .navbar-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }

  .badge {
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  font-weight: bold;
  margin-left: 5px;
}
  </style>
  