# adjust_simplecov_paths.rb
require 'json'
require 'pathname'

coverage_path = 'coverage/coverage.json'
coverage_data = JSON.parse(File.read(coverage_path))

prefix = '/github/workspace/' # Substitua 'prefix/' pelo prefixo desejado

coverage_data["coverage"].transform_keys! do |key|
  # Transforma o caminho absoluto em relativo e adiciona o prefixo
  prefixed_relative_path = Pathname.new(key).relative_path_from(Pathname.new(Dir.pwd)).to_s
  File.join(prefix, prefixed_relative_path)
end

File.write(coverage_path, coverage_data.to_json)
