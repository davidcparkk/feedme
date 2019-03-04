class AddEmailToSources < ActiveRecord::Migration[5.2]
  def change
    add_column :sources, :feed_id, :integer
    add_column :sources, :null, :string
    add_column :sources, :false, :string
  end
end
