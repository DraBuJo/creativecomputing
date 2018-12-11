/**inspired by Make a fun animated audio player with JavaScript and CSS3   https://www.youtube.com/watch?v=ZTBekkqA2rM**/ 
window.onload=function(){
  $('#musicbutton').click(function(){
  	var $this = $(this),
  	    audio = $this.siblings('audio')[0];

      if (audio.paused === false){
      	audio.pause();
      	audio.currentTime = 0;


      }

      else{
      	audio.play();
  	    
      }
  	  
  	  });
};