# ExpressJS MySQL Boilerplate

## API Endpoints

- [Documentation](docs/api/README.md)

## Dev Env Dependencies

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/install/)
- Any editor that respects `.editorconfig` rules

## Getting Started

- Clone repo
- Copy the template of `.example.env` file onto a new file named `.env.development` with required credentials. This file is ignored by git.
- Run docker containers: `docker-compose up -d`
- Check the site running on [localhost:4000/ping](http://localhost:4000/ping)
- Exec container: `docker-compose exec app bash`
