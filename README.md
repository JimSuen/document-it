# vue3-template
基于 `Vue3.x` 的工程模板。

## 技术栈
- [Vue3.x](https://v3.vuejs.org/guide/introduction.html): 使用 `Vue3.x` 框架，支持 `<script setup>` 语法;

- [TypeScript](https://github.com/microsoft/TypeScript): 使用 `TypeScript` 进行类型注解;

- [Vite.js](https://vitejs.dev/): 使用 `Vite.js` 进行打包构建；

## 代码规范相关

- [ESLint](https://eslint.org/)：代码格式校验，使用 `Visual Studio Code` 开发的话需要安装配套的 `ESLint` 插件；**本项目采用[Airbnb](https://github.com/airbnb/javascript)风格**；
- [Prettier](https://prettier.io/): 代码格式化,使用 `Visual Studio Code` 开发的话需要安装配套的 `Prettier ` 插件；
- [husky](https://github.com/typicode/husky): 通过 ESLint 检测和修复的代码禁止提交;
- [lint-staged](https://github.com/okonet/lint-staged): 在 git 暂存的文件上运行 linters;

## 开发工具

如果使用的是 `Visual Studio Code` 作为开发工具，需要安装以下插件

- `ESLint` : 和 `ESlint` 依赖配套使用；
- `Prettier` : 和 `Prettier` 依赖配套使用；
- `Vue Language Features (Volar)` : 用来支持 Vue3.x 语法

## 开发指南

### 1. 安装依赖

#### NPM
```sh
npm install
```
#### YARN
```sh
yarn install
```

### 2. 启动

#### NPM
```sh
npm run dev
```
#### YARN
```sh
yarn dev
```