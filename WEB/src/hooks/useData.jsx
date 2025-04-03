import { useState, useEffect } from "react";

export function useData() {
  const [data, setData] = useState({});

  async function FetchData(value) {
    const resp = await fetch(
      `http://localhost:3333/listar?page=${value ? value : 1}&limit=5`
    );
    const data = await resp.json();
    setData({
      users: data.results.results,
      next: data.results?.next,
      previus: data.results?.previous,
      totalPage: data.totalPgaes,
    });
    return;
  }

  useEffect(() => {
    FetchData();
  }, []);

  return {
    data,
    FetchData
  };
}
