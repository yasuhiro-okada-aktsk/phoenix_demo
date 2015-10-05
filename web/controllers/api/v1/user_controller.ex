defmodule PhoenixDemoApp.Api.V1.UserController do
  use PhoenixDemoApp.Web, :controller

  alias PhoenixDemoApp.UserAuth

  plug :scrub_params, "user" when action in [:create, :update]

  def index(conn, _params) do
    user_auths = Repo.all(UserAuth)
    render(conn, "index.json", user_auths: user_auths)
  end

  def create(conn, %{"user" => user_auth_params}) do
    changeset = UserAuth.changeset(%UserAuth{}, user_auth_params)

    case Repo.insert(changeset) do
      {:ok, user_auth} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", user_path(conn, :show, user_auth))
        |> render("show.json", user_auth: user_auth)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(PhoenixDemoApp.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    user_auth = Repo.get!(UserAuth, id)
    render(conn, "show.json", user_auth: user_auth)
  end

  def update(conn, %{"id" => id, "user" => user_auth_params}) do
    user_auth = Repo.get!(UserAuth, id)
    changeset = UserAuth.changeset(user_auth, user_auth_params)

    case Repo.update(changeset) do
      {:ok, user_auth} ->
        render(conn, "show.json", user_auth: user_auth)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(PhoenixDemoApp.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    user_auth = Repo.get!(UserAuth, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(user_auth)

    send_resp(conn, :no_content, "")
  end
end
