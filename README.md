# DEVICTOR - Landing Page

Landing page moderna e profissional para o desenvolvedor Victor Hugo, desenvolvida com Next.js 14, App Router, TypeScript, Tailwind CSS e i18n (português/inglês).

## Características

- ✅ Next.js 14 com App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Internacionalização (PT/EN) com next-intl
- ✅ Animações sutis com Framer Motion
- ✅ Carrossel com Swiper
- ✅ SEO otimizado (metadata, OG, JSON-LD)
- ✅ Responsivo e mobile-first
- ✅ Botão flutuante do WhatsApp
- ✅ Acessibilidade (ARIA labels, contraste adequado)

## Instalação

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar produção
npm start
```

## Estrutura do Projeto

```
├── app/
│   ├── [locale]/          # Roteamento com i18n
│   ├── layout.tsx         # Layout principal com SEO
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Portfolio.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── WhatsAppButton.tsx
├── messages/              # Arquivos de tradução
│   ├── pt.json
│   └── en.json
├── public/                # Arquivos estáticos
│   ├── portfolio/         # Imagens do portfólio
│   ├── favicon.ico
│   └── og-image.jpg
└── i18n.ts               # Configuração do next-intl
```

## Configuração

### Formulário de Contato

Edite `components/Contact.tsx` e substitua `YOUR_FORM_ID` pelo seu ID do Formspree.

### Imagens do Portfólio

Adicione as imagens do portfólio na pasta `/public/portfolio/`. O componente Portfolio lerá automaticamente todas as imagens.

### Links Sociais

Edite os links de GitHub e LinkedIn em `components/Footer.tsx`.

### WhatsApp

O número do WhatsApp já está configurado. Para alterar, edite:
- `components/Hero.tsx`
- `components/Contact.tsx`
- `components/WhatsAppButton.tsx`

## Deploy

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:
- Vercel (recomendado)
- Netlify
- AWS Amplify
- Railway

## Licença

Todos os direitos reservados © Victor Hugo 2024

