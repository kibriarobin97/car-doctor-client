import { Link } from "react-router-dom";
import register from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        // const users = { name, email, photo, password }
        // console.log(users)
        createUser(email, password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error.message)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col gap-20 lg:flex-row">
                <div className="w-1/2">
                    <img src={register} alt="" />
                </div>
                <div className="card w-1/2 shadow-2xl bg-base-100">
                    <h1 className="text-3xl text-center pt-5 font-bold">Register now!</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary font-bold" type="submit" value="Register" />
                        </div>
                    </form>
                    <p className="text-xs text-center pb-5 text-black font-bold">Already have an account?
                        <Link to='/login' className="underline text-primary"> Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;