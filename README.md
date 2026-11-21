# OLIMOV株式会社 — コーポレートサイト

日本とウズベキスタンの取引をつなぐ OLIMOV株式会社 のサイト。
Astro による静的サイトで、日本語（既定）・英語・ロシア語の3言語。

## ローカルで確認する

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ に出力
```

Node.js 20 以上が必要です。

## 公開

`main` ブランチに push すると、GitHub Actions（`.github/workflows/deploy.yml`）が
ビルドして GitHub Pages に公開します。リポジトリの Settings → Pages で
Source を「GitHub Actions」にしておく必要があります。

独自ドメインに移すときは、Settings → Pages の Custom domain を設定してください。
URL やサブパスはワークフローが自動で渡すので、コードの変更は不要です。

## 文章を直す

3言語の文章と会社情報は、すべて `src/i18n/content.ts` にあります。
国名の色分け（日本＝朱、ウズベキスタン・中央アジア＝青緑）は `src/i18n/paint.ts` が自動で行います。

## 構成

```
src/
  i18n/content.ts      文章と会社情報（ja / en / ru）
  i18n/paint.ts        国名の色分け
  layouts/Base.astro   <head>、ヘッダー、フッター
  components/Home.astro  ページ本体
  components/Ikat.astro  絣の帯（国旗の模様をビルド時に生成）
  styles/global.css    配色・書体・レイアウト
  pages/               /, /en/, /ru/
public/                favicon, 代表写真
```
