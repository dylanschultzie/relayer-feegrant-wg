import prometheus from 'prom-client';
import sqlite3 from 'sqlite3';
import moment from 'moment/moment.js';

import metrics from './metrics.js';

const register = prometheus.register;
const db = new sqlite3.Database('./relayerMetrics.db', sqlite3.OPEN_READONLY);

// Register Prometheus Gauges
Object.values(metrics).forEach(metric => {
  register.registerMetric(metric);
});

// Function to update metrics
export async function updateAllMetrics() {
  let lastBlockTime;
  try {
    const lastBlockRow = await db.get("SELECT MAX(block_time) as last_block_time FROM last_block");
    lastBlockTime = lastBlockRow.last_block_time;
  } catch (err) {
    console.error('[ERR] Error fetching last block time', err.message);
    return;
  }

  // Calculate 'yesterday' based on lastBlockTime
  const lastBlockMoment = moment(lastBlockTime);
  const yesterday = lastBlockMoment.subtract(24, 'hours').format('YYYY-MM-DD HH:mm:ss');

  // Update granteeTotalTxs
  db.all("SELECT relayer_address, COUNT(*) as tx_count FROM relayer_transactions GROUP BY relayer_address", [], (err, rows) => {
    if (err) {
      console.error('[ERR] Error running query', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.granteeTotalTxsGauge.labels(row.relayer_address).set(row.tx_count);
    });
  });

  // Update granteeTotalTxs24h
  db.all(`SELECT relayer_address, COUNT(*) as tx_count FROM relayer_transactions WHERE block_time > ? GROUP BY relayer_address`, [yesterday], (err, rows) => {
    if (err) {
      console.error('[ERR] Error running query', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.granteeTotalTxs24hGauge.labels(row.relayer_address).set(row.tx_count);
    });
  });

  // Update granteeAvgGasWanted
  db.all("SELECT relayer_address, AVG(gas_wanted) as avg_gas_wanted FROM relayer_transactions GROUP BY relayer_address", [], (err, rows) => {
    if (err) {
      console.error('[ERR] Error running query', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.granteeAvgGasWantedGauge.labels(row.relayer_address).set(row.avg_gas_wanted);
    });
  });

  // Update granteeAvgGasWanted24h
  db.all(`SELECT relayer_address, AVG(gas_wanted) as avg_gas_wanted FROM relayer_transactions WHERE block_time > ? GROUP BY relayer_address`, [yesterday], (err, rows) => {
    if (err) {
      console.error('[ERR] Error running query', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.granteeAvgGasWanted24hGauge.labels(row.relayer_address).set(row.avg_gas_wanted);
    });
  });

  // Update granteeMaxGasWanted
  db.all("SELECT relayer_address, MAX(gas_wanted) as top_gas_wanted FROM relayer_transactions GROUP BY relayer_address", [], (err, rows) => {
    if (err) {
      console.error('[ERR] Error running query', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.granteeMaxGasWantedGauge.labels(row.relayer_address).set(row.top_gas_wanted);
    });
  });

  // Update granteeMaxGasWanted24h
  db.all(`SELECT relayer_address, MAX(gas_wanted) as top_gas_wanted FROM relayer_transactions WHERE block_time > ? GROUP BY relayer_address`, [yesterday], (err, rows) => {
    if (err) {
      console.error('[ERR] Error running query', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.granteeMaxGasWanted24hGauge.labels(row.relayer_address).set(row.top_gas_wanted);
    });
  });

  // Update granteeAvgGasUsed
  db.all("SELECT relayer_address, AVG(gas_used) as avg_gas_used FROM relayer_transactions GROUP BY relayer_address", [], (err, rows) => {
    if (err) {
      console.error('[ERR] Error running query', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.granteeAvgGasUsedGauge.labels(row.relayer_address).set(row.avg_gas_used);
    });
  });

  // Update granteeAvgGasUsed24h
  db.all(`SELECT relayer_address, AVG(gas_used) as avg_gas_used FROM relayer_transactions WHERE block_time > ? GROUP BY relayer_address`, [yesterday], (err, rows) => {
    if (err) {
      console.error('[ERR] Error running query', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.granteeAvgGasUsed24hGauge.labels(row.relayer_address).set(row.avg_gas_used);
    });
  });

  // Update granteeMaxGasUsed
  db.all("SELECT relayer_address, MAX(gas_used) as top_gas_used FROM relayer_transactions GROUP BY relayer_address", [], (err, rows) => {
    if (err) {
      console.error('[ERR] Error running query', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.granteeMaxGasUsedGauge.labels(row.relayer_address).set(row.top_gas_used);
    });
  });

  // Update granteeMaxGasUsed24h
  db.all(`SELECT relayer_address, MAX(gas_used) as top_gas_used FROM relayer_transactions WHERE block_time > ? GROUP BY relayer_address`, [yesterday], (err, rows) => {
    if (err) {
      console.error('[ERR] Error running query', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.granteeMaxGasUsed24hGauge.labels(row.relayer_address).set(row.top_gas_used);
    });
  });

  // Update granteeAvgFeeSpent
  db.all("SELECT relayer_address, AVG(fee_amount) as avg_fee_spent FROM relayer_transactions GROUP BY relayer_address", [], (err, rows) => {
    if (err) {
      console.error('[ERR] Error running query', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.granteeAvgFeeSpentGauge.labels(row.relayer_address).set(row.avg_fee_spent);
    });
  });

  // Update granteeAvgFeeSpent24h
  db.all(`SELECT relayer_address, AVG(fee_amount) as avg_fee_spent FROM relayer_transactions WHERE block_time > ? GROUP BY relayer_address`, [yesterday], (err, rows) => {
    if (err) {
      console.error('[ERR] Error running query', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.granteeAvgFeeSpent24hGauge.labels(row.relayer_address).set(row.avg_fee_spent);
    });
  });

  // Update granteeMaxFeeSpent
  db.all("SELECT relayer_address, MAX(fee_amount) as top_fee_spent FROM relayer_transactions GROUP BY relayer_address", [], (err, rows) => {
    if (err) {
      console.error('[ERR] Error running query', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.granteeMaxFeeSpentGauge.labels(row.relayer_address).set(row.top_fee_spent);
    });
  });

  // Update granteeMaxFeeSpent24h
  db.all(`SELECT relayer_address, MAX(fee_amount) as top_fee_spent FROM relayer_transactions WHERE block_time > ? GROUP BY relayer_address`, [yesterday], (err, rows) => {
    if (err) {
      console.error('[ERR] Error running query', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.granteeMaxFeeSpent24hGauge.labels(row.relayer_address).set(row.top_fee_spent);
    });
  });

  // Update avgGasWantedGauge
  db.all("SELECT AVG(gas_wanted) as avg_gas_wanted FROM relayer_transactions", [], (err, rows) => {
    if (err) {
      console.error('[ERR] Error running query', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.avgGasWantedGauge.set(row.avg_gas_wanted);
    });
  });

  // Update avgGasWanted24hGauge
  db.all("SELECT AVG(gas_wanted) as avg_gas_wanted FROM relayer_transactions WHERE block_time > ?", [yesterday], (err, rows) => {
    if (err) {
      console.error('[ERR] Error running query', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.avgGasWanted24hGauge.set(row.avg_gas_wanted);
    });
  });

  // Update totalGasWantedGauge
  db.all("SELECT SUM(gas_wanted) as total_gas_wanted FROM relayer_transactions", [], (err, rows) => {
    if (err) {
      console.error('[ERR] Error running query', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.totalGasWantedGauge.set(row.total_gas_wanted);
    });
  });

  // Update totalGasWanted24hGauge
  db.all("SELECT SUM(gas_wanted) as total_gas_wanted FROM relayer_transactions WHERE block_time > ?", [yesterday], (err, rows) => {
    if (err) {
      console.error('[ERR] Error running query', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.totalGasWanted24hGauge.set(row.total_gas_wanted);
    });
  });

  // Update avgGasUsedGauge
  db.all("SELECT AVG(gas_used) as avg_gas_used FROM relayer_transactions", [], (err, rows) => {
    if (err) {
      console.error('[ERR] Error running query', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.avgGasUsedGauge.set(row.avg_gas_used);
    });
  });

  // Update avgGasUsed24hGauge
  db.all("SELECT AVG(gas_used) as avg_gas_used FROM relayer_transactions WHERE block_time > ?", [yesterday], (err, rows) => {
    if (err) {
      console.error('[ERR] Error running query', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.avgGasUsed24hGauge.set(row.avg_gas_used);
    });
  });

  // Update totalGasUsedGauge
  db.all("SELECT SUM(gas_used) as total_gas_used FROM relayer_transactions", [], (err, rows) => {
    if (err) {
      console.error('[ERR] Error running query', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.totalGasUsedGauge.set(row.total_gas_used);
    });
  });

  // Update totalGasUsed24hGauge
  db.all("SELECT SUM(gas_used) as total_gas_used FROM relayer_transactions WHERE block_time > ?", [yesterday], (err, rows) => {
    if (err) {
      console.error('[ERR] Error running query', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.totalGasUsed24hGauge.set(row.total_gas_used);
    });
  });

  // Update avgFeeSpentGauge
  db.all("SELECT AVG(fee_amount) as avg_fee_spent FROM relayer_transactions", [], (err, rows) => {
    if (err) {
      console.error('[ERR] Error running query', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.avgFeeSpentGauge.set(row.avg_fee_spent);
    });
  });

  // Update avgFeeSpent24hGauge
  db.all("SELECT AVG(fee_amount) as avg_fee_spent FROM relayer_transactions WHERE block_time > ?", [yesterday], (err, rows) => {
    if (err) {
      console.error('[ERR] Error running query', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.avgFeeSpent24hGauge.set(row.avg_fee_spent);
    });
  });

  // Update totalFeeSpentGauge
  db.all("SELECT SUM(fee_amount) as total_fee_spent FROM relayer_transactions", [], (err, rows) => {
    if (err) {
      console.error('[ERR] Error running query', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.totalFeeSpentGauge.set(row.total_fee_spent);
    });
  });

  // Update totalFeeSpent24hGauge
  db.all("SELECT SUM(fee_amount) as total_fee_spent FROM relayer_transactions WHERE block_time > ?", [yesterday], (err, rows) => {
    if (err) {
      console.error('[ERR] Error running query', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.totalFeeSpent24hGauge.set(row.total_fee_spent);
    });
  });

  // Update totalTxsGauge
  db.all("SELECT COUNT(*) as total_txs FROM relayer_transactions", [], (err, rows) => {
    if (err) {
      console.error('[ERR] Error running query', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.totalTxsGauge.set(row.total_txs);
    });
  });

  // Update totalTxs24hGauge
  db.all("SELECT COUNT(*) as total_txs FROM relayer_transactions WHERE block_time > ?", [yesterday], (err, rows) => {
    if (err) {
      console.error('[ERR] Error running query', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.totalTxsGauge.set(row.total_txs);
    });
  });

  // Initialize granteeTotalMisbehaviourTxs to 0 for all grantees
  db.all("SELECT DISTINCT relayer_address FROM relayer_transactions", [], (err, rows) => {
    if (err) {
      console.error('[ERR] Error fetching grantees', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.granteeTotalMisbehaviourTxs.labels(row.relayer_address, "").set(0);
    });
  });

  // Update granteeLastGasWantedGauge, granteeLastGasUsedGauge, granteeLastFeeSpentGauge
  db.each("SELECT relayer_address, gas_wanted, gas_used, fee_amount FROM relayer_transactions GROUP BY relayer_address ORDER BY block_time DESC", [], (err, row) => {
      if (err) {
          console.error('[ERR] Error running query for last metrics', err.message);
          return;
      }
      metrics.granteeLastGasWantedGauge.labels(row.relayer_address).set(row.gas_wanted);
      metrics.granteeLastGasUsedGauge.labels(row.relayer_address).set(row.gas_used);
      metrics.granteeLastFeeSpentGauge.labels(row.relayer_address).set(row.fee_amount);
  });

  // Update granteeLastGasWantedGauge, granteeLastGasUsedGauge, granteeLastFeeSpentGauge
  db.each("SELECT relayer_address, gas_wanted, gas_used, fee_amount FROM relayer_transactions GROUP BY relayer_address ORDER BY block_time DESC", [], (err, row) => {
    if (err) {
        console.error('[ERR] Error running query for last metrics', err.message);
        return;
    }
    metrics.granteeLastGasWantedGauge.labels(row.relayer_address).set(row.gas_wanted);
    metrics.granteeLastGasUsedGauge.labels(row.relayer_address).set(row.gas_used);
    metrics.granteeLastFeeSpentGauge.labels(row.relayer_address).set(row.fee_amount);
  });

  // Update granteeTotalMisbehaviourTxs with actual misbehaviours
  db.all("SELECT grantee_address, COUNT(*) as misbehaviour_count, GROUP_CONCAT(msg_array) as msg_array FROM grantee_misbehaviors GROUP BY grantee_address", [], (err, rows) => {
    if (err) {
      console.error('[ERR] Error running query for misbehaviours', err.message);
      return;
    }
    rows.forEach((row) => {
      metrics.granteeTotalMisbehaviourTxs.labels(row.grantee_address, row.msg_array).set(row.misbehaviour_count);
    });
  });

  // Update total top3 message types for each grantee
  processMessageTypesForGauge(metrics.granteeTopMsgTypesTotalGauge);

  // Update last 24h top3 message types for each grantee
  processMessageTypesForGauge(metrics.granteeTopMsgTypes24hGauge, yesterday);

  return register;
}

