defmodule PhoenixDemoApp.RssFeed do
  use PhoenixDemoApp.Web, :model

  require Logger

  schema "rss_feeds" do
    field :feed_url, :string
    field :feed_id, :string
    field :title, :string
    field :subtitle, :string
    field :summary, :string
    field :link, :string
    field :author, :string
    field :image, :string
    field :updated, Timex.Ecto.DateTime

    timestamps
  end

  @required_fields ~w(feed_url)
  @optional_fields ~w()

  @doc """
  deprecated
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
  end

  def create_changeset(model, params) do
    model
    |> cast(params, ~w(feed_url title), ~w(feed_id subtitle summary link author image updated))
    |> unique_constraint(:feed_url)
  end
end
