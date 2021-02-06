  /**
   * Webのコンテキストを受け取ってuserオブジェクトへ保存
   */
  if (event.type === 'proactive-trigger') {
    const webContextString = event.payload.payload.payload.text
    bp.logger.debug(`webContextを受け取りました: ${webContextString}`)
    const webContext = JSON.parse(webContextString)
    Object.assign(event.state.user, { webContext })
    event.setFlag(bp.IO.WellKnownFlags.FORCE_PERSIST_STATE, true)
  }