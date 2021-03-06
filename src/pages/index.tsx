import React, { useState } from 'react'
import { PageProps } from 'gatsby'
import { AnimatePresence } from 'framer-motion'
// icons
import { RiAddLine, RiArrowRightLine, RiGooglePlayLine } from 'react-icons/ri'
// styled components
import Layout from '../components/layout'
import {
  Banner,
  BannerCover,
  BannerDesc,
  BannerDescAlias,
  BannerDescButton,
  BannerDescButtons,
  BannerDescInfo,
  BannerDescName,
  BannerDescOther,
  BannerDescOtherItem,
  BannerDescOtherItemLabel,
  BannerDescOtherItemText,
  BannerList,
  BannerListItem,
  Updated,
  UpdatedItem,
  UpdatedMore
} from '../styles/pages'
import { Flex, Page } from '../styles/global'

interface IBannerItem {
  id: number
  rate: string
  name: string
  year: number
  location: string
  alias: string
  desc: string
  cover: string
  thumb: string
  slide: string
  path: string
}

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [ .6, -.05, .01, .9 ]
    }
  }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: .1
    }
  }
}

const IndexPage: React.FC<PageProps> = () => {
  const [ currentRecommend, setCurrentRecommend ] = useState<IBannerItem>({
    id: 0,
    rate: '9.4',
    year: 2021,
    location: 'japanese',
    name: '进击的巨人 最终季',
    alias: '進撃の巨人 The Final Season',
    desc: '曾几何时，世界上突然出现无数身形庞大的巨人，普通人类的生命受到前所未有的威胁。为了保护自身安全，最后的人类筑起三座高墙：玛莉亚、露丝和希娜。人类迎来了长达一个世纪的和平岁月，却也让自己成为圈养在笼中的鸟儿，屈辱地失去自由。845年，高达60米的超大型巨人和铠之巨人登场， 摧毁了最外层的玛莉亚之壁，也惊醒了人类似乎永远不会苏醒的长梦。',
    cover: require('../assets/images/jinji.jpg'),
    thumb: require('../assets/images/index/jinji.jpg'),
    path: '/series/jinjidejuren',
    slide: 'https://static.cnbetacdn.com/article/2020/0924/eda7176f85eae18.png'
  })

  const handleHoverItem = (item: IBannerItem) => {
    setCurrentRecommend(item)
  }

  const list: IBannerItem[] = [
    {
      id: 0,
      rate: '9.4',
      year: 2021,
      location: 'japanese',
      name: '进击的巨人 最终季',
      alias: '進撃の巨人 The Final Season',
      desc: '曾几何时，世界上突然出现无数身形庞大的巨人，普通人类的生命受到前所未有的威胁。为了保护自身安全，最后的人类筑起三座高墙：玛莉亚、露丝和希娜。人类迎来了长达一个世纪的和平岁月，却也让自己成为圈养在笼中的鸟儿，屈辱地失去自由。845年，高达60米的超大型巨人和铠之巨人登场， 摧毁了最外层的玛莉亚之壁，也惊醒了人类似乎永远不会苏醒的长梦。',
      cover: require('../assets/images/jinji.jpg'),
      thumb: require('../assets/images/index/jinji.jpg'),
      path: '/series/jinjidejuren',
      slide: 'https://static.cnbetacdn.com/article/2020/0924/eda7176f85eae18.png'
    }, {
      id: 1,
      rate: '8.7',
      year: 2020,
      location: 'japanese',
      name: '鬼灭之刃',
      alias: '鬼滅の刃',
      desc: '日本大正时期，那是一个吃人的恶鬼横行的世界，一名家人被鬼杀死，妹妹也变成了鬼的主人公炭治郎，在猎鬼人的指引下，成为了鬼猎人组织“鬼杀队”的一员，为了让妹妹祢豆子变回人类，为了讨伐杀害家人的恶鬼，为了斩断悲伤的连锁而展开了战斗。',
      cover: 'https://snsplanet.com/wp-content/uploads/2020/11/kimetsuyaiba_pc.jpg',
      thumb: 'https://kimetsu.com/anime/risshihen/ogp.jpg',
      path: '/series/jinjidejuren',
      slide: 'https://travel.willer.co.jp/static/img/campaign/kimetsu/main.jpg'
    }, {
      id: 2,
      rate: '9.2',
      year: 2021,
      location: 'japanese',
      name: '某科学的超电磁炮 T',
      alias: 'とある科学の超電磁砲T',
      desc: '有 230 万人口，其中八成人口为学生的「学园都市」，是比其他地区科技更为先进，并从事「超能力开发」的特殊地区。而整座学园都市中仅有七人的等级 5 超能力者之一御坂美琴，由于她的能力与个性使然，因而被卷入了学园都市中所发生的种种事件......',
      cover: 'https://cs1.anime.dmkt-sp.jp/anime_kv/img/23/15/0/23150_1_d2.jpg?1575955853000',
      thumb: 'http://bbs.orzice.com/data/attachment/forum/portal/202003/07/6e5296b9.jpg',
      path: '/series/jinjidejuren',
      slide: 'https://s.mxtv.jp/bangumilist2/img_20200927235331760_3158516294866912290.jpg'
    }, {
      id: 3,
      rate: '8.3',
      year: 2020,
      location: 'japanese',
      name: 'Re：从零开始的异世界生活 第二季',
      alias: 'Re:ゼロから始める異世界生活 2nd season',
      desc: '曾几何时，世界上突然出现无数身形庞大的巨人，普通人类的生命受到前所未有的威胁。为了保护自身安全，最后的人类筑起三座高墙：玛莉亚、露丝和希娜。人类迎来了长达一个世纪的和平岁月，却也让自己成为圈养在笼中的鸟儿，屈辱地失去自由。845年，高达60米的超大型巨人和铠之巨人登场， 摧毁了最外层的玛莉亚之壁，也惊醒了人类似乎永远不会苏醒的长梦。',
      cover: 'https://cs1.anime.dmkt-sp.jp/anime_kv/img/24/02/4/24024_1_d2.jpg?1608107405000',
      thumb: 'https://fukumenkei-noise.jp/wp-content/uploads/2020/11/Re-%E3%82%BB%E3%82%99%E3%83%AD%E3%81%8B%E3%82%89%E5%A7%8B%E3%82%81%E3%82%8B%E7%95%B0%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB-2nd-season.png',
      path: '/series/jinjidejuren',
      slide: 'https://ogre.natalie.mu/media/news/comic/2020/1210/re-zero_2nd_visual2.jpg?imwidth=750'
    }, {
      id: 4,
      year: 2020,
      rate: ' 7.6',
      location: 'japanese',
      name: '异度侵入',
      alias: 'イド：インヴェイデッド ID:INVADED',
      desc: '曾几何时，世界上突然出现无数身形庞大的巨人，普通人类的生命受到前所未有的威胁。为了保护自身安全，最后的人类筑起三座高墙：玛莉亚、露丝和希娜。人类迎来了长达一个世纪的和平岁月，却也让自己成为圈养在笼中的鸟儿，屈辱地失去自由。845年，高达60米的超大型巨人和铠之巨人登场， 摧毁了最外层的玛莉亚之壁，也惊醒了人类似乎永远不会苏醒的长梦。',
      cover: 'https://cs1.anime.dmkt-sp.jp/anime_kv/img/23/17/3/23173_1_d2.jpg?1576474339000',
      thumb: 'https://www.bs11.jp/anime/img/%E3%82%A4%E3%83%89_HP.gif',
      path: '/series/jinjidejuren',
      slide: 'https://spice.eplus.jp/images/wyqeZcGAe83Z8qJst7MRDgVHSwmSEH7cZ4lZ5Ad9wYilXcsJMnX8SyTmD8kvsyHP'
    }, {
      id: 5,
      rate: '8.6',
      year: 2020,
      location: 'japanese',
      name: '排球少年 第四季',
      alias: 'ハイキュー!! TO THE TOP',
      desc: '曾几何时，世界上突然出现无数身形庞大的巨人，普通人类的生命受到前所未有的威胁。为了保护自身安全，最后的人类筑起三座高墙：玛莉亚、露丝和希娜。人类迎来了长达一个世纪的和平岁月，却也让自己成为圈养在笼中的鸟儿，屈辱地失去自由。845年，高达60米的超大型巨人和铠之巨人登场， 摧毁了最外层的玛莉亚之壁，也惊醒了人类似乎永远不会苏醒的长梦。',
      cover: 'https://prtimes.jp/i/33412/17/ogp/d33412-17-168568-0.jpg',
      thumb: 'https://www.mbs.jp/haikyu/images/bgz2.jpg',
      path: '/series/jinjidejuren',
      slide: 'https://www.production-ig.co.jp/works/haikyu-4th/images/keyvisual.jpg?02'
    }, {
      id: 6,
      year: 2019,
      rate: '9.0',
      location: 'japanese',
      name: '我的青春恋爱物语果然有问题 第三季 完',
      alias: 'やはり俺の青春ラブコメはまちがっている。完',
      desc: '曾几何时，世界上突然出现无数身形庞大的巨人，普通人类的生命受到前所未有的威胁。为了保护自身安全，最后的人类筑起三座高墙：玛莉亚、露丝和希娜。人类迎来了长达一个世纪的和平岁月，却也让自己成为圈养在笼中的鸟儿，屈辱地失去自由。845年，高达60米的超大型巨人和铠之巨人登场， 摧毁了最外层的玛莉亚之壁，也惊醒了人类似乎永远不会苏醒的长梦。',
      cover: 'https://i2.wp.com/harurunblog.com/wp-content/uploads/2020/04/3%E6%9C%9F.jpg?fit=1920%2C1080&ssl=1',
      thumb: 'https://img2.animatetimes.com/2020/07/5f185c45ba3d2_0cacf2358b330882ccd397c7294fb190.jpg',
      path: '/series/jinjidejuren',
      slide: 'https://prtimes.jp/i/16756/1919/resize/d16756-1919-279909-0.jpg'
    } ]

  return (
    <Layout>
      <Page initial="initial" animate="animate">
        <AnimatePresence exitBeforeEnter>
          <BannerCover
            cover={ currentRecommend.cover }
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            exit={ { opacity: 0 } }
            transition={ {
              duration: .1,
              ease: 'easeInOut'
            } }
            key={ currentRecommend.id }
          >
          </BannerCover>
        </AnimatePresence>
        <Banner>
          <BannerDesc
            variants={ stagger }
            key={ currentRecommend.id }
          >
            <BannerDescInfo variants={ fadeInUp }>
              { currentRecommend.location } / { currentRecommend.year } • series
            </BannerDescInfo>
            <BannerDescAlias variants={ fadeInUp }>{ currentRecommend.alias }</BannerDescAlias>
            <BannerDescName variants={ fadeInUp }>{ currentRecommend.name }</BannerDescName>
            <BannerDescOther variants={ fadeInUp }>
              <BannerDescOtherItem>
                <BannerDescOtherItemLabel>IMDb</BannerDescOtherItemLabel>
                <BannerDescOtherItemText>{ currentRecommend.rate }</BannerDescOtherItemText>
              </BannerDescOtherItem>
              <BannerDescOtherItem>
                <BannerDescOtherItemLabel>SEASON 4</BannerDescOtherItemLabel>
                <BannerDescOtherItemText>24</BannerDescOtherItemText>
              </BannerDescOtherItem>
            </BannerDescOther>
            <BannerDescButtons variants={ fadeInUp }>
              <BannerDescButton buttonType='solid'>
                <RiGooglePlayLine />
                watch now
              </BannerDescButton>
              <BannerDescButton buttonType='outlined'>
                <RiAddLine />
                watch list
              </BannerDescButton>
            </BannerDescButtons>
          </BannerDesc>
          <BannerList variants={ stagger }>
            {
              list.map(item =>
                <BannerListItem
                  variants={ fadeInUp }
                  key={ item.id }
                  thumb={ item.thumb }
                  whileHover={ {
                    cursor: 'pointer',
                    scale: 1.1
                  } }
                  onHoverStart={ () => handleHoverItem(item) }
                />
              )
            }
          </BannerList>
        </Banner>
        <Updated>
          <Flex spaceBetween mb={ 32 }>
            <div>recently updated</div>
            <UpdatedMore>
              more
              <RiArrowRightLine />
            </UpdatedMore>
          </Flex>
          <Flex>
            {
              list.map(item =>
                <UpdatedItem cover={ item.slide } key={ item.cover }>

                </UpdatedItem>
              )
            }
          </Flex>
        </Updated>
      </Page>
    </Layout>
  )
}

export default IndexPage
