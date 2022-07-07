import css from './car.mod.css'
export default function Car({car}) {

  const {id, model, price, year}= car;

  return (
      <div className={css.Car}>
        <div className={css.container}>

          <div>id : {id}</div>
          <div>model: {model}</div>
          <div>price:{price}</div>
          <div>year:{year}</div>
    </div>
    <div className={css.tools}>
      <button>edit</button>
      <button>del</button>
    </div>

    </div>);
}