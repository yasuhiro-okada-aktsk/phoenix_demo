defmodule PhoenixDemoApp.UserAuthTest do
  use PhoenixDemoApp.ModelCase

  alias PhoenixDemoApp.UserAuth

  @valid_attrs %{email: "some content", password: "some content", name: "some content"}
  @invalid_attrs %{}

  test "create_changeset with valid attributes" do
    changeset = UserAuth.create_changeset(%UserAuth{}, @valid_attrs)
    assert changeset.valid?
  end

  test "create_changeset with invalid attributes" do
    changeset = UserAuth.create_changeset(%UserAuth{}, @invalid_attrs)
    refute changeset.valid?
  end
end
