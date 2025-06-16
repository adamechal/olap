cube(`Platform`, {
  sql_table: `vgsales.dim_platform`,
  data_source: `default`,

  dimensions: {
    platformId: {
      sql: `platform_id`,
      type: `number`,
      primaryKey: true
    },
    platform: {
      sql: `platform`,
      type: `string`
    }
  },

  measures: {
    count: {
      type: `count`
    }
  }
});
