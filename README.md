## AgendamentoApp
> Sistema WEB simples de agendamento de compromissos, seguindo os requisitos de um desafio técnico. Com ele é possivel criar, excluir e listar compromissos. 

### Tecnologias principais utilizadas

#### Backend
 - Typescript e NodeJs
 - Express (API)
 - postgreeSQL e prisma (banco de dados)
 - Jest (testes)
   

#### Frontend
 - React + Vite 
 - Typescript
 - Axios (envio de requisições)

### Deploy

- Vercel (front)
- Render (back)
- Railway (db)

**Importante**: se por acaso o servidor estiver indisponível (em produção), tente agendar algo para tira-lo do modo de suspensão. Por ser um serviço gratuito, ele fica inativo caso não receba requisições por um período de tempo.

### Estrutura do projeto

```
|   README.md
|   
+---backend
|   |   .env.example
|   |   .gitignore
|   |   jest.config.js
|   |   package-lock.json
|   |   package.json
|   |   tsconfig.json
|   |   
|   +---prisma
|   |   |   schema.prisma
|   |   |   
|   |   \---migrations
|   |       |   migration_lock.toml
|   |       |   
|   |       \---20251119192404_agendamento_app1_2
|   |               migration.sql
|   |               
|   +---src
|   |   |   app.ts
|   |   |   server.ts
|   |   |   
|   |   +---controllers
|   |   |       agendamento.controller.ts
|   |   |       
|   |   +---lib
|   |   |       prisma.ts
|   |   |       
|   |   +---middlewares
|   |   |       zod.validator.ts
|   |   |       
|   |   +---routes
|   |   |       agendamento.routes.ts
|   |   |       
|   |   +---services
|   |   |       agendamento.service.ts
|   |   |       
|   |   \---validators
|   |           zod.schema.ts
|   |           
|   \---tests
|       +---controllers
|       |       agendamento.controller.test.ts
|       |       
|       \---service
|               agendamento.service.test.ts
|               
\---frontend
    \---agendamentoApp
        |   .gitignore
        |   eslint.config.js
        |   index.html
        |   package-lock.json
        |   package.json
        |   README.md
        |   tsconfig.app.json
        |   tsconfig.json
        |   tsconfig.node.json
        |   vite.config.ts
        |   
        +---public
        |       vite.svg
        |       
        \---src
            |   App.tsx
            |   main.tsx
            |   
            +---components
            |   |   Footer.tsx
            |   |   Navbar.tsx
            |   |   
            |   +---AppointmentForm
            |   |       AppointmentForm.css
            |   |       AppointmentForm.tsx
            |   |       
            |   +---AppointmentList
            |   |       AppointmentList.css
            |   |       AppointmentList.tsx
            |   |       
            |   +---Button
            |   |       ButtonWelcome.css
            |   |       ButtonWelcome.tsx
            |   |       
            |   +---Section
            |   |   +---SectionHome
            |   |   |       SectionHome.css
            |   |   |       SectionHome.tsx
            |   |   |       
            |   |   \---SectionWelcome
            |   |           SectionWelcome.css
            |   |           SectionWelcome.tsx
            |   |           
            |   \---services
            |           api.ts
            |           
            +---pages
            |   +---Home
            |   |       Home.css
            |   |       Home.tsx
            |   |       
            |   \---Welcome
            |           Welcome.tsx
            |           
            +---routes
            |       AppRoutes.tsx
            |       
            \---styles
                    index.css
                    
```

### Como rodar

**IMPORTANTE:** a versão que roda localmente está presente no release, de nome "Projeto final"! A versão mais atual no repositório está configurada para deploy.

**1. Clone o Repositório**
<p>Selecione uma pasta no seu computador e rode este código no terminal</p>

```bash
git clone https://github.com/eugabrielbr/AgendamentoApp
```
**2. Instale as dependências e rode o projeto**
<p>O projeto está dividido em frontend e backend. Você deve instalar as dependências de cada um.</p>

**2.1 Backend**
<p>Navegue até a pasta backend e rode o seeguinte comando no terminal:</p>

```bash
# instala as dependências do backend
npm install
```
<p>OBS.: antes de rodar o backend, é preciso que voce tenha um servidor postgreSQL local (ou remoto, vai da sua escolha) devidamente configurado e ativo.
Após isso, certifique-se de colocar a URL de acesso do banco em um arquivo .env, seguindo o exemplo dado em .env.example disponível no repositório </p>
<p>Em seguida, rode o backend em modo dev:</p>

```bash
npm run dev
```
**2.2 Frontend**

<p>Navegue até a pasta frontend/agendamentoApp e rode o seguinte comando no terminal: </p>

```bash
# Instale as dependências
npm install

# Rode o frontend em modo dev
npm run dev
```
**3. Testes**
<p>Caso queira rodar os testes do backend, basta digitar o seguinte comando no terminal:</p>

```bash
# Instale as dependências
npm test
```
### Resultados 

#### Tela de Bem-vindo

<p align="center">
  <img src = "https://github.com/user-attachments/assets/9afa1c2e-78b3-440b-9fad-b08629ea7a46" width = "1000px"/>
  <p align="center">
    <strong>Tela de Bem-vindo</strong> 
  </p>
</p>

#### Tela de agendamento

<p align="center">
  <img src = "https://github.com/user-attachments/assets/91b6bf84-9a89-4fb8-8522-570d6291044c" width = "1000px"/>
  <p align="center">
    <strong>Tela home</strong> 
  </p>
</p>

#### Listando compromissos

<p align="center">
  <img src = "https://github.com/user-attachments/assets/c1f34e1c-721b-49c8-8d0b-e03644d206fb" width = "1000px"/>
  <p align="center">
    <strong>Listagem de compromissos</strong> 
  </p>
</p>

<p>obs.: as cores estão diferentes no background em alguns prints devido ao efeito gradiente</p>


