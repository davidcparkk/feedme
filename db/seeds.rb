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
  u2 = User.create!(username: "Ben", password: 'password', email: 'ben@feedme.com')
  u3 = User.create!(username: "Davies", password: 'password', email: 'davies@feedme.com')
  u4 = User.create!(username: "Camilla", password: 'password', email: 'camilla@feedme.com')

  Feed.destroy_all

  f1 = Feed.create!(feed_title: "Football", user_id: u1.id, image_url: "/assets/american-football-player-svgrepo-com.svg")
  f2 = Feed.create!(feed_title: "Science Weekly", user_id: u2.id, image_url: "/assets/flask-svgrepo-com.svg")
  f3 = Feed.create!(feed_title: "Outdoors", user_id: u3.id, image_url: "/assets/earth-globe-svgrepo-com.svg")
  f4 = Feed.create!(feed_title: "Tech", user_id: u4.id, image_url: "/assets/science-svgrepo-com.svg")
  f5 = Feed.create!(feed_title: "Science Weekly", user_id: u1.id, image_url: "/assets/idea-svgrepo-com.svg")
  f6 = Feed.create!(feed_title: "Outdoors", user_id: u1.id, image_url: "/assets/flask-svgrepo-com.svg")
  f7 = Feed.create!(feed_title: "Tech", user_id: u1.id, image_url: "/assets/laptop-svgrepo-com.svg")

  Source.destroy_all

  s1 = Source.create!(source_name: "WahPo Newsletter", description:"Not to be mistaken by that one rich guy that owns his own newspaper", image_url: "/assets/twitter-svgrepo-com.svg")
  s2 = Source.create!(source_name: "Marketing and Design Professionals", description:'The the trendy ones', image_url: "/assets/flask-svgrepo-com.svg")
  s3 = Source.create!(source_name: "Fitness and Health",description:'Gainz', image_url: "/assets/earth-globe-svgrepo-com.svg")
  s4 = Source.create!(source_name: "Funny Comics and Bits",description:'Spelled differently than our sister company', image_url: "/assets/twitter-svgrepo-com.svg")
  s5 = Source.create!(source_name: "BlueBird", description:'The greatest app you will ever use', image_url: "/assets/idea-svgrepo-com.svg")
  s6 = Source.create!(source_name: "Twitter", description:'The second greatest app you will ever use', image_url: "/assets/flask-svgrepo-com.svg")
  s7 = Source.create!(source_name: "Youtube Celebrity", description:'17 year old with a lot banking on this gig', image_url: "/assets/youtube-svgrepo-com.svg")
  s8 = Source.create!(source_name: "Trapeze Artist Enthusiasts", description:"Title says it all", image_url: "/assets/twitter-svgrepo-com.svg")

  FeedSourceItem.destroy_all

  sf1 = FeedSourceItem.create!(source_id: s1.id, feed_id: f5.id)
  sf2 = FeedSourceItem.create!(source_id: s2.id, feed_id: f6.id)
  sf3 = FeedSourceItem.create!(source_id: s3.id, feed_id: f7.id)
  sf4 = FeedSourceItem.create!(source_id: s4.id, feed_id: f1.id)
  sf5 = FeedSourceItem.create!(source_id: s5.id, feed_id: f1.id)
  sf6 = FeedSourceItem.create!(source_id: s6.id, feed_id: f2.id)
  sf7 = FeedSourceItem.create!(source_id: s7.id, feed_id: f3.id)
  sf8 = FeedSourceItem.create!(source_id: s8.id, feed_id: f4.id)

  Article.destroy_all

  a1 = Article.create!(title: "Meanwhile in Oregon", body:'Stuff is about to go down', source_id: s1.id, image_url: "/assets/glasses-svgrepo-com.svg")
  a2 = Article.create!(title: "Boneappletea!",body:"A chef's journey to all the scrumptuous foods", source_id: s2.id, image_url: "/assets/id-card-svgrepo-com.svg")
  a3 = Article.create!(title: "Celtics defeated the Golden State Warriors",body:"On March the third, 2019, the 9=39-26 Boston Celtics defeat the Golden State Warriors 44-20), 128-95. True story.", source_id: s3.id, image_url: "/assets/basketball-player-svgrepo-com.svg")
  a4 = Article.create!(title: "Analysis", body:"A closer look: the extensive effort to bury Donald Trump's Grades", source_id: s4.id, image_url: "/assets/twitter-svgrepo-com.svg")
  a5 = Article.create!(title: "Meanwhile in Oregon", body:'Stuff is about to go down', source_id: s2.id, image_url: "/assets/twitter-svgrepo-com.svg")
  a6 = Article.create!(title: "Boneappletea!",body:"A chef's journey to all the scrumptuous foods", source_id: s3.id, image_url: "/assets/twitter-svgrepo-com.svg")
  a7 = Article.create!(title: "Celtics defeated the Golden State Warriors",body:"On March the third, 2019, the 9=39-26 Boston Celtics defeat the Golden State Warriors 44-20), 128-95. True story.", source_id: s4.id, image_url: "/assets/twitter-svgrepo-com.svg")
  a8 = Article.create!(title: "Analysis", body:"A closer look: the extensive effort to bury Donald Trump's Grades", source_id: s1.id, image_url: "/assets/newspaper-svgrepo-com.svg")
  a9 = Article.create!(title: "Meanwhile in Oregon", body:'Stuff is going down', source_id: s3.id, image_url: "/assets/lock-svgrepo-com.svg")
  a10 = Article.create!(title: "Boneappletea!",body:"A chef's journey to all the scrumptuous foods", source_id: s4.id, image_url: "/assets/star-svgrepo-com.svg")
  a11 = Article.create!(title: "Celtics defeated the Golden State Warriors",body:"On March the third, 2019, the 9=39-26 Boston Celtics defeat the Golden State Warriors 44-20), 128-95. True story.", source_id: s1.id, image_url: "/assets/user-svgrepo-com.svg")
  a12 = Article.create!(title: "Analysis", body:"A closer look: the extensive effort to bury Donald Trump's Grades", source_id: s2.id, image_url: "/assets/youtube-svgrepo-com.svg")
  a13 = Article.create!(title: "Meanwhile in Oregon", body:'Stuff is going down', source_id: s4.id, image_url: "/assets/flask-svgrepo-com.svg")
  a14 = Article.create!(title: "Boneappletea!",body:"A chef's journey to all the scrumptuous foods",source_id: s1.id, image_url: "/assets/skier-svgrepo-com.svg")
  a15 = Article.create!(title: "Celtics defeated the Golden State Warriors",body:"On March the third, 2019, the 9=39-26 Boston Celtics defeat the Golden State Warriors 44-20), 128-95. True story.", source_id: s2.id, image_url: "/assets/shooter-svgrepo-com.svg")
  a16 = Article.create!(title: "Analysis", body:"A closer look: the extensive effort to bury Donald Trump's Grades", source_id: s7.id, image_url: "/assets/twitter-svgrepo-com.svg")
  a17 = Article.create!(title: "Meanwhile in Oregon", body:'Stuff is going down', source_id: s8.id, image_url: "/assets/rss-svgrepo-com.svg")
  a18 = Article.create!(title: "Boneappletea!",body:"A chef's journey to all the scrumptuous foods",source_id: s8.id, image_url: "/assets/newspaper-svgrepo-com.svg")
  a19 = Article.create!(title: "Celtics defeated the Golden State Warriors",body:"On March the third, 2019, the 9=39-26 Boston Celtics defeat the Golden State Warriors 44-20), 128-95. True story.", source_id: s7.id, image_url: "/assets/newspaper-svgrepo-com.svg")
  a20 = Article.create!(title: "Analysis", body:"A closer look: the extensive effort to bury Donald Trump's Grades", source_id: s8.id, image_url: "/assets/twitter-svgrepo-com.svg")
end