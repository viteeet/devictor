# 🚀 Comandos Rápidos - DEVICTOR

## 📦 Instalação

```bash
# Instalar todas as dependências
npm install
```

## 🎯 Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Acessar no navegador
# http://localhost:3000
```

## 🏗️ Build

```bash
# Criar build de produção
npm run build

# Executar build de produção localmente
npm start

# Verificar build
npm run lint
```

## 🌐 Idiomas

- Português: http://localhost:3000/pt
- Inglês: http://localhost:3000/en

## 🎨 Estilos

```bash
# Tailwind CSS está configurado
# Edite tailwind.config.ts para personalizar
```

## 📱 Teste Responsivo

1. Abra DevTools (F12)
2. Ctrl+Shift+M (toggle device toolbar)
3. Teste diferentes tamanhos de tela

## 🔧 Configurações Rápidas

### Formspree
```bash
# Edite: components/Contact.tsx
# Linha 27: substitua YOUR_FORM_ID
```

### Imagens do Portfolio
```bash
# Adicione imagens em: public/portfolio/
# Edite: components/Portfolio.tsx (linhas 21-27)
```

### Links Sociais
```bash
# Edite: components/Footer.tsx
```

### Traduções
```bash
# Edite: messages/pt.json e messages/en.json
```

## 🚢 Deploy

### Vercel (Mais Fácil)
```bash
npm i -g vercel
vercel
```

### Netlify
1. Conecte seu repositório no Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`

### Deploy Manual
```bash
npm run build
# Copie a pasta .next para seu servidor
```

## 🔍 Verificações

```bash
# Verificar erros de TypeScript
npm run lint

# Verificar build
npm run build

# Verificar estrutura
ls -la
ls app/
ls components/
```

## 🎯 Checklist Antes de Deploy

- [ ] Substituir YOUR_FORM_ID no Contact.tsx
- [ ] Adicionar imagens do portfólio
- [ ] Adicionar CV em /public/cv.pdf
- [ ] Configurar links sociais (GitHub, LinkedIn)
- [ ] Adicionar favicon.ico
- [ ] Adicionar og-image.jpg (1200x630px)
- [ ] Verificar todas as traduções
- [ ] Testar responsividade
- [ ] Testar animações
- [ ] Testar carrossel
- [ ] Testar formulário
- [ ] Testar switch de idioma
- [ ] Testar WhatsApp button
- [ ] Fazer build de produção
- [ ] Testar build localmente
- [ ] Deploy em produção

## 📊 Análise do Projeto

```bash
# Ver tamanho do bundle
npm run build

# Verificar dependências
npm list --depth=0

# Atualizar dependências (cuidado!)
npm outdated
npm update
```

## 🧹 Limpeza

```bash
# Limpar cache do Next.js
rm -rf .next

# Limpar node_modules e reinstalar
rm -rf node_modules package-lock.json
npm install

# Limpar builds antigos
rm -rf .next out dist
```

## 🔄 Atualizações

```bash
# Ver atualizações disponíveis
npm outdated

# Atualizar Next.js
npm install next@latest react@latest react-dom@latest

# Atualizar todas as dependências
npm update
```

## 📝 Edições Rápidas

### Mudar Cores
```bash
# Edite: tailwind.config.ts
# Veja a seção "colors"
```

### Mudar Fontes
```bash
# Edite: app/layout.tsx
# Importe do Google Fonts
```

### Mudar Animação
```bash
# Edite: components/*.tsx
# Ajuste os valores de motion.*
```

### Mudar WhatsApp
```bash
# Edite: components/WhatsAppButton.tsx
# components/Hero.tsx
# components/Contact.tsx
```

## 🎓 Recursos Úteis

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [Swiper](https://swiperjs.com/)
- [next-intl](https://next-intl-docs.vercel.app/)

---

**Boa sorte com seu projeto! 🚀**

