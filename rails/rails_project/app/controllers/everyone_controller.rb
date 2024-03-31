class EveryoneController < ApplicationController
    def index
        @user = User.all
        render_success user_params: @user
    end

    def getUser
        @taskDetails = Task.where(user_id: task_user_params[:user_id])
        render_success task_detail_params: @taskDetails
        # puts @taskDetails
    end

    # def getUser
    #     @user = User.find_by(name: user_params[:name], email: user_params[:email])
    #     render_success user_params: @user
    #     # puts params
    # end

    # def user_params
    #     params.require(:get_user_data).permit(:name, :email)
    # end

    # def task_detail_params
    #     params.require(:task_data).permit(:user_id)
    # end

    def task_user_params
        params.require(:task_user).permit(:user_id)
    end
end
