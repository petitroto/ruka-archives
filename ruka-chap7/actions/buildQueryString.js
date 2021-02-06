  /**
   * 商品検索のクエリ文字列を作成してtemp.queryStrへ保存
   * @title 商品検索クエリ構築
   * @category Custom
   * @author nakmas
   */
  const buildQueryString = async () => {
    const { upper, lower } = event.nlu.slots

    //パラメータオブジェクトを組み立てる（境界値は範囲内とする）
    const params = {}
    if (upper) params['price__lte'] = upper.value
    if (lower) params['price__gte'] = lower.value

    //クエリ文字列化して対話メモリへ格納
    temp.queryStr = Object.keys(params)
      .map(key => `${key}=${params[key]}`).join('&')
  }

  return buildQueryString()