class RelationshipsController < ApplicationController
  def create
    current_user.follow(followed_id: followed_params[:user_id])
    render_success followed_params: followed_params
  end

  def destroy
    current_user.unfollow(followed_id: followed_params[:user_id])
    render_success followed_params: followed_params
  end

  def isFollow
    render_success followed_params: Relationship.exists?(follower_id: current_user.id, followed_id: followed_params[:user_id])
  end

  def followed_params
    params.require(:relationship).permit(:user_id)
  end
end
