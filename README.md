# @lassehaslev/vue-autocomplete

> Autocomplete input using Vue

## Installation
Run ```npm install @lassehaslev/vue-autocomplete --save``` in your project folder

## Usage

``` js
import {Autocomplete} from '@lassehaslev/vue-autocomplete';
<autocomplete
    value=""
    placeholder="Type to start autocomplete"
    @selected="onSelected"
    :search="onSearch"
    :adaptor="adaptor"
    name=""></autocomplete>
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
