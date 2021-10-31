  /**
   * 現在のセッションの会話ログをエスケープ済の文字列にしてtemp.chatlogに格納する
   * @title 会話ログ取得
   * @category Custom
   * @author nakmas
   */
  const makeChatlog = async () => {
    // この会話の直近100件のイベントを取得する
    const historicalEvents = await bp.events.findEvents(
      {
        botId: event.botId,
        threadId: event.threadId,
        channel: 'web'
      },
      {
        sortOrder: [{column: 'createdOn', desc: true}],
        from: 0,
        count: 100
      }
    )

    // 取得したイベントデータから、読めるテキストを作る
    const logText = historicalEvents
      .sort((a, b) => parseInt(a.id) - parseInt(b.id))
      .reduce((memo, event) => {
        if (event.event.preview) {
          const sender = event.direction === 'incoming' ? 'User' : 'Bot'
          const date = event.createdOn
          const text = event.event.preview.trim()
          memo.push({sender, date, text})
        }
        return memo
      }, [])
      .map(({sender, date, text}) => `${sender} (${date}):\n${text}`)
      .join('\n\n')

    // 文字列をエスケープして対話メモリへ格納する（前後のクォートは外す）
    temp.chatlog = JSON.stringify(logText).slice(1, -1)
  }

  return makeChatlog()
