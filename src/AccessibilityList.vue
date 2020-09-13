<template>
    <ul id="list-accessibility" v-bind:class="styleObject.position">
        <li>
            <a href="#" v-on:click.prevent.stop="increase()" v-bind:style="styleObject">
                A+
            </a>
        </li>
        <li>
            <a href="#" v-on:click.prevent.stop="decrease()" v-bind:style="styleObject">
                A-
            </a>
        </li>
        <li>
            <a href="#" v-on:click.prevent.stop="adjust()" v-bind:style="styleObject">
                &#127763;
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'ListAccessibility',
    props :{
        position: { 
            type: String,
            default: 'left'
        },
        backgroundColor: {
            type: String,
            default: '#D3D3D3'
        },
        fontColor:{
            type: String,
            default: '#000'
        },
        fontSize:{
            type: String,
            default: '20px'
        },
        size: {
            type: String,
            default: '48px'
        }
    },
    data(){
        return{
            styleObject : {
                position : this.position,
                backgroundColor: this.backgroundColor, 
                color: this.fontColor,
                width: this.size,
                height: this.size,
                fontSize: this.fontSize
            }
        }
    },
    methods: {

        increase(){
			let elements = document.querySelector("body").querySelectorAll('*');
			let fonts = [];
            
            function getFontSize() {
				for (let i = 0; i < elements.length; i++) {
                    let fontSize = window.getComputedStyle(elements[i], null).getPropertyValue('font-size');
                    fonts.push(parseFloat(fontSize));      
				}
			}

            getFontSize();

            for (let i = 0; i < elements.length; i++) {
                ++fonts[i];
                elements[i].style.fontSize = fonts[i] + "px"
			}

        },
        
        decrease(){
			let elements = document.querySelector("body").querySelectorAll('*');
			let fonts = [];
            
            function getFontSize() {
				for (let i = 0; i < elements.length; i++) {
                    let fontSize = window.getComputedStyle(elements[i], null).getPropertyValue('font-size');
                    fonts.push(parseFloat(fontSize));      
				}
			}

            getFontSize();

            for (let i = 0; i < elements.length; i++) {
                --fonts[i];
                elements[i].style.fontSize = fonts[i] + "px"
			}

        },

        adjust(){
            let className = 'contrast';
            let el = document.querySelector('body');
            el.classList.toggle(className);
        }

    }
}
</script>

<style>
ul#list-accessibility{
    position: fixed;
    z-index: 9999;
    top: 40%;
    padding: 0;
    margin: 0;
}

ul#list-accessibility li{
    list-style: none;
}

ul#list-accessibility li a{
    text-align: center;
    line-height:0px;
    display: block;
    float: left;
    text-decoration: none;
    cursor: pointer;
    text-align: center;
    line-height: 48px;
    position: relative;
}

ul#list-accessibility li a:hover{
    color: #fff !important;
    background-color: dimgray !important;
}

.left{
    left: 0;
}

.right{
    right: 0;
}

.contrast,
.contrast nav,
.contrast div,
.contrast li,
.contrast ol,
.contrast header,
.contrast footer,
.contrast section,
.contrast main,
.contrast aside,
.contrast article {
    background: black !important;
    color: white !important;
}
.contrast h1,
.contrast h2,
.contrast h3,
.contrast h4,
.contrast h5,
.contrast h6,
.contrast p,
.contrast label,
.contrast strong,
.contrast em,
.contrast cite,
.contrast q,
.contrast i,
.contrast b,
.contrast u,
.contrast span {
    color: white !important;
}
.contrast a{
    color: yellow !important;
}
.contrast button,
.contrast input[type=button],
.contrast input[type=reset],
.contrast input[type=submit] {
    background: black !important;
    color: yellow !important;
    border: none !important;
}
.contrast input[type=text],
.contrast input[type=password],
.contrast input[type=url],
.contrast input[type=search],
.contrast input[type=email],
.contrast input[type=tel],
.contrast input[type=date],
.contrast input[type=month],
.contrast input[type=week],
.contrast input[type=datetime],
.contrast input[type=datetime-local],
.contrast textarea,
.contrast input[type=number] {
    background: black !important;
    border: 1px solid white !important;
    color: white !important;
}
</style>
