import _ from 'lodash'
import { createSelector } from 'reselect';

const getCosts = (state) => state.costRecords.records

const getCostsForMonth = (state) => {
  return _.filter(state.costRecords.records, ['date', state.costRecords.selectedMonth])
}

export const getAvailableMonths = createSelector(
  getCosts, (costs) => {
    let allDates = _.map(costs, 'date')
    console.log(_.uniq(allDates));
    return _.uniq(allDates)
  }
)

export const getUtilidades = createSelector(
  getCostsForMonth, (costs) => _.filter(costs, ['category', 'Utilidades'])
)

export const getComida = createSelector(
  getCostsForMonth, (costs) => _.filter(costs, ['category', 'Comida'])
)

export const getCarro = createSelector(
  getCostsForMonth, (costs) => _.filter(costs, ['category', 'Carro'])
)

export const getCasa = createSelector(
  getCostsForMonth, (costs) => _.filter(costs, ['category', 'Casa'])
)

export const getPersonal = createSelector(
  getCostsForMonth, (costs) => _.filter(costs, ['category', 'Personal'])
)

export const getFun = createSelector(
  getCostsForMonth, (costs) => _.filter(costs, ['category', 'Fun'])
)

export const getGata = createSelector(
  getCostsForMonth, (costs) => _.filter(costs, ['category', 'Gata'])
)

export const getTotalCost = createSelector(
  getCostsForMonth, (costs) => {
    let allCosts = _.map(costs, 'amount')
    return _.sum(allCosts.map(Number))
  }
)