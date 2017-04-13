function getWebPath() {
		
	var hostName = window.location.hostname;
	var webPath="";
	
	if (hostName == "localhost") {
		// Testing path.
		webPath = "http://localhost:8080/aws-s3-web-site/";
	}
	else {
	
		// Replace the following with your actual address.  
		webPath = "http://yourbucket_name.s3-website-region.amazonaws.com/";
	}
	
	
	return webPath;
}