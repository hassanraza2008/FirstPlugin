# copy-fcc

This is the code repository for my first ever browser extension, which allows you to copy any code snippet from freeCodeCamp (FCC) with a single click. Although it is my first plugin and may not be perfect, it still gets the job done.

## Features

- Copy code snippets with a single click.
- Works on all code blocks on freeCodeCamp.
- Simple and intuitive user interface.

## Compatibility

Works in all major browsers, including:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge
- Safari

## Installation

### Clone the Repository

To use this extension locally on your machine, first clone the repository using the terminal:

```bash
git clone https://github.com/hassanraza2008/copy-fcc.git
```

### For Firefox Users

1. Go to the address bar of your browser and type:
   ```bash
   about:debugging#/runtime/this-firefox
   ```
2. Select the `Load Temporary Add-ons` option and choose the `manifest.json` file from the directory.

### For Chrome Users

1. Go to the address bar of your browser and type:
   ```bash
   chrome://extensions/
   ```
2. Enable `Developer mode` by clicking the toggle switch in the top right corner.
3. Click the `Load unpacked` button and select the directory containing the `manifest.json` file.

## Usage

1. Visit the freeCodeCamp site.
2. You will see a `Copy` button near any code snippet.
3. Click the `Copy` button to copy the snippet to your clipboard. An alert will notify you that the text has been copied.

## Contributing

Contributions are welcome! If you have any ideas or improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

If you have any questions or feedback, feel free to reach out to me at [mrismart70@gmail.com].

