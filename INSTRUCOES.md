# 🚀 Projeto DEVICTOR - Instruções de Uso

## ✅ O que foi criado

Landing page completa em Next.js 14 com:

### 📦 Estrutura Completa
- ✅ Next.js 14 com App Router
- ✅ TypeScript configurado
- ✅ Tailwind CSS estilizado
- ✅ i18n PT/EN com next-intl
- ✅ Framer Motion para animações
- ✅ Swiper para carrossel
- ✅ SEO otimizado
- ✅ Responsivo e mobile-first

### 🎨 Componentes Criados
1. **Navbar** - Menu sticky com navegação e switch de idioma
2. **Hero** - Seção principal com CTAs e efeitos visuais
3. **About** - Sobre você com habilidades e botão de CV
4. **Services** - Cards de serviços com ícones
5. **Portfolio** - Carrossel de projetos
6. **Testimonials** - Depoimentos de clientes
7. **Contact** - Formulário de contato + WhatsApp
8. **Footer** - Links sociais e copyright
9. **WhatsAppButton** - Botão flutuante no canto

## 📝 Como Usar

### 1. Instalar Dependências

```bash
npm install
```

### 2. Executar em Desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:3000

### 3. Configurações Necessárias

#### A) Formulário de Contato
- Abra `components/Contact.tsx` linha 27
- Substitua `YOUR_FORM_ID` pelo ID real do Formspree
- Ou use outro serviço de formulários

#### B) Imagens do Portfólio
- Adicione suas imagens em `/public/portfolio/`
- Formato: 1.jpg, 2.jpg, 3.jpg, etc.
- Edite a lista em `components/Portfolio.tsx` linhas 21-27

#### C) Links Sociais
- Abra `components/Footer.tsx`
- Atualize os links do GitHub e LinkedIn (linhas 27 e 35)

#### D) CV
- Substitua `/public/cv.pdf` pelo seu currículo real

#### E) Favicon e OG Image
- Substitua `/public/favicon.ico`
- Adicione `/public/og-image.jpg` (1200x630px)

### 4. Personalizar Conteúdo

#### Português: Edite `messages/pt.json`
```json
{
  "hero": {
    "title": "Seu texto aqui",
    "subtitle": "Seu subtítulo aqui"
  },
  // ... outros textos
}
```

#### Inglês: Edite `messages/en.json`
Mesma estrutura para versão em inglês.

### 5. Deploy

#### Opção 1: Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```

#### Opção 2: Build Local
```bash
npm run build
npm start
```

## 🎨 Cores e Estilo

O projeto usa a paleta:
- Azul escuro: `#0f172a` (dark)
- Azul médio: `#1d4ed8` (primary)
- Azul claro: `#3b82f6` (secondary)
- Ciano: `#38bdf8` (accent)

Edite `tailwind.config.ts` para personalizar.

## 📱 Responsivo

O site é totalmente responsivo:
- Mobile: 1 coluna
- Tablet: 2 colunas
- Desktop: 3 colunas (quando aplicável)

## 🌐 Idiomas

- Português: http://localhost:3000/pt
- Inglês: http://localhost:3000/en

O idioma padrão é português.

## ✨ Recursos Implementados

✅ Navbar sticky com blur
✅ Animações suaves com Framer Motion
✅ Carrossel com autoplay (Swiper)
✅ i18n completo (PT/EN)
✅ SEO com metadata, OG e JSON-LD
✅ Botão WhatsApp flutuante
✅ Formulário de contato
✅ Portfolio com lightbox
✅ Gradientes animados
✅ Scrollbar customizada
✅ Acessibilidade (ARIA labels)

## 📚 Documentação

- `README.md` - Visão geral do projeto
- `SETUP.md` - Guia de configuração detalhado
- `CONTRIBUTING.md` - Como contribuir

## 🐛 Troubleshooting

### Erro ao instalar dependências
```bash
npm cache clean --force
npm install
```

### Porta 3000 ocupada
```bash
# Altere a porta no package.json
"dev": "next dev -p 3001"
```

### Imagens não aparecem
- Verifique se as imagens estão em `/public/portfolio/`
- Use caminhos relativos: `/portfolio/nome.jpg`

## 📞 Suporte

Para dúvidas ou problemas:
1. Consulte `SETUP.md` para configurações
2. Verifique os erros no console
3. Abra uma issue no repositório

---

**Desenvolvido com ❤️ para Victor Hugo**

