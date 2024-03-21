import { useEffect, useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    useEffect(() => {
        nameRef.current.focus();
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted');
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);

    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input ref={nameRef} type="text" name="name" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <br />
                <input ref={emailRef} defaultValue={'tofayel@gmail.com'} type="email" name="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <br />
                <input ref={passwordRef} type="password" name="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <br />

                <button type="submit" className="btn">Button</button>

            </form>

        </div>
    );
};

export default RefForm;