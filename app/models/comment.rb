# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  author_id  :integer          not null
#  track_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :track

  def format_datetime
    self.created_at.to_f
  end
end
