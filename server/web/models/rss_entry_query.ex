defmodule RssEntryQuery do
  import Ecto.Query
  alias PhoenixDemoApp.RssEntry

  def by_link(link) do
    from e in RssEntry, where: e.link == ^link
  end
end
