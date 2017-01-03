import _ from 'lodash'
import { createSelector } from 'reselect';

const getCostsForMonth = (state) => {
  const costs = _.map(state.costs, (val, uid) => {
    return { ...val, uid };
  })
  return costs
}

export const getUtilidades = createSelector(
  getCostsForMonth, (costs) => _.filter(costs, ['category', 'Utilidades'])
)

export const getComida = createSelector(
  getCostsForMonth, (costs) => _.filter(costs, ['category', 'Comida'])
)

export const getCarro = createSelector(
  getCostsForMonth, (costs) => _.filter(costs, ['category', 'Carro'])
)

export const getTrans = createSelector(
  getCostsForMonth, (costs) => _.filter(costs, ['category', 'Transporte'])
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

export const getUtilidadesTotal = createSelector(
  getUtilidades, (costs) => {
    return _.sum(_.map(costs, 'amount').map(Number))
  }
)

export const getComidaTotal = createSelector(
  getComida, (costs) => {
    return _.sum(_.map(costs, 'amount').map(Number))
  }
)

export const getCarroTotal = createSelector(
  getCarro, (costs) => {
    return _.sum(_.map(costs, 'amount').map(Number))
  }
)

export const getTransTotal = createSelector(
  getTrans, (costs) => {
    return _.sum(_.map(costs, 'amount').map(Number))
  }
)

export const getCasaTotal = createSelector(
  getCasa, (costs) => {
    return _.sum(_.map(costs, 'amount').map(Number))
  }
)

export const getPersonalTotal = createSelector(
  getPersonal, (costs) => {
    return _.sum(_.map(costs, 'amount').map(Number))
  }
)

export const getFunTotal = createSelector(
  getFun, (costs) => {
    return _.sum(_.map(costs, 'amount').map(Number))
  }
)

export const getGataTotal = createSelector(
  getGata, (costs) => {
    return _.sum(_.map(costs, 'amount').map(Number))
  }
)

export const getTotalCost = createSelector(
  getCostsForMonth, (costs) => {
    return _.sum(_.map(costs, 'amount').map(Number))
  }
)