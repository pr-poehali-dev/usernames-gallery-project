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
  themeColor: string;
}

const usernames: Username[] = [
  {
    id: 1,
    username: '@MartinaNavratilova',
    name: 'Мартина Навратилова',
    category: 'Sports',
    statusLine: 'Symbol of absolute dominance',
    narrative: 'Navratilova's name is an era. Eighteen Grand Slam singles titles, 332 weeks at the top of the world ranking, and absolute dominance in women's tennis of the late 20th century. But these are not just numbers — this is a story about a woman who changed the rules of the game, broke stereotypes and became the voice of an entire generation. Owning this username means owning a piece of sports legend that lives beyond time.',
    image: 'https://cdn.poehali.dev/files/i (1) (7).jpeg',
    wikipedia: 'https://en.wikipedia.org/wiki/Martina_Navratilova',
    themeColor: '220 18% 8%',
    keyLegacy: [
      '332 weeks ranked World No. 1',
      '18 Grand Slam singles titles',
      '59 Grand Slam titles (all categories)',
      'LGBTQ+ rights activist'
    ]
  },
  {
    id: 2,
    username: '@AlOerter',
    name: 'Al Oerter',
    category: 'Sports',
    statusLine: 'Standard of Olympic perfection',
    narrative: 'Four consecutive Olympics. Four gold medals in discus throw. No one in track and field history has repeated this winning streak. Oerter is a name written in Olympic legend in golden letters. This is not just an athlete — this is the standard of consistency, willpower and flawless technique over twelve years.',
    image: 'https://cdn.poehali.dev/files/149019842_4709286_Al_Oerter_1495190480_95047.jpg',
    wikipedia: 'https://en.wikipedia.org/wiki/Al_Oerter',
    themeColor: '200 25% 12%',
    keyLegacy: [
      'Four-time Olympic champion',
      'Gold medals at 1956–1968 Games',
      'Only athlete in history with such achievements',
      'Four Olympic records'
    ]
  },
  {
    id: 3,
    username: '@FannyBlankersKoen',
    name: 'Fanny Blankers-Koen',
    category: 'Sports',
    statusLine: 'The Flying Housewife who changed the world',
    narrative: 'Mother of two children. Thirty years old. Four gold medals at one Olympics. Fanny shattered the myth that motherhood is incompatible with professional sports. In 1948, she became the symbol of a new era — strong, independent, invincible. Her name is a challenge to prejudice and proof that women can be absolutely anything.',
    image: 'https://cdn.poehali.dev/files/180426095255-fanny-blankers-koen-athlete-of-the-century-trophy.jpg',
    wikipedia: 'https://en.wikipedia.org/wiki/Fanny_Blankers-Koen',
    themeColor: '25 35% 10%',
    keyLegacy: [
      '4 gold medals at 1948 Olympics',
      'First woman with four victories at one Games',
      'World records in running and jumping',
      'Shattered stereotypes about women in sports'
    ]
  },
  {
    id: 4,
    username: '@DorothyDandridge',
    name: 'Dorothy Dandridge',
    category: 'Cinema',
    statusLine: 'First star to break racial barriers',
    narrative: 'Hollywood in the 1950s was a place where skin color determined your fate. Dorothy Dandridge became the first African American woman nominated for an Academy Award for Best Actress. Her beauty, talent and willpower opened the door for an entire generation of Black actors. The Dandridge name is a story of courage, unbreakable will and pioneering spirit.',
    image: 'https://cdn.poehali.dev/files/i (1) (8).jpeg',
    wikipedia: 'https://en.wikipedia.org/wiki/Dorothy_Dandridge',
    themeColor: '0 0% 8%',
    keyLegacy: [
      'First African American Best Actress Oscar nominee (1955)',
      'Star of "Carmen Jones"',
      'Pioneer of Black rights struggle in Hollywood',
      'Style and elegance icon of the 1950s'
    ]
  },
  {
    id: 5,
    username: '@RosalindFranklin',
    name: 'Rosalind Franklin',
    category: 'Science',
    statusLine: 'Hidden architect of DNA',
    narrative: 'Her work unlocked the secret of life. The famous "Photo 51" — an X-ray image of DNA structure — became the key to one of the greatest scientific discoveries of the 20th century. But history didn't preserve her name as it should have. Rosalind Franklin is a name that should be in every biology textbook. Owning her username is an act of justice.',
    image: 'https://cdn.poehali.dev/files/file-20180424-57598-utjjlz.jpg',
    wikipedia: 'https://en.wikipedia.org/wiki/Rosalind_Franklin',
    themeColor: '210 20% 10%',
    keyLegacy: [
      'Author of "Photo 51" of DNA structure',
      'Key contribution to double helix discovery',
      'Pioneer of X-ray crystallography',
      'Virus structure research'
    ]
  },
  {
    id: 6,
    username: '@BabeZaharias',
    alternativeUsername: '@MildredDidrikson',
    name: 'Babe Didrikson Zaharias',
    category: 'Sports',
    statusLine: 'Greatest all-around female athlete of the century',
    narrative: 'Track and field. Basketball. Baseball. Golf. Babe Zaharias didn't just win — she dominated every sport she touched. Two Olympic gold medals, ten LPGA titles, and countless records. Her name is synonymous with versatility. This is not just an athlete. This is a 20th century legend.',
    image: 'https://cdn.poehali.dev/files/S600xU_2x.jpeg',
    wikipedia: 'https://en.wikipedia.org/wiki/Babe_Didrikson_Zaharias',
    themeColor: '30 40% 12%',
    keyLegacy: [
      '2 gold and 1 silver medals at 1932 Olympics',
      '10 LPGA golf titles',
      'Success in basketball, baseball and track & field',
      'Named greatest female athlete of first half of 20th century'
    ]
  },
  {
    id: 7,
    username: '@GordonParks',
    name: 'Gordon Parks',
    category: 'Art',
    statusLine: 'Visual chronicler of an era of change',
    narrative: 'Gordon Parks' camera captured the history of an entire era. First African American photographer for Life Magazine, director of the cult film "Shaft", documentarian of the civil rights movement — this is a man who used art as a weapon against injustice. His photographs changed the perception of racial issues in America. The Parks name is part of humanity's visual heritage.',
    image: 'https://cdn.poehali.dev/files/01parks1-facebookJumbo-v2.jpg',
    wikipedia: 'https://en.wikipedia.org/wiki/Gordon_Parks',
    themeColor: '35 25% 8%',
    keyLegacy: [
      'First African American Life Magazine photographer',
      'Director of cult film "Shaft" (1971)',
      'Civil rights movement documentarian',
      'Author, composer and activist'
    ]
  },
  {
    id: 8,
    username: '@LindaCarrollHamilton',
    name: 'Linda Hamilton',
    category: 'Cinema',
    statusLine: 'Sarah Connor — icon of strength and survival',
    narrative: 'When "The Terminator" hit screens in 1984, the world saw a new type of heroine. Linda Hamilton created the image of Sarah Connor — a woman who transformed from an ordinary waitress into an invincible warrior, defender of humanity's future. Her transformation in the second film became the standard for an actress's physical and psychological preparation for a role. Hamilton didn't just play a character — she created a cultural phenomenon that redefined the place of women in action cinema.',
    image: 'https://cdn.poehali.dev/files/S600xU_2x (1).jpeg',
    wikipedia: 'https://en.wikipedia.org/wiki/Linda_Hamilton',
    themeColor: '0 0% 5%',
    keyLegacy: [
      'Creator of iconic Sarah Connor character',
      'Star of "Terminator" franchise (1984–2019)',
      'Revolutionized female roles in action cinema',
      'Standard of actress physical transformation'
    ]
  },
];

