<h1 align="center">Daybook-Backend</h1>

## API avilible on stage(online):
<ul>
  <li><a href="https://daybook-app-backend-stage.herokuapp.com/v1">API</a></li>
  <li><a href="https://daybook-app-backend-stage.herokuapp.com/docs">API docs</a></li>
</ul>

## Filename convention
### Data transfer objects (Dto)
`moduleName.dto.ts` - base name for Dto object

`moduleName-actionName.dto.ts` - action name for Dto object

## Environment
### Environment priority
<ol>
  <li>(machine) process.env</li>
  <li>(file) Name.env</li>
</ol>

### Node version
Node version: <strong>v12.10.0 +</strong>

### Environment settings
Before start, need setup **`NAME.env`**
You can look at example: **`template.env`**

*Default environment DEV.env*
*You can change it in `Docker-compose.yml`*

Alternatively use `docker-compose.yml` -> **environment** section

## Installation Docker
Create containers
```bash
$ docker-compose up
```
Dont forget, read additional comands `docker-compose` in the **Running the app -> [Docker section](#docker)**

## Installation localy

*Dont forget set `NODE_ENV` and `API_PREFIX` if you want using this method*

```bash
$ npm install
```
## Running the app

### Local with npm

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Docker

```bash
# start
$ docker-compose start

# stop
$ docker-compose stop

# remove containers
$ docker-compose down

# rebuild with new files
$ docker-compose up --force-recreate --build
```

After start app will available on `docker-machine` ip, at `port:3000` by default, you can check ip with:
```bash
$ docker-machine ip default
```
If machine not available get ip from container with:
```bash
$ docker ps
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
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>
<details>
  <summary>More Details about Nest</summary>
  
[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://daybook.com/nestframework"><img src="https://img.shields.io/daybook/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Daybook - [@nestframework](https://daybook.com/nestframework)

## License

  Nest is [MIT licensed](LICENSE).
</details>