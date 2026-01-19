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
}

const usernames: Username[] = [
  { id: 1, username: '@durov', name: 'Павел Дуров', category: 'Технологии', description: 'Основатель Telegram' },
  { id: 2, username: '@varlamov', name: 'Илья Варламов', category: 'Блогеры', description: 'Урбанист, блогер' },
  { id: 3, username: '@ksenia_sobchak', name: 'Ксения Собчак', category: 'Медиа', description: 'Журналист, телеведущая' },
  { id: 4, username: '@eminem', name: 'Eminem', category: 'Музыка', description: 'Рэп-исполнитель' },
  { id: 5, username: '@cristiano', name: 'Криштиану Роналду', category: 'Спорт', description: 'Футболист' },
  { id: 6, username: '@elonmusk', name: 'Илон Маск', category: 'Технологии', description: 'CEO Tesla & SpaceX' },
  { id: 7, username: '@khabib_nurmagomedov', name: 'Хабиб Нурмагомедов', category: 'Спорт', description: 'Боец UFC' },
  { id: 8, username: '@zemfira', name: 'Земфира', category: 'Музыка', description: 'Рок-певица' },
  { id: 9, username: '@yurydud', name: 'Юрий Дудь', category: 'Блогеры', description: 'Журналист, видеоблогер' },
  { id: 10, username: '@timatiofficial', name: 'Тимати', category: 'Музыка', description: 'Рэп-исполнитель' },
  { id: 11, username: '@natgeo', name: 'National Geographic', category: 'Медиа', description: 'Научно-популярный журнал' },
  { id: 12, username: '@wylsacom', name: 'Валентин Петухов', category: 'Технологии', description: 'Технологический блогер' },
];

const categories = ['Все', 'Технологии', 'Блогеры', 'Медиа', 'Музыка', 'Спорт'];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredUsernames.map((user, index) => (
            <Card 
              key={user.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => window.open(`https://t.me/${user.username.replace('@', '')}`, '_blank')}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                      <Icon name="AtSign" size={20} className="text-primary" />
                      <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                        {user.username}
                      </h3>
                    </div>
                    <p className="text-sm font-medium text-foreground">{user.name}</p>
                  </div>
                  <Icon 
                    name="ExternalLink" 
                    size={18} 
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                </div>
                
                <p className="text-sm text-muted-foreground">{user.description}</p>
                
                <Badge variant="secondary" className="w-fit">
                  {user.category}
                </Badge>
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
