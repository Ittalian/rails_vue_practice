require_relative "boot"

require "rails"
require "active_model/railtie"
require "active_job/railtie"
require "active_record/railtie"
require "active_storage/engine"
require "action_controller/railtie"
require "action_mailbox/engine"
require "action_text/engine"
require "action_view/railtie"
require "rails/test_unit/railtie"

Bundler.require(*Rails.groups)

module RailsProject
  class Application < Rails::Application
    config.load_defaults 6.1

    # タイムゾーン設定
    config.time_zone = 'Tokyo'
    config.active_record.default_timezone = :local

    # APIモード設定
    config.api_only = true
    config.middleware.use ActionDispatch::Cookies
    config.middleware.use ActionDispatch::Session::CookieStore
    config.middleware.use ActionDispatch::ContentSecurityPolicy::Middleware

    # libディレクトリ読み込み設定
    config.autoload_paths += Dir["#{config.root}/lib"]
    config.autoload_paths += Dir["#{config.root}/lib/**/*"]

    config.action_controller.forgery_protection_origin_check = false
  end
end
