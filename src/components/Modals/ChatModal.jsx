import React, { useContext } from "react";
import { ModalsContext } from "../../context";
import PrivacyItem from "../UI/PrivacyItem";

import { ReactComponent as CloseBtn } from "../../assets/icons/close-btn.svg";
import { ReactComponent as ArrowLeftIcon } from "../../assets/icons/arrowLeft.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";

import "../../scss/modals/chatModal.scss";

const ChatModal = () => {
	const footerBtns = ["Friends", "Messages"];
	const [activeBtn, setActiveBtn] = React.useState(0);
	const [privacyItem, setPrivacyActive] = React.useState(false);
	const { isModalActive, setModalActive } = useContext(ModalsContext);

	return (
		<div className="layout">
			<div className="chatModal">
				<div className="chatModal-close">
					<CloseBtn onClick={() => setModalActive("")} />
				</div>
				{!privacyItem ? (
					<div className="chatModal-body">
						<div className="chatModal-body-head">
							<h3>Chat room</h3>
							<div
								className="options"
								onClick={() => setPrivacyActive(true)}
							>
								Options
							</div>
						</div>
						<div className="chatModal-body-content">
							<div className="search">
								<div className="search-btn">
									<SearchIcon />
								</div>
								<input
									type="text"
									className="search-input"
									placeholder="Search name"
								/>
							</div>
							<div className="chats-wrap">
								{!activeBtn ? (
									<div className="friends-list">
										<div className="friend-request">
											<div className="userPhoto">
												<UserIcon />
											</div>
											<div className="userText">
												<p className="title">
													Friend Request
												</p>
												<div className="text">
													Friend Request Received
												</div>
											</div>
										</div>
									</div>
								) : (
									<div className="chats-list">
										<div className="chats-list-buttons">
											<div className="chats-list-buttons-btn active">
												All chats
											</div>
											<div className="chats-list-buttons-btn">
												Stranger
											</div>
										</div>
										<div className="chats-list-items">
											<img
												src={require("../../assets/no-data-fish.png")}
												alt="oops"
											/>
										</div>
									</div>
								)}

								<div className="chats-area">
									<p>Select a chat to start messaging</p>
								</div>
							</div>
						</div>
						<div className="chatModal-body-footer">
							{footerBtns.map((el, idx) => {
								return (
									<>
										<div
											className={`chatModal-body-footer-btn ${
												activeBtn === idx
													? "active"
													: ""
											}`}
											onClick={() => setActiveBtn(idx)}
										>
											<p>{el}</p>
											<div className="chatModal-body-footer-btn-blur"></div>
										</div>
									</>
								);
							})}
						</div>
					</div>
				) : (
					<div className="chatModal-privacy">
						<div
							className="chatModal-privacy-btn"
							onClick={() => setPrivacyActive(false)}
						>
							<ArrowLeftIcon />
							Privacy
						</div>
						<PrivacyItem
							title={"Hide my gameing data on profile"}
							isActive={true}
							text={
								"Even if hidden, your avatar and username are always visible in chatrooms"
							}
						/>
						<PrivacyItem
							title={"Hide my username from public lists"}
							isActive={true}
							text={
								"If hidden, no one can view your profile by clicking on your avatar or username on public rankings or bets list."
							}
						/>
						<PrivacyItem
							title={"Hide my online presence in private chat"}
							isActive={true}
						/>
						<PrivacyItem
							title={"Allow private messages from strangers"}
							isActive={true}
						/>
						<PrivacyItem
							title={"Refuse any new friend request"}
							isActive={true}
						/>
						<PrivacyItem
							title={"Refuse tip from strangers"}
							isActive={false}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default ChatModal;
