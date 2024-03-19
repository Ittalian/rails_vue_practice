class SessionsController < ApplicationController
    # def new
    # end

    # def create
    #     user=User.find_by(email: session_params[:email])

    #     if user && user.authenticate(session_params[:password])
    #         session[:user_id]=user.id
    #         # redirect_to root_path, notice: 'ログインしました'
    #         render_success session_params: session_params
    #     else
    #         render :new
    #         render_success session_params: session_params
    #     end

    # end

    # def destroy
    #     reset_session
    #     # redirect_to root_path, notice: 'ログアウトしました'
    # end
    def new

    end
    
    def create
        user = User.find_by(email: params[:session][:email].downcase)
        # bcrypt の authenticateメソッドでパスワードの照合を行なう
        if user && user.authenticate(params[:session][:password])
            log_in(user)
            render_success session_params: params[:session]
            redirect_to user
        else
            # flash.now[:error] = "ログインに失敗しました"
            render "new", status: :unprocessable_entity
            render_success session_params: params[:session]
        end
    end
    
    def destroy
        log_out
        render_success session_params: params[:seession]
    #   redirect_to root_path, status: :see_other
    end
end
