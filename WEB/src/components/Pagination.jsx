export function Pagination({ previus, next, totalPage, FetchData }){
  return (
    <div id="modalNav">
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#" onClick={() => FetchData(0)}>
              {"<< " + 1}
            </a>
          </li>
          <li className={`page-item ${previus ? "" : "disabled"}`}>
            <a
              className="page-link"
              href="#"
              tabindex="-1"
              onClick={() => FetchData(previus ? previus.page : "")}
            >
              Anterior
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={() => FetchData(previus.page)}
            >
              {previus ? previus.page : "..."}
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              {previus ? previus.page + 1 : 1}{" "}
              <span className="sr-only">(atual)</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" onClick={() => FetchData(next.page)}>
              {next ? next.page : "..."}
            </a>
          </li>
          <li className={`page-item ${next ? "" : "disabled"}`}>
            <a
              className="page-link"
              href="#"
              onClick={() => FetchData(next ? next.page : "")}
            >
              Próximo
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" onClick={() => FetchData(totalPage)}>
              {totalPage + " >>" }
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}