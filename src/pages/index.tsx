import React, { useState } from 'react'
import { PageProps } from 'gatsby'
// styled components
import Layout from '../components/layout'
import {
  IndexBanner,
  IndexContainer,
  IndexRecommendItem,
  IndexRecommendList
} from '../styles/pages'

interface IRecommendItem {
  id: number
  name: string
  alias: string
  desc: string
  cover: string
  thumb: string
  path: string
}

const IndexPage: React.FC<PageProps> = () => {
  const [ currentRecommend, setCurrentRecommend ] = useState<IRecommendItem>({
    id: 0,
    name: '进击的巨人 最终季',
    alias: '進撃の巨人 The Final Season',
    desc: '曾几何时，世界上突然出现无数身形庞大的巨人，普通人类的生命受到前所未有的威胁。为了保护自身安全，最后的人类筑起三座高墙：玛莉亚、露丝和希娜。人类迎来了长达一个世纪的和平岁月，却也让自己成为圈养在笼中的鸟儿，屈辱地失去自由。845年，高达60米的超大型巨人和铠之巨人登场， 摧毁了最外层的玛莉亚之壁，也惊醒了人类似乎永远不会苏醒的长梦。',
    cover: require('../assets/images/jinji.jpg'),
    thumb: require('../assets/images/index/jinji.jpg'),
    path: '/series/jinjidejuren'
  })

  const handleHoverItem = (item: IRecommendItem) => {
    setCurrentRecommend(item)
  }

  const list = [
    {
      id: 0,
      name: '进击的巨人 最终季',
      alias: '進撃の巨人 The Final Season',
      desc: '曾几何时，世界上突然出现无数身形庞大的巨人，普通人类的生命受到前所未有的威胁。为了保护自身安全，最后的人类筑起三座高墙：玛莉亚、露丝和希娜。人类迎来了长达一个世纪的和平岁月，却也让自己成为圈养在笼中的鸟儿，屈辱地失去自由。845年，高达60米的超大型巨人和铠之巨人登场， 摧毁了最外层的玛莉亚之壁，也惊醒了人类似乎永远不会苏醒的长梦。',
      cover: require('../assets/images/jinji.jpg'),
      thumb: require('../assets/images/index/jinji.jpg'),
      path: '/series/jinjidejuren'
    }, {
      id: 1,
      name: '鬼灭之刃',
      alias: '鬼滅の刃',
      desc: '日本大正时期，那是一个吃人的恶鬼横行的世界，一名家人被鬼杀死，妹妹也变成了鬼的主人公炭治郎，在猎鬼人的指引下，成为了鬼猎人组织“鬼杀队”的一员，为了让妹妹祢豆子变回人类，为了讨伐杀害家人的恶鬼，为了斩断悲伤的连锁而展开了战斗。',
      cover: 'https://snsplanet.com/wp-content/uploads/2020/11/kimetsuyaiba_pc.jpg',
      thumb: 'https://kimetsu.com/anime/risshihen/ogp.jpg',
      path: '/series/jinjidejuren'
    }, {
      id: 2,
      name: '某科学的超电磁炮T',
      alias: 'とある科学の超電磁砲T',
      desc: '有 230 万人口，其中八成人口为学生的「学园都市」，是比其他地区科技更为先进，并从事「超能力开发」的特殊地区。而整座学园都市中仅有七人的等级 5 超能力者之一御坂美琴，由于她的能力与个性使然，因而被卷入了学园都市中所发生的种种事件......',
      cover: 'https://cs1.anime.dmkt-sp.jp/anime_kv/img/23/15/0/23150_1_d2.jpg?1575955853000',
      thumb: 'http://bbs.orzice.com/data/attachment/forum/portal/202003/07/6e5296b9.jpg',
      path: '/series/jinjidejuren'
    }, {
      id: 3,
      name: 'Re：从零开始的异世界生活 第二季',
      alias: 'Re:ゼロから始める異世界生活 2nd season',
      desc: '曾几何时，世界上突然出现无数身形庞大的巨人，普通人类的生命受到前所未有的威胁。为了保护自身安全，最后的人类筑起三座高墙：玛莉亚、露丝和希娜。人类迎来了长达一个世纪的和平岁月，却也让自己成为圈养在笼中的鸟儿，屈辱地失去自由。845年，高达60米的超大型巨人和铠之巨人登场， 摧毁了最外层的玛莉亚之壁，也惊醒了人类似乎永远不会苏醒的长梦。',
      cover: 'https://cs1.anime.dmkt-sp.jp/anime_kv/img/24/02/4/24024_1_d2.jpg?1608107405000',
      thumb: 'https://fukumenkei-noise.jp/wp-content/uploads/2020/11/Re-%E3%82%BB%E3%82%99%E3%83%AD%E3%81%8B%E3%82%89%E5%A7%8B%E3%82%81%E3%82%8B%E7%95%B0%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB-2nd-season.png',
      path: '/series/jinjidejuren'
    }, {
      id: 4,
      name: '异度侵入',
      alias: 'イド：インヴェイデッド ID:INVADED',
      desc: '曾几何时，世界上突然出现无数身形庞大的巨人，普通人类的生命受到前所未有的威胁。为了保护自身安全，最后的人类筑起三座高墙：玛莉亚、露丝和希娜。人类迎来了长达一个世纪的和平岁月，却也让自己成为圈养在笼中的鸟儿，屈辱地失去自由。845年，高达60米的超大型巨人和铠之巨人登场， 摧毁了最外层的玛莉亚之壁，也惊醒了人类似乎永远不会苏醒的长梦。',
      cover: 'https://cs1.anime.dmkt-sp.jp/anime_kv/img/23/17/3/23173_1_d2.jpg?1576474339000',
      thumb: 'https://www.bs11.jp/anime/img/%E3%82%A4%E3%83%89_HP.gif',
      path: '/series/jinjidejuren'
    }, {
      id: 5,
      name: '排球少年 第四季',
      alias: 'ハイキュー!! TO THE TOP ',
      desc: '曾几何时，世界上突然出现无数身形庞大的巨人，普通人类的生命受到前所未有的威胁。为了保护自身安全，最后的人类筑起三座高墙：玛莉亚、露丝和希娜。人类迎来了长达一个世纪的和平岁月，却也让自己成为圈养在笼中的鸟儿，屈辱地失去自由。845年，高达60米的超大型巨人和铠之巨人登场， 摧毁了最外层的玛莉亚之壁，也惊醒了人类似乎永远不会苏醒的长梦。',
      cover: 'https://prtimes.jp/i/33412/17/ogp/d33412-17-168568-0.jpg',
      thumb: 'https://www.mbs.jp/haikyu/images/bgz2.jpg',
      path: '/series/jinjidejuren'
    }, {
      id: 6,
      name: '我的青春恋爱物语果然有问题 第三季 完',
      alias: 'やはり俺の青春ラブコメはまちがっている。完',
      desc: '曾几何时，世界上突然出现无数身形庞大的巨人，普通人类的生命受到前所未有的威胁。为了保护自身安全，最后的人类筑起三座高墙：玛莉亚、露丝和希娜。人类迎来了长达一个世纪的和平岁月，却也让自己成为圈养在笼中的鸟儿，屈辱地失去自由。845年，高达60米的超大型巨人和铠之巨人登场， 摧毁了最外层的玛莉亚之壁，也惊醒了人类似乎永远不会苏醒的长梦。',
      cover: 'https://i2.wp.com/harurunblog.com/wp-content/uploads/2020/04/3%E6%9C%9F.jpg?fit=1920%2C1080&ssl=1',
      thumb: 'https://img2.animatetimes.com/2020/07/5f185c45ba3d2_0cacf2358b330882ccd397c7294fb190.jpg',
      path: '/series/jinjidejuren'
    } ]

  return (
    <Layout>
      <IndexContainer>
        <IndexBanner backgroundCover={ currentRecommend.cover }>
          <IndexRecommendList>
            {
              list.map(item =>
                <IndexRecommendItem
                  key={ item.id }
                  thumb={ item.thumb }
                  whileHover={ { cursor: 'pointer' } }
                  onHoverStart={ () => handleHoverItem(item) }
                />
              )
            }
          </IndexRecommendList>
        </IndexBanner>
      </IndexContainer>
    </Layout>
  )
}

export default IndexPage
