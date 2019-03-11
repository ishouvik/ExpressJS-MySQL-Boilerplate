# ExpressJS MySQL Boilerplate

## Dev Env Dependencies

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- Any editor that respects `.editorconfig` rules
- [Hygen](https://www.hygen.io): `npm i -g hygen`

## Getting Started

- Clone repo
- Copy the template of `.example.env` file onto a new file named `.env.development` with required credentials. This file is ignored by git.
- Run docker containers: `docker-compose up -d`
- Check the site running on [localhost:4000/ping](http://localhost:4000/ping)
- Exec container: `docker-compose exec app bash`

## Generators

We use [Hygen](https://www.hygen.io) to build our generators. The dev Docker image has `Hygen` pre-installed. You would have to exec container before executing the generator commands
If you want to generate files outside Docker then Hygen has to be installed separately. In that case please follow the [quickstart](https://www.hygen.io/quick-start) guide to install it on your environment

- New Serializer: `hygen serializer new --resource MySerializer --path v1`

## To Do

- Add more serializers
