module Jekyll
  class LangUrlTag < Liquid::Tag
    def sanitize(url)
      url.sub(/^\//, '').sub(/\/index.html?$/, '')
    end
    
    def get_lang_url(context, lang)
      page = context.environments.first["page"]
      if page["lang"] == lang
        sanitize(page["url"])
      else
        site = context.registers[:site]
        pages = site.pages
        otherp = pages.find { |p| p.data["id"] == page["id"] && p.data["lang"] == lang }
        l = otherp.to_liquid["url"]
        l = sanitize(l) unless l.nil?
        l || lang
      end
    end
  end
  
  class LangUrlGermanTag < LangUrlTag
    def render(context)
      get_lang_url(context, "de")
    end
  end
  
  class LangUrlEnglishTag < LangUrlTag
    def render(context)
      get_lang_url(context, "en")
    end
  end
end

Liquid::Template.register_tag('lang_url_german', Jekyll::LangUrlGermanTag)
Liquid::Template.register_tag('lang_url_english', Jekyll::LangUrlEnglishTag)
