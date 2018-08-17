#File.open("~/code/javascript/inputfilework.txt", "r") do |f|
#  f.each_line do |line|
#    puts line
#  end
#end

puts Dir.pwd
File.open("~/code/javascript/inputfilework.txt", "r").each_line do |line|
  # name: "Angela"    job: "Writer"    ...
  data = line.split(/\t/)
  name, job = data.map{|d| d.split(": ")[1] }.flatten
end

Dir.chdir(File.dirname("filework.txt"))
