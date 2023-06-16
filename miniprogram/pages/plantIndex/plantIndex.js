// pages/animalIndex/animalIndex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollHeight: 0,
    introList: [{name: '泡菜料理',list: [
      {title: '泡菜豆腐汤',desc:`<div class="content">
      <div class="section">
        <div class="title">必备原料和工具</div>
        <ul>
        <li class="item">【主料】豆腐1块、泡菜1碗</li>
        <li class="item">【辅料】五花肉50克、色拉油适量、蒜适量、香油少许</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">步骤</div>
        <ul>
        <li class="item">1.韩国泡菜切段，五花肉切片，蒜切末，豆腐切块；</li>
        <li class="item">2.锅子烧热，倒油，放入蒜切末；</li>
        <li class="item">3.放入五花肉，煸炒；放入泡菜，煸炒；倒入豆腐，简单煸炒；</li>
        <li class="item">4.倒入清水，炖20分钟左右；</li>
        <li class="item">5.放入牛肉粉，倒入香油，倒入蒜末。</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">烹饪技巧：</div>
        <ul>
        <li class="item">1.蒜切末，一部分煸炒，一部分留着最后放入汤内；</li>
        <li class="item">2.如果嗜辣，可以再放入些韩式辣椒粉；</li>
        <li class="item">3.加入清水后，炖20-30分钟，更加入味；</li>
        <li class="item">4.没有牛肉粉，用鸡精代替也可。牛肉粉是韩国主妇喜爱的一种调味品。</li>
        </ul>
      </div>
    </div>`},
      {title: '萝卜泡菜',desc:`<div class="content">
      <div class="section">
        <div class="title">必备原料和工具</div>
        <ul>
        <li class="item">【主料】白萝卜500克、梨1个</li>
        <li class="item">【调料】食盐5克、葱半根、姜1小块、蒜3瓣、辣椒粉10克、白糖5克、白醋5克</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">步骤</div>
        <ul>
        <li class="item">1.准备好所用食材，萝卜把洗净切成小块。加入盐腌制30分钟；</li>
        <li class="item">2.把葱姜、 蒜切碎。梨切碎，放入大碗中；</li>
        <li class="item">3.加入葱姜蒜碎、辣椒粉、白糖 搅拌均， 加入白醋搅拌均，成辣椒糊；</li>
        <li class="item">4.把腌制的萝卜块挤去水分，加入辣椒糊中，搅拌均匀；</li>
        <li class="item">5.放入冰箱冷藏，腌制1天口感更好；</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">烹饪技巧：</div>
        <ul>
        <li class="item">萝卜块用盐腌制后要挤去萝卜块中的水分。腌制萝卜泡菜的容器要无水无油。选用任何品种的梨都可以，家中有这种红皮的梨我就随意用了。加入半个苹果也不错呢。</li>
        </ul>
      </div>
    </div>`},
      {title: '韩式辣椒酱',desc:`<div class="content">
      <div class="section">
        <div class="title">必备原料和工具</div>
        <ul>
        <li class="item">【主料】红辣椒500g、苹果100g、大蒜100g</li>
        <li class="item">【辅料】盐30g、糖40g、味精3g、白酒1大勺</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">步骤</div>
        <ul>
        <li class="item">1.辣椒洗净晾干，去蒂；</li>
        <li class="item">2.用剪刀切成段，放入料理机；</li>
        <li class="item">3.大蒜剥好，苹果削皮，去核；</li>
        <li class="item">4.将大蒜、苹果用料理机绞碎；</li>
        <li class="item">5.分几次将辣椒用料理机绞碎；</li>
        <li class="item">6.放入盐、糖，搅拌均匀；</li>
        <li class="item">7.最后倒入白酒，搅拌均匀，装到密封的容器里；</li>
        <li class="item">8.发酵2-10天即可食用。</li>
        </ul>
      </div>
    </div>`},
      {title: '韩式泡菜炒土豆丝',desc: `<div class="content">
      <div class="section">
        <div class="title">必备原料和工具</div>
        <ul>
        <li class="item">【主料】土豆2个、韩国泡菜100g</li>
        <li class="item">【辅料】色拉油适量、韩国辣酱30g、酱油10ml、白砂糖2g、葱适量、蒜适量、香油适量、芝麻适量</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">步骤</div>
        <ul>
        <li class="item">1.准备好所有的食材；</li>
        <li class="item">2.土豆切丝清水浸泡，泡菜切丝，葱切段，蒜切末；</li>
        <li class="item">3.炒锅倒少许色拉油炒香泡菜丝；</li>
        <li class="item">4.加入一勺韩国辣酱继续翻炒；</li>
        <li class="item">5.加入土豆丝翻炒片刻；</li>
        <li class="item">6.加入一些泡菜汁翻炒；</li>
        <li class="item">7.再加入葱段和蒜末翻炒片刻；</li>
        <li class="item">8.加入一勺酱油，少许白糖；</li>
        <li class="item">9.淋入香油翻炒均匀关火；</li>
        <li class="item">10.盛入盘中后撒上熟芝麻即可。</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">烹饪技巧：</div>
        <ul>
        <li class="item">1.土豆丝清水浸泡即可去除一些淀粉也能使土豆丝不变色，炒制之后口感脆爽；</li>
        <li class="item">2.炒土豆丝的时候加入一些泡菜汁会更有味道；</li>
        <li class="item">3.盐可不用再加，泡菜和韩国辣酱都有咸味。</li>
        </ul>
      </div>
    </div>`},
      {title: '韩国泡菜炒五花肉',desc:`<div class="content">
      <div class="section">
        <div class="title">必备原料和工具</div>
        <ul>
        <li class="item">【主料】五花肉1块</li>
        <li class="item">【辅料】泡菜适量、洋葱1个、色拉油适量、酱油适量、水淀粉适量</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">步骤</div>
        <ul>
        <li class="item">1.五花肉切片，泡菜改刀成段，洋葱切片待用；</li>
        <li class="item">2.烧热过下少许油，放入五花肉煸炒；</li>
        <li class="item">3.炒香之后下洋葱片小火慢慢炒香；</li>
        <li class="item">4.加入泡菜翻炒，加坚鱼酱油调味；</li>
        <li class="item">5.泡菜的味道完全和五花肉融合之后勾芡出锅即可。</li>
        </ul>
      </div>
    </div>`},
      {title: '韩国泡菜饺子',desc: `<div class="content">
      <div class="section">
        <div class="title">必备原料和工具</div>
        <ul>
        <li class="item">【主料】饺子皮400克、韩式辣白菜200克</li>
        <li class="item">【辅料】肉末250克、鲜香菇4朵、香葱4根、油适量</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">步骤</div>
        <ul>
        <li class="item">1.肉末搅拌一下；</li>
        <li class="item">2.辣白菜切碎，加入肉末里；</li>
        <li class="item">3.香菇洗净剁碎，加到肉馅里，先搅拌均匀；</li>
        <li class="item">4.葱切末，加入肉馅里拌匀，搅拌上劲一些；</li>
        <li class="item">5.取饺子皮，放入适量肉馅包成饺子；</li>
        <li class="item">6.把全部饺子包好；</li>
        <li class="item">7.上锅蒸熟即可。</li>
        </ul>
      </div>
    </div>`},
      {title: '酱油泡菜',desc:`<div class="content">
      <div class="section">
        <div class="title">必备原料和工具</div>
        <ul>
        <li class="item">【主料】白菜瓢1Kg、萝卜500g</li>
        <li class="item">【辅料】栗子5个、梨1个、松子1大勺、水芹50个、石耳4个、香菇2个、酱油2杯、白糖2大勺、辣椒丝3g、白葱30g、蒜20g、生姜10g</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">步骤</div>
        <ul>
        <li class="item">1.把白菜瓢分半并切成3cm宽；</li>
        <li class="item">2.把萝卜切成片与白菜一起腌在酱油中，边拌匀边腌；</li>
        <li class="item">3.把梨去皮后切成与萝卜一样的大小；</li>
        <li class="item">4.栗子去皮割成扁片；</li>
        <li class="item">5.松子去三角笠，辣椒丝切成3cm大小，</li>
        <li class="item">6.水芹切成3cm大小；</li>
        <li class="item">7.香菇去楹切成银杏叶模样，石耳泡后切成丝；</li>
        <li class="item">8.白葱切成3cm长的丝，蒜生姜也切成丝；</li>
        <li class="item">9.腌在酱油里的萝卜白菜中混合别的调料放在坛子中；</li>
        <li class="item">10.加酱油份量的水，并以白糖调味，倒进去汤。</li>
        </ul>
      </div>
    </div>`},
      {title: '黄豆芽泡菜',desc: `<div class="content">
      <div class="section">
        <div class="title">必备原料和工具</div>
        <ul>
          <li class="item">【主料】黄豆芽2斤</li>
          <li class="item">【辅料】黄豆适量、红椒4个、食盐2大匙、葱3根、蒜(末)3大勺、香油2大匙、韭菜1把1匙、辣椒油半匙、白糖少许</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">步骤</div>
        <ul>
          <li class="item">1.将黄豆洗净后彻底沥乾；</li>
          <li class="item">2.加入盐拌匀后腌约12小时，再将盐水洗净沥乾备用；</li>
          <li class="item">3.将蒜洗净沥乾，韭菜、葱切段，红辣椒切片备用；</li>
          <li class="item">4.将调味料香油与材料蒜拌匀后，拌入黄豆芽中搅拌均匀；</li>
          <li class="item">5.置於容器中冷藏醃1天以上待入味即可食用，约可保存3天。</li>
        </ul>
      </div>
    </div>`},
      {title: '韩国腌韭菜',desc: `<div class="content">
      <div class="section">
        <div class="title">必备原料和工具</div>
        <ul>
          <li class="item">【主料】韭菜600g</li>
          <li class="item">【辅料】辣椒粉适量、银鱼汁适量、青梅汁适量、芝麻适量、洋葱适量、大蒜适量、胡萝卜适量</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">步骤</div>
        <ul>
          <li class="item">1.把韭菜洗好沥好水分；</li>
          <li class="item">2.把韭菜切成5-6CM长度；</li>
          <li class="item">3.胡萝卜切成丝；</li>
          <li class="item">4.洋葱，一半切成丝；</li>
          <li class="item">5.另一半洋葱切完后加点清水打汁；</li>
          <li class="item">6.泡菜用的辣椒粉、银鱼汁、青梅汁、大蒜末适量搅在一起；</li>
          <li class="item">7.切好的韭菜，洋葱，胡萝卜丝放在一起；</li>
          <li class="item">8.与做好的汁一起搅拌，上面撒点芝麻，完成。</li>
        </ul>
      </div>
    </div>`},
      {title: '韩国葱泡菜',desc:`<div class="content">
      <div class="section">
        <div class="title">必备原料和工具</div>
        <ul>
          <li class="item">【主料】香葱1捆</li>
          <li class="item">【辅料】大蒜2头、蒜瓣适量、生姜1块、江米粉1勺、辣椒粉1杯、半虾露2勺、鱼露2勺、细盐2勺、粗盐1把、白糖1勺</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">步骤</div>
        <ul>
          <li class="item">1.葱收拾干净后，用粗盐稍微腌制一下；</li>
          <li class="item">2.将大蒜泥、生姜泥、辣椒粉、虾露、鱼露、细盐、白糖、江米糊混在一起；</li>
          <li class="item">3.往葱上拌调料时，一定要轻轻的，不要用力过度，这样葱会保持完整；</li>
          <li class="item">4.调料拌均匀的葱2-3根一组，折叠一下，然后再捆上一个捆；</li>
          <li class="item">5.用剩下的调料，可以用相同的办法，腌拌很多菜（如韭菜、茼蒿等）。</li>
        </ul>
      </div>
    </div>`},
      {title: '泡菜凤爪',desc:`<div class="content">
      <div class="section">
        <div class="title">必备原料和工具</div>
        <ul>
          <li class="item">【主料】鸡爪适量<</li>
          <li class="item">【辅料】泡菜适量、香葱适量、姜片适量、料酒适量、盐适量、鸡精适量</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">步骤</div>
        <ul>
          <li class="item">1.切好姜片，香葱切成段，鸡爪解冻好，泡菜1袋；</li>
          <li class="item">2.将鸡爪洗净后，指甲剪掉，在鸡爪的脚掌中间切上一刀容易入味；</li>
          <li class="item">3.把鸡爪放入锅内，倒水没过鸡爪，加入料酒1茶勺，姜片；</li>
          <li class="item">4.盖上锅盖煮至烧开，继续烧5分钟左右；</li>
          <li class="item">5.鸡爪煮好后，捞出冲洗干净，泡在凉水泡会；</li>
          <li class="item">6.锅内倒少许油，把鸡爪沥干水分放入煎会；</li>
          <li class="item">7.再把泡菜放入炒匀；</li>
          <li class="item">8.倒入清水没过鸡爪，加入盐半小勺，料酒1勺；</li>
          <li class="item">9.盖上锅盖烧煮至汤汁变浓稠；</li>
          <li class="item">10.最后撒上少许鸡精和葱花即可。</li>
        </ul>
      </div>
    </div>`},
    ]},{name: '海鲜料理',list: [
      {title: '烤鳗鱼',desc: `<div class="content">
      <div class="section">
        <div class="title">必备原料和工具</div>
        <ul>
          <li class="item">【主料】鳗鱼1条</li>
          <li class="item">【辅料】生抽1勺、老抽1勺、白酒少许、白糖少许、胡椒粉少许、咖喱粉少许、孜然少许</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">步骤</div>
        <ul>
          <li class="item">1.海鳗鱼清洗干净，片下鱼肉；</li>
          <li class="item">2.用生抽、老抽、白酒、半勺糖等调料冉淹一下；</li>
          <li class="item">3.烧热锅子，涂一薄层油，放入淹好的肉片；</li>
          <li class="item">4.中火2分钟，翻一面；</li>
          <li class="item">5.重复这个过程2~3次，鱼肉煎香煎透就可以了。</li>
        </ul>
      </div>
    </div>`},
      {title: '韩式鱿鱼拌面',desc: `<div class="content">
      <div class="section">
        <div class="title">必备原料和工具</div>
        <ul>
          <li class="item">【主料】青红椒、洋葱、鱿鱼、料酒、面条</li>
          <li class="item">【调料】姜片、油、韩式辣椒酱、盐、白糖、生抽</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">步骤</div>
        <ul>
          <li class="item">1、青红椒、洋葱洗净，切小块。鱿鱼洗干净，去表面薄膜，切成丝。</li>
          <li class="item">2、锅中注入清水，滴入料酒和姜片，烧开后把鱿鱼焯一下。</li>
          <li class="item">3、炒锅内倒入油，热后，放入洋葱块煸炒。放入焯好的鱿鱼。</li>
          <li class="item">4、调入韩式辣椒酱、盐、白糖、生抽，青红椒块，翻炒均匀。</li>
          <li class="item">5、面条煮熟。面条过凉开水，拌上炒好的鱿鱼即可。</li>
        </ul>
      </div>
    </div>`},
      {title: '韩国酱螃蟹',desc: `<div class="content">
      <div class="section">
        <div class="title">必备原料和工具</div>
        <ul>
          <li class="item">【主料】海蟹适量</li>
          <li class="item">【辅料】当归少许、甘草少许、辣椒4条、酱油300ml、糖浆20g、大蒜3瓣、生姜3个15g、水400ml、清酒100ml</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">步骤</div>
        <ul>
          <li class="item">1.用料理刷子把蟹的各个角落洗干净；</li>
          <li class="item">2.在锅里放入水、酱油、清酒、糖浆、大蒜、生姜、辣椒之后煮；</li>
          <li class="item">3.沸腾之后把火稍关小，继续煮10分钟左右，搅拌让酱汁冷却；</li>
          <li class="item">4.在容器中将蟹的肚子部位朝上放进去，浇上酱汁；</li>
          <li class="item">5.腌制冷藏2日后，把汤汁滗出来放入锅中煮至沸腾；</li>
          <li class="item">6.把火关掉让汤汁冷却，之后再浇在蟹上面；</li>
          <li class="item">7.放入冰箱再冷藏2～3日就可以食用。</li>
        </ul>
      </div>
    </div>`},
      {title: '辣焖明太鱼汤',desc: `<div class="content">
      <div class="section">
        <div class="title">必备原料和工具</div>
        <ul>
          <li class="item">【主料】明太鱼1条</li>
          <li class="item">【辅料】豆1个、小米椒3个、大葱一段、姜丝适量、蒜2瓣、韩式辣椒酱一勺、十三香适量、八角1个、蚝油半勺、糖1大勺、醋一勺、盐适量</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">步骤</div>
        <ul>
          <li class="item">1.明太鱼清理干净切段，其它辅料切丝切块处理；</li>
          <li class="item">2.姜蒜爆香，明太鱼稍微煎一下；</li>
          <li class="item">3.明太鱼定型后加入土豆块稍微翻炒；</li>
          <li class="item">4.加一勺料酒，然后加水；</li>
          <li class="item">5.用十三香、八角、蚝油、辣椒酱、糖、醋、盐调味，加入小迷椒段；</li>
          <li class="item">6.大火烧开小火焖15分钟，出锅前加葱段，香菜即可。</li>
        </ul>
      </div>
    </div>`},
      {title: '烤秋刀鱼',desc: `<div class="content">
      <div class="section">
        <div class="title">必备原料和工具</div>
        <ul>
          <li class="item">【主料】秋刀鱼2条</li>
          <li class="item">【辅料】粗盐10克、柠檬1个、黑胡椒少许、蜂蜜5毫升</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">步骤</div>
        <ul>
          <li class="item">1.秋刀鱼去除内脏鱼腮，洗净沥干，用刀在鱼身上划几刀以便腌制入味；</li>
          <li class="item">2.柠檬切半，一半用来挤汁，一半切片备用；</li>
          <li class="item">3.用粗盐抹在秋刀鱼上，并洒上少许黑胡椒碎粒；</li>
          <li class="item">4.挤入少许柠檬汁，涂抹均匀后腌30分钟左右，放冰箱低温腌制；</li>
          <li class="item">5.蜂蜜加适量水搅拌均匀备用；</li>
          <li class="item">6.烤箱预热200度，烤盘垫一张锡纸；</li>
          <li class="item">7.将腌制好的秋刀鱼放在烤网上，上面放两片柠檬片，送入烤箱烘烤10分钟；</li>
          <li class="item">8.取出给鱼翻个面，刷上一层蜂蜜水，再继续烘烤10分钟；</li>
          <li class="item">9.烤至秋刀鱼表皮金黄微焦即可。</li>
        </ul>
      </div>
    </div>`},
      {title: '秋刀鱼泡菜汤',desc:  `<div class="content">
      <div class="section">
        <div class="title">必备原料和工具</div>
        <ul>
          <li class="item">【主料】秋刀鱼2条、韩国泡菜100g、豆腐100g</li>
          <li class="item">【辅料】香油适量、盐适量、白糖2g、韩国辣椒酱15g、鸡精少许、洋葱30g、韩国烧酒15ml、红辣椒1个、青辣椒1个、大葱1根</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">步骤</div>
        <ul>
        <li class="item">1.准备好所有的食材；</li><li class="item">
        2.秋刀鱼去头内脏洗净切段；</li><li class="item">
        3.锅中加少许油放入秋刀鱼稍微煎至备用；</li><li class="item">
        4.泡菜切片，豆腐切块，青红辣椒切圈，洋葱大葱切丝；</li><li class="item">
        5.炒锅倒少许香油炒香大葱和洋葱；</li><li class="item">
        6.放入泡菜翻炒出香味；</li><li class="item">
        7.然后把炒过的泡菜放入炖锅加入秋刀鱼；</li><li class="item">
        8.加入韩国烧酒，加入辣椒酱；</li><li class="item">
        9.加少许白糖炖烧15分钟；</li><li class="item">
        10.然后再加入豆腐继续炖烧10分钟；</li><li class="item">
        11.加入少许鸡精，盐调味；</li><li class="item">
        12.最后放入青红辣椒关火。</li>
        </ul>
      </div>
    </div>`},
      {title: '海鲜葱饼',desc: `<div class="content">
      <div class="section">
        <div class="title">必备原料和工具</div>
        <ul>
          <li class="item">【主料】葱100g、各种海鲜100g、面粉120g</li>
          <li class="item">【辅料】水230g、红辣椒1个、鸡蛋1个、盐少许、胡椒少许</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">步骤</div>
        <ul>
        <li class="item">1.先在洗净的海鲜上面撒上盐和胡椒，放到一边；</li><li class="item">
        2.葱大概以7cm的长度切成三半，打散一个鸡蛋</li><li class="item">
        3.面粉和水搅拌在一起，再撒入适量盐；</li><li class="item">
        4.葱放入面糊里，沾上面糊；</li><li class="item">
        5.微火，锅里倒入油，油热了倒入面糊；</li><li class="item">
        6.放入葱和各种海鲜；</li><li class="item">
        7.上面再倒一点面糊，微火盖上锅盖慢慢烤15-20分钟左右，期间可以翻过来；</li><li class="item">
        8.烤得差不多时在上面浇上蛋液，烤到蛋液完全熟为止即完成；</li><li class="item">
        9.一勺酱油加一勺醋加一勺水搅拌在一起，撒点芝麻等就完成了海鲜葱饼的酱料。</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">小窍门：</div>
        <ul>
        <li class="item">1.一定要微火，火大了会烤焦饼的底面，而上面不会熟；</li><li class="item">
        2.葱一定要均匀得铺一层在面糊上面，这样会烤得快。</li>
        </ul>
      </div>
    </div>`},
      {title: '八爪鱼火锅',desc:  `<div class="content">
      <div class="section">
        <div class="title">必备原料和工具</div>
        <ul>
          <li class="item">【主料】章鱼500g </li>
          <li class="item">【辅料】韩式辣椒酱适量、生抽适量、盐适量、白糖适量、娃娃菜适量、口蘑适量、苦菊适量、蛤喇适量、辣椒适量、耗油适量</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">步骤</div>
        <ul>
        <li class="item">1.章鱼洗净；</li><li class="item">
2.切块，放入韩式辣椒酱、白糖、盐、生抽腌渍；</li><li class="item">
3.锅子烧开水，放入蛤喇，煮开；</li><li class="item">
4.将口蘑切片、苦菊、娃娃菜和大葱码在锅内；</li><li class="item">
5.放上腌渍的章鱼和煮开的蛤喇；</li><li class="item">
6.锅子放水，放入耗油、鸡精，煮开；</li><li class="item">
7.将汤汁倒入锅内，点燃酒精；</li><li class="item">
8.盖盖子，煮开，即可食用。</li>
        </ul>
      </div>
    </div>`},
    ]},{name: '特色美食',list: [
      {title: '韩式炸酱面',desc:  `<div class="content">
      <div class="section">
        <div class="title">必备原料和工具</div>
        <ul>
          <li class="item">【主料】五花肉、圆白菜、胡萝卜、红彩椒、拉面(适量)</li>
          <li class="item">【辅料】葱姜、溏心鸡蛋、腌萝卜(适量)</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">步骤</div>
        <ul>
        <li class="item">1.圆白菜洗净，切丝再改刀切小块；</li><li class="item">
2.五花肉切小丁待用；</li><li class="item">
3.胡萝卜洗净去皮、红彩椒洗净去蒂，切小丁，葱姜切碎末；</li><li class="item">
4.半袋甜面酱加辣椒粉1/3勺、酱油2勺，混合均匀待用；</li><li class="item">
5.锅置火上少许油烧热，下入葱姜末爆香；</li><li class="item">
6.下入胡萝卜丁、五花肉丁小火煸炒；</li><li class="item">
7.煸至肥肉丁微黄出油；</li><li class="item">
8.倒入甜面酱，顺一个方向不停搅拌；</li><li class="item">
9.中小火8-10分钟，倒入圆白菜、彩椒丁继续翻炒；</li><li class="item">
10.让酱充分裹在菜上，炒到酱的表面有油亮即可；</li><li class="item">
11.平底锅抹适量油，放入鸡蛋器打入鸡蛋小火将鸡蛋煎至凝固；</li><li class="item">
12.将甜萝卜切成薄片；</li><li class="item">
13.锅中水烧沸，放入拉面搅散后煮至断生，捞出盛在碗内；</li><li class="item">
14.面碗中添上炸酱、放上煎好的溏心鸡蛋即可。</li>
        </ul>
      </div>
    </div>`},
      {title: '韩式土豆饼',desc: `<div class="content">
      <div class="section">
        <div class="title">必备原料和工具</div>
        <ul>
          <li class="item">【主料】土豆250克（去皮重量）、面粉50克</li>
          <li class="item">【辅料】洋葱50克、鸡蛋1只、青红美人椒各1只、小葱2根、花生油少量、盐适量、生抽2大勺、糖1小勺</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">步骤</div>
        <ul>
        <li class="item">1.土豆去皮用清水浸泡防止氧化变黑；</li><li class="item">
        2.取刨子快速将土豆擦成茸，注意不要擦伤手；</li><li class="item">
        3.擦好的土豆还是有些氧化变黄；</li><li class="item">
        4.接着在土豆碗中将洋葱擦成茸；</li><li class="item">
        5.加入面粉、鸡蛋、盐、糖，拌匀成土豆面糊；</li><li class="item">
        6.小葱切花，青红椒一部分切圈，一部分切小细丁；</li><li class="item">
        7.将生抽入小碟中，加入葱花和青红椒丁拌匀成蘸汁；</li><li class="item">
        8.平底锅入少油开小火，将方形模具入锅中，将土豆糊入模具中摊成小方饼，稍一定型后抽出模具再摊下一个饼；</li><li class="item">
        9.将青红椒圈按照自己的喜好摆在土豆饼上；</li><li class="item">
        10.一面煎黄定型后翻面煎制，两面全部煎金黄色即可；</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">烹饪技巧：</div>
        <ul>
        <li class="item">1.土豆用刨子擦成泥会使土豆更具韧性，吃起来口感更好呢；</li><li class="item">
2.制作土豆面糊时动作要稍快些，以防止土豆氧化。不过洋葱具有防氧化的作用，所以在加入洋葱后土豆泥即刻呈现淡黄色。调好的土豆面糊最好一次性快速全部煎好，虽然洋葱有抗氧化作用，但是时间放长了面糊依然会变深哟； </li><li class="item">
3,煎土豆饼要小火，否则很易煎糊；</li><li class="item">
4.没有方形模具没有关系，直接将面糊舀一点入锅中摊成圆形也是非常好看的。如果面糊粘住模具了没有关系，用小刀在边缘处切割一下就脱离了。</li>
        </ul>
      </div>
    </div>`},
      {title: '韩式蛋包饭',desc:  `<div class="content">
      <div class="section">
        <div class="title">必备原料和工具</div>
        <ul>
          <li class="item">【主料】米饭1碗、鸡蛋2个</li>
          <li class="item">【辅料】胡萝卜50克、火腿50克、玉米(鲜)30克、豌豆(鲜)30克、食盐1茶匙、淀粉5克、番茄酱1汤匙、胡椒粉1/3茶匙、植物油2汤匙</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">步骤</div>
        <ul>
        <li class="item">1.去皮胡萝卜和火腿肠一起切细；</li><li class="item">
2.玉米粒和青豌豆分别焯水备用；</li><li class="item">
3.两个鸡蛋加1/2茶匙盐打散成蛋液；</li><li class="item">
4.准备一碗米饭；</li><li class="item">
5.锅中放1汤匙植物油，下入胡萝卜丁炒至断生后加入火腿丁；</li><li class="item">
6.加玉米粒和豌豆粒翻炒；</li><li class="item">
7.倒入米饭翻炒均匀；</li><li class="item">
8.待米饭彻底炒散，颗粒分明时加入1/2茶匙盐和1/3茶匙胡椒粉调味，再调入一汤匙番茄酱炒匀即可；</li><li class="item">
9.取少许淀粉加清水淀匀倒入蛋液中，拌匀；</li><li class="item">
10.另取干净平底锅，加1汤匙植物油，倒入蛋液摊成蛋皮；</li><li class="item">
11.待蛋液即将凝固时，在蛋皮一侧放入炒好的米饭；</li><li class="item">
12.将蛋皮对折，整好形，将边缘压紧，略煎定型出锅即可；</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">烹饪技巧：</div>
        <ul>
        <li class="item">1.如果不喜欢米饭带甜味的，步骤8里加番茄酱的过程省略即可；</li><li class="item">
2.步骤11，在蛋皮还没有完全凝固时操作更方便；</li><li class="item">
3.如果收口处的蛋液已经完全凝固，对折时沿着蛋皮边缘再抹一圈蛋液，然后按紧略煎就可以定型了；</li><li class="item">
4.另外，上桌前表面挤上番茄酱装饰会更漂亮。 </li>
        </ul>
      </div>
    </div>`},
      {title: '韩式炸鸡',desc:  `<div class="content">
      <div class="section">
        <div class="title">必备原料和工具</div>
        <ul>
          <li class="item">【主料】鸡翅15个、鸡蛋1个</li>
          <li class="item">【辅料】芝麻、葱、盐、糖、蜂蜜、韩式辣酱、番茄酱、面粉、酱油、蒜粉、黑椒末（适量）</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">步骤</div>
        <ul>
        <li class="item">1.鸡翅洗净拿厨房纸吸干水；</li><li class="item">
        2.用少许盐、糖、酱油、鸡粉、胡椒粉、料酒，黑椒末、蒜粉腌制1小时以上；</li><li class="item">
        3.用一只鸡蛋、少许水和35克面粉混合至粉浆状；</li><li class="item">
        4.先将鸡翅裹上面粉，再沾粉浆；</li><li class="item">
        5.下锅炸至金黄色，取出，放置5分钟再下锅小火炸5分钟；</li><li class="item">
        6.酱用一勺半的辣酱、2勺蜂蜜、1勺糖、2勺酱油、3勺番茄酱和少许水混合；</li><li class="item">
        7.在平底锅中煮至粘稠，再把鸡翅倒进锅中拌匀；</li><li class="item">
        8.葱切成丝状，撒上芝麻，即可。</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">烹饪技巧：</div>
        <ul>
        <li class="item">1.鸡翅炸两次可以把油逼出来并且更脆，所以不可以省略；</li><li class="item">
2.酱的味道可以根据自己口味来调，喜欢辣的可以多加辣酱；</li><li class="item">
3.粉浆如果不够粘稠可以多加点面粉，太粘可以多加点水。</li>
        </ul>
      </div>
    </div>`},
      {title: '韩式辣鸡爪',desc: `<div class="content">
      <div class="section">
        <div class="title">必备原料和工具</div>
        <ul>
          <li class="item">【主料】鸡爪250g</li>
          <li class="item">【辅料】芝麻少许、番茄酱适量、辣椒面适量、韩国辣酱适量、蒜子少许、生抽适量、白糖少许</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">步骤</div>
        <ul>
        <li class="item">1.小火炒熟芝麻备用；</li><li class="item">
2.水烧开，鸡爪煮10分钟；</li><li class="item">
3.捣蒜泥，热油，炒香蒜泥；</li><li class="item">
4.加入鸡爪翻炒；</li><li class="item">
5.倒入韩国辣酱、番茄酱，辣椒面、生抽、白糖，翻炒两分钟；</li><li class="item">
6.加入一碗水，小火，拌上芝麻即可。</li>
        </ul>
      </div>
    </div>`},
      {title: '韩式南瓜粥',desc: `<div class="content">
      <div class="section">
        <div class="title">必备原料和工具</div>
        <ul>
          <li class="item">【主料】南瓜200克、糯米粉20克</li>
          <li class="item">【辅料】淡奶油适量</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">步骤</div>
        <ul>
        <li class="item">1.南瓜去皮去籽切小块备用；</li><li class="item">
2.南瓜上蒸锅，大火蒸10分钟至熟透；</li><li class="item">
3.待南瓜略凉一点，放入料理机打至糊状，至不见任何颗粒感即可；</li><li class="item">
4.接着把南瓜糊盛入小锅，糯米粉加少量水调匀，缓缓倒入南瓜糊中；</li><li class="item">
5.小火煮，一边煮一边搅拌至均匀顺滑，到煮开至翻泡泡迅速关火；</li><li class="item">
6.吃的时候，加入些淡奶，搅拌一下即可。</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">小窍门：</div>
        <ul>
        <li class="item">1.喜欢多些有趣口感的可以加些小汤圆同煮；</li><li class="item">
        2.不建议再放糖，如果觉得甜度不够，可以再加些葡萄干或坚果类的增加口感。</li>
        </ul>
      </div>
    </div>`},
      {title: '韩式刀削面',desc:  `<div class="content">
      <div class="section">
        <div class="title">必备原料和工具</div>
        <ul>
          <li class="item">【主料】刀削面150克、鸡肉100克、韩国泡菜100克</li>
          <li class="item">【辅料】盐少许、食用油适量、高汤150毫升、辣椒酱1大勺、鸡精少许、白糖少许、蒜末2瓣</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">步骤</div>
        <ul>
        <li class="item">1.准备材料：鸡肉、刀削面、辣白菜；</li><li class="item">
2.鸡肉洗净切片、加盐和湿淀粉，抓匀腌制一会儿；</li><li class="item">
3.起锅烧水，放入刀削面煮至断生，捞起盛盘；</li><li class="item">
4.另起锅倒油，加入蒜末、辣椒酱炒香；</li><li class="item">
5.加高汤，放入盐、白糖、鸡粉调味；</li><li class="item">
6.中火煮开后，放入鸡肉片煮熟；</li><li class="item">
7.最后放入韩式泡菜和刀削面，略煮至味道融合，关火盛出。</li>
        </ul>
      </div>
    </div>`},
      {title: '韩国乌冬面',desc: `<div class="content">
      <div class="section">
        <div class="title">必备原料和工具</div>
        <ul>
          <li class="item">【主料】韩国泡菜100g、牛肉50g、乌冬面1包</li>
          <li class="item">【辅料】洋葱丝半个、油盐适量、淀粉适量、生抽适量、料酒适量、胡椒粉适量</li>
        </ul>
      </div>
      <div class="section">
        <div class="title">步骤</div>
        <ul>
        <li class="item">1.牛肉丝中放入盐、生抽、料酒、淀粉和胡椒粉，抓拌均匀，腌制几分钟；</li><li class="item">
2.烧热锅， 放适量油，下入洋葱丝煸炒；</li><li class="item">
3.洋葱煸炒出香味后下入泡菜丝一起翻炒；</li><li class="item">
4.翻炒几下后倒入适量的高汤或者水煮开；</li><li class="item">
5.下入乌冬面，用筷子划散；</li><li class="item">
6.再下入腌制好的牛肉丝去煮；</li><li class="item">
7.牛肉丝变色后加入盐和胡椒粉调味；</li><li class="item">
8.盛入碗中， 再将泡菜放在上面点缀一下。</li>
        </ul>
      </div>
      <div class="section">
      <div class="title">小贴士：</div>
      <ul>
      <li class="item">1.牛肉丝提前腌制， 牛肉须搭配上洋葱丝；</li><li class="item">
2.泡菜煸炒过香辣味道更能恢复出来，如果喜欢味道更浓烈些，可以加入点韩国辣酱；</li><li class="item">
3.乌冬面本身是熟的，不宜煮过长的时间。</li>
      </ul>
    </div>
    </div>`}
    ]}],
    repreList: [
      {title: '石锅拌饭',url: 'cloud://cloud1-0gbl62895c1a16cd.636c-cloud1-0gbl62895c1a16cd-1309406244/b1.jpeg',desc: '“石锅拌饭”又称“韩国拌饭”、“石碗拌饭”， 它的发源地为韩国全州，后来演变为韩国的代表性食物。韩国全州的石锅拌饭名闻遐迩，拌饭里蕴涵着“五行五脏五色”的原理。在石锅锅内放入米饭及菜肴，再烤到锅底有一层锅巴，喷香诱人，石锅是陶做成的，厚重的黑色陶锅可直接拿到炉具烹煮，而且保温效果好。细嚼慢咽的人可安心享用，不用怕饭菜冷掉。石锅拌饭材料并不新奇特别，主要为米饭、肉类、鸡蛋，以及黄豆芽、菌菇类和各式野菜，菜的种类并无一定，采用当季最对味的季节时令蔬菜去调配即可。'},
      {title: '韩国泡菜',url: 'cloud://cloud1-0gbl62895c1a16cd.636c-cloud1-0gbl62895c1a16cd-1309406244/b2.jpeg',desc: '韩国泡菜是最具韩国代表性的传统料理之一，也是典型的发酵食品。位处高纬度的韩国由于冬天很长，气候很冷，蔬菜生长的季节较短，每年冬天，韩国家庭主妇必须为家人准备过冬食品。秋天时将白菜、黄瓜和萝卜等蔬菜加以腌制，因此冬天时家家户户都有各种各样的泡菜。除了白菜以外，各种带叶青菜，如萝卜、韭菜、香葱、黄瓜等也可以作为泡菜的主要原料。根据不同的口味，肉或海鲜也可以用在做辅料。这样风味各异，制作方法各异，就使泡菜的种类达100多种。韩国泡菜还用于各种料理。'},
      {title: '韩国烤肉',url: 'cloud://cloud1-0gbl62895c1a16cd.636c-cloud1-0gbl62895c1a16cd-1309406244/b3.jpeg',desc: '韩国烤肉，韩国料理中一道大菜。韩国烤肉主要以牛肉为主，牛里脊、牛排、牛舌、牛腰，还有海鲜、生鱼片等都是韩国烧烤的美味，尤以烤牛里脊和烤牛排最有名，其肉质鲜美爽嫩。韩国烤肉吃法有别于中式烤肉和巴西烤肉，其吃法很特别，吃肉时候要包着生菜叶或苏子叶吃。通常是在手里摊开生菜叶，也可以重叠地铺上苏子叶，夹一块烤肉，夹一点辣椒，抹一点酱，也可以随意地放上泡菜和米饭，最后收拢菜叶，裹成一团即可食用，生菜叶或苏子叶的清爽、烤肉和着辣酱等作料的浓香，使人们享受美食带来的快感。'},
      {title: '辣年糕',url: 'cloud://cloud1-0gbl62895c1a16cd.636c-cloud1-0gbl62895c1a16cd-1309406244/b4.jpeg',desc: '韩式炒年糕又名辣炒年糕是朝鲜半岛的传统美食，在古时候是只有君王才能吃到的佳肴。如果加上特制的面条、煮熟的鸡蛋、方便面等材料，味道更加可口。它有很多种做法，不同的做法用到不同的原料，每一种都美味可口，营养丰富。炒年糕一直以来被认为是街头美食的代表。近年来，韩国美食在全世界范围内得到广泛的宣传，炒年糕也以它高营养、味道可口的特点被赋予了很高的评价，毫不逊色于世界上的各种珍味。炒年糕逐渐被定义为高级饮食，在中国也很受欢迎。甜甜辣辣的炒年糕，是韩国年轻人的最爱。'},
      {title: '大酱汤',url: 'cloud://cloud1-0gbl62895c1a16cd.636c-cloud1-0gbl62895c1a16cd-1309406244/b5.jpeg',desc: '大酱汤源自朝鲜半岛，是上至总统，下至平民百姓，日常餐桌必不可少的传统菜品。大酱汤之所以从古至今在朝鲜半岛源远流长，并在现代社会走向世界，不仅仅是一种生活惯性使然，更因为其的确营养丰富、味美可口、操作方便、原料简单。大酱汤的主要原料是大酱，而大酱的主要原料黄豆中含有的异戊醛是一种天然的植物激素，它除了能预防乳腺癌外，还能降低与激素相关的各种肿瘤的发病率。'},
      {title: '紫菜包饭',url: 'cloud://cloud1-0gbl62895c1a16cd.636c-cloud1-0gbl62895c1a16cd-1309406244/b6.jpeg',desc: '紫菜包饭是一道十分常见的韩式料理，与日本料理中的寿司十分相似，但要简单很多。常见的做法是用紫菜将煮熟的米饭与蔬菜、肉类等包卷起来。韩国的紫菜包饭其实是由日本寿司演变过来的。而日本寿司，大约在西元三世纪由中国沿海地方传至日本，原先只是以盐腌制的咸鱼，后来改为以米饭腌鱼，制成后将鱼与米饭一起食用，这即是现今寿司料理的前身。'},
      {title: '韩国冷面',url: 'cloud://cloud1-0gbl62895c1a16cd.636c-cloud1-0gbl62895c1a16cd-1309406244/b7.jpeg',desc: '韩国冷面也叫朝鲜冷面，是韩国传统美食之一。据李朝朝鲜后期的世食风俗记史料《东国世食记》记载：冷面发源于19世纪中叶朝鲜的平壤和咸兴地区。因此，韩国冷面分平壤冷面和咸兴冷面。平壤冷面和咸兴冷面的最显著的区别：平壤冷面是为加汤食用的“水冷面”，而咸兴冷面是用辣椒酱做调料的“拌冷面”。韩国冷面在吃法上也有讲究，韩国冷面在食用时要加芥辣，其理由是因为冷面的主要材料荞麦为胃寒食物，加上汤料也是冰的，容易引起胃寒，因此加芥辣是为了让食用者身体恢复温暖。'},
      {title: '韩国海鲜锅',url: 'cloud://cloud1-0gbl62895c1a16cd.636c-cloud1-0gbl62895c1a16cd-1309406244/b8.jpeg',desc: '韩国海鲜火锅以辣口和甜口居多，多喜欢用章鱼，鱿鱼等海鲜食材，再就是各种贝类加上五花肉一起涮火锅。韩国地理位置临海，水产业发达，海鲜鱼类种类丰富，海鲜锅是韩国人民喜爱的食物。寒冷的冬日，与家人朋友围坐在一起喝上一口这样浓浓的海鲜汤，全身都暖意浓浓。'},
      {title: '参鸡汤',url: 'cloud://cloud1-0gbl62895c1a16cd.636c-cloud1-0gbl62895c1a16cd-1309406244/b9.jpeg',desc: '参鸡汤是韩国一道非常著名颇具特色的菜肴名汤，肉类食品和滋补类食品的完美组合，最具代表性的韩国宫中料理之一。参鸡汤不仅不油腻，且清爽鲜美，营养价值极高，带有一股药香。鸡肉炖得极烂，筷子一夹之下骨肉分离，肉香中还带有米香、药香。鸡肚里面填着满满的糯米，汲取鸡汤精华的糯米比嫩鸡肉更要美味。同时鸡肚里面还有大枣、板栗、枸杞、高丽参等配料营养丰富。它以做法简便、滋味香浓而广受人们的喜爱。'},
      {title: '韩式拌杂菜',url: 'cloud://cloud1-0gbl62895c1a16cd.636c-cloud1-0gbl62895c1a16cd-1309406244/b10.jpeg',desc: '韩剧中经常见到主妇们用拌杂菜招待客人，客人们吃了也特满足。这道卖相诱人的韩国家常小菜，它不仅味道鲜美、营养丰富，其做法也很简单的，既可以当菜吃也可以当主食。拌杂菜是一道由菠菜、黄瓜、粉丝等食材制成的食品。杂菜中的菠菜含有丰富的维生素A 、维生素C，并且还有丰富的钙和铁，很适合正在长身体的孩子食用。 '},
    ],
    selectList: [],
    categoryIndex: 0,
    categoryIndex1: 0,
    selectDesc: '',
    showLevel: '0'
  },

  levelTap(event){
    const index = event.target.dataset.index
    const list = this.data.introList[0].list
    const url = this.data.repreList[0].url
    const desc = this.data.repreList[0].desc
    if(index==='0'){
      this.setData({
        showLevel: index,
        selectList: list
      })
    }else{
      this.setData({
        showLevel: index,
        selectDesc: desc,
        selectUrl: url
      })
    }
  },

  bindCategoryTap(event){
    const index = event.currentTarget.dataset.index
    const list = event.currentTarget.dataset.item.list
    this.setData({
      categoryIndex: index,
      selectList: list
    })
  },

  handleClick(event){
    let item = event.currentTarget.dataset.item;
    wx.setStorage({
      key: item.title,
      data: item.desc
    })
    wx.navigateTo({
      url: '/pages/cookieDetail/cookieDetail?title='+item.title,
    })
  },

  bindCategoryDesc(event){
    const index = event.currentTarget.dataset.index
    const url = this.data.repreList[index].url
    const desc = this.data.repreList[index].desc
    this.setData({
      categoryIndex1: index,
      selectDesc: desc,
      selectUrl: url
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取系统信息
    wx.getSystemInfo({
      success: res=> {
          this.setData({
              scrollHeight: res.windowHeight - 42,
          });
      }
    });
    const list = this.data.introList[0].list
    this.setData({
      selectList: list
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})