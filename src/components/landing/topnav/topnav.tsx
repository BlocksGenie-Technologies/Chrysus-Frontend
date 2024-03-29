import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Button,
} from "reactstrap";
import { useWindowSize } from "src/hooks";
import { CLink } from "src/types/ui";
import Chrysus from "src/assets/icons/svg/chrysus.svg";
import { ConnectButton, IconButton } from "src/components/buttons";
import { ModalLink } from "src/types/ui/modal";

interface ITopNavProps {
	links: CLink[];
	modals?: ModalLink[];
}

export const TopNav = ({ links, modals }: ITopNavProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [showToggler, setShowToggler] = useState<boolean>(false);
	const toggle = () => setIsOpen(!isOpen);
	const navigate = useNavigate();
	const [width, height] = useWindowSize();
	useEffect(() => {
		// To make is work in responsive design
		if (width <= 786) setShowToggler(true);
		else setShowToggler(false);
	}, [width]);
	return (
		<div>
			<Navbar
				color="dark"
				light={false}
				dark={true}
				expanded="md"
				className={`d-flex flex-row align-items-center justify-content-between`}
			>
				<NavbarBrand href="/landing">
					<div className="d-flex flex-row align-items-center justify-content-between w-100">
						<img src={Chrysus} alt="chrysus" />
						<span
							className="mx-2"
							style={{
								fontStyle: "normal",
								fontWeight: "600",
								fontSize: "24px",
								lineHeight: "29px",
							}}
						>
							Chrysus
						</span>
					</div>
				</NavbarBrand>
				{showToggler ? (
					<>
						<NavbarToggler onClick={toggle} />
						<Collapse isOpen={isOpen} navbar>
							<Nav navbar>
								{links.map((link) => (
									<NavItem>
										<NavLink
											onClick={() => navigate(link.url)}
											style={{
												cursor: "pointer",
												fontStyle: "normal",
												fontWeight: "400",
												fontSize: "14px",
												lineHeight: "16px",
												alignItems: "center",
												letterSpacing: "1px",
												color: "#FFFFFF",
											}}
										>
											{link.label}
										</NavLink>
									</NavItem>
								))}
								<ConnectButton
									className="col-12"
									label="Connect"
									onClick={() => {}}
								/>
							</Nav>
						</Collapse>
					</>
				) : (
					<>
						<Nav
							className="d-flex flex-row align-items-center justify-content-between"
							navbar
						>
							{modals?.map((modal) => (
								<NavItem className="mx-2">
									<NavLink
										onClick={(event) => modal.onClick()}
										style={{
											cursor: "pointer",
											fontStyle: "normal",
											fontWeight: "400",
											fontSize: "14px",
											lineHeight: "16px",
											alignItems: "center",
											letterSpacing: "1px",
											color: "#FFFFFF",
										}}
									>
										{modal.label}
									</NavLink>
								</NavItem>
							))}
							{links.map((link) => (
								<NavItem className="mx-2">
									<NavLink
										onClick={() => navigate(link.url)}
										style={{
											cursor: "pointer",
											fontStyle: "normal",
											fontWeight: "400",
											fontSize: "14px",
											lineHeight: "16px",
											alignItems: "center",
											letterSpacing: "1px",
											color: "#FFFFFF",
										}}
									>
										{link.label}
									</NavLink>
								</NavItem>
							))}
						</Nav>
						<ConnectButton label="Connect" onClick={() => {}} />
					</>
				)}
			</Navbar>
		</div>
	);
};
