import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Username {
  id: number;
  username: string;
  name: string;
  category: string;
  description: string;
  image: string;
  wikipedia: string;
  achievements: string[];
}

const usernames: Username[] = [
  {
    id: 1,
    username: '@MartinaNavratilova',
    name: 'Мартина Навратилова',
    category: 'Спорт',
    description: 'Легендарная теннисистка',
    image: 'https://cdn.poehali.dev/projects/577b69ef-cbe8-40c5-96ae-e907b1266064/files/33496069-ef50-4eb0-bdad-81dc03dba87a.jpg',
    wikipedia: 'https://en.wikipedia.org/wiki/Martina_Navratilova',
    achievements: [
      '18 титулов Большого шлема в одиночном разряде',
      '31 титул Большого шлема в женском парном разряде',
      '10 титулов смешанного парного разряда',
      'Активистка за права ЛГБТ-сообщества'
    ]
  },
  {
    id: 2,
    username: '@AlOerter',
    name: 'Эл Эртер',
    category: 'Спорт',
    description: 'Легенда легкой атлетики',
    image: 'https://cdn.poehali.dev/projects/577b69ef-cbe8-40c5-96ae-e907b1266064/files/8f48d1c5-b14b-46e0-95d0-596f4bc4ec24.jpg',
    wikipedia: 'https://en.wikipedia.org/wiki/Al_Oerter',
    achievements: [
      'Четырехкратный олимпийский чемпион по метанию диска',
      'Победитель на четырех Олимпиадах подряд (1956-1968)',
      'Единственный спортсмен с такими результатами в метании диска',
      'Установил олимпийские рекорды четыре раза'
    ]
  },
  {
    id: 3,
    username: '@FannyBlankersKoen',
    name: 'Фанни Бланкерс-Кун',
    category: 'Спорт',
    description: 'Летающая домохозяйка',
    image: 'https://cdn.poehali.dev/projects/577b69ef-cbe8-40c5-96ae-e907b1266064/files/dc049f31-92be-4562-b42a-a871d21cfb68.jpg',
    wikipedia: 'https://en.wikipedia.org/wiki/Fanny_Blankers-Koen',
    achievements: [
      'Четыре золотые медали на Олимпиаде 1948 года',
      'Первая женщина, выигравшая четыре золотые медали на одной Олимпиаде',
      'Мировые рекорды в беге и прыжках',
      'Мать двоих детей во время олимпийской победы'
    ]
  },
  {
    id: 4,
    username: '@DorothyDandridge',
    name: 'Дороти Дэндридж',
    category: 'Кино',
    description: 'Голливудская актриса-первопроходец',
    image: 'https://cdn.poehali.dev/projects/577b69ef-cbe8-40c5-96ae-e907b1266064/files/ea98852d-2f0b-4210-976b-686feae19192.jpg',
    wikipedia: 'https://en.wikipedia.org/wiki/Dorothy_Dandridge',
    achievements: [
      'Первая афроамериканка, номинированная на Оскар как лучшая актриса (1955)',
      'Звезда фильма "Кармен Джонс"',
      'Пионер в борьбе за права чернокожих актеров в Голливуде',
      'Икона стиля и красоты 1950-х годов'
    ]
  },
  {
    id: 5,
    username: '@RosalindFranklin',
    name: 'Розалинд Франклин',
    category: 'Наука',
    description: 'Первооткрывательница структуры ДНК',
    image: 'https://cdn.poehali.dev/projects/577b69ef-cbe8-40c5-96ae-e907b1266064/files/c45d546b-b66c-4542-8ba4-529990baefa4.jpg',
    wikipedia: 'https://en.wikipedia.org/wiki/Rosalind_Franklin',
    achievements: [
      'Создала знаменитую "Фотографию 51" структуры ДНК',
      'Ключевой вклад в открытие двойной спирали ДНК',
      'Пионер рентгеновской кристаллографии',
      'Важные исследования структуры вирусов'
    ]
  },
  {
    id: 6,
    username: '@BabeZaharias',
    name: 'Бейб Дидриксон Захариас',
    category: 'Спорт',
    description: 'Величайшая спортсменка XX века',
    image: 'https://cdn.poehali.dev/projects/577b69ef-cbe8-40c5-96ae-e907b1266064/files/16521320-e478-4319-8a61-6e812f142cfc.jpg',
    wikipedia: 'https://en.wikipedia.org/wiki/Babe_Didrikson_Zaharias',
    achievements: [
      'Две золотые и одна серебряная медали на Олимпиаде 1932',
      '10 титулов LPGA в гольфе',
      'Успех в баскетболе, бейсболе и легкой атлетике',
      'Признана величайшей спортсменкой первой половины XX века'
    ]
  },
  {
    id: 7,
    username: '@GordonParks',
    name: 'Гордон Паркс',
    category: 'Искусство',
    description: 'Легендарный фотограф и режиссер',
    image: 'https://cdn.poehali.dev/projects/577b69ef-cbe8-40c5-96ae-e907b1266064/files/97a6693f-b51c-4049-9678-3bbb0e6562af.jpg',
    wikipedia: 'https://en.wikipedia.org/wiki/Gordon_Parks',
    achievements: [
      'Первый афроамериканский фотограф в Life Magazine',
      'Режиссер культового фильма "Шафт" (1971)',
      'Документалист движения за гражданские права',
      'Автор, композитор и активист за социальную справедливость'
    ]
  },
  {
    id: 8,
    username: '@LindaCarrollHamilton',
    name: 'Линда Кэрролл Хэмилтон',
    category: 'Наука',
    description: 'Ученая-новатор в биохимии',
    image: 'https://cdn.poehali.dev/projects/577b69ef-cbe8-40c5-96ae-e907b1266064/files/865fc733-458b-4b84-8a7f-31053a545fc7.jpg',
    wikipedia: 'https://en.wikipedia.org/wiki/Linda_Carroll_Hamilton',
    achievements: [
      'Пионер исследований в области биохимии',
      'Важный вклад в понимание метаболизма клеток',
      'Наставник для молодых ученых-женщин',
      'Активистка за равенство в научном сообществе'
    ]
  },
];

