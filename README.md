# Demo Credit
Demo Credit is a mobile lending app that grants wallet functionality to users. Borrowers now have a wallet to receive the loans they have been granted and also spend the money on goods, service and repayments.

## Disclaimer
All the code here may not exactly be _production ready_. I'm building this during livestreams, so I'm doing just enough for people to get the concepts.

## Getting Started
### Database Set Up
Make sure you have [Node.js](https://nodejs.org/en/download) and [MySQL](https://dev.mysql.com/downloads/mysql/) installed.  

Make sure the mySQL database server is running, and then create two new databases in [MySQL shell](https://dev.mysql.com/doc/mysql-shell/8.0/en/mysql-shell-interactive-code-execution.html), for development and testing:
```sh
$ mysql -u root -p
```
Now enter the password for the root user.
```sh
# create database demo_credit
mysql> CREATE DATABASE ;
# create database test_demo_credit
mysql> CREATE DATABASE ;
```

Install project dependencies by running:  
```sh
$ npm install
```
Create a `.env` file in the root directory or you can use the ``.env.example`` file I have included then add your database details in it. It should have these properties:
- DB_HOST=
- DB_USER=
- DB_PASSWORD=
- DB_NAME=
- DB_PORT=

As well as the JSON web token details:
- JWT_ACCESS_KEY=
- JWT_ACCESS_EXP_TIME= 
- JWT_ISSUER= 
- JWT_AUDIENCE= 

Next, run the migrations to create database tables by running:  
```sh
$ npm run migrate
```

Seed the database to create dummy data by running  
```sh
$ npx knex seed:run
```  

> 💡 You can create your own users by calling the `createUser` [endpoint](). This would create user records both on the `users` table as well as accounts` table.   

You can go ahead and start the server by running:
```sh
$ npm run dev
```
You can now test each account function.

### Database structure

Each `user` has one `account` and every `transaction` belongs to an `account`.

See the ER diagram below:

![database ER diagram](/images/schema%20pic.png)
_Entity Relationship Diagram_   


### Test Structure  
With that complete, let's look at the current test structure. All tests live in the "test" directory in the root of the application.  

Run the tests:
```sh
$ npm test
```  

### Endpoints
All server endpoints can be found [here]().
  
### Feature Requests
You can suggest a feature by creating an issue and adding the label `request` to it.