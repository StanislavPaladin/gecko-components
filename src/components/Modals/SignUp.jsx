import React, { useContext } from "react";
import { ModalsContext } from "../../context";
import InputComponent from "../UI/InputComponent";

import { ReactComponent as Reptile } from "../../assets/reptile-signUp.svg";
import { ReactComponent as Google } from "../../assets/icons/google.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as Fox } from "../../assets/icons/fox.svg";
import { ReactComponent as Waves } from "../../assets/icons/waves-logo.svg";
import { ReactComponent as InputIconPassImage } from "../../assets/icons/eye-close.svg";
import { ReactComponent as CloseBtn } from "../../assets/icons/close-btn.svg";
import { ReactComponent as GiftCard } from "../../assets/icons/gift_card.svg";

import "../../scss/modals/signUp.scss";

const SignUp = ({
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
      <div className="signUp">
        <div className="signUp-header">
          <div className="signUp-header-close" onClick={() => setModalActive("")}>
            <CloseBtn />
          </div>
          <div className="signUp-header-image">
            <Reptile/>
          </div>
          {/* <div className="signUp-header-coin">
            <FormCoin />
          </div>
          <div className="signUp-header-btn">
            <div className="signUp-header-btn-image">
              <DiamondImage />
            </div>
          </div> */}
        </div>
        <div className="signUp-form-wrapper">
        <div className="signUp-form">
          <div className="signUp-form-title">Sign Up</div>
          <div className="signUp-form-inputs">
            <InputComponent
              label={"Email"}
              additionalLabel={""}
              labelColor={"white"}
              placeholder={"Registreted E-mail Adress"}
              isReadonly={false}
              value={""}
              icon={""}
            />
            <InputComponent
              label={"Login Password"}
              additionalLabel={""}
              labelColor={"white"}
              placeholder={"Enter your pass"}
              isReadonly={false}
              value={""}
              icon={<InputIconPassImage />}
            />
            <select
              name="referal"
              id="referal"
              className="signUp-form-inputs-referal"
            >
              <option value="">Referal/Promo Code (Optional)</option>
            </select>
          </div>
          <div className="signUp-form-agree">
            <label className="signUp-form-agree-label">
              <input className="signUp-form-agree-checkbox" type="checkbox" />
              <span className="signUp-form-agree-pseudocheckbox">
                I agree with user agreement, and confirm that I am at least 18
                years old!
              </span>
            </label>
          </div>
          <div className="signUp-form-btns">
            <div className="pink-square"></div>
            <div className="signUp-form-btns-bonus">
              <GiftCard />
              <span>BONUS ACTIVATED</span>
            </div>
            <div className="signUp-form-btns-secondary btn">Sign in</div>
            <div className="signUp-form-btns-primary btn">
              <div className="signUp-form-btns-primary-blur"></div>
              Sign up</div>
          </div>
          <div className="signUp-form-tools">
            <div className="signUp-form-tools-title">Sign In directly</div>
            <div className="signUp-form-tools-wrapper">
              <div className="signUp-form-tools-wrapper-item">
                <Google />
              </div>
              <div className="signUp-form-tools-wrapper-item">
                <Facebook />
              </div>
              <div className="signUp-form-tools-wrapper-item">
                <Telegram />
              </div>
              <div className="signUp-form-tools-wrapper-item">
                <Fox />
              </div>
              <div className="signUp-form-tools-wrapper-item">
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

export default SignUp;
