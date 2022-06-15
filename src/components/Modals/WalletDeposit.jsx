import React, { useContext } from "react";
import { ModalsContext } from "../../context";
import ModalNav from "../UI/ModalNav";
import InputComponent from "../UI/InputComponent";
import SelectComponent from "../UI/SelectComponent";
import ButtonsNavigation from "../UI/ButtonsNavigation";
import PaymentItem from "../UI/PaymentItem";

import { ReactComponent as DiamondImage } from "../../assets/icons/diamond2.svg";
import { ReactComponent as CloseBtn } from "../../assets/icons/close-btn.svg";
import { ReactComponent as Btc } from "../../assets/icons/btc.svg";
import { ReactComponent as USDIcon } from "../../assets/USD.svg";
import { ReactComponent as EthereumIcon } from "../../assets/icons/Ethereum.svg";
import { ReactComponent as InputIconPassImage } from "../../assets/icons/eye.svg";
import { ReactComponent as InputIconCopyFill } from "../../assets/icons/copy-fill.svg";
import { ReactComponent as ArrowDownIcon } from "../../assets/icons/arrowDown.svg";
import { ReactComponent as ArrowLeftIcon } from "../../assets/icons/arrowLeft.svg";
import { ReactComponent as QuestionIcon } from "../../assets/icons/question.svg";

import { ReactComponent as ApplePay } from "../../assets/icons/applepay.svg";
import { ReactComponent as Mastercard } from "../../assets/icons/mastercard.svg";
import { ReactComponent as Visa } from "../../assets/icons/visa.svg";

import "../../scss/modals/walletDeposit.scss";

const RenderDepositTab = () => {
  return (
    <>
      <SelectComponent
        label={"Deposit currency"}
        additionalLabel={"Record"}
        labelColor={"rgba(255, 255, 255, 0.8)"}
        value={"00.0000"}
        image={<Btc />}
        currency={"BTC"}
      />
      <InputComponent
        label={"Deposit Adress ( Note: Only Bitcoin )"}
        additionalLabel={"RTMV.....D431"}
        labelColor={"#3D4459"}
        placeholder={"Enter your wallet"}
        isReadonly={true}
        value={"TMVx2zs5KiyoN67m6EZE6Azemn63ThD431"}
        icon={<InputIconCopyFill />}
      />
      <InputComponent
        label={"Password"}
        additionalLabel={""}
        labelColor={"rgba(255, 255, 255, 0.8)"}
        placeholder={"Enter your pass"}
        isReadonly={false}
        icon={<InputIconPassImage />}
      />

      <img src={require("../../assets/qr.png")} alt="qr" className="qr" />

      <div className="walletDeposit-body-notice">
        <span>Notice: </span> Send only BTC to this address. Coins wil be
        deposited after 2 network confirmations
      </div>
    </>
  );
};

const RenderWithdrawTab = () => {
  return (
    <>
      <SelectComponent
        label={"Deposit currency"}
        additionalLabel={"Record"}
        labelColor={"rgba(255, 255, 255, 0.8)"}
        value={"00.0000"}
        image={<Btc />}
        currency={"BTC"}
      />
      <InputComponent
        label={"Deposit Adress ( Note: Only Bitcoin )"}
        additionalLabel={"RTMV.....D431"}
        labelColor={"#3D4459"}
        placeholder={"Enter your wallet"}
        isReadonly={true}
        value={"TMVx2zs5KiyoN67m6EZE6Azemn63ThD431"}
        icon={<InputIconCopyFill />}
      />
      <InputComponent
        label={"Withdraw Adress"}
        additionalLabel={""}
        labelColor={"rgba(255, 255, 255, 0.8)"}
        placeholder={"Fill in carefully according to the specific currency"}
        isReadonly={false}
        icon={<InputIconPassImage />}
      />
      <div className="walletDeposit-body-withdrawAdress">
        <label htmlFor="withdraw">Withdraw Adress</label>
        <div className="input">
          <input id="withdraw" type="text" placeholder="0.00000" />
          <div className="minMax">
            <p>Min</p>
            <p>25%</p>
            <p>50%</p>
            <p>Max</p>
          </div>
        </div>
      </div>

      <div className="walletDeposit-body-fee">
        Fee <span> 0.00017 BTC</span>
      </div>

      <button className="walletDeposit-body-confirm-btn primary-btn">
        Confirm
      </button>

      <div className="walletDeposit-body-notice">
        <span>Notice: </span> Send only BTC to this address. Coins wil be
        deposited after 2 network confirmations
      </div>
    </>
  );
};

const RenderBCSwampTab = () => {
  return (
    <React.Fragment>
      <ButtonsNavigation
        buttonsList={[{ text: "Swap" }, { text: "From altcoin", active: true }]}
        backgroundColor="#262B3D"
        activeColor="#3D4459"
      />
      <div className="walletDeposit-body-message">
        <span>From Altcoin: </span> Deposit using any ERC altcoins. Your funds
        will be convertered and credited in the chosen currency supported by
        GAMEDEFI. Currentlyt only alt coins on ERC chain are supported
      </div>
      <SelectComponent
        label={"Your Send (First Deposit Bonus)"}
        additionalLabel={"More"}
        additionalLabelColor={"#4CD06E"}
        labelColor={"rgba(255, 255, 255, 0.8)"}
        value={"$80"}
        additionalText={"≈ or above to get bonus"}
        image={<EthereumIcon />}
        currency={"1INCH"}
      />
      <p className="after-label">1INCH ≈ 0.00045023 ETH </p>
      <ArrowDownIcon className="arrow-down" />
      <SelectComponent
        label={"Your get Approximately"}
        additionalLabel={"Record"}
        additionalLabelColor={"#4CD06E"}
        labelColor={"rgba(255, 255, 255, 0.8)"}
        value={"0.02480423"}
        additionalText={"+100% bonus"}
        image={<EthereumIcon />}
        currency={"1INCH"}
      />
      <div className="network-fee">
        <p>
          Network fee: <span>0.0000244454 ETH</span>
        </p>
        <p>
          Exchange fee: <span>0.0000244454 ETH</span>
        </p>
        <p>
          Estimated time: <span>0.0000244454 ETH</span>
        </p>
      </div>
      <hr />
      <button className="walletDeposit-body-start-transaction primary-btn">
        Start Transaction
      </button>
    </React.Fragment>
  );
};

