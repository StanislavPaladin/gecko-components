import React, { useContext } from "react";
import { ModalsContext } from "../../context";
import InputComponent from "../UI/InputComponent";

import { ReactComponent as DiamondImage } from "../../assets/icons/diamond2.svg";
import { ReactComponent as CloseBtn } from "../../assets/icons/close-btn.svg";
import { ReactComponent as FormCoin } from "../../assets/form-coin.svg";
import { ReactComponent as Google } from "../../assets/icons/google.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as Fox } from "../../assets/icons/fox.svg";
import { ReactComponent as Waves } from "../../assets/icons/waves-logo.svg";
import { ReactComponent as InputIconPassImage } from "../../assets/icons/eye.svg";

import "../../scss/modals/signIn.scss";

const SignIn = ({
  label,
  additionalLabel,
  labelColor,
  placeholder,
  value,
  isReadonly,
  icon,
}) => {
  const { isModalActive, setModalActive } = useContext(ModalsContext);
  return (
    <div className="layout">
      <div className="signIn">
        <div className="signIn-header">
          <div className="signIn-header-close" onClick={() => setModalActive("")}>
            <CloseBtn />
          </div>
          {/* <div className="signIn-header-coin">
            <FormCoin />
          </div>
          <div className="signIn-header-btn">
            <div className="signIn-header-btn-image">
              <DiamondImage />
            </div>
          </div> */}
        </div>
        <div className="signIn-form-wrapper">
        <div className="signIn-form">
          <div className="signIn-form-title">Sign In</div>
          <div className="signIn-form-inputs">
            <InputComponent
              label={"Email"}
              additionalLabel={""}
              labelColor={"white"}
              placeholder={"Enter your email"}
              isReadonly={false}
              value={""}
              icon={""}
            />
            <InputComponent
              label={"Password"}
              additionalLabel={""}
              labelColor={"white"}
              placeholder={"Enter your pass"}
              isReadonly={false}
              value={""}
              icon={<InputIconPassImage />}
            />
          </div>
          <div className="signIn-form-help">Forget password?</div>
          <div className="signIn-form-btns">
            <div className="signIn-form-btns-primary">
              <div className="signIn-form-btns-primary-blur"></div>
              Sign in</div>
            <div className="signIn-form-btns-secondary">Sign up</div>
          </div>
          <div className="signIn-form-tools">
            <div className="signIn-form-tools-title">Sing In directly with</div>
            <div className="signIn-form-tools-wrapper">
              <div className="signIn-form-tools-wrapper-item">
                <Google />
              </div>
              <div className="signIn-form-tools-wrapper-item">
                <Facebook />
              </div>
              <div className="signIn-form-tools-wrapper-item">
                <Telegram />
              </div>
              <div className="signIn-form-tools-wrapper-item">
                <Fox />
              </div>
              <div className="signIn-form-tools-wrapper-item">
                <Waves />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
