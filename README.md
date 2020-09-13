# vue-accessibility-list

An accessibility list for your project with the options: increase / decrease font and high contrast.

## Demo

![alt text](https://atividadeon.com.br/static/img/vueaccesslist.gif)

## Installation

### NPM
```
$ npm install vue-accessibility-list
```

### ES6
```
import AccessibilityList from 'vue-accessibility-list/src/AccessibilityList.vue'

new Vue({
  components: {
    AccessibilityList
  }
})

```

## Usage
```
<accessibility-list :position="position" :backgroundColor="backgroundColor" :fontColor="fontColor" :size="size" :fontSize="fontSize"></accessibility-list>
```
All props have default value.

### Description of props
| Props  | Type |Description |
| ------------------- | ------------------- | ------------------- |
|  :position | String | left or right |
|  :backgroundColor | String | background color of each item. Ex: #f9f9f9 |
|  :fontColor | String | font color of each item. Ex: #000|
|  :fontSize | String | font size of each item. Ex: 22px |
|  :size | String | width and height of each item. Ex: 50px |


## License
vue-accessibility-list is licensed under The MIT License.
