class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string :body, null: false, default: ""
      t.string :title, null: false, default: ""
      t.integer :source_id, null: false
      t.string :image_url
      t.timestamps
    end
    add_index :articles, :source_id
  end
end
