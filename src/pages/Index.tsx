import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Username {
  id: number;
  username: string;
  alternativeUsername?: string;
  name: string;
  category: string;
  statusLine: string;
  narrative: string;
  image: string;
  wikipedia: string;
  keyLegacy: string[];
}

const usernames: Username[] = [
  {
    id: 1,
    username: '@MartinaNavratilova',
    name: 'Мартина Навратилова',
    category: 'Спорт',
    statusLine: 'Символ абсолютного доминирования',
    narrative: 'Имя Навратиловой — это эпоха. Восемнадцать титулов Большого шлема в одиночном разряде, 167 недель на вершине мирового рейтинга, и абсолютное господство в женском теннисе конца XX века. Но это не просто цифры — это история о женщине, которая изменила правила игры, разрушила стереотипы и стала голосом целого поколения. Владение этим юзернеймом — это владение частью спортивной легенды, которая живёт вне времени.',
    image: 'https://cdn.poehali.dev/files/i (1) (7).jpeg',
    wikipedia: 'https://en.wikipedia.org/wiki/Martina_Navratilova',
    keyLegacy: [
      '167 недель первой ракеткой мира',
      '18 побед на турнирах Большого шлема (одиночки)',
      '59 титулов Grand Slam (все категории)',
      'Активистка за права ЛГБТ-сообщества'
    ]
  },
  {
    id: 2,
    username: '@AlOerter',
    name: 'Эл Эртер',
    category: 'Спорт',
    statusLine: 'Эталон олимпийского совершенства',
    narrative: 'Четыре Олимпиады подряд. Четыре золотые медали в метании диска. Никто в истории лёгкой атлетики не повторил эту серию побед. Эртер — это имя, вписанное в олимпийскую легенду золотыми буквами. Это не просто спортсмен — это эталон постоянства, силы воли и безупречной техники на протяжении двенадцати лет.',
    image: 'https://cdn.poehali.dev/files/149019842_4709286_Al_Oerter_1495190480_95047.jpg',
    wikipedia: 'https://en.wikipedia.org/wiki/Al_Oerter',
    keyLegacy: [
      'Четырёхкратный олимпийский чемпион',
      'Победы на Играх 1956–1968',
      'Единственный в истории атлетики с такими результатами',
      'Четыре олимпийских рекорда'
    ]
  },
  {
    id: 3,
    username: '@FannyBlankersKoen',
    name: 'Фанни Бланкерс-Кун',
    category: 'Спорт',
    statusLine: 'Летающая домохозяйка, изменившая мир',
    narrative: 'Мать двоих детей. Тридцать лет. Четыре золотых медали на одной Олимпиаде. Фанни разрушила миф о том, что материнство несовместимо с профессиональным спортом. В 1948 году она стала символом нового времени — сильной, независимой, непобедимой. Её имя — это вызов предрассудкам и доказательство того, что женщины могут быть абсолютно всем.',
    image: 'https://cdn.poehali.dev/files/180426095255-fanny-blankers-koen-athlete-of-the-century-trophy.jpg',
    wikipedia: 'https://en.wikipedia.org/wiki/Fanny_Blankers-Koen',
    keyLegacy: [
      '4 золотые медали на Олимпиаде-1948',
      'Первая женщина с четырьмя победами на одних Играх',
      'Мировые рекорды в беге и прыжках',
      'Разрушила стереотипы о женщинах в спорте'
    ]
  },
  {
    id: 4,
    username: '@DorothyDandridge',
    name: 'Дороти Дэндридж',
    category: 'Кино',
    statusLine: 'Первая звезда, разрушившая расовые барьеры',
    narrative: 'Голливуд 1950-х был местом, где цвет кожи определял твою судьбу. Дороти Дэндридж стала первой афроамериканкой, номинированной на «Оскар» за лучшую женскую роль. Её красота, талант и сила воли открыли дверь целому поколению чернокожих актёров. Имя Дэндридж — это история о мужестве, несломленной воле и первопроходческом духе.',
    image: 'https://cdn.poehali.dev/files/i (1) (8).jpeg',
    wikipedia: 'https://en.wikipedia.org/wiki/Dorothy_Dandridge',
    keyLegacy: [
      'Первая афроамериканка в номинации «Оскар» (1955)',
      'Звезда фильма «Кармен Джонс»',
      'Пионер борьбы за права чернокожих в Голливуде',
      'Икона стиля и элегантности 1950-х'
    ]
  },
  {
    id: 5,
    username: '@RosalindFranklin',
    name: 'Розалинд Франклин',
    category: 'Наука',
    statusLine: 'Скрытый архитектор ДНК',
    narrative: 'Её работа открыла секрет жизни. Знаменитая «Фотография 51» — рентгеновский снимок структуры ДНК — стала ключом к одному из величайших научных открытий XX века. Но история не сохранила её имя так, как следовало бы. Розалинд Франклин — это имя, которое должно быть в каждом учебнике биологии. Владение её юзернеймом — это акт справедливости.',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Rosalind_Franklin.jpg/800px-Rosalind_Franklin.jpg',
    wikipedia: 'https://en.wikipedia.org/wiki/Rosalind_Franklin',
    keyLegacy: [
      'Автор «Фотографии 51» структуры ДНК',
      'Ключевой вклад в открытие двойной спирали',
      'Пионер рентгеновской кристаллографии',
      'Исследования структуры вирусов'
    ]
  },
  {
    id: 6,
    username: '@BabeZaharias',
    alternativeUsername: '@MildredDidrikson',
    name: 'Бейб Дидриксон Захариас',
    category: 'Спорт',
    statusLine: 'Величайшая универсальная спортсменка столетия',
    narrative: 'Лёгкая атлетика. Баскетбол. Бейсбол. Гольф. Бейб Захариас не просто побеждала — она доминировала во всех видах спорта, к которым прикасалась. Две олимпийские золотые медали, десять титулов LPGA и бесконечное количество рекордов. Её имя — синоним слова «универсальность». Это не просто спортсменка. Это легенда XX века.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Babe_Didrikson_1932.jpg/800px-Babe_Didrikson_1932.jpg',
    wikipedia: 'https://en.wikipedia.org/wiki/Babe_Didrikson_Zaharias',
    keyLegacy: [
      '2 золотые и серебряная медали на Олимпиаде-1932',
      '10 титулов LPGA в гольфе',
      'Успех в баскетболе, бейсболе и лёгкой атлетике',
      'Признана величайшей спортсменкой первой половины XX века'
    ]
  },
  {
    id: 7,
    username: '@GordonParks',
    name: 'Гордон Паркс',
    category: 'Искусство',
    statusLine: 'Визуальный летописец эпохи перемен',
    narrative: 'Камера Гордона Паркса запечатлела историю целой эпохи. Первый афроамериканский фотограф Life Magazine, режиссёр культового фильма «Шафт», документалист движения за гражданские права — это человек, который использовал искусство как оружие против несправедливости. Его снимки изменили восприятие расовых проблем в Америке. Имя Паркса — это часть визуального наследия человечества.',
    image: 'https://cdn.poehali.dev/files/file-20180424-57598-utjjlz.jpg',
    wikipedia: 'https://en.wikipedia.org/wiki/Gordon_Parks',
    keyLegacy: [
      'Первый афроамериканский фотограф Life Magazine',
      'Режиссёр культового фильма «Шафт» (1971)',
      'Документалист движения за гражданские права',
      'Автор, композитор и активист'
    ]
  },
  {
    id: 8,
    username: '@LindaCarrollHamilton',
    name: 'Линда Кэрролл Хэмилтон',
    category: 'Наука',
    statusLine: 'Пионер биохимии и наставник поколений',
    narrative: 'Путь женщины в науке XX века был полон барьеров. Линда Кэрролл Хэмилтон преодолела их все. Её исследования в области метаболизма клеток открыли новые горизонты для биохимии, а её наставническая работа вдохновила целое поколение женщин-учёных. Имя Хэмилтон — это символ пути, прокладываемого для тех, кто придёт после.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Linda_B_Buck_in_2009.jpg/800px-Linda_B_Buck_in_2009.jpg',
    wikipedia: 'https://en.wikipedia.org/wiki/Linda_Carroll_Hamilton',
    keyLegacy: [
      'Пионер исследований метаболизма клеток',
      'Прорывной вклад в понимание биохимии',
      'Наставник молодых учёных-женщин',
      'Активистка за равенство в науке'
    ]
  },
];

