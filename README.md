# ASP.NET 5 Web Application (basic) with Gulp script in ES5, ES6 (Babel) and TypeScript

A web application templates from `generator-aspnet` with Gulp tasks written in TypeSript and ES6 via Babel

## Running

The project are created and authored with `beta7` version of ASP.NET 5 tooling. The originally scaffolded content is based on `generator-aspnet` `Web Application Basic` web application template.

To run each example just invoke from example directory:
```
dnu restore

dnu build

dnx kestrel
```

### Changes in implementation

Compared to original content:

- updated client dependencies to most recent ones
- updated NPM dependencies to most recent one
- optimized dependencies management via Gulp task
- event based scripting in `project.json`

### Author

@blazejewicz
