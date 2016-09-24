jQuery(document).ready(function() {

	/* initialize shuffle plugin */
	var grid = jQuery('#grid');

	grid.shuffle({
		itemSelector: '.item' // the selector for the items in the grid
	});

	/* reshuffle when user clicks a filter item */
	jQuery('#filter a').click(function (e) {
		e.preventDefault();

		// set active class
		jQuery('#filter a').removeClass('active');
		jQuery(this).addClass('active');

		// get group name from clicked item
		var groupName = jQuery(this).attr('data-group');

		// reshuffle grid
		grid.shuffle('shuffle', groupName );
	});

});
