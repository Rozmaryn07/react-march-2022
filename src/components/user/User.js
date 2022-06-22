export default function User({userhead,userdetails}) {
  return (<div >
      {userhead.id} {userhead.name}
      <button onClick={()=>{
          userdetails(userhead)
      }}>inform</button>
    </div>);
}