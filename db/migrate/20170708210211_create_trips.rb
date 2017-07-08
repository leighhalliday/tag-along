class CreateTrips < ActiveRecord::Migration[5.1]
  def change
    create_table :trips do |t|
      t.string :viewer_uuid, null: false
      t.string :owner_uuid, null: false
      t.string :name, null: false

      t.timestamps
    end

    add_index :trips, :viewer_uuid
    add_index :trips, :owner_uuid
  end
end
