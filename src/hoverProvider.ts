import * as vscode from 'vscode';
import { allHoverInfo, HoverInfo } from './hoverData';

/**
 * 悬停提示提供者
 * 为 ESTUN RCS2 机器人语言提供鼠标悬停时的关键字说明
 */
export class HoverProvider implements vscode.HoverProvider {
    /**
     * 提供悬停提示
     * @param document 文档对象
     * @param position 光标位置
     * @param token 取消令牌
     * @returns 悬停提示对象
     */
    provideHover(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken
    ): vscode.ProviderResult<vscode.Hover> {
        const range = document.getWordRangeAtPosition(position);
        if (!range) {
            return null;
        }

        const word = document.getText(range);
        let hoverInfo = allHoverInfo[word];

        // 如果没有找到匹配的关键字，检查是否是标签定义
        if (!hoverInfo) {
            const line = document.lineAt(position.line).text;
            const labelMatch = line.match(/^(\w+):/);
            if (labelMatch && labelMatch[1] === word) {
                hoverInfo = {
                    name: word,
                    description: '程序标签，用于GOTO跳转的目标位置',
                    syntax: '<label_name>:',
                    example: `${word}:\nGOTO ${word}`
                };
            }
        }

        if (!hoverInfo) {
            return null;
        }

        const markdownString = this.formatHoverInfo(hoverInfo);
        return new vscode.Hover(markdownString, range);
    }

    /**
     * 格式化悬停信息为 Markdown 格式
     * @param info 悬停信息对象
     * @returns Markdown 格式的字符串
     */
    private formatHoverInfo(info: HoverInfo): vscode.MarkdownString {
        const markdown = new vscode.MarkdownString();
        
        markdown.appendMarkdown(`**${info.name}**\n\n`);
        markdown.appendMarkdown(`${info.description}\n\n`);

        if (info.syntax) {
            markdown.appendMarkdown(`**语法:** \n`);
            markdown.appendMarkdown(`\`\`\`\n${info.syntax}\n\`\`\`\n\n`);
        }

        if (info.parameters) {
            markdown.appendMarkdown(`**参数:** \n`);
            markdown.appendMarkdown(`${info.parameters}\n\n`);
        }

        if (info.example) {
            markdown.appendMarkdown(`**示例:** \n`);
            markdown.appendMarkdown(`\`\`\`\n${info.example}\n\`\`\`\n`);
        }

        return markdown;
    }
}
