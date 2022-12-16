<script>
var userLang = navigator.language || navigator.userLanguage; 
console.log("The language is: " + userLang);
if ((Cookies.get("language")) === "en" || (Cookies.get("language")) === "de" || (Cookies.get("language")) === "fr"){
	if ((Cookies.get("language")) === "de"){
  window.location.href = "/de/home" 
  }
  else{
  if ((Cookies.get("language")) === "fr"){
  window.location.href = "/fr/home" 
  }
  }
}
else {
		if (userLang.toLowerCase().includes('de')) {
    	  Cookies.set('language', "de");
   	   window.location.href = "/de/home"  
      } 
    else{
    if (userLang.toLowerCase().includes('fr')) {
      Cookies.set('language', "fr");
      window.location.href = "/fr/home"      
			}
    }
}
</script>