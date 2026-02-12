---
name: keiba-calculator
description: Manage, build, and develop the keiba-calculator Next.js project. A Japanese horse racing odds calculator tool built with Next.js 14, React 18, and Tailwind CSS v4. Use this skill for building, running dev server, deploying, and making code changes to the project.
---

# keiba-calculator

Horse racing odds calculator (競馬オッズ計算ツール) - a client-side Next.js application.

## Project Location

```
/root/clawd/keiba-calculator/
```

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI**: React 18 + Tailwind CSS v4
- **Language**: TypeScript
- **State**: localStorage (client-side only)
- **Server-side**: None (purely client-side, all pages use 'use client')

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata & navigation
│   ├── page.tsx            # Main calculator page
│   ├── globals.css         # Tailwind imports
│   ├── guide/page.tsx      # Guide page
│   └── glossary/page.tsx   # Glossary page
├── components/
│   ├── calculator/         # Core calculator UI components
│   │   ├── BetTypeSelector.tsx   # 馬券種選択
│   │   ├── HorseSelector.tsx     # 馬番選択
│   │   ├── OddsInput.tsx         # オッズ入力
│   │   ├── PurchaseList.tsx      # 購入リスト
│   │   ├── PurchaseMethod.tsx    # 購入方法 (通常/BOX/ながし/フォーメーション)
│   │   ├── RaceSetup.tsx         # レース情報
│   │   └── ResultPanel.tsx       # 結果パネル
│   ├── ipat/
│   │   └── IpatImporter.tsx      # 即PAT取込モーダル
│   ├── ui/                       # 共通UIコンポーネント
│   └── seo/
│       └── JsonLd.tsx            # 構造化データ
├── lib/
│   ├── types.ts                  # 型定義
│   ├── calculator/               # 計算ロジック
│   │   ├── betTypes.ts
│   │   ├── combinations.ts
│   │   ├── payout.ts
│   │   └── refund.ts
│   └── ipat/                     # 即PATパーサー
│       ├── oddsParser.ts
│       ├── historyParser.ts
│       └── raceInfoParser.ts
└── data/
    └── glossary.ts               # 競馬用語集
```

## Commands

### Install dependencies
```bash
cd /root/clawd/keiba-calculator && npm install
```

### Development server
```bash
cd /root/clawd/keiba-calculator && npm run dev
```

### Production build
```bash
cd /root/clawd/keiba-calculator && npm run build
```

### Start production server
```bash
cd /root/clawd/keiba-calculator && npm run start
```

## Features

- 8 bet types: 単勝, 複勝, 枠連, 馬連, ワイド, 馬単, 3連複, 3連単
- 4 purchase methods: 通常, BOX, ながし, フォーメーション
- 即PAT data import (odds, history, race info)
- Refund horse handling
- Race result simulation
- localStorage persistence

## Notes

- This is a purely client-side app with no API routes or server-side logic
- All state is managed via React useState + localStorage
- No external API calls or database connections
