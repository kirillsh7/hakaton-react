import { Link } from 'react-router-dom'
export const Home = () => {
	return (
		<div>
			<h1>Home</h1>
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
						<Link to='/favorite'>Favorite</Link>
						<Link to='/user/1'>user 1</Link>
					</li>
				</ul>
			</nav>
		</div>
	)
}
