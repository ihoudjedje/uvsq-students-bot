
<h1 align="center">
  <br>
  <img src="http://www.girliemac.com/assets/images/articles/2017/01/cover-facebook-apiai-bot.png" alt="IlyesBot" width="700">
  <br>
  NodeJS ChatBot
  <br>
</h1>

<h4 align="center">A ChatBot designed to help new <a href="https://www.universite-paris-saclay.fr/fr/education/master/m2-gestion-de-donnees-dans-un-monde-numerique-data-management-in-a-digital-world#presentation-m2" target="_blank">DataScale's</a> students to explore and to know more about their course.</h4>

<p align="center">
  <!-- Downloads -->
  <a href="https://npmjs.org/package/choo">
    <img src="https://img.shields.io/npm/dm/choo.svg?style=flat-square"
      alt="Downloads" />
  </a>
  <!-- Standard -->
  <a href="https://standardjs.com">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square"
      alt="Standard" />
  </a>
    <a>
    <img src="https://img.shields.io/codacy/grade/e27821fb6289410b8f58338c7e0bc686.svg">
  </a>
  <a href="https://nodejs.org/en/">
      <img src="https://img.shields.io/node/v/gh-badges.svg">
  </a>
  <a href="">
    <img src="https://img.shields.io/npm/v/@cycle/core.svg">
  </a>
  <a href="">
    <img src="https://img.shields.io/github/stars/badges/shields.svg?style=social&label=Star">
  </a>
</p>
<br>

## Demo
You can test a fully working live demo at https://antun.me/node-chat/

## prerequisite
You need to download and install : 
* [npm & nodejs](https://nodejs.org/en/download/)
* [ngrok](https://ngrok.com/download)
---
## Usage
After you clone this repo, go to its root directory and run `npm install` to install all its dependencies.

#### 1. Developing a Facebook Messenger App
Before configuring your Messenger app on Facebook Developer, let’s create a bare minimum webhook with Node.js to get started.
###### Setting Up a Temporary Webhook Endpoint with ngrok
I choose ngrok to serves a localhost to a public URL because it is simple and easy to use. This URL will be used as a Messenger webhook endpoint during the development, so you don’t need to deploy to a server until the app is completed.
After downloading and installing it, run it with a port number, let’s use 5000 (it should be the same port as our main app is running)
```
$ ngrok http 5000
```
When you start ngrok, it will display a public URL of your tunnel in the terminal. We will need the URL later when setting up the Facebook app. (In the screenshot, the URL is https://47ba4dd4.ngrok.io)
<img src="http://www.girliemac.com/assets/images/articles/2017/01/ngrok.png" alt="ngrok" width="700">
