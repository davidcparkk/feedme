class CreateFeedSourceItems < ActiveRecord::Migration[5.2]
  def change
    create_table :feed_source_items do |t|
      t.integer :feed_id, null: false
      t.integer :source_id, null: false
      t.timestamps
    end
    add_index :feed_source_items, [:feed_id, :source_id], unique: true
  end
end
