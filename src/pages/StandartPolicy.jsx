import React from "react";

import "../scss/pages/StandartPolicy/index.scss";

const StandartPolicy = () => {
  const [accurancy, setAccurancy] = React.useState(false);

  return (
    <div className="container">
      <div className="standartPolicy">
        <div className="standartPolicy-head">
          <div
            className={`standartPolicy-head-btn list-btn ${
              !accurancy ? "active" : ""
            }`}
            onClick={() => setAccurancy(false)}
          >
            Privacy Policy
          </div>
          <div className="standartPolicy-head-btn list-btn">User Agreement</div>
          <div
            className={`standartPolicy-head-btn list-btn ${
              accurancy ? "active" : ""
            }`}
            onClick={() => setAccurancy(true)}
          >
            Coin Accuracy Limit
          </div>
          <div className="standartPolicy-head-btn list-btn">Support</div>
          <div className="standartPolicy-head-btn list-btn">Fee</div>
          <div className="standartPolicy-head-btn list-btn">
            Google Authenticator
          </div>
          <div className="standartPolicy-head-btn list-btn">FAQ</div>
          <div className="standartPolicy-head-btn list-btn">Cryptocurrency</div>
          <div className="standartPolicy-head-btn list-btn">
            Registration and Login
          </div>
          <div className="standartPolicy-head-btn list-btn">BCSwap Policy</div>
          <div className="standartPolicy-head-btn list-btn">
            Terms of Service
          </div>
          <div className="standartPolicy-head-btn list-btn">Providers</div>
          <div className="standartPolicy-head-btn list-btn">AML</div>
        </div>
        {accurancy ? (
          <div className="standartPolicy-content">
            <h2 className="standartPolicy-content-h2">Coin accuracy limit</h2>
            <p className="standartPolicy-content-p">
              Due to the limitation of data storage accuracy, changes in the
              amount less than a certain amount will not take effect. The
              minimum accuracy of most coins is consistent with the currency
              accuracy of the blockchain. For example, the minimum unit of SATS
              is 1. The minimum data storage accuracy of each coin is shown in
              the following table:
            </p>
            <div className="standartPolicy-content-table">
              <div className="head">
                <p className="standartPolicy-content-t">Currency</p>
                <p className="standartPolicy-content-t">Accuracy Limit</p>
              </div>
              <div className="standartPolicy-content-table-content">
                {new Array(26).fill(0).map((el, i) => {
                  return (
                    <div
                      className={`standartPolicy-content-table-content-item ${
                        i % 2 ? "active" : ""
                      }`}
                      key={i}
                    >
                      <p>BTC</p>
                      <p>0.000001</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="standartPolicy-content">
            <h2 className="standartPolicy-content-h2">Privacy Policy</h2>
            <p className="standartPolicy-content-p">
              You hereby acknowledge and accept that if we deem necessary, we
              are able to collect and otherwise use your personal data in order
              to allow you access and use of the Websites and in order to allow
              you to participate in the Games. We hereby acknowledge that in
              collecting your personal details as stated in the previous
              provision, we are bound by the Data Protection Act. We will
              protect your personal information and respect your privacy in
              accordance with best business practices and applicable laws. We
              will use your personal data to allow you to participate in the
              Games and to carry out operations relevant to your participation
              in the Games. We may also use your personal data to inform you of
              changes, new services and promotions that we think you may find
              interesting.
            </p>
            <p className="standartPolicy-content-p">
              If you do not wish to receive such direct marketing
              correspondences, you may opt out of the service. Your personal
              data will not be disclosed to third parties, unless it is required
              by law. As BC.GAME business partners or suppliers or service
              providers may be responsible for certain parts of the overall
              functioning or operation of the Website, personal data may be
              disclosed to them. The employees of BC.GAME have access to your
              personal data for the purpose of executing their duties and
              providing you with the best possible assistance and service. You
              hereby consent to such disclosures. We shall keep all information
              provided as personal data. You have the right to access personal
              data held by us about you. No data shall be destroyed unless
              required by law, or unless the information held is no longer
              required to be kept for the purpose of the relationship.
            </p>
            <h2 className="standartPolicy-content-h2">Cookies Policy</h2>
            <h3 className="standartPolicy-content-h3">1. What are cookies?</h3>
            <p className="standartPolicy-content-p">
              If you do not wish to receive such direct marketing
              correspondences, you may opt out of the service. Your personal
              data will not be disclosed to third parties, unless it is required
              by law. As BC.GAME business partners or suppliers or service
              providers may be responsible for certain parts of the overall
              functioning or operation of the Website, personal data may be
              disclosed to them. The employees of BC.GAME have access to your
              personal data for the purpose of executing their duties and
              providing you with the best possible assistance and service. You
              hereby consent to such disclosures. We shall keep all information
              provided as personal data. You have the right to access personal
              data held by us about you. No data shall be destroyed unless
              required by law, or unless the information held is no longer
              required to be kept for the purpose of the relationship.
            </p>
            <h3 className="standartPolicy-content-h3">
              2. Why do we use cookies in DEFI.GAME?
            </h3>
            <p className="standartPolicy-content-p">
              If you do not wish to receive such direct marketing
              correspondences, you may opt out of the service. Your personal
              data will not be disclosed to third parties, unless it is required
              by law. As BC.GAME business partners or suppliers or service
              providers may be responsible for certain parts of the overall
              functioning or operation of the Website, personal data may be
              disclosed to them. The employees of BC.GAME have access to your
              personal data for the purpose of executing their duties and
              providing you with the best possible assistance and service. You
              hereby consent to such disclosures. We shall keep all information
              provided as personal data. You have the right to access personal
              data held by us about you. No data shall be destroyed unless
              required by law, or unless the information held is no longer
              required to be kept for the purpose of the relationship.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StandartPolicy;
