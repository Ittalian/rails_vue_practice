class CreateLikes < ActiveRecord::Migration[6.1]
  def change
    create_table :likes do |t|
      # 誰のタスクか
      t.integer :user_id
      # どのタスクか
      t.integer :task_id

      t.timestamps
    end
  end
end
