Please complete both of the tasks below.

# A. The Billboard
A Vue programming task for front end recruitment purpose.

## Tasks
1. Download this repo to your local machine. ✔
2. Get an API key from Napster and use it to: ✔
3. Build an UI that:
+ Displays the top 20 albums of the day (name, artist name and release date) ✔
+ The release date follows this format: DD.MM.YYYY ✔
+ If the album name is clicked, it shows the album's image, genre and list of tracks (with track name and artist name) in the view ✔
+ If the artist name in the track list is clicked, it shows the artist's short biography in the view (if any). ✔

## Create .env file before running project
```bash
# Create .env file with configs (example):
VUE_APP_API_ENDPOINT=https://api.napster.com
VUE_APP_API_VERSION=v2.2
VUE_APP_API_KEY=YOUR_NASPTER_API_KEY
```

## Run unit-test
```bash
npm test
```

## How to run
Local server:
```bash
1. npm install
2. npm run serve
```

## Demo
<div align="center">
    <h4>Home page</h4>
    ![alt text](https://github.com/anhphambkit/bilian-music---Cubicasa-test/blob/master/docs/home.png?raw=true)
</div>
<div align="center">
    <h4>Album detail page</h4>
    <img src="https://github.com/anhphambkit/bilian-music---Cubicasa-test/blob/master/docs/player.png" width=70% />
</div>
<div align="center">
    <h4>Artist detail page</h4>
    <img src="https://github.com/anhphambkit/bilian-music---Cubicasa-test/blob/master/docs/artist.png" width=70% />
</div>
<div align="center">
    <h4>Demo video</h4>
    <img src="https://github.com/anhphambkit/bilian-music---Cubicasa-test/blob/master/docs/demo.gif" width=70% />
</div>

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don\'t want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

### `pages`

This directory contains your application views

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.