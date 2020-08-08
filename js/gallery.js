$(document).ready(function() {
   let openBtn = $("#quickGallery .openBtn");
   let closeBtn = $("#imagePreview .closeBtn");
   let modal = $("#imagePreview");
 
   openBtn.click(function() {
      let imgSrc = $(this).attr("data-src");
      $("#modalContent img").attr("src", imgSrc);
      $("#modalContent").addClass("zoomIn");
      
      modal.show();
   });

   function closeModal() {
      $("#modalContent").removeClass("zoomIn");
      $("#modalContent").addClass("zoomOut");
      
      setTimeout(function() {
         modal.hide();
      }, 200);
   }

   closeBtn.click(function() {
      closeModal();
   });

   $(window).click(function(event) {
      if (event.target.className == "quickModal") {
         closeModal();
      }
   });
});

function randomSort(arr) {
   return arr.sort(() => Math.random() - 1)
}

function remove(id) {
   document.getElementById(id).style.display = 'none';
}

var imageArray = ["car-984159_640.jpg", "coffee-983955_640.jpg", "eagle-1246681_640.jpg", "rainbow-background-1149610_640.jpg", "station-839208_640.jpg", "wind-farm-1747331_640.jpg"];
function shuffle() {
   var imgArray = randomSort(imageArray);
   imgs = document.querySelectorAll('img');
	for (i = 0; i < imgs.length; i++) {
		imgs[i].setAttribute('src', "images/" + imgArray[i]);
	}
}

window.onload = function() {
	imgs = document.querySelectorAll('img');
	for (i = 0; i < imgs.length; i++) {
		if (imgs[i].getAttribute('data-src')) {
			imgs[i].setAttribute('src', imgs[i].getAttribute('data-src'));
		}
	}
}