import { Outlet } from 'react-router-dom';
import './Main.css';

export default function Main() {
  return (
    <main className="main-grid">
      <section className="section">
        <img src="/placeholder.jpg" alt="Example" />
      </section>
      
      <article className="article">
        <Outlet /> {/* Здесь будет отображаться контент страниц */}
      </article>
      
      <aside className="aside">
        <p>Иванов Иван Иванович</p>
      </aside>
    </main>
  );
}