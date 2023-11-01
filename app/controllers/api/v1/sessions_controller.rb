class Api::V1::SessionsController < Devise::SessionsController
  def create
    self.resource = warden.authenticate!(auth_options)
    set_flash_message!(:notice, :signed_in)
    sign_in(resource_name, resource)
    # sign_in_and_set_session_cookie(resource)

    yield resource if block_given?

    respond_with resource, location: after_sign_in_path_for(resource)
  end

  private

  def sign_in_params
    params.require(resource_name).permit(:email, :password)
  end

  def sign_in_and_set_session_cookie(user)
    cookies.signed[:user_id] = user.id
    cookies.signed[:session_token] = user.session_token
  end
end
