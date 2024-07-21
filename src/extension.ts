import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
  // parse json and make graph 
  let openListener = vscode.workspace.onDidOpenTextDocument(document => {
    if(document.languageId === 'json') {
      const jsonObject: string = document.getText();
      createPanel(context, jsonObject);
    }

  });
  
  let webview = vscode.commands.registerCommand('react-ext.namasteworld', () => {
    createPanel(context, "exmaple");
  });

  context.subscriptions.push(openListener);
  context.subscriptions.push(webview);
}

function createPanel(context: vscode.ExtensionContext, jsonObject: string) {
  let panel = vscode.window.createWebviewPanel(
    "webview", 
    "React", 
    vscode.ViewColumn.One, 
    {
    enableScripts: true
    }
  )

  let scriptSrc = panel.webview.asWebviewUri(
    vscode.Uri.joinPath(context.extensionUri, "src", "web", "dist", "index.js")
  )

  let cssSrc = panel.webview.asWebviewUri(
    vscode.Uri.joinPath(context.extensionUri, "src", "web", "dist", "index.css")
  )

  panel.webview.html = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <link rel="stylesheet" href="${cssSrc}" />
    </head>
    <body>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <div id="root"></div>
      <script>
        const jsonObjectExample = ${jsonObject};
      </script>
      <script src="${scriptSrc}"></script>
    </body>
  </html>
  `
}

export function deactivate() { }

