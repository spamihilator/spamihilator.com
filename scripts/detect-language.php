---
---
<?php
header('Vary: Accept-Encoding');
header('Content-Type: application/javascript; charset=UTF-8');
?>
var detectLanguageBrowserLang = "<?php
{% include getlanguage.php %}
$lang = GetLanguage();
if ($lang == "de" || $lang == "at" || $lang == "ch")
  $lang = "de";
else
  $lang = "en";
echo $lang;
?>";
