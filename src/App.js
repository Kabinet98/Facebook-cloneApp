import "./css/App.css";
import Header from "./Components/header";
import Sidebar from "./Components/sidebar";
import Fedd from "./Components/fedd";
import Widgets from "./Components/widgets";
import Login from "./Components/login";
import {UseStateValue} from '../src/Components/stateProvider'
function App() {
	const [{user}, dispatch ] = UseStateValue();
	return (
		// BEM naming convention
		<div className="app">
			{!user ? (
				<Login />
			) : (
				<>
					<Header />
					<div className="app__body">
						<Sidebar />
						<Fedd />
						<Widgets />
					</div>
				</>
			)}
		</div>
	);
}

export default App;
