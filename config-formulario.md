# 📧 Configuração do Formulário de Contato

## ✅ Opção 1: Formspree (Recomendado - Gratuito)

### Passo a Passo:

1. **Acesse:** https://formspree.io/
2. **Cadastre-se** (gratuito até 50 envios/mês)
3. **Crie um novo formulário**
4. **Copie o ID** (formato: `abc123xyz`)
5. **Edite:** `components/Contact.tsx` linha 37
6. **Substitua:** `SEU_ID_AQUI` pelo seu ID

### Exemplo:
```typescript
// Linha 37 do Contact.tsx
<form action="https://formspree.io/f/SEU_ID_REAL_AQUI" method="POST">
```

### ⚠️ Importante:
- Planos gratuitos têm limite de 50 envios/mês
- Funciona sem código backend
- Recebe emails direto na sua caixa de entrada
- Pode configurar email de resposta automática

---

## ✅ Opção 2: Web3Forms (Gratuito - Ilimitado)

1. **Acesse:** https://web3forms.com/
2. **Cadastre-se e gere uma chave**
3. **Edite:** `components/Contact.tsx`:
   - Adicione um campo hidden com `_apikey`
   - Altere a action URL

---

## ✅ Opção 3: EmailJS (Gratuito até 200 envios/mês)

1. **Acesse:** https://www.emailjs.com/
2. **Cadastre-se**
3. **Configure template de email**
4. **Gere API key**
5. **Instale:** `npm install @emailjs/browser`
6. **Configure** conforme documentação

---

## ✅ Opção 4: Botão WhatsApp (Já Funcionando!)

O botão do WhatsApp **JÁ ESTÁ FUNCIONANDO** sem configuração:
- Número: 5521983573881
- Abre conversa direto no WhatsApp
- Funciona em todas as páginas

---

## 🧪 Testar Formulário

### Antes de Deploy:
1. Preencha o formulário no site local
2. Verifique se recebe o email
3. Confira os dados recebidos

### Em Produção:
- Teste novamente após deploy
- Verifique se emails chegam corretamente
- Teste SPAM (coloque na caixa de entrada)

---

## 📝 Campos do Formulário Atual:

- Nome (text)
- Email (email)
- Mensagem (textarea)

Todos os campos são **obrigatórios** (required).

---

## 🎨 Personalizar Formulário

Para adicionar mais campos:
1. Edite `components/Contact.tsx`
2. Adicione novos inputs
3. Adicione traduções em `messages/pt.json` e `messages/en.json`

---

## 💡 Dica Extra

Você pode usar **TAMBÉM** o botão WhatsApp como alternativa:
- Usuário pode escolher entre formulário OU WhatsApp
- Ambos já estão funcionando no site!

---

## 🚨 Problemas Comuns

### "Formspree bloqueou meu form"
- Verifique se configurou corretamente o ID
- Confirme se está em produção (não funciona em localhost sem config)

### "Não recebo emails"
- Verifique pasta de SPAM
- Confirme ID do Formspree
- Teste com outro email

### "Mensagem de erro"
- Verifique campos obrigatórios
- Confirme formato do email

---

**Configuração recomendada: Formspree (5 minutos setup)** ✅

