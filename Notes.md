## Learning

- res.end is available only in nodejs and both res.send and res.end is available in express
- app.use("/*") can be used to get the unhandled routes irrespective of their http methods🚀

## session id login (stateful login)

### logic

- user logs in, controller creates one session key for the user and saved in map locally(on server side) and sends it to browser via cookies
- create a middleware to check the auth status which compares the cookies from req and locally saved session id from map
- if true, will redirect to the requested route🚀
- else, redirect to login route🚀

### problm❌

- whnevr we refresh, the locally saved session id(in map), gets destroyed
- as a result, the user has to again login🤦‍♂️

### solution

- use stateless login using jwt🚀🔥