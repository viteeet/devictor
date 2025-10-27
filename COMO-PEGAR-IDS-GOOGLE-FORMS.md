# 🔍 Como Pegar os IDs dos Campos do Google Forms

## Método Simples (Recomendado):

### Passo 1: Inspecionar o Formulário
1. Abra seu formulário no Google Forms
2. Pressione **F12** (ou clique direito → Inspirar)
3. Vá na aba **"Network"** (Rede)

### Passo 2: Enviar Teste
1. Preencha o formulário com dados de teste
2. Clique em **"Enviar"**
3. Na aba Network, procure uma requisição chamada **"formResponse"**

### Passo 3: Pegar os IDs
1. Clique na requisição "formResponse"
2. Vá na aba **"Payload"** ou **"Form Data"**
3. Você verá algo como:
   ```
   entry.2005620554: João Silva
   entry.1045781291: joao@email.com
   entry.839337160: Minha mensagem
   ```

4. **Copie esses números** (entry.XXXXX)

---

## Método Alternativo (Mais Rápido):

### Pelo código HTML:

1. No Google Forms, clique direito no campo que você quer pegar o ID
2. Escolha **"Inspecionar"**
3. Procure por `name="entry.XXXXXXX"` na tag input
4. Copie o número após `entry.`

---

## Como Configurar no Site:

Depois de pegar os IDs, edite o arquivo `components/Contact.tsx`:

```typescript
const entryIds = {
  name: 'entry.SEU_NUMERO_AQUI',        // Campo de nome
  email: 'entry.SEU_NUMERO_AQUI',       // Campo de email
  message: 'entry.SEU_NUMERO_AQUI'      // Campo de mensagem
};
```

Substitua `SEU_NUMERO_AQUI` pelos números que você copiou.

---

## Dica:

Se você tem apenas 3 campos no Google Forms:
- Campo 1 = Nome
- Campo 2 = Email
- Campo 3 = Mensagem

Então pegue os IDs na ordem que aparecem no formulário.

---

## Exemplo Completo:

**Formulário do Google Forms tem:**
- Campo 1 (Nome) → ID: `entry.123456789`
- Campo 2 (Email) → ID: `entry.987654321`
- Campo 3 (Mensagem) → ID: `entry.456789123`

**No código fica:**
```typescript
const entryIds = {
  name: 'entry.123456789',
  email: 'entry.987654321',
  message: 'entry.456789123'
};
```

---

## Precisa de Ajuda?

Se não conseguir, me avise que eu ajudo você a configurar!
