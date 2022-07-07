import {axInst} from "./ax.ser";

export const carServ ={
getAll:()=>axInst.get('/cars'),
create: (car)=>axInst.post('/cars', car).then(response=>response),
updateById:(id, car)=>axInst.put(`/cars/${id}`, car),
deleteById: (id) =>axInst.delete(`/cars/${id}`)
}