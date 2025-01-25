# GymPulse - fitnes društvena mreža
## Uvod
GymPulse je veb aplikacija za deljenje postova (fotografija) i interakciju sa korisnicima, razvijena koristeći React, TypeScript i Vite. Aplikacija omogućava korisnicima da prave nove naloge, uređuju iste, kao i da kreiraju, uređuju, lajkuju i čuvaju postove.
## Instalacija
Da biste pokrenuli projekat lokalno, potrebno je ispratiti sledeće korake:
1. Kloniranje repozitorijuma
```console
git clone https://github.com/crnapagoda/GymPulse.git
cd gympulse
```
2. Instaliranje zavisnosti
```console
npm install
```
3. Pokretanje razvojnog servera
```console
npm run dev
```
4. Otvaranje projekta u pretraživaču odlaskom na [http://localhost:3000](http://localhost:3000) <br><br>

Projektu se takođe može pristupiti online odlaskom na sledeći link: https://gym-pulse-ebon.vercel.app <br><br>
## Funkcionalnosti
Aplikacija se sastoji od nekoliko glavnih funkcionalnosti:
<ul>
  <li>Registracija i prijava korisnika: Korisnici mogu da se registruju i prijave koristeći email i lozinku. </li>
  <li>Kreiranje i uređivanje postova: Korisnici mogu da kreiraju nove postove, dodaju slike, lokaciju i tagove, kao i da uređuju postojeće postove. </li>
  <li>Interakcija sa postovima: Korisici mogu da lajkuju i čuvaju postove</li>
</ul>
  <li>•	Uređivanje profila: Korisnici mogu da uređuju svoje profile, kao i da pregledaju tuđe.</li>
</ul>


### Struktura projekta:
```
GymPulse
├─ .gitignore
├─ components.json
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  └─ assets
│     ├─ icons
│     │  ├─ add-post.svg
│     │  ├─ back.svg
│     │  ├─ bookmark.svg
│     │  ├─ chat.svg
│     │  ├─ delete.svg
│     │  ├─ edit.svg
│     │  ├─ favicon.ico
│     │  ├─ file-upload.svg
│     │  ├─ filter.svg
│     │  ├─ follow.svg
│     │  ├─ gallery-add.svg
│     │  ├─ google.svg
│     │  ├─ home.svg
│     │  ├─ like.svg
│     │  ├─ liked.svg
│     │  ├─ loader.svg
│     │  ├─ logout.svg
│     │  ├─ people.svg
│     │  ├─ posts.svg
│     │  ├─ profile-placeholder.svg
│     │  ├─ save.svg
│     │  ├─ saved.svg
│     │  ├─ search.svg
│     │  ├─ share.svg
│     │  └─ wallpaper.svg
│     └─ images
│        ├─ logo.svg
│        ├─ profile.png
│        └─ side-img.svg
├─ README.md
├─ src
│  ├─ App.tsx
│  ├─ components
│  │  ├─ forms
│  │  │  └─ PostForm.tsx
│  │  ├─ shared
│  │  │  ├─ BottomBar.tsx
│  │  │  ├─ FileUploader.tsx
│  │  │  ├─ GridPostList.tsx
│  │  │  ├─ index.ts
│  │  │  ├─ LeftSidebar.tsx
│  │  │  ├─ Loader.tsx
│  │  │  ├─ PostCard.tsx
│  │  │  ├─ PostStats.tsx
│  │  │  ├─ ProfileUploader.tsx
│  │  │  ├─ Topbar.tsx
│  │  │  └─ UserCard.tsx
│  │  └─ ui
│  │     ├─ button.tsx
│  │     ├─ form.tsx
│  │     ├─ input.tsx
│  │     ├─ label.tsx
│  │     ├─ textarea.tsx
│  │     ├─ toast.tsx
│  │     └─ toaster.tsx
│  ├─ constants
│  │  └─ index.ts
│  ├─ context
│  │  └─ AuthContext.tsx
│  ├─ globals.css
│  ├─ globals.d.ts
│  ├─ hooks
│  │  ├─ use-toast.ts
│  │  └─ useDebounce.ts
│  ├─ lib
│  │  ├─ appwrite
│  │  │  ├─ api.ts
│  │  │  └─ config.ts
│  │  ├─ react-query
│  │  │  ├─ queries.ts
│  │  │  ├─ queryKeys.ts
│  │  │  └─ QueryProvider.tsx
│  │  ├─ utils.ts
│  │  └─ validation
│  │     └─ index.ts
│  ├─ main.tsx
│  ├─ types
│  │  └─ index.ts
│  ├─ vite.env.d.ts
│  ├─ _auth
│  │  ├─ AuthLayout.tsx
│  │  └─ forms
│  │     ├─ SigninForm.tsx
│  │     └─ SignupForm.tsx
│  └─ _root
│     ├─ pages
│     │  ├─ AllUsers.tsx
│     │  ├─ CreatePost.tsx
│     │  ├─ EditPost.tsx
│     │  ├─ Explore.tsx
│     │  ├─ Home.tsx
│     │  ├─ index.ts
│     │  ├─ LikedPosts.tsx
│     │  ├─ PostDetails.tsx
│     │  ├─ Profile.tsx
│     │  ├─ Saved.tsx
│     │  └─ UpdateProfile.tsx
│     └─ RootLayout.tsx
├─ tailwind.config.js
├─ tsconfig.app.json
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts
```
### Opis funkcionalnosti
Autentifikacija
<ul>
  <li>SigninForm.tsx: Forma za prijavu korisnika.</li>
  <li>SignupForm.tsx: Forma za registraciju korisnika.</li>
  <li>AuthContext.tsx: Kontekst za upravljanje autentifikacijom korisnika.</li>
</ul>
Postovi
<ul>
  <li>PostForm.tsx: Forma za kreiranje i uređivanje postova.</li>
  <li>PostCard.tsx: Komponenta za prikaz pojedinačnog posta.</li>
  <li>PostStats.tsx: Komponenta za prikaz statistike posta (lajkovi, čuvanja).</li>
</ul>
