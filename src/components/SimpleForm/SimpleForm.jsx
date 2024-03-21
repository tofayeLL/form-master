
const SimpleForm = () => {

    const handleSubmitted = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log('submitted');
    }

    return (
        <div >
            <form onSubmit={handleSubmitted} className="space-y-3">
                <input type="text" name="name" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <br />
                <input type="email" name="email" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <br />
                <input type="text" name="phone" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <br />

                <button type="submit" className="btn">Button</button>

            </form>
        </div>
    );
};

export default SimpleForm;