module Jekyll
  class CheckPropsTag < Liquid::Tag
    def render(context)
      page = context.environments.first["page"]
      check_prop page, "id"
      check_prop page, "lang"
      ""
    end
    
    def check_prop(page, prop)
      url = page["url"]
      abort "-" * 70 + "\nMissing property in page's front matter!\nProperty: #{prop}\nPage: #{url}\n" + "-" * 70 if page[prop].nil?
    end
  end
end

Liquid::Template.register_tag('check_props', Jekyll::CheckPropsTag)
