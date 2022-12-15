import { PrimaryGradientText } from "src/components/text";

export const About = () => {
	return (
		<>
			<div className="mt-5"></div>
			<div className="row d-flex flex-row justify-content-center">
				<div className="mt-5"></div>
				<div className="col-6 text-center">
					<PrimaryGradientText>About US</PrimaryGradientText>
					<div className="mt-5"></div>
					<p className="text-white">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, at
						pharetra ipsum ac lorem amet. Vel dolor pharetra velit adipiscing
						tempus eu. Posuere lectus viverra lacus sed. Malesuada at mauris
						venenatis adipiscing. Non sagittis, mi eget pulvinar. Interdum
						mauris a sed.
					</p>
				</div>
			</div>
			<div className="row">
				<div className="col-12 text-center">
					<div className="mt-5"></div>
					<PrimaryGradientText>About US</PrimaryGradientText>
					<div className="mt-4"></div>
					<div className="w-100 d-flex flex-row justify-content-center">
						<div className="roadmap">
							<div className="now  d-flex flex-column align-items-start">
								<PrimaryGradientText> Now</PrimaryGradientText>
								<ul>
									<li className="text">Scelerisque ultrices sit sed neque</li>
									<li className="text">Nisi, tortor in facilisi aliquam</li>
									<li className="text">
										Elementum, massa sollicitudin dui dolor
									</li>
								</ul>
							</div>
							<div className="milestone1 d-flex flex-column align-items-start">
								<PrimaryGradientText> Milestone 1</PrimaryGradientText>
								<ul>
									<li className="text">Quam tortor rhoncus in enim</li>
									<li className="text">Tincidunt morbi mattis vitae commodo</li>
									<li className="text">
										Vestibulum vitae diam malesuada ultrices
									</li>
									<li className="text">Euismod vitae turpis arcu amet</li>
									<li className="text">
										Magnis sit porttitor magna pellentesque
									</li>
								</ul>
							</div>
							<div className="milestone2 d-flex flex-column align-items-start">
								<PrimaryGradientText> Milestone 2</PrimaryGradientText>
								<ul>
									<li className="text">Semper neque augue interdum sagittis</li>
									<li className="text">Mauris facilisis nibh faucibus eu</li>
									<li className="text">
										Bibendum ultrices nisl, eget habitasse
									</li>
									<li className="text">Pulvinar enim posuere id mus</li>
									<li className="text">
										Sit gravida molestie egestas praesent
									</li>
									<li className="text">
										Tellus ullamcorper convallis eget augue
									</li>
								</ul>
							</div>
							<div className="milestone3 d-flex flex-column align-items-start">
								<PrimaryGradientText> Milestone 3</PrimaryGradientText>
								<ul>
									<li className="text">
										<b>Nibh mattis elementum libero lacinia</b>
									</li>
									<li className="text">Nunc odio venenatis sit suspendisse</li>
									<li className="text">Arcu id mollis dignissim habitasse</li>
									<li className="text">Lectus arcu risus integer molestie</li>
									<li className="text">Lectus lobortis congue donec eget</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="mt-4"></div>
				</div>
			</div>
		</>
	);
};
