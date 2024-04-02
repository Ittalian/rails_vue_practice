class User < ApplicationRecord
    has_secure_password

    has_many :relationships, class_name: "Relationship", foreign_key: "follower_id", dependent: :destroy
    has_many :reverse_of_relationships, class_name: "Relationship", foreign_key: "followed_id", dependent: :destroy

    def follow(user_id)
        relationships.create(user_id)
    end

    def unfollow(user_id)
        relationships.find_by(user_id).destroy
    end
end
