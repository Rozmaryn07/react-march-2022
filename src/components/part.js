function Part(props) {
let {name, desribtion, pic, phrase} = props;
    return(
        <div>
            <h2>{name}</h2>
            <img src={pic} alt=""/>
            <p>{desribtion}</p>
            <p>{phrase}</p>
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