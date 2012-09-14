$(function() {
	
// slider
	$( "#slider-range" ).slider({
		orientation: "vertical",
		range: true,
		values: [ 1000, 3000 ],
		min:0,
		max:4000,
		slide: function( event, ui ) {
			$("#scale-diapason__to").val(ui.values[ 1 ] + " р.");
			$("#scale-diapason__from").val(ui.values[ 0 ] + " р.");
			$(".ui-slider-handle").eq(0).children().html(ui.values[ 0 ] + " р.");
			$(".ui-slider-handle").eq(1).children().html(ui.values[ 1 ] + " р.");
		}
	});
	$("#scale-diapason__to").val($( "#slider-range" ).slider( "values", 1 ) + " р.");
	$("#scale-diapason__from").val($( "#slider-range" ).slider( "values", 0 ) + " р.");
	$(".ui-slider-handle").eq(0).html("<span>"+ $( "#slider-range" ).slider( "values", 0 ) +" р.</span>");
	$(".ui-slider-handle").eq(1).html("<span>"+ $( "#slider-range" ).slider( "values", 1 ) +" р.</span>");
	

	// tabs
	$('ul.tabs__nav').delegate('li:not(.active)', 'click', function() {
		$(this).addClass('active').siblings().removeClass('active')
			.parents('div.tabs').find('div.tabs__box').eq($(this).index()).fadeIn(150).siblings('div.tabs__box').hide();
		return false;
	});
	
});