function processMessageTypesForGauge(gauge, yesterday = null) {
  const timeCondition = yesterday ? `WHERE block_time > '${yesterday}'` : '';
  const sql = `SELECT relayer_address, msg_array FROM relayer_transactions ${timeCondition}`;
  db.all(sql, [], (err, rows) => {
      if (err) {
          console.error(`[ERR] Error running query for msg types ${yesterday ? '24h' : 'total'}`, err.message);
          return;
      }

      let messageTypeCounts = {};
      rows.forEach(row => {
          const msgTypes = JSON.parse(row.msg_array);
          msgTypes.forEach(msgType => {
              if (!messageTypeCounts[row.relayer_address]) {
                  messageTypeCounts[row.relayer_address] = {};
              }
              if (!messageTypeCounts[row.relayer_address][msgType]) {
                  messageTypeCounts[row.relayer_address][msgType] = 0;
              }
              messageTypeCounts[row.relayer_address][msgType]++;
          });
      });

      updateGaugeWithTop3(gauge, messageTypeCounts);
  });
}

function updateGaugeWithTop3(gauge, messageTypeCounts) {
  Object.entries(messageTypeCounts).forEach(([relayer_address, msgCounts]) => {
      const sortedMsgTypes = Object.entries(msgCounts).sort((a, b) => b[1] - a[1]).slice(0, 3);
      sortedMsgTypes.forEach(([msgType, count], index) => {
          gauge.labels(relayer_address, msgType).set(count);
      });
  });
}
process.on('exit', () => {
  db.close((err) => {
      if (err) {
          console.error('[ERR] ' + err.message);
      }
      console.log('[INFO] Close the database read connection.');
  });
});