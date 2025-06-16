cube(`Game`, {
  sql_table: `vgsales.dim_game`,
  data_source: `default`,

  dimensions: {
    gameId: {
      sql: `game_id`,
      type: `number`,
      primaryKey: true
    },
    name: {
      sql: `name`,
      type: `string`
    },
    genre: {
      sql: `genre`,
      type: `string`
    },
    publisher: {
      sql: `publisher`,
      type: `string`
    }
  },

  measures: {
    count: {
      type: `count`
    }
  }
});
