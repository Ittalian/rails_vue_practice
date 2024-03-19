class UserController < ApplicationController
    # before_action :set_user, only: [:show, :edit, :update, :destroy ]
    
    # def index
    #     @users = User.all
    # end
    
    # def show
    # end
    
    # def new
    #     @user = User.new
    # end
    
    # def edit
    # end
    
    # def create
    #     @user = User.new(user_params)
    #         if @user.save
    #             log_in @user
    #             render_success user_params: user_params
    #         else
    #             render :new, status: :unprocessable_entity
    #             render_success user_params: user_params
    #         end
    # end
    
    # def update
    #         if @user.update(user_params)

    #         else
    #             render :edit, status: :unprocessable_entity
    #         end
    # end
    
    # def destroy
    #     @user.destroy
    #     # redirect_to users_url, notice: "ユーザーアカウントを削除しました。", status: :see_other
    # end
    
    # private
    #     def set_user
    #     @user = User.find(params[:id])
    #     end
    
    #     def user_params
    #     params.require(:user).permit(:name, :email, :password, :password_confirmation)
    #     end
    def new
        @user = User.new
    end
    # actionを追加する
    def create
        @user = User.new(user_params)
        if @user.save
            # redirect_to root_path, notice: "アカウントを作成しました。"
            # puts user_params
            render_success user_param: { name: user_params[:name],  email: user_params[:email], password: user_params[:password] } 
        else
            render :new
        end
    end

    def user_params
        params.require(:user_data).permit(:name, :email, :password)
    end
end
