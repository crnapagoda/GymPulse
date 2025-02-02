# GymPulse 🏋️‍♂️

## O Projektu
GymPulse je moderna društvena mreža namenjena fitness entuzijastima. Aplikacija omogućava deljenje fotografija, interakciju između korisnika i praćenje fitness putovanja, razvijena koristeći najnovije web tehnologije.

![GymPulse Banner](public/assets/images/banner.jpg)

## 🚀 Glavne Funkcionalnosti

### 👤 Korisnici
- Registracija i prijava pomoću email-a
- Personalizovani korisnički profili
- Praćenje drugih korisnika
- Ažuriranje profila i postavki
- Notifikacije

### 📱 Postovi
- Kreiranje postova sa slikama
- Dodavanje lokacije i tagova
- Lajkovanje i čuvanje postova
- Grid i feed prikaz postova

### 🔍 Pretraga
- Pretraga postova po sadržaju
- Filtriranje i sortiranje sadržaja
- Istraživanje popularnih postova
- Pregled trending tagova

## 🛠️ Tehnički Stack

### Frontend
- **React** - UI biblioteka
- **TypeScript** - Tipizacija
- **Vite** - Build alat
- **TailwindCSS** - Stilizacija
- **React Query** - State management
- **React Router** - Rutiranje

### Backend (Appwrite)
- Autentifikacija
- Skladištenje podataka
- File storage
- Real-time ažuriranja

## 📦 Instalacija

1. **Kloniranje repozitorijuma**
```bash
git clone https://github.com/crnapagoda/GymPulse.git
cd gympulse
```

2. **Instaliranje zavisnosti**
```bash
npm install
```

3. **Konfiguracija okruženja**
Kreirati `.env` fajl prema `.env.example` template-u:
```env
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_URL=your_appwrite_url
VITE_APPWRITE_STORAGE_ID=your_storage_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_SAVES_COLLECTION_ID=your_saves_collection_id
VITE_APPWRITE_POST_COLLECTION_ID=your_post_collection_id
VITE_APPWRITE_USER_COLLECTION_ID=your_user_collection_id
VITE_APPWRITE_FOLLOWING_COLLECTION_ID=your_following_collection_id
VITE_APPWRITE_NOTIFICATIONS_COLLECTION_ID=your_notifications_collection_id
```

4. **Pokretanje aplikacije**
```bash
npm run dev
```

## 🌐 Deployment
Aplikacija je dostupna na: [https://gym-pulse-ebon.vercel.app](https://gym-pulse-ebon.vercel.app)

## 📁 Struktura Projekta

### Ključne komponente
- `src/_auth/*` - Autentifikacione komponente
- `src/components/*` - Deljene komponente
- `src/_root/pages/*` - Stranice aplikacije
- `src/lib/*` - Pomoćne funkcije i konfiguracija

### Stilizacija
- `src/globals.css` - Globalni stilovi

### Konfiguracija
- `src/lib/config.ts` - Konfiguracija Appwrite
- `src/lib/queries/*` - React Query zakonskih upita

## 🤝 Doprinošenje Projektu

1. Fork repozitorijuma
2. Kreiranje feature branch-a (`git checkout -b feature/AmazingFeature`)
3. Commit izmena (`git commit -m 'Add some AmazingFeature'`)
4. Push na branch (`git push origin feature/AmazingFeature`)
5. Otvaranje Pull Request-a

## 📝 Licenca
MIT License - pogledajte `LICENSE` fajl za detalje

## 🔗 Korisni Linkovi
- [Dokumentacija](https://github.com/crnapagoda/GymPulse/wiki)
- [Prijava Bugova](https://github.com/crnapagoda/GymPulse/issues)
- [Appwrite Dokumentacija](https://appwrite.io/docs)

## 📊 Status Projekta
![GitHub Stars](https://img.shields.io/github/stars/crnapagoda/GymPulse)
![GitHub Issues](https://img.shields.io/github/issues/crnapagoda/GymPulse)
![GitHub Pull Requests](https://img.shields.io/github/issues-pr/crnapagoda/GymPulse)