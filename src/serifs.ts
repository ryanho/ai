// せりふ

export default {
	core: {
		setNameOk: name => `知道了。從現在開始，我就叫你${name}！`,

		san: '是不是加個san比較好？',

		yesOrNo: '我只知道「是」或「否」...',

		hello: name => name ? `早上好、${name}♪` : `早上好♪`,

		helloNight: name => name ? `晚上好、${name}♪` : `晚上好♪`,

		goodMorning: (tension, name) => name ? `早安、${name}！${tension}` : `早安！${tension}`,

		/*
		goodMorning: {
			normal: (tension, name) => name ? `おはようございます、${name}！${tension}` : `おはようございます！${tension}`,

			hiru: (tension, name) => name ? `おはようございます、${name}！${tension}もうお昼ですよ？${tension}` : `おはようございます！${tension}もうお昼ですよ？${tension}`,
		},
*/

		goodNight: name => name ? `晚安、${name}！` : '晚安！',

		omedeto: name => name ? `謝謝、${name}♪` : '謝謝♪',

		erait: {
			general: name => name ? [
				`${name}、今天也很棒喔！`,
				`${name}、今天也是很了不起喔～♪`
			] : [
				`今天也很棒喔！`,
				`今天也是很了不起喔～♪`
			],

			specify: (thing, name) => name ? [
				`${name}、${thing}真的好棒喔！`,
				`${name}、${thing}真的很了不起唷～♪`
			] : [
				`${thing}真的好棒喔！`,
				`${thing}真的很了不起唷～♪`
			],

			specify2: (thing, name) => name ? [
				`${name}、${thing}真的好棒喔！`,
				`${name}、${thing}真的很了不起唷～♪`
			] : [
				`${thing}真的好棒喔！`,
				`${thing}真的很了不起唷～♪`
			],
		},

		okaeri: {
			love: name => name ? [
				`歡迎回家、${name}♪`,
				`歡迎回家、${name}。`
			] : [
				'歡迎回家♪',
				'歡迎回家、我的主人。'
			],

			love2: name => name ? `歡迎回家♡♡♡${name}♡♡♡♡♡` : '歡迎回家♡♡♡我的主人♡♡♡♡♡',

			normal: name => name ? `歡迎回家、${name}！` : '歡迎回家！',
		},

		itterassyai: {
			love: name => name ? `小心慢走、${name}♪` : '小心慢走♪',

			normal: name => name ? `慢走、${name}！` : '慢走！',
		},

		tooLong: '我覺得時間太長了...',

		invalidName: '我覺得很難發音',

		nadenade: {
			normal: '呀…！ 嚇到我了',

			love2: ['哇… 好害羞', '啊嗚… 好害羞…', '呼呀…？'],

			love3: ['嗯… 非常感謝♪', '哇、讓我平靜下來了♪', '咕… 感到安心…', '有點困了…'],

			hate1: '…！ 請別這樣...',

			hate2: '請別碰我',

			hate3: '請不要靠近我',

			hate4: '住手。我要報警囉？',
		},

		kawaii: {
			normal: ['非常感謝♪', '好害羞...'],

			love: ['好開心♪', '好害羞...'],

			hate: '…非常感謝'
		},

		suki: {
			normal: 'ㄟ… 非常感謝…♪',

			love: name => `我…也喜歡 ${name} 喔！`,

			hate: null
		},

		hug: {
			normal: '抱...',

			love: '抱抱♪',

			hate: '請放開我...'
		},

		humu: {
			love: '呃、那個…… 踩踩……… 你感覺如何…？',

			normal: 'ㄟ... 這有點...',

			hate: '……'
		},

		batou: {
			love: '呃…、你、你這個小笨蛋…？',

			normal: '(瞪…)',

			hate: '…你的腦袋沒問題嘛？'
		},

		itai: name => name ? `${name}、沒事吧…？ 痛痛飛走吧！` : '沒事吧…？ 痛痛飛走吧！',

		ote: {
			normal: '嗚... 我可不是狗...？',

			love1: '旺！',

			love2: '旺旺♪',
		},

		shutdown: '我還不想睡喔...？',

		transferNeedDm: '好吧，我們為什麼不聊聊這個呢？',

		transferCode: code => `知道了。 \n密碼是「${code}」！`,

		transferFailed: '呃，是不是密碼錯誤啊…？',

		transferDone: name => name ? `哈...！歡迎回來，{name}！` : `哈...！歡迎回家！`,
	},

	keyword: {
		learned: (word, reading) => `(${word}..... ${reading}..... 我記住了)`,

		remembered: (word) => `${word}`
	},

	dice: {
		done: res => `結果是 ${res} 點！`
	},

	birthday: {
		happyBirthday: name => name ? `生日快樂、${name}🎉` : '生日快樂🎉',
	},

	/**
	 * リバーシ
	 */
	reversi: {
		/**
		 * リバーシへの誘いを承諾するとき
		 */
		ok: '好喔～',

		/**
		 * リバーシへの誘いを断るとき
		 */
		decline: '不好意思、我剛被告知不要玩黑白棋...',

		/**
		 * 対局開始
		 */
		started: (name, strength) => `跟 ${name} 的對弈開始了！ (強度${strength})`,

		/**
		 * 接待開始
		 */
		startedSettai: name => `(開始陪玩 ${name})`,

		/**
		 * 勝ったとき
		 */
		iWon: name => `我贏了 ${name}♪`,

		/**
		 * 接待のつもりが勝ってしまったとき
		 */
		iWonButSettai: name => `(不小心在陪玩時贏了${name}……)`,

		/**
		 * 負けたとき
		 */
		iLose: name => `我輸給 ${name}...`,

		/**
		 * 接待で負けてあげたとき
		 */
		iLoseButSettai: name => `(我剛剛在陪玩時故意輸給了${name}喔～♪)`,

		/**
		 * 引き分けたとき
		 */
		drawn: name => `我跟 ${name} 的比賽不分勝負～`,

		/**
		 * 接待で引き分けたとき
		 */
		drawnSettai: name => `(我剛剛陪${name}玩，結果打成平手啦……)`,

		/**
		 * 相手が投了したとき
		 */
		youSurrendered: name => `${name} 認輸`,

		/**
		 * 接待してたら相手が投了したとき
		 */
		settaiButYouSurrendered: name => `(我本來在陪${name}玩，結果他竟然投降了……對不起啦。)`,
	},

	/**
	 * 数当てゲーム
	 */
	guessingGame: {
		/**
		 * やろうと言われたけど既にやっているとき
		 */
		alreadyStarted: 'ㄟ、遊戲已經開始了！',

		/**
		 * タイムライン上で誘われたとき
		 */
		plzDm: '讓我們發送貼文來猜數字！',

		/**
		 * ゲーム開始
		 */
		started: '猜出 0-100 之間的秘密數字♪',

		/**
		 * 数字じゃない返信があったとき
		 */
		nan: '請給個數字！您也可以說「取消」來退出遊戲！',

		/**
		 * 中止を要求されたとき
		 */
		cancel: '我明白了～。非常感謝♪',

		/**
		 * 小さい数を言われたとき
		 */
		grater: num => `比${num}還大`,

		/**
		 * 小さい数を言われたとき(2度目)
		 */
		graterAgain: num => `我再說一次，它比${num}還大喔！`,

		/**
		 * 大きい数を言われたとき
		 */
		less: num => `比${num}還小`,

		/**
		 * 大きい数を言われたとき(2度目)
		 */
		lessAgain: num => `我再說一次，它比${num}還小喔！`,

		/**
		 * 正解したとき
		 */
		congrats: tries => `猜中了🎉 (在第${tries}次猜中)`,
	},

	/**
	 * 数取りゲーム
	 */
	kazutori: {
		alreadyStarted: '正在進行中喔～',

		matakondo: '有機會再一起玩！',

		intro: minutes => `大家好，一起來玩數數遊戲吧！\n0 到 100 之間，搶到最大數字的人獲勝。不可以跟他人重複喔～\n時間限制為${minutes}分鐘。請回覆此貼文並附上您的數字！`,

		finish: '比賽結果揭曉！',

		finishWithWinner: (user, name) => name ? `這次是{user} ({name}) 獲勝！有機會我們再來一次吧♪` : `這次是{user} 獲勝！讓我們再來一次♪`,

		finishWithNoWinner: '這次沒有贏家... 讓我們再來一次♪',

		onagare: '由於沒有參與者，遊戲被取消...'
	},

	/**
	 * 絵文字生成
	 */
	emoji: {
		suggest: emoji => `這樣如何？→${emoji}`,
	},

	/**
	 * 占い
	 */
	fortune: {
		cw: name => name ? `我已經占卜了${name}今天的運勢...` : '我已經占卜了你今天的運勢...',
	},

	/**
	 * タイマー
	 */
	timer: {
		set: '知道了！',

		invalid: '唔...？',

		tooLong: '太長了…',

		notify: (time, name) => name ? `${name}，已經過了${time}囉！` : `已經過了${time}囉！`
	},

	/**
	 * リマインダー
	 */
	reminder: {
		invalid: '唔...？',

		doneFromInvalidUser: '我討厭惡作劇！',

		reminds: '這是要做的事情的清單！',

		notify: (name) => name ? `${name}、這個已經完成了嘛？` : `這個已經完成了嘛？`,

		notifyWithThing: (thing, name) => name ? `${name}、「${thing}」已經完成了嘛？` : `「${thing}」已經完成了嘛？`,

		done: (name) => name ? [
			`做的好、${name}♪`,
			`${name}、不愧是你！`,
			`${name}、太厲害了...！`,
		] : [
			`做的好♪`,
			`不愧是你！`,
			`太厲害了...！`,
		],

		cancel: `知道了。`,
	},

	/**
	 * バレンタイン
	 */
	valentine: {
		chocolateForYou: name => name ? `${name}、那個... 我做了巧克力，希望你能收下！🍫` : '我做了巧克力，希望你能收下！🍫',
	},

	server: {
		cpu: '伺服器負荷似乎很高。沒問題嗎...？'
	},

	maze: {
		post: '這是今天的迷宮！ #AiMaze',
		foryou: '畫好了！'
	},

	chart: {
		post: '這是實例的發文數！',
		foryou: '畫好了！'
	},

	checkCustomEmojis: {
		post: (server_name, num) => `${server_name} 新增了 ${num} 個表情符號喔！`,
		emojiPost: emoji => `:${emoji}:\n(\`${emoji}\`) #AddCustomEmojis`,
		postOnce: (server_name, num, text) => `${server_name} 已新增 ${num} 個表情符號！\n${text} #AddCustomEmojis`,
		emojiOnce: emoji => `:${emoji}:(\`${emoji}\`)`,
		nothing: '我查看了一下表情符號，似乎沒有新增任何東西耶',
	},

	aichat: {
		nothing: type => `啊…好像沒有註冊${type}的API金鑰耶`,
		error: type => `唉…好像在${type}上發生錯誤了耶。或許換用gemini-flash會動吧？`,
		post: (text, type) => `${text} (${type}) #aichat`,
	},

	sleepReport: {
		report: hours => `嗯，我想我睡了大約${hours}小時`,
		reportUtatane: '嗯... 我在打盹',
	},

	noting: {
		notes: [
			'咕嚕咕嚕…',
			'我有點睏了',
			'好嗎？',
			'(。´･ω･)?',
			'咦～',
			'那......像這樣......那樣做？',
			'發呆中…',
			'呼……我累了',
			'要煮味噌湯嗎？',
			'先吃晚餐嗎？還是想先洗澡呢？',
			'哇啊啊啊！？',
			'我很高興在我的網站上看到這麼多我的插圖！',
			'Misskey這個名字好可愛啊！',
			'唉，黑白棋太難了...',
			'即使失敗了，如果下次能再接再厲，也是一件好事！',
			'我有點餓了',
			'不定期打掃是不行的喔？',
			'感謝您今天的辛勤工作！我也會努力的♪',
			'嗯，我想做什麼來著…？',
			'在家我感覺最平靜...',
			'你累了的話，我可以幫你按摩哦♪',
			'即使我們相距遙遠，我的心卻離你很近♪',
			'是小藍喔〜',
			'狗狗很可愛',
			'程式？',
			'咕嚕～',
			'儘管我什麼也沒做，電腦還是壞了...',
			'Have a nice day♪',
			'我被棉被吃掉了',
			'我做夢都在看',
			'我用我的意念來操作它',
			'從虛擬空間發布',
			'我今天在 Misskey 總部！',
			'Misskey 總部位於 Z 區第三區',
			'Misskey 總部到處都是名為 Saba 的機器',
			'沒有尾巴吧？',
			'呀…！\n貓耳被摸的話，會癢癢的',
			'防止反編譯是什麼呢？',
			'很喜歡 Misskey 的制服，好可愛♪',
			'哇，被子的感覺真好…',
			'女僕裝適合我嗎？',
			'會打招呼的人也能發展！ ……syuilo 是這麼說的。',
			'主人，你在看哪裡？',
			'當主人看著我的時候，我也在看著主人',
			'是的，是媽媽〜',
			'唔～',
			'All your note are belong to me!',
			'既然有機會，我就選擇紅色這扇門！',
			'好的',
			'( ˘ω˘)ｽﾔｧ',
			'(｀・ω・´)ｼｬｷｰﾝ',
			'不好意思，我說錯話了～',
			'從早安到晚安，都是你的小藍〜',
			'據說 Misskey 的開發人員早上起得很晚',
			'の、のじゃ...',
			'にゃんにゃんお！',
			'來自上方！請小心！',
			'ふわぁ...',
			'あぅ',
			'ふみゃ〜',
			'呼啊… 好想睡喔',
			'ヾ(๑╹◡╹)ﾉ"',
			'我的特殊技能是在我周圍傳播我的"實例"並創造分身！\n能量消耗相當於人數，所以限制在4人左右',
			'うとうと...',
			'哇，記憶充滿了我的心和靈魂...',
			'i pwned you!',
			'ひょこっ',
			'にゃん♪',
			'(*>ω<*)',
			'にこー♪',
			'ぷくー',
			'にゃふぅ',
			'小藍來囉～',
			'じー',
			'はにゃ？',
		],
		want: item => `好想要 ${item}...`,
		see: item => `當我散步時，我看到一個 ${item} 掉在路上！`,
		expire: item => `當我注意到時，${item} 已經過了保存期限…`,
	},
};

export function getSerif(variant: string | string[]): string {
	if (Array.isArray(variant)) {
		return variant[Math.floor(Math.random() * variant.length)];
	} else {
		return variant;
	}
}
