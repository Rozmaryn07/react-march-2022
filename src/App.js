import {useForm} from "react-hook-form";

import {Form, postuser} from "./сomponents/services";

export default function App() {


  let {register, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {
      title: 'title', body: 'body',email:'email',address: {street: 'street', city: 'city'}
    }

  });

  const submit = (obj) => {console.log(obj);
    postuser().then(result => console.log(result));
  };

  return (<div>

    <Form
        handleSubmit={handleSubmit}
        submit={submit}
        register={register}
        errors={errors}

    />

  </div>);
}
// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера
// постовим запитом на http://jsonplaceholder.typicode.com/users

