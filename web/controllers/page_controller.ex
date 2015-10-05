defmodule PhoenixDemoApp.PageController do
  use PhoenixDemoApp.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
