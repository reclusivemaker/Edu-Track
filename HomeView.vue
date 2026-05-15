<template>
  <div class="home-view">
    <header class="navbar">
      <div class="logo">EduTrack</div>

      <nav>
        <router-link to="/" class="nav-link" active-class="active">
          Home
        </router-link>

        <router-link to="/subject" class="nav-link" active-class="active">
          Subject
        </router-link>

        <router-link to="/calculator" class="nav-link" active-class="active">
          Calculator
        </router-link>

        <router-link to="/notes" class="nav-link" active-class="active">
          Notes
        </router-link>
      </nav>
    </header>

    <main>
      <section class="hero">
        <h1>
          Welcome,
          <span id="student-name">{{ studentName }}</span
          >!
        </h1>

        <p id="greeting" class="subtitle">
          Track your academic progress in one place
        </p>
      </section>

      <section class="stats-section">
        <div class="container">
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-number">{{ totalSubjects }}</div>
              <div class="stat-label">Subjects</div>
            </div>

            <div class="stat-card">
              <div class="stat-number">{{ average }}</div>
              <div class="stat-label">Average Grade</div>
            </div>

            <div class="stat-card">
              <div class="stat-number">{{ gpa }}</div>
              <div class="stat-label">GPA (out of 4.0)</div>
            </div>

            <div class="stat-card">
              <div class="stat-number">{{ credits }}</div>
              <div class="stat-label">Total Credits</div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p>
        &copy; 2026 EduTrack . Level 3 IgaNow tech program internship
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "HomeView",

  data() {
    return {
      studentName: "Student",
      totalSubjects: 4,
      average: "A",
      gpa: 3.8,
      credits: 11,
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home-view {
  min-height: 100vh;
  background: #f5f7fb;
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
}

.navbar {
  background: #1e3a8a;
  color: white;
  padding: 16px 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
}

nav {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: 0.3s;
}

.nav-link:hover,
.active {
  color: #facc15;
}

.hero {
  text-align: center;
  padding: 70px 20px 40px;
}

.hero h1 {
  font-size: 42px;
  margin-bottom: 15px;
  color: #111827;
}

.hero span {
  color: #2563eb;
}

.subtitle {
  font-size: 18px;
  color: #6b7280;
}

.stats-section {
  padding: 30px 20px 60px;
}

.container {
  max-width: 1100px;
  margin: auto;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
}

.stat-card {
  background: white;
  padding: 30px;
  border-radius: 14px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
  transition: 0.3s;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 34px;
  font-weight: bold;
  color: #2563eb;
  margin-bottom: 10px;
}

.stat-label {
  color: #6b7280;
  font-size: 16px;
}

.footer {
  margin-top: auto;
  background: #111827;
  color: white;
  text-align: center;
  padding: 18px;
  font-size: 14px;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 15px;
  }

  .hero h1 {
    font-size: 32px;
  }
}
</style>