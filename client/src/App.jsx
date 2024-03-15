import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <h1>home</h1>,
		errorElement: <h1>error</h1>,
		children: [
			{
				index: true,
				element: <h1>landing</h1>,
			},
			{
				path: "register",
				element: <h1>register</h1>,
			},
			{
				path: "login",
				element: <h1>login</h1>,
			},
			{
				path: "dashboard",
				element: <h1>dashboard</h1>,
			},
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
