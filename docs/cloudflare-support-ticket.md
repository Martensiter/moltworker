# Cloudflare Support への問い合わせガイド

## 1. サポートページを開く

1. ブラウザで **https://dash.cloudflare.com** にログイン
2. 左サイドバー下部の **「Support」** をクリック  
   または直接: **https://dash.cloudflare.com/?to=/:account/support**
3. 対象アカウントを選択していることを確認

---

## 2. ケースを新規作成

1. **「Submit Case」** をクリック
2. **「Technical Support」** タイルをクリック
3. **「Create a Case」** をクリック

---

## 3. フォームに入力

### Subject（件名）

```
Wrangler deploy fails with error 7003 on workers/services (Containers)
```

### Description（詳細）

以下をコピー＆ペーストして、必要箇所を編集してください。

```
【事象】
Cloudflare Workers へのデプロイ（wrangler deploy）が、エラー 7003 で失敗します。

【エラーメッセージ】
A request to the Cloudflare API (/accounts/***/workers/services/<worker-name>) failed.
Could not route to /client/v4/accounts/***/workers/services/<worker-name>, perhaps your object identifier is invalid? [code: 7003]

【再現手順】
1. Workers Paid プランが有効なアカウントで wrangler deploy を実行
2. wrangler.jsonc に containers 設定を含む Worker をデプロイしようとする
3. 上記エラーで失敗

【確認済みの点】
- Workers Paid サブスクリプションは Active
- API トークンは有効（Workers Scripts Edit + Containers Edit 権限あり）
- 公式 Containers テンプレート（cloudflare/templates/containers-template）でも同様に 7003 が発生
- 別の Worker 名（moltbot-sandbox-v2）でも同様に失敗
- Containers ダッシュボードでは既存のコンテナが表示されており、過去のデプロイは成功していた

【環境】
- wrangler: 4.65.0
- デプロイ元: GitHub Actions (ubuntu-latest) およびローカル

【期待する結果】
wrangler deploy が正常に完了し、Worker と Container がデプロイされること

【質問】
error 7003 が発生する原因と、対処方法をご教示いただけますでしょうか。
アカウントの Containers 権限（entitlement）に問題がある可能性はありますか？
```

### Category（カテゴリ）

- **Product**: Workers または Developer Platform
- **Issue type**: Deployment / API Error など該当するものを選択

### Affected domains（該当ドメイン）

- Workers の場合は「該当なし」または `workers.dev` で問題なし

---

## 4. 送信

入力内容を確認し、**Submit** をクリックして送信します。

---

## 補足

- **API トークン・パスワードは送信しない**でください
- 返信は 24〜48 時間以内が目安です（プランにより異なります）
- ケースの状況確認: Support ページ → Technical Support → View My Cases
