function getWebPath() {
		
	var hostName = window.location.hostname;
	var webPath="";
	
	if (hostName == "localhost") {
		// Testing path.
		webPath = "http://localhost:8080/aws-s3-web-site/";
	}
	else {
	
		// Production path.
		webPath= "http://zzz-acloudysky.s3-website-us-west-2.amazonaws.com/";
			
		// webPath = "http://http://d19wlfbzcmbblu.cloudfront.net/" 
	}
	
	
	return webPath;
}