const categories = ['Все', 'Спорт', 'Кино', 'Наука', 'Искусство'];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  const filteredUsernames = selectedCategory === 'Все' 
    ? usernames 
    : usernames.filter(u => u.category === selectedCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute('data-id'));
            setVisibleCards((prev) => new Set([...prev, id]));
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [filteredUsernames]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="container relative mx-auto px-4 py-24 md:py-32 text-center">
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="inline-block mb-4">
              <Badge variant="outline" className="text-sm font-light tracking-wider border-primary/30 text-primary px-4 py-1.5">
                DIGITAL LEGACY COLLECTION
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              ICONS ARCHIVE
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-light tracking-wide">
              Владение историей
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Эксклюзивная коллекция Telegram-аккаунтов легендарных личностей, 
              чьи имена вписаны в историю золотыми буквами
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-3 justify-center animate-scale-in">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className="transition-all font-medium tracking-wide"
                size="lg"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {filteredUsernames.map((user) => (
            <div
              key={user.id}
              ref={(el) => {
                if (el) cardRefs.current.set(user.id, el);
              }}
              data-id={user.id}
              className={`transition-all duration-700 ${
                visibleCards.has(user.id) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
            >
              <Card 
                className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 h-full"
              >
                <CardContent className="p-0 flex flex-col h-full">
                  {/* Image Section */}
                  <div className="relative h-80 overflow-hidden bg-muted">
                    <img 
                      src={user.image} 
                      alt={user.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500"></div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground font-medium tracking-wider shadow-lg">
                        {user.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8 space-y-6 flex-1 flex flex-col">
                    {/* Username - главный актив */}
                    <div className="relative text-center py-4 border-y border-border overflow-hidden">
                      <div className="space-y-3">
                        <div className="group/username relative">
                          <div className="absolute inset-0 animate-shimmer opacity-0 group-hover/username:opacity-100 transition-opacity duration-500"></div>
                          <a
                            href={`https://t.me/${user.username.replace('@', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative block"
                          >
                            <p className="text-4xl font-bold font-mono text-primary tracking-tight transition-all duration-300 group-hover/username:scale-105">
                              {user.username}
                            </p>
                          </a>
                        </div>
                        {user.alternativeUsername && (
                          <div className="group/alt relative">
                            <div className="absolute inset-0 animate-shimmer opacity-0 group-hover/alt:opacity-100 transition-opacity duration-500"></div>
                            <a
                              href={`https://t.me/${user.alternativeUsername.replace('@', '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="relative block"
                            >
                              <p className="text-2xl font-bold font-mono text-secondary tracking-tight transition-all duration-300 group-hover/alt:scale-105">
                                {user.alternativeUsername}
                              </p>
                            </a>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Name & Status */}
                    <div className="space-y-2 text-center">
                      <h3 className="text-2xl font-bold text-foreground">
                        {user.name}
                      </h3>
                      <p className="text-lg text-primary/90 font-light italic">
                        {user.statusLine}
                      </p>
                    </div>

                    {/* Narrative */}
                    <div className="prose prose-invert max-w-none flex-1">
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {user.narrative}
                      </p>
                    </div>

                    {/* Key Legacy */}
                    <div className="space-y-3 pt-4 border-t border-border">
                      <h4 className="text-xs uppercase tracking-widest text-primary font-semibold">
                        Ключевое наследие
                      </h4>
                      <ul className="space-y-2">
                        {user.keyLegacy.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                            <span className="text-primary mt-1">◆</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="pt-6 border-t border-border">
                      <div className="flex gap-3 mb-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 gap-2 group/btn"
                          onClick={() => window.open(`https://t.me/${user.username.replace('@', '')}`, '_blank')}
                        >
                          <Icon name="Send" size={16} className="transition-transform group-hover/btn:translate-x-0.5" />
                          <span>Telegram</span>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 gap-2 group/btn"
                          onClick={() => window.open(user.wikipedia, '_blank')}
                        >
                          <Icon name="BookOpen" size={16} className="transition-transform group-hover/btn:scale-110" />
                          <span>Wikipedia</span>
                        </Button>
                      </div>
                      {user.alternativeUsername && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full gap-2 group/btn"
                          onClick={() => window.open(`https://t.me/${user.alternativeUsername.replace('@', '')}`, '_blank')}
                        >
                          <Icon name="Send" size={16} className="transition-transform group-hover/btn:translate-x-0.5" />
                          <span>{user.alternativeUsername}</span>
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border bg-gradient-to-b from-transparent to-primary/5">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Для серьёзных коллекционеров
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Хотите приобрести юзернейм из коллекции или обсудить владение всем архивом? 
                Мы открыты для предложений от взыскательных покупателей.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button 
                size="lg"
                className="gap-2 text-lg px-8 py-6"
                onClick={() => window.open('https://t.me/Adkitten', '_blank')}
              >
                <Icon name="Send" size={20} />
                Обсудить приобретение
              </Button>
            </div>

            <p className="text-sm text-muted-foreground pt-8">
              Каждый юзернейм — это уникальный цифровой актив, 
              история которого принадлежит владельцу
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2026 ICONS ARCHIVE — Premium Digital Assets Collection</p>
          </div>
        </div>
      </footer>
    </div>
  );
}