json.array! @tasks do |task|
  json.(task, :id, :title, :note, :due, :due_seconds)
end