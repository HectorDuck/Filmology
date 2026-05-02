import { Link, NavLink, useNavigate } from "react-router-dom";
import { Nav } from "../constants/nav";
import { useEffect, useState } from "react";
const Header = () => {
	const navigate = useNavigate();
	const [hidden, setHidden] = useState(true);
	const [darkMode, setDarkMode] = useState(
		JSON.parse(localStorage.getItem("darkMode")) || false
	);

	const active = "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500";
	const inactive = "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

	const handleSubmit = (event) => {
		event.preventDefault();
		const queryTerm = event.target.search.value;
		event.target.reset();
		return navigate(`/search?q=${queryTerm}`);
	}

	useEffect(() => {
		localStorage.setItem("darkMode", JSON.stringify(darkMode));
		if (darkMode) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [darkMode]);

	return (
		<>
			<header>
				<nav className="bg-white border-b-2 border-gray-200 dark:bg-gray-900">
					<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
						<Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
							<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
								Filmology
							</span>
						</Link>
						<div className="flex md:order-2">
							<button onClick={() => setDarkMode(!darkMode)} type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
								{darkMode ? (
									<svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#a)" stroke="#ffffff" strokeWidth="1.5" strokeMiterlimit="10">
											<path d="M5 12H1M23 12h-4M7.05 7.05 4.222 4.222M19.778 19.778 16.95 16.95M7.05 16.95l-2.828 2.828M19.778 4.222 16.95 7.05" strokeLinecap="round"/>
											<path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" fill="#ffffff" fillOpacity=".16" />
											<path d="M12 19v4M12 1v4" strokeLinecap="round" />
										</g>
										<defs>
											<clipPath id="a">
												<path fill="#ffffff" d="M0 0h24v24H0z" />
											</clipPath>
										</defs>
									</svg>
								) : (
									<svg width="16px" height="16px" fill="#000000" viewBox="0 0 35 35" id="Layer_2" xmlns="http://www.w3.org/2000/svg">
										<path d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z" />
									</svg>
								)}
								<span className="sr-only">Search</span>
							</button>

							<button onClick={() => setHidden(!hidden)} type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
								<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
									<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
								</svg>
								<span className="sr-only">Search</span>
							</button>
							<div className="relative hidden md:block">
								<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
									<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
										<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
									</svg>
									<span className="sr-only">Search icon</span>
								</div>
								<form onSubmit={handleSubmit}>
									<input type="text" name="search" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." autoComplete="off" />
								</form>
							</div>
							<button onClick={() => setHidden(!hidden)} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
								<span className="sr-only">Open main menu</span>
								<svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
									<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
								</svg>
							</button>
						</div>
						<div className={`${hidden ? "hidden" : "" } items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-search">
							<div className="relative mt-3 md:hidden">
								<div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
									<svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
										<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
									</svg>
								</div>
								<form onSubmit={handleSubmit}>
									<input type="text" name="search" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." autoComplete="off"
									/>
								</form>
							</div>
							<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
								{Nav.map((item) => (
									<li key={item.id}>
										<NavLink to={item.link} className={({ isActive }) => isActive ? active : inactive }>
											{item.title}
										</NavLink>
									</li>
								))}
							</ul>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
};

export { Header };
