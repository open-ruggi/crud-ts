

# Code Challenge

<p align="center">
    <img align="center" width="200" height="100" src="images/code.jpeg" />
</p>

---

## Programa

Para el reto de técnico, se propuso presentar un aplicativo realizado en nodejs con TS.

Puntos a mejorar 

* Manejo correcto de errores
* La authenticación debio ser un JWT y no un uuid
* La authenticación debio tener un ttl
* Manejo correcto de valores segurdos (password)

---

## Requerimientos
Requirements  [node js](https://nodejs.org/es/)

Requirements  [docker](https://www.docker.com)

set variables en .env
## Usage

```bash
- npm install
- npm run dev
```
---

## Estructura
    .
    ├── ...
    ├── src                   
    │   ├── controller               
    │   ├── model                    
    │   └── route                    
    │   └── service                  
    │   └── utils                    
    └── ...

## Despliegue

```bash
- docker build -t ruggi/crud-ts .
- docker run -d --env-file .env -p 7000:7000 ruggi/crud-ts
```
---

## Docs
[Documento](https://github.com/open-ruggi/crud-ts/tree/dev/docs)
