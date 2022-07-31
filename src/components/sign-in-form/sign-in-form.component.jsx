import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { SignInContainer, Title, ButtonContainer } from "./sign-in-form.styles";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("user doesnt not exit");
          break;
        case "auth/wrong-password":
          alert("password doesnt match");
          break;
        default:
          console.log("error");
      }
      console.log(error.code);
    }
  };
  const logOnGoogle = async () => {
    await signInWithGooglePopup();
  };
  return (
    <SignInContainer>
      <Title>Sign in with email and password</Title>
      <span>Don't have an account ?</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />

        <ButtonContainer>
          <Button children="Sign In" type="submit" />
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={logOnGoogle}
            children="Google Sign in"
          />
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};
export default SignInForm;
