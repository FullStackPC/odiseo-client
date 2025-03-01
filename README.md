## Project Structure

```
micro-frontend-project
├── container
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── App.tsx
│   │   ├── index.tsx
│   │   └── components
│   │       └── Navigation.tsx
│   ├── package.json
│   └── webpack.config.js
├── micro-frontends
│   ├── react-app
│   │   ├── public
│   │   │   └── index.html
│   │   ├── src
│   │   │   ├── App.tsx
│   │   │   ├── index.tsx
│   │   │   └── components
│   │   │       └── ReactComponent.tsx
│   │   ├── package.json
│   │   └── webpack.config.js
│   └── angular-app
│       ├── src
│       │   ├── app
│       │   │   ├── app.component.ts
│       │   │   ├── app.component.html
│       │   │   ├── app.module.ts
│       │   │   └── components
│       │   │       └── angular-component
│       │   │           ├── angular-component.component.ts
│       │   │           ├── angular-component.component.html
│       │   │           └── angular-component.component.css
│       │   ├── main.ts
│       │   └── index.html
│       ├── angular.json
│       ├── tsconfig.json
│       └── webpack.config.js
├── shared
│   ├── styles
│   │   └── global.css
│   └── utils
│       └── common.js
├── package.json
└── README.md
```

## Getting Started

### Installation and running the projects

1. Install dependencies for all projects:
   ```
   npm run install:all
   ```
2. Run all projects:
   ```
   npm run start:all
   ```

2. Open the browser and navigate to the following URLs:
   - Container App: [http://localhost:3000](http://localhost:3000)
   - React App: [http://localhost:3001](http://localhost:3001)
   - Angular App: [http://localhost:4201](http://localhost:4201)


### Or Installation and running individual projects

1. Container app:
   ```
   cd container
   npm install
   npm start
   ```

2. React app:
   ```
   cd ..
   cd micro-frontends/react-app
   npm install
   npm start
   ```

3. Angular app:
   ```
   cd ..
   cd angular-app
   npm install
   npm start
   ```
