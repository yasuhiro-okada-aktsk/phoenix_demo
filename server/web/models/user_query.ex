defmodule PhoenixDemoApp.UserQuery do
  import Ecto.Query
  alias PhoenixDemoApp.UserAuth

  def by_email(email) do
    from u in UserAuth, where: u.email == ^email
  end
end