const RenderBuyCryptoTab = () => {
  return (
    <React.Fragment>
      <SelectComponent
        label={"Your pay with"}
        labelColor={"rgba(255, 255, 255, 0.8)"}
        value={"30.00"}
        image={<USDIcon />}
        currency={"USD"}
      />
      <SelectComponent
        label={"Your get"}
        labelColor={"rgba(255, 255, 255, 0.8)"}
        value={"0.0007423"}
        image={<Btc />}
        currency={"BTC"}
      />
      <p className="label">Payment Method Selection</p>
      <PaymentItem
        title={"Visa/Mastercard"}
        images={[<Visa />, <Mastercard />]}
      />
      <PaymentItem title={"Apple Pay"} images={[<ApplePay />]} />
      <hr />
      <button className="walletDeposit-body-start-transaction primary-btn">
        Buy now
      </button>
    </React.Fragment>
  );
};

const RenderVaultProTab = () => {
  return (
    <React.Fragment>
      <div className="annual-percentage">
        <p>
          Annual Percentage <span>5%</span>
        </p>
        <p className="secondary">
          Security Rules
          <QuestionIcon />
        </p>
      </div>
      <ButtonsNavigation
        buttonsList={[
          { text: "Transfer Out", active: true },
          { text: "Transfer In" },
        ]}
        backgroundColor="#262B3D"
        activeColor="#3D4459"
      />
      <SelectComponent
        label={"Your send"}
        labelColor={"rgba(255, 255, 255, 0.8)"}
        additionalLabel={"Wallet Balance: 0"}
        additionalLabelColor={"#55657E"}
        value={"30.00"}
        image={<USDIcon />}
        currency={"USD"}
        isMax
      />
      <button className="walletDeposit-body-start-transaction primary-btn transfer-btn">
        Transfer to Vault Pro
      </button>
    </React.Fragment>
  );
};

const RenderSecurityOptions = ({ handleActiveOptions }) => {
  return (
    <div>
      <div
        className="sequrityOptions-btn"
        onClick={() => handleActiveOptions()}
      >
        <ArrowLeftIcon />
        Security-2FA
      </div>
      <div className="sequrityOptions-download">
        Download and install <span>Google Autentificator</span>. Enable
        Two-factor Autentification to protect your account from unauthorized
        access.
      </div>
      <p className="sequrityOptions-text">
        Scan the QR-code with your Google Autenticator App or enter the secret
        key manually.
      </p>
      <img src={require("../../assets/qr.png")} alt="qr" className="qr" />
      <InputComponent
        label={"Your Secret Key"}
        labelColor={"#3D4459"}
        isReadonly={true}
        value={"4432dfdf4533m6EZE"}
        icon={<InputIconCopyFill />}
      />
      <p className="sequrityOptions-text">
        Write down this code, never reveral it to others. You can use it to
        regain access to your account if there is no access to the autenticator.
      </p>
      <hr />
      <div className="verification">
        <div className="verification-text">Verification code</div>
        <div className="verification-inputsList">
          {new Array(6).fill(0).map((el) => (
            <input className="verification-input" type="text" />
          ))}
        </div>
      </div>
      <button className="walletDeposit-body-start-transaction primary-btn">
        Enable
      </button>
    </div>
  );
};

const WalletDeposit = () => {
  const [activeItem, setActiveItem] = React.useState(0);
  const [activeOptions, setActiveOptions] = React.useState(false);
  const { isModalActive, setModalActive } = useContext(ModalsContext);

  const tabsList = [
    <RenderDepositTab />,
    <RenderWithdrawTab />,
    <RenderBCSwampTab />,
    <RenderBuyCryptoTab />,
    <RenderVaultProTab />,
  ];

  const handleActiveItem = (id) => {
    setActiveItem(id);
  };

  const handleActiveOptions = () => {
    setActiveOptions(!activeOptions);
  };

  return (
    <div className="layout">
      <div className="walletDeposit">
        <div className="walletDeposit-header">
          <div className="walletDeposit-header-title">
            <DiamondImage />
            Wallet
          </div>
          <CloseBtn className="close-btn" onClick={() => setModalActive("")} />
        </div>
        <div className="walletDeposit-body">
          {activeOptions ? (
            <RenderSecurityOptions handleActiveOptions={handleActiveOptions} />
          ) : (
            <>
              <ModalNav
                activeItem={activeItem}
                handleActiveItem={handleActiveItem}
              />
              {tabsList[activeItem]}

              <hr />
              <div className="walletDeposit-body-secure">
                To secure your assets, please
                <button
                  className="btn-2fa"
                  onClick={() => handleActiveOptions()}
                >
                  Enable 2FA
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WalletDeposit;
