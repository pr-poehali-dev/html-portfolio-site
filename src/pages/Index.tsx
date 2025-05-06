
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header/Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gray-800">Моё Портфолио</div>
          <div className="flex gap-6">
            <a href="#about" className="text-gray-600 hover:text-gray-900">Обо мне</a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900">Навыки</a>
            <a href="#projects" className="text-gray-600 hover:text-gray-900">Проекты</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Контакты</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Привет, я <span className="text-blue-600">Иван Иванов</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Frontend-разработчик, специализирующийся на создании современных и отзывчивых веб-приложений.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Связаться со мной
              </Button>
              <Button variant="outline" size="lg">
                Скачать резюме
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
              alt="Profile" 
              className="rounded-full w-64 h-64 mx-auto object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Обо мне</h2>
          <div className="max-w-3xl mx-auto text-gray-600">
            <p className="mb-4">
              Я frontend-разработчик с опытом более 5 лет в создании современных веб-приложений. Моя страсть — разрабатывать интуитивно понятные и красивые пользовательские интерфейсы, которые решают реальные проблемы.
            </p>
            <p className="mb-4">
              В своей работе я использую современные инструменты и фреймворки, такие как React, TypeScript и Tailwind CSS. Я постоянно изучаю новые технологии и подходы, чтобы создавать лучшие продукты.
            </p>
            <p>
              Когда я не пишу код, я увлекаюсь фотографией, походами и чтением технической литературы.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Мои навыки</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Icon name="Code" className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Frontend</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle" className="h-4 w-4 text-green-500" />
                    <span>React, Vue.js</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle" className="h-4 w-4 text-green-500" />
                    <span>JavaScript, TypeScript</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle" className="h-4 w-4 text-green-500" />
                    <span>HTML5, CSS3, SASS</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle" className="h-4 w-4 text-green-500" />
                    <span>Tailwind CSS, Bootstrap</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Icon name="Database" className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Backend</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle" className="h-4 w-4 text-green-500" />
                    <span>Node.js, Express</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle" className="h-4 w-4 text-green-500" />
                    <span>REST API</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle" className="h-4 w-4 text-green-500" />
                    <span>MongoDB, PostgreSQL</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle" className="h-4 w-4 text-green-500" />
                    <span>Firebase, Supabase</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Icon name="Settings" className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Инструменты</h3>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle" className="h-4 w-4 text-green-500" />
                    <span>Git, GitHub</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle" className="h-4 w-4 text-green-500" />
                    <span>Docker</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle" className="h-4 w-4 text-green-500" />
                    <span>Webpack, Vite</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="CheckCircle" className="h-4 w-4 text-green-500" />
                    <span>VS Code, Figma</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Мои проекты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Project 1" 
                className="h-48 w-full object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Онлайн-магазин</h3>
                <p className="text-gray-600 mb-4">Полнофункциональный интернет-магазин с корзиной, оформлением заказа и интеграцией платежной системы.</p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">React</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Redux</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Firebase</span>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex gap-2 items-center">
                    <Icon name="ExternalLink" className="h-4 w-4" />
                    Демо
                  </Button>
                  <Button variant="outline" size="sm" className="flex gap-2 items-center">
                    <Icon name="Github" className="h-4 w-4" />
                    Код
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 2 */}
            <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Project 2" 
                className="h-48 w-full object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Система управления задачами</h3>
                <p className="text-gray-600 mb-4">Приложение для управления проектами с функциями создания задач, установки сроков и совместной работы.</p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Vue.js</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Vuex</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Node.js</span>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex gap-2 items-center">
                    <Icon name="ExternalLink" className="h-4 w-4" />
                    Демо
                  </Button>
                  <Button variant="outline" size="sm" className="flex gap-2 items-center">
                    <Icon name="Github" className="h-4 w-4" />
                    Код
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Project 3 */}
            <Card className="overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <img 
                src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                alt="Project 3" 
                className="h-48 w-full object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Погодное приложение</h3>
                <p className="text-gray-600 mb-4">Интерактивное приложение с прогнозом погоды, использующее данные из API и геолокацию.</p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">JavaScript</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">API</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">CSS3</span>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex gap-2 items-center">
                    <Icon name="ExternalLink" className="h-4 w-4" />
                    Демо
                  </Button>
                  <Button variant="outline" size="sm" className="flex gap-2 items-center">
                    <Icon name="Github" className="h-4 w-4" />
                    Код
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Связаться со мной</h2>
          <div className="max-w-xl mx-auto">
            <div className="flex justify-center mb-8 gap-6">
              <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <Icon name="Mail" className="h-6 w-6 text-gray-700" />
              </a>
              <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <Icon name="Github" className="h-6 w-6 text-gray-700" />
              </a>
              <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <Icon name="Linkedin" className="h-6 w-6 text-gray-700" />
              </a>
              <a href="#" className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                <Icon name="Twitter" className="h-6 w-6 text-gray-700" />
              </a>
            </div>
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Ваше сообщение..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Отправить сообщение</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-gray-300">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Иван Иванов. Все права защищены.</p>
          <p className="mt-2">Сделано с <span className="text-red-500">❤</span> с использованием React и Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
