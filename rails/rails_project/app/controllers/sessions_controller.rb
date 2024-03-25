class SessionsController < ApplicationController
    def create
        @user=User.find_by(name: session_params[:name], email: session_params[:email])
        p session_params

        if @user && @user.authenticate(session_params[:password])
            log_in(@user)
            render_success session_params: session_params
            puts current_user
        else
            render_error
        end
    end
    
    def destroy
        log_out
        render_success session_params: params[:seession]
    end

    def session_params
        params.require(:login_data).permit(:name, :email, :password)
    end
end
