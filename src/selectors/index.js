import _ from 'lodash'
import { createSelector } from 'reselect';

const getCosts = (state) => state.costRecords.records

export const getAvailableMonths = createSelector(
  getCosts, (costs) => {
    let allDates = _.map(costs, 'date')
    console.log(_.uniq(allDates));
    return _.uniq(allDates)
  }
)

export const getUtilidades = createSelector(
  getCosts, (costs) => _.filter(costs, ['category', 'Utilidades'])
)

export const getComida = createSelector(
  getCosts, (costs) => _.filter(costs, ['category', 'Comida'])
)

export const getCarro = createSelector(
  getCosts, (costs) => _.filter(costs, ['category', 'Carro'])
)

export const getCasa = createSelector(
  getCosts, (costs) => _.filter(costs, ['category', 'Casa'])
)

export const getPersonal = createSelector(
  getCosts, (costs) => _.filter(costs, ['category', 'Personal'])
)

export const getFun = createSelector(
  getCosts, (costs) => _.filter(costs, ['category', 'Fun'])
)

export const getGata = createSelector(
  getCosts, (costs) => _.filter(costs, ['category', 'Gata'])
)

export const getTotalCost = createSelector(
  getCosts, (costs) => {
    let allCosts = _.map(costs, 'amount')
    return _.sum(allCosts.map(Number))
  }
)