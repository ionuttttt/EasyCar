 $(document).ready(function () {
	 
 	$(".ts-sidebar-menu li a").each(function () {
 		if ($(this).next().length > 0) {
 			$(this).addClass("parent");
 		};
 	})
 	var menux = $('.ts-sidebar-menu li a.parent');
 	$('<div class="more"><i class="fa fa-angle-down"></i></div>').insertBefore(menux);
 	$('.more').click(function () {
 		$(this).parent('li').toggleClass('open');
 	});
	$('.parent').click(function (e) {
		e.preventDefault();
 		$(this).parent('li').toggleClass('open');
 	});
 	$('.menu-btn').click(function () {
 		$('nav.ts-sidebar').toggleClass('menu-open');
 	});
	 
	 
	 $('#zctb').DataTable({
		language: {
			search: "Cerca:",
			lengthMenu: "Mostra _MENU_ record per pagina",
			info: "Mostrando _START_ a _END_ di _TOTAL_ record",
			infoEmpty: "Nessun record disponibile",
			emptyTable: "Nessun dato disponibile", 
			infoFiltered: "(filtrati da _MAX_ record totali)",
			paginate: {
				previous: "Precedente",
				next: "Successivo"
			}
		}
	});
	
	 
	 
	 $("#input-43").fileinput({
		showPreview: false,
		allowedFileExtensions: ["zip", "rar", "gz", "tgz"],
		elErrorContainer: "#errorBlock43"
	});

 });
