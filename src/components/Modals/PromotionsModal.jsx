import React, { useContext } from "react";
import { ModalsContext } from "../../context";
import Pagination from "../UI/Pagination";

import { ReactComponent as DiamondImage } from "../../assets/icons/diamond2.svg";
import { ReactComponent as CloseBtn } from "../../assets/icons/close-btn.svg";
import { ReactComponent as Tether } from "../../assets/icons/Tether.svg";

import { ReactComponent as Icon1 } from "../../assets/roulete/center_icon.svg";
import { ReactComponent as Icon2 } from "../../assets/roulete/arrow_chek.svg";
import { ReactComponent as Icon3 } from "../../assets/roulete/ethereum.svg";
import { ReactComponent as Icon4 } from "../../assets/roulete/bittorent.svg";

import "../../scss/modals/promotionsModal.scss";

const PromotionsModal = () => {
  const { isModalActive, setModalActive } = useContext(ModalsContext);

  return (
    <div className="layout">
      <div className="promotionsModal">
        <div className="promotionsModal-header">
          <div className="title">
            <DiamondImage />
            Promotions
          </div>
          <CloseBtn className="close-btn" onClick={() => setModalActive("")} />
        </div>
        <div className="body-wrap">
          <div className="promotionsModal-body">
            <div class="roulet">
              <div class="roulet__rouse"></div>

              <div class="roulet__center">
                <Icon1 />
              </div>
              <div class="roulet__wrap">
                <button class="roulet__check">
                  <Icon2 />
                </button>
                <div class="roulet__item roulet__item-1">
                  <p>0.0001</p>
                  <div class="roulet__icon">
                    <Icon3 />
                  </div>
                </div>
                <div class="roulet__item roulet__item-2">
                  <p>1000.0</p>
                  <div class="roulet__icon">
                    <Icon4 />
                  </div>
                </div>
                <div class="roulet__item roulet__item-3">
                  <p>0.1000</p>
                  <div class="roulet__icon">
                    <Icon3 />
                  </div>
                </div>
                <div class="roulet__item roulet__item-4">
                  <p>10.000</p>
                  <div class="roulet__icon">
                    <Icon4 />
                  </div>
                </div>
                <div class="roulet__item roulet__item-5">
                  <p>0.0250</p>
                  <div class="roulet__icon">
                    <Icon3 />
                  </div>
                </div>
                <div class="roulet__item roulet__item-6">
                  <p>50 000</p>
                  <div class="roulet__icon">
                    <Icon4 />
                  </div>
                </div>
                <div class="roulet__item roulet__item-7">
                  <p>10.000</p>
                  <div class="roulet__icon">
                    <Icon3 />
                  </div>
                </div>
                <div class="roulet__item roulet__item-8">
                  <p>500.00</p>
                  <div class="roulet__icon">
                    <Icon4 />
                  </div>
                </div>
                <div class="roulet__item roulet__item-9">
                  <p>0.00005</p>
                  <div class="roulet__icon">
                    <Icon3 />
                  </div>
                </div>
                <div class="roulet__item roulet__item-10">
                  <p>5.0000</p>
                  <div class="roulet__icon">
                    <Icon4 />
                  </div>
                </div>
                <div class="roulet__item roulet__item-11">
                  <p>0.5000</p>
                  <div class="roulet__icon">
                    <Icon3 />
                  </div>
                </div>
                <div class="roulet__item active roulet__item-12">
                  <p>100</p>
                  <div class="roulet__icon">
                    <Icon3 />
                  </div>
                </div>
              </div>
            </div>
            <div className="promotionsModal-body-content">
              <h2>Ethereum Spin</h2>
              <h3>Take away up to</h3>
              <h4>100 ETH</h4>
              <p>Play favorite games and catch 1 spin for each 0.1 ETH wager</p>
              <button className="primary-btn">Log in and spin</button>
              <div className="spinsList">
                {new Array(4).fill(0).map((el, i) => {
                  return (
                    <div className={`spinItem ${!(i % 2) ? "active" : ""}`}>
                      James Smith
                      <Tether />
                      <span>0.23434</span>
                    </div>
                  );
                })}
              </div>
              <Pagination />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionsModal;
