import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { loginWithEmailPass, loginWithGoogle, setUser, loginWithGithub } = useContext(AuthContext);

  const handleLoginWithEmailPass = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginWithEmailPass(email, password)
    .then(result => {
      const user = result.user;
      setUser(user);
      Swal.fire({
        title: "Success",
        position: "center",
        text: "Successfully Login",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
    })

    .catch(error => {
      // console.log(error.message);
      Swal.fire({
        title: "Error!",
        text: "Failed to login",
        icon: "error",
        confirmButtonText: "Okay",
      });
    })
  };

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          title: "Success",
          position: "center",
          text: "Google Login is Successful",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((error) => {
        // console.log(error.message);
        Swal.fire({
          title: "Error!",
          text: "Failed to google login",
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
  };

  const handleGithubLogin = () => {
    loginWithGithub()
      .then((result) => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          title: "Success",
          position: "center",
          text: "Github Login is Successful",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((error) => {
        // console.log(error.message);
        Swal.fire({
          title: "Error!",
          text: "Failed to github login",
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
  };

  return (
    <div className="hero bg-base-200 py-20">
      <div className="lg:w-2/5 md:w-3/5 w-11/12 mx-auto flex-col">
        <div className="text-center pb-8">
          <h1 className="md:text-5xl text-4xl font-bold">
            Login Now!
          </h1>
        </div>
        <div className="bg-base-100 shrink-0 shadow-lg rounded-lg">
          <form onSubmit={handleLoginWithEmailPass} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="input input-bordered"
                required
              />
              <label className="label justify-end">
                <a
                  href="#"
                  className="label-text-alt font-bold link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-violet-600 border-none text-lg text-white font-bold">
                Login
              </button>
            </div>
          </form>

          <div className="w-11/12 mx-auto *:text-center">
            <p className="text-gray-700 font-semibold">
              If You Are Visit To First Time, Please{" "}
              <Link to="/register" className="text-secondary underline">
                Register
              </Link>
            </p>

            <div className="divider w-11/12 mx-auto text-gray-700 font-semibold">
              Or
            </div>

            <div
              onClick={handleGoogleLogin}
              className="w-11/12 mx-auto pb-8 flex flex-col gap-5"
            >
              <button className="btn btn-outline border border-amber-200 rounded-full shadow-md font-bold">
                Login With Google <FcGoogle className="text-xl" />
              </button>

              <button
                onClick={handleGithubLogin}
                className="btn btn-outline border border-gray-300 rounded-full shadow-md font-bold"
              >
                Login With GitHub <SiGithub className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
