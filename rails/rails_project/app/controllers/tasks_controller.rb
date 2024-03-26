class TasksController < ApplicationController

    def index
        @tasks = Task.where(user_id: current_user.id)     
        render_success task_params: @tasks
    end

    def create
        @task = Task.new(
            title: task_params[:title],
            user_id: current_user.id
        )
        if @task.save
            render_success task_param: { title: task_params[:title]}
            puts task_params
        else
            render_error
        end
    end

    def complete
        Task.find_by(title: task_params[:title]).destroy
        p task_params
    end

    def task_params
        params.require(:task).permit(:title, :user_id)
    end
end
