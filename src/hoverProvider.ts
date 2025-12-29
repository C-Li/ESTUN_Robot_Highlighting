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
        const range = document.getWordRangeAtPosition(position, /[\w.]+/);
        if (!range) {
            return null;
        }

        let word = document.getText(range);
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

        // 如果没有找到匹配的关键字，检查是否是以变量前缀开头的完整变量名（t_p.V1000, t_s.C100等）
        if (!hoverInfo) {
            const prefixes = ['t_p.', 't_s.', 't_l.', 't_g.'];
            for (const prefix of prefixes) {
                if (word.startsWith(prefix)) {
                    const suffix = word.slice(prefix.length);
                    const prefixInfo = allHoverInfo[prefix];
                    const suffixInfo = allHoverInfo[suffix];

                    if (suffixInfo) {
                        const prefixName = prefixInfo ? this.getPrefixName(prefix) : prefix;
                        hoverInfo = {
                            name: suffixInfo.name,
                            description: `${prefixName}，${suffixInfo.description}`,
                            syntax: suffixInfo.syntax,
                            parameters: suffixInfo.parameters,
                            example: suffixInfo.example
                        };
                    } else if (prefixInfo) {
                        hoverInfo = prefixInfo;
                    }
                    break;
                }
            }
        }

        if (!hoverInfo) {
            return null;
        }

        const markdownString = this.formatHoverInfo(hoverInfo);
        return new vscode.Hover(markdownString, range);
    }

    /**
     * 获取前缀的中文名称
     * @param prefix 前缀字符串
     * @returns 中文名称
     */
    private getPrefixName(prefix: string): string {
        const prefixNames: Record<string, string> = {
            't_p.': '程序变量',
            't_s.': '系统变量',
            't_l.': '局部变量',
            't_g.': '全局变量'
        };
        return prefixNames[prefix] || prefix;
    }

    /**
     * 合并两个悬停信息
     * @param prefixInfo 前缀信息
     * @param suffixInfo 后缀信息
     * @returns 合并后的悬停信息
     */
    private mergeHoverInfo(prefixInfo: HoverInfo, suffixInfo: HoverInfo): HoverInfo {
        const merged: HoverInfo = {
            name: `${prefixInfo.name} + ${suffixInfo.name}`,
            description: `${prefixInfo.description}\n\n${suffixInfo.description}`
        };

        if (prefixInfo.syntax || suffixInfo.syntax) {
            merged.syntax = [prefixInfo.syntax, suffixInfo.syntax].filter(Boolean).join('\n');
        }
        if (prefixInfo.parameters || suffixInfo.parameters) {
            merged.parameters = [prefixInfo.parameters, suffixInfo.parameters].filter(Boolean).join('\n');
        }
        if (prefixInfo.example || suffixInfo.example) {
            merged.example = [prefixInfo.example, suffixInfo.example].filter(Boolean).join('\n\n');
        }

        return merged;
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
