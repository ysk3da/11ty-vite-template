# 11ty vite template

[11ty](https://www.11ty.dev/docs/)と[vite](https://ja.vitejs.dev/)を利用した web 制作用のテンプレートです。

元々、gulp + webpack でやっていたことを移行しています。

また、Next.js などの TypeScript + React のフレームワークへのステップアップの踏み台としても利用したいと考えて構成しています。

## Summary

`11ty`をタスクランナーとして利用し、JavaScript 部分を`vite`でバンドルする構成です。

HTML、CSS 部分を`11ty`が JavaScript 部分を`vite`が処理しています。

## About HTML

テンプレートエンジンとして[ejs]()を採用しています。

選定理由は、

- コード管理移譲後に、HTML としてノンプログラマの本開発環境を利用しない編集があること
- Vanilla JavaScript の練習になること
- コンポーネント管理したいこと

の３つが大きな要因です。

## About CSS

原則[Dart Sass](https://sass-lang.com/dart-sass)を利用して SCSS 形式で記述することを前提にしています。

ディレクトリ構造は[FLOCSS(フロックス)](https://github.com/hiloki/flocss)を採用しています。

こちらも HTML 同様、コード管理移譲後にノンプログラマによる本開発環境を利用しない編集を想定しています。

## About JavaScript

Node.js のバージョンは v18.16.0 です。

原則 [TypeScript](https://typescriptbook.jp/) での記述を想定していますが、案件によっては[jQuery](https://jquery.com/)を要求される場合があるため、その部分を残しています。

### About TypeScript Config

[TSConfig Bases](https://github.com/tsconfig/bases)を利用しています。

### About ESLint

[.eslintrc.json](.eslintrc.json)を確認してください。

## About Images

`11ty`や`vite`に関連しない形で、画像圧縮と WebP 変換ライブラリを実装しています。

ライブラリは[libs/imagemin.mjs](libs/imagemin.mjs)です。パッケージは Squoosh ではなく imagemin を採用しています。

## About Library

画像圧縮の他に、

- csv を json に変換する
- json を csv に変換する
- CSS を SCSS に変換する

の 3 つのライブラリをを同梱しています。

それぞれ、フォルダを用意しているので、利用してください。

## Acknowledgments

Thank you to all involved!
