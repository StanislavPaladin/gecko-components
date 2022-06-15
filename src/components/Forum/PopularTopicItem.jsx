import React from "react";

import "../../scss/pages/Forum/popularTopicItem.scss";

const PopularTopicItem = ({color="mediumorchid"}) => {
	return (
		<div className="popularTopicItem">
			<div className="popularTopicItem-main">
				<div className="popularTopicItem-main-photo">
                    <img src={require("../../assets/userPhoto.png")} alt="user" />
                </div>
				<div className="popularTopicItem-main-about">
					<div className="popularTopicItem-main-about-text">Challenge en Keno!</div>
					<div className="popularTopicItem-main-about-text">By <span style={{color: color}}>s0urse</span>  </div>
					<div className="popularTopicItem-main-about-time">Started 13 hours ago</div>
				</div>
			</div>
			<div className="popularTopicItem-topics">25</div>
		</div>
	);
};

export default PopularTopicItem;
