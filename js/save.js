$('.try-ti.seeency.save').click(function(){
	console.log("clicked");
	var filename = document.getElementById("image").alt;
	var settings = document.getElementById("settings").innerHTML;


	myapp.savelist.push(
          {'filename':filename,
          'settings':settings}
          );
	console.log(myapp.savelist);
});