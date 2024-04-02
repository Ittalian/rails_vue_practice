class EveryoneController < ApplicationController
    def index
        @users = User.where.not(id: current_user.id)
        render_success user_params: @users
    end

    def getUser
        @taskDetails = Task.where(user_id: task_user_params[:user_id])
        render_success task_detail_params: @taskDetails
    end

    def task_user_params
        params.require(:task_user).permit(:user_id)
    end
end
