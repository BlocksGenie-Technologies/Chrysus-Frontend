import { JumboButton } from "src/components/buttons/jumbo_button";

// Images
import JumbotronImage from "src/assets/images/jumbotron.svg";
import EcosystemImage from "src/assets/images/ecosystem.svg";
import LeafGold from "src/assets/icons/svg/leaf-gold.svg";
import UmbrellaGold from "src/assets/icons/svg/umbrella-gold.svg";
import CartGold from "src/assets/icons/svg/cart-gold.svg";
import SwapGold from "src/assets/icons/svg/swap-gold.svg";
import CCoinGold from "src/assets/icons/svg/c-coin-gold.svg";
import CarouselItem1 from "src/assets/images/carousel-item.jpg";

export const Services = () => {
	return (
		<>
			<div className="mt-5"></div>
			<div className="pt-5 pb-5 d-flex flex-row align-items-center justify-content-center">
				<div className="services-side left-side position-relative d-flex flex-column align-items-center justify-content-between">
					<div
						className="text-white services-left-top"
						style={{ opacity: "0.5" }}
					>
						Mint CHC Odio metussd edim pulvinar ipsum rutrum egeitsi sed dictum
						tincidunt.
					</div>
					<div
						className="text-white services-left-bottom "
						style={{ opacity: "0.5" }}
					>
						Lend or barrow, meiy tempore massa. Maecenas nisl sefilky zi
						vulputate dui sed pharetra.
					</div>
				</div>
				<div className="d-flex flex-column align-items-center justify-content-center">
					{/* Jumbotron buttons section start */}
					<div className="jumbotron-actions">
						{/* <img src={JumbotronImage} alt="jumbotron" /> */}
						<JumboButton
							className="action top-left"
							text="MINT"
							icon={
								<img
									className="jumbo-button-icon"
									src={LeafGold}
									alt="leaf-gold"
								/>
							}
						/>
						<JumboButton
							className="action bottom-left"
							text="LOAN"
							icon={
								<img
									className="jumbo-button-icon"
									src={UmbrellaGold}
									alt="umbrella-gold"
								/>
							}
						/>
						<JumboButton
							className="action top-right"
							text="SWAP"
							icon={
								<img
									className="jumbo-button-icon"
									src={SwapGold}
									alt="swap-gold"
								/>
							}
						/>
						<JumboButton
							className="action bottom-right"
							text="BUY"
							icon={
								<img
									className="jumbo-button-icon"
									src={CartGold}
									alt="card-gold"
								/>
							}
						/>
						<span className="action action-center coin-rotating">
							<img src={CCoinGold} alt="c-coin-gold.sg" />
						</span>
					</div>
					{/* Jumbotron buttons section end */}
				</div>
				<div className="services-side right-side d-flex flex-column align-items-center justify-content-between">
					<div className="text-white services-right" style={{ opacity: "0.5" }}>
						Swap CHC morbi mauris arcu, consequat facilisi ultricies vitae cras.
						Dictum diam.
					</div>
					<div className="text-white services-right" style={{ opacity: "0.5" }}>
						Shop with CHC, vestib ulumes lacinia morbi quam zarcusdey tempus ac
						facilisi nunc.
					</div>
				</div>
			</div>
			<div className="mt-5"></div>
		</>
	);
};
