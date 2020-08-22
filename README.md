<h1 align="center">
  :heavy_dollar_sign: Stock Trader
</h1>

- **Project proposed by:** [Cod3r](https://www.cod3r.com.br/)
- **Project developed by:** [Julio L. Muller](https://github.com/juliolmuller)
- **Released on:** Apr 20, 2020
- **Updated on:** Aug 22, 2020
- **Latest version:** 1.0.2
- **License:** MIT

![Application snapshot](./src/assets/app-overview.jpg)

Application developed during [Cod3r's official Vue.js course](https://www.udemy.com/course/vue-js-completo/), on Udemy, in order to simulate a Stock Exchange trading platform. Fake money, bur real shares market value fluctuations.

[Check out the application running!](https://juliolmuller.github.io/stock-trader/)

## :trophy: Lessons Learned

- Building a full scalable Vue.js application;
- Getting tto know Vuetify :heart_eyes: (best Material Design components library)
- How to capture real-time shares values with Google Finance;
- How to publish a Google Sheets document publicly;
- How to turn Google Sheets into a REST API with a service provided by [Sheets.Best](https://sheet.best/);

## :hammer: Technologies & Resources

**Frontend:**
- Vue.js 2
- Vuex (official Vue's state manger)
- Vuetify 2
- Axios (HTTP client)

**Development:**
- Visual Studio Code
- Vue CLI & Node.js routines

## :zap: Features

- Provide the user with R$10k to spend in the platform;
- List all available shares in [BM&FBOVESPA](http://www.b3.com.br/);
- Allow basic operations of buying/selling shares at instant price;
- Stores user's wallet at browser's local storage;

## :bell: Setting up the Environment

Make sure to have **Node.js 10+** installed in your machine and its **npm** available in the command line, then use the following routines:

```bash
$ npm install   # Download dependencies
$ npm run serve # Run development server
$ npm run build # Build files for production
```
