import React from 'react';
import { Outlet } from 'react-router-dom';
import './Main.css';
import exampleImage from '../../assets/section-image.jpg'; // Путь к вашему изображению

export default function Main() {
  return (
    <main className="main-grid">
      <section className="section">
        <img 
          src={exampleImage} 
          alt="Пример изображения" 
          className="section-image"
        />
      </section>
      
      <article className="article">
        <Outlet />
      </article>
      
      <aside className="aside">
        <p>Валевач Олег Сергеевич</p>
      </aside>
    </main>
  );
}