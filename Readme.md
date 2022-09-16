# Web Timestamp Service | Nuxt.js

**The Hybrid Vue Framework**
Welcome to Nuxt 3 repository: **The Hybrid Vue Framework** ✨

Nuxt's goal is to make web development intuitive and performant with a great developer experience in mind, learn more in the ["What is Nuxt?"](https://v3.nuxtjs.org/guide/concepts/introduction) section of our documentation.

<table>
<tbody>
<tr>
  <td>
    <h2>📖 Documentation</h2>
    <p>
      Read <a href="https://v3.nuxtjs.org">Online Docs</a>.
    </p>
  </td>
  <td>
    <h2>🐞 Reporting bugs</h2>
    <p>
      Check out <a href="https://v3.nuxtjs.org/community/reporting-bugs">Reporting Bugs</a> page.</p>
  </td>
</tr>
<tr>
  <td>
    <h2>💡 Suggestions </h2>
    <p>
      Check out <a href="https://v3.nuxtjs.org/community/contribution">Contribution</a> page.
    </p>
  </td>
  <td>
    <h2>❔ Questions</h2>
    <p>
      Check out <a href="https://v3.nuxtjs.org/community/getting-help">Getting Help</a> page.
    </p>
  </td>
</tr>
</tbody>
</table>


`Structure directory`

```bash
-> application

|-- web-timestamp-service
|   |-- client
|   |   |-- app
|   |   |   |-- assets
|   |   |   |-- components
|   |   |   |-- layouts
|   |   |   |-- middleware
|   |   |   |-- pages
|   |   |   |-- plugins
|   |   |   |-- server-middleware
|   |   |   |-- static
|   |   |   |-- store
|   |   |   |-- ....
|   |   |-- .env.bak
|   |   |-- Dockerfile
|   |   |__ nuxt.config.js
|   |   |__ package.json
|   |   |__ Dockerfile
|-- .gitignore
|-- .gitlab-ci.yml
|-- docker-compose.yml
|-- Readme.md
|-- root -> /app/
```

## 💻 Development

**install dependencies Nuxt.js**

    $ cd client
    $ yarn install && npm run install

**run server on localhost port 3000**

    $ yarn dev

**deploy generate server static**

    $ yarn generate || yarn build
    $ yarn start

**deploy server on docker**

    $ docker-compose up -d