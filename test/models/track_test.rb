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

require 'test_helper'

class TrackTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
