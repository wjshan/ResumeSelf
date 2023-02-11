import { defineConfig } from 'vite';
import markdownItImsize from 'markdown-it-imsize';
import markdownItKatex from '@iktakahiro/markdown-it-katex'
import markdownToResume from './core/vite-plugin';

export default defineConfig({
  base: './',
  plugins: [
    markdownToResume({
      markdown(md) {
        md.use(markdownItImsize);
        md.use(markdownItKatex);
      },
      pdfName: '个人简历',
      pdfMargin: 0,
      webTitle: '个人简历 - markdown-resume-self'
    })
  ],
  build: {
    assetsDir: './'
  }
});
