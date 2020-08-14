class User < ApplicationRecord

    has_secure_password

    validates :email, :name, presence: true
    validates :email, uniqueness: true

    def serialize_user
        {
            name: name,
            email: email,
            id: id
          }
    end

end