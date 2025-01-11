# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

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