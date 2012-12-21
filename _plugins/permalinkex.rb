module PermalinkEx
  # Remove original 'url' method
  def self.included(klass)
    klass.class_eval do
       alias :old_url :url
       remove_method :url
    end
  end
  
  # define a new 'url' method
  def url
    old_url.gsub(/:lang/, self.data["lang"])
  end
end

# Extend the Post class to replace the 'url' method
module Jekyll
  class Post
    include PermalinkEx
  end
end
