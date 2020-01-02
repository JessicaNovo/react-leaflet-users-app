This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

On the main page you can find the profile cards of all the users fetched from this JSON (https://jsonplaceholder.typicode.com/users), with their name, company name and contact information (phone and email).

As you scroll down the page you'll find a map with the location of all users pinned. If you click on a marker, you'll see who is the user on that location, their company and city. You can also zoom in/out on the map.

If you click on the "Read more" link in each card, you'll find the user personal profile page where you can learn more about them, as well as check their location on the map.

References:
React Router (https://www.npmjs.com/package/react-router) was used to create this multiple page application.
This application uses Bootstrap (https://getbootstrap.com/).
The maps displayed on this app were created using leaflet (http://leafletjs.com/).
The marker icon was providded by Icons8 (https://icons8.com/icon/124191/marker).

You can fin React commands bellow:

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
