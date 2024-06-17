class MouseInput {
	static x = 400;
	static y = 400;
	static updateMousePos(evt) {
		var rect = canvas.getBoundingClientRect();
		var root = document.documentElement;
		MouseInput.x = evt.clientX - rect.left - root.scrollLeft;
		MouseInput.y = evt.clientY - rect.top - root.scrollTop;
		
	}
	static mouseClick(evt){
		var rect = canvas.getBoundingClientRect();
		var root = document.documentElement;
		MouseInput.clickX = evt.clientX - rect.left - root.scrollLeft;
		MouseInput.clickY = evt.clientY - rect.top - root.scrollTop;
	}
	
}
	