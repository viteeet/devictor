# Guia de Configuração - DEVICTOR Landing Page

## Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

## Instalação

1. Instale as dependências:

```bash
npm install
```

2. Execute o projeto em desenvolvimento:

```bash
npm run dev
```

3. Acesse http://localhost:3000

## Configurações Necessárias

### 1. Formulário de Contato (Formspree)

Para usar o formulário de contato:

1. Acesse https://formspree.io/
2. Crie uma conta e um novo formulário
3. Copie o ID do formulário
4. Edite `components/Contact.tsx` linha 27:
   - Substitua `YOUR_FORM_ID` pelo seu ID do Formspree

### 2. Imagens do Portfólio

1. Adicione suas imagens na pasta `/public/portfolio/`
2. Formatos suportados: `.jpg`, `.png`, `.webp`
3. Nomeie os arquivos como: `1.jpg`, `2.jpg`, etc.
4. Edite `components/Portfolio.tsx` para ajustar a lista de imagens

### 3. Favicon e Imagens

Substitua:
- `/public/favicon.ico` - Ícone do site
- `/public/og-image.jpg` - Imagem para redes sociais (1200x630px)
- `/public/apple-icon.png` - Ícone para dispositivos Apple

### 4. Currículo

1. Adicione seu PDF em `/public/cv.pdf`
2. O botão "Baixar CV" funcionará automaticamente

### 5. Links Sociais

Edite em `components/Footer.tsx`:
- Linha 27: Link do GitHub
- Linha 35: Link do LinkedIn

### 6. WhatsApp

O número já está configurado: `5521983573881`

Para alterar, edite:
- `components/Hero.tsx` linha 48
- `components/Contact.tsx` linha 68
- `components/WhatsAppButton.tsx` linha 11

### 7. SEO

Edite em `app/layout.tsx`:
- Linha 18: URL base do site
- Linha 26: Descrição padrão
- Linha 86-101: JSON-LD (dados estruturados)

### 8. Traduções

Edite os textos em:
- `/messages/pt.json` - Português
- `/messages/en.json` - Inglês

## Build para Produção

```bash
npm run build
npm start
```

## Deploy

O projeto pode ser deployado em:
- **Vercel** (recomendado): `npm i -g vercel && vercel`
- **Netlify**: Conecte seu repositório
- **AWS Amplify**: Conecte seu repositório
- **Railway**: Conecte seu repositório

## Suporte

Para dúvidas ou problemas, abra uma issue no repositório.

