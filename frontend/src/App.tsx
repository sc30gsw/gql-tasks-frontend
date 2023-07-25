import "./App.css";
import Main from "./components/Main";
import NotFound from "./components/NotFound";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const App = () => {
	return (
		<div className="App">
			<SignIn />
			<SignUp />
			<Main />
			<NotFound />
		</div>
	);
};

export default App;
