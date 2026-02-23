# 📱 Portfolio App — React Native

Um portfólio mobile moderno feito com React Native + Expo.

---

## 🚀 Como rodar localmente

### Pré-requisitos
- Node.js 18+ instalado
- Expo CLI (`npm install -g expo-cli`)
- App **Expo Go** no celular (iOS ou Android) — ou emulador

### Passos

```bash
# 1. Entre na pasta do projeto
cd portfolio-app

# 2. Instale as dependências
npm install

# 3. Inicie o projeto
npx expo start
```

Após rodar, abra o **Expo Go** no celular e escaneie o QR code exibido no terminal.

---

## ✏️ Como personalizar

Abra o arquivo **`src/data.js`** e edite os campos marcados com `// ✏️ EDITE AQUI`:

| Campo | O que é |
|-------|---------|
| `name` | Seu nome completo |
| `role` | Seu cargo/título |
| `bio` | Breve descrição sobre você |
| `location` | Sua cidade/país |
| `skills` | Array com suas habilidades e nível (0-100) |
| `projects` | Seus projetos com título, descrição, tags e links |
| `contact` | Email, GitHub, LinkedIn, WhatsApp, Instagram |

---

## 📁 Estrutura do Projeto

```
portfolio-app/
├── App.js                        # Ponto de entrada
├── src/
│   ├── data.js                   # ✏️ SEUS DADOS (edite aqui!)
│   ├── theme.js                  # Cores e estilos globais
│   ├── navigation/
│   │   └── AppNavigator.js       # Configuração de navegação
│   └── screens/
│       ├── HomeScreen.js         # Tela inicial / Hero
│       ├── SkillsScreen.js       # Habilidades com barras animadas
│       ├── ProjectsScreen.js     # Lista de projetos
│       ├── ProjectDetailScreen.js # Detalhe de cada projeto
│       └── ContactScreen.js      # Contato e redes sociais
└── package.json
```

---

## 🎨 Personalizar cores

Edite o arquivo `src/theme.js`:
- `accent` — cor principal (padrão: roxo `#6C63FF`)
- `background` — fundo escuro
- `card` — cor dos cards

---

## 📦 Dependências principais

- `expo` ~50.0.0
- `react-navigation` v6
- `expo-linear-gradient`
- `@expo/vector-icons`
- `react-native-safe-area-context`

---

Feito com ❤️ usando React Native + Expo
