 name: Deploy to GitHub Pages
       2
       3 on:
       4   push:
       5     branches: [master]
       6
       7 jobs:
       8   build-and-deploy:
       9     runs-on: ubuntu-latest
      10     permissions:
