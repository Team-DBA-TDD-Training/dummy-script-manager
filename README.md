#### (This project is licensed under the terms of the MIT license)

# Script Manager

## Pipeline Dashboards

### System Stages

|                    | Commit Stage         | UAT Stage             |  Production Stage     | Acceptance Stage     |
| ------------------ | -------------------- |-----------------------|-----------------------|-----------------------|
| **System**         | [![Commit Stage](https://github.com/Team-DBA-TDD-Training/dummy-script-manager/actions/workflows/commit.yml/badge.svg)](https://github.com/Team-DBA-TDD-Training/dummy-script-manager/actions/workflows/commit.yml) | [![UAT Stage](https://github.com/Team-DBA-TDD-Training/dummy-script-manager/actions/workflows/uat-stage.yml/badge.svg?event=workflow_dispatch)](https://github.com/Team-DBA-TDD-Training/dummy-script-manager/actions/workflows/uat-stage.yml) | [![Production Stage](https://github.com/Team-DBA-TDD-Training/dummy-script-manager/actions/workflows/production-stage.yml/badge.svg?event=workflow_dispatch)](https://github.com/Team-DBA-TDD-Training/dummy-script-manager/actions/workflows/production-stage.yml) | [![Acceptance Stage](https://github.com/Team-DBA-TDD-Training/dummy-script-manager/actions/workflows/acceptance.yml/badge.svg?event=workflow_dispatch)](https://github.com/Team-DBA-TDD-Training/dummy-script-manager/actions/workflows/acceptance.yml)


## Contributors

(in alphabetical order)

[Aleksei Beliaev](https://github.com/orgs/Team-DBA-TDD-Training/people/AleksBeliaevS3T)

[Anam Sadiq](https://github.com/orgs/Team-DBA-TDD-Training/people/anamsadiq)

[Deniz Kartal](https://github.com/orgs/Team-DBA-TDD-Training/people/dkartal)

[Erdenezul Batmunkh](https://github.com/orgs/Team-DBA-TDD-Training/people/erden3zul-3t)

[Marina Merini Valcanaia](https://github.com/orgs/Team-DBA-TDD-Training/people/marinamv885)


## Project Board

[Project board](https://github.com/orgs/Team-DBA-TDD-Training/projects/1)

## Background Context

This is a Test Driven Development (TDD) Sandbox project, being developed as part of TDD training offered by
[Valentina Jemuović](https://www.linkedin.com/in/valentinajemuovic) via [Optivem Journal](https://journal.optivem.com/).
Here we simulate Legacy Code in a Sandbox Project, so that we can learn to apply TDD transformation to the legacy code.
This will consequently train and enable us to apply the same transformation to the Real Life Project.

## Architecture

![System Architecture](system.png)

**Architecture Style:** Frontend + Monolithic Backend

## Tech Stack

|               | Frontend   | Backend       | Database      |
| ------------- | ---------- | ------------- | ------------- |
| **Framework** | React      | Express.js    | MongoDB       |
| **Hosting**   | AWS S3     | AWS EB or ECS | MongoDB Atlas |
| **Language**  | TypeScript | TypeScript    | NoSQL         |

## RESTful API Endpoints

| HTTP Method | Endpoint           | Description                  |
| ----------- |--------------------| -----------------------------|
| `POST`      | `/api/scripts`     | Create a new script          |
| `GET`       | `/api/scripts`     | Retrieve all scripts         |
| `GET`       | `/api/scripts/:id` | Retrieve a specific script   |
| `PUT`       | `/api/scripts/:id` | Update an existing script    |
| `DELETE`    | `/api/scripts/:id` | Delete a specific script(s)  |


## External Systems

1. [Open AI](https://chatgpt.com)

We are using OpenAI to generate script based on text. 
```javascript
 const openai = new OpenAI({
  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['OPENAI_BASE_URL'].
   */
   //baseURL?: string | null | undefined;
 });
```
The OpenAI library is being stubbed basically setting a value to
OPENAI_BASE_URL environment variable.
We are using Wiremock to Stub OpenAI.
Please see `system-test/wiremock` directory.
```docker-compose
environment:
    OPENAI_API_KEY: sk_test
    # override original openAI request to our stub
    OPENAI_BASE_URL: http://wiremock:8080/ai
```

## Deployment

    suggestions:
    Docker Image -> CodeBuild -> Elastic Container Registry -> CodeDeploy -> Elastic Container Service

    Docker Image -> Elastic Beanstalk

## Branching Strategy

- Feature Branching

## Repository Strategy

- Mono-Repo approach - single repo for frontend & backend

## Use Cases

1. The user opens the application and writes a script using the code editor, the script is saved to a database.
2. The user can view saved scripts.
3. The saved scripts can be updated as needed.
4. The user can delete a script when it is no longer needed.
5. Scripts can be marked as favorite and the user can toggle between showing all scripts or favorite scripts only.
6. The user can create scripts with assistance of AI Helper.

![Use Cases Diagram](script-manager-use-case.png)

## How to Install and Run the Project

Before you start:

- Make sure Node.js is installed running the following command:

        node --version


- Make sure npm is installed running the following command:

        npm --version

    If needed, follow the official documentation [here](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs) to install both Node.js and npm.

- Make sure to set up git in your local machine, the official documentation can be found [here](https://docs.github.com/en/get-started/getting-started-with-git/set-up-git).

- Clone this repository

### Backend
- Create a test mongodb database on your local machine
- Create '.env' file inside the backend folder with the command:

        touch .env


    Add the following credential to the created file

        MONGO_DB_URI=<your local URI goes here>
        NODE_ENV=development
        PORT=5000

- Open a terminal and navigate to the backend folder:

        cd backend/


- Run the following commands:


        npm install 

        npm run dev


The backend should start running in the following URL: [http://localhost:5000](http://localhost:5000)

### Frontend

- Open a terminal and navigate to the frontend folder:

        cd frontend/


- Run the following commands:

        npm install 

        npm run dev


The frontend should start running in the following URL: [http://localhost:5173/](http://localhost:5173/)

### Manual Testing
[Link to the Manual Test Procedure](manual-test-procedure)

## Team Roles
- Developers would be responsible to maintain Page Objects. Hence they are responsible to fix any and every test that fails due to changed in Page Objects.
- Developers would also be responsible to keep handlers to Page Objects, so that QA and Developers both can use those handlers to write the test.
- QA would think of the scenarios to test the application, and can write tests using Page Objects.

### Environments

| ENVIRONMENT | FRONTEND                                                                          | BACKEND                                                                            |
| ----------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Acceptance  | [AWS EB](http://script-manager-frontend-acceptance.us-east-1.elasticbeanstalk.com)| [AWS EB](http://script-manager-backend-acceptance.us-east-1.elasticbeanstalk.com/) |
| E2E         | [AWS EB](http://script-manager-frontend-e2e.us-east-1.elasticbeanstalk.com)       | [AWS EB](http://script-manager-backend-e2e.us-east-1.elasticbeanstalk.com)         |
| Production  | [AWS EB](http://script-manager-frontend-production.us-east-1.elasticbeanstalk.com)| [AWS EB](http://script-manager-backend-production.us-east-1.elasticbeanstalk.com)  |
| UAT         | [AWS EB](http://script-manager-frontend-uat.us-east-1.elasticbeanstalk.com)       | [AWS EB](http://script-manager-backend-uat.us-east-1.elasticbeanstalk.com)         |
