import { bindThis } from '@/decorators.js';
import Message from '@/message.js';
import Module from '@/module.js';
import serifs from '@/serifs.js';
import { genItem } from '@/vocabulary.js';
import config from '@/config.js';
import type { Note } from '@/misskey/note.js';

export default class extends Module {
    public readonly name = 'poll';

    @bindThis
    public install() {
        setInterval(() => {
            if (Math.random() < 0.1) {
                this.post();
            }
        }, 1000 * 60 * 60);

        return {
            mentionHook: this.mentionHook,
            timeoutCallback: this.timeoutCallback,
        };
    }

    @bindThis
    private async post() {
        const duration = 1000 * 60 * 15;

        const polls = [ // TODO: 提取文字
            ['珍貴的物品', '大家認為哪個是最珍貴的？'],
            ['看起來美味的東西', '大家認為哪個最美味？'],
            ['看起來沈重的東西', '大家認為哪個最重？'],
            ['想要的東西', '大家最想要哪個？'],
            ['希望帶到無人島上的東西', '如果你只能帶一樣東西到無人島上，你會選擇哪個？'],
            ['想在家裡擺放的東西', '大家想在家裡擺放哪個？'],
            ['可能會很暢銷的東西', '大家認為哪個最有可能暢銷？'],
            ['希望從天上掉下來的東西', '大家希望從天上掉下來的是哪個？'],
            ['想要攜帶的東西', '大家想攜帶哪個？'],
            ['想商品化的東西', '大家如果要商品化哪個？'],
            ['可能會從遺跡發掘出來的東西', '大家認為遺跡中最有可能被發掘出來的是哪個？'],
            ['聞起來香氣宜人的東西', '大家認為哪個香氣最好聞？'],
            ['可能會以高價交易的東西', '大家認為哪個最有可能以高價交易？'],
            ['可能在地球軌道上漂流的東西', '大家認為哪個最可能在地球軌道上漂流？'],
            ['想要當作禮物送出的東西', '如果要送給你禮物，你會選擇哪個？'],
            ['希望收到作為禮物的東西', '如果要收到禮物，你希望是哪個？'],
            ['你認為我最有可能擁有的東西', '你認為我最有可能擁有的是哪個？'],
            ['可能會流行的東西', '大家認為哪個最有可能流行？'],
            ['早餐', '你會選擇哪個當早餐？'],
            ['午餐', '你會選擇哪個當午餐？'],
            ['晚餐', '你會選擇哪個當晚餐？'],
            ['看起來對身體有益的東西', '大家認為哪個最對身體有益？'],
            ['想要留給後世的東西', '你想留給後世的是哪個？'],
            ['可能成為樂器的東西', '大家認為哪個最有可能成為樂器？'],
            ['想加入到味噌湯中的配料', '你會選擇哪個作為味噌湯的配料？'],
            ['想撒在米飯上的東西', '你會撒哪個在米飯上？'],
            ['經常見到的東西', '你經常看到哪個？'],
            ['可能會在路邊找到的東西', '大家認為哪個最有可能在路邊找到？'],
            ['可能會被放在美術館的東西', '你認為哪個最有可能被放在美術館？'],
            ['可能會在教室裡找到的東西', '大家認為教室裡最可能找到哪個？'],
            ['希望成為表情符號的東西', '你希望哪個成為表情符號？'],
            ['可能會在Misskey總部找到的東西', '大家認為Misskey總部最可能找到哪個？'],
            ['可以燃燒的垃圾', '你認為哪個是可以燃燒的垃圾？'],
            ['喜歡的飯糰配料', '你最喜歡什麼樣的飯糰配料？'],
        ];

        const poll = polls[Math.floor(Math.random() * polls.length)];

        const choices = [
            genItem(),
            genItem(),
            genItem(),
            genItem(),
        ];

        const note = await this.ai.post({
            text: poll[1],
            poll: {
                choices,
                expiredAfter: duration,
                multiple: false,
            }
        });

        // 設置計時器
        this.setTimeoutWithPersistence(duration + 3000, {
            title: poll[0],
            noteId: note.id,
        });
    }

    @bindThis
    private async mentionHook(msg: Message) {
        if (!msg.or(['/poll']) || msg.user.username !== config.master) {
            return false;
        } else {
            this.log('手動發起投票');
        }

        this.post();

        return true;
    }

    @bindThis
    private async timeoutCallback({ title, noteId }) {
        const note: Note = await this.ai.api('notes/show', { noteId });

        const choices = note.poll!.choices;

        let mostVotedChoice;

        for (const choice of choices) {
            if (mostVotedChoice == null) {
                mostVotedChoice = choice;
                continue;
            }

            if (choice.votes > mostVotedChoice.votes) {
                mostVotedChoice = choice;
            }
        }

        const mostVotedChoices = choices.filter(choice => choice.votes === mostVotedChoice.votes);

        if (mostVotedChoice.votes === 0) {
            this.ai.post({ // TODO: 提取文字
                text: '沒有投票',
                renoteId: noteId,
            });
        } else if (mostVotedChoices.length === 1) {
            this.ai.post({ // TODO: 提取文字
                cw: `${title}投票結果公佈！`,
                text: `最終結果為${mostVotedChoice.votes}票的「${mostVotedChoice.text}」！`,
                renoteId: noteId,
            });
        } else {
            const choices = mostVotedChoices.map(choice => `「${choice.text}」`).join('與');
            this.ai.post({ // TODO: 提取文字
                cw: `${title}投票結果公佈！`,
                text: `最終結果為${mostVotedChoice.votes}票的${choices}！`,
                renoteId: noteId,
            });
        }
    }
}
