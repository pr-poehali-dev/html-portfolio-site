
import React from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="font-sans">
      {/* Навигация */}
      <nav className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">Портфолио</div>
          <div className="hidden md:flex gap-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900">Обо мне</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900">Навыки</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">Проекты</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Контакты</a>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" />
          </Button>
        </div>
      </nav>

      {/* HTML Код */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Исходный HTML код</h2>
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <pre className="bg-gray-900 text-gray-300 p-6 overflow-x-auto text-sm">
{`<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Моё Портфолио</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Навигация */
        .navbar {
            background-color: #fff;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
        }
        
        .navbar .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: #333;
            text-decoration: none;
        }
        
        .nav-links {
            display: flex;
            list-style: none;
        }
        
        .nav-links li {
            margin-left: 30px;
        }
        
        .nav-links a {
            text-decoration: none;
            color: #555;
            transition: color 0.3s;
        }
        
        .nav-links a:hover {
            color: #0066cc;
        }
        
        /* Главный раздел */
        .hero {
            background-color: #f9f9f9;
            padding: 100px 0;
            text-align: center;
        }
        
        .hero h1 {
            font-size: 2.5rem;
            margin-bottom: 20px;
            color: #222;
        }
        
        .hero p {
            font-size: 1.2rem;
            color: #666;
            max-width: 700px;
            margin: 0 auto 30px;
        }
        
        .btn {
            display: inline-block;
            background-color: #0066cc;
            color: white;
            padding: 12px 24px;
            border-radius: 4px;
            text-decoration: none;
            font-weight: bold;
            transition: background-color 0.3s;
        }
        
        .btn:hover {
            background-color: #0052a3;
        }
        
        .btn-outline {
            background-color: transparent;
            color: #0066cc;
            border: 2px solid #0066cc;
            margin-left: 15px;
        }
        
        .btn-outline:hover {
            background-color: #0066cc;
            color: white;
        }
        
        /* О себе */
        .about {
            padding: 80px 0;
            background-color: white;
        }
        
        .section-title {
            text-align: center;
            font-size: 2rem;
            margin-bottom: 60px;
            color: #222;
        }
        
        .about-content {
            max-width: 800px;
            margin: 0 auto;
            line-height: 1.8;
        }
        
        /* Навыки */
        .skills {
            padding: 80px 0;
            background-color: #f9f9f9;
        }
        
        .skills-container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin-top: 40px;
        }
        
        .skill-category {
            flex: 0 0 calc(33.333% - 20px);
            background: white;
            border-radius: 8px;
            padding: 30px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            margin-bottom: 30px;
        }
        
        .skill-category h3 {
            margin-bottom: 20px;
            font-size: 1.3rem;
            color: #333;
            display: flex;
            align-items: center;
        }
        
        .skill-icon {
            background-color: #e6f0ff;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
        }
        
        .skill-list {
            list-style: none;
        }
        
        .skill-list li {
            margin-bottom: 10px;
            padding-left: 20px;
            position: relative;
        }
        
        .skill-list li:before {
            content: "✓";
            color: #0066cc;
            position: absolute;
            left: 0;
        }
        
        /* Проекты */
        .projects {
            padding: 80px 0;
            background-color: white;
        }
        
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 30px;
        }
        
        .project-card {
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s, box-shadow 0.3s;
        }
        
        .project-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
        }
        
        .project-img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        
        .project-content {
            padding: 20px;
        }
        
        .project-title {
            font-size: 1.3rem;
            margin-bottom: 10px;
        }
        
        .project-description {
            color: #666;
            margin-bottom: 15px;
        }
        
        .project-tags {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 15px;
        }
        
        .tag {
            background-color: #e6f0ff;
            color: #0066cc;
            padding: 5px 10px;
            border-radius: 15px;
            font-size: 0.8rem;
            margin-right: 8px;
            margin-bottom: 8px;
        }
        
        .project-links {
            display: flex;
        }
        
        .project-link {
            display: inline-flex;
            align-items: center;
            background-color: white;
            color: #333;
            border: 1px solid #ddd;
            padding: 8px 15px;
            border-radius: 4px;
            text-decoration: none;
            font-size: 0.9rem;
            margin-right: 10px;
        }
        
        .project-link:hover {
            background-color: #f5f5f5;
        }
        
        /* Контакты */
        .contact {
            padding: 80px 0;
            background-color: #f9f9f9;
        }
        
        .social-links {
            display: flex;
            justify-content: center;
            margin-bottom: 40px;
        }
        
        .social-link {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #f1f1f1;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 10px;
            text-decoration: none;
            color: #333;
            transition: background-color 0.3s;
        }
        
        .social-link:hover {
            background-color: #e1e1e1;
        }
        
        .contact-form {
            max-width: 600px;
            margin: 0 auto;
            background-color: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-label {
            display: block;
            margin-bottom: 8px;
            font-weight: 600;
            color: #444;
            font-size: 0.9rem;
        }
        
        .form-input {
            width: 100%;
            padding: 12px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-size: 1rem;
        }
        
        .form-input:focus {
            outline: none;
            border-color: #0066cc;
            box-shadow: 0 0 0 2px rgba(0,102,204,0.2);
        }
        
        .form-textarea {
            resize: vertical;
            min-height: 120px;
        }
        
        .btn-submit {
            width: 100%;
            cursor: pointer;
            border: none;
        }
        
        /* Футер */
        .footer {
            background-color: #222;
            color: #fff;
            padding: 30px 0;
            text-align: center;
        }
        
        .footer p {
            margin-bottom: 10px;
        }
        
        /* Медиа запросы */
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
            
            .skill-category {
                flex: 0 0 100%;
            }
            
            .projects-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- Навигация -->
    <header class="navbar">
        <div class="container">
            <a href="#" class="logo">Портфолио</a>
            <ul class="nav-links">
                <li><a href="#about">Обо мне</a></li>
                <li><a href="#skills">Навыки</a></li>
                <li><a href="#projects">Проекты</a></li>
                <li><a href="#contact">Контакты</a></li>
            </ul>
        </div>
    </header>

    <!-- Главный раздел -->
    <section class="hero">
        <div class="container">
            <h1>Привет, я <span style="color: #0066cc;">Иван Иванов</span></h1>
            <p>Frontend-разработчик, специализирующийся на создании современных и отзывчивых веб-приложений.</p>
            <a href="#contact" class="btn">Связаться со мной</a>
            <a href="#" class="btn btn-outline">Скачать резюме</a>
        </div>
    </section>

    <!-- О себе -->
    <section class="about" id="about">
        <div class="container">
            <h2 class="section-title">Обо мне</h2>
            <div class="about-content">
                <p>Я frontend-разработчик с опытом более 5 лет в создании современных веб-приложений. Моя страсть — разрабатывать интуитивно понятные и красивые пользовательские интерфейсы, которые решают реальные проблемы.</p>
                <br>
                <p>В своей работе я использую современные инструменты и фреймворки, такие как React, TypeScript и Tailwind CSS. Я постоянно изучаю новые технологии и подходы, чтобы создавать лучшие продукты.</p>
                <br>
                <p>Когда я не пишу код, я увлекаюсь фотографией, походами и чтением технической литературы.</p>
            </div>
        </div>
    </section>

    <!-- Навыки -->
    <section class="skills" id="skills">
        <div class="container">
            <h2 class="section-title">Мои навыки</h2>
            <div class="skills-container">
                <div class="skill-category">
                    <h3><span class="skill-icon">📱</span>Frontend</h3>
                    <ul class="skill-list">
                        <li>React, Vue.js</li>
                        <li>JavaScript, TypeScript</li>
                        <li>HTML5, CSS3, SASS</li>
                        <li>Tailwind CSS, Bootstrap</li>
                    </ul>
                </div>
                
                <div class="skill-category">
                    <h3><span class="skill-icon">🖥️</span>Backend</h3>
                    <ul class="skill-list">
                        <li>Node.js, Express</li>
                        <li>REST API</li>
                        <li>MongoDB, PostgreSQL</li>
                        <li>Firebase, Supabase</li>
                    </ul>
                </div>
                
                <div class="skill-category">
                    <h3><span class="skill-icon">🛠️</span>Инструменты</h3>
                    <ul class="skill-list">
                        <li>Git, GitHub</li>
                        <li>Docker</li>
                        <li>Webpack, Vite</li>
                        <li>VS Code, Figma</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Проекты -->
    <section class="projects" id="projects">
        <div class="container">
            <h2 class="section-title">Мои проекты</h2>
            <div class="projects-grid">
                <!-- Проект 1 -->
                <div class="project-card">
                    <img src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Project 1" class="project-img">
                    <div class="project-content">
                        <h3 class="project-title">Онлайн-магазин</h3>
                        <p class="project-description">Полнофункциональный интернет-магазин с корзиной, оформлением заказа и интеграцией платежной системы.</p>
                        <div class="project-tags">
                            <span class="tag">React</span>
                            <span class="tag">Redux</span>
                            <span class="tag">Firebase</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link">Демо</a>
                            <a href="#" class="project-link">Код</a>
                        </div>
                    </div>
                </div>
                
                <!-- Проект 2 -->
                <div class="project-card">
                    <img src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Project 2" class="project-img">
                    <div class="project-content">
                        <h3 class="project-title">Система управления задачами</h3>
                        <p class="project-description">Приложение для управления проектами с функциями создания задач, установки сроков и совместной работы.</p>
                        <div class="project-tags">
                            <span class="tag">Vue.js</span>
                            <span class="tag">Vuex</span>
                            <span class="tag">Node.js</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link">Демо</a>
                            <a href="#" class="project-link">Код</a>
                        </div>
                    </div>
                </div>
                
                <!-- Проект 3 -->
                <div class="project-card">
                    <img src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Project 3" class="project-img">
                    <div class="project-content">
                        <h3 class="project-title">Погодное приложение</h3>
                        <p class="project-description">Интерактивное приложение с прогнозом погоды, использующее данные из API и геолокацию.</p>
                        <div class="project-tags">
                            <span class="tag">JavaScript</span>
                            <span class="tag">API</span>
                            <span class="tag">CSS3</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link">Демо</a>
                            <a href="#" class="project-link">Код</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Контакты -->
    <section class="contact" id="contact">
        <div class="container">
            <h2 class="section-title">Связаться со мной</h2>
            <div class="social-links">
                <a href="#" class="social-link">✉️</a>
                <a href="#" class="social-link">🐙</a>
                <a href="#" class="social-link">📱</a>
                <a href="#" class="social-link">🐦</a>
            </div>
            <form class="contact-form">
                <div class="form-group">
                    <label for="name" class="form-label">Имя</label>
                    <input type="text" id="name" class="form-input" placeholder="Ваше имя">
                </div>
                <div class="form-group">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" id="email" class="form-input" placeholder="your.email@example.com">
                </div>
                <div class="form-group">
                    <label for="message" class="form-label">Сообщение</label>
                    <textarea id="message" class="form-input form-textarea" placeholder="Ваше сообщение..."></textarea>
                </div>
                <button type="submit" class="btn btn-submit">Отправить сообщение</button>
            </form>
        </div>
    </section>

    <!-- Футер -->
    <footer class="footer">
        <div class="container">
            <p>© 2023 Иван Иванов. Все права защищены.</p>
            <p>Сделано с ❤ и чистым HTML, CSS</p>
        </div>
    </footer>
</body>
</html>`}
              </pre>
            </CardContent>
          </Card>
        </div>
      </section>
          
      {/* Реальный вывод содержимого */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Результат HTML</h2>
          <div className="border p-8 rounded-xl shadow-md">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white border-b py-4 mb-8">
                <div className="flex justify-between items-center">
                  <div className="text-xl font-bold">Портфолио</div>
                  <div className="hidden md:flex space-x-6 text-gray-600">
                    <span>Обо мне</span>
                    <span>Навыки</span>
                    <span>Проекты</span>
                    <span>Контакты</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 py-12 px-6 text-center rounded-lg mb-8">
                <h1 className="text-3xl font-bold mb-4">
                  Привет, я <span className="text-blue-600">Иван Иванов</span>
                </h1>
                <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                  Frontend-разработчик, специализирующийся на создании современных и отзывчивых веб-приложений.
                </p>
                <div className="flex justify-center gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700">Связаться со мной</Button>
                  <Button variant="outline">Скачать резюме</Button>
                </div>
              </div>
              
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Обо мне</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Frontend-разработчик с опытом более 5 лет в создании современных веб-приложений...
                </p>
              </div>
              
              <div className="mb-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Навыки</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <h3 className="font-semibold mb-2">Frontend</h3>
                    <ul className="text-sm text-gray-600">
                      <li>React, Vue.js</li>
                      <li>JavaScript, TypeScript</li>
                      <li>HTML5, CSS3, SASS</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <h3 className="font-semibold mb-2">Backend</h3>
                    <ul className="text-sm text-gray-600">
                      <li>Node.js, Express</li>
                      <li>REST API</li>
                      <li>MongoDB, PostgreSQL</li>
                    </ul>
                  </div>
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <h3 className="font-semibold mb-2">Инструменты</h3>
                    <ul className="text-sm text-gray-600">
                      <li>Git, GitHub</li>
                      <li>Docker</li>
                      <li>Webpack, Vite</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-4">Мои проекты</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-100 flex items-center justify-center">
                      <Icon name="Image" className="w-10 h-10 text-gray-400" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold">Онлайн-магазин</h3>
                      <p className="text-sm text-gray-600 mb-2">Полнофункциональный интернет-магазин с корзиной...</p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Демо</Button>
                        <Button size="sm" variant="outline">Код</Button>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-100 flex items-center justify-center">
                      <Icon name="Image" className="w-10 h-10 text-gray-400" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold">Система управления задачами</h3>
                      <p className="text-sm text-gray-600 mb-2">Приложение для управления проектами...</p>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Демо</Button>
                        <Button size="sm" variant="outline">Код</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 text-white py-4 px-6 text-center rounded-lg">
                <p>© 2023 Иван Иванов. Все права защищены.</p>
                <p className="text-sm">Сделано с ❤ и чистым HTML, CSS</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
