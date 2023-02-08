FROM  node
RUN  apt-get update
RUN  apt-get install ttf-mscorefonts-installer
RUN  apt-get install fontconfig
RUN  cp -r fonts/ /usr/share/fonts && mkfontscale && mkfontdir && fc-cache -fv
RUN npm install -g pnpm