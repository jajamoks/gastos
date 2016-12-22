import _ from 'lodash'
import { createSelector } from 'reselect';

const getAllCosts = (state) => state.costRecords.records

export const getUtilidades = createSelector(
  getAllCosts, (costs) => _.filter(costs, ['category', 'Utilidades'])
)

export const getComida = createSelector(
  getAllCosts, (costs) => _.filter(costs, ['category', 'Comida'])
)

export const getCarro = createSelector(
  getAllCosts, (costs) => _.filter(costs, ['category', 'Carro'])
)

export const getCasa = createSelector(
  getAllCosts, (costs) => _.filter(costs, ['category', 'Casa'])
)

export const getPersonal = createSelector(
  getAllCosts, (costs) => _.filter(costs, ['category', 'Personal'])
)

export const getFun = createSelector(
  getAllCosts, (costs) => _.filter(costs, ['category', 'Fun'])
)

export const getGata = createSelector(
  getAllCosts, (costs) => _.filter(costs, ['category', 'Gata'])
)