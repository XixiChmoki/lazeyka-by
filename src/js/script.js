$(function(){

	// Progressive Web Apps
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

	/* Выпадающее меню Начало*/
	$('.menuToggle').on('click', function(){
		
		$('.menu').slideToggle(300, function(){
			
			if($(this).css('display') == 'none'){
				$(this).removeAttr('style'); 
			}
		});
	});
	/* Выпадающее меню Финиш*/
	
	/* Выпадающий слайдер статей Начало - работает после Ajax подгрузки контента*/
	$('body').on('click', '.main__right__section__title', function(){
		$(this).next().slideToggle(300);
	});
	/* Выпадающий слайдер статей Финиш*/

	/*Текущая дата Старт*/
	var currentDate = new Date();
	$(".date").html(currentDate.getFullYear());
	/*Текущая дата Финиш*/

	/* Время загрузки страницы Старт */
	var loadTime = window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart; 
    console.log('Page load time is '+ loadTime);
	/* Время загрузки страницы Финиш */
});