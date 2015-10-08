defmodule PhoenixDemoApp.Api.V1.EntryView do
  use PhoenixDemoApp.Web, :view

  def render("entry.json", %{entry: entry}) do
    %{id: entry.id,
      title: entry.title,
      subtitle: entry.subtitle,
      summary: entry.summary,
      link: entry.link,
      author: entry.author,
      image: entry.image
      }
  end
end