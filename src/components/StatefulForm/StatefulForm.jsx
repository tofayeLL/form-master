import { useState } from "react";


const StatefulForm = () => {
    const [name, setName] = useState('tofayel'); //set default value for name input
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
        if (password.length < 6) {
            setError('you must have to set password 6 digit')
        }

        else {
            setError('');
            console.log(name, email, password);
        }
        console.log(name, email, password);
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);

    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }




    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-3">

                <input value={name} onChange={handleName} type="text" name="name" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <br />

                <input onChange={handleEmail} type="email" name="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <br />

                <input onChange={handlePassword} type="password" name="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" required />
                <br />

                <button type="submit" className="btn">Button</button>

                {
                    // error ? <p>{error}</p> : ''
                    error && <p>{error}</p>
                }

            </form>


        </div>
    );
};

export default StatefulForm;