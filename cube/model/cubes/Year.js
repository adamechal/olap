cube(`Year`, {
  sql_table: `vgsales.dim_year`,
  data_source: `default`,

  dimensions: {
    yearId: {
      sql: `year_id`,
      type: `number`,
      primaryKey: true
    },
    year: {
      sql: `year`,
      type: `number`
    },
    decade: {
      sql: `decade`,
      type: `string`
    }
  },

  measures: {
    count: {
      type: `count`
    }
  }
});
