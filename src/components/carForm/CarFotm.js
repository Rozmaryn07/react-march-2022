import {useForm} from "react-hook-form";
import {carServ} from "../../services";

export default function CarFotm({addcar}) {

  const {register, handleSubmit, reset, setValue, formState:{errors}} = useForm({mode:'all'});

  const submit =  (car)=> {
    const {data} = carServ.create(car).then(ggg=>ggg);
    addcar(data)
    reset()


  }

  return(
      <div >

        <form onSubmit={handleSubmit(submit)}>

          <input type="text" placeholder={'model'}{...register('model',{
            required:true,
            pattern: new RegExp(/^[a-zA-Z]{1,20}$/)
          })}/>
          <input type="number" placeholder={'price'}{...register('price',{
            valueAsNumber:true,
            required:true,
            min:0,
            max:100000
          })}/>
          <input type="number" placeholder={'year'}{...register('year',{
            valueAsNumber:true,
            required:true,
            min:1990,
            max: new Date().getFullYear()
          })}/>

          <button>Save</button>
        </form>

        <div>
          {errors.model && <span>min 1 max 20</span> }
          {errors.price && <span>min 0 max 1000000</span> }
          {errors.year && <span>min 1990  max 2022</span> }
        </div>

    </div>);
}