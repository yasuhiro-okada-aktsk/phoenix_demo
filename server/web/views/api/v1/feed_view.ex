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
    %{feed_url: feed.feed_url,
      feed_id: feed.feed_id,
      title: feed.title,
      subtitle: feed.subtitle,
      summary: feed.summary,
      link: feed.link,
      image: feed.image
      }
  end
end
