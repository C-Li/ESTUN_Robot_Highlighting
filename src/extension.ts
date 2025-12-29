import * as vscode from 'vscode';
import { HoverProvider } from './hoverProvider';

/**
 * 扩展激活函数
 * 当扩展被激活时调用
 */
export function activate(context: vscode.ExtensionContext) {
    const hoverProvider = new HoverProvider();
    
    const hoverDisposable = vscode.languages.registerHoverProvider(
        { scheme: 'file', language: 'robot-language' },
        hoverProvider
    );
    
    context.subscriptions.push(hoverDisposable);
}

/**
 * 扩展停用函数
 * 当扩展被停用时调用
 */
export function deactivate() {}
