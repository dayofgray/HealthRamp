class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :id
end
