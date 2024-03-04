## Parcel backend

This repository along with https://github.com/kuldarvakker/parcel-frontend contains a parcel app composed of two applications - a frontend and a backend. The frontend application enables users to create and view parcels, while the backend application provides the necessary functionality to persist parcels in the database and filter them based on country and description text.

### 1️⃣ How-to run

Clone both repositories and organize them in the following folder structure:

- parent_folder
  - backend
    - ...(content of parcel-backend repository)
  - frontend
    - ...(content of parcel-frontend repository)
   

Navigate to the backend directory and run the following command to start the application using Docker Compose 🤞🤞🤞:

~~~bash
docker-compose up -d
~~~

Navigate to the web:
~~~url
http://localhost:4200
~~~

### ✅ Backend functionality:
- [x] sortBy, sortDirection, country, and description filters on GET all parcels api 
- [x] create parcel POST api
- [x] basic and not perfect validation on GET params and POST body.

### ⭕️ Backend shortcomings:
- [ ] no unit & integration tests - application lifetime and size says it all
- [ ] no auth
- [ ] no configration module, defined const values, no secrets etc. Initially building configuration module did not work out first time and I did not want to invest more time into it at this time, further considering timestamps on commits.
- [ ] unique short url for parcel - many examples available on GitHub. Did not want to bother with that.
- [ ] not implemented pagination - Previous experience with React, it needed a bit more work than with Angular. Backend was already implemented when I found out about that. 📝 Sidenote: Good pagination guideline is available at: https://docs.gitlab.com/ee/development/database/pagination_guidelines.html

### ✅ Frontend functionality:
- [x] parcels sorting by date.
- [x] parcels filtering by multiple fields.
- [x] create parcel form
- [x] create parcel form show validation errors

### ⭕️ Frontend shortcomings:
- [ ] no unit tests
- [ ] not showing parcels filtering request validation errors
- [ ] no form validations on frontend application
- [ ] secrets, const values, not defined environmenet variables


---

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start
```
```bash
# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
