# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  account_name    :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :account_name, :email, :password_digest, :session_token, presence: true
  validates :account_name, :email, :session_token, uniqueness: true
  validate :password, length: {minimum: 6, allow_nil: true}
  after_initialize :ensure_session_token
  attr_reader: :password

  has_many :tracks

  # to be used when showing a user's comments on their profile page
  has_many :comments

  def self.find_by_credentials(email, password)
    user = User.find(email)
    if user && user.is_password?(password)
      user
    else 
      nil
    end
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end

  def is_password?(pw)
    BCrypt::Password.new(password_digest).is_password?(pw)
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw).to_s
  end

  def ensure_session_token
    self.session_token ||= reset_session_token!
  end
end