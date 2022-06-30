import {useForm} from "react-hook-form";

import {Form, postcoment} from "./сomponents/services";

export default function App() {

  let postId = [{id: 1 },
    {id: 2 },
    {id: 3 },
    {id: 4 },
    {id: 5 },
    {id: 6},
    {id: 7 },
    {id: 8 },
    {id: 9},
    {id: 10}];


  let {register, handleSubmit, formState: {errors}} = useForm({
    defaultValues: {
      name: 'name', body: 'body',email:'email'
    }

  });

  const submit = (obj) => {console.log(obj);
    postcoment().then(result => console.log(result));
  };

  return (<div>

    <Form
        handleSubmit={handleSubmit}
        submit={submit}
        register={register}
        errors={errors}
        postId={postId}
    />

  </div>);
}
//     Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар
//     постовим запитом на http://jsonplaceholder.typicode.com/comments

