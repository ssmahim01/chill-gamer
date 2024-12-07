import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

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

        logOutUser()
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
    <div className="hero py-20">
      <div className="lg:w-2/5 md:w-3/5 w-11/12 mx-auto flex-col">
        <div className="text-center pb-8">
          <h1 className="lg:text-4xl text-3xl font-bold">
            Register By Your Info
          </h1>
        </div>
        <div className="bg-base-100 shrink-0 shadow-lg rounded-lg">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Type Your Name"
                className="input input-bordered"
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
                className="input input-bordered"
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
                placeholder="Type Your Password"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-info text-white/90 text-lg hover:btn-primary font-bold rounded-full shadow-md">
                Register
              </button>
            </div>
          </form>

          <div className="w-11/12 mx-auto *:text-center pb-10">
            <p className="text-gray-700 font-bold">
              Already Have An Account, Please
              <Link to="/login" className="text-fuchsia-600 underline ml-1">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
