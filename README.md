# 😎 inquirer-emoji
[![npm version](https://badgen.net/npm/v/inquirer-emoji)](https://www.npmjs.com/package/inquirer-emoji)

Emoji search and select prompt for [Inquirer.js](https://www.npmjs.com/package/inquirer) based on [emoj](https://github.com/sindresorhus/emoj).

![Demo](demo.gif)

## Usage
Register the prompt with inquirer:
```javascript
inquirer.registerPrompt('emoji', require('inquirer-emoji'))
```

Call the prompt:
```javascript
  return inquirer.prompt([
    {
      type: 'emoji',
      name: 'spirit_animal',
      message: 'Find your spirit animal emoji:'
    }
  ]);
```

## Related
- [inquirer](https://github.com/SBoudrias/Inquirer.js) - A collection of common interactive command line user interfaces
- [emoj](https://github.com/sindresorhus/emoj) - Find relevant emoji from text on the command-line

## Author
Tanner Nielsen <tannerntannern@gmail.com>

[Website](https://tannernielsen.com) | [GitHub](https://github.com/tannerntannern)

## License
MIT
