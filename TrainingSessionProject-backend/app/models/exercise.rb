class Exercise < ApplicationRecord
    #has_many :users, through: :workouts
    belongs_to :workout
end
