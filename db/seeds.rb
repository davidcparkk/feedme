# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ActiveRecord::Base.transaction do

  User.destroy_all

  u1 = User.create!(username: "Guest", password: 'password', email: 'guest@feedme.com')

  Feed.destroy_all

  f1 = Feed.create!(feed_title: "Weekly Tech Team Reading", user_id: u1.id)
  f2 = Feed.create!(feed_title: "Weekend Plans", user_id: u1.id)
  f3 = Feed.create!(feed_title: "2020 Elections", user_id: u1.id)
  f4 = Feed.create!(feed_title: "UI/UX Projects", user_id: u1.id)

  Source.destroy_all

  s1 = Source.create!(source_name: "# Tech", description:"Check out the latest in Tech", image_url: "/assets/tech.jpg")
  s2 = Source.create!(source_name: "# Design", description:'Check out the latest in Design', image_url: "/assets/design.jpg")
  s3 = Source.create!(source_name: "# Marketing",description:'Check out the latest in Marketing', image_url: "/assets/marketing.jpg")
  s4 = Source.create!(source_name: "# Business",description:'Check out the latest in Business', image_url: "/assets/business3.jpg")
  s5 = Source.create!(source_name: "# Cyber Security", description:'Check out the latest in Cyber Security', image_url: "/assets/cyber.jpg")
  s6 = Source.create!(source_name: "# Politics", description:'Check out the latest in Politics', image_url: "/assets/politics.jpg")
  s7 = Source.create!(source_name: "# Science", description:'Check out the latest in Science', image_url: "/assets/science.jpg")
  s8 = Source.create!(source_name: "# Outdoors", description:"Check out the latest in Outdoors", image_url: "/assets/outdoors.jpg")

  FeedSourceItem.destroy_all

  sf1 = FeedSourceItem.create!(source_id: s1.id, feed_id: f1.id)
  sf2 = FeedSourceItem.create!(source_id: s4.id, feed_id: f1.id)
  sf3 = FeedSourceItem.create!(source_id: s7.id, feed_id: f1.id)
  sf4 = FeedSourceItem.create!(source_id: s8.id, feed_id: f2.id)
  sf5 = FeedSourceItem.create!(source_id: s3.id, feed_id: f2.id)
  sf6 = FeedSourceItem.create!(source_id: s5.id, feed_id: f3.id)
  sf7 = FeedSourceItem.create!(source_id: s6.id, feed_id: f3.id)
  sf8 = FeedSourceItem.create!(source_id: s1.id, feed_id: f4.id)
  sf9 = FeedSourceItem.create!(source_id: s2.id, feed_id: f4.id)
  

  Article.destroy_all

  a1 = Article.create!(title: "Meanwhile in Oregon", body:"There seems to be a festival in Eugene, Oregon, celebrating other Euguene's. It's as exciting as it sounds.", source_id: s1.id, image_url: "/assets/glasses-svgrepo-com.svg", url: "https://techcrunch.com/2019/04/15/airbnb-officially-owns-hoteltonight/", author: )










  a2 = Article.create!(title: "As the French Say: Boneappletea",body:"(kisses fingers) Join the world famous chef's journey to all the scrumptuous foods. Enter into the indulgence and other eggciting adventures.", source_id: s2.id, image_url: "/assets/id-card-svgrepo-com.svg")
  a3 = Article.create!(title: "Celtics defeated the Golden State Warriors",body:"On March the third, 2019, the 39-26 Boston Celtics defeat the Golden State Warriors 44-20), 128-95. True story. Was on the television as I was writing this.", source_id: s3.id, image_url: "/assets/basketball-player-svgrepo-com.svg")
  a4 = Article.create!(title: "Analysis", body:"A closer look: the extensive effort to bury Donald Trump's Grades", source_id: s4.id, image_url: "/assets/twitter-svgrepo-com.svg")
  a5 = Article.create!(title: "Meanwhile in Oregon", body:"There seems to be a festival in Eugene, Oregon, celebrating other Euguene's. It's as exciting as it sounds.", source_id: s2.id, image_url: "/assets/twitter-svgrepo-com.svg")
  a6 = Article.create!(title: "As the French Say: Boneappletea",body:"(kisses fingers) Join the world famous chef's journey to all the scrumptuous foods. Enter into the indulgence and other eggciting adventures.", source_id: s3.id, image_url: "/assets/twitter-svgrepo-com.svg")
  a7 = Article.create!(title: "Celtics defeated the Golden State Warriors",body:"On March the third, 2019, the 39-26 Boston Celtics defeat the Golden State Warriors 44-20), 128-95. True story. Was on the television as I was writing this.", source_id: s4.id, image_url: "/assets/twitter-svgrepo-com.svg")
  a8 = Article.create!(title: "Analysis", body:"A closer look: the extensive effort to bury Donald Trump's Grades. Collusion?", source_id: s6.id, image_url: "/assets/newspaper-svgrepo-com.svg")
  a9 = Article.create!(title: "Meanwhile in Oregon", body:"Stuff is going down. There seems to be a festival in Eugene, Oregon, celebrating other Euguene's. It is as exciting as it sounds.", source_id: s3.id, image_url: "/assets/lock-svgrepo-com.svg")
  a10 = Article.create!(title: "The Great Debators Really Making Things Fun At the Party",body:"I'm going to say with absolute authority that the iPhone5 is way better than the iPhone5S", source_id: s4.id, image_url: "/assets/star-svgrepo-com.svg")
  a11 = Article.create!(title: "The Great Debators Really Making Things Fun At the Party",body:"I'm going to say with absolute authority that the iPhone6 is way better than the iPhone6S", source_id: s1.id, image_url: "/assets/user-svgrepo-com.svg")
  a12 = Article.create!(title: "Analysis", body:"A closer look: are they worth saving anymore? We'll never know until it's too late. Let's do nothing about it until then.", source_id: s2.id, image_url: "/assets/youtube-svgrepo-com.svg")
  a13 = Article.create!(title: "Analysis", body:"A closer look: are they worth saving anymore? We'll never know until it's too late. Let's do nothing about it until then.", source_id: s4.id, image_url: "/assets/flask-svgrepo-com.svg")
  a14 = Article.create!(title: "As the French Say: Boneappletea",body:"(kisses fingers) Join the world famous chef's journey to all the scrumptuous foods. Enter into the indulgence and other eggciting adventures.",source_id: s5.id, image_url: "/assets/skier-svgrepo-com.svg")
  a15 = Article.create!(title: "The Great Debators Really Making Things Fun At the Party",body:"I'm going to say with absolute authority that the iPhone6 is way better than the iPhone6S", source_id: s5.id, image_url: "/assets/shooter-svgrepo-com.svg")
  a16 = Article.create!(title: "Analysis", body:"A closer look: are they worth saving anymore? We'll never know until it's too late. Let's do nothing about it until then.", source_id: s7.id, image_url: "/assets/twitter-svgrepo-com.svg")
  a17 = Article.create!(title: "As the French Say: Boneappletea",body:"(kisses fingers) Join the world famous chef's journey to all the scrumptuous foods. Enter into the indulgence and other eggciting adventures.", source_id: s1.id, image_url: "/assets/rss-svgrepo-com.svg")
  a18 = Article.create!(title: "Boneappletea!",body:"A chef's journey to all the scrumptuous foods",source_id: s7.id, image_url: "/assets/newspaper-svgrepo-com.svg")
  a19 = Article.create!(title: "Celtics defeated the Golden State Warriors",body:"On March the third, 2019, the 39-26 Boston Celtics defeat the Golden State Warriors 44-20), 128-95. True story. Was on the television as I was writing this.", source_id: s7.id, image_url: "/assets/newspaper-svgrepo-com.svg")
  a20 = Article.create!(title: "Analysis", body:"A closer look: the extensive effort to bury Donald Trump's Grades", source_id: s8.id, image_url: "/assets/twitter-svgrepo-com.svg")
end