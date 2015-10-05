defmodule PhoenixDemoApp.Router do
  use PhoenixDemoApp.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", PhoenixDemoApp do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  scope "/api/v1", PhoenixDemoApp.Api.V1 do
    pipe_through [:api]

    resources "/users", UserController
  end


  # Other scopes may use custom stacks.
  # scope "/api", PhoenixDemoApp do
  #   pipe_through :api
  # end
end
