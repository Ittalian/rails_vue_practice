class UserController < ApplicationController
    def new
        @user = User.new
    end
    # actionを追加する
    def create
        @user = User.new(user_params)
        if @user.save
            render_success user_param: { name: user_params[:name],  email: user_params[:email], password: user_params[:password] } 
            puts user_params
        else
            render_error
        end
    end

    def user_params
        params.require(:user_data).permit(:name, :email, :password)
    end
end
