import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import Lottie from "lottie-react";
import RegisterLottie from "../assets/lottie/register.json";

const Register = () => {
  const { registerAccount, setUser, updateProfileInfo, logOutUser } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const photo = event.target.photo.value;
    const password = event.target.password.value;

    const passwordVerification = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    if (!passwordVerification.test(password)) {
      toast.error(
        "Must have an uppercase, lowercase and length at least 6 character",
        {
          position: "top-center",
        }
      );
      return;
    }

    const profileInfo = {
      displayName: name,
      photoURL: photo,
    };

    registerAccount(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          title: "Success",
          position: "center",
          text: "Successfully Registered",
          icon: "success",
          showConfirmButton: false,
          timer: 2000,
        });

        logOutUser();
        navigate("/login");

        updateProfileInfo(profileInfo).then(() => {
          //    console.log("profile updated");
        });
      })
      .catch((error) => {
        // console.log(error.message);
        toast.error("Register failed", {
          position: "top-center",
        });
      });
  };

  return (
    <div className="lg:w-4/5 w-11/12 mx-auto hero pt-12 pb-20">
      <div className="flex lg:flex-row-reverse flex-col justify-between lg:gap-0 gap-8 items-center">

      <Lottie className="lg:w-1/2 lg:ml-20 md:w-80 w-72 lg:mt-20" animationData={RegisterLottie} loop={true} />

        <div className="lg:w-1/2 md:w-[550px] w-full mx-auto shadow-md">
          <div className="text-center pb-8">
            <h1 className="lg:text-4xl text-3xl font-bold">
              Register By Your Info
            </h1>
          </div>
          <div className="bg-base-100 bg-opacity-70 shrink-0 shadow-lg rounded-lg">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Type Your Name"
                  className="input input-bordered md:w-full w-72"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type Your Email"
                  className="input input-bordered md:w-full w-72"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Provide Your Photo URL"
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
                  placeholder="Type Your Password"
                  className="input input-bordered md:w-full w-72"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-secondary text-white/90 text-lg hover:btn-primary font-bold rounded-full shadow-md">
                  Register
                </button>
              </div>
            </form>

            <div className="w-11/12 mx-auto *:text-center pb-10">
              <p className="text-gray-700 font-bold">
                Already Have An Account, Please
                <Link to="/login" className="text-emerald-600 underline ml-1">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
