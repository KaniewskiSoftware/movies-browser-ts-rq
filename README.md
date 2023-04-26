# [Movies Browser using TypeScript and ReactQuery](https://kaniewskisoftware.github.io/movies-browser-ts-rq/)

This project is an alternative version of my group project, [MoviesBrowser](https://github.com/KaniewskiSoftware/movie-browser).

## Preview

!["Preview of the page"](animation.gif)

## Main Goals

- Refactor the whole project using TypeScript to make the code more professional
- Manage the state of the app using ReactQuery instead of Redux
- Make the code as generic as possible by creating simpler, reusable components
- Create custom hooks and utilities for various purposes
- Enhance search functionality with debouncing for improved performance and user experience

## Key Features

- Browse popular movies and actors using data from the public TMDB API
- Access detailed information for popular videos and people, including photos, names, ratings, and countries of origin
- Explore full cast and crew lists on movie details pages
- View an actor's filmography, including roles played and crew contributions, on their details page
- Utilize the search engine to find movies or people within the entire TMDB database, based on the current subpage
- Navigate efficiently between subpages for a seamless browsing experience
- Return to the main page featuring popular movies by clicking the logo in the upper left corner
- Experience a well-designed and user-friendly layout

## API Source

[![TMDB](tmdblogo.png)](https://www.themoviedb.org/)

## Technologies

- React
- JavaScript: ES6+
- TypeScript
- CSS Grid
- CSS Flexbox
- Responsive Web Design
- Styled Components
- React Router
- API (fetch, Axios, AxiosInstance)
- ReactQuery
- NPM
- React Hooks
- Custom Hooks
- Error Handling
- Figma
- Trello
- React app
- Conditional Types
- Utility Functions
- Debouncing
- Markdown (for the README documentation)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
