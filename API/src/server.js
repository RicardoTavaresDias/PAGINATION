import { app } from "./app.js"
import { pagination } from "./utils/pagination.js"

// Cadastro dos usuarios
app.post("/cadastrar", async (request, response) => {
  const { name, role } = request.body
  await fetch("http://localhost:3000/Users", {
    method: "POST",
    body: JSON.stringify({
      id: new Date().getTime(),
      name: name,
      role: role ? role : "member"
    })
  })

  response.json({ message: "Cadastrado com sucesso!" })
})


// Teste de paginação de todos os usuarios cadastrados
app.get("/listar", async (request, response) => {
  // parseInt - converte numero inteiro para realizar calculos
  const page = parseInt(request.query.page)
  const limit = parseInt(request.query.limit)
  
  // https://randomuser.me/api/?results=5000
  const data = await fetch("http://localhost:3000/Users")
  const users = await data.json()

  const { results, totalPages } = pagination(page, limit, users)

  response.json({ results, totalPgaes: totalPages })
})


// Servidor express
app.listen(3333, () => console.log("Server is running on port " + 3333))