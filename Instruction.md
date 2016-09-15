TypeScript/JavaScript Kata Prepare Instruction
================

1. copy _basic-template folder to new kata folder

```
cp _basic-template new-kata -r
cd new-kata
``` 

2. Install TypeScript 2.0

```
npm install typescript@next
```

3. install & run test

```
npm install
npm test
```

4. Start fun coding!!

Using Visual Studio Code
================

1. Install [Visual Studio Code](https://code.visualstudio.com/)

2. Open Visual Studio Code

3. File > Preferences > User/Workspace Settings

4. Add following code

```
{
   "typescript.tsdk": "node_modules/typescript/lib"
}
```

It may force VSCode using the typescript vesion in node_modules