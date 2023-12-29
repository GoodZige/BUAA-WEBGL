// vite.config.ts
import path from "node:path";
import { defineConfig } from "file:///D:/projects/webgl/%E5%8C%97%E8%88%AA%E5%85%A8%E6%81%AF%E8%B7%AF%E5%8F%A3/%E4%BB%A3%E7%A0%81/BUAA-WEBGL/node_modules/.pnpm/vite@4.4.3_@types+node@18.16.19_less@4.2.0_sass@1.69.5/node_modules/vite/dist/node/index.js";
import Vue from "file:///D:/projects/webgl/%E5%8C%97%E8%88%AA%E5%85%A8%E6%81%AF%E8%B7%AF%E5%8F%A3/%E4%BB%A3%E7%A0%81/BUAA-WEBGL/node_modules/.pnpm/@vitejs+plugin-vue@4.2.3_vite@4.4.3_vue@3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Pages from "file:///D:/projects/webgl/%E5%8C%97%E8%88%AA%E5%85%A8%E6%81%AF%E8%B7%AF%E5%8F%A3/%E4%BB%A3%E7%A0%81/BUAA-WEBGL/node_modules/.pnpm/vite-plugin-pages@0.31.0_vite@4.4.3/node_modules/vite-plugin-pages/dist/index.mjs";
import generateSitemap from "file:///D:/projects/webgl/%E5%8C%97%E8%88%AA%E5%85%A8%E6%81%AF%E8%B7%AF%E5%8F%A3/%E4%BB%A3%E7%A0%81/BUAA-WEBGL/node_modules/.pnpm/vite-ssg-sitemap@0.5.1/node_modules/vite-ssg-sitemap/dist/index.js";
import Layouts from "file:///D:/projects/webgl/%E5%8C%97%E8%88%AA%E5%85%A8%E6%81%AF%E8%B7%AF%E5%8F%A3/%E4%BB%A3%E7%A0%81/BUAA-WEBGL/node_modules/.pnpm/vite-plugin-vue-layouts@0.8.0_vite@4.4.3_vue-router@4.2.4_vue@3.3.4/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import Components from "file:///D:/projects/webgl/%E5%8C%97%E8%88%AA%E5%85%A8%E6%81%AF%E8%B7%AF%E5%8F%A3/%E4%BB%A3%E7%A0%81/BUAA-WEBGL/node_modules/.pnpm/unplugin-vue-components@0.25.1_rollup@2.79.1_vue@3.3.4/node_modules/unplugin-vue-components/dist/vite.mjs";
import { ElementPlusResolver } from "file:///D:/projects/webgl/%E5%8C%97%E8%88%AA%E5%85%A8%E6%81%AF%E8%B7%AF%E5%8F%A3/%E4%BB%A3%E7%A0%81/BUAA-WEBGL/node_modules/.pnpm/unplugin-vue-components@0.25.1_rollup@2.79.1_vue@3.3.4/node_modules/unplugin-vue-components/dist/resolvers.mjs";
import Icons from "file:///D:/projects/webgl/%E5%8C%97%E8%88%AA%E5%85%A8%E6%81%AF%E8%B7%AF%E5%8F%A3/%E4%BB%A3%E7%A0%81/BUAA-WEBGL/node_modules/.pnpm/registry.npmmirror.com+unplugin-icons@0.16.5/node_modules/unplugin-icons/dist/vite.mjs";
import IconsResolver from "file:///D:/projects/webgl/%E5%8C%97%E8%88%AA%E5%85%A8%E6%81%AF%E8%B7%AF%E5%8F%A3/%E4%BB%A3%E7%A0%81/BUAA-WEBGL/node_modules/.pnpm/registry.npmmirror.com+unplugin-icons@0.16.5/node_modules/unplugin-icons/dist/resolver.mjs";
import AutoImport from "file:///D:/projects/webgl/%E5%8C%97%E8%88%AA%E5%85%A8%E6%81%AF%E8%B7%AF%E5%8F%A3/%E4%BB%A3%E7%A0%81/BUAA-WEBGL/node_modules/.pnpm/unplugin-auto-import@0.16.6_@vueuse+core@10.2.1_rollup@2.79.1/node_modules/unplugin-auto-import/dist/vite.js";
import Markdown from "file:///D:/projects/webgl/%E5%8C%97%E8%88%AA%E5%85%A8%E6%81%AF%E8%B7%AF%E5%8F%A3/%E4%BB%A3%E7%A0%81/BUAA-WEBGL/node_modules/.pnpm/vite-plugin-vue-markdown@0.23.5_rollup@2.79.1_vite@4.4.3/node_modules/vite-plugin-vue-markdown/dist/index.mjs";
import { VitePWA } from "file:///D:/projects/webgl/%E5%8C%97%E8%88%AA%E5%85%A8%E6%81%AF%E8%B7%AF%E5%8F%A3/%E4%BB%A3%E7%A0%81/BUAA-WEBGL/node_modules/.pnpm/vite-plugin-pwa@0.16.4_vite@4.4.3_workbox-build@7.0.0_workbox-window@7.0.0/node_modules/vite-plugin-pwa/dist/index.js";
import VueI18n from "file:///D:/projects/webgl/%E5%8C%97%E8%88%AA%E5%85%A8%E6%81%AF%E8%B7%AF%E5%8F%A3/%E4%BB%A3%E7%A0%81/BUAA-WEBGL/node_modules/.pnpm/@intlify+unplugin-vue-i18n@0.12.2_rollup@2.79.1_vue-i18n@9.2.2/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import VueDevTools from "file:///D:/projects/webgl/%E5%8C%97%E8%88%AA%E5%85%A8%E6%81%AF%E8%B7%AF%E5%8F%A3/%E4%BB%A3%E7%A0%81/BUAA-WEBGL/node_modules/.pnpm/vite-plugin-vue-devtools@0.5.1_@types+node@18.16.19_axios@1.6.3_nprogress@0.2.0_pug@3.0.2_rol_qm3ugwg5ft4r5glgc4tt4oacni/node_modules/vite-plugin-vue-devtools/dist/index.mjs";
import LinkAttributes from "file:///D:/projects/webgl/%E5%8C%97%E8%88%AA%E5%85%A8%E6%81%AF%E8%B7%AF%E5%8F%A3/%E4%BB%A3%E7%A0%81/BUAA-WEBGL/node_modules/.pnpm/markdown-it-link-attributes@4.0.1/node_modules/markdown-it-link-attributes/index.js";
import Unocss from "file:///D:/projects/webgl/%E5%8C%97%E8%88%AA%E5%85%A8%E6%81%AF%E8%B7%AF%E5%8F%A3/%E4%BB%A3%E7%A0%81/BUAA-WEBGL/node_modules/.pnpm/unocss@0.53.5_postcss@8.4.25_rollup@2.79.1_vite@4.4.3/node_modules/unocss/dist/vite.mjs";
import Shiki from "file:///D:/projects/webgl/%E5%8C%97%E8%88%AA%E5%85%A8%E6%81%AF%E8%B7%AF%E5%8F%A3/%E4%BB%A3%E7%A0%81/BUAA-WEBGL/node_modules/.pnpm/markdown-it-shiki@0.9.0/node_modules/markdown-it-shiki/dist/index.mjs";
import VueMacros from "file:///D:/projects/webgl/%E5%8C%97%E8%88%AA%E5%85%A8%E6%81%AF%E8%B7%AF%E5%8F%A3/%E4%BB%A3%E7%A0%81/BUAA-WEBGL/node_modules/.pnpm/unplugin-vue-macros@2.3.6_@vueuse+core@10.2.1_rollup@2.79.1_vite@4.4.3_vue@3.3.4/node_modules/unplugin-vue-macros/dist/vite.mjs";
import WebfontDownload from "file:///D:/projects/webgl/%E5%8C%97%E8%88%AA%E5%85%A8%E6%81%AF%E8%B7%AF%E5%8F%A3/%E4%BB%A3%E7%A0%81/BUAA-WEBGL/node_modules/.pnpm/vite-plugin-webfont-dl@3.7.6_vite@4.4.3/node_modules/vite-plugin-webfont-dl/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\projects\\webgl\\\u5317\u822A\u5168\u606F\u8DEF\u53E3\\\u4EE3\u7801\\BUAA-WEBGL";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__vite_injected_original_dirname, "src")}/`
    }
  },
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.md$/]
        })
      }
    }),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ["vue", "md"]
    }),
    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({
          prefix: "Icon"
        })
      ],
      imports: [
        "vue",
        "vue-router",
        "vue-i18n",
        "@vueuse/head",
        "@vueuse/core",
        { "axios": [
          // default imports
          ["default", "axios"]
          // import { default as axios } from 'axios',
        ] },
        // {'echarts': [
        //   // default imports
        //   ['default', 'echarts'], // import { default as axios } from 'axios',
        // ]},
        "echarts"
      ],
      dts: "src/typings/auto-imports.d.ts",
      dirs: [
        "src/composables",
        "src/stores"
      ],
      vueTemplate: true,
      eslintrc: {
        enabled: true,
        // Default `false`
        filepath: "./.eslintrc-auto-import.json",
        // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true
        // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      }
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      resolvers: [
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ["ep"]
        }),
        ElementPlusResolver()
      ],
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/typings/components.d.ts"
    }),
    Icons({
      autoInstall: true
    }),
    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    Unocss(),
    // https://github.com/antfu/vite-plugin-vue-markdown
    // Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
    Markdown({
      wrapperClasses: "prose prose-sm m-auto text-left",
      headEnabled: true,
      markdownItSetup(md) {
        md.use(Shiki, {
          theme: {
            light: "vitesse-light",
            dark: "vitesse-dark"
          }
        });
        md.use(LinkAttributes, {
          matcher: (link) => /^https?:\/\//.test(link),
          attrs: {
            target: "_blank",
            rel: "noopener"
          }
        });
      }
    }),
    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "safari-pinned-tab.svg"],
      manifest: {
        name: "webgl-vitesse-learn",
        short_name: "webgl-vitesse-learn",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    }),
    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__vite_injected_original_dirname, "locales/**")]
    }),
    // https://github.com/feat-agency/vite-plugin-webfont-dl
    WebfontDownload([
      "https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap",
      "https://fonts.googleapis.com/css2?family=Fira+Code&display=swap",
      "https://fonts.googleapis.com/css2?family=Raleway&display=swap"
    ]),
    // https://github.com/webfansplz/vite-plugin-vue-devtools
    VueDevTools()
  ],
  // https://github.com/vitest-dev/vitest
  test: {
    include: ["test/**/*.test.ts"],
    environment: "jsdom",
    deps: {
      inline: ["@vue", "@vueuse", "vue-demi"]
    }
  },
  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: "async",
    formatting: "minify",
    crittersOptions: {
      reduceInlineStyles: false
    },
    onFinished() {
      generateSitemap();
    }
  },
  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ["workbox-window", /vue-i18n/]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0c1xcXFx3ZWJnbFxcXFxcdTUzMTdcdTgyMkFcdTUxNjhcdTYwNkZcdThERUZcdTUzRTNcXFxcXHU0RUUzXHU3ODAxXFxcXEJVQUEtV0VCR0xcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHByb2plY3RzXFxcXHdlYmdsXFxcXFx1NTMxN1x1ODIyQVx1NTE2OFx1NjA2Rlx1OERFRlx1NTNFM1xcXFxcdTRFRTNcdTc4MDFcXFxcQlVBQS1XRUJHTFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvamVjdHMvd2ViZ2wvJUU1JThDJTk3JUU4JTg4JUFBJUU1JTg1JUE4JUU2JTgxJUFGJUU4JUI3JUFGJUU1JThGJUEzLyVFNCVCQiVBMyVFNyVBMCU4MS9CVUFBLVdFQkdML3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBWdWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IFBhZ2VzIGZyb20gJ3ZpdGUtcGx1Z2luLXBhZ2VzJ1xuaW1wb3J0IGdlbmVyYXRlU2l0ZW1hcCBmcm9tICd2aXRlLXNzZy1zaXRlbWFwJ1xuaW1wb3J0IExheW91dHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWxheW91dHMnXG5pbXBvcnQgQ29tcG9uZW50cyBmcm9tICd1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlJ1xuaW1wb3J0IHsgRWxlbWVudFBsdXNSZXNvbHZlciB9IGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3Jlc29sdmVycydcbmltcG9ydCBJY29ucyBmcm9tICd1bnBsdWdpbi1pY29ucy92aXRlJ1xuaW1wb3J0IEljb25zUmVzb2x2ZXIgZnJvbSAndW5wbHVnaW4taWNvbnMvcmVzb2x2ZXInXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1tYXJrZG93bidcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnXG5pbXBvcnQgVnVlSTE4biBmcm9tICdAaW50bGlmeS91bnBsdWdpbi12dWUtaTE4bi92aXRlJ1xuaW1wb3J0IFZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcbmltcG9ydCBMaW5rQXR0cmlidXRlcyBmcm9tICdtYXJrZG93bi1pdC1saW5rLWF0dHJpYnV0ZXMnXG5pbXBvcnQgVW5vY3NzIGZyb20gJ3Vub2Nzcy92aXRlJ1xuaW1wb3J0IFNoaWtpIGZyb20gJ21hcmtkb3duLWl0LXNoaWtpJ1xuaW1wb3J0IFZ1ZU1hY3JvcyBmcm9tICd1bnBsdWdpbi12dWUtbWFjcm9zL3ZpdGUnXG5pbXBvcnQgV2ViZm9udERvd25sb2FkIGZyb20gJ3ZpdGUtcGx1Z2luLXdlYmZvbnQtZGwnXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHJlc29sdmU6IHtcbiAgICBhbGlhczoge1xuICAgICAgJ34vJzogYCR7cGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpfS9gLFxuICAgIH0sXG4gIH0sXG5cbiAgcGx1Z2luczogW1xuICAgIFZ1ZU1hY3Jvcyh7XG4gICAgICBwbHVnaW5zOiB7XG4gICAgICAgIHZ1ZTogVnVlKHtcbiAgICAgICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwubWQkL10sXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9oYW5ub2VydS92aXRlLXBsdWdpbi1wYWdlc1xuICAgIFBhZ2VzKHtcbiAgICAgIGV4dGVuc2lvbnM6IFsndnVlJywgJ21kJ10sXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vSm9obkNhbXBpb25Kci92aXRlLXBsdWdpbi12dWUtbGF5b3V0c1xuICAgIExheW91dHMoKSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi1hdXRvLWltcG9ydFxuICAgIEF1dG9JbXBvcnQoe1xuICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgIEVsZW1lbnRQbHVzUmVzb2x2ZXIoKSxcbiAgICAgICAgLy8gXHU4MUVBXHU1MkE4XHU1QkZDXHU1MTY1XHU1NkZFXHU2ODA3XHU3RUM0XHU0RUY2XG4gICAgICAgIEljb25zUmVzb2x2ZXIoe1xuICAgICAgICAgIHByZWZpeDogJ0ljb24nLFxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgJ3Z1ZScsXG4gICAgICAgICd2dWUtcm91dGVyJyxcbiAgICAgICAgJ3Z1ZS1pMThuJyxcbiAgICAgICAgJ0B2dWV1c2UvaGVhZCcsXG4gICAgICAgICdAdnVldXNlL2NvcmUnLFxuICAgICAgICB7J2F4aW9zJzogW1xuICAgICAgICAgIC8vIGRlZmF1bHQgaW1wb3J0c1xuICAgICAgICAgIFsnZGVmYXVsdCcsICdheGlvcyddLCAvLyBpbXBvcnQgeyBkZWZhdWx0IGFzIGF4aW9zIH0gZnJvbSAnYXhpb3MnLFxuICAgICAgICBdfSxcbiAgICAgICAgLy8geydlY2hhcnRzJzogW1xuICAgICAgICAvLyAgIC8vIGRlZmF1bHQgaW1wb3J0c1xuICAgICAgICAvLyAgIFsnZGVmYXVsdCcsICdlY2hhcnRzJ10sIC8vIGltcG9ydCB7IGRlZmF1bHQgYXMgYXhpb3MgfSBmcm9tICdheGlvcycsXG4gICAgICAgIC8vIF19LFxuICAgICAgICAnZWNoYXJ0cydcbiAgICAgIF0sXG4gICAgICBkdHM6ICdzcmMvdHlwaW5ncy9hdXRvLWltcG9ydHMuZC50cycsXG4gICAgICBkaXJzOiBbXG4gICAgICAgICdzcmMvY29tcG9zYWJsZXMnLFxuICAgICAgICAnc3JjL3N0b3JlcycsXG4gICAgICBdLFxuICAgICAgdnVlVGVtcGxhdGU6IHRydWUsXG4gICAgICBlc2xpbnRyYzoge1xuICAgICAgICBlbmFibGVkOiB0cnVlLCAvLyBEZWZhdWx0IGBmYWxzZWBcbiAgICAgICAgZmlsZXBhdGg6ICcuLy5lc2xpbnRyYy1hdXRvLWltcG9ydC5qc29uJywgLy8gRGVmYXVsdCBgLi8uZXNsaW50cmMtYXV0by1pbXBvcnQuanNvbmBcbiAgICAgICAgZ2xvYmFsc1Byb3BWYWx1ZTogdHJ1ZSwgLy8gRGVmYXVsdCBgdHJ1ZWAsICh0cnVlIHwgZmFsc2UgfCAncmVhZG9ubHknIHwgJ3JlYWRhYmxlJyB8ICd3cml0YWJsZScgfCAnd3JpdGVhYmxlJylcbiAgICAgIH1cbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS91bnBsdWdpbi12dWUtY29tcG9uZW50c1xuICAgIENvbXBvbmVudHMoe1xuICAgICAgcmVzb2x2ZXJzOiBbXG4gICAgICAgIC8vIFx1ODFFQVx1NTJBOFx1NkNFOFx1NTE4Q1x1NTZGRVx1NjgwN1x1N0VDNFx1NEVGNlxuICAgICAgICBJY29uc1Jlc29sdmVyKHtcbiAgICAgICAgICBlbmFibGVkQ29sbGVjdGlvbnM6IFsnZXAnXSxcbiAgICAgICAgfSksXG4gICAgICAgIEVsZW1lbnRQbHVzUmVzb2x2ZXIoKSxcbiAgICAgIF0sXG4gICAgICAvLyBhbGxvdyBhdXRvIGxvYWQgbWFya2Rvd24gY29tcG9uZW50cyB1bmRlciBgLi9zcmMvY29tcG9uZW50cy9gXG4gICAgICBleHRlbnNpb25zOiBbJ3Z1ZScsICdtZCddLFxuICAgICAgLy8gYWxsb3cgYXV0byBpbXBvcnQgYW5kIHJlZ2lzdGVyIGNvbXBvbmVudHMgdXNlZCBpbiBtYXJrZG93blxuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS8sIC9cXC5tZCQvXSxcbiAgICAgIGR0czogJ3NyYy90eXBpbmdzL2NvbXBvbmVudHMuZC50cycsXG4gICAgfSksXG4gICAgSWNvbnMoe1xuICAgICAgYXV0b0luc3RhbGw6IHRydWUsXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5vY3NzXG4gICAgLy8gc2VlIHVuby5jb25maWcudHMgZm9yIGNvbmZpZ1xuICAgIFVub2NzcygpLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGUtcGx1Z2luLXZ1ZS1tYXJrZG93blxuICAgIC8vIERvbid0IG5lZWQgdGhpcz8gVHJ5IHZpdGVzc2UtbGl0ZTogaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3ZpdGVzc2UtbGl0ZVxuICAgIE1hcmtkb3duKHtcbiAgICAgIHdyYXBwZXJDbGFzc2VzOiAncHJvc2UgcHJvc2Utc20gbS1hdXRvIHRleHQtbGVmdCcsXG4gICAgICBoZWFkRW5hYmxlZDogdHJ1ZSxcbiAgICAgIG1hcmtkb3duSXRTZXR1cChtZCkge1xuICAgICAgICAvLyBodHRwczovL3ByaXNtanMuY29tL1xuICAgICAgICBtZC51c2UoU2hpa2ksIHtcbiAgICAgICAgICB0aGVtZToge1xuICAgICAgICAgICAgbGlnaHQ6ICd2aXRlc3NlLWxpZ2h0JyxcbiAgICAgICAgICAgIGRhcms6ICd2aXRlc3NlLWRhcmsnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIG1kLnVzZShMaW5rQXR0cmlidXRlcywge1xuICAgICAgICAgIG1hdGNoZXI6IChsaW5rOiBzdHJpbmcpID0+IC9eaHR0cHM/OlxcL1xcLy8udGVzdChsaW5rKSxcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgdGFyZ2V0OiAnX2JsYW5rJyxcbiAgICAgICAgICAgIHJlbDogJ25vb3BlbmVyJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlLXBsdWdpbi1wd2FcbiAgICBWaXRlUFdBKHtcbiAgICAgIHJlZ2lzdGVyVHlwZTogJ2F1dG9VcGRhdGUnLFxuICAgICAgaW5jbHVkZUFzc2V0czogWydmYXZpY29uLnN2ZycsICdzYWZhcmktcGlubmVkLXRhYi5zdmcnXSxcbiAgICAgIG1hbmlmZXN0OiB7XG4gICAgICAgIG5hbWU6ICd3ZWJnbC12aXRlc3NlLWxlYXJuJyxcbiAgICAgICAgc2hvcnRfbmFtZTogJ3dlYmdsLXZpdGVzc2UtbGVhcm4nLFxuICAgICAgICB0aGVtZV9jb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICBpY29uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9wd2EtMTkyeDE5Mi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICcxOTJ4MTkyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3B3YS01MTJ4NTEyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvcHdhLTUxMng1MTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICAgIHB1cnBvc2U6ICdhbnkgbWFza2FibGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ludGxpZnkvYnVuZGxlLXRvb2xzL3RyZWUvbWFpbi9wYWNrYWdlcy91bnBsdWdpbi12dWUtaTE4blxuICAgIFZ1ZUkxOG4oe1xuICAgICAgcnVudGltZU9ubHk6IHRydWUsXG4gICAgICBjb21wb3NpdGlvbk9ubHk6IHRydWUsXG4gICAgICBmdWxsSW5zdGFsbDogdHJ1ZSxcbiAgICAgIGluY2x1ZGU6IFtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnbG9jYWxlcy8qKicpXSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mZWF0LWFnZW5jeS92aXRlLXBsdWdpbi13ZWJmb250LWRsXG4gICAgV2ViZm9udERvd25sb2FkKFtcbiAgICAgICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVByZXNzK1N0YXJ0KzJQJmRpc3BsYXk9c3dhcCcsXG4gICAgICAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1GaXJhK0NvZGUmZGlzcGxheT1zd2FwJyxcbiAgICAgICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJhbGV3YXkmZGlzcGxheT1zd2FwJ1xuICAgIF0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dlYmZhbnNwbHovdml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzXG4gICAgVnVlRGV2VG9vbHMoKSxcbiAgXSxcblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdml0ZXN0LWRldi92aXRlc3RcbiAgdGVzdDoge1xuICAgIGluY2x1ZGU6IFsndGVzdC8qKi8qLnRlc3QudHMnXSxcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcbiAgICBkZXBzOiB7XG4gICAgICBpbmxpbmU6IFsnQHZ1ZScsICdAdnVldXNlJywgJ3Z1ZS1kZW1pJ10sXG4gICAgfSxcbiAgfSxcblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZS1zc2dcbiAgc3NnT3B0aW9uczoge1xuICAgIHNjcmlwdDogJ2FzeW5jJyxcbiAgICBmb3JtYXR0aW5nOiAnbWluaWZ5JyxcbiAgICBjcml0dGVyc09wdGlvbnM6IHtcbiAgICAgIHJlZHVjZUlubGluZVN0eWxlczogZmFsc2UsXG4gICAgfSxcbiAgICBvbkZpbmlzaGVkKCkge1xuICAgICAgZ2VuZXJhdGVTaXRlbWFwKClcbiAgICB9LFxuICB9LFxuXG4gIHNzcjoge1xuICAgIC8vIFRPRE86IHdvcmthcm91bmQgdW50aWwgdGhleSBzdXBwb3J0IG5hdGl2ZSBFU01cbiAgICBub0V4dGVybmFsOiBbJ3dvcmtib3gtd2luZG93JywgL3Z1ZS1pMThuL10sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnWCxPQUFPLFVBQVU7QUFDalksU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sV0FBVztBQUNsQixPQUFPLHFCQUFxQjtBQUM1QixPQUFPLGFBQWE7QUFDcEIsT0FBTyxnQkFBZ0I7QUFDdkIsU0FBUywyQkFBMkI7QUFDcEMsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sY0FBYztBQUNyQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxhQUFhO0FBQ3BCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sb0JBQW9CO0FBQzNCLE9BQU8sWUFBWTtBQUNuQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxlQUFlO0FBQ3RCLE9BQU8scUJBQXFCO0FBbkI1QixJQUFNLG1DQUFtQztBQXFCekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsTUFBTSxHQUFHLEtBQUssUUFBUSxrQ0FBVyxLQUFLLENBQUM7QUFBQSxJQUN6QztBQUFBLEVBQ0Y7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUNQLFVBQVU7QUFBQSxNQUNSLFNBQVM7QUFBQSxRQUNQLEtBQUssSUFBSTtBQUFBLFVBQ1AsU0FBUyxDQUFDLFVBQVUsT0FBTztBQUFBLFFBQzdCLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRixDQUFDO0FBQUE7QUFBQSxJQUdELE1BQU07QUFBQSxNQUNKLFlBQVksQ0FBQyxPQUFPLElBQUk7QUFBQSxJQUMxQixDQUFDO0FBQUE7QUFBQSxJQUdELFFBQVE7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
