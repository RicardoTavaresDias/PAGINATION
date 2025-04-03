
export function pagination(page, limit, data){
  const startIndex = (page - 1) * limit
  const endIndex = page * limit

  const results = {}

  // Next - avançar
  if(endIndex < data.length){
    results.next = {
      page: page + 1,
      limit: limit
    }
  }

  // Previus - voltar
  if(startIndex > 0){
    results.previous = {
      page: page - 1,
      limit: limit
    }
  }

  results.results = data.slice(startIndex, endIndex)
  //Math.ceil - redonda para cima se quantidade de pagina for 2.4 ficará 3
  const totalPages = Math.ceil(data.length / limit)

  return { 
    results,
    totalPages
  }
}