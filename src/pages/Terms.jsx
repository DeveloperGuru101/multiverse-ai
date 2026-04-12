export default function Terms() {
  return (
    <div style={styles.container}>
      <h1>Terms & Conditions</h1>

      <p>By using <b>Multiverse AI</b>, you agree to the following terms.</p>

      <h2>Use</h2>
      <p>This site is for informational and promotional purposes.</p>

      <h2>Affiliate Disclaimer</h2>
      <p>We may earn commissions via affiliate links.</p>

      <h2>No Guarantees</h2>
      <p>Results may vary.</p>

      <h2>External Links</h2>
      <p>We are not responsible for third-party sites.</p>

      <h2>Liability</h2>
      <p>We are not liable for any losses.</p>

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