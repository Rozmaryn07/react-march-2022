export default function Posts({item,post}) {
  return (<div >
      <h2>{item.id} - {item.name}</h2>
      <button onClick={()=>{
          post(item.id);
      }}>posts</button>
    </div>);
}