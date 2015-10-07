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
    plug Guardian.Plug.VerifyHeader
    plug Guardian.Plug.LoadResource
  end

  scope "/", PhoenixDemoApp do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  scope "/api/v1", PhoenixDemoApp.Api.V1 do
    pipe_through [:api]

    post "/login", SessionController, :create, as: :login
    delete "/logout", SessionController, :delete, as: :logout

    resources "/users", UserController
    resources "/feeds", FeedController
  end


  # Other scopes may use custom stacks.
  # scope "/api", PhoenixDemoApp do
  #   pipe_through :api
  # end
end
