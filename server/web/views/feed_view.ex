defmodule PhoenixDemoApp.FeedView do
  use PhoenixDemoApp.Web, :view

  def render("index.json", %{feeds: feeds}) do
    %{data: render_many(feeds, PhoenixDemoApp.FeedView, "feed.json")}
  end

  def render("show.json", %{feed: feed}) do
    %{data: render_one(feed, PhoenixDemoApp.FeedView, "feed.json")}
  end

  def render("feed.json", %{feed: feed}) do
    %{id: feed.id}
  end
end
