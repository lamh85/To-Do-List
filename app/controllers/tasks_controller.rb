class TasksController < ApplicationController

  def index
    @tasks = Task.all
    respond_to do |format|
      format.html
      format.json
    end
  end

  def new
    @task = Task.new
  end

  def create
    @task = Task.new(task_params)
    @task.due_seconds = @task.due.to_i
    # to_i
    if @task.save
      redirect_to tasks_path
    end
  end

  private

  def task_params
    params.require(:task).permit(:title, :note, :due, :due_seconds)
  end
end
