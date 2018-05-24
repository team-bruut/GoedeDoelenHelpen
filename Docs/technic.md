
# technic

## Back-end
The back-end is created in ASP.NET core with the programming language C#.

Our primary focus within ASP.net will be on the Web API https://blogs.msdn.microsoft.com/webdev/2018/02/27/asp-net-core-2-1-web-apis/ for new techniques. Other documentation is found at https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api

### use of swagger.io
The documentation from the web api is visible by running the project and visit https://baseurl:port/swagger

## Frontend
The frontend application is created with Angular version 6+

The frontend is served by asp.net using a proxy to the frontend server.

In the frontend we make use of Angular material. This is a component library primarily created and maintained by the Angular team. This library has a wide variety of high quality frontend libraries. Documentation can be found at https://material.angular.io/.

For charts used on the dashboard we have used a charting library. We have made the choice for this based on several points
- making a chart with the canvas API is too much work for the scope of this project
- the chance of errors in our own charting library is too big
- the library is actively maintained and used by several people
- Barld had already a good experience with this library from his internship

The library we have chosen can be found at: https://github.com/swimlane/ngx-charts
