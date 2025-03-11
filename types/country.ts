// This is a simplified type definition for the country data
// You may need to expand this based on the actual data structure

export interface Country {
  name: {
    common: string
    official: string
    nativeName?: {
      [key: string]: {
        official: string
        common: string
      }
    }
  }
  tld?: string[]
  cca2: string
  ccn3?: string
  cca3: string
  cioc?: string
  independent?: boolean
  status: string
  unMember: boolean
  currencies?: {
    [key: string]: {
      name: string
      symbol: string
    }
  }
  capital?: string[]
  altSpellings: string[]
  region: string
  subregion?: string
  languages?: {
    [key: string]: string
  }
  translations: {
    [key: string]: {
      official: string
      common: string
    }
  }
  latlng: number[]
  landlocked: boolean
  borders?: string[]
  area: number
  flag: string
  population: number
  flags: {
    png: string
    svg: string
    alt?: string
  }
}

