
export const BASENDPOINT = 'https://bbp.api.rentmanager.com'
export const AuthorizeUser = '/Authentication/AuthorizeUser'
export const AuthorizeToken = '/Authentication/AuthorizeToken?token='
export const DeAuthorizeToken = '/Authentication/DeAuthorize?token='
export const PROXYSERVER = 'http://localhost:5020/?url=' 


export const EP_Boar1Card1_A1  = `/Tenants?filters=PropertyID,bt,(1%2C18);OpenBalance,bt,(1%2C999)&fields=LastNameFirstName,OpenBalance,PropertyID`
// A button that when pressed displays a grid with the property name from the dropdown box, the last name first name,open balence.




export const EP_Boar1Card1_A3  = `/Tenants?filters=PropertyID,bt,(1%2C18);OpenBalance,bt,(1%2C999)&fields=LastNameFirstName,OpenBalance,PropertyID`
// total amount tenants open balances under 1000

export const EP_Boar1Card1_A4  = `/Tenants?filters=PropertyID,bt,(1%2C18);OpenBalance,bt,(1%2C999)&fields=LastNameFirstName,OpenBalance,PropertyID`
// Average open balence under 1000

export const EP_Boar1Card1_B1  = `/Tenants?filters=PropertyID,bt,(1%2C18);OpenBalance,bt,(1000%2C10000)&fields=LastNameFirstName,OpenBalance,PropertyID`
// A button that when pressed  displays a grid with the property name from the dropdown box, the last name first name,open balence

export const EP_Boar1Card1_B2  = `/Tenants?filters=PropertyID,bt,(1%2C18);OpenBalance,bt,(1000%2C10000)&fields=LastNameFirstName,OpenBalance,PropertyID`
// the total amount of tenants that have open balances bet 1000-10000 the property id will be selected in a dropdown box.

export const EP_Boar1Card1_B3  = `/Tenants?filters=PropertyID,bt,(1%2C18);OpenBalance,bt,(1000%2C10000)&fields=LastNameFirstName,OpenBalance,PropertyID`
// Average open balance bet 1000-10000

export const EP_Boar1Card1_B4  = `/Tenants?filters=PropertyID,bt,(1%2C18);OpenBalance,bt,(1000%2C10000)&fields=LastNameFirstName,OpenBalance,PropertyID`
// Average open balence under 1000

export const EP_Boar1Card1_C1  = `/Tenants?filters=PropertyID,bt,(1%2C18);OpenBalance,gt,10000&fields=LastNameFirstName,OpenBalance,PropertyID`
// A button that when pressed  displays a grid with the property name from the dropdown box, the last name first name,open balence

export const EP_Boar1Card1_C2  = `/Tenants?filters=PropertyID,bt,(1%2C18);OpenBalance,gt,10000&fields=LastNameFirstName,OpenBalance,PropertyID`
// the total amount of tenants that have open balances over 10000 the property id will be selected in a dropdown box.

export const EP_Boar1Card1_C3  = `/Tenants?filters=PropertyID,bt,(1%2C18);OpenBalance,gt,10000&fields=LastNameFirstName,OpenBalance,PropertyID`
// total amount tenants open balances over 10000

export const EP_Boar1Card1_C4  = `/Tenants?filters=PropertyID,bt,(1%2C18);OpenBalance,gt,10000&fields=LastNameFirstName,OpenBalance,PropertyID`
// Average open balance over 10000

export const EP_Boar1Card1_D1  = `/Tenants/HistoryCalls?filters=HistoryDate,gt,2024-02-16T11%3A24%3A00;Tenant.PropertyID,bt,(0%2C40)`
// total calls made that week to tenants that owe money. filter by building,

export const EP_Boar1Card1_D2  = ``
// 

export const EP_Boar1Card1_D3  = `/Tenants?filters=OpenBalance,ne,0;PropertyID,eq,4&fields=LastNameFirstName,OpenBalance,PropertyID`
// total amount of tennant that have  OPEN balences the property id will be selected in a dropdown box.  



// # X-RM12Api-ApiToken: f1IDEWO5HOv2YA7PVt2IZbIC296gYvJ9extrR-_BHoFzXVQ-Ty-VuNQe1jyXatD1agSWFx88Kb9Pa9Vxd-lS_vJ7DI88vktTzBQjmn-fuAo=

		











