import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container max-w-5xl relative z-10 text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Система, в которой клиенты<br />
            <span className="text-primary">приходят сами</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-semibold">
            Для риэлторов по новостройкам
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Пройди бесплатный мини-курс из 5 уроков и собери фундамент своей системы продаж в 2026 году
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all hover:scale-105"
              onClick={() => scrollToSection('mini-course')}
            >
              🔵 Получить мини-курс
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground pt-4">
            • Все материалы и бонусы — в Telegram-канале Оксаны
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/50">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold">
                Кто ведёт мини-курс и почему мне можно <span className="text-primary">доверять</span>
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  <strong className="text-foreground">Оксана</strong> — наставник риэлторов, эксперт по первичке и автор системы, которая помогает риэлторам работать спокойно, честно и стабильно зарабатывать 2–5 сделок в месяц.
                </p>
                
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>7 лет на рынке новостроек</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Сильный личный бренд</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Партнёрская модель продаж</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Клиенты приходят по рекомендациям</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Честность и открытость вместо навязывания</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="CheckCircle" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span>Системный подход в маркетинге и работе с покупателем</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <Card className="bg-gradient-to-br from-primary/20 to-secondary/20 border-primary/30 animate-scale-in">
              <CardContent className="p-8 space-y-4">
                <Badge className="bg-primary text-white text-lg px-4 py-2">🔥 Личный кейс</Badge>
                <h3 className="text-4xl md:text-5xl font-bold">52 квартиры</h3>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">Мой путь — не теория. Я прошла всё сама.</p>
                <div className="space-y-3 text-foreground pt-4">
                  <p>За один период я закрыла 52 квартиры в новостройках.</p>
                  <p>Не потому что бегала сутками по показам.</p>
                  <p className="font-semibold text-primary">А потому что выстроила систему:</p>
                  <ul className="space-y-2 pl-4">
                    <li>— честная работа с клиентами</li>
                    <li>— партнёрская модель</li>
                    <li>— личный бренд</li>
                    <li>— доверие, которое не нужно продавать</li>
                  </ul>
                  <p className="pt-4 font-semibold">
                    Эта система работает и в 2026 году — и именно её я передаю своим ученикам и в мини-курсе.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold animate-fade-in">
            Почему старые методы больше <span className="text-primary">не работают</span> в 2026 году
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 pt-8">
            {[
              { icon: "Users", text: "Клиенты выбирают не цену — а человека" },
              { icon: "Ban", text: "Скрипты, дожимы и манипуляции вызывают отторжение" },
              { icon: "Heart", text: "Рынок стал эмоциональным" },
              { icon: "Star", text: "Нужна честность и открытая работа" },
              { icon: "TrendingDown", text: "Риэлтор-продавец проигрывает" },
              { icon: "TrendingUp", text: "Риэлтор-партнёр выигрывает" },
            ].map((item, i) => (
              <Card key={i} className="bg-card border-border hover:border-primary/50 transition-all animate-fade-in hover:scale-105" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardContent className="p-6 flex items-start gap-4">
                  <Icon name={item.icon} className="text-primary flex-shrink-0 mt-1" size={24} />
                  <p className="text-left text-lg">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <p className="text-xl text-primary font-semibold pt-8">
            Чтобы расти в первичке, нужна новая модель — человеческая и системная.
          </p>
        </div>
      </section>

      <section id="mini-course" className="py-20 px-4 bg-card/50">
        <div className="container max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Что ты получишь в <span className="text-primary">мини-курсе</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              5 коротких уроков, которые можно внедрять сразу
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                num: "0",
                title: "Вступление (живое видео)",
                desc: "Знакомство → зачем курс ведёт аватар → как работать с материалами"
              },
              {
                num: "1",
                title: "Кто такой современный риэлтор по первичке",
                desc: "Как изменился покупатель. Что работает сейчас, а что — устарело. Роль риэлтора в 2026."
              },
              {
                num: "2",
                title: "Как продавать себя без продаж",
                desc: "Партнёрская модель. 5 шагов к доверию. 4 ключевые ошибки, которые убивают сделку."
              },
              {
                num: "3",
                title: "Личная упаковка и бренд",
                desc: "Упаковка профиля. Формулы позиционирования. Визуал, шапка, контент. Как сделать так, чтобы профиль сам продавал."
              },
              {
                num: "4",
                title: "Система заявок",
                desc: "Telegram-воронки. Точки входа. Система контента. Как сделать так, чтобы клиенты сами доходили до заявки."
              },
            ].map((lesson, i) => (
              <Card key={i} className="bg-card border-border hover:border-primary/50 transition-all animate-fade-in hover:scale-[1.02]" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardContent className="p-6 md:p-8 flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">{lesson.num}</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{lesson.title}</h3>
                    <p className="text-muted-foreground text-lg">{lesson.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all hover:scale-105"
            >
              Получить доступ к мини-курсу
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container max-w-4xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center animate-fade-in">
            Чем мой подход <span className="text-primary">отличается</span> от остальных
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Партнёрская модель, а не «продажа любой ценой»",
              "Долгосрочные отношения с клиентом",
              "Честность как конкурентное преимущество",
              "Упаковка, которая работает на тебя",
              "Контент, который приносит заявки",
              "Система рекомендаций, которая растёт сама"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={24} />
                <p className="text-lg">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="container max-w-5xl mx-auto">
          <Card className="bg-card/90 border-primary/50 animate-scale-in">
            <CardContent className="p-8 md:p-12 space-y-6">
              <Badge className="bg-secondary text-white text-lg px-4 py-2">💎 Результаты учеников</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Результаты учеников, которые внедряют систему
              </h2>
              
              <div className="space-y-4 text-lg">
                <p>
                  Моя ученица пришла без системы, без воронки, без личного бренда.
                </p>
                <p className="font-semibold text-primary">За один месяц внедрения мы:</p>
                <ul className="space-y-2 pl-4">
                  <li>— упаковали профиль</li>
                  <li>— настроили первые точки входа</li>
                  <li>— сделали системный контент</li>
                  <li>— выстроили партнёрские касания</li>
                </ul>
                <div className="pt-4">
                  <p className="text-4xl font-bold text-primary">1 000 000 ₽</p>
                  <p className="text-muted-foreground">дохода за первый месяц на новостройках</p>
                </div>
                <p className="text-sm text-muted-foreground italic pt-4">
                  Результаты индивидуальны. Но система работает у всех, кто её внедряет.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "Нормальный подход",
                text: "Клиент пришёл «просто посмотреть», в итоге купил квартиру и привёл трёх друзей — из-за нормального человеческого подхода."
              },
              {
                title: "Честная рекомендация",
                text: "Семья выбирала между двумя ЖК — Оксана рекомендовала более выгодный объект, хотя её комиссия была меньше. Через 2 месяца пришла сестра."
              },
              {
                title: "Первые заявки",
                text: "Риэлтор из региона получил первые входящие заявки за 2 недели — только от корректировки позиционирования."
              }
            ].map((item, i) => (
              <Card key={i} className="bg-card border-border hover:border-primary/50 transition-all animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
                <CardContent className="p-6 space-y-3">
                  <h3 className="font-bold text-xl text-primary">{item.title}</h3>
                  <p className="text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container max-w-5xl mx-auto">
          <Card className="bg-gradient-to-br from-secondary/20 to-primary/20 border-secondary/50 animate-scale-in">
            <CardContent className="p-8 md:p-12 space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Хочешь ускориться?</h2>
                <p className="text-2xl font-semibold text-secondary">
                  Забери мою рабочую тетрадь из 32 инструментов риэлтора по первичке
                </p>
                <p className="text-lg text-muted-foreground">
                  Это не PDF «почитать». Это — система действий на каждый день.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">4 категории источников клиентов:</h3>
                  <ul className="space-y-2 pl-4">
                    <li>1. Прямые входящие</li>
                    <li>2. Digital</li>
                    <li>3. Партнёрства</li>
                    <li>4. Личный бренд</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">32 рабочих инструмента:</h3>
                  <ul className="space-y-2 pl-4">
                    <li>— что делать</li>
                    <li>— в какой последовательности</li>
                    <li>— формулировки</li>
                    <li>— примеры сообщений</li>
                    <li>— ежедневные шаги</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-bold">+ 3 бонуса:</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-primary/20 text-primary text-base px-4 py-2">🎁 Честные платежки 2026</Badge>
                  <Badge className="bg-primary/20 text-primary text-base px-4 py-2">🎁 10 сторителлов для риэлтора</Badge>
                  <Badge className="bg-primary/20 text-primary text-base px-4 py-2">🎁 15 диагностических вопросов клиенту</Badge>
                </div>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-border">
                <div>
                  <p className="text-3xl font-bold text-secondary">790 ₽</p>
                  <p className="text-sm text-muted-foreground">(реальная ценность: 5–10 тысяч)</p>
                </div>
                <Button 
                  size="lg" 
                  className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all hover:scale-105"
                >
                  Забрать рабочую тетрадь
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/50">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold">
                Готов работать <span className="text-primary">иначе?</span>
              </h2>
              <p className="text-2xl font-semibold">
                Тогда тебе нужно наставничество 1 на 1
              </p>
              <p className="text-lg text-muted-foreground">
                Мы выстроим твою систему работы в первичке: спокойную, честную и предсказуемую.
              </p>

              <Card className="bg-card border-primary/50">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Что внутри:</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      "упаковка", "позиционирование", "контент", "система входящих",
                      "разбор профиля", "точки входа", "воронки", "партнёрские касания",
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Icon name="CheckCircle" className="text-primary flex-shrink-0" size={16} />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-primary font-bold text-lg pt-4">
                    → рост до 2–5 сделок в месяц
                  </p>
                </CardContent>
              </Card>

              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all hover:scale-105 w-full sm:w-auto"
              >
                Записаться на бесплатный разбор (60 минут)
              </Button>
            </div>

            <Card className="bg-card border-border animate-scale-in">
              <CardContent className="p-6 space-y-6">
                <h3 className="text-2xl font-bold">Как проходит наставничество:</h3>
                <div className="space-y-4">
                  {[
                    { icon: "Calendar", text: "1 созвон в неделю" },
                    { icon: "BookOpen", text: "домашние задания" },
                    { icon: "FileText", text: "примеры, шаблоны, инструкции" },
                    { icon: "UserCheck", text: "проверка профиля" },
                    { icon: "Edit", text: "корректировки по контенту" },
                    { icon: "Sparkles", text: "доступ к маркетологу" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-all">
                      <Icon name={item.icon} className="text-primary flex-shrink-0 mt-1" size={24} />
                      <p className="text-lg">{item.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/30 via-background to-secondary/30">
        <div className="container max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold animate-fade-in">
            Этот мини-курс — первый шаг.<br />
            <span className="text-primary">Дальше начинается твоя система.</span>
          </h2>
          <p className="text-xl text-muted-foreground">Выбери, с чего начать:</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all hover:scale-105"
              onClick={() => scrollToSection('mini-course')}
            >
              Получить мини-курс
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all hover:scale-105"
            >
              Забрать «32 инструмента»
            </Button>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all hover:scale-105"
            >
              Записаться на разбор
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-xl font-bold">Оксана Никитюк</p>
              <div className="flex gap-4 mt-2 justify-center md:justify-start">
                <a href="#" className="text-primary hover:underline flex items-center gap-2">
                  <Icon name="Send" size={18} />
                  Telegram
                </a>
                <a href="#" className="text-primary hover:underline flex items-center gap-2">
                  <Icon name="Youtube" size={18} />
                  YouTube
                </a>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-foreground transition-colors">Публичная оферта</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;