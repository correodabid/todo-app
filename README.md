# TODO API

Todo app

- [Requeriments](#requeriments)
- [Install and Run](#install)
- [Docker](#docker)
- [Testing](#test)
- [API](#api)

<a name="requeriments"></a>

## Requeriments

- Node 16

<a name="install"></a>

## Install and Run

To install todo-app, simply use npm:

```
npm install
npm start
```

<a name="docker"></a>

## Run in docker

```
docker build -t todo_app .
docker run -p 7575:7575 -d --name todo_app todo_app
```

<a name="test"></a>

## Launch tests

```
npm test
```

<a name="api"></a>

## API

- <a href="#todoList"><code><b>GET /api/v1/todos</b></code></a>
- <a href="#createTodo"><code><b>POST /api/v1/todos</b></code></a>
- <a href="#completeTodo"><code><b>PATCH /api/v1/todos/{id}/complete</b></code></a>

---

<a name="todoList"></a>

### GET /api/v1/users

Get todo list

```
curl -X GET \
  'http://localhost:7575/api/v1/todos' \
  -H 'Accept: */*'
```

---

<a name="createTodo"></a>

### POST /api/v1/todos

Create a Todo

```
curl -X POST \
  'http://localhost:7575/api/v1/todos' \
  -H 'Accept: */*' \
  -H 'Content-Type: application/json' \
  -d '{"title":"four"}'
```

---

<a name="completeTodo"></a>

### PATCH /api/v1/todos/{id}/complete

Set a todo as completed

```
curl -X PATCH \
  'http://localhost:7575/api/v1/todos/cfc6b559-0b5d-40b8-85de-5b237219580a/complete' \
  -H 'Accept: */*'
```
