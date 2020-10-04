# RS School caesar cipher cli app

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

To start app:

```
node app <options>
```

Options:
1.  **-s, --shift** <number>      caesar cipher shift
2.  **-i, --input** <file path>   input file path (required!)
3.  **-o, --output** <file path>  output file path (required!)
4.  **-a, --action** <type>       encode/decode
5.  **-h, --help**                display help for command
  
  
Example:
```
node app --action decode --shift 7
node app --action decode --shift 7 --input decoded.txt --output plain.txt
```
