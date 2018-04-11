<template>
	<div class="box">
		<slot></slot>
	</div>
</template>

<script>
	export default{
	}
</script>

<style scoped="scoped">
	.box{
		display: flex;
		align-items: center;
		width: 44vw;
    	height: 14vh;
    	border-radius: 10px;
    	margin-bottom: 2vh;
    	color: #000;
    	box-sizing: border-box;
    	padding: 0 2vw;
    	justify-content: space-between;
    	background: #fff;
	}
	.icon{
		font-size: 0.46rem;
	}
	.title{
		width: 30vw;
		font-size: 0.46rem;
	}
</style>