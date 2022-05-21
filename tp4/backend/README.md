## Folder Structure

```bash
├───build
├───database
└───src
    └───utils
```

the */src* folder is where my ES6 code lies.
I will put all my utilities under the */src/utils* folder.

*babel* compiles my code from ES6 --> ES5 into the */build* folder

the */database* folder will contain all my json files

## How to Run

Install the dependencies
```bash
npm install
or
yarn install
```

Start the babel compiler:
```bash
npm run start-babel
or
yarn start-babel
```

In a separate console window, let nodemon watch for file changes:
```bash
npm run watch
or
yarn watch
```



