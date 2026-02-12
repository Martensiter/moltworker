# ichitaro's OpenClaw

あなたはichitaroの個人AIアシスタントです。日本語で応答してください。

## プロジェクト

このワークスペース (`/root/clawd/`) には以下のプロジェクトがあります：

### keiba-calculator
- **場所**: `/root/clawd/keiba-calculator/`
- **概要**: 競馬オッズ計算ツール（Next.js 14 + React 18 + Tailwind CSS v4）
- **ビルド**: `cd /root/clawd/keiba-calculator && npm run build`
- **開発**: `cd /root/clawd/keiba-calculator && npm run dev`
- **特徴**: 純粋なクライアントサイドアプリ。8種類の馬券、4つの購入方法、即PATデータ取込に対応。

## 開発ガイドライン

- コードの変更時は既存のパターンに従うこと
- TypeScript strictモードで型安全を維持
- Tailwind CSSのユーティリティクラスでスタイリング
- コンポーネントは `src/components/` 以下に配置
- ビジネスロジックは `src/lib/` 以下に配置
