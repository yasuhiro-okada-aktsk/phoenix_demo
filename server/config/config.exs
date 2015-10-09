# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# Configures the endpoint
config :phoenix_demo_app, PhoenixDemoApp.Endpoint,
  url: [host: "localhost"],
  root: Path.dirname(__DIR__),
  secret_key_base: "wPJsDVsA3sZARMP+5A4cTjd9gIjmIBxPevb0RZaQcV7zkTVglQanz6xEicmnfQKx",
  render_errors: [accepts: ~w(html json)],
  pubsub: [name: PhoenixDemoApp.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"

# Configure phoenix generators
config :phoenix, :generators,
  migration: true,
  binary_id: false

config :joken, config_module: Guardian.JWT

config :guardian, Guardian,
  issuer: "PhoenixDemoApp",
  ttl: { 30, :days },
  verify_issuer: true,
  secret_key: "t5-s0EO:Km/k@>VH9)buk+<IM&A3qkM1NN6P^xjn`%mFq6i5~-3[1TRI180}6s,",
  serializer: PhoenixDemoApp.GuardianSerializer

config :dogma,
  rule_set: Dogma.RuleSet.All,

  exclude: [
    ~r(\Alib/vendor/),
  ],

  additional_config: [
    [LineLength: [max_length: 120]],
  ]
