/**
 * ! Telegram Bot 类的定义和主要逻辑   示例代码
 */

import { sendDarts, bettingTemplate } from '../services/TelegramApiService';

// 定义 TelegramBotHandler 类

export class TelegramBotHandler {
    private bot: any; // 私有成员变量，用于存储 Telegram Bot 实例

    // 构造函数，接受一个 Telegram Bot 实例作为参数
    constructor(bot: any) {
        this.bot = bot;
    }

    // 处理消息的逻辑，接受 chatId 参数，返回一个 Promise<void>
    async handleMessages(chatId: any): Promise<void> {
        // 处理消息的逻辑，调用外部的 sendDarts 函数
        await sendDarts(chatId, 3, this.bot);
    }

    // 回复下注消息的逻辑，接受 extractedData 参数，返回一个 Promise<string>
    async replyBettingMessage(extractedData: any): Promise<string> {
        // 调用外部的 bettingTemplate 函数，返回处理后的消息
        return await bettingTemplate(extractedData);
    }
}

/**
import { sendDarts, bettingTemplate } from '../services/TelegramApiService';

// 定义 TelegramBotHandler 类
export class TelegramBotHandler {
    private bot: any; // 私有成员变量，用于存储 Telegram Bot 实例

    // 构造函数，接受一个 Telegram Bot 实例作为参数
    constructor(bot: any) {
        this.bot = bot; // 将传入的 bot 参数赋值给类的私有变量
    }

    // 处理消息的逻辑，接受 chatId 参数，返回一个 Promise<void>
    async handleMessages(chatId: any): Promise<void> {
        // 处理消息的逻辑，调用外部的 sendDarts 函数
        await sendDarts(chatId, 3, this.bot);
    }

    // 回复下注消息的逻辑，接受 extractedData 参数，返回一个 Promise<string>
    async replyBettingMessage(extractedData: any): Promise<string> {
        // 调用外部的 bettingTemplate 函数，返回处理后的消息
        return await bettingTemplate(extractedData);
    }
}

 */
