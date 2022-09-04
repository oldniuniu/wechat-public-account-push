export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  APP_ID: "wxe357760053789300",

  // 公众号APP_SECRET
  APP_SECRET: "b499a6fbdfea3c7a4c9c520f9f0ca231",


  USERS: [

    {
      name: "小夏老师", 
      id: "oX4316OeKwuMEurQnX0c2-kQL7Hs",
      useTemplateId: "	-c3NYnrRWciFgTde5qwC1wtxvlU3c0MqNAmJYsVBgqs",
      province: "宁夏",
      city: "银川",
      openUrl: "https://weibo.com/newlogin?tabtype=weibo&gid=102803&url=https%3A%2F%2Fweibo.com%2F"
    }, 

  ],

  /**
   * 回调消息 相关，主要用来展示发送是否成功/失败的数据
   */

  // 回调消息模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "oX4316OeKwuMEurQnX0c2-kQL7Hs",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "自己",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oX4316OeKwuMEurQnX0c2-kQL7Hs",
    }, 
  ],
    
  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "宁夏",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "银川",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
   * tpye必须填！ 只能 “生日” 和 “节日” 二选一!
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   */
  FESTIVALS: [
    {"type": "生日", "name": "美女", "year": "1998", "date": "01-11"},
    {"type": "节日", "name": "高考", "year": "2023", "date": "06-07"},
    {"type": "生日", "name": "李四", "year": "1996", "date": "09-31"},
    {"type": "节日", "name": "被搭讪纪念日", "year": "2021", "date": "09-01"},
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字; 
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 2,

  

  /** 插槽 */


  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    {"keyword": "encourage_oneself", contents: "按时吃饭，不要熬夜"},
   
}
