https://www.coursera.org/learn/developing-backend-apps-with-nodejs-and-express/supplement/RGOT7/introduction-to-middleware-routers

Introduction to Middleware & Routers
In this article, we will discuss the terms middleware and routes.

Middleware is software that sits between applications, databases, or services and allows those different technologies to communicate. It creates seamless interactions for the end user in a distributed system.

Express is a messaging framework used to handle routes and write middleware. The front end of an application uses Express to facilitate communication between components on the back end without the front-end and back-end services needing to use the same language. The front end communicates with the middleware, not directly with the back end.

Messaging frameworks like Express commonly contain JSON, REST APIs, and web services. Older messaging frameworks may contain extensible markup language (XML) and simple object access protocols (SOAP) instead of JSON and REST APIs, respectively. The messaging framework provides a standardized way to handle data transfer among different applications.

A web server is an example of middleware that connects a website to a database. The web server handles the business logic and routes the data from the database based on the request. A route is the part of the code that associates an HTTP request, such as GET, POST, or DELETE, with a URL and the function that gets called that handles that URL. Routing is used in web development to split an application’s user interface based on rules identified by the browser’s URL.

Router functions are called “middleware” collectively. Middleware is responsible for responding to an HTTP request or calling another function in the middleware chain. Express handles router functions through the Router class, such as Router.get(). As the name suggests, Router.get() handles HTTP GET requests. Other Router functions include Router.post(), Router.put(), Router.delete() in mostly the same way. These methods take two arguments, a URL path and a callback function.

In addition to routing, middleware is also responsible for providing secure connections among services by encrypting and decrypting data, managing application loads by distributing traffic to different servers, and sorting or filtering data before the data is returned to the client.
