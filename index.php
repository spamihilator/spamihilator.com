---
---
<?php

{% include getlanguage.php %}

$lang = GetLanguage();

header("HTTP/1.1 302 Found");
if ($lang == "de" || $lang == "at" || $lang == "ch") {
  header("Location: {{ site.url }}/de/");
} else {
  header("Location: {{ site.url }}/en/");
}
?>
