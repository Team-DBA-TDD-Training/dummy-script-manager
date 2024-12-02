# Script Manager

    - Project Members: Aleksei Beliaev, Anam Sadiq, Deniz Kartal, Erdenezul Batmunkh, Marina Valcanaia

## Architecture

![System Architecture](system.png)

## Tech Stack

|               | Frontend   | Backend       | Database      |
| ------------- | ---------- | ------------- | ------------- |
| **Framework** | React      | Express.js    | MongoDB       |
| **Hosting**   | AWS S3     | AWS EB or ECS | MongoDB Atlas |
| **Language**  | TypeScript | TypeScript    | NoSQL         |

## RESTful API Endpoints

| HTTP Method | Endpoint       | Description                |
| ----------- | -------------- | -------------------------- |
| `POST`      | `/scripts`     | Create a new script        |
| `GET`       | `/scripts`     | Retrieve all scripts       |
| `GET`       | `/scripts/:id` | Retrieve a specific script |
| `PUT`       | `/scripts/:id` | Update an existing script  |
| `DELETE`    | `/scripts/:id` | Delete a specific script   |

## External Systems

- openai (TODO: some info here)

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
5. The user can create scripts with assistance of AI Helper.

![Use Cases Diagram](script-manager-use-case.png)
