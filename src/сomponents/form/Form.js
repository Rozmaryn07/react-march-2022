export default function Form({register, handleSubmit,submit, errors, postId}) {

    return (<div>

        <form onSubmit={handleSubmit(submit)}>
            <input
                type="text"
                {...register("name", {required: true})}/>

            {errors.name && <span> field is required </span>}

            <input
                type="text"
                {...register('body', {required:true})}/>
            {errors.body && <span> add </span>}

            <input
            type={'text'}
            {...register('email')}
            />
            {errors.email && <span> add </span>}

            <select {...register("userId")}>
                {postId.map(value => <option key={value.id} value={value.id}>{value.id}</option>)}


            </select>

            <button>save</button>
        </form>


    </div>);
}



