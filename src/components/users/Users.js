export default function Users({item, details}) {
  return (<div >

      <h3>{item.id}</h3>
      <div>{item.first_name}</div>
      <button onClick={() => details(item)}>details</button>

    </div>);
}