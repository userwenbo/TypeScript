## 1. 搭建ts开发环境
    1). 全局下载ts: npm install -g typescript
    2). 查看ts版本: tsc -v
    3). 编译ts生成js文件: tsc xxx.ts
    3). 自动化编译:
        a. 创建配置文件: tsconfig.json
            {
              "compilerOptions": {
                "target": "es5",
                "noImplicitAny": true,
                "module": "amd",
                "removeComments": false,
                "sourceMap": false,
                "outDir": "js" //你要生成js的目录,可自由命名
              }
            }
        b. 在vs中创建自动编译的任务:
            终端 => 运行任务 => tsc: watch - tsconfig.json

## 2. 
        