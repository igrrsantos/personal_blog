require 'json'

file_path = 'coverage/coverage.json' # Caminho do arquivo JSON do SimpleCov
project_root = '/home/igor/studyspace/manutencao/personal_blog/' # Caminho absoluto que você quer substituir

if File.exist?(file_path)
  data = JSON.parse(File.read(file_path))
  data['coverage'].transform_keys! { |key| key.sub(project_root, '') }
  File.open(file_path, 'w') { |file| file.write(JSON.pretty_generate(data)) }
end
