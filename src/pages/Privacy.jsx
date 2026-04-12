export default function Privacy() {
  return (
    <div style={styles.container}>
      <h1>Privacy Policy</h1>

      <p>Welcome to <b>Multiverse AI</b>. Your privacy is important to us.</p>

      <h2>Information We Collect</h2>
      <p>We may collect basic information such as name, email, and usage data.</p>

      <h2>How We Use Information</h2>
      <p>To improve services and user experience.</p>

      <h2>Third-Party Services</h2>
      <p>We may redirect to third-party platforms. We are not responsible for their policies.</p>

      <h2>Cookies</h2>
      <p>Used to improve performance and analytics.</p>

      <h2>Contact</h2>
      <p>support@multiverseaiapp.com</p>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px 10%",
    background: "#fff",
    color: "#111",
    minHeight: "100vh"
  }
};