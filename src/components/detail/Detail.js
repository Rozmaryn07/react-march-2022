export default function Detail({detail}) {
  return (<div >
      <div>{detail.last_name}</div>
      <div>{detail.email}</div>
      <div><img src={detail.avatar} alt="person"/></div>
    </div>);
}