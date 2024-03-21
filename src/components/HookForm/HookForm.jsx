import useInputState from "../../hooks/useInputState";

const HookForm = () => {

//  this one for name
//   const [name, handleChangeName] = useInputState('Tofayel Ahmed');

//   this one for email
  const emailState = useInputState('tofayel@gmail.com');


    const handleSubmit = (e) => {
        console.log(name);

        console.log(emailState.value)
        e.preventDefault();
        console.log('submitted');

    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-3">
                {/* <input value={name} onChange={handleChangeName} type="text" name="name" placeholder="Type here" className="input input-bordered w-full max-w-xs" /> */}
                <br />
                <input {...emailState} type="email" name="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <br />
                <input type="password" name="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <br />

                <button type="submit" className="btn">Button</button>

            </form>

        </div>
    );
};

export default HookForm;