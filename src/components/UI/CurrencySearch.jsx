import React from "react";

import { ReactComponent as BitCoin } from "../../assets/icons/bitcoin_icon.svg";
import { ReactComponent as Demo } from "../../assets/icons/demo_icon.svg";
import { ReactComponent as Search } from "../../assets/icons/search_icon.svg";
import { ReactComponent as DollarIcon } from "../../assets/icons/dollar_icon.svg";
import { ReactComponent as EuroIcon } from "../../assets/icons/euro_icon.svg";
import { ReactComponent as JpyIcon } from "../../assets/icons/jpy_icon.svg";

import "../../scss/components/currencySearch.scss";

const CurrencySearch = ({active,modalRef}) => {
  return (
    <div className={`currencySearch ${active ? "" : "hide"}`} ref={modalRef}>
      <div className="currencySearch-header">
        <div className="currencySearch-search">
          <input type="search" placeholder="Search"/>
          <Search />
        </div>
        <div className="currencySearch-results">
          <div className="currencySearch-results-shadow"></div>
          <div className="currencySearch-results-item demo">
            <div className="currencySearch-results-item-wrapper">
              <div className="currencySearch-results-item-wrapper-icon">
                <Demo />
              </div>
              <div className="currencySearch-results-item-wrapper-value">
                <div className="currencySearch-results-item-wrapper-value-active">
                  8.984002
                </div>
                <div className="currencySearch-results-item-wrapper-value-inactive">
                  00
                </div>
              </div>
            </div>
            <div className="currencySearch-results-item-name">DEMO</div>
          </div>
          <div className="currencySearch-results-item">
            <div className="currencySearch-results-item-wrapper">
              <div className="currencySearch-results-item-wrapper-icon">
                <BitCoin />
              </div>
              <div className="currencySearch-results-item-wrapper-value">
                <div className="currencySearch-results-item-wrapper-value-active">
                  8.984002
                </div>
                <div className="currencySearch-results-item-wrapper-value-inactive">
                  00
                </div>
              </div>
            </div>
            <div className="currencySearch-results-item-name">BTC</div>
          </div>
          <div className="currencySearch-results-item">
            <div className="currencySearch-results-item-wrapper">
              <div className="currencySearch-results-item-wrapper-icon">
                <Demo />
              </div>
              <div className="currencySearch-results-item-wrapper-value">
                <div className="currencySearch-results-item-wrapper-value-active">
                  8.984002
                </div>
                <div className="currencySearch-results-item-wrapper-value-inactive">
                  00
                </div>
              </div>
            </div>
            <div className="currencySearch-results-item-name">Eth</div>
          </div>
          <div className="currencySearch-results-item">
            <div className="currencySearch-results-item-wrapper">
              <div className="currencySearch-results-item-wrapper-icon">
                <BitCoin />
              </div>
              <div className="currencySearch-results-item-wrapper-value">
                <div className="currencySearch-results-item-wrapper-value-active">
                  8.984002
                </div>
                <div className="currencySearch-results-item-wrapper-value-inactive">
                  00
                </div>
              </div>
            </div>
            <div className="currencySearch-results-item-name">TRX</div>
          </div>
          <div className="currencySearch-results-item">
            <div className="currencySearch-results-item-wrapper">
              <div className="currencySearch-results-item-wrapper-icon">
                <Demo />
              </div>
              <div className="currencySearch-results-item-wrapper-value">
                <div className="currencySearch-results-item-wrapper-value-active">
                  8.984002
                </div>
                <div className="currencySearch-results-item-wrapper-value-inactive">
                  00
                </div>
              </div>
            </div>
            <div className="currencySearch-results-item-name">USDT</div>
          </div>
          <div className="currencySearch-results-item">
            <div className="currencySearch-results-item-wrapper">
              <div className="currencySearch-results-item-wrapper-icon">
                <BitCoin />
              </div>
              <div className="currencySearch-results-item-wrapper-value">
                <div className="currencySearch-results-item-wrapper-value-active">
                  8.984002
                </div>
                <div className="currencySearch-results-item-wrapper-value-inactive">
                  00
                </div>
              </div>
            </div>
            <div className="currencySearch-results-item-name">BTT</div>
          </div>
        </div>
      </div>
      <div className="currencySearch-footer">
        <div className="currencySearch-footer-wrapper">
          <div className="currencySearch-footer-wrapper-item-active">
            Default
          </div>
          <div className="currencySearch-footer-wrapper-item">
            <DollarIcon />
          </div>
          <div className="currencySearch-footer-wrapper-item">
            <EuroIcon />
          </div>
          <div className="currencySearch-footer-wrapper-item">
            <JpyIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencySearch;
