class TasksController < ApplicationController

    def index
        @tasks = Task.all            
        render_success task_params: @tasks
    end

    def create
        @task = Task.new(task_params)
        if @task.save
            render_success task_param: { title: task_params[:title]}
            puts task_params
        else
            render_error
        end
    end

    def task_params
        params.require(:task).permit(:title)
    end
end
