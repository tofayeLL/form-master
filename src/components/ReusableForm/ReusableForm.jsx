
const ReusableForm = ({ formTitle, handleSubmit, submitBtnText = 'Submit', children }) => {


    const handleLocalSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value

        }
        handleSubmit(data);

    }



    return (
        <div >
            <h1 className="font-bold text-2xl mt-8 my-2">{children}</h1>
            <form onSubmit={handleLocalSubmit} className="space-y-3 ">
                <input type="text" name="name" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <br />
                <input type="email" name="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <br />
                <input type="password" name="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <br />

                <button type="submit" className="btn">{submitBtnText}</button>

            </form>

        </div>
    );
};

export default ReusableForm;