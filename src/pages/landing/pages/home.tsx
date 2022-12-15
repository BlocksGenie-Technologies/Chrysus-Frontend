import {
	CircleExpandButton,
	PlayTourButton,
	PrimaryGradientButton,
} from "src/components/buttons";
import { Link, useNavigate } from "react-router-dom";
import { Leaf } from "src/assets/icons/leaf";
import { COLORS } from "src/assets/styles/theme";
import { Transfer } from "src/assets/icons/transfer";
import { Umbrella } from "src/assets/icons/umbrella";
import { Cart } from "src/assets/icons/cart";
import { H5, P } from "src/components/typography";
import { Facebook, Instagram, Linkedin, Twitter } from "react-feather";
import { Button, Container } from "reactstrap";
import TelegramGoldIcon from "src/assets/icons/svg/telegram-gold.svg";
import TelegramWhiteIcon from "src/assets/icons/svg/telegram-white.svg";
import TwitterGoldIcon from "src/assets/icons/svg/twitter-gold.svg";
import TwitterWhiteIcon from "src/assets/icons/svg/twitter-white.svg";
import DiscordGoldIcon from "src/assets/icons/svg/discord-gold.svg";
import DiscordWhiteIcon from "src/assets/icons/svg/discord-white.svg";
import FacebookGoldIcon from "src/assets/icons/svg/facebook-gold.svg";
import FacebookWhiteIcon from "src/assets/icons/svg/facebook-white.svg";
import GitlabGoldIcon from "src/assets/icons/svg/gitlab-gold.svg";
import GitlabWhiteIcon from "src/assets/icons/svg/gitlab-white.svg";
import { JumboButton } from "src/components/buttons/jumbo_button";
import { CCarousel, CCarouselItem } from "src/ccarousel/ccarousel";
import { CSelectOption } from "src/types/ui";
// images and icons
import JumbotronImage from "src/assets/images/jumbotron.svg";
import EcosystemImage from "src/assets/images/ecosystem.svg";
import LeafGold from "src/assets/icons/svg/leaf-gold.svg";
import UmbrellaGold from "src/assets/icons/svg/umbrella-gold.svg";
import CartGold from "src/assets/icons/svg/cart-gold.svg";
import SwapGold from "src/assets/icons/svg/swap-gold.svg";
import CCoinGold from "src/assets/icons/svg/c-coin-gold.svg";
import CarouselItem1 from "src/assets/images/carousel-item.jpg";
import SendDarkIcon from "src/assets/icons/svg/send-dark.svg";
import { useWindowSize } from "src/hooks";
import { useState } from "react";
import { MintModal } from "src/widgets/mint_modal";
import { CInput } from "src/components/inputs/cinput";
import { CSelect } from "src/components/select";
import TransferBlack from "src/assets/icons/svg/transfer-black.svg";
import Chrysus from "src/assets/icons/svg/chrysus.svg";
import CWhite from "src/assets/icons/svg/coins/c-white.svg";
import ETHWhite from "src/assets/icons/svg/coins/eth-white.svg";
import DAIWhite from "src/assets/icons/svg/coins/dai-white.svg";
import XRPWhite from "src/assets/icons/svg/coins/xrp-white.svg";
import XLMWhite from "src/assets/icons/svg/coins/xlm-white.svg";
import USDTWhite from "src/assets/icons/svg/coins/usdt-white.svg";
import SearchBlack from "src/assets/icons/svg/search-black.svg";
import ProductModalBanner from "src/assets/icons/svg/product-modal-banner.svg";
import { SwapModal } from "src/widgets/modals/swap-modal";
import { ShopModal } from "src/widgets/modals/shop-modal";

