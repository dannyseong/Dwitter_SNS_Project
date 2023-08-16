# Dwitter Project: Micro Social Media Web Application Project

## Technology Stacks

1. Languages: HTML5, CSS3, JavaScript
2. Framework: Express.js(Back-end)
3. Database: MySQL - Squalize

## RESTful API Design

### 1. Define `Dweet` Schema

```
{
  id: string, // tweet id
  text: string, // tweet text
  createdAt: Date, // create date
  name: string, // user name
  username: string, // user id
  url: string, // User profile image
}
```

### 2. API Desing

- `GET`: /dweets
  - get all dweets message
  - Response `200`
  ```
  {
    [dweet1, dweet2, ...]
  }
  ```
- `GET` /dweets?username=:username
  - get all dweets for user's username
  - Response `200`
  ```
  {
    [dweet1, dweet2, ...]
  }
  ```
- `GET` /dweets/:id
  - get dweet by id
  - Response `200`
  ```
  {
    dweet
  }
  ```
- `POST` /dweets
  - creating new tweet
  - Request
  ```
  {
    text,
    name,
    username,
    url
  }
  ```
  - Response `201`
  ```
  {
    dweet
  }
  ```
- `PUT` /dweets/:id

  - updating tweet
  - Request

  ```
  {
  	text
  }
  ```

  - Response `200`

  ```
  {
  	dweet
  }
  ```

- DELETE /dweet/:id
  - deleting dweet
  - Response `204`
