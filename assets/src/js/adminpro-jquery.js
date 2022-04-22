$(document).ready(function(){
	
	var content = '';
	$('.hndle.ui-sortable-handle').each(function(i, obj) {
		var html = $(this).text();
		content += '<div class="indexmenu"><a href="">'+html+'</a></div>'; 
		
	});
	$('#dashboard-widgets-wrap').prepend('<div class="contents-container"><div class="indexmenu"><a><i class="dashicon dashicons-menu-alt2"></i> Contents</a></div>'+content+'</div>');
	
	console.log('done');
	/////////////shift appearance menu to top bar
	
	var appearance = $('#menu-appearance .wp-submenu').html();
	$('#wp-admin-bar-root-default').append('<li id="wp-admin-bar-new-content" class="menupop"><a class="ab-item" aria-haspopup="true" href="/wp-admin/themes.php"><span class="dashicons-before dashicons-admin-appearance" aria-hidden="true"></span><span class="ab-label"></span></a><div class="ab-sub-wrapper"><ul id="wp-admin-bar-new-content-default" class="ab-submenu">'+appearance+'</ul></div></li>');
	
	/////////////shift plugin menu to top bar
	
	var plugins = $('#menu-plugins .wp-submenu').html();
	$('#wp-admin-bar-root-default').append('<li id="wp-admin-bar-new-content" class="menupop"><a class="ab-item" aria-haspopup="true" href="/wp-admin/plugins.php"><span class="dashicons-before dashicons-admin-plugins" aria-hidden="true"></span><span class="ab-label"></span></a><div class="ab-sub-wrapper"><ul id="wp-admin-bar-new-content-default" class="ab-submenu">'+plugins+'</ul></div></li>');
	
	
	/////////////shift users menu to top bar
	
	var users = $('#menu-users .wp-submenu').html();
	$('#wp-admin-bar-root-default').append('<li id="wp-admin-bar-new-content" class="menupop"><a class="ab-item" aria-haspopup="true" href="/wp-admin/users.php"><span class="dashicons-before dashicons-admin-users" aria-hidden="true"></span><span class="ab-label"></span></a><div class="ab-sub-wrapper"><ul id="wp-admin-bar-new-content-default" class="ab-submenu">'+users+'</ul></div></li>');
	
	
	/////////////shift tools menu to top bar
	
	var tools = $('#menu-tools .wp-submenu').html();
	$('#wp-admin-bar-root-default').append('<li id="wp-admin-bar-new-content" class="menupop"><a class="ab-item" aria-haspopup="true" href="/wp-admin/tools.php"><span class="dashicons-before dashicons-admin-tools" aria-hidden="true"></span><span class="ab-label"></span></a><div class="ab-sub-wrapper"><ul id="wp-admin-bar-new-content-default" class="ab-submenu">'+tools+'</ul></div></li>');
	
	
	/////////////shift settings menu to top bar
	
	var settings = $('#menu-settings .wp-submenu').html();
	$('#wp-admin-bar-root-default').append('<li id="wp-admin-bar-new-content" class="menupop"><a class="ab-item" aria-haspopup="true" href="/wp-admin/options-general.php"><span class="dashicons-before dashicons-admin-settings" aria-hidden="true"></span><span class="ab-label"></span></a><div class="ab-sub-wrapper"><ul id="wp-admin-bar-new-content-default" class="ab-submenu">'+settings+'</ul></div></li>');
	
	$('.menupop').has('li.current').addClass('current');
});