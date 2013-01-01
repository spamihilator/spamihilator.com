---
---
var detectLanguageBrowserLang = "<?php
{% include getlanguage.php %}
$lang = GetLanguage();
if ($lang == "de" || $lang == "at" || $lang == "ch")
  $lang = "de";
else
  $lang = "en";
echo $lang;
?>";
