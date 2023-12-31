import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import { isPasswordValid } from "../validations/formValidations";
import { TextInputs } from "./TextInputs";

const usernameErrorMessage = "Username not found";
const passwordErrorMessage =
  "Password must be over 4 characters and one capital letter";
const confirmPasswordErrorMessage = "Passwords are not the same";

export const Signup = () => {
  const { registerUser } = useAuth();

  const [usernameInput, setUsernameInput] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const usernameValid = usernameInput.length > 2;
  const passwordValid = isPasswordValid(password);
  const confirmPasswordValid = password === confirmPass;

  const showUsernameError = !usernameValid && error;
  const showPasswordError = !passwordValid && error;
  const showConfirmPasswordError = !confirmPasswordValid && error;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      registerUser({
        username: usernameInput,
        password: password,
      });

      if (!usernameValid || !passwordValid || !confirmPasswordValid) {
        setError(true);
      } else {
        setError(false);
        navigate("/coffee");
      }
    } catch (err) {
      toast.error("Signup Error");
      console.log(err);
    }
  };
  return (
    <form
      className="flex-col flex min-[320px]:h-screen"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <button
        onClick={() => navigate("/multi-login")}
        className="h-14 w-1/8 max-w-sm border border-gray-300 rounded-lg py-2 px-3 focus:outline-none bg-blue-500 focus:border-blue-500 text-white hover:bg-blue-700"
        style={{ alignSelf: "flex-start" }}
      >
        Back
      </button>
      <div className="text-center text-[#2E1E17] p-5 rounded-xl text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        <h2>Signup</h2>
      </div>
      <div className="flex flex-col space-y-4 ">
        <TextInputs
          label="Username:"
          onChange={(e) => setUsernameInput(e.target.value)}
          value={usernameInput}
          show={showUsernameError}
          message={usernameErrorMessage}
        />
        <TextInputs
          label="Password:"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          show={showPasswordError}
          message={passwordErrorMessage}
        />
        <TextInputs
          label="Confirm Password:"
          onChange={(e) => setConfirmPass(e.target.value)}
          value={confirmPass}
          show={showConfirmPasswordError}
          message={confirmPasswordErrorMessage}
        />
        <div className="flex flex-row gap-10 text-center cursor-pointer">
          <input
            type="submit"
            className="items-center h-14 w-full max-w-md border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 bg-green-500 hover:bg-green-600"
          />
        </div>
      </div>
    </form>
  );
};
