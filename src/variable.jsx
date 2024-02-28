
export const BASENDPOINT = 'https://bbp.api.rentmanager.com'
export const AuthorizeUser = '/Authentication/AuthorizeUser'
export const AuthorizeToken = '/Authentication/AuthorizeToken?token='
export const DeAuthorizeToken = '/Authentication/DeAuthorize?token='
export const PROXYSERVER = 'http://localhost:5020/?url=' 


// A3	percentage of rent collected that is a residential property filter by current month and by property id var	/Charges?filters=PropertyID,bt,(1%2C50);IsFullyAllocated,eq,true;TransactionDate,gt,2024-02-01T00%3A00%3A00;AccountType,eq,Customer;Unit.UnitTypeID,ni,(32%2C11%2C3%2C2%2C36%2C19%2C12%2C4)
// A4	percentage of rent collected that is a commercial property filter by current month and by property id var	/Charges?filters=PropertyID,bt,(1%2C50);IsFullyAllocated,eq,true;TransactionDate,gt,2024-02-01T00%3A00%3A00;AccountType,eq,Customer;Unit.UnitTypeID,in,(32%2C11%2C3%2C2%2C36%2C19%2C12%2C4)

// Amount