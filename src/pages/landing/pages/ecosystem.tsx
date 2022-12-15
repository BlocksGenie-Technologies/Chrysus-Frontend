import { PrimaryGradientText } from "src/components/text";
import EcosystemImage from "src/assets/images/ecosystem.svg";

export const Ecosystem = () => {
	return (
		<>
			<div className="d-flex flex-column align-items-center justify-content-center">
				<div className="mt-5"></div>
				<PrimaryGradientText>Ecosystem</PrimaryGradientText>
				<p className="text-white col-8">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, at
					pharetra ipsum ac lorem amet. Vel dolor pharetra velit adipiscing
					tempus eu. Posuere lectus viverra lacus sed. Malesuada at mauris
					venenatis adipiscing. Non sagittis, mi eget pulvinar. Interdum mauris
					a sed.
				</p>
				<img src={EcosystemImage} />
			</div>
		</>
	);
};
