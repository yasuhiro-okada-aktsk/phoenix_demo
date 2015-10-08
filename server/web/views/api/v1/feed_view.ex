defmodule PhoenixDemoApp.Api.V1.FeedView do
  use PhoenixDemoApp.Web, :view

  alias PhoenixDemoApp.Api.V1.FeedView

  def render("index.json", %{feeds: feeds}) do
    render_many(feeds, FeedView, "feed.json")
  end

  def render("show.json", %{feed: feed}) do
    render_one(feed, FeedView, "feed.json")
  end

  def render("feed.json", %{feed: feed}) do
    %{id: feed.title}
  end
end
