$(function() {
	// solving the active menu problem
	switch(menu) {
	
		case 'About Us':
			$('#about').addClass('active');
			break;
		case 'Contact Us':
			$('#contact').addClass('active');
			break;
		case 'All Products':
			$('#listProducts').addClass('active');
			break;
		case 'Manage Products':
			$('#manageProducts').addClass('active');
			break;
		case 'User Cart':
			$('#userCart').addClass('active');
			break;
		default:	
			if(menu == "Home")
				break;
				}

	
});