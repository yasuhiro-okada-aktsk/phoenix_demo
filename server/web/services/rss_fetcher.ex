defmodule PhoenixDemoApp.RssFetcher do
  @moduledoc false

  def fetch(url) do
    case HTTPoison.get(url) do

      {:ok, %HTTPoison.Response{status_code: 200, body: body}} ->
        {:ok, feed, _} = FeederEx.parse(body)
        feed
      {:ok, %HTTPoison.Response{status_code: status}} ->
        IO.puts "error status : " <> to_string(status)
        nil
      {:error, %HTTPoison.Error{reason: reason}} ->
        IO.inspect reason
        nil
    end
  end
end
