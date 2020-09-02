# ziro-app

Necessário ter o Node e o MongoDb instalados na máquina.

Acessar a pasta "Backend" via terminal e rodar os comandos:
- npm init -y
- npm install express
- node src/index.js (Irá subir o backend da aplicação na porta 3000)

Para as rotinas de cadastro, atualização e exclusão de Produtos, utilizei a ferramenta Insomnia, alguns exemplos de rotas criadas na ferramenta:
http://localhost:3000/produtos - GET
http://localhost:3000/produtos/ - POST (Necessário passar os campos via JSON pelo body da requisição)
http://localhost:3000/produtos/:id - DEL (Substituir o :id pelo _id que deseja excluir)
http://localhost:3000/produtos/:id - PUT (Substituir o :id pelo _id que deseja excluir)

Acessar a pasta "Frontend" via terminal e rodar os comandos:
- yarn ou npm start
- npm run build
- npm run dev-server
