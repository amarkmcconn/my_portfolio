# _<img src="https://fontmeme.com/permalink/220708/f1d58d6a44c485b5db80b7bcbcfc7e09.png" width="550" height="100"/>_

### By _Mark McConnell_

#### _A responsive fullstack portfolio website using React & Sanity to showcase my projects, skills, experiences and general info about me as a programmer. <https://marksprogramming.com/>_
[![Netlify Status](https://api.netlify.com/api/v1/badges/9fcc802b-3885-4250-b95a-d690ed810350/deploy-status)](https://app.netlify.com/sites/marksportfolio1/deploys)
## 🖥️ Technologies Used

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width="60" height="60"/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" width="60" height="60"/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" width="60" height="60"/><img src="https://pbs.twimg.com/profile_images/1135907399582199809/7uZ5d2to_400x400.jpg" width="60" height="60"/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" width="60" height="60"/>

## ✅ Description

_This is a Capstone Project for Epicodus. This is a responsive fullstack portfolio website to showcase my projects, resume and general info about me as a programmer. Furthermore, it has my contact info, skills, experiences and testimonials from other students. This project uses Sass(scss) and Framer Motion for styling. This project uses React for the front-end development and uses Sanity for the back-end and content management._

## ⚙️Setup/Installation Requirements

### To get started clone this repository <https://github.com/amarkmcconn/my_portfolio>
### You will need to create an account on @ <https://www.sanity.io/>

### In the `backend_sanity directory`, run:
1. ### `npm install -g @sanity/cli`
2. ### `sanity start`
      This will open sanity studio in order for you to manage your content
3. ### `sanity manage`
      To open the project settings in a browser
4. ### `more sanity commands can be found below`

### In the `frontend_react directory`, you can run:
1. ### `npm install`
      This will install all the required dependencies for the project to run correctly
1. ### `npm start`

      Runs the app in the development mode.\
      Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

      The page will reload when you make changes.\
      You may also see any lint errors in the console.

2. ### `npm test`

      Launches the test runner in the interactive watch mode.\
      See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

3. ### `npm run build`

      Builds the app for production to the `build` folder.\
      It correctly bundles React in production mode and optimizes the build for the best performance.

      The build is minified and the filenames include the hashes.\
      Your app is ready to be deployed!

      See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

4. ### `npm run eject`

      **Note: this is a one-way operation. Once you `eject`, you can't go back!**

      If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

      Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

      You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## 🚀 Deployment
1. Sign up for a free account on <https://app.netlify.com/>
2. Once your account has been setup, click on the Sites option
3. Open your project from file explorer and find your build folder
4. Drag and drop your build folder into the sites section
5. Then click on Domain settings and go to domains and click edit site name, you will be able to enter a custom domain name that has .netlify.app after it. You will also have options to purchase a domain via this website.
6. If your domain has been purchased via another site you always delegate your domain to Netlify.
7. Documentation can be found here: <https://docs.netlify.com/domains-https/netlify-dns/delegate-to-netlify/>

## Known 🐛 Bugs

* _No Known Issues_

## 🎫License

[MIT](LICENSE) 👈

_If you run into any issues or have questions, ideas, or concerns;  please email me: at mark.programming1@gmail.com_

Copyright (C) 2022 Mark McConnell


# Sanity Clean Content Studio

Congratulations, you have now installed the Sanity Content Studio, an open source real-time content editing environment connected to the Sanity backend.
* [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
* [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
* [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)

Now you can do the following things:

usage: sanity [--default] [-v|--version] [-d|--debug] [-h|--help] <command> [<args>]

Commands:<br>
*   build       - Builds the current Sanity configuration to a static bundle <br>
*   configcheck - Checks if the required configuration files for plugins exists and are up to date <br>
*   cors        - Interact with CORS-entries for your project <br>
*   dataset     - Interact with datasets in your project <br>
*   debug       - Gathers information on Sanity environment <br>
*   deploy      - Deploys a statically built Sanity studio <br>
*   docs        - Opens the Sanity documentation <br>
*   documents   - Interact with documents in your project <br>
*  exec        - Runs a script in Sanity context <br>
*   graphql     - Interact with GraphQL APIs <br>
*   help        - Displays help information about Sanity <br>
*   hook        - Interact with hooks in your project <br>
*   init        - Initialize a new Sanity project or plugin <br>
*   install     - Installs a Sanity plugin to the current Sanity configuration  <br>
*   login       - Authenticates against the Sanity.io API  <br>
*   logout      - Logs out of the Sanity.io session  <br>
*   manage      - Opens the Sanity project management UI  <br>
*   projects    - Interact with projects connected to your logged in user  <br>
*   start       - Starts a web server for the Content Studio  <br>
*   undeploy    - Removes the deployed studio from <hostname>.sanity.studio  <br>
*   uninstall   - Removes a Sanity plugin from the current Sanity configuration  <br>
*   upgrade     - Upgrades all (or some) Sanity modules to their latest versions <br>
*   users       - Manage users of your project  <br>
*   versions    - Shows the installed versions of Sanity CLI and core components  <br>

See 'sanity help <command>' for specific information on a subcommand.
