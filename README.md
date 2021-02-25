# vue-accessibility-list

An accessibility list for your project with the options: increase / decrease font and high contrast.

## Demo

![alt text](https://romulodevweb.com.br/wp-content/uploads/2020/10/68747470733a2f2f6174697669646164656f6e2e636f6d2e62722f7374617469632f696d672f7675656163636573736c6973742e676966-1.gif)

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
| Props  | Type | Default | Description |
| ------------------- | ------------------- | ------------------- | ------------------- |
|  :position | String | left |left or right |
|  :backgroundColor | String | #D3D3D3 |background color of each item. Ex: #f9f9f9 |
|  :fontColor | String | #000 |font color of each item. Ex: #000|
|  :fontSize | String | 20px |font size of each item. Ex: 22px |
|  :size | String | 48px |width and height of each item. Ex: 50px |


## License
vue-accessibility-list is licensed under The MIT License.
