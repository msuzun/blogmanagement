# Blog Management

Bu proje, React ve Next.js kullanılarak geliştirilmiş basit bir blog yönetim uygulamasıdır. Kullanıcılar, var olan blogları listeleyebilir, yeni bir blog eklemek için modal bir form kullanabilir. Uygulama, bileşen tabanlı bir mimariye sahip olup esnek ve yeniden kullanılabilir UI bileşenleri içerir.

## Proje Yapısı

```
├── public
│   └── images                # Statik görsellerin bulunduğu klasör
├── src
│   ├── app
│   │   ├── layout.js         # Uygulama genel düzenini belirleyen dosya
│   │   └── page.js           # Ana sayfa bileşeni
│   ├── components
│   │   ├── BlogList
│   │   │   ├── AddNewBlog.jsx # Yeni blog ekleme formu bileşeni
│   │   │   ├── BlogList.jsx   # Blogları listeleyen bileşen
│   │   │   └── BlogItem.jsx   # Tek bir blog öğesini gösteren bileşen
│   │   └── UI
│   │       └── Button.jsx     # Özel bir buton bileşeni
│   └── data
│       └── blogData.js       # Varsayılan blog verisi
├── .gitignore
├── jsconfig.json
├── next.config.mjs
├── package.json
└── README.md
```

### Bileşenler

- **BlogItem**: Tek bir blog öğesinin başlık, yazar, tarih ve içeriğini gösterir.
- **BlogList**: Tüm blogları listeleyen bileşendir. Her blog öğesi için `BlogItem` bileşenini kullanır.
- **AddNewBlog**: Yeni bir blog eklemek için bir modal form sağlar. `title`, `author`, `content`, `date`, ve `image` alanlarını içerir.
- **Button**: Farklı renk, boyut ve tip seçeneklerine sahip özelleştirilebilir bir buton bileşenidir.

## Özellikler

- Blogları listeleme
- Yeni blog eklemek için modal form açma
- Esnek ve yeniden kullanılabilir buton bileşeni
- Component tabanlı yapı

## Gereksinimler

Projeyi çalıştırmak için aşağıdaki araçların kurulu olduğundan emin olun:

- Node.js (v14 veya daha güncel)
- NPM (Node Package Manager) veya Yarn

## Kurulum

Projeyi bilgisayarınıza klonladıktan sonra bağımlılıkları yükleyin:

```bash
# Projeyi klonlayın
git clone <repository-url>

# Proje klasörüne girin
cd blogmanagement

# Bağımlılıkları yükleyin
npm install
```

## Projeyi Çalıştırma

Geliştirme sunucusunu başlatmak için aşağıdaki komutu çalıştırın:

```bash
npm run dev
```

Sunucu başlatıldığında, projeyi tarayıcıda görmek için [http://localhost:3000](http://localhost:3000) adresine gidin.

### Diğer Komutlar

- **Build**: Uygulamayı üretim için derlemek için aşağıdaki komutu kullanın:
  ```bash
  npm run build
  ```

- **Start**: Üretim ortamında çalıştırmak için:
  ```bash
  npm start
  ```

- **Lint**: Kod kalitesini kontrol etmek için:
  ```bash
  npm run lint
  ```

## Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzü geliştirmek için.
- **Next.js**: Sunucu tarafı işlemler ve geliştirme kolaylığı için.
- **CSS**: Basit bir CSS yapılandırması ile stillendirme.
