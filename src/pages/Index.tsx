import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import { Slider } from '@/components/ui/slider';

const Index = () => {
  const [clients, setClients] = useState([50]);
  const [avgCommission, setAvgCommission] = useState([1000]);

  const monthlyIncome = clients[0] * avgCommission[0] * 0.5;
  const yearlyIncome = monthlyIncome * 12;

  const benefits = [
    {
      icon: 'TrendingUp',
      title: 'Высокая комиссия 50%',
      description: 'Получайте половину от каждой комиссии, которую приносит ваш клиент'
    },
    {
      icon: 'Zap',
      title: 'Быстрые выплаты',
      description: 'Моментальные выплаты на ваш счёт без задержек и скрытых комиссий'
    },
    {
      icon: 'Users',
      title: 'Персональный менеджер',
      description: 'Личный менеджер поможет на всех этапах работы с клиентами'
    },
    {
      icon: 'BarChart3',
      title: 'Детальная аналитика',
      description: 'Отслеживайте все метрики и доходы в удобном личном кабинете'
    },
    {
      icon: 'Sparkles',
      title: 'Маркетинговые материалы',
      description: 'Готовые шаблоны, баннеры и промо-материалы для привлечения клиентов'
    },
    {
      icon: 'Award',
      title: 'Бонусы и конкурсы',
      description: 'Дополнительные вознаграждения за выполнение планов и участие в акциях'
    }
  ];

  const conditions = [
    {
      icon: 'CheckCircle2',
      title: 'Без вложений',
      description: 'Начните зарабатывать прямо сейчас, никаких стартовых взносов'
    },
    {
      icon: 'Clock',
      title: 'Гибкий график',
      description: 'Работайте в удобное время из любой точки мира'
    },
    {
      icon: 'Shield',
      title: 'Честные условия',
      description: 'Прозрачная схема работы и гарантированные выплаты'
    },
    {
      icon: 'Rocket',
      title: 'Быстрый старт',
      description: 'Регистрация за 2 минуты, начните работать уже сегодня'
    }
  ];

  const faqs = [
    {
      question: 'Как стать партнёром?',
      answer: 'Заполните форму регистрации ниже, и мы свяжемся с вами в течение 24 часов. После одобрения заявки вы получите доступ к личному кабинету и всем необходимым материалам.'
    },
    {
      question: 'Как рассчитывается вознаграждение?',
      answer: 'Вы получаете 50% от каждой комиссии, которую мы зарабатываем на клиентах, приведённых вами. Выплаты происходят автоматически каждую неделю.'
    },
    {
      question: 'Есть ли минимальная сумма для вывода?',
      answer: 'Минимальная сумма для вывода составляет 1000 рублей. Вывод средств доступен на банковские карты, электронные кошельки и криптовалюту.'
    },
    {
      question: 'Нужен ли опыт в продажах?',
      answer: 'Нет, опыт не требуется. Мы предоставим вам все необходимые обучающие материалы, скрипты продаж и поддержку персонального менеджера.'
    },
    {
      question: 'Могу ли я работать партнёром, если у меня уже есть основная работа?',
      answer: 'Конечно! Наша партнёрская программа подходит для работы в свободное время. Вы сами выбираете удобный график и нагрузку.'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]" />
        
        <div className="relative max-w-6xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Icon name="Sparkles" className="text-white" size={20} />
            <span className="text-white/90 font-medium">Эксклюзивное предложение</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Предложение для партнёров<br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              с высокой ставкой вознаграждения
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="text-7xl sm:text-8xl font-black text-white">50%</div>
            <div className="text-left">
              <div className="text-white/90 text-lg">от всех</div>
              <div className="text-white font-semibold text-xl">комиссий</div>
            </div>
          </div>
          
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            Зарабатывайте вместе с нами. Приводите клиентов и получайте половину от каждой сделки без ограничений по доходу.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 rounded-full font-semibold shadow-xl hover:scale-105 transition-transform">
              <a href="#registration">Стать партнёром</a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full font-semibold">
              <a href="#calculator">Рассчитать доход</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Преимущества работы с нами
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Мы создали идеальные условия для роста вашего дохода
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={benefit.icon as any} className="text-white" size={28} />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Условия партнёрской программы
            </h2>
            <p className="text-muted-foreground text-lg">
              Простые и прозрачные условия для всех
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {conditions.map((condition, index) => (
              <div 
                key={index} 
                className="flex gap-4 p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                    <Icon name={condition.icon as any} className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{condition.title}</h3>
                  <p className="text-muted-foreground">{condition.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Калькулятор дохода партнёра
            </h2>
            <p className="text-muted-foreground text-lg">
              Посмотрите, сколько вы можете зарабатывать
            </p>
          </div>

          <Card className="bg-gradient-to-br from-card to-muted/20 border-2 border-primary/20 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">Рассчитайте свой потенциальный доход</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-base font-semibold">Количество приведённых клиентов</Label>
                  <span className="text-3xl font-bold text-primary">{clients[0]}</span>
                </div>
                <Slider 
                  value={clients} 
                  onValueChange={setClients}
                  min={1}
                  max={200}
                  step={1}
                  className="py-4"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <Label className="text-base font-semibold">Средняя комиссия с клиента (₽)</Label>
                  <span className="text-3xl font-bold text-secondary">{avgCommission[0].toLocaleString()}</span>
                </div>
                <Slider 
                  value={avgCommission} 
                  onValueChange={setAvgCommission}
                  min={500}
                  max={10000}
                  step={100}
                  className="py-4"
                />
              </div>

              <div className="pt-6 border-t border-border">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl">
                    <div className="text-sm text-muted-foreground mb-2">Доход в месяц</div>
                    <div className="text-4xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {monthlyIncome.toLocaleString()} ₽
                    </div>
                  </div>
                  <div className="text-center p-6 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl">
                    <div className="text-sm text-muted-foreground mb-2">Доход в год</div>
                    <div className="text-4xl font-black bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                      {yearlyIncome.toLocaleString()} ₽
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  * Расчёт приблизительный. Реальный доход зависит от активности ваших клиентов
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Часто задаваемые вопросы
            </h2>
            <p className="text-muted-foreground text-lg">
              Ответы на популярные вопросы о партнёрской программе
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-2xl px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="registration" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Начните зарабатывать уже сегодня
            </h2>
            <p className="text-muted-foreground text-lg">
              Заполните форму и мы свяжемся с вами в течение 24 часов
            </p>
          </div>

          <Card className="bg-card shadow-2xl border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Форма регистрации партнёра</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Имя *</Label>
                    <Input id="firstName" placeholder="Иван" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Фамилия *</Label>
                    <Input id="lastName" placeholder="Иванов" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="ivan@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон *</Label>
                  <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Есть ли у вас опыт в продажах?</Label>
                  <Input id="experience" placeholder="Расскажите о вашем опыте" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="source">Откуда вы узнали о нас?</Label>
                  <Input id="source" placeholder="Социальные сети, реклама, друзья..." />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold text-lg py-6 rounded-full shadow-lg hover:scale-105 transition-transform"
                >
                  Отправить заявку
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Партнёрская программа. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
