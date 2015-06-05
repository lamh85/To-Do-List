class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :title
      t.text :note
      t.datetime :due

      t.timestamps null: false
    end
  end
end
