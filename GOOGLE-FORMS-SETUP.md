# 📋 Configurar Google Forms - Passo a Passo Visual

## ✅ Passo 1: Criar o Formulário

1. Acesse: **https://forms.google.com**
2. Clique em **"Criar um formulário em branco"**
3. Adicione os campos que quiser:
   - Nome
   - Email
   - Mensagem
   - Qualquer outro campo

---

## 🔗 Passo 2: Obter o ID do Formulário

### Como fazer:

1. No seu formulário, clique no botão **"Enviar"** (canto superior direito) 👆
2. Vai abrir uma janela
3. Clique no ícone **`</>`** (corretor angular - o terceiro ícone da esquerda)
4. Você verá uma URL como esta:

```
https://docs.google.com/forms/d/e/1AbCdEfG1234567890HiJkLmNoPqRsTuVwXyZaBcDeFg/viewform?embedded=true
```

5. **COPIE apenas a parte que está entre `/e/` e `/viewform`**

   **Exemplo:** Da URL acima, você copiaria apenas: `1AbCdEfG1234567890HiJkLmNoPqRsTuVwXyZaBcDeFg`

---

## ⚙️ Passo 3: Configurar no Site

1. Abra o arquivo: `components/Contact.tsx`
2. Procure por: `SEU_FORM_ID` (aparece 2 vezes no arquivo)
3. Substitua **ambas** as ocorrências pelo ID que você copiou no passo anterior

### Exemplo prático:

**ANTES:**
```typescript
src="https://docs.google.com/forms/d/e/SEU_FORM_ID/viewform?embedded=true"
```

**DEPOIS (com seu ID real):**
```typescript
src="https://docs.google.com/forms/d/e/1AbCdEfG1234567890HiJkLmNoPqRsTuVwXyZaBcDeFg/viewform?embedded=true"
```

---

## 🎨 Passo 4: Personalizar o Formulário (Opcional)

No Google Forms, você pode:

- Adicionar seu logo
- Mudar cores e tema
- Adicionar mais perguntas
- Configurar mensagem de agradecimento

---

## 📧 Passo 5: Receber Notificações

1. No Google Forms, clique na aba **"Respostas"**
2. Clique nos **3 pontinhos** (...)
3. Marque **"Obter notificações por email para novas respostas"**
4. Escolha se quer email individual ou resumo diário

---

## ✅ Pronto!

Agora seu formulário está configurado! Quando alguém preencher:

✅ Você recebe um email automático
✅ As respostas ficam salvas em uma planilha do Google Sheets
✅ Tudo acontece automaticamente, sem precisar de backend

---

## 🔧 Resolução de Problemas

### "Formulário não aparece no site"
- Verifique se copiou o ID completo
- Confirme que substituiu AMBAS as ocorrências de `SEU_FORM_ID`
- Salve o arquivo e recarregue a página

### "Preciso de campos diferentes"
- No Google Forms, clique no botão "+" para adicionar campos
- Você pode adicionar: texto, email, checkbox, dropdown, etc.

### "Quero mudar a altura do formulário"
- No arquivo `Contact.tsx`, linha 47
- Procure por: `style={{height: '800px'}}`
- Altere `800px` para o tamanho que preferir

---

## 💡 Dica Extra

Você pode ter **múltiplos formulários** no mesmo site:
- Um para orçamento
- Um para contato
- Um para newsletter

Basta criar vários componentes ou usar diferentes IDs!
