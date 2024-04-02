class CreateRelationships < ActiveRecord::Migration[6.1]
  def change
    create_table :relationships do |t|
      # 誰がフォローしたか
      t.integer :follower_id
      # 誰をフォローしたか
      t.integer :followed_id

      t.timestamps
    end
  end
end
