import { Link } from "react-router-dom";

import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import main from "../assets/images/main.svg";

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>

			<div className="container page">
				<div className="info">
					<h1>
						job <span>tracking</span> app
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quam
						illum, minus quis expedita quidem quisquam mollitia necessitatibus,
						excepturi omnis ea recusandae natus at ullam itaque id? Corporis,
						non sint!
					</p>
					<Link to="/register" className="btn register-link">
						Register
					</Link>
					<Link to="/login" className="btn">
						Login / Demo User
					</Link>
				</div>
				<img src={main} alt="job hunt" className="img main-img" />
			</div>
		</Wrapper>
	);
};
export default Landing;
