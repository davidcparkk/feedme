# Feedme
[Live Demo](https://feedme-fsp.herokuapp.com/#/)

### Background and Overview

Inspired by the application [Feedly](https://feedly.com/i/welcome), Feedme is a personalized news and media aggregator clone that gives users easy access to their favorite news articles and sources all in one place. Create a feed for your specific interest (i.e., technology, important people, sports, etc.), customize it by adding all your relevant sources, and navigate through all of its articles with a friendly feed interface and a couple clicks of a button.


## Technologies and Challenges

### Technologies Used

Feedme is built with a Rails backend, React/Redux frontend, and a customized database using PostgreSQL. RESTful API routes used. Some notable libraries used are Jbuilder, BCrypt, and SecureRandom. Jbuilder is used to render JSON data from AJAX requests to the server, whereas BCcrypt and SecureRandom are used to hash passwords and generate session tokens, respectively, for user user authentication.

### UI/UX 

Single page application that begins with the splash page and a navigation bar on top which navigates to a protected main browser page with a navigation sidebar on the left. Protected main browser page alternates between the articles index, sources index, and individual feed show pages. 

Creating a feed will add a feed container item to the feed index which is located within the navigation sidebar. In order to populate the feed show page with desired articles, user will need to add relevant sources. User will do that first by clicking 'Add Content' button at the bottom of the navigation sidebar, then select the desired source (to the source show page), and finally, click the green '+' sign next to the feed you would like to populate. Next time you want to see those articles from your favorite sources, navigate to your feed show page at any time.

### Challenges

In the development of Feedme, the main challenge was displaying only a particular feed's articles on the feed show page. The best way to do this was to first create a joins table between feeds and sources (called feedSourceItem) using association by foreign keys. Once established, user can 'fetchFeed' and replace the 'articles' Redux state using a single 'feeds' action creator. To do this, using Jbuilder:

 ```
 ## /feeds/show.json.builder
 
json.feed do
  json.partial! '/api/feeds/feed', feed: @feed
end

@feed.articles.each do |article|
  json.articles do 
    json.set! article.id do
      json.partial! 'api/articles/article', article: article
    end
  end
end
```

Another challenge that arose was being able to create a feedSourceItem from the frontend. In the end, thanks to the joins table and associations created prior, user can send data to database by making a POST AJAX request to the joins table.

 ```
 ## Feed Index Item Component
 
 handleAdd(e) {
    this.props.createFeedSourceItem({feed_id: this.props.feed.id, source_id: this.props.match.params.sourceId});
  }
 
 ## AJAX call util 
 
 export const createFeedSourceItem = (feedSourceItem) => {
  return $.ajax({
    method: "post",
    url: `/api/feed_source_items`,
    data: {feedSourceItem},
    error: err => console.log(err)
  })
}
 
 ```
