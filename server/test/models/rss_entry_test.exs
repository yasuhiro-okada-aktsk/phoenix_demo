defmodule PhoenixDemoApp.RssEntryTest do
  use PhoenixDemoApp.ModelCase

  alias PhoenixDemoApp.RssEntry

  @valid_attrs %{}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = RssEntry.changeset(%RssEntry{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = RssEntry.changeset(%RssEntry{}, @invalid_attrs)
    refute changeset.valid?
  end
end
