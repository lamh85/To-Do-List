class AddDueSecondsToTasks < ActiveRecord::Migration
  def change
    add_column :tasks, :due_seconds, :integer
  end
end
