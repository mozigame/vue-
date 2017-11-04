import Vue from 'vue'
import Router from 'vue-router'

const Purchase = (resolve) => {
  import('components/purchase/purchase').then((module) => {
    resolve(module)
  })
}

const Shop = (resolve) => {
  import('components/shop/shop').then((module) => {
    resolve(module)
  })
}

const Find = (resolve) => {
  import('components/find/find').then((module) => {
    resolve(module)
  })
}

const My = (resolve) => {
  import('components/my/my').then((module) => {
    resolve(module)
  })
}

const BuyList = (resolve) => {
  import('components/buy-list/buy-list').then((module) => {
    resolve(module)
  })
}
const WithdrawalsList = (resolve) => {
  import('components/withdrawals-list/withdrawals-list').then((module) => {
    resolve(module)
  })
}
const ExchangeList = (resolve) => {
  import('components/exchange-list/exchange-list').then((module) => {
    resolve(module)
  })
}
const BusinessList = (resolve) => {
  import('components/business-list/business-list').then((module) => {
    resolve(module)
  })
}
const RankList = (resolve) => {
  import('components/rank-list/rank-list').then((module) => {
    resolve(module)
  })
}
const BankCard = (resolve) => {
  import('components/bank-card/bank-card').then((module) => {
    resolve(module)
  })
}
const Withdrawals = (resolve) => {
  import('components/withdrawals/withdrawals').then((module) => {
    resolve(module)
  })
}

const Recharge = (resolve) => {
  import('components/recharge/recharge').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/purchase'
    },
    {
      path: '/purchase',
      name: 'purchase',
      component: Purchase,
      children:[
        {
          path: 'exchange-list',
          component: ExchangeList
        },
      ]
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
    {
      path: '/my',
      name: 'my',
      component: My,
      children: [
        {
          path: 'buy-list',
          component: BuyList
        },
        {
          path: 'withdrawals-list',
          component: WithdrawalsList
        },
        {
          path: 'exchange-list',
          component: ExchangeList
        },
        {
          path:'business-list',
          component:BusinessList
        },
        {
          path:'rank-list',
          component:RankList
        },
        {
          path:'bank-card',
          component:BankCard
        },
        {
          path:'withdrawals',
          component:Withdrawals
        },
        {
          path:'recharge',
          component:Recharge
        }
      ]
    }
  ]
})
