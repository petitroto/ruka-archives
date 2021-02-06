  const axios = require('axios')

  /**
   * 現在のセッションの会話ログをエスケープ済の文字列にしてtemp.chatlogに格納する
   * @title 会話ログ取得
   * @category Custom
   * @author nakmas
   */
  const makeChatlog = async () => {
    // WebChatモジュールのREST APIから会話ログを取得
    const conversationId = event.threadId
    const userId = event.target
    const botId = event.botId
    const path = `/mod/channel-web/conversations/${userId}/${conversationId}`
    const axiosConfig = await bp.http.getAxiosConfigForBot(event.botId)
    const res = await axios.get(path, axiosConfig)

    // 取得した構造データから、読めるテキストを作る
    const logText = res.data.messages
      .reduce((memo, mes) => {
        if (mes.message_type === 'text' || mes.message_type === 'quick_reply') {
          memo.push([mes.full_name, mes.sent_on, mes.message_text])
        }
        if (mes.message_type === 'custom' && mes.payload.component === 'QuickReplies') {
          memo.push([mes.full_name, mes.sent_on, mes.payload.wrapped.text])
        }
        return memo
      }, [])
      .map(ary => `${ary[0]} (${ary[1]}):\n${ary[2]}`)
      .join('\n\n')


    // 文字列をエスケープして対話メモリへ格納する（前後のクォートは外す）
    temp.chatlog = JSON.stringify(logText)
      .slice(1)
      .slice(0, -1)
  }

  return makeChatlog()