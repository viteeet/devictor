# DEVICTOR - Landing Page

Landing page moderna e profissional para o desenvolvedor Victor Hugo, desenvolvida com Next.js 14, App Router, TypeScript, Tailwind CSS e i18n (português/inglês).

## Características

- ✅ Next.js 14 com App Router
- ✅ TypeScript
- ✅ Tailwind CSS
- ✅ Design moderno e responsivo
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
│   ├── layout.tsx         # Layout principal com SEO
│   ├── page.tsx           # Página inicial
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
├── public/                # Arquivos estáticos
│   ├── portfolio/         # Imagens do portfólio
│   ├── favicon.ico
│   └── cv.pdf
```

## Configuração

### WhatsApp

O número do WhatsApp já está configurado: `5521983573881`. Para alterar, edite:
- `components/Hero.tsx`
- `components/Contact.tsx`
- `components/WhatsAppButton.tsx`

### Links Sociais

Edite os links de GitHub e LinkedIn em `components/Footer.tsx`.

### SEO

Configure as informações de SEO em `app/layout.tsx`:
- Título do site
- Descrição
- URL base
- Links sociais

### Imagens do Portfólio (Opcional)

Adicione as imagens do portfólio na pasta `/public/portfolio/` se desejar mostrar projetos.

## Deploy

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:
- Vercel (recomendado)
- Netlify
- AWS Amplify
- Railway

## Licença

Todos os direitos reservados © Victor Hugo 2024

