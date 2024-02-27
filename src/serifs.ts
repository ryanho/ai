// せりふ

export default {
	core: {
		setNameOk: name => `わかりました。これからは${name}とお呼びしますね！`,

		san: 'さん付けした方がいいですか？',

		yesOrNo: '「はい」か「いいえ」しかわからないんです...',

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
				`${name}、今日もえらいです！`,
				`${name}、今日もえらいですよ～♪`
			] : [
				`今日もえらいです！`,
				`今日もえらいですよ～♪`
			],

			specify: (thing, name) => name ? [
				`${name}、${thing}てえらいです！`,
				`${name}、${thing}てえらいですよ～♪`
			] : [
				`${thing}てえらいです！`,
				`${thing}てえらいですよ～♪`
			],

			specify2: (thing, name) => name ? [
				`${name}、${thing}でえらいです！`,
				`${name}、${thing}でえらいですよ～♪`
			] : [
				`${thing}でえらいです！`,
				`${thing}でえらいですよ～♪`
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

		transferNeedDm: 'わかりました、それはチャットで話しませんか？',

		transferCode: code => `わかりました。\n合言葉は「${code}」です！`,

		transferFailed: 'うーん、合言葉が間違ってませんか...？',

		transferDone: name => name ? `はっ...！ おかえりなさい、${name}！` : `はっ...！ おかえりなさい！`,
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
		startedSettai: name => `(開始招待 ${name})`,

		/**
		 * 勝ったとき
		 */
		iWon: name => `我贏了 ${name}♪`,

		/**
		 * 接待のつもりが勝ってしまったとき
		 */
		iWonButSettai: name => `(${name}に接待で勝っちゃいました...)`,

		/**
		 * 負けたとき
		 */
		iLose: name => `我輸給 ${name}...`,

		/**
		 * 接待で負けてあげたとき
		 */
		iLoseButSettai: name => `(${name}に接待で負けてあげました...♪)`,

		/**
		 * 引き分けたとき
		 */
		drawn: name => `我跟 ${name} 的比賽不分勝負～`,

		/**
		 * 接待で引き分けたとき
		 */
		drawnSettai: name => `(${name}に接待で引き分けました...)`,

		/**
		 * 相手が投了したとき
		 */
		youSurrendered: name => `${name} 認輸`,

		/**
		 * 接待してたら相手が投了したとき
		 */
		settaiButYouSurrendered: name => `(${name}を接待していたら投了されちゃいました... ごめんなさい)`,
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

		matakondo: '有機會我們再來一次吧！',

		intro: minutes => `みなさん、数取りゲームしましょう！\n0~100の中で最も大きい数字を取った人が勝ちです。他の人と被ったらだめですよ～\n制限時間は${minutes}分です。数字はこの投稿にリプライで送ってくださいね！`,

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
		set: 'わかりました！',

		invalid: 'うーん...？',

		tooLong: '長すぎます…',

		notify: (time, name) => name ? `${name}、${time}経ちましたよ！` : `${time}経ちましたよ！`
	},

	/**
	 * リマインダー
	 */
	reminder: {
		invalid: 'うーん...？',

		doneFromInvalidUser: 'イタズラはめっですよ！',

		reminds: 'やること一覧です！',

		notify: (name) => name ? `${name}、これやりましたか？` : `これやりましたか？`,

		notifyWithThing: (thing, name) => name ? `${name}、「${thing}」やりましたか？` : `「${thing}」やりましたか？`,

		done: (name) => name ? [
			`よく出来ました、${name}♪`,
			`${name}、さすがですっ！`,
			`${name}、えらすぎます...！`,
		] : [
			`よく出来ました♪`,
			`さすがですっ！`,
			`えらすぎます...！`,
		],

		cancel: `わかりました。`,
	},

	/**
	 * バレンタイン
	 */
	valentine: {
		chocolateForYou: name => name ? `${name}、那個... 我做了巧克力，希望你能收下！🍫` : '我做了巧克力，希望你能收下！🍫',
	},

	server: {
		cpu: 'サーバーの負荷が高そうです。大丈夫でしょうか...？'
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
		post: (server_name, num) => `${server_name}に${num}件の絵文字が追加されました！`,
		emojiPost: emoji => `:${emoji}:\n(\`${emoji}\`) #AddCustomEmojis`,
		postOnce: (server_name, num, text) => `${server_name}に${num}件の絵文字が追加されました！\n${text} #AddCustomEmojis`,
		emojiOnce: emoji => `:${emoji}:(\`${emoji}\`)`
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
			'ふぇー',
			'那......像這樣......那樣做？',
			'ぼー…',
			'呼……我累了',
			'要煮味噌湯嗎？',
			'先吃晚餐嗎？還是想先洗澡呢？',
			'ふえええええ！？',
			'我很高興在我的網站上看到這麼多我的插圖！',
			'Misskey這個名字好可愛啊！',
			'唉，黑白棋太難了...',
			'即使失敗了，如果下次能再接再厲，也是一件好事！',
			'我有點餓了',
			'不定期打掃是不行的喔？',
			'感謝您今天的辛勤工作！我也會努力的♪',
			'嗯，我想做什麼來著…？',
			'在家我感覺最平靜...',
			'如果你累了，我會寵你♪',
			'即使我們相距遙遠，我的心卻離你很近♪',
			'是小藍喔〜',
			'狗狗很可愛',
			'程式？',
			'ごろーん…',
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
			'反可逆性是什麼意思？',
			'很喜歡 Misskey 的制服，好可愛♪',
			'哇，被子的感覺真好…',
			'女僕裝適合我嗎？',
			'會打招呼的人也能發展！ ……syuilo 是這麼說的。',
			'主人，你在看哪裡？',
			'當主人看著我的時候，我也在看著主人',
			'是的，是媽媽〜',
			'くぅ～ん...',
			'All your note are belong to me!',
			'既然有機會，我就選擇紅色這扇門！',
			'好的',
			'( ˘ω˘)ｽﾔｧ',
			'(｀・ω・´)ｼｬｷｰﾝ',
			'不好意思，我嚼了一下',
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
