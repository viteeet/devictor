# 📝 Configuração do Google Forms

## ✅ Como Configurar o Google Forms no Site

### Passo a Passo:

1. **Crie o Formulário no Google Forms**
   - Acesse: https://forms.google.com
   - Faça login com sua conta Google
   - Clique em "Criar um formulário em branco" ou use um template
   - Adicione os campos que deseja: Nome, Email, Mensagem, etc.

2. **Configure as Respostas**
   - Clique na aba "Respostas" na parte superior
   - Escolha onde salvar as respostas (Planilha Google ou só enviar email)
   - Configure notificações por email quando receber respostas

3. **Obtenha o Código de Incorporação**
   - Clique no botão "Enviar" (no canto superior direito)
   - Escolha o ícone com corretor angular `</>`
   - Copie a URL do iframe que aparece

4. **Extraia o ID do Formulário**
   - A URL será algo como: `https://docs.google.com/forms/d/e/SEU_FORM_ID/viewform`
   - Copie apenas a parte `SEU_FORM_ID` (entre `/e/` e `/viewform`)

5. **Configure no Site**
   - Abra `components/Contact.tsx`
   - Localize as duas ocorrências de `SEU_FORM_ID`
   - Substitua pelas duas ocorrências pelo seu ID real

### Exemplo:

**Antes:**
```typescript
src="https://docs.google.com/forms/d/e/SEU_FORM_ID/viewform?embedded=true"
```

**Depois (exemplo):**
```typescript
src="https://docs.google.com/forms/d/e/1FAIpQLSdAbCdEf1234567890abcd/viewform?embedded=true"
```

### ⚠️ Importante:

- O formulário precisa estar **público** (qualquer pessoa pode acessar)
- Para personalizar a mensagem de resposta após envio, configure em "Configurações" do Google Forms
- As respostas serão armazenadas automaticamente em uma planilha do Google Sheets

### 🎨 Personalização do Formulário:

- Você pode adicionar logotipo, cores e tema no Google Forms
- Adicione perguntas condicionais se necessário
- Configure validação de campos obrigatórios

### ✅ Vantagens do Google Forms:

✅ **Gratuito** - Sem limites de uso
✅ **Fácil de configurar** - Interface intuitiva
✅ **Integração com Google Sheets** - Respostas em planilha
✅ **Notificações automáticas** - Email quando receber resposta
✅ **Análise de dados** - Gráficos e estatísticas automáticas
✅ **Sem servidor** - Não precisa de backend próprio

### 📧 Configurar Notificações:

1. No Google Forms, vá em "Respostas"
2. Clique nos três pontos (...)
3. Selecione "Obter notificações por email para novas respostas"
4. Escolha a frequência (por email ou resumo diário)

### 🔒 Privacidade:

- Por padrão, o formulário exige login do Google (opcional)
- Você pode alterar para "Qualquer pessoa com o link" nas configurações
- Não colete dados sensíveis sem aviso de privacidade apropriado
