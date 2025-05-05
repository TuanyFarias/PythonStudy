# 🔐 Verificador de Senhas Fortes

Este projeto foi desenvolvido para praticar e integrar conhecimentos de **Python (FastAPI)** no back-end e **React** no front-end, com objetivo de verificar se uma senha é segura utilizando uma API pública de segurança.

---

## 🚀 Tecnologias utilizadas

### 👩‍💻 Front-end
- **React.js**
- **Axios** para chamadas HTTP
- Hooks (`useState`)
- Estrutura baseada em componentes (`App.js`)

### 🐍 Back-end
- **FastAPI** para criação da API
- **httpx** para requisição externa à API pública
  
## 📚 Conceitos estudados

Durante o desenvolvimento deste projeto, foram explorados os seguintes conceitos:

### 🔙 Back-end com FastAPI
- Criação de endpoints com `@app.get`.
- Uso de parâmetros de consulta (`Query`).
- Manipulação de strings e codificação com `hashlib` (SHA-1).
- Comunicação com APIs externas usando `httpx`.
- Configuração de `CORS` para permitir requisições do front-end.
- Estrutura básica de uma aplicação assíncrona.

### 🔛 Comunicação Front x Back
- Entendimento de requisições HTTP entre front-end (React) e back-end (FastAPI).
- Conversão de respostas JSON em dados legíveis para o usuário.

### 🧠 Segurança e APIs Públicas
- Utilização da API [Have I Been Pwned](https://haveibeenpwned.com/API/v3#PwnedPasswords) para verificar senhas expostas.
- Aplicação da técnica de **k-Anonymity** para proteção da senha durante a consulta.

### 💻 Front-end com React
- Uso de `useState` para manipulação de estado.
- Utilização do `axios` para realizar chamadas à API.
- Tratamento de erros e exibição de mensagens.
- Criação de componentes funcionais e estilização inline.

### 🧪 Boas práticas
- Separação entre front-end e back-end em pastas distintas.
- Testes locais com `localhost` em diferentes portas.
- Uso do Git e GitHub para versionamento e hospedagem do projeto.

