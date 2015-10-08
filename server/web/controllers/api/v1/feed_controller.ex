defmodule PhoenixDemoApp.Api.V1.FeedController do
  use PhoenixDemoApp.Web, :controller

  require Logger

  alias PhoenixDemoApp.RssFeed

  plug :scrub_params, "feed_url" when action in [:create, :update]

  def index(conn, _params) do
    feeds = Repo.all(RssFeed)
    render(conn, "index.json", feeds: feeds)
  end

  def create(conn, %{"feed_url" => feed_url}) do
    feed = PhoenixDemoApp.RssFetcher.fetch(feed_url)
    params =  Map.delete(feed, :__struct__) |> Map.put(:feed_url, feed_url) |> Map.put(:feed_id, feed.id)
    if params.updated do
      params = %{ params | :updated => elem(Timex.DateFormat.parse(params.updated, "{ISO}"), 1) }
    else
      params = Map.delete(params, :updated)
    end
    changeset = RssFeed.create_changeset(%RssFeed{}, params)

    case Repo.insert(changeset) do
      {:ok, rss_feed} ->
        conn
        |> put_status(:created)
        |> render("show.json", feed: rss_feed)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(PhoenixDemoApp.ChangesetView, "error.json", changeset: changeset)
      _ ->
        conn
        |> put_status(500)
        |> json feed
    end
  end

  def show(conn, %{"id" => id}) do
    feed = Repo.get!(Feed, id)
    render(conn, "show.json", feed: feed)
  end

  def update(conn, %{"id" => id, "feed" => feed_params}) do
    feed = Repo.get!(Feed, id)
    changeset = Feed.changeset(feed, feed_params)

    case Repo.update(changeset) do
      {:ok, feed} ->
        render(conn, "show.json", feed: feed)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(PhoenixDemoApp.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    feed = Repo.get!(Feed, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(feed)

    send_resp(conn, :no_content, "")
  end
end
