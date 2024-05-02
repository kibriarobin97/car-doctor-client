import { Link } from "react-router-dom";
import login from "../../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {

    const {loginUser} = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // const user = {email, password}
        // console.log(user)
        loginUser(email, password)
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
                    <img src={login} alt="" />
                </div>
                <div className="card w-1/2 shadow-2xl bg-base-100">
                    <h1 className="text-3xl text-center pt-5 font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary font-bold" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className="text-xs text-center pb-5 text-black font-bold">Do not have an account?
                        <Link to='/register' className="underline text-primary"> Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;