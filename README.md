<br />
<div align="center">
    <a href="https://github.com/tchan128/tech-blog-tc"><img src="./public/assets/blogging.png" alt="Logo" width="80" height="80"></a>
    <h3 align="center">Fullstack Tech Blog</h3>
    <p align="center">
        The motivation for this project is to create a blog platform where developers can talk about concepts that they've learned about tech/fullstack. It provides a private platform for them to keep track of ongoing discussions and also join in on them to provide some insights and solutions. I built this project because humans are always learning from one another and having a platform that helps everyone document their process, their learnings, and their insights is super helpful for anyone who might be starting their journey. This is a platform that users can use to share any issues they are experiencing or share any inputs they have. This project is a solution for users who want to have a space where they can sign up/log in and join conversations about topics revolving around full stack and tech. Through this project, I really honed my skills with the MVC paradigm and ORM. I learned better how to access data using handlebars and routes, how to connect JS with everything we're working on and completing a full stack app.
        <br/>
        <br/>
        <a href="https://github.com/tchan128/tech-blog-tc"><strong>Explore the docs »</strong></a>
    </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#visuals">Visuals</a></li>
    <li><a href="#credits">Credits</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About the Project

This project is a full stack tech blog. This project is build with Express JS, node JS, Sequelize, Javascript using the MVC paradigm. Insomnia was used for testing database and seeding and mySQL Bench was used to visualizer the database as well. In this project, the main component(s) include the ability to create/login to an account, post, edit, and delete blogs, and comment on other posts. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Installation

Nothing is needed to be installed if the app is accessed through Heroku here: https://tech-blog-tc-fd5328f1268d.herokuapp.com/

If it is cloned, there are a couple of things that needs to be done to set it up. 

You need to make your own .env file with the following information:

```
DB_NAME= 
DB_USER= 
DB_PASSWORD= 
SECRET= 
```

Please fill this information based on your database name, your database user & password, and also a secret for session requirements. 

Next you can install packages that are needed to work this program:

```
pm init -y
npm install
npm install bcrypt
npm install connect-session-sequelize
npm install dotenv
npm install express
npm install express-handlebars
npm install express-session
npm install mysql
npm install mysql2
npm install sequelize
npm install seed
npm install nodemon
```

Once those are installed, you can go ahead and run this command to seed the data

```
npm run seed
```

and run this to start the program

```
npm run dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>
 
## Usage

In this project, a weather dashboard is built to help users retrieve the current and future forecasts of a selected city. Users can search a city in the search box and the app should be able to search the coordinates needed for the weather API via the GeoCoding API. Once a city is searched, the app will generate the current forecast including information such as city name, icon indicating weather forecast, temperature, wind speed, and humidity. Additionally, it will also pull the information for the next 5 days as well and display it in the 5-day forecast section. Each searched city will be saved in the previously searched area so that users can access their history easily. When users re-visit the dashboard, they should see their previously searched cities populated there. 

In this project, a fullstack tech blog is built for users to share insights/questions and comment on others' posts. Below lists the main usages of the app:

- Creating an user account / logging into into an existing account
- Ability to view all blog posts in home page 
- Ability to press on a single post and leave a comment and view all the comments 
- Ability to go to your own dashboard to see posts you've created 
- Ability to create your own blog post through the dashboard
- Ability to edit and delete blog post through the dashboard

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Visuals

1. Home page
<img width="1462" alt="Screenshot 2024-03-12 at 7 28 09 PM" src="https://github.com/tchan128/tech-blog-tc/assets/56553374/edaace90-164d-4ac4-b319-b243f86e35be">

2. Your Dashboard
<img width="1462" alt="Screenshot 2024-03-12 at 7 33 21 PM" src="https://github.com/tchan128/tech-blog-tc/assets/56553374/e8c364e3-7755-40a5-9bc9-e7e25930b127">

3. Update/Delete Post
<img width="1460" alt="Screenshot 2024-03-12 at 7 36 30 PM" src="https://github.com/tchan128/tech-blog-tc/assets/56553374/13ca911b-0ec3-42b2-8a36-f6f9f7533734">

4. New Post
<img width="1460" alt="Screenshot 2024-03-12 at 7 36 49 PM" src="https://github.com/tchan128/tech-blog-tc/assets/56553374/09b6ca0f-e97e-4027-84da-d41d0a37cbe4">

5. Leave a Comment
<img width="1461" alt="Screenshot 2024-03-12 at 7 37 05 PM" src="https://github.com/tchan128/tech-blog-tc/assets/56553374/18af5194-9497-4e2e-93c4-a7350df96b0e">

6. Comments
<img width="1464" alt="Screenshot 2024-03-12 at 7 38 12 PM" src="https://github.com/tchan128/tech-blog-tc/assets/56553374/41eba24e-b217-45d9-9289-d8128c9ef162">

7. Login page
<img width="1463" alt="Screenshot 2024-03-12 at 7 37 32 PM" src="https://github.com/tchan128/tech-blog-tc/assets/56553374/19cff251-73f1-420f-a3fa-3d8f5c4aa18c">

## Credits

This tech blog was built from scratch, however, the design of the dashboard is derived from a sample that UofT Bootcamp provided. 

In addition to that, some websites that helped with the build of this weather dashboard include:

- Event Listener MDN: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
- Sequelize Model Querying: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/
- Sequelize Model Instances: https://sequelize.org/docs/v6/core-concepts/model-instances/
- Heroku Deployment Guide: https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql

README icon is found here: <a href="https://www.flaticon.com/free-icons/blog" title="blog icons">Blog icons created by Freepik - Flaticon</a>

The README template is found here: https://github.com/othneildrew/Best-README-Template

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## License

Please refer to the LICENSE in the repo.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

Tiffany Chan - tchan12899@gmail.com

- Project Link: https://github.com/tchan128/tech-blog-tc
- Deployed Heroku App: https://tech-blog-tc-fd5328f1268d.herokuapp.com/

<p align="right">(<a href="#readme-top">back to top</a>)</p>
