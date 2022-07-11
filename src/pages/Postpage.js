
function Postpage({value}) {
    return (
        <div>
            <h3>{value.id}</h3>
            <p>{value.body}</p>
            <p>{value.title}</p>
        </div>
    );
}

export default Postpage;