const categories = ['Все', 'Спорт', 'Кино', 'Наука', 'Искусство'];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [showContacts, setShowContacts] = useState(false);

  const filteredUsernames = selectedCategory === 'Все' 
    ? usernames 
    : usernames.filter(u => u.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted/20">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Telegram Usernames</h1>
          <Button 
            variant="ghost" 
            onClick={() => setShowContacts(!showContacts)}
            className="gap-2"
          >
            <Icon name="Mail" size={18} />
            Контакты
          </Button>
        </div>
      </header>

      {/* Contacts Section */}
      {showContacts && (
        <div className="bg-primary/5 border-b animate-fade-in">
          <div className="container mx-auto px-4 py-8">
            <div className="max-w-2xl mx-auto text-center space-y-4">
              <h2 className="text-2xl font-bold">Свяжитесь с нами</h2>
              <p className="text-muted-foreground">
                Хотите добавить свой юзернейм в галерею? Напишите нам!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="outline" className="gap-2">
                  <Icon name="Send" size={18} />
                  Telegram
                </Button>
                <Button variant="outline" className="gap-2">
                  <Icon name="Mail" size={18} />
                  Email
                </Button>
                <Button variant="outline" className="gap-2">
                  <Icon name="MessageCircle" size={18} />
                  Обратная связь
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
          <h2 className="text-5xl font-bold tracking-tight">
            Коллекция юзернеймов <br />
            <span className="text-primary">известных личностей</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Эксклюзивная галерея Telegram-аккаунтов знаменитостей, блогеров и медийных персон
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="container mx-auto px-4 pb-8">
        <div className="flex flex-wrap gap-2 justify-center animate-scale-in">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className="transition-all"
            >
              {category}
            </Button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredUsernames.map((user, index) => (
            <Card 
              key={user.id} 
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={user.image} 
                  alt={user.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <Badge 
                  variant="secondary" 
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm"
                >
                  {user.category}
                </Badge>
              </div>
              
              <CardContent className="p-8 space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Icon name="AtSign" size={24} className="text-primary" />
                    <h3 className="font-bold text-2xl group-hover:text-primary transition-colors">
                      {user.username}
                    </h3>
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">{user.name}</h4>
                  <p className="text-base text-muted-foreground">{user.description}</p>
                </div>

                <div className="space-y-3">
                  <h5 className="font-semibold text-sm uppercase tracking-wide text-primary">Достижения:</h5>
                  <ul className="space-y-2">
                    {user.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Icon name="Award" size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 pt-4 border-t">
                  <Button 
                    variant="default" 
                    className="flex-1 gap-2"
                    onClick={() => window.open(`https://t.me/${user.username.replace('@', '')}`, '_blank')}
                  >
                    <Icon name="Send" size={18} />
                    Telegram
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1 gap-2"
                    onClick={() => window.open(user.wikipedia, '_blank')}
                  >
                    <Icon name="BookOpen" size={18} />
                    Википедия
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>© 2024 Telegram Usernames Gallery. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}