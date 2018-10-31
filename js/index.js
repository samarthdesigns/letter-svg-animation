$.fn.toggleAttr = function(attr, attr1, attr2) {
		return this.each(function() {
				var self = $(this);
				if (self.attr(attr) == attr1)
						self.attr(attr, attr2);
				else
						self.attr(attr, attr1);
		});
};

jQuery(document).ready(function() {
		$('.colour-toggle').click(function() {
				$('.red').toggleAttr('class', 'red red-color')
				$('.yellow').toggleAttr('class', 'yellow yellow-color')
				$('.green').toggleAttr('class', 'green green-color')
		})
		$('.no-colour-toggle').click(function() {
				$('.red').toggleAttr('class', 'red')
				$('.yellow').toggleAttr('class', 'yellow')
				$('.green').toggleAttr('class', 'green')
		})
})