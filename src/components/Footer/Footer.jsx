import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Создано Ивановым Иваном</p>
    </footer>
  );
}