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
        posts = site.posts
        otherp = pages.find { |p| p.data["uid"] == page["uid"] && p.data["lang"] == lang }
        if otherp.nil?
          otherp = posts.find { |p| p.data["uid"] == page["uid"] && p.data["lang"] == lang }
        end
        if otherp.nil?
          abort "Could not find #{lang} site for #{page['url']} with uid #{page['uid']}"
        else
          l = otherp.to_liquid["url"]
          if l.nil?
            abort "Could not find url to #{lang} site for #{page['url']} with uid #{page['uid']}"
          else
            sanitize(l)
          end
        end
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
