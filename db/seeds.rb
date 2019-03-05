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

  f1 = Feed.create!(feed_title: "Geopolitics", user_id: u1.id)
  f2 = Feed.create!(feed_title: "Football", user_id: u2.id)
  f3 = Feed.create!(feed_title: "Outdoors", user_id: u3.id)
  f4 = Feed.create!(feed_title: "Tech", user_id: u4.id)


end