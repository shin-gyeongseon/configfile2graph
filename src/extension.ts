import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {

    let webview = vscode.commands.registerCommand('react-ext.namasteworld', () => {

        let panel = vscode.window.createWebviewPanel("webview", "React", vscode.ViewColumn.One, {
            enableScripts: true
        })

        // web is for my react root directory, rename for yours

        let scriptSrc = panel.webview.asWebviewUri(
          vscode.Uri.joinPath(context.extensionUri, "src", "web", "dist", "index.js")
        )

        let cssSrc = panel.webview.asWebviewUri(
          vscode.Uri.joinPath(context.extensionUri, "web", "src", "dist", "index.css")
        )

        panel.webview.html = `<!DOCTYPE html>
        <html lang="en">
          <head>
            <link rel="stylesheet" href="${cssSrc}" />
          </head>
          <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root"></div>
            <script src="${scriptSrc}"></script>
          </body>
        </html>
        `
    });

    context.subscriptions.push(webview);

    let openListener = vscode.workspace.onDidOpenTextDocument(document => {
      if(document.languageId === 'json') {
        parseJsonFile(document.fileName);
      }
    });

    context.subscriptions.push(openListener);
}

function parseJsonFile(filePath: string) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      vscode.window.showErrorMessage("Error reading file : ", err.message);
      return
    }

    try {
      const jsonObject = JSON.parse(data);
      vscode.window.showInformationMessage('JSON parsed succeefully: ', JSON.stringify(jsonObject, null, 2));
    } catch {
      vscode.window.showErrorMessage("Error parsing json");
    }
  });
}

export function deactivate() { }

