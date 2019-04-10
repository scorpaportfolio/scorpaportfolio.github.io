// $(function() {

	$(document).ready(function () {

		$("#modal-body").submit(function () {
			$.ajax({
				type: "POST",
				url: "mail.php",
				data: $(this).serialize()
			}).done(function () {
				$(this).find("input").val("");
				alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
				$("#modal-body").trigger("reset");
			});
			return false;
		});

	});

// });
