class User < ApplicationRecord
	validates :username, :password_digest, :session_token, presence: true
	validates :username, :session_token, uniqueness: true
	validates :password, length: { minimum: 6, allow_nil: true }

	attr_reader :password

	before_validation :ensure_session_token

	has_many :feeds,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Feed

	def self.generate_session_token
		SecureRandom::urlsafe_base64
	end

	def self.find_by_credentials(username,password)
		user = User.find_by(username: username)
		if user && user.is_password?(password)
			return user
		else
			nil
		end
	end

	def password=(password)
		@password=password
		self.password_digest = BCrypt::Password.create(password)
	end

	def is_password?(password)
		BCrypt::Password.new(self.password_digest).is_password?(password)
	end
	
	def reset_session_token!
		self.session_token = User.generate_session_token
		self.save!
		self.session_token
	end

	private
	def ensure_session_token
		self.session_token ||= User.generate_session_token
	end
end
