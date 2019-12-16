# == Schema Information
#
# Table name: tracks
#
#  id          :bigint           not null, primary key
#  private     :boolean          not null
#  title       :string           not null
#  account_id  :integer          not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Track < ApplicationRecord
  belongs_to :author,
    primary_key: :id,
    foreign_key: :account_id,
    class_name: :User

  has_many :comments
end
