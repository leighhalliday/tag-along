class CreateCheckins < ActiveRecord::Migration[5.1]
  def change
    create_table :checkins do |t|
      t.integer :trip_id, null: false
      t.decimal :lat, null: false, precision: 10, scale: 6
      t.decimal :lon, null: false, precision: 10, scale: 6
      t.datetime :captured_at, null: false

      t.timestamps
    end

    add_index :checkins, :trip_id
  end
end
