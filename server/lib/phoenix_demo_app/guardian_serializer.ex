defmodule PhoenixDemoApp.GuardianSerializer do
  @behaviour Guardian.Serializer

  alias PhoenixDemoApp.Repo
  alias PhoenixDemoApp.UserAuth

  def for_token(user = %UserAuth{}), do: { :ok, "UserAuth:#{user.id}" }
  def for_token(_), do: { :error, "Unknown resource type" }

  def from_token("UserAuth:" <> id), do: { :ok, Repo.get(UserAuth, id) }
  def from_token(_), do: { :error, "Unknown resource type" }
end
