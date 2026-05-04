import React from "react";
import "./App.css";

function App() {
  const steps = [
    { name: "Code", icon: "💻" },
    { name: "Build", icon: "⚙️" },
    { name: "Dockerize", icon: "🐳" },
    { name: "Deploy", icon: "🚀" }
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🚀 DevOps Pipeline</h1>
      <p style={styles.subtitle}>Automating with Docker</p>

      <div style={styles.pipeline}>
        {steps.map((step, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.icon}>{step.icon}</div>
            <h3>{step.name}</h3>
          </div>
        ))}
      </div>

      <div style={styles.footer}>
        <p>Containerized using Docker 🐳 | CI/CD Ready ⚡</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "white",
    height: "100vh",
    textAlign: "center",
    paddingTop: "50px",
    fontFamily: "Arial"
  },
  title: {
    fontSize: "3rem",
    marginBottom: "10px"
  },
  subtitle: {
    color: "#94a3b8",
    marginBottom: "40px"
  },
  pipeline: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap"
  },
  card: {
    background: "#1e293b",
    padding: "20px",
    borderRadius: "10px",
    width: "150px",
    boxShadow: "0 0 15px rgba(0,0,0,0.5)",
    transition: "0.3s"
  },
  icon: {
    fontSize: "2.5rem",
    marginBottom: "10px"
  },
  footer: {
    marginTop: "50px",
    color: "#64748b"
  }
};

export default App;