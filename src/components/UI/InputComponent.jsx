import React from "react";

import "../../scss/components/inputComponent.scss";

const InputComponent = ({
	label,
	additionalLabel,
	labelColor,
	placeholder,
	value,
	isReadonly,
	icon,
	isMinMaxComponent,
	isColoredWord,
  wordToColor,
  wordColor
}) => {

	const splittedLabel = label.split(" ");
  
	return (
		<div className="inputComponent">
			<div className="inputComponent-labels">
				<label
					style={{ color: labelColor }}
					htmlFor="input"
					className="inputComponent-labels-item"
				>
					{isColoredWord
						? splittedLabel.map((word, idx) =>
								word === wordToColor ? (
									<span style={{color: wordColor}} key={idx}>{word + " "}</span>
								) : (
									<span key={idx} >{word + " "}</span>
								)
						  )
						: label}
				</label>
				<label
					style={{ color: labelColor }}
					htmlFor="input"
					className="inputComponent-labels-item"
				>
					{additionalLabel}
				</label>
			</div>
			<div className="inputComponent-wrapper">
				<input
					name="input"
					type="text"
					className="inputComponent-wrapper-input"
					value={value}
					placeholder={placeholder}
					readOnly={isReadonly}
				/>
				<div className="inputComponent-wrapper-icon">{icon}</div>
			</div>
		</div>
	);
};

export default InputComponent;
