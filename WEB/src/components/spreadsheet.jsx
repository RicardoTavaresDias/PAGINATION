import { v4 as uuid } from 'uuid'

export function Spreadsheet({ users }) {
  return (
    <div>
      {users &&
        users.map((value) => (
          <div key={uuid()} className="alert alert-warning" role="alert">
            {<p>{value.id.value}</p>}
            {<p>{value.name.first}</p>}
          </div>
        ))}
    </div>
  );
}
