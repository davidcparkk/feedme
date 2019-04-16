class CreateFeeds < ActiveRecord::Migration[5.2]
  def change
    create_table :feeds do |t|
      t.string :feed_title, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
  end
end
