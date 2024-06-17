class Utils{
	static colorRect(leftX,topY, width, height, drawColor) 
	{
	   canvasContext.fillStyle = drawColor;
	   canvasContext.fillRect(leftX, topY, width, height);
	}
	
	static colorCircle(centerX,centerY, radius, drawColor) {
	   canvasContext.fillStyle = drawColor;
	   canvasContext.beginPath();
	   canvasContext.arc(centerX,centerY,radius,0,Math.PI*2,true);
	   canvasContext.fill();
	}
	
	static colorText(text,textX,textY,fillColor) {
		canvasContext.font="20px Arial";
		canvasContext.fillStyle = fillColor;
		canvasContext.fillText(text,textX,textY);
	}

	static rotate(x, y, largura, altura, degrees, color){
		canvasContext.save();

		canvasContext.translate(x + largura / 2, y + altura / 2);
		canvasContext.rotate(degrees*Math.PI/180);
		canvasContext.fillStyle = color;
        canvasContext.fillRect(-largura / 2, -altura / 2, largura, altura);

		canvasContext.restore();
	}

	static EVENTS = {
		BALL_TOUCHED_BOTTOM: 'ballTouchedBottom',
		PADDLE_TOUCHED_WALL: 'paddleTouchedWall',
		BALL_BOUNCED_TEN_TIMES: 'ballbouncedtentimes',
		THIRTY_SECONDS_RALLY: 'thirtysecondsrally'
	 }
 }