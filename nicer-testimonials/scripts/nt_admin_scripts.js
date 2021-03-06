// the list table scripts

jQuery(document).ready(function($){
	$(".nt-app-rev").click(function(e){
		var app_btn = $(this);
		e.preventDefault();
		var id = $(this).data("ntrev-id");
		jQuery.ajax({
			type: 'POST',
			url: nt_list_table_params.ajaxurl,
			data: {"action": "nt_app_rev", "id": id},
			success: function (data) {
				$(app_btn).fadeOut(200);
				$(app_btn).closest('tr').find('.column-status').html("Approved");
			}
		});
	});

	$(".nt-unapp-rev").click(function(e){
		var unapp_btn = $(this);
		e.preventDefault();
		var id = $(this).data("ntrev-id");
		jQuery.ajax({
			type: 'POST',
			url: nt_list_table_params.ajaxurl,
			data: {"action": "nt_unapp_rev", "id": id},
			success: function (data) {
				$(unapp_btn).fadeOut(200);
				$(unapp_btn).closest('tr').find('.column-status').html("Unapproved");
			}
		});
	});

	$(".nt-del-rev").click(function(e){
		var del_btn = $(this);
		e.preventDefault();
		var id = $(this).data("ntrev-id");
		jQuery.ajax({
			type: 'POST',
			url: nt_list_table_params.ajaxurl,
			data: {"action": "nt_del_rev", "id": id},
			success: function (data) {
				$(del_btn).closest('tr').fadeOut(200);
			}
		});
	});


// settings page

// on tab click
$(".nt_tab_links a").click(function(e){
	e.preventDefault();
	$(".nt_tab_links a").not(this).removeClass("nt_active")
	$(this).addClass("nt_active")
	var target_tab = $(this).attr("href");
	$(".nt_tab").not("#"+target_tab).removeClass("nt_active")
	$("#"+target_tab).addClass("nt_active");
});

// input tag generator
$(".nt_input_name").change(function(){
	$(this).closest('tr').find('.nt_input_tag').val('['+$(this).val().replace(/ /g,"_").toLowerCase()+']');
})

});

