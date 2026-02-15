# Error 7003 トラブルシューティング

`workers/services` へのルーティング失敗（code 7003）の対処チェックリスト。

## Step 2: Billing / Subscriptions の確認

### リンク

- **Subscriptions**: https://dash.cloudflare.com/?to=/:account/billing/subscriptions

### 確認項目

| 項目 | 確認 |
|------|------|
| **Workers Paid** が一覧に表示されているか | □ |
| ステータスが **Active**（有効）になっているか | □ |
| 過去の支払い遅延（Past due）がないか | □ |
| サブスクをキャンセルした後、再購読した場合は請求サイクルが再開されているか | □ |

### 補足

- Workers Paid が表示されていない、または Cancelled → 再度 Subscribe する
- Active になっているのに 7003 が出る → Step 3 へ

---

## Step 3: Workers & Pages での Containers 確認

### リンク

- **Workers & Pages Overview**: https://dash.cloudflare.com/?to=/:account/workers-and-pages
- **Containers ダッシュボード**: https://dash.cloudflare.com/?to=/:account/workers/containers
- **Plans（プラン選択）**: Overview 左サイドバーの「Plans」または Billing → Subscriptions を参照

### 確認項目

| 項目 | 確認 |
|------|------|
| **Plans** で Workers Paid が選択されているか | □ |
| 左サイドバーに **Containers** メニューが表示されているか | □ |
| Containers ダッシュボードを開いたときにエラーや制限メッセージが表示されていないか | □ |

### 補足

- 左サイドバー: **Workers & Pages** → **Containers** があれば Containers が有効
- Containers メニューがない場合 → Workers Paid が正しく有効になっていない可能性
- Plans ページで Workers Paid を再度選択し直す（Change plan）

---

## それでも 7003 の場合

- [Cloudflare Support](https://dash.cloudflare.com/?to=/:account/support) に問い合わせ
- 伝える内容: Error 7003, endpoint `workers/services`, 公式 Containers テンプレートでも同様に失敗
