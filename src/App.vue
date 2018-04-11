<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	import "@/assets/rem.js"
	export default {
		name: 'App'
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		list-style: none;
		font-style: normal;
		font-family: "微软雅黑" sans-serif "宋体";
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}
	
	a {
		text-decoration: none;
	}
	
	img {
		border: none;
	}
	
	@font-face {
		font-family: 'iconfont';
		/* project id 570907 */
		src: url('//at.alicdn.com/t/font_570907_py9lj9xw5jj7nwmi.eot');
		src: url('//at.alicdn.com/t/font_570907_py9lj9xw5jj7nwmi.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_570907_py9lj9xw5jj7nwmi.woff') format('woff'), url('//at.alicdn.com/t/font_570907_py9lj9xw5jj7nwmi.ttf') format('truetype'), url('//at.alicdn.com/t/font_570907_py9lj9xw5jj7nwmi.svg#iconfont') format('svg');
	}
	
	.iconfont {
		font-family: 'iconfont';
	}
	
	.lists {
		display: flex;
		justify-content: space-between;
		align-items: center;
		box-sizing: border-box;
		padding: 3vw 5vw;
		color: #000;
		font-size: 0.36rem;
		background: #f3f3f3;
		border-bottom: 0.01rem solid #ccc;
	}
	.jiantou{
		font-size: 0.36rem;
		margin-left: 2px;
		font-weight: 900;
		display: inline-block;
	}
</style>