import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
// import { SiGithub } from "react-icons/si";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import LoginLottie from "../assets/lottie/log-in.json";
import Lottie from "lottie-react";

const Login = () => {
  const { loginWithEmailPass, loginWithGoogle, setUser } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginWithEmailPass = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    loginWithEmailPass(email, password)
      .then((result) => {
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

        navigate(location?.state ? location.state : "/");
      })

      .catch((error) => {
        // console.log(error.message);
        Swal.fire({
          title: "Error!",
          text: "Failed to login",
          icon: "error",
          confirmButtonText: "Okay",
        });
      });
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
        navigate(location?.state ? location.state : "/");
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

  // const handleGithubLogin = () => {
  //   loginWithGithub()
  //     .then((result) => {
  //       const user = result.user;
  //       setUser(user);
  //       Swal.fire({
  //         title: "Success",
  //         position: "center",
  //         text: "Github Login is Successful",
  //         icon: "success",
  //         showConfirmButton: false,
  //         timer: 2000,
  //       });
  //       navigate(location?.state ? location.state : "/");
  //     })
  //     .catch((error) => {
  //       // console.log(error.message);

  //       toast.error("Failed to github login", {
  //         position: "top-center"
  //     });
  //     });
  // };

  return (
    <div className="lg:w-4/5 w-11/12 mx-auto hero pt-12 pb-20">
      <div className="flex lg:flex-row flex-col justify-between lg:gap-0 gap-8 items-center">

        <Lottie className="lg:w-1/2 lg:mr-20 md:w-80 w-72" animationData={LoginLottie} loop={true} />

        <div className="flex flex-col lg:w-1/2 md:w-[550px] w-full mx-auto shadow-md">
          <div className="text-center pb-8">
            <h1 className="md:text-5xl text-4xl font-bold">Login Now</h1>
          </div>
          <div className="bg-base-100 bg-opacity-70 shrink-0 shadow-lg rounded-lg">
            <form onSubmit={handleLoginWithEmailPass} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="input input-bordered md:w-full w-72"
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
                  className="input input-bordered md:w-full w-72"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-emerald-500 border-none text-lg text-white font-bold">
                  Login
                </button>
              </div>
            </form>

            <div className="w-11/12 md:px-0 px-2 mx-auto *:text-center">
              <p className="text-gray-700 font-semibold">
                If You Are Visit To First Time, Please{" "}
                <Link to="/register" className="text-secondary underline">
                  Register
                </Link>
              </p>

              <div className="divider w-11/12 mx-auto text-gray-700 font-semibold">
                Or
              </div>

              <div className="w-11/12 mx-auto pb-8 flex flex-col gap-5">
                <button
                  onClick={handleGoogleLogin}
                  className="btn btn-outline border border-amber-200 rounded-full shadow-md font-bold"
                >
                  Login With Google <FcGoogle className="text-xl" />
                </button>

                {/* <button
                onClick={handleGithubLogin}
                className="btn btn-outline border border-gray-300 rounded-full shadow-md font-bold"
              >
                Login With GitHub <SiGithub className="text-xl" />
              </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
