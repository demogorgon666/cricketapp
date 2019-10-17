const express = require('express')
const router = express.Router()
const pg = require('pg-promise')()
const db = pg('postgres://postgres:root@localhost/cricketalpha')

router.get('/news', async (req, res) => {
  const news_result = await db.any('Select * from news')

  // converting the format of date while retrieving
  for (news of news_result) {
    var date = new Date(news.news_date)

    news.news_date = date.toLocaleDateString('en-IN', {
      weekday: 'short',
      month: 'long',
      day: '2-digit',
      year: 'numeric'
    })
  }
  // console.log(news_result);
  res.status(200).json({
    status: 200,
    data: news_result,
    message: 'Retrieved all news'
  })
  // console.log(news_result);
})

// fetching recent matches
router.get('/recentMatches', async (req, res) => {
  console.log('from api home recent matches')
  // query to fetch recent matches
  const recent_matches = await db.any('Select * from match')
  // console.log(recent_matches)

  res.status(200).json({
    status: 200,
    data: recent_matches,
    message: 'Retrieved recent matches'
  })
})
module.exports = router
