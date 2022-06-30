export default function Form({register, handleSubmit,submit, errors}) {

    return (<div>

        <form onSubmit={handleSubmit(submit)}>
            <input
                type="text"
                {...register("title", {required: true})}/>

            {errors.title && <span> field is required </span>}

            <input
                type="text"
                {...register('body', {required:true})}/>
            {errors.body && <span> add </span>}

            <input
            type={'text'}
            {...register('email')}
            />

            <input
            type={'text'}
            {...register('address.street')}
            />

            <input
            type={'text'}
            {...register('address.city')}
            />

            <button>save</button>
        </form>


    </div>);
}



