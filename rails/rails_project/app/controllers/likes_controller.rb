class LikesController < ApplicationController
    skip_before_action :verify_authenticity_token
    def create
        Like.create(user_id: current_user.id, task_id: like_params[:task_id])
        render_success like_params: like_params
    end

    def destroy
        Like.find_by(user_id: current_user.id, task_id: like_params[:task_id]).destroy
        render_success like_params: like_params
    end

    def countLike
        likes = Like.where(task_id: like_params[:task_id])
        render_success like_params: likes.count
    end
    
    def isLike
        render_success like_params: Like.exists?(user_id: current_user.id, task_id: like_params[:task_id])
    end

    def myLike
    index = 0
        @likes = Like.where(user_id: current_user.id)
        @likeTasks = []

        @likes.find_each do |like|
            if Task.ids.include?(like.task_id)
                @likeTasks[index] = Task.find(like.task_id)
            index += 1
            end
        end

        render_success like_params: @likeTasks
    end

    def like_params
        params.require(:like).permit(:task_id)
    end
end