export const Home = () => {
	const [width, height] = useWindowSize();
	const [swapModal, setSwapModal] = useState<boolean>(false);
	const [shopModal, setShopModal] = useState<boolean>(false);
	const navigate = useNavigate();
	return (
		<>
			<Container>
				{/* Jumbotron section */}
				<div className="row my-5"></div>
				<div className="row my-5">
					<div className="col-md-6">
						<div className="d-flex flex-column justify-content-center align-items-center w-100 h-100">
							<div className="d-flex flex-column justify-content-start align-items-start w-100">
								<span
									style={{
										fontStyle: "normal",
										fontWeight: 600,
										fontSize: "32px",
										lineHeight: "40px",
										color: "#FFFFFF",
									}}
								>
									Decenterlized Allrounder
								</span>
								<span
									className="my-3"
									style={{
										fontStyle: "normal",
										fontWeight: "400",
										fontSize: "16px",
										lineHeight: "24px",
										color: "#846424",
									}}
								>
									Innovative, secure and smart ecosystem
								</span>
								<PlayTourButton className="my-3" />
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="d-flex flex-row align-items-center justify-content-center">
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
						</div>
					</div>
				</div>
				<div className="row my-5"></div>
			</Container>
			{/* About CHC section */}
			<div className="row my-5"></div>
			<Container>
				<div className="row my-5">
					<div className="d-flex flex-row align-items-center justify-content-center w-100">
						<div className="d-flex flex-column align-items-center justify-content-center">
							<span
								style={{
									fontStyle: "normal",
									fontWeight: "600",
									fontSize: "24px",
									lineHeight: "32px",
									textAlign: "center",
									color: "#FFFFFF",
								}}
							>
								About Chrysus Coin (CHC)
							</span>
							<span
								style={{
									fontStyle: "normal",
									fontWeight: "300",
									fontSize: "16px",
									lineHeight: "24px",
									textAlign: "center",
									color: "#FFFFFF",
								}}
							>
								Project Chrysus aims to be a fully decentralized ecosystem
								revolving around Chrysus Coin. Chrysus Coin (Chrysus) is an
								ERC20 token, deployed on the Ethereum network which is pegged to
								the price of gold (XAU/USD) using Decentralized Finance (DeFi)
								best practices. The ecosystem around Chrysus will involve a SWAP
								solution, a lending solution and an eCommerce integration
								solution allowing for the use of Chrysus outside of the DeFi
								ecosystem. One of the main goals of Chrysus is to not just
								closely follow the price of gold, but also to be a cash flow
								generating token. This is achieved through the Chrysus
								Governance Token (CGT) which will serve both as a
								decentralization tool for the system and as a reward tool for
								Chrysus token minters. Fees collected through the different
								components of the Project Chrysus ecosystem will be
								re-distributed to CGT token holders who actively participate in
								the stability mechanisms of the platform
							</span>
							<Link
								className="my-5"
								to=""
								style={{
									fontStyle: "normal",
									fontWeight: "400",
									fontSize: "14px",
									lineHeight: "16px",
									letterSpacing: "1px",
									textDecorationLine: "underline",
									color: "#846424",
								}}
							>
								Explore the Technology
							</Link>
						</div>
					</div>
				</div>
			</Container>
			{/* Bg animation start */}
			<div className="row">
				<div className="col-12 digital-bg-animation">
					<div className="row animation-wrapper">
						<div className="col-12 content p-lg-5">
							{/* Cards section */}
							<div className="row my-5 py-4">
								<div className="col-md-6">
									<div className="w-100">
										<LeftCard
											title="Mint CHC"
											text="Mint your CHC token now"
											icon={
												<Leaf
													fill="none"
													stroke={COLORS.white}
													hoverStroke={COLORS.primary}
													style={{ transform: "scale(1.5)" }}
												/>
											}
										/>
									</div>
								</div>
								<div className="col-md-6 cards-section-fix">
									<RightCard
										title="Swap CHC"
										text="Swap your CHC tokens with other cryptocurrencies"
										icon={
											<Transfer
												fill="none"
												stroke={COLORS.white}
												hoverStroke={COLORS.primary}
												style={{ transform: "scale(1.5)" }}
											/>
										}
									/>
								</div>
							</div>
							<div className="row my-5 py-4">
								<div className="col-md-6">
									<div className="w-100">
										<LeftCard
											title="Loan with CHC"
											text="Individuals with long-term investments in Ether and tokens (“HODLers”) can use a money market as a source of additional returns on their investment."
											icon={
												<Umbrella
													fill="none"
													stroke={COLORS.white}
													hoverStroke={COLORS.primary}
													style={{ transform: "scale(1.5)" }}
												/>
											}
										/>
									</div>
								</div>
								<div className="col-md-6">
									<RightCard
										title="Buy with CHC"
										text="With the ever increasing use of the internet and its popularity among all demographic segments, electronic commerce is by all means the way to go for virtually all businesses."
										icon={
											<Cart
												fill="none"
												stroke={COLORS.white}
												hoverStroke={COLORS.primary}
												style={{ transform: "scale(1.5)" }}
											/>
										}
									/>
								</div>
							</div>
							{/* Ecosystem section */}
							<div className="row my-5">
								<div
									className="d-flex flex-row align-items-center justify-content-center w-100 p-5"
									style={{ background: "#262522" }}
								>
									<div className="d-flex flex-column align-items-center justify-content-center">
										<div
											style={{
												fontStyle: "normal",
												fontWeight: "600",
												fontSize: "24px",
												lineHeight: "32px",
												textAlign: "center",
												color: "#FFFFFF",
											}}
										>
											Chrysus Ecosystem
										</div>
										<div
											style={{
												fontFamily: "'Montserrat'",
												fontStyle: "normal",
												fontWeight: "300",
												fontSize: "16px",
												lineHeight: "24px",
												textAlign: "center",
												color: "#FFFFFF",
											}}
										>
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Neque, at pharetra ipsum ac lorem amet. Vel dolor pharetra
											velit adipiscing tempus eu. Posuere lectus viverra lacus
											sed. Malesuada at mauris venenatis adipiscing. Non
											sagittis, mi eget pulvinar. Interdum mauris a sed.
											<div className="my-3">
												<img
													style={{ width: "100%" }}
													src={EcosystemImage}
													alt="ecosystem"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Bg animation end */}
			{/* Community Section */}
			<div className="row my-5 p-lg-5">
				<div className="col-lg-6">
					<div className="w-100">
						<span
							style={{
								fontStyle: "normal",
								fontWeight: "600",
								fontSize: "24px",
								lineHeight: "32px",
								color: "#FFFFFF",
							}}
						>
							Join Our Community
						</span>
					</div>
					<div className="w-100 my-5">
						<p
							style={{
								fontStyle: "normal",
								fontWeight: "300",
								fontSize: "16px",
								lineHeight: "24px",
								color: "#FFFFFF",
							}}
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
							ultrices sed in arcu hendrerit consequat velit, interdum tellus.{" "}
						</p>
					</div>
				</div>
				<div className="col-lg-6 text-center">
					<div className="my-4"></div>
					<CircleExpandButton
						color="primary"
						outline={true}
						icon={<img src={TelegramGoldIcon} alt="telegram-gold.svg" />}
						hoverIcon={<img src={TelegramWhiteIcon} alt="telegram-white.svg" />}
						text="Telegram"
					/>
					<CircleExpandButton
						color="primary"
						outline={true}
						icon={<img src={TwitterGoldIcon} alt="twitter-gold.svg" />}
						hoverIcon={<img src={TwitterWhiteIcon} alt="twitter-white.svg" />}
						text="Twitter"
					/>
					<CircleExpandButton
						color="primary"
						outline={true}
						icon={<img src={FacebookGoldIcon} alt="facebook-gold.svg" />}
						hoverIcon={<img src={FacebookWhiteIcon} alt="facebook-white.svg" />}
						text="Facebook"
					/>
					<CircleExpandButton
						color="primary"
						outline={true}
						icon={<img src={DiscordGoldIcon} alt="discord-gold.svg" />}
						hoverIcon={<img src={DiscordWhiteIcon} alt="discord-white.svg" />}
						text="Discord"
					/>
					<CircleExpandButton
						color="primary"
						outline={true}
						icon={<img src={GitlabGoldIcon} alt="gitlab-gold.svg" />}
						hoverIcon={<img src={GitlabWhiteIcon} alt="gitlab-white.svg" />}
						text="Gitlab"
					/>
				</div>
			</div>
			{/* Carousel and blog section */}
			<div className="row p-3">
				<div className="col-lg-8">
					<div className="flex flex-row justify-content-end align-items-center">
						<div>
							<CCarousel>
								{[1, 2, 3, 4].map((item) => (
									<CCarouselItem>
										<div className="row">
											<div className="col-lg-5">
												<img src={CarouselItem1} alt="carousel-item.jpg" />
											</div>
											<div className="col-lg-7 p-4">
												<h1 className="text-white">Featured Blog</h1>
												<div className="mb-3"></div>
												<p className="text-primary">April 7, 2022</p>
												<p
													className="text-white"
													style={{ whiteSpace: "normal" }}
												>
													Lorem ipsum dolor sit amet, ectetur adipiscing elit
													pretium.
												</p>
											</div>
										</div>
									</CCarouselItem>
								))}
							</CCarousel>
						</div>
					</div>
				</div>
				<div className="col-lg-4">
					<div className="row">
						<div className="col-12">
							<div className="row">
								<h1 className="text-white">Subscribe</h1>
							</div>
							<div className="row">
								<p className="text-primary">
									Enter your email below for latest blogs and news
								</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div
							className="d-flex flex-row align-item-center justify-content-between"
							style={{
								border: "1px solid #846424",
								borderRadius: "32px",
								backgroundColor: "transparent",
								padding: "0.5em",
							}}
						>
							<input
								type="email"
								placeholder="Email"
								style={{
									outline: "none",
									border: "none",
									paddingLeft: "1em",
									fontFamily: "'Montserrat'",
									fontStyle: "normal",
									fontWeight: "300",
									fontSize: "16px",
									lineHeight: "24px",
									color: "white",
									background: "transparent",
								}}
							/>
							{width <= 460 ? (
								<PrimaryGradientButton
									className="text-uppercase"
									onClick={() => {}}
								>
									<img src={SendDarkIcon} alt="send-dark.svg" />
								</PrimaryGradientButton>
							) : (
								<PrimaryGradientButton
									className="text-uppercase"
									onClick={() => {}}
								>
									Subscribe
								</PrimaryGradientButton>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className="mb-5"></div>
			{/* Swap Modal */}
			<SwapModal showSwapModal={swapModal} />
			{/* Shop Modal */}
			<ShopModal showShopModal={shopModal} />
		</>
	);
};

// Card components

interface ICardData {
	title: string;
	text: string;
	icon: React.ReactNode;
}

const LeftCard = ({ title, text, icon }: ICardData) => {
	return (
		<div className="row position-relative pr-5 my-4">
			<div className="col-12">
				<div className="row">
					<div className="col-10 my-5" style={{ zIndex: 6 }}>
						<div className="d-flex flex-column align-items-start justify-content-start">
							<CardTitle text={title} />
							<CardText text={text} />
						</div>
					</div>
					<div className="col-2 my-5" style={{ zIndex: 5 }}>
						{icon}
					</div>
					<div className="col-12 my-3 mb-3" style={{ zIndex: 6 }}>
						<div>
							<CardReadMore />
						</div>
					</div>
				</div>
			</div>
			<div
				className="position-absolute"
				style={{
					right: 10,
					width: "60%",
					height: "300px",
					background: "#262522",
					zIndex: "0",
				}}
			></div>
		</div>
	);
};
const RightCard = ({ title, text, icon }: ICardData) => {
	return (
		<div className="row position-relative px-5 my-4">
			<div className="col-12">
				<div className="row">
					<div className="col-2 my-5" style={{ zIndex: 5 }}>
						{icon}
					</div>
					<div className="col-10 my-5" style={{ zIndex: 6 }}>
						<div className="d-flex flex-column align-items-start justify-content-start">
							<CardTitle text={title} />
							<CardText text={text} />
						</div>
					</div>
					<div className="col-12 my-3 mb-3" style={{ zIndex: 6 }}>
						<div>
							<CardReadMore />
						</div>
					</div>
				</div>
			</div>
			<div
				className="position-absolute"
				style={{
					left: 25,
					width: "60%",
					height: "300px",
					background: "#262522",
					zIndex: "0",
				}}
			></div>
		</div>
	);
};

const CardTitle = ({ text }: { text: string }) => {
	return (
		<div
			style={{
				fontStyle: "normal",
				fontWeight: "600",
				fontSize: "24px",
				lineHeight: "32px",
				color: "#FFFFFF",
			}}
		>
			{text}
		</div>
	);
};

const CardText = ({ text }: { text: string }) => {
	return (
		<div
			style={{
				fontStyle: "normal",
				fontWeight: "300",
				fontSize: "16px",
				lineHeight: "24px",
				color: "#FFFFFF",
			}}
		>
			{text}
		</div>
	);
};

const CardReadMore = () => {
	return (
		<span
			style={{
				fontStyle: "normal",
				fontWeight: "400",
				fontSize: "14px",
				lineHeight: "16px",
				alignItems: "center",
				letterSpacing: "1px",
				textDecorationLine: "underline",
				color: "#846424",
				textDecoration: "underline",
			}}
		>
			Read More
		</span>
	);
};

const getWindowSize = () => {
	const { innerWidth, innerHeight } = window;
	return { innerWidth, innerHeight };
};
