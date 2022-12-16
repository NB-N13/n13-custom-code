$('[language-button]').on('click', function() {
	var lang;
  lang = $(this).attr('language-button');
  Cookies.set('language', lang);
});