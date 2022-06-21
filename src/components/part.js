function Part(props) {
let {id,name,status,species,gender,image} = props;
    return(
        <div>
            <h1>{id}</h1>
            <h2>{name}</h2>
            <img src={image} alt=""/>
            <p>{status}</p>
            <p>{gender}</p>
            <p>{species}</p>
        </div>
    )

}
export default Part;


// 1. Описати всю сім'ю сімпсонів (5 персонажів)
//
// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
//     https://rickandmortyapi.com/api/character
//         Створити 6 персонажів