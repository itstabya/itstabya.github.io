module Jekyll
  class ImgPreprocessGenerator < Generator
    priority :highest # Run as early as possible in the build process
    def generate(site)
      puts "Running image preprocessing script from generator..."
      system("bash bin/img_preprocess.sh")
    end
  end
end 