1. Planning
    - Use planning pdf:
    - Idea
    - Features
    - Views
    - Controllers
    - Endpoints
    - Schema - dbdesigner
    - Explain making a mockup
    - Go over rubric for personal project
2. Scaffolding
    - Create-react-app
    - Folder structure
        - Server
        - Db
        - Components
        - Redux
    - Install all needed dependencies
    - Make .env and place it in the .gitignore
    - Add proxy and main in package.json
    - Make repo on GitHub and connect local app to it and push (stress importance of pushing code often)
3. Build full-crud server
    - Basic express server layout
    - Massive connection
    - Controllers folder including user auth & product controller
    - Make endpoints, aligning with features and endpoints on planning pdf
4. Setup Heroku database with planned schema
5. Test server with postman
    - Test each endpoint to make sure everything is working correctly
6. Setup component architecture based on views from planning pdf
    1. Conditionally render the buttons for purchasing / edit & delete based on if isAdmin  === true
7. Setup redux & redux-promise-middleware
    1. userReducer
    2. productReducer
    3. Store with combineReducers - reference switch-app/src/redux/store.js
8. Connect redux store and make components show data accordingly