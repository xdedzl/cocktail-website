const cocktails = [
    {
      id: 1,
      name: "朗姆牛奶",
      description: "以朗姆酒为基础，加入鲜牛奶，口感清爽，适合任何场合。",
      ingredients: ["15ml白朗姆", "15ml黑朗姆", "15ml糖浆", "90ml鲜牛奶"],
      method: "yaohuang",
      tags: ["朗姆酒", "低酒精", "甜", "白色"],
      color: "#7EB37A",
      abv: "15%",
      origin: "自主配方",
      garnish: "无",
      glass: "长饮杯",
      image: "/images/rum-milk.jpg"
    },
    {
      id: 2,
      name: "朗姆木瓜奶",
      description: "以朗姆酒为基础，加入木瓜和牛奶，口感清爽，适合任何场合。",
      ingredients: ["木瓜", "牛奶", "金朗姆"],
      method: "木瓜搅碎，加入牛奶和金朗姆，搅拌均匀",
      tags: ["朗姆酒", "牛奶", "木瓜"],
      color: "#DAF0F4",
      abv: "20%",
      origin: "自主配方",
      garnish: "无",
      glass: "长饮杯",
      image: "/images/rum-pawpaw.jpg"
    },
    {
      id: 3,
      name: "自由古巴",
      description: "1902年，古巴人民进行了反对西班牙的独立战争",
      ingredients: ["朗姆酒", "可乐", "柠檬"],
      method: "方冰一块，朗姆酒一份，加入可乐后提拉，一瓣柠檬挤压放入杯中",
      tags: ["威士忌", "浓郁", "苦甜", "琥珀色", "古典"],
      color: "#B97233",
      abv: "?%",
      origin: "美国",
      garnish: "柠檬，橙皮",
      glass: "古典杯",
      image: "/images/cuba-libre.jpg"
    },
    {
      id: 4,
      name: "教父",
      description: "空",
      ingredients: ["威士忌45ml", "杏仁利口酒 15ml"],
      method: "在杯中搅拌均匀",
      tags: ["威士忌", "苦甜", "琥珀色"],
      color: "#B97233",
      abv: "?%",
      origin: "美国",
      garnish: "柠檬，橙皮",
      glass: "威士忌杯",
      image: "/images/god-father.jpg"
    },
    {
      id: 5,
      name: "甜教父",
      description: "甜教父",
      ingredients: ["威士忌20ml", "杏仁利口酒10ml，橙汁30ml"],
      method: "加入所有配料摇合",
      tags: ["威士忌"],
      color: "#B97233",
      abv: "?%",
      origin: "美国",
      garnish: "柠檬，橙皮",
      glass: "威士忌杯",
      image: "/images/god-father01.jpg"
    },
    {
      id: 6,
      name: "威士忌嗨棒 * HighBall",
      description: "HighBall是一系列烈酒加碳酸饮料的统称，最常见的是威士忌加苏打水，在日本特指这款，有时会加柠檬鸡尾酒的统称，",
      ingredients: ["威士忌一份", "两到四份苏打水"],
      method: "简单搅拌",
      tags: ["威士忌", "苏打水"],
      color: "#B97233",
      abv: "?%",
      origin: "美国",
      garnish: "柠檬",
      glass: "长饮杯",
      image: "/images/hightball.jpg"
    },
    {
      id: 7,
      name: "杏仁酸 | Amaretto Sour",
      description: "null",
      ingredients: ["杏仁利口酒40ml", "柠檬汁20ml", "威士忌15ml", "柠檬汁20ml", "糖浆5ml"],
      method: "简单搅拌,可以用蜂蜜替换糖浆",
      tags: ["威士忌", "杏仁利口酒", "酸"],
      color: "#B97233",
      abv: "?%",
      origin: "美国",
      garnish: "柠檬",
      glass: "古典杯",
      image: "/images/amaretto-sour.jpg"
    },
    {
      id: 8,
      name: "玛格丽特 | Margaret",
      description: "1949年，美国举行全国鸡尾酒大赛。一位洛杉矶的酒吧调酒师Jean Durasa参赛。这款鸡尾酒正是他的冠军之作。之所以命名为Margarita cocktail，是想纪念他的已故恋人Margarita。1926年，Jean Durasa去墨西哥，与Margarita相恋，墨西哥成了他们的浪漫之地。然而，有一次当两人去野外打猎时，玛格丽特中了流弹，最后倒在恋人Jean Durasa的怀中，永远离开了。于是，Jean Durasa就用墨西哥的国酒Tequila为鸡尾酒的基酒，用柠檬汁的酸味代表心中的酸楚，用盐霜意喻怀念的泪水。如今，Margarita在世界酒吧流行的同时，也成为Tequila的代表鸡尾酒[2] 。   当生活给了你柠檬的时候，记得问他要一点盐，同时再问他要点龙舌兰",
      ingredients: ["龙舌兰45ml", "君度25ml", "半个柠檬压汁"],
      method: "摇合",
      tags: ["龙舌兰", "君度", "柠檬"],
      color: "#B97233",
      abv: "?%",
      origin: "美国",
      garnish: "柠檬",
      glass: "玛格丽特杯",
      image: "/images/margaret.jpg"
    },
  ];
  
  // 所有可用标签（从鸡尾酒数据中提取）
  const allTags = [...new Set(cocktails.flatMap(cocktail => cocktail.tags))];
  
  export { cocktails, allTags };