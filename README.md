# 帳密檢查機制
使用者提供帳號密碼，伺服器檢查身份

## 專案畫面
![Index](https://github.com/aziz0916/login_a13/blob/main/public/images/index.png)
![Match](https://github.com/aziz0916/login_a13/blob/main/public/images/match.png)
![Unmatch](https://github.com/aziz0916/login_a13/blob/main/public/images/unmatch.png)

## 專案功能
1. 使用者在表單裡輸入帳密：email & password
2. 如果找不到username，或是password 錯誤，就彈回登入頁並且在介面上顯示「Username或Password錯誤」
3. 如果username + password組合正確，使用者就進入自己的welcome page，在此頁面上會顯示登入使用者的 firstName

## 使用工具
- [Visual Studio Code](https://visualstudio.microsoft.com/zh-hant/) - 開發環境
- [Express](https://www.npmjs.com/package/express) - 應用程式架構
- [Express-Handlebars](https://www.npmjs.com/package/express-handlebars) - 模板引擎
- [MongoDB](https://www.mongodb.com/) - 資料庫
- [Mongoose](https://www.npmjs.com/package/mongoose) - MongoDB 的 ODM 可以在程式中與資料庫溝通

## 安裝
1. 開啟終端機(Terminal)，Clone 此專案至本機電腦

```
git clone https://github.com/aziz0916/login_a13.git
```
2. 進入存放此專案的資料夾

```
cd login_a13
```
3. 安裝 npm 套件

```
npm install
```
4. 引入種子資料

```
npm run seed
```
5. 執行程式

```
npm run dev
```