const categories = ['All', 'Sports', 'Cinema', 'Science', 'Art'];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [activeTheme, setActiveTheme] = useState('220 18% 8%');
  const cardRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  const filteredUsernames = selectedCategory === 'All' 
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

  useEffect(() => {
    const themeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const id = Number(entry.target.getAttribute('data-id'));
            const user = usernames.find((u) => u.id === id);
            if (user) {
              setActiveTheme(user.themeColor);
            }
          }
        });
      },
      { threshold: [0.5], rootMargin: '-20% 0px -20% 0px' }
    );

    cardRefs.current.forEach((card) => {
      if (card) themeObserver.observe(card);
    });

    return () => themeObserver.disconnect();
  }, [filteredUsernames]);

  useEffect(() => {
    document.documentElement.style.setProperty('--background', activeTheme);
  }, [activeTheme]);

  return (
    <div className="min-h-screen bg-background transition-colors duration-1000">
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
              Own the History
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Exclusive collection of Telegram accounts of legendary figures 
              whose names are written in history with golden letters
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
                            <p className="text-2xl md:text-4xl font-bold font-mono text-primary tracking-tight transition-all duration-300 group-hover/username:scale-105">
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
                              <p className="text-xl md:text-2xl font-bold font-mono text-secondary tracking-tight transition-all duration-300 group-hover/alt:scale-105">
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
                        Key Legacy
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
                          <span className="truncate">{user.username}</span>
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
                          <span className="truncate">{user.alternativeUsername}</span>
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
                For Serious Collectors
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Want to acquire a username from the collection or discuss owning the entire archive? 
                We are open to offers from discerning buyers.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button 
                size="lg"
                className="gap-2 text-lg px-8 py-6"
                onClick={() => window.open('https://t.me/Adkitten', '_blank')}
              >
                <Icon name="Send" size={20} />
                Discuss Acquisition
              </Button>
            </div>

            <p className="text-sm text-muted-foreground pt-8">
              Each username is a unique digital asset, 
              whose story belongs to its owner
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