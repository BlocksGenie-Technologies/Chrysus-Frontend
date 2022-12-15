import { PrimaryGradientText } from "src/components/text";
import { ContentToggle } from "src/components/toggles";

export const FAQ = () => {
	return (
		<>
			<div className="mt-5 d-flex flex-column align-items-center justify-content-center">
				<div className="col-5">
					<div className="d-flex flex-column align-items-center justify-content-center">
						<PrimaryGradientText>FAQ's</PrimaryGradientText>
						<div className="w-100">
							{[1, 2, 3, 4, 5, 6].map((item) => (
								<ContentToggle
									title="The most popular question"
									content="Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla."
								/>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="mt-5"></div>
		</>
	);
};
