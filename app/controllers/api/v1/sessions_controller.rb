class Api::V1::SessionsController < Devise::SessionsController
  def create
    @resource = warden.authenticate!(auth_options)
    set_flash_message!(:notice, :signed_in)
    sign_in(resource_name, @resource)

    yield @resource if block_given?

    render json: @resource,
           status: :ok
  end

  private

  def sign_in_params
    params.require(resource_name).permit(:email, :password)
  end
end
