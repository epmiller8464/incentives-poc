import {Float} from 'react-native/Libraries/Types/CodegenTypes'

type NA = 'NA'

type ProductTypes = 'CENTRAL_AC' | 'FURNACE' | 'ASHP'

type CompressorTypes = NA | 'INVERTER' | 'CONVENTIONAL'

type SystemType = NA | 'SPLIT' | 'PACKAGED'

type Jurisdictions = 'LOCAL' | 'FEDERAL' | 'UTILITY'

type Product = {
  name: String
  details: String
  productType: ProductTypes
  compressorType: CompressorTypes
  seer2: Float
  eer2: Float
}

type Incentive = {
  name: String
  sponsor: String
  jurisdiction: String
  locale: String
  qualified_product_type: ProductTypes
  compressorType: CompressorTypes
  seer2: Float
  eer2: Float
  maxValue: Float
}
type Utility = {}
type Address = {}
type ComfortAttributes = {}
type CustomerQualifications = {

  incomeLevel: Float
  utility: Utility
  address: Address
  comfortAttributes: ComfortAttributes
}

type ProductIncentiveMatch = {
  product: Product
  incentives: Incentive[]
}

/**
 * findLocalIncentives
 * search incentive db for local, federal, and utility incentives
 * @param customerInputs
 */
const findIncentives = async (customerInputs: CustomerQualifications): Promise<Incentive[]> => {
  return []
}


const findProductIncentives = async (
  customerInputs: CustomerQualifications,
  products: Product[],
  incentive: Incentive[]): Promise<ProductIncentiveMatch[]> => {

  const incentives: Incentive[] = await findIncentives(customerInputs)

  // match logic

  return []
}

/**
 * match a product with incentives it qualifies for.
 * @param product
 * @param localIncentives
 */
const productIncentiveMatch = (product:Product, localIncentives: Incentive[]):ProductIncentiveMatch => {

  return {
    incentives: [],
    product
  }
}
