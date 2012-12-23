require 'backports'

module Jekyll
  class ProjectHoneypotTag < Liquid::Tag
    @@links = [
      '<a href="http://www.spamihilator.com/honeypot/ballet.php"><!-- crack-aboard --></a>',
      '<a href="http://www.spamihilator.com/honeypot/ballet.php"><img src="crack-aboard.gif" height="1" width="1" border="0"></a>',
      '<a href="http://www.spamihilator.com/honeypot/ballet.php" style="display: none;">crack-aboard</a>',
      '<div style="display: none;"><a href="http://www.spamihilator.com/honeypot/ballet.php">crack-aboard</a></div>',
      '<a href="http://www.spamihilator.com/honeypot/ballet.php"></a>',
      '<!-- <a href="http://www.spamihilator.com/honeypot/ballet.php">crack-aboard</a> -->',
      '<div style="position: absolute; top: -250px; left: -250px;"><a href="http://www.spamihilator.com/honeypot/ballet.php">crack-aboard</a></div>',
      '<a href="http://www.spamihilator.com/honeypot/ballet.php"><span style="display: none;">crack-aboard</span></a>',
      '<a href="http://www.spamihilator.com/honeypot/ballet.php"><div style="height: 0px; width: 0px;"></div></a>'
    ]

    def render(context)
      @@links.sample
    end
  end
end

Liquid::Template.register_tag('project_honeypot', Jekyll::ProjectHoneypotTag)
