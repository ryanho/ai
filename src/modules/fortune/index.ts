import { bindThis } from '@/decorators.js';
import Module from '@/module.js';
import Message from '@/message.js';
import serifs from '@/serifs.js';
import seedrandom from 'seedrandom';
import { genItem } from '@/vocabulary.js';

export const blessing = [
    '藍吉',
    '尤塔吉',
    '澤塔吉',
    '艾克薩吉',
    '佩塔吉',
    '特拉吉',
    '吉加吉',
    '兆吉',
    '千吉',
    '百吉',
    '十吉',
    '十分之一吉',
    '厘吉',
    '毫吉',
    '微吉',
    '納吉',
    '皮可吉',
    '飛姆吉',
    '阿吉',
    '澤普吉',
    '約克吉',
    '超吉',
    '大大吉',
    '大吉',
    '吉',
    '中吉',
    '小吉',
    '凶',
    '大凶',
];

export default class extends Module {
	public readonly name = 'fortune';

	@bindThis
	public install() {
		return {
			mentionHook: this.mentionHook
		};
	}

	@bindThis
	private async mentionHook(msg: Message) {
		if (msg.includes(['算命', '占卜', '占', 'うらな', '運勢', 'おみくじ'])) {
			const date = new Date();
			const seed = `${date.getFullYear()}/${date.getMonth()}/${date.getDate()}@${msg.userId}`;
			const rng = seedrandom(seed);
			const omikuji = blessing[Math.floor(rng() * blessing.length)];
			const item = genItem(rng);
			msg.reply(`**${omikuji}🎉**\n幸運物品: ${item}`, {
				cw: serifs.fortune.cw(msg.friend.name)
			});
			return true;
		} else {
			return false;
		}
	}
}
