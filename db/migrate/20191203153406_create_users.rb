class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :account_name, index: [unique: true]
      t.string :email, index: [unique: true]
      t.string :password_digest
      t.string :session_token, index: [unique: true]

      t.timestamps
    end
  end
end
