import { defineConfig } from "vite";
import markdownItImsize from "markdown-it-imsize";
import markdownItKatex from "@iktakahiro/markdown-it-katex";
import markdownToResume from "./core/vite-plugin";
// import markdownItMultimdTable from "markdown-it-multimd-table";

export default defineConfig({
  base: "./",
  plugins: [
    markdownToResume({
      markdown(md) {
        md.use(markdownItImsize);
        md.use(markdownItKatex);
        // md.use(markdownItMultimdTable,{
        //   multiline:  false,
        //   rowspan:    false,
        //   headerless: false,
        //   multibody:  true,
        //   aotolabel:  true,
        // });
      },
      pdfName: "个人简历",
      pdfMargin: 0,
      webTitle: "个人简历 - markdown-resume-self",
    }),
  ],
  build: {
    assetsDir: "./",
  },
});
