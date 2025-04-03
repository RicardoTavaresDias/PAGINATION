import { useData } from "../hooks/useData";
import { Pagination } from "../components/Pagination";
import { Spreadsheet } from "../components/spreadsheet";

export function Home() {
  const { data, FetchData } = useData();
  const { next, previus, totalPage, users } = data;

  return (
    <>
      <Spreadsheet users={users} />
      <Pagination next={next} previus={previus} totalPage={totalPage} FetchData={FetchData}/>
    </>
  );
}
