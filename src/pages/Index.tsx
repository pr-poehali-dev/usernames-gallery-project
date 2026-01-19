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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Martina_Navratilova_2015.jpg/800px-Martina_Navratilova_2015.jpg',
    wikipedia: 'https://en.wikipedia.org/wiki/Martina_Navratilova',
    achievements: [
      'Первая ракетка мира',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Al_Oerter_1968.jpg/800px-Al_Oerter_1968.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Fanny_Blankers-Koen_1948.jpg/800px-Fanny_Blankers-Koen_1948.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Dorothy_Dandridge_-_publicity.jpg/800px-Dorothy_Dandridge_-_publicity.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Rosalind_Franklin.jpg/800px-Rosalind_Franklin.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Babe_Didrikson_1932.jpg/800px-Babe_Didrikson_1932.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Gordon_Parks_NYWTS.jpg/800px-Gordon_Parks_NYWTS.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Linda_B_Buck_in_2009.jpg/800px-Linda_B_Buck_in_2009.jpg',
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
    <div className="min-h-screen bg-gradient-to-b from-[#5a6b4f] to-[#3d4a36]">
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
                Хотите приобрести один из юзернеймов или всю галерею? Просто сделайте предложение и это будет отличная сделка.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  variant="default" 
                  className="gap-2"
                  onClick={() => window.open('https://t.me/Adkitten', '_blank')}
                >
                  <Icon name="Send" size={18} />
                  Связаться
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