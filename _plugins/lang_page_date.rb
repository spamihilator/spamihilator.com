module Jekyll
  module LangPageDateFilter
    @@days = {
      "de" => [
        "Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"
      ],
      "en" => [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
      ]
    }
    
    @@months = {
      "de" => [
        "Januar", "Februar", "M&auml;rz", "April", "Mai", "Juni", "Juli", "August",
        "September", "Oktober", "November", "Dezember"
      ],
      "en" => [
        "January", "February", "March", "April", "May", "June", "July", "August",
        "September", "October", "November", "December"
      ]
    }
    
    def lang_page_date(page)
      date = page["date"]
      lang = page["lang"]
      
      r = @@days[lang][date.wday]
      r += ", "
      if lang == "en"
        r += @@months[lang][date.month - 1]
        r += " "
        r += date.mday.to_s
        r += ", "
        r += date.year.to_s
      else
        r += date.mday.to_s
        r += ". "
        r += @@months[lang][date.month - 1]
        r += " "
        r += date.year.to_s
      end
      
      r
    end
  end
end

Liquid::Template.register_filter(Jekyll::LangPageDateFilter)
