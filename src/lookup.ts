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


/**
 * findProductIncentives
 * @param customerInputs
 * @param products
 */
const findProductIncentives = async (
  customerInputs: CustomerQualifications,
  products: Product[]): Promise<ProductIncentiveMatch[]> => {

  const incentives: Incentive[] = await findIncentives(customerInputs)

  let matches : ProductIncentiveMatch[] = []
  // match logic
  for (const product of products) {

    const match = matchProductIncentives(product,incentives)
    matches.push (match)
  }
  return matches
}

/**
 * match a product with incentives it qualifies for.
 * @param product
 * @param localIncentives
 */
const matchProductIncentives = (product: Product, localIncentives: Incentive[]): ProductIncentiveMatch => {

  const qualifiedIncentives = []
  for (const incentive of localIncentives) {

    const qualifies = product.seer2 >= incentive.seer2 && product.eer2 === incentive.eer2 && (product.compressorType === incentive.compressorType)
    if (qualifies)
      qualifiedIncentives.push(incentive)
  }

  return {
    incentives: qualifiedIncentives,
    product,
  }
}
