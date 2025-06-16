cube(`Sales`, {
  sql_table: `vgsales.sales_fact`,
  data_source: `default`,

  joins: {
    Game: {
      sql: `${CUBE}.game_id = ${Game}.game_id`,
      relationship: `belongsTo`
    },
    Platform: {
      sql: `${CUBE}.platform_id = ${Platform}.platform_id`,
      relationship: `belongsTo`
    },
    Year: {
      sql: `${CUBE}.year_id = ${Year}.year_id`,
      relationship: `belongsTo`
    }
  },

  measures: {
    count: {
      type: `count`
    },
    naSales: {
      sql: `na_sales`,
      type: `sum`
    },
    euSales: {
      sql: `eu_sales`,
      type: `sum`
    },
    jpSales: {
      sql: `jp_sales`,
      type: `sum`
    },
    otherSales: {
      sql: `other_sales`,
      type: `sum`
    },
    globalSales: {
      sql: `global_sales`,
      type: `sum`
    },
    avgNaSales: {
      type: 'avg',
      sql: 'na_sales'
    },
    maxNaSales: {
      type: 'max',
      sql: 'na_sales'
    },
    minNaSales: {
      type: 'min',
      sql: 'na_sales'
    },
    naEuRatio: {
      type: 'number',
      sql: `SUM(na_sales) / NULLIF(SUM(eu_sales), 0)`,
      format: 'percent'
    }
  },

  dimensions: {
    id: {
      sql: `id`,
      type: `number`,
      primaryKey: true
    },
    gameId: {
      sql: `game_id`,
      type: `number`
    },
    platformId: {
      sql: `platform_id`,
      type: `number`
    },
    yearId: {
      sql: `year_id`,
      type: `number`
    }
  }
});
